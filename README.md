# How it works
This implementation works with nestjs connected to a mongodb database running as a replica set. The database transactions are carried out with prisma as a orm.
# Getting started
To run locally make sure there is an .env file in the root folder. Import Insomnia.json file to Insomnia REST API tester. 
## Installation

```bash
$ npm install
```
## Running the app
In a different console
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
```
Env values
DATABASE_URL=mongodb+srv://rigelhernandez2013:97xng6CLgJaUfM9Q@hdmf-cluster0.h4usmyf.mongodb.net/hdmf
SECRET=9d067067a0691c4e547e0fa8fadcea8bb932d90724875bffeab2d16ac3be2374
```

## Creating Mongodb Cluster
```
https://www.mongodb.com/basics/clusters/mongodb-cluster-setup
```
