# Base Image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY app/ .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "index.js"]