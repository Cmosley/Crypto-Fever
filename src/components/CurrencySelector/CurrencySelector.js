import React from 'react';

export default function Selector ({currencies, pair, handleSelect}) {

  return (
    <div className="container">
        {
          <select name="currency" value={pair} onChange={handleSelect}>
            {currencies.map((cur, idx) => {
              return (
                <option key={idx} value={cur.id}>
                  {cur.display_name}
                </option>
              );
            })}
          </select>
        }
        
    </div>
  )
}

