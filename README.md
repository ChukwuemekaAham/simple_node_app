# Simple Node

## Overview

This is a very simple, bare-bones NodeJS project created for you to use with Docker.

## Local Setup

- Install dependencies: `npm install`
- Run server: `node server.js`

## Container Setup

- Build image: `docker build .` or `docker build -t simple-node-app .`
- Run container with image: `docker run {image_id}` where `image_id` can be retrieved by running `docker images` and found under the column `IMAGE ID` or`docker run -p 8080:8080 simple-node-app`

## Container teardown

- Remove container: `docker kill {container_id}` where `container_id` can be retrieved by running `docker ps` and found under the column `CONTAINER ID`
