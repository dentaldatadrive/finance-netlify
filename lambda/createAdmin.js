const { CREATE_ADMIN } = require('./utils/userQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    const { firstname, lastname, email, password } = JSON.parse(event.body);
    const variables = { firstname, lastname, email, password };
    try {
        const { createUser: createdUser } = await sendQuery(
            CREATE_ADMIN,
            variables
        );
        return formattedResponse(200, createdUser);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};
