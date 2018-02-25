#!/bin/bash

# Скрипт выкладывает данные на сервак
#
# https://stackoverflow.com/a/28896613/1775459

HOST="{put youh host here}"
USER="{put you user name here}"
PASSWD="{put you password here}"

FILE_TO_PUT="README.md"
FILE_TO_DELETE="README.md"

ftp -n $HOST <<END_SCRIPT
quote USER $USER
quote PASS $PASSWD

delete $FILE_TO_DELETE
put $FILE_TO_PUT

quit
END_SCRIPT
exit 0
