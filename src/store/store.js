
export default class Store {
    constructor(reducer, state) {
        this.state = state;
        this.reducer = reducer;
        this.listeners = [];
    }

    getState() {
        return this.state;
    }

    subscribe(cb) {
        this.listeners.push(cb);
        return () => {
            const index = this.listeners.indexOf(cb);
            this.listeners.splice(index, 1);
        };
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action);
    }
}