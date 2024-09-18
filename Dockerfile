# Use the official Node.js image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock if using Yarn
COPY ["package.json", "package-lock.json*","./"]

# Install dependencies with npm and ignore peer dependency warnings
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application (replace with your build command, e.g., for Next.js)
RUN npm run build

# Expose the application port (if needed)
EXPOSE 3000

# Run the application (adjust the command as per your application)
CMD ["npm", "start"]
