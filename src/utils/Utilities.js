import axios from 'axios';

const SHORTNER = 'https://api.shrtco.de/v2/shorten';

const fetchShortenUrl = async (url) => {
  if (!url) return null;
  const config = {
    headers: {
      url,
    },
  };
  try {
    const response = await axios.post(SHORTNER, config);
    return response.json();
  } catch (error) {
    return console.log(error);
  }
};

export default fetchShortenUrl;
