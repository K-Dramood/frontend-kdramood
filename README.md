# ![K-DraMood](./src/images/logo.png)

## Product Description
> The K-DraMood app is for the user who is looking for their next great kdrama to get sucked into. Korean Dramas are well known for their ability to tug at the heart strings and incite strong emotions from viewers. This app generates a random suggestion based on the mood preference of the user.


## Link To Deployed App:
https://k-dramood.netlify.app/


## TOC:

- [User Stories](#user-stories)
- [App Images](#app-screenshots)
- [Wireframes](#wireframes)
- [Component Hierarchy](#component-hierarchy)
- [Technologies Used](#technologies-used)
- [Installation Instructions](#installation-instructions)

<hr>

## User Stories

_**MVP Features**_

- _As a user, I want to generate a random Kdrama suggestion based on the mood I want to be in, so that I can discover new dramas and know exactly how I will be feeling by the end of the drama._
- _As a user, I want access to a full list of Kdramas that are sorted by mood, so that I can choose from a list rather than being served a random suggestion._
- _As a user, I want to be able to create my own unique login to have access to future features that I can engage with on the app._


_**Future Features**_

- _As a user, I want to write reviews for the dramas I have watched, so that other users can see if I would recommend this drama and if I agree with the resulting mood._
- _As a user, I want to be able to edit and/or delete my reviews if I need to update something or if I don't want that information public anymore, so that I can fix errors and take down reviews I don't want others to read._
- _As a user, I want to be able to add new kdramas to the database, so that others can have the opportunity to enjoy it too._

<hr>

## App Images

Home Page
<img width="1503" alt="Screen Shot 2022-04-18 at 1 43 26 AM" src="https://user-images.githubusercontent.com/97856494/163782897-89f5bce8-cb4f-4d61-a75c-4d69deb66813.png">
<img width="1508" alt="Screen Shot 2022-04-18 at 1 43 40 AM" src="https://user-images.githubusercontent.com/97856494/163782905-25886821-a197-4f5d-a1e7-3ba4d8d0de76.png">
<img width="1508" alt="Screen Shot 2022-04-18 at 1 43 52 AM" src="https://user-images.githubusercontent.com/97856494/163782909-9b41daec-1872-47d3-9d74-a78e2cd0343f.png">

KDrama List Page
<img width="1509" alt="Screen Shot 2022-04-18 at 1 44 05 AM" src="https://user-images.githubusercontent.com/97856494/163783008-7abf7915-7ae3-41c9-9e46-a97136265ef6.png">
<img width="1504" alt="Screen Shot 2022-04-18 at 1 44 17 AM" src="https://user-images.githubusercontent.com/97856494/163783017-cfb1b000-9d55-4750-a1b7-9706ae90edf5.png">
<img width="1507" alt="Screen Shot 2022-04-18 at 1 44 28 AM" src="https://user-images.githubusercontent.com/97856494/163783019-65d2fa3e-75ee-4813-bd22-cd95ccf7106d.png">

KDrama Details Page
<img width="1505" alt="Screen Shot 2022-04-18 at 1 44 40 AM" src="https://user-images.githubusercontent.com/97856494/163783113-99501f2b-be23-4b67-9fd0-4a9dac82f17e.png">
<img width="1502" alt="Screen Shot 2022-04-18 at 1 44 50 AM" src="https://user-images.githubusercontent.com/97856494/163783121-c5f50599-b0b0-4908-87e6-00c9799307ad.png">

<hr>

## Wireframes
Home Page
![K-DraMood Wireframe](https://media.git.generalassemb.ly/user/41404/files/837a5b00-b70b-11ec-96f8-54ec6d34b5ae)

Drama Detail Page
![K-DraMood DetailPage](https://media.git.generalassemb.ly/user/41404/files/7b2d1a80-b721-11ec-9b4e-28c2055c3ab6)

Drama List Page
![K-DraMood List](https://media.git.generalassemb.ly/user/41404/files/bbda6300-b724-11ec-97d9-a2f27d68673e)

<hr>

## Component Hierarchy
> App.js
- Home.js
- Navigation.js
- SignUp.js
- Login.js
- DramaList.js
- DramaDetail.js
- DramaCreate.js > DramaForm.js
- DramaEdit.js > DramaForm.js

<hr>

## Technologies Used
- Built with React v17.0.2
- Visual Studio Code v1.64.2
- HTML5
- JavaScript(ES6)
- CSS
- FontAwesome
- Bootstrap
- React Bootstrap
- Netlify
- Git
- GitHub

<hr>

## Installation Instructions
Note: This app was created using Visual Studio Code Version 1.64.2. 
Fork and clone the repo using either SSH or HTTPS in a directory of your choice.

In terminal:

```
$ git clone [SSH/HTTPS KEY]
```
This is a react app and will require that relevant dependencies are downloaded. Move into the repo directory (named frontend-kdramood)

```
$ cd ./frontend-kdramood
````
and run npm install to download relevant dependencies:

```
$ npm install
```
Once dependencies are installed, open the app in your IDE of choice (this example uses Visual Studio Code terminal command). Then start the app with 'npm start': 

```
$ code . 
$ npm start
```
To view main files, open the src directory. App.js contains the main code for the app and relevant components can be found in the components folder. 

## Issues?
* [Main Repository](https://github.com/K-Dramood/frontend-kdramood)
* [Organization Repository](https://github.com/K-Dramood)
* [Issue Tracker](https://github.com/K-Dramood/frontend-kdramood/issues)

## Contact
Created by [@michellechoi126](https://github.com/michellechoi126) - feel free to contact me!
