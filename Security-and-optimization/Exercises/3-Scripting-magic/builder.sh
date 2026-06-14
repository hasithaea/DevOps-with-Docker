#!/bin/bash

set -e

REPOSITORY=$1
IMAGE_NAME=$2

git clone https://github.com/$REPOSITORY.git repo

cd repo

echo "$DOCKER_PWD" | docker login \
  --username "$DOCKER_USER" \
  --password-stdin

docker build -t "$IMAGE_NAME" .

docker push "$IMAGE_NAME"


# ./builder.sh github_username/repo_name docker_username/image_name


#docker run \
#  -e DOCKER_USER=yourusername \
#  -e DOCKER_PWD=your_token_here \
#  -v /var/run/docker.sock:/var/run/docker.sock \
#  builder \
#  github_username/repo \
#  docker_username/image
