# ConnectVerse
A project to demonstrate login and signup using react, node and mysql


## Brief Information
This is a multi-project application. It has client and server as seperate project which can be run on different server. Authentication is implemented using JWT token.

 <!-- **node, react and mysql** as an external dependency.  -->

#### To Install Dependencies (_Considering node is already on system_)

* Server
    * ` npm install express mysql2 bcryptjs jsonwebtoken dotenv cors `
* Client
    * ` npm install axios react react-dom react-router-dom react-scripts styled-components web-vitals `

This process can be achieved while setting up project

#### To Run Project
_Assuming both client and server is on seperate system. If not will require two different command line interface_
<br>
**Before running configure CORS in .env file**

* Server
    * ` npm start `
* Client
    * ` npm start `


#### Process
1. Initialy a Login and Signup tab will be shown.
   * We will register by providing info on **Signup** tab.
   * On successful, will redirect to login tab.
2. Login if user exists.
   * User will be authenticated on verification and a JWT token will be assigned.
   * On success, user will be redirected to dummy **Home** page.
   * If failed, message for wrong credential.

## Preview

<a href="https://drive.google.com/file/d/12_cBkZfdROsga8Hjlr2nV55x6XabhS-3/view?usp=drive_link"><img src="https://drive.google.com/uc?export=view&id=12_cBkZfdROsga8Hjlr2nV55x6XabhS-3" style="width: 800px; max-width: 100%; height: auto" title="LoginTab" />

<br />
<a href="https://drive.google.com/file/d/1O4MjaVOdGT7OmkK7GR6YLeOiox4IYD3l/view?usp=drive_link"><img src="https://drive.google.com/uc?export=view&id=1O4MjaVOdGT7OmkK7GR6YLeOiox4IYD3l" style="width: 800px; max-width: 100%; height: auto" title="Authenticate" />

<br />
<a href="https://drive.google.com/file/d/19WiXO6_YPfHkadmiFq58jiwgWjlKGCOW/view?usp=drive_link"><img src="https://drive.google.com/uc?export=view&id=19WiXO6_YPfHkadmiFq58jiwgWjlKGCOW" style="width: 800px; max-width: 100%; height: auto" title="DummyHomePage" />

<br />
<a href="https://drive.google.com/file/d/1DwypzzlxjKeYvoUr2cq9R2yVAYZR0rdA/view?usp=drive_link"><img src="https://drive.google.com/uc?export=view&id=1DwypzzlxjKeYvoUr2cq9R2yVAYZR0rdA" style="width: 800px; max-width: 100%; height: auto" title="RegisterTab" />

<br />
<a href="https://drive.google.com/file/d/1BHVHpZXMswZhpAFrgxVOpukFCksbcXqk/view?usp=drive_link"><img src="https://drive.google.com/uc?export=view&id=1BHVHpZXMswZhpAFrgxVOpukFCksbcXqk" style="width: 800px; max-width: 100%; height: auto" title="SigningUp" />

