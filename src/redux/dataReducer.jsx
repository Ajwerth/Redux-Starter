import { fetchConstants } from "./fetchActions";

const INITIAL_STATE = {
  isLoading: "",
  fetched: "",
  didInvalidate: "",
  data: {}
};

const { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } = fetchConstants;

export const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_START:
      return Object.assign({}, state, {
        isLoading: true,
        fetched: false,
        didInvalidate: false,
        apiUrl: action.apiUrl
      });
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        fetched: true,
        didInvalidate: false,
        pipelines: action.payload,
        apiUrl: action.apiUrl
      });
    case FETCH_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        fetched: false,
        didInvalidate: true,
        error: action.error,
        apiUrl: action.apiUrl
      });
    default:
      return state;
  }
};

export const dataReducer = fetchReducer;
