import axios from 'axios';

export const makeRequest = async itemId => {
  const content = await axios(`https://jsonplaceholder.typicode.com/todos/${itemId}`);
  return content.data;
};
