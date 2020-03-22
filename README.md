# Reboot ELearning Prokect

## Introduction

## Directory Structure

## Setup

### Install & Update Dependencies
The first time you start the server you may want to make sure you have the dependencies installed, in the right versions. To do so, just go to the terminal and type:

```
$ npm install
```
### Install StandardJS Linter
[StandardJS](https://standardjs.com/) is a JavaScript style guide, linter, and formatter.

#### VSCode Extension
You may want to install [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)

> VSCODE `SETTINGS.JSON`:
```
  "javascript.validate.enable": false,
  "standard.enable": true,
  "standard.run": "onType",
  "standard.autoFixOnSave": false,
  "standard.usePackageJson": true
```

*Make sure you don't have duplicate rules!*

### Environment Variables

The next setup step is to create an `Environment Variable` file `.env` in this folder. We have provided a `.env.example` for you with a sample configuration for both **development** and **production** environments.

Make your own copy_
```
$ cp .env.example .env
```

And customize the sample params to your needs

- mongoURL: "mongodb://localhost/",
- mongoDBName: 'reboot',
- apiKeys : "fakeapikey",
- port : 5000

## Start local Server

You can start your server anytime with:

```
$ npm run dev
```

You should see something like:
```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.43.142:8080
Hit CTRL-C to stop the server
```

## API ROUTES

Please note that all routes in this API should be called with the `/api` prefix before the endpoint:

```
POST http://localhost:3000/api/auth/signup
```

### AUTHENTICATION ENDPOINTS

METHOD | URL                | What does it do
-------|--------------------|---------------------------------
POST   | `auth/signup`  | Create a new account
POST   | `auth/login`   | Authenticates a user

### LESSONS ENDPOINTS

METHOD | URL                    | What does it do
-------|------------------------|---------------------------------
GET    | `lessons`              | Get All Lessons
POST   | `lessons`              | Create Lesson
GET    | `lessons/:lessonId`    | Get One Lesson
PUT    | `lessons/:lessonId`    | Update Lesson
DELETE | `lessons/:lessonId`    | Delete Lesson

### USER ENDPOINTS (Authenticated)

All these endpoints require a `token` to be sent within the HTTP Headers.

METHOD | URL                     | What does it do
-------|-------------------------|---------------------------------
GET    | `me/lessons`            | Get User's Lessons (unstarted, ongoing, finished)
POST   | `me/lessons/:lessonId`  | Add lesson to my Lessons (unstarted)
GET    | `me/lessons/:lessonId`  | Return my lesson (with user progress)
PUT    | `me/lessons/:lessonId`  | Modify User's lesson (set progress)
DELETE | `me/lessons/:lessonId`  | Delete User's lesson from My Lessons
GET    | `me/profile`            | Get info from User (TODO)
PUT    | `me/profile`            | Modify User info (TODO)

Happy coding!
