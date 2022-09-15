
step1

merge-come-js/Dockerfile


step2


docker build -t mergedocker .

>>>
docker build -t lgon .
docker save -o lgon.tar lgon:latest
ls
lgon.tar
//后面这个.一定要记得加
docker load -i lgon.tar
>>>

step3

docker run -d -p 3003:3000 -v /tmp:/tmp mergedocker

http://127.0.0.1:3003/
