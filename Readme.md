# Project related information

- The frontend is powered by angular
- The backend is powered by nodejs
- The database server is powered by mysql

# How to find the respective folders

1. The frontend code is in imdb folder
2. The backend code is in server folder
3. The database (mysql) script is in database folder
4. The postman tests are in postman_tests folder

# Softwares required

1. Nodejs (>=8)
2. MySQL

### small note

setup the database server first then the backend and last the frontend. If this order is not maintained then you may get unexpected results.

#Setup guide

## Database setup

1. Start a mysql server (I used xampp on windows)
2. Load phpmyadmin or any other interface from where you can import SQL dump
3. Find the SQL dump in database folder called deltax.sql
4. Create a table named deltax
5. Import this SQL dump to phpmyadmin or the interface of your choice after selecting deltax
6. Make a note of the database name (deltax), your mysql username and password. We will need this later

## Backend setup

1. Move into the server folder
2. Edit the file `config/default.json` and edit the mysql configurations with the config in the last step of database setup guide.
3. Type the command `npm install`
4. Type `npm start`

Thats it, the server should start now

## Frontend setup

1. Move into the imdb folder
2. Type `npm install`
3. Type `npm start`
