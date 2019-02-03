import axios from "axios";

// POST REQUEST
export const signin = ({ email, password }) => dispatch => {
  console.log(dispatch);
  axios.post("https://kweebec-app-2jtsxzh27.now.sh/graphql", {
    query: `mutation{
          login(email: ${email}, password: ${password}) {
            email
          }
        }`,
  });
};
