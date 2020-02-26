import * as remx from 'remx';
const initialState = {
    items: [],
    people: []
};

const state = remx.state(initialState);

const getters = remx.getters({

    getItems() {
        return state.items;
    },

    getPeople() {
        return state.people;
    }

});

const setters = remx.setters({

    setItems(items){
        state.items = items;
    },

    addItem(item){
        state.items = [...state.items, item];
    },

    setPeople(people){
        state.people = people;
    },

    addPerson(person){
        state.people = [...state.people,person];
    }

})

export const itemsStore = {
    ...getters,
    ...setters
};
