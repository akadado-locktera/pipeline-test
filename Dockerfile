FROM node:20-slim
COPY ./src/main.js .
CMD ["node", "main.js"]