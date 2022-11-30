import React from "react";
const Hoc=(NewComp)=>{
    return class extends React.Component{
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
            return <NewComp count={this.state.count} inc={this.inc}  />
        }
    }
}
export default Hoc;
