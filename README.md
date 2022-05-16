# Next.js OpenJira App

* To run locally we need a database. To launch database run the following command:

```
    docker-compose up -d

```

* MongoDB Local URL:

```
    mongodb://localhost:27017/entriesdb
```

## Configure env variables

Renombrar el archivo __.env.example__ to __.env__

## Fill database with test data

```
    http://localhost:3000/api/seed
```