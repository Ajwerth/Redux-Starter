import axios from "axios";

//Pipeline Constants
export const fetchConstants = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE"
};

// API url and endpoint
const apiUrl = "https://the-one-api.herokuapp.com/v1/books";

//Fetch Pipeline
export const fetch = authorization => {
  return dispatch => {
    dispatch(fetch(apiUrl));
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
