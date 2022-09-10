import Axios from "axios";

export const getData = async (url) => {
  try {
    const { data } = await Axios.get(url);
    return data.articles;
  } catch (err) {
    console.log(err);
  }
};
