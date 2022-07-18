import profileReducer, { addPostActionCreator } from "../Redux/profile-reducer";

it("length of posts should be incremented", () => {
  let state = {
    posts: [
      { id: 1, message: "Hi", likesCount: 13 },
      { id: 2, message: "Hi", likesCount: 5 },
      { id: 3, message: "Blabla", likesCount: 7 },
    ],
  };
  //2. action
  let action = addPostActionCreator("it-kamasutra.com");

  let newState = profileReducer(state, action);

  //.3 expectation

  expect(newState.posts.length).toBe(4);
  expect(newState.posts[3].message).toBe("it-kamasutra.com");
});
