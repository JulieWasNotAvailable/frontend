FROM node:18-alpine

WORKDIR /usr/src/app

# COPY ./dist ./dist
# COPY package.json .
# COPY package-lock.json .
COPY . .

RUN npm ci --omit=dev

CMD ["npm", "run", "start"]