FROM node

# Create app directory
WORKDIR /usr/src/app/users_server

# Install app dependencies
COPY package.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]