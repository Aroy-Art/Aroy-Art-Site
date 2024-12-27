---
title: Goodies to know for Docker & Docker-Compose
description: This is my list of use full Docker commands.
date: 2024-11-06T21:05:38.188Z
lastmod: 2024-12-27T11:32:00.290Z
image: /images/blog/Image-Docker-Command-Cheat-Sheet.png
tags:
  - Cheat-Sheet
  - Command-Line
  - Docker
  - Linux
slug: docker-compose-cheat-sheet
draft: false
---

This is the colleton of useful knowledge this kitty has gathered for Docker and Docker-Compose over a long time.

{{< toc >}}

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

## Conclusion

First of thanks for reading this.

I hope this has been helpful and if you have any questions, suggestions or something i may have missed, please let me know.
