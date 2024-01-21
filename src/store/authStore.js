import { create } from "zustand";

const useAuthStore = create((set) => ({
  // User object is fetched from local storage to be used
  // in the case of a refresh.
  // If not present (i.e. no user logged in yet),
  // it will be null by default.
  user: JSON.parse(localStorage.getItem("user-info")),
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user) => set({ user }),
}));

export default useAuthStore;
