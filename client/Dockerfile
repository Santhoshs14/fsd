# Base image for React app
FROM node:18

# Set the working directory
WORKDIR /client

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the React application code
COPY . ./

# Build the React app
RUN npm run build

# Serve the React app using a lightweight HTTP server
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose the port for frontend
EXPOSE 3000
