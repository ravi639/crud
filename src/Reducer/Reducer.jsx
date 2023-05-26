const InitialData = {
    details: [],
    isResponse : false,
    isDelete : false,
    //will take third parameter for delete
}

const reducer = (state = InitialData, action) => {
    switch (action.type) {
        case 'GET_DETAILS':
            return {
                details: action.payload
            }
            case 'POST_DETAILS':
                return {
                    isResponse: action.payload
                }    

                case 'DELETE_DETAILS':
                    return {
                        isDelete:action.payload
                    }    

                //same as above for delete
        default: return state;
    }
}

export default reducer;