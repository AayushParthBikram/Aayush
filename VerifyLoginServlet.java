package com.example.myproject;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Base64;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;


public class VerifyLoginServlet extends HttpServlet {
    private static final long serialVersionUID = 123456789L;
    private static final String DB_URL = "jdbc:mysql://localhost:3306/sql_demo";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "@Akj123456";

    static {
        try {
            // Load the MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = null;
        String password = null;
        String gender = null;
        byte[] uploadedImageBytes = null;

        // Create a factory for disk-based file items
        FileItemFactory factory = new DiskFileItemFactory();

        // Create a new file upload handler
        ServletFileUpload upload = new ServletFileUpload(factory);

        try {
            // Parse the request to get file items
            List<FileItem> items = upload.parseRequest(request);

            // Process the file items
            for (FileItem item : items) {
                if (item.isFormField()) {
                    // Handle regular form fields
                    String fieldName = item.getFieldName();
                    String fieldValue = item.getString();

                    if (fieldName.equals("username")) {
                        username = fieldValue;
                    } else if (fieldName.equals("password")) {
                        password = fieldValue;
                    } else if (fieldName.equals("gender")) {
                        gender = fieldValue;
                    }
                } else {
                    // Handle file upload (image)
                    uploadedImageBytes = item.get();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.setContentType("text/html");
            response.getWriter().println("<h2>Error: Failed to process the request.</h2>");
            return;
        }

        // Validate username and password
        if (username != null && !username.isEmpty() && password != null && !password.isEmpty()) {
            try {
                Connection c = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
                String sql = "SELECT username, password, gender, image FROM user_data WHERE username = ?";
                PreparedStatement pstmt = c.prepareStatement(sql);
                pstmt.setString(1, username);
                ResultSet rs = pstmt.executeQuery();

                if (rs.next()) {
                    String storedUsername = rs.getString("username");
                    String storedPassword = rs.getString("password");
                    String storedGender = rs.getString("gender");
                    byte[] storedImageBytes = rs.getBytes("image");

                    if (password.equals(storedPassword) && gender.equals(storedGender)
                            && compareImage(uploadedImageBytes, storedImageBytes)) {
                        // Verification successful
                        HttpSession session = request.getSession();
                        session.setAttribute("username", username);
                        session.setAttribute("gender", gender);
                        session.setAttribute("image", storedImageBytes);

                        response.sendRedirect("userInfo");
                    } else {
                        // Verification failed
                        response.setContentType("text/html");
                        response.getWriter().println("<h2>Login failed. Invalid credentials or image.</h2>");
                    }
                } else {
                    // User not found
                    response.setContentType("text/html");
                    response.getWriter().println("<h2>Login failed. User not found.</h2>");
                }

                rs.close();
                pstmt.close();
                c.close();
            } catch (Exception e) {
                e.printStackTrace();
                response.setContentType("text/html");
                response.getWriter().println("<h2>Error: Failed to connect to the database.</h2>");
            }
        } else {
            // Username or password not provided
            response.setContentType("text/html");
            response.getWriter().println("<h2>Login failed. Please provide username and password.</h2>");
        }
    }

    private boolean compareImage(byte[] uploadedImageBytes, byte[] storedImageBytes) {
        return uploadedImageBytes.length == storedImageBytes.length;
    }
}
