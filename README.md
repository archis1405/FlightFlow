# Welcome to Flight Services

## Project Setup
    - clone the whole repo
    - Execute `npm install`on the root directory of the downloaded project
    -  Create `.env` file in the root directory amd add the following environment variables
        -`PORT = 3000`
    - Inside the  src/config folder create a new file 'config.json' and then add the following piece 
      of json code
      {
        "development": {
            "username": <Your_DB_Login_Name>,
            "password": "<YOUR_DB_PASSWORD>",
            "database": "Flights_Serch_DB_DEV",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
      }

