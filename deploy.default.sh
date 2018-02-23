#!/bin/bash

# Скрипт выкладывает данные на сервак
# TODO: fix script as it is not working now :()

LOGIN="{put you login here}"
HOST="{put youh host here}"

scp -r ./dist $LOGIN@$HOST:/var/www/gsgusev.build

ssh $LOGIN@$HOST 'bash -s' <<'ENDSSH'
  # эти команды выполнятся на вашем удаленном сервере
  rm -rf /var/www/html
  mv /var/www/gsgusev.build /var/www/html
ENDSSH
