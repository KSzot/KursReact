import React from 'react';
import { connect } from 'react-redux';

const BudgetCategoryList = ({}) => {
  return <div>BudgetCategoryList</div>;
};

const mapStateToProps = (state) => {
  return {
    loading: state.FetchReducers.loading,
    budget: state.FetchReducers.budget,
    budgetCategories: state.FetchReducers.budgetCategories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBudget: (id) => dispatch(FetchActions.FetchBudget(id)),
    onFetchBudgetCategoires: (id) =>
      dispatch(FetchActions.FetchBugdetCategories(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetCategoryList);
