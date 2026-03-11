FROM node:24-alpine

WORKDIR /app

RUN apk add --no-cache git

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD sh -c "npx prisma generate && npx prisma db push && npm run dev"