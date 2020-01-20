import axios from "axios";

//Pipeline Constants
export const fetchConstants = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE"
};

// API url and endpoint
const apiUrl = "https://swapi.co/api/starships";

//Fetch Pipeline
export const fetch = () => {
  return dispatch => {
    axios
      .get(apiUrl)
      .then(response => dispatch(fetchSuccess(response.data, apiUrl)))
      .catch(error => dispatch(fetchFailure(apiUrl, error)));
  };
};

export const fetchStart = apiUrl => ({
  type: "FETCH_START",
  apiUrl: apiUrl
});

export const fetchSuccess = (data, apiUrl) => ({
  type: "FETCH_SUCCESS",
  payload: data,
  apiUrl: apiUrl
});

export const fetchFailure = (error, apiUrl) => ({
  type: "FETCH_FAILURE",
  error,
  apiUrl
});
