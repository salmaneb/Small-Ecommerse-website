import React from 'react';
//import react from 'react'
import Hoc from './Hoc';
//import { consumser } from './Context';
class A extends React.Component{
    render(){
        let{count,inc}=this.props;
        return(

<>
<h2>{count}</h2>
<button onClick={inc}>add</button>
</>
        )
    }
}
let Inc=Hoc(A);
export default Inc;