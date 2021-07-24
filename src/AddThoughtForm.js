import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');
  
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    }
    if (text.length > 0) {
      props.addThought(thought);
      setText('');
    }
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        style={{fontFamily: 'impact'}}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input style={{fontFamily: 'impact', backgroundColor: '#3d2352', color: '#e4dcf1'}}type="submit" value="Add" />
    </form>
  );
}
