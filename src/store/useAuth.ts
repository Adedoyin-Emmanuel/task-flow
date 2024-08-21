import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuth = create(
  persist(
    (set, get) => ({
      user: null,
      isLoggedIn: false,
      login: (user: any) => set({ isLoggedIn: true, user }),
      logout: () => set({ isLoggedIn: false, user: null }),
    }),
    {
      name: "auth",
    }
  )
);

export default useAuth;
