---
title: Docker Cheat Sheet
description: This is my list of use full Docker commands.
date: 2020-12-02T00:00:00.000Z
lastmod: '2021-12-31T16:03:40.561Z'
image: /images/blog/Image-Docker-Command-Cheat-Sheet.png
description: This is my Docker commands cheat sheet.
tags:
  - Cheat-Sheet
  - Docker
  - Command-Line
  - Linux

slug: docker-cheat-sheet
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
|`--time , -t`    | 10      | Seconds to wait for stop before killing it. |
