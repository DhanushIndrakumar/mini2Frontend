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

 ![image](https://github.com/user-attachments/assets/33dc07af-548d-4bfb-b4b7-79c007dbebab)
+ We can see the API Documentation at

```bash
    http://localhost:8082/swagger-ui/index.html#/
```
+ we need to first execute the register and login user APIs for the other APIs to work.


**5. Exploring the Api to insert or create User(patient) in the database**

+ The register and Login API does not require any authentication as it forms the base for the user details being stored in the database and then authenticated when they attempt to login. 

+ The request body of the API with the response body is shown below:

![image](https://github.com/user-attachments/assets/c4dd45f2-830d-4290-a42c-98986da0b4c2)

**6. JWT generation using Login API**

+ Api works in OpenApi documentation as well.The image below shows the request and the response body of the Login Api.

![image](https://github.com/user-attachments/assets/cff77088-f0e8-4864-bcec-7b0ca52324de)

+ As seen in the above image JWT is being generated using which other APIs can be accessed without which 403 error will be shown.

**7. Testing the API to book the appointment without inserting token in the header**

![image](https://github.com/user-attachments/assets/6c8121c5-d6aa-44ab-846f-12a127c44e33)

+ It can be seen that without being authenticated the user cannot access other APIs which performs operations such as Booking,Cancelling appointments etc.

**8. Testing the API to retrive User(Customer) details with inserting JWT in the header**

![Capture5](https://github.com/DhanushIndrakumar/Sunbase/assets/111871670/93af5701-7196-4b93-a565-b58322a0e52d)

+ It can be seen that once the user/pateint is authenticated the user can access other APIs which performs operations such as Booking,Cancelling appointments etc.

+ The same works for all other APIs .JWT forms the most important aspect in any security systems.
