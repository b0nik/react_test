const ADD_STATE = "ADD_STATE";

export default function (state = [], action) {
    switch (action.type) {
        case ADD_STATE: 
            return action.payload;

        default :
            return state

    }

}
