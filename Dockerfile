FROM node:12-alpine

WORKDIR /var/www

COPY config/ config/
COPY public/ public/
COPY scripts/ scripts/
COPY src/ src/
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm i && \
    npm i -g serve && \
    npm run build

CMD ["serve", "-s", "-l", "tcp://0.0.0.0:5000", "./build"]
