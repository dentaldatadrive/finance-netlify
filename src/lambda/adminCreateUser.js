const { ADMIN_CREATE_USER } = require('./utils/userQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

// TODO:
// Add admin account validation before firing off create user event;
// 
exports.handler = async (event) => {
    const {         
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
        const { createUser: createdUser } = await sendQuery(
            ADMIN_CREATE_USER,
            variables
        );

        return formattedResponse(200, createdUser);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};
