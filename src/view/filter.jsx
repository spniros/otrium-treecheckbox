import React, { useEffect, useState } from 'react'
import TreeView from 'src/component/treeview';
import { convert } from 'src/helper/dataConvert';
// import { convert } from 'src/helper/dataConvert';
import data  from '../data/data';

const Filter = () => {


const [categoryList, setCategoryList] = useState()

// function convert(array){
//     var map = {}
//     for(var i = 0; i < array.length; i++){
//         var obj = array[i]
//         if(!(obj.id in map)){
//             map[obj.id] = obj
//             map[obj.id].children = []
//         }
        
//         if(typeof map[obj.id].Name == 'undefined'){
//             map[obj.id].id = obj.id
//             map[obj.id].name = obj.name
//             map[obj.id].count = obj.count
//             map[obj.id].parent= obj.parent
//         }

//         var parent = obj.parent || '-';
//         if(!(parent in map)){
//             map[parent] = {}
//             map[parent].children = []
//         }

//         map[parent].children.push(map[obj.id])
//     }
//     console.log(map);
//     return map['-'].children;
  
   

// }
  
    useEffect(() => {
        debugger;
        // let cat=categories.map(x=> {
         
        
        //     const newPropsObj = {
              
        //         children:[]
        //       };
            
        //       // Assign new properties and return
        //       return Object.assign(x, newPropsObj);
        // });
        // console.log(JSON.stringify(convert(data.data.categories), undefined, "\t"));
        let datalist= convert(data.data.categories);
        setCategoryList(datalist)

    }, [])

    return (
        <div>
           {categoryList &&  categoryList.length>0 && <TreeView data={categoryList} /> } 
            
        </div>
    )
}

export default Filter
