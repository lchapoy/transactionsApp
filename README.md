# transactionsApp
###Description
Transaction App using React, Redux and Node, that allow the user to create a new account
or login into an existing one, tracking the transaction history of each user, allowing them
to change the currency of all the transaction by the actual currency for each specific date
of the transaction history.

Also allow the user to get the current currenty rate and to get exchange amount into another currency
***
The currencies are obtained using the API that belong to https://openexchangerates.org/, in order to get the
API working, we need to create and account, the free acount is going to allow us to make certain
number of request per day. The API look something similar to this 
https://openexchangerates.org/api/latest.json?app_id=ApiKey, where ApiKey need to be replaced
with the unique key that openexchangerates is going to give you, when creating an account

In order to use your unique key with the app  you need to change the actual key inside the file `Server/config/currencyAPI.js`
then change the value of the property `app_id`
***
###Using the App
#####Download Repository
#####Install Client Dependencies
1. Using CLI go to the project main folder
2. run command: `npm install`
#####Install Server Dependencies
1. Using CLI go to the project server folder
2. run command: `npm install`
#####Open MongoDB shell
1. If you don't have mongoDB already installed, install it
2. If you have already installed mongoDB then just go to `program Files/mongoDB/Server/3.2/bin/mongod.exe`
**Note**:could be something else than 3.2 depending on your mongoDB version.

#####Run App

######Run Client
1. Go to the main project folder inside the CLI
2. run command `npm start`

######Run Server
1. Open another Shell
2. Go to the server folder inside the CLI
3. run command `node server.js`


