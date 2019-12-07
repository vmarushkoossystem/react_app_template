#!/bin/bash

# kill old container
docker stop rat_5002
docker rm rat_5002
docker rmi rat -f

# build new container
docker build -t rat .
docker run -id --name rat_5002 -p 5002:5000 rat
