# 1️⃣ Use official Node.js image
FROM node:18-alpine

# 2️⃣ Set working directory inside container
WORKDIR /app

# 3️⃣ Copy package files first (for caching)
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install --production

# 5️⃣ Copy rest of the project
COPY . .

# 6️⃣ Expose backend port
EXPOSE 5000

# 7️⃣ Start the server
CMD ["npm", "start"]
