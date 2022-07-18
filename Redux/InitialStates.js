export const initialStateForApp = {
  initialized: false,
};

export const initialStateForAuth = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

export const initialStateForDialogs = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ],

  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ],
};

export const initialStateForProfile = {
  posts: [
    { id: 1, message: "Hi", likesCount: 13 },
    { id: 1, message: "Hi", likesCount: 5 },
    { id: 1, message: "Blabla", likesCount: 7 },
  ],

  profile: null,
  status: "",
  photo1: null,
  photo2: null,
  photo3: null,
  music1: null,
  music2: null,
  music3: null
};

export const initialStateForSidebar = {};

export const initialStateForUsers = {
  users: [],
  followedUsers: [],
  usersWithStatus: [],
  totalUsersCount: 0,
  pageSizeForStatus: 100,
  followedUsersCount: 0,
  searchedUsers: [],
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};
