docker build . -t webpack-lab
docker images
docker run -d -p 8080:80 webpack-lab
pause