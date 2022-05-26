// ಠ╭╮ಠ  angry
// ʘ‿ʘ   happy
// ◔_◔  confused
// ⊙︿⊙ sad
// (¬‿¬) face

const h1 = document.querySelector("h1");
const buttons = document.querySelector("div");

buttons.addEventListener('click', function(e) {
    switch (e.target.id) {
        case "sad": {
            store.dispatch({type: "SAD"});
            break;
        };
        case "happy": {
            store.dispatch({type: "HAPPY"});
            break;
        };
        case "angry": {
            store.dispatch({type: "ANGRY"});
            break;
        };
        case "confused": {
            store.dispatch({type: "CONFUSED"});
            break;
        };
        case "reset": {
                store.dispatch({type: "RESET"});
                break;
            };
    }
    const state = store.getState();
    h1.innerText = state.mood;
});

