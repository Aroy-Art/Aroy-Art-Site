---
title: Goodies to know for Docker & Docker-Compose
description: A colleton of useful knowledge this kitty has gathered for Docker and Docker-Compose over a long time.
date: 2024-11-06T21:05:38.188Z
lastmod: 2026-01-08T00:41:25.241Z
image: /images/blog/Image-Docker-Command-Cheat-Sheet.png
tags:
  - Command-Line
  - cheat-sheet
  - docker
  - linux
slug: docker-compose-cheat-sheet
draft: false
---

This is the colleton of useful knowledge this kitty has gathered for Docker and Docker-Compose over a long time.

{{< toc >}}

---

## Find out what is using disk space

---

To find what is using up space you can run the command:

```Shell
docker system df
```

And it will show you a compact summary of
how much space is being used by containers,
images, networks, volumes etc.

If you need a more detailed view of what exactly
is using up space you can run the command with the '-v' flag:

```Shell
docker system df -v
```

And it will show you all the containers, volumes,
build caches and images that are taking up space.

## How to cleanup (unused) resources

---

Once in a while, you may need to cleanup resources (containers, volumes, images, networks) ...

If you use a Docker version newer than > 1.13 you can use Dockers builtin cleanup tool `purge`.

### The new way (Docker > 1.13)

#### Network

To purge the networks ([Docker Docs](https://docs.docker.com/engine/reference/commandline/network_prune))

```Shell
docker network prune
```

#### Containers, Volumes, Images

And to purge the docker system ([Docker Docs](https://docs.docker.com/engine/reference/commandline/system_prune))

```Shell
docker system prune
```

{{< alert theme="info">}}
For some users the `docker system prune` command dosen't delete the build cache so if thats the case that a look at the [Build system leftovers](#build-system-leftovers) section  
{{< /alert>}}

### The old way (Docker < 1.13)

#### Delete Volumes

{{< alert theme="info" >}}
For more info and a complete shell script see:
<https://github.com/chadoe/docker-cleanup-volumes>
{{< /alert >}}

```Shell
docker volume rm $(docker volume ls -qf dangling=true)
```

or

```Shell
docker volume ls -qf dangling=true | xargs -r docker volume rm
```

#### Delete Networks

```Shell
docker network ls
```

```Shell
docker network ls | grep "bridge"
```

```Shell
docker network rm $(docker network ls | grep "bridge" | awk '/ / { print $1 }')
```

or

```Shell
docker network ls | awk '$3 == "bridge" && $2 != "bridge" { print $1 }'
```

### Build system leftovers

If your system is also used for building images you might have a look at cleaning up garbage created by the builders using:

```Shell
docker buildx prune --all
```

and

```Shell
docker builder prune --all
```

---

## Health Checks

Docker Compose has a built in health check feature that can be used to check if your containers are up and running.

### Docker Compose depends on health check pass

You can also use the health check feature to make sure that a service is up and running before starting services that depending on it.

```YAML
    depends_on:
      <service name>:
        condition: service_healthy

```

### Docker Compose Postgres health check

{{< alert theme="info" >}}
 If you don't have a root user Postgres will spam your logs with `FATAL: role "root" does not exist` to prevent that add `-U postgres` to the end of the `pg_isready` command.
{{< /alert >}}

```YAML
    healthcheck:
      test: ["CMD-SHELL", "pg_isready"]
      interval: 10s
      timeout: 5s
      retries: 5
```

### Docker Compose Redis/Valkey health check

```YAML
    healthcheck:
      test: "redis-cli ping"
      interval: 10s
      timeout: 5s
      retries: 10
```

---

## Conclusion

First of thanks for reading this.

I hope this has been helpful and if you have any questions, suggestions or something i may have missed, please let me know.
