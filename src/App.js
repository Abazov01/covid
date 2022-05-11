import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneCountry, getAllCountries, getSummary } from "./actions/country";
import "./App.css";
import Select from "./components/Select";
import List from "./components/List";

export default function App() {
  const dispatch = useDispatch();
  const current = useSelector((data) => data.currentCountry);
  const summary = useSelector((data) => data.summary);
  console.log(summary);
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getSummary());
    dispatch(getOneCountry("kyrgyzstan"));
  }, []);
  return (
    <div className="wrapper">
      <div className="container">
        <Select />
        <div className="main">
          <div className="main__left">
            <List current={current} />
          </div>
          <div className="main__right">
            <h3 className="main-right__title">
              Top recovered cases in the world
            </h3>
            <p className="main-right__count">{summary.NewDeaths}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
