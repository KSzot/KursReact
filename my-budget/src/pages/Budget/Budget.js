import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FetchActions } from '../../components/store/actions/FetchActions';
import { Grid } from './Budget.css';
import BudgetCategoryList from './components/budgetCategoryList/BudgetCategoryList';
function Budget({
  onFetchBudget,
  onFetchBudgetCategoires,
  onFetchBudgetAllCategoires,
  budget,
  budgetCategories,
  loading,
  budgetAllCategories,
}) {
  useEffect(() => {
    onFetchBudget(1);
    onFetchBudgetCategoires(1);
    onFetchBudgetAllCategoires();
  }, [onFetchBudget, onFetchBudgetCategoires, onFetchBudgetAllCategoires]);
  return (
    <Grid>
      <section>
        {loading ||
        Object.keys(budget).length === 0 ||
        Object.keys(budgetCategories).length === 0 ||
        Object.keys(budgetAllCategories).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <BudgetCategoryList></BudgetCategoryList>
        )}
      </section>
      <section>
        {loading ||
        Object.keys(budget).length === 0 ||
        Object.keys(budgetCategories).length === 0 ||
        Object.keys(budgetAllCategories).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div>Transaction!!!</div>
        )}
      </section>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.FetchReducers.loading,
    budget: state.FetchReducers.budget,
    budgetCategories: state.FetchReducers.budgetCategories,
    budgetAllCategories: state.FetchReducers.budgetAllCategories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBudget: (id) => dispatch(FetchActions.FetchBudget(id)),
    onFetchBudgetCategoires: (id) =>
      dispatch(FetchActions.FetchBugdetCategories(id)),
    onFetchBudgetAllCategoires: () =>
      dispatch(FetchActions.FetchAllCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
