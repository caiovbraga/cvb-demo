FROM node:13-alpine

ENV MONGO_DB_USERNAME=mongoadmin \
    MONGO_PWD=secret

RUN mkdir -p /home/app

COPY ./app /home/app

RUN npm install express mongodb

CMD ["node", "/home/app/server.js"]