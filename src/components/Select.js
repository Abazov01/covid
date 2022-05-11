import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getOneCountry } from './../actions/country';

export default function Select(props) {
  const [data, setData] = useState()
  const countries = useSelector((data) => data.allCountries);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getOneCountry(data))
  },[data])
  return (
    <div>
      <select
        onChange={(e) => setData(e.target.value)}
        className="select"
        name=""
      >
        {countries ? (
          countries.map((e) => (
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
