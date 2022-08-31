const bundlesReducer = (state, action) => {
    switch(action.type) {
        case 'createNewBundle':
            return {...state, }
        case 'deleteBundle':
            return {...state, }
        case 'correctBundle':
            return {...state, }
        default:
            return {...state}
    }
}

export default bundlesReducer;
