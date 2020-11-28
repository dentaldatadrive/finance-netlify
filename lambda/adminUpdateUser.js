const { ADMIN_UPDATE_USER } = require('./utils/adminQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    if (event.httpMethod !== 'PUT') {
        return formattedResponse(405, { err: 'Method not supported' });
    }
    const {   
        _id: id,   
        firstname,
        lastname,
        email,
        password,
        userReadOnlyOne,
        userReadOnlyTwo,
        userReadOnlyThree,
        adminAccessOnlyOne,
        adminAccessOnlyTwo,
        adminAccessOnlyThree } = JSON.parse(event.body);
    const variables = { 
        id,       
        firstname,
        lastname,
        email,
        password,
        userReadOnlyOne,
        userReadOnlyTwo,
        userReadOnlyThree,
        adminAccessOnlyOne,
        adminAccessOnlyTwo,
        adminAccessOnlyThree
     };
    try {
        const { updateUser: updatedUser } = await sendQuery(
            ADMIN_UPDATE_USER,
            variables
        );
        return formattedResponse(200, updatedUser);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }

};
