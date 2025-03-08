sync:
	rsync -azP \
		--delete \
		--exclude Makefile \
		--exclude .git \
		. root@catsoncontainer.com:/var/www/html/

