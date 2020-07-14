import { FetchActionTypes } from '../actions/FetchActions';

const initialState = {
  loading: false,
  budget: {},
  budgetCategories: {},
  budgetAllCategories: {},
};

const FetchReducers = (state = initialState, action) => {
  switch (action.type) {
    case FetchActionTypes.FETCH_BUDGET_START:
    case FetchActionTypes.FETCH_BUDGET_CATEGORIES_START:
    case FetchActionTypes.FETCH_BUDGET_ALLCATEGORIES_START:
      return { ...state, loading: true };
    case FetchActionTypes.FETCH_BUDGET_SUCCESS:
      return { ...state, loading: false, budget: action.payload };
    case FetchActionTypes.FETCH_BUDGET_CATEGORIES_SUCCESS:
      return { ...state, loading: false, budgetCategories: action.payload };
    case FetchActionTypes.FETCH_BUDGET_ALLCATEGORIES_SUCCESS:
      return { ...state, loading: false, budgetAllCategories: action.payload };
    case FetchActionTypes.FETCH_BUDGET_FAIL:
    case FetchActionTypes.FETCH_BUDGET_CATEGORIES_FAIL:
    case FetchActionTypes.FETCH_BUDGET_ALLCATEGORIES_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default FetchReducers;
