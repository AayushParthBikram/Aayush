package util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    private  static  final String DB_URL = "jdbc:mysql://localhost:3306/university";
    private static  final  String USER = "root";

    private static final String PASS = "@Akj123456";

    // Method to get a connection to the database
    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(DB_URL, USER, PASS);
    }
}
