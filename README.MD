# Mongo Database Setup

## Steps

1. Clone this repository:

```
git clone https://github.com/jeanpaulvandeursen/mongo.git
```

2. Create environment file *.env* containing the following values:

```
MONGO_DB=<Database Name>
MONGO_DB_USER=<Database User>
MONGO_DB_PASSWORD=<Database Password>
MONGO_DATA_FOLDER=<Local Database Storage Location>
MONGO_INIT_SCRIPT=<Init Javascripts, for example init-mongo.js>
```

3. Create the Mongo Init Javascript containing the following values:

```
db.createUser(
    {
        user    : "<Database User>",
        pwd     : "<Database Password>",
        roles   : [
            {
                role    : "readWrite",
                db      : "<Database Name>"
            }
        ]
    }
)
```

4. Start the database

```
./gomongo.sh
``` 
