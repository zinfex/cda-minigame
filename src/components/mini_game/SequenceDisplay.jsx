import React from 'react';

const SequenceDisplay = ({ sequence, currentIndex }) => {
  return (
    <div>
      {sequence.map((letter, index) => (
        <span className='letras' key={index} style={{ color: index === currentIndex ? 'green' : 'orange' }}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default SequenceDisplay;
