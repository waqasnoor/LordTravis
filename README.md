# Lord Travis

[![Build Status](https://travis-ci.com/waqasnoor/LordTravis.svg?branch=main)](https://travis-ci.com/waqasnoor/LordTravis)

This is a sinmple project to play with travis.

# Local Setup

- Install dependencies: `npm install`
- Run server: `node server.js`

# Container Setup

- Build image: `docker build .`
- Run container with image: `docker run {image_id}` where `image_id` can be retrieved by running `docker images` and found under the column `IMAGE ID`

# Container teardown

- Remove container: `docker kill {container_id}` where `container_id` can be retrieved by running `docker ps` and found under the column `CONTAINER ID`
