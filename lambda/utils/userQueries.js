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

const LOGIN_USER = `
  query($email: String!, $password: String!) {
        loginUser( email: $email, password: $password) {
            _id
            firstname
            lastname
            email
            password
            userReadOnlyOne
            userReadOnlyTwo
            userReadOnlyThree
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


const USER_CREATE_USER = `
    mutation( $firstname: String!, $lastname: String!, $email: String!, $password: String!) {
        createUsers( data: { firstname: $firstname, lastname: $lastname, email: $email, password: $password, userReadOnlyOne: "user-read-only-1-value", 
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

const USER_UPDATE_USER = `
  mutation($id: ID!, $firstname: String!, $lastname: String!, $email: String!, $password: String!) {
    updateUsers( id: $id data: { firstname: $firstname, lastname: $lastname, email: $email, password: $password}) {
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
  mutation($id: ID!, $firstname: String!, $lastname: String!, $email: String!, $password: String!, $userReadOnlyOne: String, 
    $userReadOnlyTwo: String, $userReadOnlyThree: String, $adminAccessOnlyOne: String, $adminAccessOnlyTwo: String, 
    $adminAccessOnlyThree: String) {
    updateUser( data: {  $firstname: String!, $lastname: String!, $email: String!, $password: String!, userReadOnlyOne: String, 
      userReadOnlyTwo: String, userReadOnlyThree: String, adminAccessOnlyOne: String, adminAccessOnlyTwo: String, 
      adminAccessOnlyThree: String }) {
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
    LOGIN_USER,
    DELETE_USER,
    CREATE_ADMIN,
    USER_CREATE_USER,
    ADMIN_CREATE_USER,
    USER_UPDATE_USER,
    ADMIN_UPDATE_USER
};
