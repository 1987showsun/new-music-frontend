export default function info(
    state={
        data        : {},
        singer      : [],
        album       : []
    },
    action
){  
    switch ( action.type ) {
        case "INFO_INC_SET":
            state = { ...state, data: action.data, singer: action.singer, album: action.album }
            break;
    
        default:
            break;
    }
    
    return state;
}