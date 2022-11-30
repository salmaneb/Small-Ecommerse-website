const initialState={
    users:[]
};
const sampleReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'suc':return {users:action.payload};
        default: return state;
    }

}
export default sampleReducer;