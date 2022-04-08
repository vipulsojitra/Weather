import axios from "axios";
import { config } from "../config/config";

export const getCoordinatesOfAddress = async (address) => {
  const response = await axios.get(`${config.databaseURL}`, {
    params: {
      appid: `${config.apiKey}`,
      q: address,
      language: "en",
    },
  });

  return response;
};
