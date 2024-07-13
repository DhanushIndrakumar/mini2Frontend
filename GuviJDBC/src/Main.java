

import java.sql.*;//import package

public class Main {
    public static void main(String[] args) throws SQLException {

        String url="jdbc:mysql://localhost:3306"; //not mentioning the db name here
        String uname="root";
        String pass="dhanush@123";
        try {
            Connection con = DriverManager.getConnection(url, uname, pass); //create connection

            if(con!=null){
                System.out.println("Connection successful");
            }else{
                System.out.println("Connection not successful");

            }


            //Write our sql query
            String createDB = "create database guvijdbc";
            String use = "Use guvijdbc";
            String createTable = "create table emptable(empcode int ,empname varchar(50),  )";
            String insert = """
                    insert into emptable values
                    (101,"Aline",100),
                    (102,"Joy",200),
                    (103,"Toy",300),
                    (104,"Tanam",400),
                    """;

            //create db query
            statement.execute(createDB);

            statement.execeute(createTable);

            statement.execute(insert);

            ResultSet rs = statement.executeQuery(select);
            System.out.println("**********************************");
            while (rs.next()) {
                //print the object
                System.out.println(rs.getInt("empcode")+" "+
                        rs.getString("empname")+" "+
                        rs.getFloat("empsalary"));

            }

        }catch(Exception e){

        }

    }
}