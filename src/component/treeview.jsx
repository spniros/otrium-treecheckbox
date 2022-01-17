import React, { useState }  from 'react'
import ListTree from './listtree';
import PropTypes from 'prop-types';
 
// const nodes = [{
//     value: 'mars',
//     label: 'Mars',
//     children: [
//         { value: 'phobos', label: 'Phobos' },
//         { value: 'deimos', label: 'Deimos',
//         children: [
//             { value: 'phobos', label: 'Phobos' },
//             { value: 'deimos', label: 'Deimos' },
//         ], },
//     ],
// },{
//     value: 'mars',
//     label: 'Mars',
//     children: [
//         { value: 'phobos', label: 'Phobos' },
//         { value: 'deimos', label: 'Deimos' },
//     ],
// }];

const TreeView = ({data}) => {
  const [nodes, setNodes] = useState(data);



    return (
      <ListTree data={nodes}/>
      
    )
}

// data types
TreeView.propTypes = {
	data: PropTypes.any,	
};


export default TreeView
