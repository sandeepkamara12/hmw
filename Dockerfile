# image name : react-image
FROM node:17-alpine as development
# setting work directory in container 
WORKDIR /app
# now to copy files from our project folder to container ,by dot means current folder on container
COPY package.json ./
ADD .env ./
#running the command tht needed to install dependencies (depends on project but basically commands that we need to run before running the main appplicaton)
RUN npm install 
#now copying all the project files from current folder to current folder in container
COPY . .
#we need to expose our main OS's port to the container , like here our 3000 port 
EXPOSE 3000
#to run our main application
# CMD ["npm","start"]
CMD ["npm","run","start"]
