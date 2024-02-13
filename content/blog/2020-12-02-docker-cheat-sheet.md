---
title: Docker & Compose Cheat Sheet
description: This is my list of use full Docker commands.
date: 2020-12-02T00:00:00.000Z
lastmod: 2024-02-13T21:23:00.829Z
image: /images/blog/Image-Docker-Command-Cheat-Sheet.png
tags:
  - Cheat-Sheet
  - Command-Line
  - Docker
  - Linux
slug: docker-compose-cheat-sheet
---

# A list of docker commands

---

### List images

```Shell
docker images [OPTIONS] [REPOSITORY[:TAG]]
```

#### Options

| Name, shorthand | Default  | Description                                         |
| :-------------- | :------: | --------------------------------------------------- |
| `--all, -a`     |          | Show all images (default hides intermediate images) | 
| `--digests`     |          | Show digests                                        | 
| `--filter, -f`  |          | Filter output based on conditions provided          |
| `--format`      |          | Pretty-print images using a Go template             |
| `--no-trunc`    |          | Don’t truncate output                               |
| `--quiet, -q`   |          | Only show numeric IDs                               |

---

### Remove one or more containers

```Shell
docker rm [OPTIONS] CONTAINER [CONTAINER...]
```

#### Options

| Name, shorthand | Default | Description                                             |
|:----------------|:-------:| ------------------------------------------------------- | 
|`--force, -f`    |         | Force the removal of a running container (uses SIGKILL) |
|`--link, -l`     |         | Remove the specified link                               |
|`--volumes, -v`  |         | Remove anonymous volumes associated with the container  |

---

### Stop one or more running containers

```Shell
docker stop [OPTIONS] CONTAINER [CONTAINER...]
```

#### Options

| Name, shorthand | Default | Description                                 |
|:----------------|:-------:| ------------------------------------------- | 
|`--time, -t`     | 10      | Seconds to wait for stop before killing it. |

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

### The old way (Docker < 1.13)

#### Delete Volumes

{{< alert theme="info" >}} // see: https://github.com/chadoe/docker-cleanup-volumes {{< /alert >}}

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
