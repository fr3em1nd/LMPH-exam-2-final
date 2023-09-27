# LMPH-exam-2-final
 
# Exam 1 - by Solomon

## Technologies used:
- Svelte 
- Apollo
- GraphQL
- Javascript
- Bootstrap
- Docker
- MongoDB
- SonarQube




## Docker Setup:

to run Docker:

`
docker-compose up --build
`


/docker-compose.yml - this compiles both Dockerfiles on backend and frontend

/frontend/DockerFile - basic Svelte setup

/backend/DockerFile - Apollo setup mutations, Types and Resolvers

Once docker is running it should look like this:

![image](https://github.com/fr3em1nd/LMPH-exam-2-final/assets/2801155/ff31a076-595b-4508-bede-bc7deef9e222)


Docker have NGINX setup to expose port 80 on file nginx.conf


## State management:

we're using Svelte's store to directly manage ApolloClient's data


## Database: 

We're using MongoDB Apollo's GraphQL for frontend maintainability.

## File Structure:


backend/ - contains apollo server

frontend/ - contains Svelte setup


 README.md
 
 backend
 
    --Dockerfile (backend dockerfile)
    --index.js
    --node_modules
    --package-lock.json
    --package.json

 docker-compose.yml (mind docker composer)
 

 frontend
 
    --Dockerfile (frontend dockerfile)
    --README.md
    --nginx.conf
    --node_modules
    --package-lock.json
    --package.json
    --public
    --ollup.config.js
    --scripts
    --src
 


## Unit Testing:


run this command to execute sonar-scanner:

`
sonar-scanner \
  -Dsonar.projectKey=svelte \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=sqp_e92d82f83e382125c5fee67af4f6a832b8124be5
`

sonarqube URL: http://localhost:9000/


## Endpoints & Databases:

http://localhost:80/ - frontend

http://localhost:4000/ - backend and Apollo playground

http://localhost:9000/ - Sonarqube frontend

mongodb : 27017 - mongodb port and instance

postgre:12 db-1 - postgre instance for sonarqube db

## Test Data:

Test data is generated on the server side randomly.




