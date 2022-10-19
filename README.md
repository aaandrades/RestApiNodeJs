## :rocket: Rest API with NodeJs and MongoDb

![aaandrades](https://img.shields.io/badge/-Backend-blue)
![Build](https://img.shields.io/badge/-Working-brightgreen)

### :memo: Description
A Rest API build with Typescript implementing a CRUD in MongoDB. You will find special topics like security, enviroments, unit testing and more.

### :sparkles: Features
- JWT authentication.
- CRUD operations.
- Handle Enviroments
- Encrypted Password (Hash one-way)

### :alembic: Core Concepts
- Typescript (Interfaces, typed, imports, etc)
- API REST HTTP
- Security (JWT, Private Secrets)
- Non-relational Database
- MVC 
- Enviromental Concepts

### :construction: Made with
- Typescript
- NodeJs
- Express
- MongoDB
- JWT (Does not expire)
- mongoose-unique-validator
- bcrypt
- mLab - MongoAtlas

### :hammer: Demostration
This is a Public API hosted in Heroku (The first call will take around 30s because the cold start). This is the endpoint: https://rest-api-node-h8c0.onrender.com/.

Login
``` 
curl --location --request POST 'https://restapi-in-nodejs.herokuapp.com/login' \
--header 'Authorization;' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'email=correofalso1@gmail.com' \
--data-urlencode 'password=123123' 
```
Create user
```
curl --location --request POST 'https://restapi-in-nodejs.herokuapp.com/users' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'name=Andrés Andrade' \
--data-urlencode 'email=correofalso6@gmail.com' \
--data-urlencode 'google=true' \
--data-urlencode 'role=USER_ROLE' \
--data-urlencode 'password=123456'
```
Obtain All Users
```
curl --location --request GET 'https://restapi-in-nodejs.herokuapp.com/users' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJVU0VSX1JPTEUiLCJzdGF0ZSI6dHJ1ZSwiZ29vZ2xlIjpmYWxzZSwiX2lkIjoiNjBiNWFiZWFjNmNhMzMwMDA0YTRmNTQ4IiwibmFtZSI6IkdlbmVyaWMgVGVzdCIsImVtYWlsIjoiY29ycmVvZmFsc28xQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJHRRTkV4WndtYUtPTXRhdHAzOFBRR3VkWXp4dERoaHdORWVXQlFKZkkyNlJmSGNZT211eDhhIiwiX192IjowfSwiaWF0IjoxNjM0MjQxMjc4fQ.43Pmv0Pwij6sbQx9iyqM8hybc7dQKxTQPimTHdnTaGY'
```

Update User
```
curl --location --request PUT 'https://restapi-in-nodejs.herokuapp.com/users/60b5acfac6ca330004a4f549' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJVU0VSX1JPTEUiLCJzdGF0ZSI6dHJ1ZSwiZ29vZ2xlIjpmYWxzZSwiX2lkIjoiNjBiNWFjZmFjNmNhMzMwMDA0YTRmNTQ5IiwibmFtZSI6IkdlbmVyaWMgVGVzdCIsImVtYWlsIjoiY29ycmVvZmFsc280QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDVjRG4zRzRKMUgwOTVXYU5CQ1k0THVuZzg2Qm9KeEkzWEtxRXozRVdWc0hGLjJrSUlxT25tIiwiX192IjowfSwiaWF0IjoxNjM0MTcwNzI0fQ.N-GEfYNDIfEvqtNLerOL0jSDCEiqg3hYlNlXy_jaSEU' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'name=user item' \
--data-urlencode 'password=123123'
```
The delete methods you can see inside the code (Just for avoid delete users information).

### :bulb: Run the App
To Run the app locally, clone the repository and execute ```npm install``` and ```npm run dev```.

*If you want to contribute to improve the project, please create your PR and write me :speech_balloon: . After it, sit down and take a beer, you deserve it!* :beers: .
*This project is for academic purposes only, all right reserved. Andrés Andrade 2022 :copyright::registered:*
