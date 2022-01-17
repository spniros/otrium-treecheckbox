import React, {useState} from "react";
import ListTree from './listtree';
import Checkbox from './checkbox';
import PropTypes from 'prop-types';

// list items with check box 
const ListItemView = ({ data }) => {
  const [detail, setDetail] = useState(data)

  const changeTick=(val,item)=>{
    console.log(val);
    console.log(item);

  }

  const listItems = detail.map((item, index) => <li key={index}>  <Checkbox change={(e)=>changeTick(e,item)}/> {item?.name} {item.children && item.children.length>0  && <ListTree data={item.children}></ListTree>} </li>  );

  return (
      <>  
      {listItems}
      </>
      
    
  );
};

// data types
ListItemView.propTypes = {
	data: PropTypes.any,
	
};


export default ListItemView;
