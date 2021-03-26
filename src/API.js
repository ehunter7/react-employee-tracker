import axios from "axios";

//* baseurl contains the API for the call
const BASEURL = "https://randomuser.me/api/?results=10";

export default {
  //! I am not sure hwy search
  search: function () {
    return axios.get(BASEURL);
  },
};
