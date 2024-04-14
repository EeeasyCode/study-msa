FROM node:20
WORKDIR /usr/src/server/services/payment
COPY .payment .
RUN npm install
ENV NODE_ENV production
CMD ["npm", "run", "production"]
EXPOSE 3002

