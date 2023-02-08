# 1. 운영체제  및 프로그램 설치
#FROM ubuntu:22.04 
#FROM은 도커허브에서 설치할 파일을 가져오는거고 RUN은 설치할 프로그램을 적게할수잇는 명령어 (도커허브에 node를 검색하면 친절한?분이 만든 프로그램이 있다?) 하나하나 입력하는방식
#RUN sudo apt install nodejs
#RUN sudo npm install -g yarn 

#1. 운영체제 및 프로그램 설치(이미 리눅스, node, npm,yarn까지 모두깔려있는 컴퓨터를 다운로드하는 방식)
FROM node:14

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
#RUN mkdir myfolder => 아래에서 COPY할 때, 자동으로 만들어줘서 굳이필요없는 명령어
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

COPY . /myfolder/

# 3. 도커안에서  index.js 실행시키기 (실행시키는 명령어에는 RUN와 CMD)
CMD yarn start:dev