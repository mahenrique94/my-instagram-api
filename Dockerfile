FROM node:erbium

WORKDIR /www/api

COPY package*.json ./

RUN npm ci --silent

COPY . .

CMD ["npm", "start"]
