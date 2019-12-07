import React, { useState } from 'react';
import { makeRequest } from '../../services/request';

const Request = () => {
  let [itemId, setItemId] = useState(1);
  let [content, setContent] = useState('No content');

  const makeRequestHandler = async () => {
    let content = await makeRequest(itemId);
    setContent(JSON.stringify(content, null, 2));
    setItemId(itemId + 1);
  };

  return (
    <>
      <button type="button" onClick={makeRequestHandler}>Make request</button>
      <pre>{content}</pre>
    </>
  );
};

export default Request;
