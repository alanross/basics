# Node Token Authentication

## Install:
$: npm install

## Run DB:
$: mongod --dbpath ./data

## Run Server:
$: MONGO_URL=mongodb://localhost:27017/my_db_name JWT_SECRET=secret node server.js

or to restart node on any live code changes install/use nodemon

$: MONGO_URL=mongodb://localhost:27017/my_db_name JWT_SECRET=secret nodemon server.js

## Usage
Create sample user by visiting: `http://localhost:3000/setup`

Once everything is set up, we can begin to use our app by creating and verifying tokens.

### Getting a Token


### Verifying a Token and Listing Users

Send a `GET` request to `http://localhost:3000/api/users` with a header parameter of `x-access-token` and the token.

You can also send the token as a URL parameter: `http://localhost:3000/api/users?token=YOUR_TOKEN_HERE`

Or you can send the token as a POST parameter of `token`.
