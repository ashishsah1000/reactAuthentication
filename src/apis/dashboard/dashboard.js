import { baseUrl } from "..";
import axios from "axios";
export const getData = async () => {
  const url = baseUrl + "/";
  const res = await axios.get(url, {
    withCredentials: "true",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("Homepage response", res);
};
