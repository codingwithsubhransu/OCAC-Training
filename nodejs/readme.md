# Steps to create node js project

### Step 1

-> mkdir project_folder_name

### Step 2

-> cd project_folder_name

### Step 3

-> npm init -y

### Step 4

-> create a file inside your project_folder named as app.js

### Step 5

-> node app.js

### Step 6

-> in the package.json file under the script add {"start":"node app.js"}

### Step 7

-> now in the terminal command "app.js"

# Steps to create express js project

### Step 1

-> npm i express

### Step 2

const express = require("express")
const app = express();

app.listen(3000, () => {
console.log("Server connected")
}) //dummy code to use express.js
