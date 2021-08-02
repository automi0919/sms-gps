import axios  from './axios';
const url = "https://api.what3words.com/v3/convert-to-3wa";
const key = "VQS6AM2Y";
export const getWhat3words = async (coordinates) => {
  console.log('what3words called');
  return await axios.get(url,  {
    params: {
      key,
      coordinates
    }
  }).then(res => {
    return res.data.words;
  });
}