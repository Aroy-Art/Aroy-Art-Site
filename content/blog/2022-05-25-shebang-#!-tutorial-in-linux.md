---
title: "Shebang #! Tutorial In Linux"
description: Concise explanation of shebang (#!) in Linux, including syntax and usage.
date: 2022-05-25T12:50:05.057Z
lastmod: 2026-01-07T20:26:01.315Z
image: /images/blog/shebang.jpg
draft: false
tags:
  - cheat-sheet
  - linux
slug: shebang-tutorial-linux
---

In computing and Linux the shebang is a character sequence that consists of `#` and `!`. Simply the shebang is expressed as `#!`. The shebang is also called sha-bang, hashbang, pound-bang, and hash-pling. The shebang is used to specify an interpreter for script files. Linux is popular with its script files and scripting languages like Bash, ZSH, Python, Perl, PHP, etc. The shebang is used to specify the interpreter type and location. When a script file is called the first line contains the shebang with the interpreter path.

### Table of content
 * [Intro](#shebang--tutorial-in-linux)
 * [Shebang Syntax](#shebang-syntax)
 * [Common Shebangs](#common-shebangs)
 * [Conclusion](#conclusion)

## Shebang Syntax

The shebang has the following syntax where the interpreter executable file path is appended after the shebang.

```
#!INTERPRETER
```

* INTERPRETER is the interpreter path like “/etc/bash” etc.

## Common Shebangs

|Type / Language | Syntax             |
|----------------|--------------------|
| Sh             | #!/bin/sh          |
| Bash           | #!/bin/bash        |
| ZSH            | #!/bin/zsh         |
| Python 3       | #!/bin/python3     |
| PHP            | #!/bin/php         |
| Perl           | #!/bin/perl        |

## Conclusion

Let me answer a few more questions before ending this article:

* It is important that there is no space between `#` and `!`. You CANNOT use it like this: `# !/bin/bash`.
* Most system allow space between `#!` and `/bin/bash` however it is a good practice to avoid space between `#!` and `/bin/bash`.
* `#!` has to be on the first line, otherwise the shebang line will be treated as comment. You cannot even have a blank line before it.