# Out-for-Lunch

Out for lunch application – Organizing office lunch breaks and making hard decisions easy. [Software Engineering project for/in collaboration with Huld Oy]

# Getting Started with the App

1. Copy .env.example file and save it as .env
2. Add all required variable values in that file

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the required packages

### `npm run migrate`

Runs all migrations to create tables in Database

### `npm run seed`

Populates Database with default values

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Documentation

A html document is created for all methods in the repo. it is available as index.html under docs directory.
To generate the document run following commands:
1. ### `npm install -g documentation`
2. ### `documentation build src/** -f html -o docs`

This will create documentation for all files under src directory

Read more about this package at https://github.com/documentationjs/documentation#documentation
