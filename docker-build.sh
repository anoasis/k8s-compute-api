#!/bin/bash
USER_REPO=$1
VERSION=$2

if [ -z "$USER_REPO" ]; then
	echo "#-----------------------------------------------#"
	echo "  Please provide your Docker Hub ID as a parameter."
	echo "  example) ./docker-build.sh <USERID> latest"
	echo "#-----------------------------------------------#"
	exit 1
fi

if [ -z "$VERSION" ]; then
	VERSION=latest
fi

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
