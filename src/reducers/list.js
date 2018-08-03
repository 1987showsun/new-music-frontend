export default function list(
    state={
        currentPage : 1,
        total       : 0,
        limit       : 10,
        incs        :  [],
    },
    action
){  
    switch ( action.type ) {
        case "LIST_INC_SET":
            state = { ...state, currentPage:action.currentPage, total:action.total, limit:action.limit, incs: action.list }
            break;
    
        default:
            break;
    }
    
    return state;
}