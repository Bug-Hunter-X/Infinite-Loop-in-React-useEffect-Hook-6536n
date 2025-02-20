```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Effect running:', count);
    // This will cause an infinite loop, because it updates the state.
    setCount(count + 1);
  }, [count]); // Note: This dependency array is wrong

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```