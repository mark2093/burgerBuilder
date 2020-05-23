 import React from 'react';
 import './BuildControls.css'
 import BuildControl from "./BuildControl/BuildControl";

 const controls=[
     {label: 'Salad', type: 'salad'},
     {label: 'Cheese', type: 'cheese'},
     {label: 'Bacon', type: 'bacon'},
     {label: 'Meat', type: 'meat'},
   
      
 ];

const buildControls = (props) =>(   

    <div className="BuildControls">
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl =>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            remove={() => props.ingredientRemove(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
/>
        ))}
        <button className="OrderButton"
         disabled={!props.purchasable}>OrderNow</button>
    </div>

);

export default buildControls