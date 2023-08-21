#!/bin/bash

APP_PATH="/var/www/html/nuzhdiki.timagribanov.com/backend/api.py"
PID_FILE="/var/run/nuzhdiki/nuzhdiki_api.pid"

start() {
    if [ -f $PID_FILE ]; then
        echo "The service is already running."
    else
        nohup python3 $APP_PATH &> /dev/null &
        echo $! > $PID_FILE
        echo "Service started."
    fi
}

stop() {
    if [ -f $PID_FILE ]; then
        kill $(cat $PID_FILE)
        rm $PID_FILE
        echo "Service stopped."
    else
        echo "The service is not running."
    fi
}

restart() {
    stop
    start
}

case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    *)
        echo "Usage: $0 {start|stop|restart}"
esac