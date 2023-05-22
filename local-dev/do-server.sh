#!/bin/bash

set -e

SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
WORK_DIR=$(cd "$SCRIPT_DIR/.." && pwd)
CONFIG_NAME="server-1"

if [ -n "$1" ]
then
  CONFIG_NAME="$1"
fi

CONFIG_PATH="${SCRIPT_DIR}/${CONFIG_NAME}.config"

if [ ! -f "$CONFIG_PATH" ]
then
    echo "$CONFIG_PATH does not exist."
    exit 1
fi

cd "$WORK_DIR"

./gradlew clean installDist -x shadowJar -x test

./app/build/install/app/server/app "$CONFIG_PATH"