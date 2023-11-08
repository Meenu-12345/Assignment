import { useState } from "react";

function ConditionalDisplay() {
  const [visibility, setVisibility] = useState(true);
  return (
    <>
      {visibility && <div>Hello word</div>}
      <div>
        <button
          onClick={() => {
            setVisibility((prev) => !prev);
          }}
        >
          {visibility ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
}

export default ConditionalDisplay;
