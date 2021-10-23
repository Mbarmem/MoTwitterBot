# Use an official Node.js as a parent image
FROM node:17-alpine3.14

# Copy the current directory contents into the container
ADD . .

# Install any needed packages
RUN npm install

# Copy config.example.ts to config.ts
COPY example.env .env

# Run npm run start when the container launches
CMD [ "node", "main.js"]