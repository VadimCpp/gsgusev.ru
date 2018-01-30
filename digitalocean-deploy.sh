#!/bin/bash

# Скрипт выкладывает данные на сервак

LOGIN="root"
HOST="46.101.171.48"

scp -r ./dist $LOGIN@$HOST:/var/www/gsgusev.build

ssh $LOGIN@$HOST 'bash -s' <<'ENDSSH'
  # эти команды выполнятся на вашем удаленном сервере
  rm -rf /var/www/html
  mv /var/www/gsgusev.build /var/www/html
ENDSSH
