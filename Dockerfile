FROM node:18 as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ARG NEXT_PUBLIC_APP_NAME
ARG NEXT_PUBLIC_DOMAIN

RUN yarn build

# Stage 2: Run (with Node.js, not nginx!)
FROM node:18

WORKDIR /app

COPY --from=builder /app /app
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

