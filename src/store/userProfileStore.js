import { create } from "zustand";

const useUserProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  // Used to update the post count by adding the latest post id to the others
  addPost: (post) =>
    set((state) => ({ userProfile: { ...state.userProfile, posts: [post.id, ...state.userProfile.posts] } })),
}));

export default useUserProfileStore;
