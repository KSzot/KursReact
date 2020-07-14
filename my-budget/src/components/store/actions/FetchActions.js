export const FetchActionTypes = {
  FETCH_BUDGET_START: 'FETCH_BUDGET_START',
  FETCH_BUDGET_SUCCESS: 'FETCH_BUDGET_SUCCESS',
  FETCH_BUDGET_FAIL: 'FETCH_BUDGET_FAIL',
  FETCH_BUDGET_CATEGORIES_START: 'FETCH_BUDGET_CATEGORIES_START',
  FETCH_BUDGET_CATEGORIES_SUCCESS: 'FETCH_BUDGET_CATEGORIES_SUCCESS',
  FETCH_BUDGET_CATEGORIES_FAIL: 'FETCH_BUDGET_CATEGORIES_FAIL',
  FETCH_BUDGET_ALLCATEGORIES_START: 'FETCH_BUDGET_ALLCATEGORIES_START',
  FETCH_BUDGET_ALLCATEGORIES_SUCCESS: 'FETCH_BUDGET_ALLCATEGORIES_SUCCESS',
  FETCH_BUDGET_ALLCATEGORIES_FAIL: 'FETCH_BUDGET_ALLCATEGORIES_FAIL',
};

export const FetchActions = {
  FetchBudget,
  FetchBugdetCategories,
  FetchAllCategories,
};

function FetchBudget(id) {
  return async (dispatch) => {
    dispatch({ type: FetchActionTypes.FETCH_BUDGET_START });
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`,
      );
      console.log(response);
      const data = await response.json();
      //console.log(data);
      dispatch({
        type: FetchActionTypes.FETCH_BUDGET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FetchActionTypes.FETCH_BUDGET_FAIL,
      });
      console.log(error);
    }
  };
}

function FetchBugdetCategories(id) {
  return async (dispatch) => {
    dispatch({ type: FetchActionTypes.FETCH_BUDGET_CATEGORIES_START });
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/budgets/${id}/budgetCategories`,
      );
      console.log(response);
      const data = await response.json();
      //console.log(data);
      dispatch({
        type: FetchActionTypes.FETCH_BUDGET_CATEGORIES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FetchActionTypes.FETCH_BUDGET_CATEGORIES_FAIL,
      });
      console.log(error);
    }
  };
}

function FetchAllCategories() {
  return async (dispatch) => {
    dispatch({ type: FetchActionTypes.FETCH_BUDGET_ALLCATEGORIES_START });
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/categories/?_expand=parentCategory`,
      );
      console.log(response);
      const data = await response.json();
      //console.log(data);
      dispatch({
        type: FetchActionTypes.FETCH_BUDGET_ALLCATEGORIES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FetchActionTypes.FETCH_BUDGET_ALLCATEGORIES_FAIL,
      });
      console.log(error);
    }
  };
}
