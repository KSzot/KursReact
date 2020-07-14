import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FetchActions } from '../../components/store/actions/FetchActions';
import { Grid } from './Budget.css';
function Budget({
  onFetchBudget,
  onFetchBudgetCategoires,
  onFetchBudgetAllCategoires,
  budget,
}) {
  useEffect(() => {
    onFetchBudget(1);
    onFetchBudgetCategoires(1);
    onFetchBudgetAllCategoires();
  }, [onFetchBudget, onFetchBudgetCategoires, onFetchBudgetAllCategoires]);
  console.log(Object.entries(budget));
  return (
    <Grid>
      <section>
        <div>Czy to dziala</div>
      </section>
      <section>
        <div>No powinno</div>
      </section>
    </Grid>
  );
}

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
    onFetchBudgetAllCategoires: () =>
      dispatch(FetchActions.FetchAllCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
