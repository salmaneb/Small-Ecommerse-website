import React from "react";
class Render extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        };
    }
    inc=()=>{
        this.setState({count:this.state.count+1});
    }

    render(){
        return(
            <>
{this.props.render(this.state.count,this.inc)}
            </>
        );
    }
}
export default Render;