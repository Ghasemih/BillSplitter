import * as remx from 'remx'
const initialState = {
    posts: []
    // This is how it'll look
    // {
    //     "posts": [
    //       {
    //         "id": 1,
    //         "title": "Post 1",
    //         "price": "Post 1 text",
    //         "assignedPeople": "https://picsum.photos/200/200/?image=1"
    //       },
    //       {
    //         "id": 2,
    //         "title": "Post 2",
    //         "price": "Post 2 text",
    //         "assignedPeople": "https://picsum.photos/200/200/?image=2"
    //       }
    //     ]
    //   }
};

const state = remx.state(initialState);

// To return parts of the state, define functions
// under getters
const getters = remx.getters({
    getPosts(){
        return state.posts;
    }
});

//To change parts of the state, define functions
// under setters
const setters = remx.setters({
    setPosts(posts) {
        state.posts = posts;
    }
});

export const postsStore = {
    ...getters,
    ...setters
};