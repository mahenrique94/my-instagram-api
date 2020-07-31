FROM node:erbium

ENV NODE_ENV=production

WORKDIR /www/api

COPY package*.json ./

RUN npm ci --silent

COPY . .

CMD ["npm", "start"]
