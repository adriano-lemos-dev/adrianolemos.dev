---
title: 'git tip: How to prune local tracking branches (non-existent on remote)'
date: '2020-08-25T21:00:00-03:00'
tags:
  - git
  - shell
---
## One line

``` shell
git branch -r | awk '{print $1}' | egrep -v -f /dev/fd/0 <(git branch -vv | grep origin) | awk '{print $1}' | xargs git branch -d
```
