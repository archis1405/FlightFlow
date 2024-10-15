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

      - Once you have added the db config as list ed above , go to the src folder from terminaal nd execute
        `npx sequelize db:create`

        and then execute 
        `npx sequelize db:migrate`
      

## DB Design
    - AirPlane Table
    - Flight Table
    - Airport Table 
    - City 

    - A flight belongs to an Airplane but one Airplane can be used in multiple flights
    - A city can haave multiple airports but one airport belongs to a city
    - One Airport cn have many flights , but  flight can lnd in only one airport

## Flights Table 


