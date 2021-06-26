const initialstate={
    noofcakes:10,
    icecream:20
}

export const reducer=(state=initialstate,action)=>{
    switch (action.type) {
        case 'buycake': return{
            ...state, noofcakes:state.noofcakes-1   
        } 
        case 'buyice': return {
            ...state, icecream:state.icecream-action.payload
        }
            
        default: return state
    }
}

export default reducer;