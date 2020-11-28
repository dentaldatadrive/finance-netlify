const { LOGIN_ADMIN } = require('./utils/adminQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    const { email, password } = JSON.parse(event.body);
    const variables = { email, password };
    try {
        const { loginAdmin: loggedInAdmin } = await sendQuery(
            LOGIN_ADMIN,
            variables
        );

        return formattedResponse(200, loggedInAdmin);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};
