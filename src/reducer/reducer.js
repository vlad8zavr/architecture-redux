const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_FILE':
        const newState = {...state};
            for(let key in newState){
                if(key.match(action.fileName)){
                    newState[key].visible = true;
                } else {
                    newState[key].visible = false;
                }
            }

        return newState
    };
};

export { reducer };