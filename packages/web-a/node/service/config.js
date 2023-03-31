const zkconfig = require('web-config');

let profile = process.env.NODE_ENV || 'development';

module.exports = Object.assign(
    {
        profile: profile,
    },
    zkconfig
);
