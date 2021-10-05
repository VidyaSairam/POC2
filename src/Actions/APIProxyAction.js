export const handleDispatch = (type,amount) => {
    return {
        type,
        data : amount
    }
}


export const handle_ProxyMiddle = (type,amount) =>{
    return dispatch => {
        setTimeout(()=>{
            dispatch(handleDispatch(type,amount))
            alert('Amount added!')
        },900)
        
    }
}