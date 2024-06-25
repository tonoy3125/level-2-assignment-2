# Assignment 2 - Product Management Backend Application
***

### Description
***

This project is a backend application built using Node.js, Express, and TypeScript. It utilizes Mongoose for MongoDB interactions, CORS for cross-origin resource sharing, and Zod for schema validation. This README file will guide you on how to set up and run this application locally.

### Required !!!
***

Before you begin, ensure you have met the following requirements:

- **Node.js (v14 or higher)**
- **npm (v6 or higher)**
- **MongoDB (either local or remote instance)**

### Installation
***

1. Clone the repository:

```
git clone <repository-url>
cd level-2-assignment-2
```

2. Install dependencies:

```
npm install
```

3. Create a .env file in the root of your project:

```
touch .env
```

Add the necessary environment variables to the .env file. For example:

```
DB_URL=mongodb://localhost:27017/mydatabase
PORT=5000
```

### Running the Application
***

#### In Development Mode

To run the application in development mode with hot-reloading:

```
npm run start:dev
```
