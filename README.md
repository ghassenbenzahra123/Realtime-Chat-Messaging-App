# Realtime Messaging App (React, NodeJs, Twillio)

Shoppy is a Fullstack chat App. 

Built with:
* Node.js 
* React 
* Express
* Axios


## Live Demo 

[DEMO (Click Me!)](https://chat-app2022.netlify.app)

<div style="display: flex;">
    <img src="https://i.ibb.co/mSjW7pL/ezgif-3-1bd2bf444c.gif"/>
    

<div>



## Run Locally
### 1. Install Dependencies
```sh
$ npm install
```

### 2. Create a new env file

Create an `env` file - Set filename`.env.prod` file for production and `.env.dev`for development and save it in the root of your project folder
and add the following configuration details. You can either use the same configuration details for both development and production but it's best to make separate projects. It can be found on your firebase project settings.

```
// SAMPLE CONFIG .env.dev, you should put the actual config details found on your project settings

STREAM_APP_ID = <APP_ID_STREAM_ACCOUNT>
STREAM_API_SECRET= <STREAM_API_SECRET>
STREAM_API_KEY= <STREAM_API_KEY>
TWILIO_ACCOUNT_SID= <TWILIO_ACCOUNT_SID>
TWILIO_AUTH_TOKEN= <TWILIO_AUTH_TOKEN>
TWILIO_MESSAGING_SERVICE_SID= <TWILIO_MESSAGING_SERVICE_SID>

``` 


### 3. Run development server
```sh 
$ npm start
```
