FROM node

# Create app directory
WORKDIR /usr/src/app/groups_server

# Install app dependencies
COPY package.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3001

CMD ["node", "index.js"]