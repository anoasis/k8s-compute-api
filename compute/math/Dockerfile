FROM node:carbon
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

HEALTHCHECK --interval=1m --timeout=3s \
 CMD curl -f http://localhost/ || exit 1

CMD [ "npm", "start" ]