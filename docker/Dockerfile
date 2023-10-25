FROM node:16.20-alpine

WORKDIR /app
USER 0
FROM node:14.17.0-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD dist/* ./
CMD [ "node", "index.js"]
EXPOSE 8000
