# Start with the Node.js base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json /app
RUN npm install

# Copy the rest of your project files
COPY . /app

# Expo's default port
EXPOSE 19000
# Expo's alternative port
EXPOSE 8081

# Command to start your app
CMD ["npx", "expo", "start"]