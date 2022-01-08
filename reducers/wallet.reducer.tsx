const walletReducer = (state: any, action: any) => {
    switch(action.type) {
        case 'LOAD-TOTAL':
            return ({...state, total: action.payload.total});
        case 'LOAD-ASSETS':
            return ({...state, assets: action.payload.assets});
        case 'LOAD-CHAINS':
            return ({...state, chains: action.payload.chains});
        case 'LOAD-PROTOCOLS':
            return ({...state, protocols: action.payload.protocols});
        default:
            return state;
    }
};

export default walletReducer;