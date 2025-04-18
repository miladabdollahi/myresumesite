FROM node:19-alpine3.16 as builder

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm ci

COPY . .

ARG NEXT_PUBLIC_APP_NAME

RUN npm run build

FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist /usr/share/nginx/html
