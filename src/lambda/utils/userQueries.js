const GET_USERS = `
  query {
    allUsers {
      data {
        _id
        firstname
        lastname
        email
        userReadOnlyOne
        userReadOnlyTwo
        userReadOnlyThree
        adminAccessOnlyOne
        adminAccessOnlyTwo
        adminAccessOnlyThree
      }
    }
  }
`;


const USER_CREATE_USER = `
    mutation( $firstname: String!, $lastname: String!, $email: String!) {
        createUser( data: { firstname: $firstname, lastname: $lastname, email: $email, userReadOnlyOne: "user-read-only-1-value", 
          userReadOnlyTwo: "user-read-only-2-value", userReadOnlyThree: "user-read-only-3-value", adminAccessOnlyOne: "default-admin-only-1", adminAccessOnlyTwo: "default-admin-only-2", 
          adminAccessOnlyThree: "default-admin-only-3"}) {
          _id
          firstname
          lastname
          email
          userReadOnlyOne
          userReadOnlyTwo
          userReadOnlyThree
        }
    }
`;


const ADMIN_CREATE_USER = `
    mutation( $firstname: String!, $lastname: String!, $email: String!, $userReadOnlyOne: String, 
      $userReadOnlyTwo: String, $userReadOnlyThree: String, $adminAccessOnlyOne: String, $adminAccessOnlyTwo: String, 
      $adminAccessOnlyThree: String) {
        createUser( data: { firstname: $firstname, lastname: $lastname, email: $email, userReadOnlyOne: $userReadOnlyOne, 
          userReadOnlyTwo: $userReadOnlyTwo, userReadOnlyThree: $userReadOnlyThree, adminAccessOnlyOne: $adminAccessOnlyOne, adminAccessOnlyTwo: $adminAccessOnlyTwo, 
          adminAccessOnlyThree: $adminAccessOnlyThree}) {
          _id
          firstname
          lastname
          email
          userReadOnlyOne
          userReadOnlyTwo
          userReadOnlyThree
          adminAccessOnlyOne
          adminAccessOnlyTwo
          adminAccessOnlyThree
        }
    }
`;

const USER_UPDATE_USER = `
  mutation($id: ID!, $firstname: String!, $lastname: String!, $email: String!) {
    updateUser( data: { $firstname: String!, $lastname: String!, $email: String!}) {
      _id
      firstname
      lastname
      email
      userReadOnlyOne
      userReadOnlyTwo
      userReadOnlyThree
    }
  }
`;


const ADMIN_UPDATE_USER = `
  mutation($id: ID!, $firstname: String!, $lastname: String!, $email: String!, $userReadOnlyOne: String, 
    $userReadOnlyTwo: String, $userReadOnlyThree: String, $adminAccessOnlyOne: String, $adminAccessOnlyTwo: String, 
    $adminAccessOnlyThree: String) {
    updateUser( data: {  $firstname: String!, $lastname: String!, $email: String!, userReadOnlyOne: String, 
      userReadOnlyTwo: String, userReadOnlyThree: String, adminAccessOnlyOne: String, adminAccessOnlyTwo: String, 
      adminAccessOnlyThree: String }) {
        _id
        firstname
        lastname
        email
        userReadOnlyOne
        userReadOnlyTwo
        userReadOnlyThree
        adminAccessOnlyOne
        adminAccessOnlyTwo
        adminAccessOnlyThree
    }
  }
`;


const DELETE_USER = `
  mutation($id: ID!) {
        deleteUser( id: $id) {
            _id
        }
    }
`;

module.exports = {
    GET_USERS,
    DELETE_USER,
    USER_CREATE_USER,
    ADMIN_CREATE_USER,
    USER_UPDATE_USER,
    ADMIN_UPDATE_USER
};
