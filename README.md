# E-commerce Report API

Below is some high level detail about the project. Good luck!

## Language & Tools

- [NodeJS](https://nodejs.org/en/) - compatible with any version between v12 and v19
- [NPM](https://www.npmjs.com/) - as a package manager
- [Express](https://expressjs.com/) - server-side framework

### Server

To run the server, follow these steps:

1. Install dependencies

```bash
npm install
```

2. Start the server

```bash
npm start
```

# Verify That Everything Is Set Up Correctly

You can use cURL or a tool like [Postman](https://www.postman.com/) to test the API.

You can use a tool for view the database state like [SQLiteBrowser](https://sqlitebrowser.org/dl/) to check your queries result and the data seeded.

#### Example Curl Commands

In its current state, the starting code's `topCustomers` route will return the entire seed data of the `customer` table. You can test it with the following curl command.

``` bash
curl --location 'http://localhost:8080/api/reports/topCustomers?qty=3'
```

You can also check the `stockWarning` route response by using the next curl command. The API will return a unique mocked product.

``` bash
curl --location 'http://localhost:8080/api/reports/stockWarning'
``` 

### Useful commands

Seed: If you modify data on the local database, you can use this command to roll back the database to the starting point. 
```bash
npm run seed
```

Lint: You can use this for linting the code with `eslint`
```bash
npm run lint-fix
```
