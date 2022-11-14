# image name : react-image
FROM node:18-alpine as development
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

FROM node:18-alpine AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
RUN yarn install --production
# Copy app files
COPY . .
# Build the app
RUN npm build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
