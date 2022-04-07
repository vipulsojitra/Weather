import axios from "axios";

export const Coordination = async (address) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast/?q=${address}&appid=`
  );

  return response;
};
