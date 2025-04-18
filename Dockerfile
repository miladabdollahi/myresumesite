FROM node:19-alpine3.16 as builder

WORKDIR /app

COPY package.json yarn.lock.

RUN yarn install

COPY . .

ARG NEXT_PUBLIC_APP_NAME

RUN yarn build

FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist /usr/share/nginx/html
