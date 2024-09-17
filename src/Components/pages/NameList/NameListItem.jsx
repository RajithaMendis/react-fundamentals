import React from "react";
import moment from "moment";

function NameListItem(props){
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-sm">
                <img src={props.avatar}/>
                </div>
                <div className="col-sm">
              <h4>Name: {props.name}</h4>
             </div>
            </div>
            
        
         <p>{props.location}</p>
         <p>{props.email}</p>
         <p>{moment(props.birthday).format('DD-MM-YYYY')}</p>
        </li>
    );
}

export default NameListItem;