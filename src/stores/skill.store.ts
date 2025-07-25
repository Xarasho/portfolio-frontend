import { create } from 'zustand';
import { axiosClient } from '@/services/axios.service';
import type { LanguageSkill } from '@/types/language-skill.interface';

type Store = {
  skills: LanguageSkill[];
  getSkills: () => void;
}

export const useSkillStore = create<Store>()(set => ({
  skills: [],
  getSkills: async () => {
    try {
      const { data } = await axiosClient.get<LanguageSkill[]>('/skill');
      set({ skills: data });
    } catch (error) {
      console.log(error);
    }
  }
}))