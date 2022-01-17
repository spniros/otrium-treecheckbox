import React from 'react'
import PropTypes from 'prop-types';

// check box for reusable 
const Checkbox = ({change}) => {

   const  checkedEvent =(event)=>{
        change(event.target.checked);
   }

    return (
        <>
            <input type="checkbox" onChange={(e)=>checkedEvent(e)}/>
        </>
    )
}

// data types
Checkbox.propTypes = {
	change: PropTypes.func,
	
};
export default Checkbox
