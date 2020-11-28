const { USER_UPDATE_USER } = require('./utils/userQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    if (event.httpMethod !== 'PUT') {
        return formattedResponse(405, { err: 'Method not supported' });
    }
    const { firstname, lastname, password, email, _id: id } = JSON.parse(
        event.body
    );
    const variables = { firstname, lastname, password, email, id };
    try {
        const { updateUser: updatedUser } = await sendQuery(
            USER_UPDATE_USER,
            variables
        );
        return formattedResponse(200, updatedUser);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }

};
