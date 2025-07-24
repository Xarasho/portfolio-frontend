import { create } from "zustand";
import { axiosClient } from "@/services/axios.service";
import { Achievement } from "@/types/achievement.interface";

type Store = {
  education: Achievement[],
  getEducationList: () => void;
}

export const useEducationStore = create<Store>()(set => ({
  education: [],
  getEducationList: async () => {
    try {
      const { data } = await axiosClient.get<Achievement[]>('/education');
      set({ education: data }); 
    } catch (error) {
      console.log(error)
    }
  }
}))