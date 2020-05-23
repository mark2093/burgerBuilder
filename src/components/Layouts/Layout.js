import React from 'react';
import Aux from '../../hoc/Auxiliary';


import'./Layout.css';

const layout = (props) => (

    <Aux>
        <div >Tools, Side, Backdrop</div>
        <main className={"Lay"}>
            {props.children}
        </main>

    </Aux>
    
);

export  default layout;

