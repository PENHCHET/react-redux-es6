FROM node:6.7

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

# Adds fs-extra to npm and replaces the fs.rename method with the fs.extra
# move method that now automatic chooses what to do (rename/move).
# See https://github.com/npm/npm/issues/9863.
RUN cd $(npm root -g)/npm \
 && npm install fs-extra \
 && sed -i -e s/graceful-fs/fs-extra/ -e s/fs\.rename/fs\.move/ ./lib/utils/rename.js

RUN npm install -g yarn

EXPOSE 8080

# On some platforms, the .dockerignore file is being ignored in some versions of docker-compose
# See https://github.com/docker/compose/issues/1607.
RUN rm -rf node_modules

RUN yarn
