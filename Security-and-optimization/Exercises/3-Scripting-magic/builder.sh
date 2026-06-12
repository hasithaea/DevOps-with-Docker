#!/bin/bash

set -e

REPOSITORY=$1
IMAGE_NAME=$2

git clone https://github.com/$REPOSITORY.git repo

cd repo

docker build -t $IMAGE_NAME .

docker push $IMAGE_NAME


# ./builder.sh github_username/repo_name docker_username/image_name