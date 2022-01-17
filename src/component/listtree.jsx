import React from "react";
import ListItemView from "./listitemview";
import PropTypes from 'prop-types';

const ListTree = ({ data }) => {
  return (
    <ul className="liststyle">
      <ListItemView data={data} />
    </ul>
  );
};


// data types
ListTree.propTypes = {
	data: PropTypes.any,
	
};
export default ListTree;
