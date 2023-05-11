# How it works
This implementation works with nestjs connected to a mongodb database running as a replica set. The database transactions are carried out with prisma as a orm.
# Getting started
To run locally make sure there is an .env file. Import Insomnia.json file to Insomnia REST API tester. 
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

