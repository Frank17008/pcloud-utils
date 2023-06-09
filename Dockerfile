FROM nginx:1.24.0

MAINTAINER FrankDong

WORKDIR /usr/src/app/

COPY ./docker/nginx.conf /etc/nginx/nginx.conf

COPY ./docs /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]