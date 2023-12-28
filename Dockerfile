FROM node:18-alpine

WORKDIR /app/test
COPY ./package.json ./
RUN npm install
COPY . . 

EXPOSE 4000
CMD ["npm","run","start"]