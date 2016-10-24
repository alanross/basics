https://code.tutsplus.com/tutorials/restful-api-design-with-nodejs-restify--cms-22637

Mongo:
https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/

Install:
$: npm install

Run DB:
$: mongod --dbpath ./data

Run Server:
$: MONGO_URL=mongodb://localhost:27017/my_db_name node server.js

or to restart node on any live code changes install/use nodemon
$: MONGO_URL=mongodb://localhost:27017/my_db_name nodemon server.js