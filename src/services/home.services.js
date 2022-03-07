import axios from "axios";
import { apiConfig } from "../config/api.config";

class homeServices {
  getPost = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(apiConfig.routes.post, {
          params: {}
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  };
}

const instance = new homeServices();

export default instance;
