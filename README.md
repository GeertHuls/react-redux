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

To build a docker image run the following command:

> docker build -t <image_name>:\<tag> .

To run an actual container from the image:

> docker run -d -p 3001:3001 <image_name>:\<tag>

### Docker compose

The docker compose configuration will spin a cluster of 1 nginx as a front end used as a reversed proxy, together with 3 nodes serving the courses app. Nginx will load balance all incoming request to these 3 nodes accordingly.

Run:
> docker-compose build
> docker-compose up -d

After both command have completed, the app will be available on port 8081.

To stop the cluster, run:

> docker-compose down
