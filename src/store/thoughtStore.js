import { create } from "zustand";

export const useThoughtStore = create((set) => ({
  totalPages: 0,
  currentPage: 1, // default start page
  setTotalPages: (pages) => set({ totalPages: pages }),
  setCurrentPage: (page) => set({ currentPage: page }),
}));