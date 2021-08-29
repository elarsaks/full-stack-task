# full-stack-task
A simple bookstore application where users can add, edit and remove books from database.  
Technologies used: React, Styled Components, Axios, Node, Express, Pg-Promise, PostgreSQL, Docker, Docker Compose.

<img src="https://raw.githubusercontent.com/elarsaks/full-stack-task/master/screenshot.png" />

### Prerequisites

- Docker
- Docker Composer

## Setup and Running

1. Download project from GitHub
2. Run 'docker-compose up --build' in the project root
3. Wait until the application installs itself
4. Test it on:  
API-ENDPOINT | URL  
React-client | http://localhost:8080/  
Api (Node JS) | http://localhost:3001/api/info  

## Architecture
<img src="https://raw.githubusercontent.com/elarsaks/full-stack-task/master/arcitecture.png" />

### api

- Generates dummy data for 'books' and inserts it into PostgreSQL DB
- Receives requests from client and returns requested data from DB

### Postgres

- Stores books data in 1 single 'books' table

### React-client

- Fetches data from api and displays it to the user
