import React, { useState } from 'react';
import axios from 'axios';

const Request = () => {
  let [itemId, setItemId] = useState(1);
  let [content, setContent] = useState('No content');

  const makeRequest = async () => {
    let content = await axios(`https://jsonplaceholder.typicode.com/todos/${itemId}`);
    setContent(JSON.stringify(content.data, null, 2));
    setItemId(itemId + 1);
  };

  return (
    <>
      <button type="button" onClick={makeRequest}>Make request</button>
      <pre>{content}</pre>
    </>
  );
};

export default Request;
