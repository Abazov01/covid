const CURRENT = "CURRENT";
const ALL_COUNTRIES = "ALL_COUNTRIES";
const SUMMARY = "SUMMARY";
const defaultState = {
  allCountries: [],
  currentCountry: [],
  summary: {},
};

export const countryReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CURRENT:
      return { ...state, currentCountry: payload };
    case ALL_COUNTRIES:
      return { ...state, allCountries: payload };
    case SUMMARY:
      return { ...state, summary: payload };
    default:
      return state;
  }
};

export const current = (current) => ({ type: CURRENT, payload: current });
export const all = (all) => ({ type: ALL_COUNTRIES, payload: all });
export const summary = (global) =>({type:SUMMARY, payload:global})
