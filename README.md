# Achoo

#### Epicodus AJAX exercise, 10/12/2018

#### By _Hassan Al-khalifah_

## Description

Achoo is a local Portland doctor search engine. Based on medical issue entered in the search bar, a user should receive a list of doctors in the Portland region that can help with the medical issue specified. Also, if a user attempts to enter a doctors name, if available, they should receive a list of doctors in the Portland region that match the name provided. This is all possible by this application using the [BetterDoctor API](https://developer.betterdoctor.com/).

## Specs

| Behavior | Input | Output |
|----------|-------|--------|
| Patient enters medical issue | headache | If available, returns a list of doctors in the Portland region who can handle the entered medical issue. |
| Patient enters a doctors name | John | If available, returns a list of doctors in the Portland region who match the entered name. |
| If query response includes any doctor(s) | John | The following information should be displayed to the user: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients. |

## Setup Instructions

* Open terminal
* Make sure your in the Desktop directory
```
~ $ cd desktop
```
* Clone the repo
```
~/Desktop $ git clone [REPO URL]
```
* Change directory to directory of cloned REPO
```
~/Desktop $ cd directory-name
```
* Run npm install in terminal to install all required dependencies
```
~/Desktop/directory-name $ npm install
```
* As the web application uses BetterDoctor API, you are required to retrieve and API key from [BetterDoctor API](https://developer.betterdoctor.com/).
* In the root directory of the web application, create a .env file. Inside the file, enter the following, exports.apiKey=[API_KEY GOES HERE]
* Run npm run build in terminal
```
~/Desktop/directory-name $ npm run build
```
* Run npm run start in terminal to build and start the dev server
```
~/Desktop/directory-name $ npm run start
```
* Run npm run lint in terminal to explicitly run ESLint
```
~/Desktop/directory-name $ npm run lint
```
* Run npm run test in terminal to run the unit tests with Karma and Jasmine.
```
~/Desktop/directory-name $ npm run test
```

## Technologies Used

* HTML5
* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* CSS3
* SASS
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

## Links

* [BetterDoctor API](https://developer.betterdoctor.com/)

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Hassan Al-khalifah**
