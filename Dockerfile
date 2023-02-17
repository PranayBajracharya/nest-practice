FROM node:18-alpine AS dev

WORKDIR /app
COPY . /app/

RUN yarn

CMD ["yarn", "start:dev"]