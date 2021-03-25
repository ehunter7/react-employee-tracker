import axios from "axios";

//* baseurl contains the API for the call
const BASEURL = "https://randomuser.me/api/";

export default {
  //! I am not sure hwy search
  search: function (query) {
    return axios.get(BASEURL);
  },
};
