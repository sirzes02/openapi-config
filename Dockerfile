FROM node:24-alpine

WORKDIR /app

RUN apk add --no-cache git

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run init

EXPOSE 3000

CMD ["npm", "run", "dev"]