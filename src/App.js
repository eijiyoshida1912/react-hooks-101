import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount((previewsCount) => previewsCount + 1);
  const decrement2 = () => setCount((previewsCount) => previewsCount - 1);

  const reset = () => setCount(0);
  const twotimes = () => setCount((previewsCount) => previewsCount * 2);
  const devidethree = () =>
    setCount((previewsCount) =>
      previewsCount % 3 === 0 ? previewsCount / 3 : previewsCount
    );

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={twotimes}>x2</button>
        <button onClick={devidethree}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
};

export default App;
