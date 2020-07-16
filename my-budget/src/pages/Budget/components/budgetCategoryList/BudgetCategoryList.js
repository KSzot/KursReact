import React from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';
import ToggleableList from '../../../../components/UI/ToggleableList/ToggleableList';
import ParentCategory from './ParentCategory';
import CategoryItem from './CategoryItem';
const BudgetCategoryList = ({
  loading,
  budgetCategories,
  budgetAllCategories,
}) => {
  const budgetCategoryByParent = groupBy(
    budgetCategories,
    (item) =>
      budgetAllCategories.find((category) => category.id === item.categoryId)
        .parentCategory.name,
  );
  const listItems = Object.entries(budgetCategoryByParent).map(
    ([parentName, category]) => ({
      id: parentName,
      Trigger: ({ onClick }) => (
        <ParentCategory name={parentName} onClick={() => onClick(parentName)} />
      ),
      children: category.map((item) => {
        const { name } = budgetAllCategories.find(
          (category) => category.id === item.categoryId,
        );
        return <CategoryItem key={name} name={name} />;
      }),
    }),
  );
  return <ToggleableList items={listItems} />;
};

const mapStateToProps = (state) => {
  return {
    loading: state.FetchReducers.loading,
    budgetCategories: state.FetchReducers.budgetCategories,
    budgetAllCategories: state.FetchReducers.budgetAllCategories,
  };
};

export default connect(mapStateToProps)(BudgetCategoryList);
