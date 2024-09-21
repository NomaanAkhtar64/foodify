import { create } from "zustand";

const useAccountStore = create((set) => ({
  user: {
    username: "",
    email: "",
    role: "",
    apiToken: "",
  },
  isLoggedIn: false,
  login: async function () {
    // const response = await fetch()
  },
}));
