#vi backup.sh
#!/bin/bash

BACKUP_PATH="../database/backup"
DB_USER="root"
DB_PW="mysql1234"
db="mydb"

#mysqldump --user=$DB_USER --password=$DB_PW --databases $db > "$BACKUP_PATH/mysqldump-$db-$(date +%Y-%m-%d-%H).sql";
mysqldump \
	--user=$DB_USER \
	--password=$DB_PW \
	--lock-all-tables \
	--databases $db \
	--default-character-set utf8 \
	> "$BACKUP_PATH/mysqldump-$db-$(date +%Y-%m-%d-%H).sql";
