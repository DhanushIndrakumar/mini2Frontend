# mini2Frontend
This is the repository consisting the frontend part of minor project 2
Kindly consider only the mini2Frontend Folder for the project, there has been a mistake by uploading the other files as well.

#Requirements

1. Java >= java 8

2. Maven - 3.x.x

3. Mysql - 5.x.x

4. lombok

5. VsCode

6. React App

7. IntelliJIdea

## Steps to Setup

**1. Clone the application**

```bash
git clone https://github.com/DhanushIndrakumar/mini2Frontend.git
git clone https://github.com/DhanushIndrakumar/mini2Backend.git
```
**2. Key points of the application**

+ The Backend files and Frontend files for the application are in 2 different folders .

+ The Frontend was done using React app through VSCode.

+ The Backend was implemented using Spring Boot through IntellijIdea.

+ There have been 2 different repos for frontend and backend files.


**3. Run the Backend application**

+ open `mini2Backend/demo/src/main/resources/application.properties`

+ change `spring.datasource.username` and `spring.datasource.password` as per your mysql installation

+ after changing both the username and password as per your mysql installation
  
+ we can run it from NetBeans or intellij IDEA.

+ The app will start running at http://localhost:8082/**
  
+ Since the port is set to localhost:8082 and the user is free to change the port if they wish.

**4. Explore Rest APIs**

+ Once the backend is working. Developer can go through the OpenApi documentation as it gives more understanding and working of the APIs.

 ![Capture](https://github.com/DhanushIndrakumar/Sunbase/assets/111871670/8d61a020-e1d0-423f-8148-3b61fb6c3406)

+ We can see the API Documentation at

```bash
    http://localhost:8082/swagger-ui/index.html#/
```
+ we need to first execute the register and login user APIs for the other APIs to work.
