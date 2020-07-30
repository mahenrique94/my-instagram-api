FROM node:erbium

ENV NODE_ENV=production

WORKDIR /www/api

COPY package*.json ./

RUN npm ci --silent

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
