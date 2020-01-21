import {postsStore} from './posts.store';

const posts = [
    {
        id: 1,
        title: 'Title 1',
        price: '10',
        assignedPeople: 'A'
    },
    {
        id: 2,
        title: 'Title 2',
        price: '20',
        assignedPeople: 'B'
    }
]

export function fetchPosts() {
    postsStore.setPosts(posts);
}