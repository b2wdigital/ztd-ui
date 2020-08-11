FROM node:12.14.0-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

CMD ["yarn", "serve", "-l", "tcp://0.0.0.0:3000","build"]
