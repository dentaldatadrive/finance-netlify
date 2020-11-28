const GET_USERS = `
  query {
    allUsers {
      data {
        _id
        firstname
        lastname
        email
        password
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

const LOGIN_ADMIN = `
  query($email: String!, $password: String!) {
        loginAdmin( email: $email, password: $password) {
            _id
            firstname
            lastname
            email
            password
        }
  }
`;

const CREATE_ADMIN = `
    mutation( $firstname: String!, $lastname: String!, $email: String!, $password: String!) {
        createAdmins( data: { firstname: $firstname, lastname: $lastname, email: $email, password: $password}) {
          _id
          firstname
          lastname
          email
        }
    }
`;

const ADMIN_CREATE_USER = `
    mutation( $firstname: String!, $lastname: String!, $email: String!, $password: String! $userReadOnlyOne: String, 
      $userReadOnlyTwo: String, $userReadOnlyThree: String, $adminAccessOnlyOne: String, $adminAccessOnlyTwo: String, 
      $adminAccessOnlyThree: String) {
        createUsers( data: { firstname: $firstname, lastname: $lastname, email: $email, password: $password, userReadOnlyOne: $userReadOnlyOne, 
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

const ADMIN_UPDATE_USER = `
  mutation($id: ID!, $firstname: String!, $lastname: String!, $email: String!, $password: String!, $userReadOnlyOne: String, 
    $userReadOnlyTwo: String, $userReadOnlyThree: String, $adminAccessOnlyOne: String, $adminAccessOnlyTwo: String, 
    $adminAccessOnlyThree: String) {
    updateUsers( id: $id, data: { firstname: $firstname, lastname: $lastname, email: $email, password: $password, userReadOnlyOne: $userReadOnlyOne, 
      userReadOnlyTwo: $userReadOnlyTwo, userReadOnlyThree: $userReadOnlyThree, adminAccessOnlyOne: $adminAccessOnlyOne, adminAccessOnlyTwo: $adminAccessOnlyTwo, 
      adminAccessOnlyThree: $adminAccessOnlyThree }) {
        _id
        firstname
        lastname
        email
        password
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
    LOGIN_ADMIN,
    DELETE_USER,
    CREATE_ADMIN,
    ADMIN_CREATE_USER,
    ADMIN_UPDATE_USER
};
