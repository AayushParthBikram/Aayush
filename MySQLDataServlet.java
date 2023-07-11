package com.example.myproject;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Base64;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

@WebServlet("/myservlet/userForm")
@MultipartConfig(fileSizeThreshold = 1024 * 1024 * 10, // 10 MB 
                 maxFileSize = 1024 * 1024 * 50, // 50 MB
                 maxRequestSize = 1024 * 1024 * 100) // 100 MB
public class MySQLDataServlet extends HttpServlet {
    private static final long serialVersionUID = 1234567L;
    private static final String DB_URL = "jdbc:mysql://localhost:3306/sql_demo";
    private static final String DB_User = "root";
    private static final String DB_Password = "@Akj123456";

    static {
        try {
            // Load the MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = null;
        String password = null;
        String gender = null;
        InputStream imageStream = null;

        // Check if the request is multipart/form-data
        if (ServletFileUpload.isMultipartContent(request)) {
            // Create a factory for disk-based file items
            FileItemFactory factory = new DiskFileItemFactory();

            // Create a new file upload handler
            ServletFileUpload upload = new ServletFileUpload(factory);

            try {
                // Parse the request to get file items
                @SuppressWarnings("unchecked")
                java.util.List<FileItem> items = upload.parseRequest(request);

                // Process the uploaded items
                for (FileItem item : items) {
                    if (item.isFormField()) {
                        // Process regular form field
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
                        // Process file upload
                        imageStream = item.getInputStream();
                    }
                }
            } catch (Exception ex) {
                ex.printStackTrace();
                response.setContentType("text/html");
                response.getWriter().println("<h2>Error: Failed to process file upload.</h2>");
                return;
            }
        } else {
            response.setContentType("text/html");
            response.getWriter().println("<h2>Error: Invalid form submission.</h2>");
            return;
        }

        // Validate username
        if (username != null && !username.isEmpty()) {
            try {
                Connection c = DriverManager.getConnection(DB_URL, DB_User, DB_Password);
                String sql = "INSERT INTO user_data (username, password, gender, image) VALUES (?, ?, ?, ?)";
                try {
                    PreparedStatement pstmt = c.prepareStatement(sql);
                    pstmt.setString(1, username);
                    pstmt.setString(2, password);
                    pstmt.setString(3, gender);
                    pstmt.setBlob(4, imageStream);
                    pstmt.executeUpdate();
                } catch (Exception ex) {
                    ex.printStackTrace();
                    response.setContentType("text/html");
                    response.getWriter().println("<h2>Error: Failed to submit data.</h2>");
                } finally {
                    c.close();
                }

                response.setContentType("text/html");
                response.getWriter().println("<h2>Data has been successfully submitted!!</h2>");
            } catch (Exception ex) {
                ex.printStackTrace();
                response.setContentType("text/html");
                response.getWriter().println("<h2>Error: Failed to connect to the database.</h2>");
            }
        } else {
            response.setContentType("text/html");
            response.getWriter().println("<h2>Error: Username is required.</h2>");
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            Connection c = DriverManager.getConnection(DB_URL, DB_User, DB_Password);
            String sql = "SELECT username, password, gender, image FROM user_data";
            PreparedStatement pstmt = c.prepareStatement(sql);
            ResultSet rs = pstmt.executeQuery();

            response.setContentType("text/html");
            response.getWriter().println("<h2>User Data:</h2>");
            response.getWriter().println("<table border='1'>");
            response.getWriter().println("<tr><th>Username</th><th>Password</th><th>Gender</th><th>Image</th></tr>");

            while (rs.next()) {
                String username = rs.getString("username");
                String password = rs.getString("password");
                String gender = rs.getString("gender");
                byte[] imageBytes = rs.getBytes("image");

                response.getWriter().println("<tr>");
                response.getWriter().println("<td>" + username + "</td>");
                response.getWriter().println("<td>" + password + "</td>");
                response.getWriter().println("<td>" + gender + "</td>");

                if (imageBytes != null && imageBytes.length > 0) {
                    // Process and display the image as needed
                    String imageBase64 = java.util.Base64.getEncoder().encodeToString(imageBytes);
                    response.getWriter().println("<td><img src='data:image/jpg;base64," + imageBase64 + "'/></td>");
                    response.getWriter().println("<td>No Image</td>");
                }

                response.getWriter().println("</tr>");
            }

            response.getWriter().println("</table>");

            rs.close();
            pstmt.close();
            c.close();
        } catch (Exception ex) {
            ex.printStackTrace();
            response.setContentType("text/html");
            response.getWriter().println("<h2>Error: Failed to retrieve data from the database.</h2>");
        }
    }
}
