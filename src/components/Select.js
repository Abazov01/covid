import React from "react";

export default function Select(props) {
  
  return (
    <div>
      <select
        onChange={(e) => props.setData(e.target.value)}
        className="select"
        name=""
      >
        {props.countries ? (
          props.countries.map((e) => (
            <option key={e.Slug} value={e.Slug}>
              {e.Country}
            </option>
          ))
        ) : (
          <option value={""}>--.--</option>
        )}
      </select>
    </div>
  );
}
