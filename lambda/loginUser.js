const { LOGIN_USER } = require('./utils/userQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    const { email, password } = JSON.parse(event.body);
    const variables = { email, password };
    try {
        const { loginUser: loggedInUser } = await sendQuery(
            LOGIN_USER,
            variables
        );

        return formattedResponse(200, loggedInUser);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};
