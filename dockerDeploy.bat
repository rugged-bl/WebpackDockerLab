docker build . -t webpack-lab
docker images
docker run -d -p 32770:80 webpack-lab
pause