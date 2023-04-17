import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const element = document.getElementById("counter");
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight) {
        // Долистали до элемента, начинаем счет
        let i = 0;
        const interval = setInterval(() => {
          if (i > 10000000) {
            clearInterval(interval);
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
  }, []);

  return (
    <div style={{ fontSize: "2em", color: "#ff8800" }}>
      {count.toLocaleString()}
    </div>
  );
}

export default function usercounter() {
  return (
    <div>
      <p> </p>
      <div id="counter">
        <Counter />
      </div>
      <p>Users tried OsmAnd</p>
    </div>
  );
}
