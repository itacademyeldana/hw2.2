import React, {useState} from "react";

function App() {
  const [redColor, setRedColor] = useState('red');
  const [blueColor, setBlueColor] = useState('blue');

  const swapColors = () => {
    setRedColor(blueColor);
    setBlueColor(redColor);
  };

  return (
      <div className="App">
        <div
            className="square"
            style={{ backgroundColor: redColor }}
            onClick={swapColors}
        ></div>
        <div
            className="square"
            style={{ backgroundColor: blueColor }}
            onClick={swapColors}
        ></div>
      </div>
  );
}



export default App;
