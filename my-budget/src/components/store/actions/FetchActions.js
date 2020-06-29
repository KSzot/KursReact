export const FetchActionTypes = {
  FETCH_BUDGET_START: 'FETCH_BUDGET_START',
  FETCH_BUDGET_SUCCESS: 'FETCH_BUDGET_SUCCESS',
  FETCH_BUDGET_FAIL: 'FETCH_BUDGET_FAIL',
  FETCH_BUDGET_CATEGORIES_START: 'FETCH_BUDGET_CATEGORIES_START',
  FETCH_BUDGET_CATEGORIES_SUCCESS: 'FETCH_BUDGET_CATEGORIES_SUCCESS',
  FETCH_BUDGET_CATEGORIES_FAIL: 'FETCH_BUDGET_CATEGORIES_FAIL',
};

export const FetchActions = {
  FetchBudget,
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
      console.log(data);
      dispatch({
        type: FetchActionTypes.FETCH_BUDGET_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: FetchActionTypes.FETCH_BUDGET_FAIL,
      });
      console.log(error);
    }
  };
}
