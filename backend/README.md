# Login and Leaderboard

##Overview

Create React.js or Vue.js application that models a simple portal with Login functionality and Leaderboard embedded. 
Application should be done using Typescript regardless of framework.

##Login

https://monosnap.com/file/atsqLLZrHtTCAxfZMNZGuMFgbgVply

Login allows a user to log in only if the user is registered.
The necessary functionality should be achieved using the concept of React-Router (Vue Router), React-Redux (Vue Router), 
and Javascript's localStorage API.

* A user can log in to the portal upon entering valid username and password
* Clicking the Login Button and after success request user must be redirected to the Leaderboard
* CLicking Login button displays an error message if the username and password doesn't exist

## Register

https://monosnap.com/file/9CPGhzO6NYAxEIy648mcqe2WCJS2Dl

* User can create new account using the register button.
* User must provide username and password for registration
* After successfully created account - user must see success message and redirected to Login page


# Leaderboard Overview

https://monosnap.com/file/90x2g6qQzP4Ju8YLTcSJKRSqxi4LVg 

After user log-in or create account and log-in - he can access the Leaderboard application that sorts the data based on various parameters.
Model the implementation after the instructions below. For fetching data - API request has to be made to the end-point described at the end of the document. 
All manipulations with data inside the browser have to be done without a server, only using Redux-Store or Vue-Store. 
Clicking on one user should show one user page with all information inside.

Each user on the leaderboard is represented by the following fields:
* `Rank`: The actual rank of the user on the leaderboard.
* `Points`: The reward points that the user has gained over time.
* `Name`: A string representing the name of the user.
* `Age`: An integer representing the age of the user.

Upon click on the button above the table, the table should sort itself in ascending/descending order based on the parameter specified by the button click.

* Clicking the Rank button sorts the table in ascending order based on the rank of each user.
* Similarly, clicking the Points, Age, and Name button, sort the leaderboard accordingly.
* Second Click on the button should sort in descending order  
* Table header must show by arrow up/down in which direction each column is sorted now
* It should be possible to sort by several fields at the same time
* Table must support in-memory pagination functionality

# General

* It must be possible to refresh the page without losing information about current user;
* After log-in server returns JWT token which must be attached to all following Leaderboard requests in `Authorisation` header;
* In case of receiving 401 HTTP error - user must see the error message and be redirected to Login page;
* Error/success messaging must be implemented as Toast component and be re-used across pages; 

# Backend

Simple Node.js backend server is provided. To run server:
* Run npm install
* Run node index.js

Each server restart **wipes all sign-up data**.
Use these API specifications to interact with the data:

* POST - `/users/sign-up` - end-point to create users. Accepts JSON with login and password keys. Newly created user stored in-memory.
* POST - `/users/login` - end-point to log-in with user account. Accepts JSON with login and password keys
* GET - `/users/leaderboard` - returns leaderboard list of users

## NICE TO HAVE
* Tests ;
* Comments explaining certain decisions if required;
* All necessary or relevant information are in README.MD file;

## WHAT WOULD BE CHECKED
* Usage of framework-specific techniques
* Architecture of components and reusability of components
* Usage of central state management of SPA, error handling, etc.
* Clean implementations, performance, and maintainability;
* Current JS techniques and features (ES6, async/await etc.)
* Production-ready code;

