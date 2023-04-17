import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [finishedCounting, setFinishedCounting] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const element = document.getElementById("counter");
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight && !finishedCounting) {
        // Долистали до элемента, начинаем счет
        let i = 0;
        const interval = setInterval(() => {
          if (i > 10500000) {
            clearInterval(interval);
            setFinishedCounting(true);
          } else {
            setCount(i);
            i += 500000;
          }
        }, 30);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [finishedCounting]);

  return (
    <div style={{ fontSize: "2em", color: "#ff8800" }}>
      {count.toLocaleString()}
    </div>
  );
}

export default function Tanya() {
  return (
    <div>
      <p> </p>
      <div id="counter">
        <Counter />
      </div>
      <p>Ludzie próbowali</p>
    </div>
  );
}
