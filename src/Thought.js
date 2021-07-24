import React, { useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();
    const timeout = setTimeout(() => {
      // alert('Time has passed!');
      removeThought(thought.id);
    }, timeRemaining);
    return () => {
      clearTimeout(timeout);
    };
  }, [thought, removeThought]);

  return (
    <li style={{fontFamily: 'impact'}}className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div style={{fontFamily: 'impact'}}className="text">{thought.text}</div>
    </li>
  );
}
