const INITIAL_STATE = { mood: "(¬‿¬)" };

function moodReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case "ANGRY": 
            return {...state, mood: "ಠ╭╮ಠ" };
        case "HAPPY": 
            return {...state, mood: "ʘ‿ʘ" };
        case "SAD": 
            return {...state, mood: "⊙︿⊙" };
        case "CONFUSED": 
            return {...state, mood: "◔_◔" };
        case "RESET": 
            return {...state, mood: "(¬‿¬)" };
        default: 
            return state;

    }
}

const store = Redux.createStore(moodReducer);

