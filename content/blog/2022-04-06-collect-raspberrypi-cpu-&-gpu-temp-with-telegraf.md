---
title: Collect Raspberry Pi CPU & GPU temp with Telegraf
date: 2022-04-06T10:05:08.281Z
lastmod: 2024-02-12T07:50:48.484Z
image: /images/blog/8RLV4tpYwkRSyWbM.webp
description: How to collect Raspberry Pi CPU and GPU temperature with Telegraf to later display it in a nice Grafana Dashboard.
tags:
  - Monitoring
  - linux
draft: false
slug: collect-raspberry-pi-cpu-gpu-temp-telegraf
---

# Collect Raspberry Pi CPU & GPU temperature with Telegraf

How to collect Raspberry Pi CPU and GPU temperature with Telegraf to later display it in a nice Grafana Dashboard.

## How to use (No script required)

---

#### 1. Add this to you telegraf.conf

```TOML
[[inputs.file]] 
  files = ["/sys/class/thermal/thermal_zone0/temp"]
  name_override = "cpu_temperature"
  data_format = "value"
  data_type = "integer"
  
[[inputs.exec]]
  commands = [ "/opt/vc/bin/vcgencmd measure_temp" ]
  name_override = "gpu_temperature"
  data_format = "grok"
  grok_patterns = ["%{NUMBER:value:float}"]
```
#### **2.** Add telegraf user to video group 
For telegraf to be able to get the GPU temp the telegraf user needs to be add to the video group. Do so with the command below:
```bash
sudo usermod -a -G video telegraf
```

#### **3.** Check that the telegraf config file is correct (Recommended)
Run the test with:
```bash
telegraf -config /etc/telegraf/telegraf.conf -test
```

#### **4.** Restart telegraf service
Restart telegraf to activate the new settings.
```bash
sudo systemctl restart telegraf.service
```

#### **5.** Check that everything is working
Double check that everything is working in order
```bash
sudo systemctl status telegraf.service
```

