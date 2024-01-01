# GraphQL Demo Project

## Description

Write code for GraphQL-based API that authenticates a user and then provides appropriate authorization. Implement all the layers from the API layer to the database. Use pnpm for your project and jest for adding tests

## Node and PNPM version

![Static Badge](https://img.shields.io/badge/node-v20_10_0-blue?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fnode%2Fv%2F20_10_0) 

![Static Badge](https://img.shields.io/badge/pnpm-v8_13_1-blue?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fpnpm%2Fv%2F8_13_1) 

<!-- [![Node.js Version](https://img.shields.io/badge/node-%3E%3D12-brightgreen.svg)](https://nodejs.org/)
[![PNPM Version](https://img.shields.io/badge/pnpm-%3E%3D5-brightgreen.svg)](https://pnpm.io/) -->


## 1. Getting started

### 1.1 Requirements

Before starting, make sure you have at least those components on your workstation:

- An up-to-date release of [NodeJS](https://nodejs.org/) NPM and PNPM
- A database such as MariaDB or MySQL.


### 1.2 Project configuration

Start by cloning this project on your workstation.

``` sh
git clone https://gitlab.com/shrikant.ace/sr-engineer-backend.git
```

The next thing will be to install all the dependencies of the project.

```sh
cd ./sr-engineer-backend
pnpm install
```

Once the dependencies are installed, you can now configure your project by creating a new `.env` file containing your environment variables used for development.

```
cp .env.sample .env
vi .env
```


### 1.3 Launch and discover

You are now ready to launch the NestJS application using the command below.

```sh
# Launch the development server with TSNode
pnpm run start
```

 
### 1.4 API Access

When the application is running, you can go to the below URL to access the Swagger API Playground. 
```sh
http://localhost:3000/docs 
```

## 2. GraphQL


When the application is running, you can go to the below URL to access the GraphQL Playground. 
```sh
http://localhost:3000/graphql
```

To create new user, enter the below schema to query field and then press run to execute this.

```sh
mutation {
  signup(loginuserinput: {
    username: "shrikant_ace",
    password: "enter-secure",
    email: "test@test.com"
  }) {
    id
    username
     
  }
}
```

For login, enter the below schema to query field and then press run to execute this.

```sh
mutation {
  login(loginuserinput: {
    username: "shrikant_ace",
    password: "enter-secure"
  }) {
    access_token
    user {     
      id
      username      
    }
  }
}
```

## 3. Default PNPM commands

The PNPM commands below are already included with this template and can be used to quickly run, build and test your project.

```sh
# Start the application using the transpiled NodeJS
pnpm run start

# Run the application using "ts-node"
pnpm run dev

# Transpile the TypeScript files
pnpm run build

# Run the project' functional tests
pnpm run test

```

## 4. Project goals

The goal of this project is to provide a clean and up-to-date "starter pack" for REST API projects that are built with NestJS.

