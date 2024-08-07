#use the base image from Docker Hub
FROM node:20-alpine

#set working directry
WORKDIR /app

#copy the pakage.json pakage-lock.json file
COPY package*.json ./

#install the dependencies
RUN npm install

#copy the rest of the application files
COPY . .

#expose the port your app will run on
EXPOSE 5173

#start the application
CMD [ "npm","run","dev" ]
