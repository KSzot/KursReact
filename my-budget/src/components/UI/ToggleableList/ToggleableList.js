import React, { Fragment, useState } from 'react';

const Item = ({ item, onClickHandler, isActive }) => (
  <div>
    <item.Trigger onClick={onClickHandler} />
    {isActive && item.children}
  </div>
);

const ToggleableList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState();
  //console.log(selectedItem);
  return (
    <Fragment>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          isActive={selectedItem === item.id}
          onClickHandler={setSelectedItem}
        />
      ))}
    </Fragment>
  );
};

export default ToggleableList;
