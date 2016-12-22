#!/bin/bash
start_rm=$(date +%s)
rm -rf node_modules/
end_rm=$(date +%s)
echo "node_modules folder removed in $(($end_rm-$start_rm))s" | tee -a $PWD/time.log

echo "start npm install" | tee -a $PWD/time.log
start=$(date +%s)
npm i
end=$(date +%s)
echo -e "npm install finished in \033[33m $(($end-$start))s \033[0m" | tee -a $PWD/time.log

echo | tee -a $PWD/time.log
sleep 2

start_rm=$(date +%s)
rm yarn.log && rm -rf node_modules/
end_rm=$(date +%s)
echo "node_modules folder removed in $(($end_rm-$start_rm))s" | tee -a $PWD/time.log

echo "start yarn install" | tee -a $PWD/time.log
start=$(date +%s)
yarn install
end=$(date +%s)
echo -e "yarn install finished in \033[33m $(($end-$start))s \033[0m" | tee -a $PWD/time.log

echo | tee -a $PWD/time.log
echo | tee -a $PWD/time.log
