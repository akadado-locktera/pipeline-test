FROM node:20-slim
COPY main.js .
CMD ["node", "main.js"]