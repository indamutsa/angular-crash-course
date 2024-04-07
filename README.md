# Task Tracker

Through a detailed walkthrough, learners are introduced to advanced Angular features that enhance the functionality and user experience of web applications. By implementing a mock backend with JSON-Server and performing CRUD operations via Angular's HTTP Client, the tutorial provides a practical approach to data management in Angular apps. The use of directives like `ngModel`, `ngFor`, `ngIf`, and `ngClass` showcases Angular's capabilities for creating responsive and dynamic interfaces. Additionally, the tutorial covers the setup of Angular Router for application navigation, and Angular Forms Module for handling user input, ensuring a comprehensive learning experience in Angular application development

## Project Setup

1. Install Angular CLI globally:

```bash
nvm install 20
nvm use 20
npm install -g @angular/cli@17
```

Above commands will install Angular CLI version 17 globally.

2. Set up the server with json-server:

```bash
npm install -g json-server
```

We can now add server in package.json file:

```json
"scripts": {
    "server": "json-server --watch db.json --port 5000"
}
```

Go ahead and run the server:

```bash
npm run server
```

That's it! You are all set to explore the project tutorial.
