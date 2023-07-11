package com.example.myproject;

import java.io.IOException;
import java.util.Base64;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class UserInfoServlet extends HttpServlet {
    private static final long serialVersionUID = 123456789L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session = request.getSession();
        String username = (String) session.getAttribute("username");
        String gender = (String) session.getAttribute("gender");
        byte[] imageBytes = (byte[]) session.getAttribute("image");

        if (username != null && gender != null && imageBytes != null) {
            response.setContentType("text/html");
            response.getWriter().println("<!DOCTYPE html>");
            response.getWriter().println("<html>");
            response.getWriter().println("<head>");
            response.getWriter().println("<meta charset=\"UTF-8\">");
            response.getWriter().println("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
            response.getWriter().println("<title>User Information</title>");
            response.getWriter().println("</head>");
            response.getWriter().println("<body>");
            response.getWriter().println("<h2>Login successful!</h2>");

            // Display user data
            response.getWriter().println("<h3>User Information:</h3>");
            response.getWriter().println("<p>Username: " + username + "</p>");
            response.getWriter().println("<p>Gender: " + gender + "</p>");

            // Display user image
            if (imageBytes.length > 0) {
                String base64Image = Base64.getEncoder().encodeToString(imageBytes);
                response.getWriter().println("<img src='data:image/jpeg;base64," + base64Image + "'/>");
            }

            response.getWriter().println("</body>");
            response.getWriter().println("</html>");
        } else {
            response.setContentType("text/html");
            response.getWriter().println("<!DOCTYPE html>");
            response.getWriter().println("<html>");
            response.getWriter().println("<head>");
            response.getWriter().println("<meta charset=\"UTF-8\">");
            response.getWriter().println("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
            response.getWriter().println("<title>User Information</title>");
            response.getWriter().println("</head>");
            response.getWriter().println("<body>");
            response.getWriter().println("<h2>User data not found.</h2>");
            response.getWriter().println("</body>");
            response.getWriter().println("</html>");
        }
    }
}


