import { useEffect, useRef, useState } from "react";

const URhook = () => {
  const [current, setCurrent] = useState("");
  const prev = useRef("");
  const onInputChnage = (e) => {
    setCurrent(e.target.value);
  };
  useEffect(() => {
    prev.current = current;
  }, [current]);
  return (
    <div>
      <h1>UseRef hook</h1>
      <h2>Sample</h2>
      <input value={current} onChange={onInputChnage} />
      <h1>Current value : {current}</h1>
      <h1>Previous value : {prev.current}</h1>
    </div>
  );
};

export default URhook;
