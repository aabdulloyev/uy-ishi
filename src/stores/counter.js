import { defineStore } from "pinia";

export const useCounter = defineStore("counter", {
  state: () => ({
    count: 0,
    users: [
      { id: 1, name: "Amirbek", role: "admin" },
      { id: 2, name: "Diyor", role: "user" },
      { id: 3, name: "Asliddin", role: "user" },
      { id: 4, name: "Sardor", role: "admin" },
      { id: 5, name: "Sa'dulla", role: "admin" },
      { id: 6, name: "Abdukabir", role: "user" },
      { id: 7, name: "Abduraxmon", role: "mederator" },
      { id: 8, name: "Farux", role: "mederator" },
      { id: 9, name: "Faxriddin", role: "mederator" },

    ],
  }),
  actions: {
    plusCount() {
      this.count++;
    },
    minusCount() {
      this.count--;
    },
  },
  getters: {
    getAdmins: (state) => state.users.filter((user) => user.role == "admin"),
    getUsers: (state) => state.users.filter((user) => user.role == "user"),
    getMederator: (state) => state.users.filter((user) => user.role == "mederator"),
  },
});


// admin
// moderator
// user