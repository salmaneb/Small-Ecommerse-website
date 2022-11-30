let initialState=0;
export const cake=(state=initialState,action)=>{
    switch(action.type){
        case 'INC': return state++;
        default: return state;
    }
}