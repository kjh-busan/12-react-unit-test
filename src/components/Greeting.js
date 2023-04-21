import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const changedTextHandler = () => {};

  return (
    <div>
      <h2>Hello World!</h2>
      <p>It's good to see you</p>
      <button onClick={changedTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
