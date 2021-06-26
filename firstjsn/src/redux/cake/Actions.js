export const buyCake=()=>{
    return {
        type:'buycake'
    }
}

export const buyIce=(num=1)=>{
    return {
        type:'buyice',
        payload:num
    }
}