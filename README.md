
### Docker Compose up
```sh
docker-compose up -d # exec by daemon
docker-compose down # down
```

### Test
```sh
# served html, php by nginx server
curl http://localhost
curl http://localhost/index.php

# served html by nodejs server
curl http://localhost/node

# served html by go web server
curl http://localhost/echo
```

- [docker-compose 문법 간단 정리 (1)](https://nirsa.tistory.com/79)
- [docker-compose 문법 간단 정리 (2)](https://nirsa.tistory.com/80)
- [docker-compose 기본 명령어 정리](https://nirsa.tistory.com/81)
	- [depends_on 제어 관련 처리]( https://docs.docker.com/compose/startup-order/)
- [HAProxy URL based routing & load balancing](https://nirsa.tistory.com/212)
### SEE ALSO
- [docker-compose 소개](https://medium.com/sjk5766/docker-compose-%EC%86%8C%EA%B0%9C-f84840ff7203)
- **[Docker Compose로 localhost Nginx 리버스 프록시 구성](https://medium.com/sjk5766/docker-compose%EB%A1%9C-localhost-nginx-%EB%A6%AC%EB%B2%84%EC%8A%A4-%ED%94%84%EB%A1%9D%EC%8B%9C-%EA%B5%AC%EC%84%B1-8214d41a94fc)**
- **[Docker, NodeJS, Nginx! 너로 정했다!](http://labs.brandi.co.kr/2018/05/25/kangww.html)**
- [Docker로 nodejs서버 배포하기](https://ho1234c.github.io/2017/01/31/2017-01-31-docker-nodejs/index.html)
- [Docker 로 Node.js 배포하기 + nginx load balancing](https://seokjun.kim/docker-nginx-node/)
- [Docker Node Example](https://judo0179.tistory.com/46)
- [nginx 로드 밸런싱 설정](https://www.lesstif.com/system-admin/nginx-load-balancing-35357063.html)

