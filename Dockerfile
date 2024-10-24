# Use the official Node.js image as the base image
FROM node:22

# Create and set the working directory inside the container
WORKDIR /srv/node/app

# Install nodemon globally for development environment
RUN npm install -g nodemon

# Copy package.json and install dependencies
COPY package*.json ./

RUN npm install

# Copy the rest of the application code
COPY . .

# Change the owner of the project files to node user
RUN chown -R node /srv/node/app

# Switch to the node user
USER node

# Expose the port the app runs on
EXPOSE 3000

# Expose the debugging port
EXPOSE 9229

# Use nodemon for automatic server reloads in development
CMD ["nodemon", "--inspect=0.0.0.0:9229", "server.js"]
