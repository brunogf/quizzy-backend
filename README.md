# quizzy-backend
[![Build Status](https://travis-ci.org/guillermoap/quizzy-backend.svg?branch=master)](https://travis-ci.org/guillermoap/quizzy-backend)

Backend repository for the Quizzy Project. PIS 2017 Facultad de Ingeniería, UdelaR.

## Getting Started
Clone the repo:
```
git clone https://github.com/guillermoap/quizzy-backend.git
```
Access folder:
```
cd quizzy-backend
```
### Installing

Install dependencies:
```
npm install
```
Populate the database (mongoDB must be running):
```
npm run populate
```
This will keep running, Ctrl+C to shut it down.

Run the server:
```
npm run start
```
Access http://localhost:3000/users. It should return this:
```
{
   "users": [
      {
         "id": "599f03008a83764ba03a8bbe",
         "email": "ga@pis.com",
         "pass": "12345678"
      },
      {
         "id": "599f03008a83764ba03a8bc0",
         "email": "bg@pis.com",
         "pass": "12345678"
      },
      {
         "id": "599f03008a83764ba03a8bbf",
         "email": "mi@pis.com",
         "pass": "12345678"
      }
   ]
}
```

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system
