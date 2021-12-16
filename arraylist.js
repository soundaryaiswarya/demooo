import React from 'React'
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownButton,dropdown} from 'react-bootstrap';


class arraylist extends React.Component{
 myproduct={
     mysubproduct:["subproduct 1","subproduct 2","subproduct 3"]
 }
 render(){
     return(
         <div>
             <select>
                 {this.myproduct.myarray.map(data=>(
                     <option>{data}
                         </option>

                 ))}
             </select>
             <DropdownButton id="dropdown-basic-button" title="Dropdown button">
             {this.myproduct.myarray.map(data=>(
             <Dropdown.Item title={data}>{data}</Dropdown.Item>
             ))}
            
</DropdownButton>
         </div>

     );
 }
}
export default arraylist;
