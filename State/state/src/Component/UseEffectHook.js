import React, { useState } from 'react';

const UseEffectHook = () => {
  const [resourceType, setResourceType] = useState('POST');

  const handlePostClick = () => {
    setResourceType('POST');
  };

  const handleUsersClick = () => {
    setResourceType('Users');
  };

  const handleCommentsClick = () => {
    setResourceType('Comments');
  };

  return (
    <div>
      <h1>You are using React useEffect Hooks BABY</h1>

      <button onClick={handlePostClick}>POSTs</button>
      <button onClick={handleUsersClick}>Users</button>
      <button onClick={handleCommentsClick}>Comments</button>
      
      <h1>Resource Type: {resourceType}</h1>
    </div>
  );
};

export default UseEffectHook;
