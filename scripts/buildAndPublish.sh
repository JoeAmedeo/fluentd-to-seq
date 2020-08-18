#!/usr/bin/env bash

Version=${GITHUB_REF##*/}

docker login -u ${Username} -p ${Password}
docker build -t ${Username}/${Image}:${Version} -t ${Username}/${Image}:latest .
docker push ${Username}/${Image}:${Version}
docker push ${Username}/${Image}:latest