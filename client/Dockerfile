FROM node:12.18.3-alpine3.10 AS builder

WORKDIR ./app

COPY package*.json tsconfig.json .

RUN npm install

COPY ./src ./src

RUN npm run build

FROM nginx:1.19.2-alpine AS Runner

COPY --from=builder /app/build/ /usr/share/nginx/html



