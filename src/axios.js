import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-ab4cb.cloudfunctions.net/api",
});

export default instance;
