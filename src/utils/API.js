import axios from "axios";

const apiUrl = "https://randomuser.me/api/?results=50&nat=us";

export default {
  getEmployees: function () {
    console.log(axios.get(apiUrl));
    return axios.get(apiUrl);
  },
};
