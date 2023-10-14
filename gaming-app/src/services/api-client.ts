import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a7d90ad7127b44bbb0a70176dd8cec23",
  },
});
