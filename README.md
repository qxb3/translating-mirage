# What is this?

This is a simple script to help translate <a href="https://github.com/HarveyDogs/client-localisation">mirage realms</a>

# How to use

## Installation

First you will need to install nodejs. You can download it in <a href="https://nodejs.org/en/download/">here.</a>
<br><br>
Next you will need to download this script. you can download the zip file in <a href="">here</a>
<br><br>
After you download the zip file extract it
<br><br>
Open the terminal and run the following:
```sh
cd translating-mirage
npm install
```


## Code changes

> After the installation part you will need to tweak some things in the code.<br>
> Don't worry its not that complex you will just replace some stuff

Open the file called `index.js`
Go to the line 12 and 13
<br><br>
For line 12 its the language you want to translate mirage to.
You can find the supported languages in <a href="">SUPPORTED_LANGUAGES.md</a>
> Example (Translating to russia):
```js
const targetLanguage = 'rs';
```
For the line 13 its the file name you want to save it<br>
> Example (Saving it as bundle_rs.properties):<br>
```js
const fileName = 'bundle_rs.properties';
```

# Running the script
After you follow the instruction above now you can run the script

Run the following in your terminal:<br>
```sh
node index.js
```
