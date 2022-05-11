import React from "react";
import Sceleton from "./Sceleton.js";
import { useSelector } from "react-redux";

export default function List() {
  const current = useSelector((data) => data.currentCountry);
  const month = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };
  return (
    <div className="list">
      {current ? (
        current.map((e, i) => {
          let date = e.Date.slice(5, 7);
          let day = e.Date.slice(8, 10);
          return (
            <div key={i} className="list__wrapper">
              <div className="list__left">
                <h1 className="list__day">{day + " - " + month[date]}</h1>
              </div>
              <div className="list__right">
                <div className="child__wrapper">
                  <div className="childs">
                    <p className="child__static">Active</p>
                    <p className="child__value">{e.Active}</p>
                  </div>
                  <div className="childs">
                    <p className="child__static">Confirmed</p>
                    <p className="child__value">{e.Confirmed}</p>
                  </div>
                </div>
                <div className="child__wrapper">
                  <div className="childs">
                    <p className="child__static">Death</p>
                    <p className="child__value">{e.Deaths}</p>
                  </div>
                  <div className="childs">
                    <p className="child__static">Recovered</p>
                    <p className="child__value">{e.Recovered}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <Sceleton />
      )}
    </div>
  );
}
