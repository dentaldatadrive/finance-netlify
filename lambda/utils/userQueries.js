const GET_USERS = `
  query {
    allUsers {
      data {
        _id
        firstname
        lastname
        email
        password
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
        }
  }
`;


const USER_CREATE_USER = `
    mutation( $firstname: String!, $lastname: String!, $email: String!, $password: String!) {
        createUsers( data: { firstname: $firstname, lastname: $lastname, email: $email, password: $password}) {
          _id
          firstname
          lastname
          email
        }
    }
`;

const USER_UPDATE_USER = `
  mutation($id: ID!, $firstname: String!, $lastname: String!, $email: String!, $password: String!) {
    updateUsers( id: $id data: { firstname: $firstname, lastname: $lastname, email: $email, password: $password}) {
      firstname
      lastname
      email
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
    USER_CREATE_USER,
    USER_UPDATE_USER,
};
