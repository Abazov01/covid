import axios from "axios";
import { GET_ALL, GET_ONE, GET_SUMMARY, GET_ONE2 } from "../config.js";
import { all, current, summary } from "../reducers/coutnryRed.js";
const dateNow = new Date();
const date =
  dateNow.getFullYear() +
  "-" +
  dateNow.getMonth() +
  "-" +
  dateNow.getDate() +
  "T" +
  dateNow.getHours() +
  ":" +
  dateNow.getMinutes() +
  ":" +
  dateNow.getSeconds() +
  "Z";

export const getAllCountries = () => async (dispatch) => {
  const req = await axios.get(GET_ALL);
  dispatch(all(req.data));
};

export const getSummary = () => async (dispatch) => {
  const res = await axios.get(GET_SUMMARY);
  dispatch(summary(res.data.Global));
};

export const getOneCountry = (country) => async (dispatch) => {
  let res = await axios.get(GET_ONE + country + GET_ONE2 + date);
  const provincy = res.data[0].Province;
  res = res.data.filter((e) => e.Province === provincy);
  res = res.slice(20, 30);
  dispatch(current(res.reverse()));
};
