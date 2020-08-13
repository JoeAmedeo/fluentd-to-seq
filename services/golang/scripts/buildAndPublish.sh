#!/usr/bin/env bash

Version=${GITHUB_REF##*/}

docker login -u ${Username} -p ${Password}
docker build -t joeamedeo/log-service:${Version} -t joeamedeo/log-service:latest .
docker push joeamedeo/log-service:${Version}
docker push joeamedeo/log-service:latest