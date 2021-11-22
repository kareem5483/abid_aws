From node:14
# create app directory 
copy package*.json ./
Run npm install
copy
EXPOSE 8080
CMD [ "node", "app.js" ]