FROM node:6.7

MAINTAINER Geert Huls

ENV PORT=3001

COPY . /var/www
WORKDIR /var/www

RUN npm install \
    npm run clean-dist \
    npm run build:html \
    babel-node tools/build.js

EXPOSE $PORT

ENTRYPOINT ["babel-node", "tools/distServer.js"]
