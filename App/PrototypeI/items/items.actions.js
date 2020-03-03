import {itemsStore} from './items.store';

const items = [
    {
    id:0,
    itemName: "Item 1",
    price: 10,
    assignedPeople: ["Person A"],
    taxValue: 13,
    tipValue: 10
    },
    {
    id:1,
    itemName: "Item 2",
    price: 20,
    assignedPeople: ["Person A", "Person B"],
    taxValue: 13,
    tipValue: 10
    },
    {
    id:2,
    itemName: "Item 3",
    price: 30,
    assignedPeople: ["Person B"],
    taxValue: 13,
    tipValue: 10
    }
];

const people = [
    {
    personName: "Person A",
    selected: false
    },
    {
    personName: "Person B",
    selected: false
    }
];


export function fetchItems(){
    itemsStore.setItems(items);    
}

export function addItem(item){
    itemsStore.addItem(item);
}

export function fetchPerson(){
    itemsStore.setPeople(people);
} 

export function addPerson(person){
    itemsStore.addPerson(person);
}


