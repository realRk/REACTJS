/* eslint-disable no-extend-native */
import { useEffect, useMemo, useState } from "react";

const UMHook = () => {
  // const
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const makeCountTwice = (num) => {
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };
  //   let doubledNumber = makeCountTwice(count);
  let doubledNumber = useMemo(() => {
    return makeCountTwice(count);
  }, [count]);
  const changeTheme = () => {
    Array.prototype.random = function () {
      return this[Math.floor(Math.random() * this.length)];
    };
    let color = ["red", "green", "yellow", "blue"].random();
    setDark(color);
  };

  let custom_style = useMemo(() => {
    return {
      marginTop: "1vh",
      width: "100vw",
      height: "200px",
      background: dark,
    };
  }, [dark]);
  useEffect(() => {
    console.log("Theme applied");
  }, [custom_style]);
  return (
    <div>
      <h1>
        Use memois like caching a value to prevent un-necessary running of
        particular function or UI
      </h1>
      <h1>Referential equality</h1>
      <p>
        if we are defining an object inside react component, for each render
        object reference would be different because of that if that object is a
        dependency in any useEffect then re render will happen
      </p>
      <div>
        <h2> sample component</h2>
        <p>{count}</p>
        <button
          onClick={() => {
            let countInc = count + 1;
            setCount(countInc);
          }}
        >
          Increment
        </button>
        <p>{doubledNumber}</p>
        <button onClick={changeTheme}>Change theme</button>
        <div style={custom_style}></div>
      </div>
    </div>
  );
};

export default UMHook;
