export const getData = async (url) => {
  try {
    const response = await fetch(url, { method: "GET" });
    const result = await response.json();
    if (response.status >= 400) {
      const err = new Error(`Somthing is wrong ${result}`);
      throw err;
    }
    return result.articles;
  } catch (err) {
    console.log(err);
  }
};
