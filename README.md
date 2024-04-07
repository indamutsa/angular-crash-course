# Task Tracker

Through a detailed walkthrough, learners are introduced to advanced Angular features that enhance the functionality and user experience of web applications. By implementing a mock backend with JSON-Server and performing CRUD operations via Angular's HTTP Client, the tutorial provides a practical approach to data management in Angular apps. The use of directives like `ngModel`, `ngFor`, `ngIf`, and `ngClass` showcases Angular's capabilities for creating responsive and dynamic interfaces. Additionally, the tutorial covers the setup of Angular Router for application navigation, and Angular Forms Module for handling user input, ensuring a comprehensive learning experience in Angular application development. https://indamutsa.github.io/angular-crash-course

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
npm install
```

Go ahead and run the server:

```bash
npm run server #This will start the json-server on port 5000, it is setup in package.json
```

That's it! You are all set to explore the project tutorial.

## Deployment

The project is deployed online using GitHub Pages.

Create a gh-pages branch:

```bash
git checkout -b gh-pages
```

Push the changes to the gh-pages branch:

```bash
git push --set-upstream origin gh-pages
```

Goto the settings for your repository.

In the pages tab, the Build and Deployment section sets the sources to Deploy from a branch.

Then change the branch to gh-pages and select the root folder.

### Install angular cli ghpages

```bash
ng add angular-cli-ghpages
```

Then deploy the project:

```bash
ng deploy --base-href=https://<username>.github.io/<repository>/
```
