'use strict';

module.exports = {
    COMMAND   : process.env.COMMAND                 || './deploy.sh',
    SECRET    : process.env.SECRET                  || 'https://github.com/GuillaumeHaben/1TGration',
    HOOK_PATH : process.env.HOOK_PATH               || '/',
    PORT      : process.env.PORT                    || 80,
    BRANCH    : 'refs/heads/' + (process.env.BRANCH || 'master')
};

