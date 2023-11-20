import { useState, useEffect } from "react";
import "./JsonRender.scss";

function JsonRender() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/kocpeel/sciagaFiles/4e4cf2dec6a92daa2d3752342943af329a7079c1/historia/listopad.json"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div id="jsonRender">
        {data && (
          <>
            <h1 className="dzial">{data.dzial}</h1>
            {Object.values(data.tematy).map((temat, index) => (
              <div key={index}>
                <h2 className="nazwaTematu">{temat.nazwaTematu}</h2>
                <span className="description">{temat.description}</span>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default JsonRender;
