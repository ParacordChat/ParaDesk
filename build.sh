#!/bin/bash
wails build -platform darwin/universal
wails build -platform linux/amd64,linux/arm64
wails build -nsis -platform windows/amd64,windows/arm64