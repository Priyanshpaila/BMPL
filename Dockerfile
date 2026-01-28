# Use a lightweight Node.js base image
FROM node:20-alpine



# App env (you can still override at runtime with --env or --env-file)
ENV PORT=83
ENV NODE_ENV=production

ENV NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER=918770047163
ENV NEXT_PUBLIC_SITE_URL=https://bmpl.vercel.app/
ENV NEXT_PUBLIC_API_BASE=https://bmpl.rrispat.in



# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
# Use npm ci for reproducible installs; omit dev deps in production
RUN npm ci --omit=dev

# Copy source code
COPY . .

# Expose application port
EXPOSE ${PORT}

# Start the server
CMD ["npm", "run", "start"]


# docker build  --no-cache -t 192.168.13.72:5000/bmpl_comingsoon_24_jan_2026n .      
# docker run -d --name bmpl_comingsoon_24_jan_2026n -p 83:83 bmpl_comingsoon_24_jan_2026n_image

# docker tag bmpl_comingsoon_24_jan_2026n_image 192.168.13.72:5000/bmpl_comingsoon_24_jan_2026n
# docker push 192.168.13.72:5000/bmpl_comingsoon_24_jan_2026n
# docker pull 192.168.13.72:5000/bmpl_comingsoon_24_jan_2026n
# docker run -d --name bmpl_comingsoon_24_jan_2026n -p 83:83 192.168.13.72:5000/bmpl_comingsoon_24_jan_2026n