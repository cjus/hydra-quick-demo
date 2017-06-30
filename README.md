# hydra-quick-demo
Quick Hydra Demo

## grab a redis container and start it

```shell
$ docker pull redis:3.0.7
$ docker run -d -p 6379:6379 --name redis redis:3.0.7
```

## grab hydra-router

```shell
$ docker pull flywheelsports/hydra-router:1.4.8
$ docker rm -f hydra-router
$ docker run -d -p 5353:5353 --add-host host:192.168.0.96 --name hydra-router flywheelsports/hydra-router:1.4.8
```

* replace the host field IP address with your machine's IP address: use `ifconfig` or `ipconfig` to determine your machine's IP address.

## install dependencies

```shell
$ npm install
```

## launch instances in different terminal panes or shells

```shell
$ node service1
```

```shell
$ node service2
```

```shell
$ node service3
```

```shell
$ node service4
```

## View in hydra Router

```
http://localhost:5353
```

## Things to try

* stop and start services
* issue curl requests to the router: http://localhost:5353/v1/service

