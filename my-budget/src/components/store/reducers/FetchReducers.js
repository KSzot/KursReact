import { FetchActionTypes } from '../actions/FetchActions';

const initialState = {
  loading: false,
};

const FetchReducers = (state = initialState, action) => {
  switch (action.type) {
    case FetchActionTypes.FETCH_BUDGET_START:
    case FetchActionTypes.FETCH_BUDGET_CATEGORIES_START:
      return { ...state, loading: true };
    case FetchActionTypes.FETCH_BUDGET_SUCCESS:
    case FetchActionTypes.FETCH_BUDGET_CATEGORIES_SUCCESS:
      return { ...state, loading: false };
    case FetchActionTypes.FETCH_BUDGET_FAIL:
    case FetchActionTypes.FETCH_BUDGET_CATEGORIES_FAIL:
      return state;

    default:
      return state;
  }
};

export default FetchReducers;
