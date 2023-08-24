# bitroot-org_frontend-engineer-test
A step-by-step guide to creating a React JS frontend app as a frontend engineer. This repository serves as a tutorial for building a simple React app that fetches data from API's, displays it in a user-friendly format, and includes basic UI enhancements. Follow along with the guide to learn the process and customize the app according to your needs.
# Creating a React JS Frontend App - Step by Step Guide
This guide will walk you through the process of creating a React JS frontend app as a frontend engineer. We will cover the installation of necessary tools, setting up the app, fetching API data, and making UI improvements.

## Step 1: Install Node.js and NPM Package Manager
Make sure you have Node.js and NPM (Node Package Manager) installed on your system. You can download and install them from the official Node.js website: Node.js Downloads

To verify if Node.js and NPM are installed, open your terminal and run the following commands:
```
node -v
npm -v
```

## Step 2: Create React App
You can quickly set up a new React app using the create-react-app command-line tool. Open your terminal and run:
```
npx create-react-app my-app
```
In our case the name of the app is bitroot

## Step 3: Prepare Data
In your React app directory, create a file named records.json to hold your API data.

Note : You can directly clone this repository to get the 'records.json' and updated App.js file

This is how the data looks like in the json file
![data](https://github.com/Hrishikeshhelge/bitroot-org_frontend-engineer-test/blob/main/records.json.png)

## Step 4: Fetch and Display API Data
Edit the src/App.js file to fetch and display the API data. You can use the fetch function or a library like axios to retrieve data from the records.json file.

In the return section of the code, we have written the logic to pull the data from the key-value pairs of the json file, which we want to display on our user interface.
![data](https://github.com/Hrishikeshhelge/bitroot-org_frontend-engineer-test/blob/main/App.js.png)

## Step 5: Format Date
If your date values are in bit format '"date": 1606311631' , you might want to create a utility function to convert them into human-readable form.

Here is the logic for the date format conversion
![data](https://github.com/Hrishikeshhelge/bitroot-org_frontend-engineer-test/blob/main/Date%20Conversion%20Logic.png)

## Step 6: UI Enhancement
To enhance the UI, you can make changes to the src/App.css file. For example, adjusting text alignment:
![data](https://github.com/Hrishikeshhelge/bitroot-org_frontend-engineer-test/blob/main/App%20UI%20(1).png)
![data](https://github.com/Hrishikeshhelge/bitroot-org_frontend-engineer-test/blob/main/App%20UI%20(2).png)


Triumphantly, I've crafted a React app from the ground up, seamlessly retrieving and exhibiting data including text, dates, and images via APIs. Witnessing this information come to life on the user interface was truly gratifying. As I reflect, I recognize the immense potential for refining the user experience. Responsive design enhancements stand as a promising avenue, alongside the prospect of integrating additional features for heightened usability. These are objectives I ardently plan to pursue in due course. For now, this project stands as a testament to my current accomplishments - a tangible embodiment of the strides I've taken.

