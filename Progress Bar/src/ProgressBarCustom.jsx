import React from 'react';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
function ProgressBarCustom({ items, height, width }) {
  const sum = items.reduce((sum, i) => sum + i?.value, 0);

  return (
    <div className="wrapper">
      <div className="wrapper-cell">
        {items.map(({ color, value }) =>
          Array(Math.trunc((value / sum) * 100))
            .fill(0)
            .map(() => (
              <div
                key={getRandomArbitrary(0, 1000)}
                style={{ background: color, height, width }}
                className="bar-cell"
              ></div>
            ))
        )}
      </div>
      <ul className="bar-legend">
        {items.map(({ color, value, name }) => (
          <li key={getRandomArbitrary(0, 1000)}>
            <span style={{ background: color }} className="circle"></span> {name}: {value} (
            {Math.trunc((value / sum) * 100)}
            %)
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProgressBarCustom;
