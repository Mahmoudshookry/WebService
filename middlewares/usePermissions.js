const _ = require('lodash');
const roles = require('../helpers/roles');
const { errors } = require('../helpers/errors');

module.exports = (req, res, next) => {
    const {path: resource, role, method} = req;

    const permissions = _.get(roles, [
        role,
        'permissions',
        resource],
    []);

    const isAuthorized = permissions.includes(method);
    console.log('isAuthorized: ', isAuthorized);
    if (!isAuthorized) throw new errors.APP_ERR_AUTHENTICATION;

   next();
}