import { create } from "zustand";

const useUserProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  // Used to update the post count by adding the latest post id to the others
  addPost: (post) =>
    set((state) => ({ userProfile: { ...state.userProfile, posts: [post.id, ...state.userProfile.posts] } })),
  deletePost: (postId) =>
    set((state) => ({
      userProfile: { ...state.userProfile, posts: state.userProfile.posts.filter((id) => id !== postId) },
    })),
}));

export default useUserProfileStore;
