FROM node:carbon
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080 30010 30011 30012 30013 30014 30015

CMD [ "npm", "start" ]