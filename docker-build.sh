#!/bin/bash
USER_REPO=$1
VERSION=$2

echo 'Docker Hub ID:'$USER_REPO
echo 'Image Version:'$VERSION

docker login -u $USER_REPO

docker build compute/math/. -t=$USER_REPO/math:$VERSION
docker build compute/plus/. -t=$USER_REPO/plus:$VERSION
docker build compute/minus/. -t=$USER_REPO/minus:$VERSION
docker build compute/multiply/. -t=$USER_REPO/multiply:$VERSION
docker build compute/divide/. -t=$USER_REPO/divide:$VERSION

docker push $USER_REPO/math:$VERSION
docker push $USER_REPO/plus:$VERSION
docker push $USER_REPO/minus:$VERSION
docker push $USER_REPO/multiply:$VERSION
docker push $USER_REPO/divide:$VERSION