FROM node:alpine

RUN mkdir /src
WORKDIR /src

COPY package.json /src/
RUN npm install

EXPOSE 8000
