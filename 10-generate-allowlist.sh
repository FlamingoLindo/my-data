#!/bin/sh
set -e

: > /etc/nginx/allow.conf
IFS=','
for ip in $WHITELISTEDIPS; do
    echo "${ip} 1;" >> /etc/nginx/allow.conf
done
unset IFS