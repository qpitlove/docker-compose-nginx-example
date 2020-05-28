
### Docker Compose up
```sh
docker-compose up -d // exec with daemon
docker-compose down // down
```

### Test
```sh
# seved html with php by nginx server
curl http://localhost
curl http://localhost/index.php

# seved html by go web server
curl http://localhost/echo
```

http://labs.brandi.co.kr/2018/05/25/kangww.html
https://www.lesstif.com/system-admin/nginx-load-balancing-35357063.html
https://medium.com/sjk5766/docker-compose-%EC%86%8C%EA%B0%9C-f84840ff7203
https://medium.com/sjk5766/docker-compose%EB%A1%9C-localhost-nginx-%EB%A6%AC%EB%B2%84%EC%8A%A4-%ED%94%84%EB%A1%9D%EC%8B%9C-%EA%B5%AC%EC%84%B1-8214d41a94fc