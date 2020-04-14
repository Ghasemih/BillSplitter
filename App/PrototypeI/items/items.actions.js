import {itemsStore} from './items.store';

const items = [
    {
    id:0,
    itemName: "Item 1",
    price: 10,
    assignedPeople: [],
    taxValue: 13,
    tipValue: 10
    },
    {
    id:1,
    itemName: "Item 2",
    price: 20,
    assignedPeople: [],
    taxValue: 13,
    tipValue: 10
    },
    {
    id:2,
    itemName: "Item 3",
    price: 30,
    assignedPeople: [],
    taxValue: 13,
    tipValue: 10
    }
];

const people = [
    {
    personName: "Person A",
    selectedItems: ["Item 1", "Item 2"]
    },
    {
    personName: "Person B",
    selectedItems: ["Item 1", "Item 2", "Item 3"]
    }
];


export function fetchItems(){
    itemsStore.setItems(items);    
}

export function addItem(item){
    itemsStore.addItem(item);
}

export function getItems(){
    itemsStore.getItems();
}

export function setItems(givenItems){
    itemsStore.setItems(givenItems);
}

export function fetchPerson(){
    itemsStore.setPeople(people);
} 

export function addPerson(person){
    itemsStore.addPerson(person);
}

export function getPeople(){
    itemsStore.getPeople();
}

export function setPeople(givenPeople){
    itemsStore.setPeople(givenPeople);
}

