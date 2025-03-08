sync:
	rsync -azP --delete --exclude Makefile . root@catsoncontainer.com:/var/www/html/

