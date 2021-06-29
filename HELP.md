# Getting Started

Sandbox Spring Boot web app with REST controllers hosting a ReactJS frontend

## Project created with these steps
1. Use Spring initializr https://start.spring.io
 - add Spring Web dependency

2. Download and extract zip file

3. cd to project directory

4. run npx create-react-app frontend --use-npm
 - development can be done here using:
 -- ./mvnw spring-boot:run to start up the Java server layer on localhost:8080
 -- npm run start (from ./frontend) to start up react-scripts server on localhost:3000

5. update root pom with frontend build steps
 - can now run the app with ./mvnw spring-boot:run and it serves up the reactjs index.html page on http://localhost:8080/

## Codebase

### Java app 
* created with https://start.spring.io
* build and run with `./mvnw spring-boot:run` - starts web app on localhost:8080

### ReactJS app
* frontend module created with `npx create-react-app frontend --use-npm`
* build with `npm run start` - starts a development react server on localhost:3000

### Production-ready build
* all hooked up as part of maven build
* build and run with `./mvnw spring-boot:run` - starts web app on localhost:8080, automatically serves the react app index.html on /

### Code highlights
* HomeController.java - controller that serves up index.html with the RequestMapping=/
* frontend module is just a create-react-app project that has two components that make fetch calls to Java RestControllers on /api/... to get simple data hardcoded in arraylists

### Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.5.1/maven-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/2.5.1/maven-plugin/reference/html/#build-image)
* [Spring Web](https://docs.spring.io/spring-boot/docs/2.5.1/reference/htmlsingle/#boot-features-developing-web-applications)

### Guides
The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/bookmarks/)

