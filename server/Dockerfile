# Use official Node.js image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variables (use production environment in production)
ENV NODE_ENV=production

# Expose port 5000
EXPOSE 5000

# Run the server
CMD ["npm", "run", "dev"]
