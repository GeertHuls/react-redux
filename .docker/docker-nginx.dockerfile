FROM nginx:latest

MAINTAINER Geert Huls

VOLUME /var/cache/nginx

# Copy custom nginx config
COPY ./.docker/config/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8081

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]

# To build:
# docker build -f docker-nginx.dockerfile --tag geerthuls/nginx ../

# To run:
# docker run -d -p 80:6379 --name nginx geerthuls/nginx
