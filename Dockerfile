# #use the base image from Docker Hub
# FROM node:20-alpine

# #set working directry
# WORKDIR /app

# #copy the pakage.json pakage-lock.json file
# COPY package*.json ./

# #install the dependencies
# RUN npm install

# #copy the rest of the application files
# COPY . .

# #expose the port your app will run on
# EXPOSE 5173

# #start the application
# CMD [ "npm","run","dev" ]


# Step 1: Build React App
FROM node:alpine3.18 as build
WORKDIR /app 
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Step 2: Server With Nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]