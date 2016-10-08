FROM node:6.7

MAINTAINER Geert Huls

ENV PORT=3001

COPY . /var/www
WORKDIR /var/www

RUN npm install --production \
    && npm run clean-dist \
    && npm run build:html \
    && npm run builddist

EXPOSE $PORT

ENTRYPOINT ["npm", "run", "serve"]
