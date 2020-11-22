const GET_USERS = `
  query {
    allUsers {
      data {
        _id
        firstname
        lastname
        email
        preferences
      }
    }
  }
`;

const CREATE_USER = `
    mutation( $firstname: String!, $lastname: String!, $email: String!, $password: String! ) {
        createUser( data: { firstname: $firstname, lastname: $lastname, email: $email, password: $password, preferences: []}) {
          _id
          firstname
          lastname
          email
          preferences
        }
    }
`;

const UPDATE_USER = `
  mutation($id: ID!, $archived: Boolean!, $name: String!, $url: String!, $description: String!  ) {
    updateUser( data: { $name: String!, $firstname: String!, $lastname: String!, $email: String!}) {
      _id
      firstname
      lastname
      email
      preferences
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
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER
};
