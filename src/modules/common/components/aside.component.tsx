import Image from "next/image";
import Info from "../../profile/components/info.component";
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useEffect } from "react";
import { useProfileStore } from "@/stores/profile.store";

export default function Aside() {

  const getProfile = useProfileStore((state) => state.getProfile);
  const profile = useProfileStore((state) => state.profile)
  useEffect(() => {
    getProfile()
  });

  return (
    <aside className="flex flex-col w-1/4 px-10 py-10 bg-neutral-900 my-14 rounded-2xl border border-neutral-800 justify-between">
      <div className="flex flex-col gap-5 items-center">
        <div className="bg-gradient-to-br from-neutral-800 to-[#212121] p-8 rounded-[30px]">
          <Image src="/profile.jpg" alt="Logo" height={500} width={500} className="rounded-full w-full max-h-[100px]" />
        </div>
        <h1 className="text-white font-bold text-2xl text-center">Manuel Alejandro Olmedo Rojas</h1>
        <span className="bg-neutral-800 px-4 py-2 rounded-lg">
          <h2 className="text-white text-sm">Full-Stack Web Developer</h2>
          {/* <h2 className="text-white text-sm">{profile?.specialty}</h2> */}
        </span>
      </div>

      <div className="w-full border-t border-neutral-600"></div>

      <div className="flex flex-col items-center gap-5">
        <Info type="email" content={ profile?.email || "" } />
        <Info type="phone" content={ profile?.phone || "" } />
        <Info type="birthday" content={ profile?.birthDay || "" } />
        <Info type="location" content={ profile?.location || "" } />
      </div>
      <div className="flex justify-center gap-5">
        <GithubIcon sx={{ color: 'white' }}/>
        <LinkedInIcon sx={{ color: 'white' }}/>
        <InstagramIcon sx={{ color: 'white' }}/>
      </div>
    </aside>
  );
}
