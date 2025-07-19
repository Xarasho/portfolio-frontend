import { create } from 'zustand';
import { axiosClient } from '@/services/axios.service';

interface Profile {
  id: string;
  name: string;
  specialty: string;
  phone: string;
  email: string;
  birthDay: string;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type Store = {
  profile: Profile | null
  getProfile(): void
}

export const useProfileStore = create<Store>()( set => ({
  profile: null,
  getProfile: async () => {
    try {
      const { data } = await axiosClient.get<Profile>("/profile")
      set({
        profile: data
      })
      // console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
}))