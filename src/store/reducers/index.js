const initState = {
    Todos:[],
    filter:"all",
}


function todolist(state={},action){
    switch(action.type){
        case "add":
            {
                const Todos = [
                ...state.Todos,{
                    title:action.title,
                    complete: false,
                }];
                
                const stateNew = Object.assign({},state,{
                    Todos:Todos,
                });

                return stateNew;
                
            }
        default:
            return state;
        }    
}

export default todolist;