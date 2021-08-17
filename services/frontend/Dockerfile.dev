FROM node:14.16.0-alpine3.13
WORKDIR /app

COPY . ./

EXPOSE 3000
CMD yarn install --mutex file:/usr/local/share/.cache/yarn/.yarn-mutex && yarn start