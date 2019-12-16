import axios from 'axios';

export const makeRequest = async id => {
  const content = await axios(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return content.data;
};
