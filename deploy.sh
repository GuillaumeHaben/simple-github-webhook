#!/usr/bin/env bash
# Deployment script

cd /home/httpdjail/ceten/integration/www
git pull
forever restartall

exit 0

