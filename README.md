# React redux example app

The code is entirely taken from [@coryhouse](https://github.com/coryhouse)'s excellent [course](https://app.pluralsight.com/library/courses/react-redux-react-router-es6) on pluralsight.

## Usage

Dev build run:
> npm start

Production build run:
> npm run build

## Docker

Running source code in node container.
After cd'ing into source code folder, run the following command:
> docker run -it -p 3001:3001 -v $(pwd):/var/www node bin/bash

Inside the container, cd into /Var/www to continue development.
