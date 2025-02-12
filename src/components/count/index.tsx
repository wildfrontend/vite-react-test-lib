import { useState } from 'react';

const Count: React.FC<{ defaultValue?: number }> = ({ defaultValue }) => {
  const [count, setCount] = useState(defaultValue ?? 0);
  return (
    <button className='btn' onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
};

export default Count;
