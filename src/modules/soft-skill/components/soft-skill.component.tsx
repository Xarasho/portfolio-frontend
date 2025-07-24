import { useIcons } from "@/modules/common/hooks/useIcons";
import type { SoftSkill } from "@/types/soft-skill.interface";


interface Props {
  skill: SoftSkill;
}

export default function SoftSkill({ skill }: Props) {
  
  const { icons } = useIcons();
  
  return (
    <div className="py-5 px-8 shadow-lg rounded-lg bg-neutral-800 flex justify-between">
      <div className="flex flex-col">
        <div className="flex gap-5">
          <div className="bg-gradient-to-br from-neutral-700 to-neutral-800 p-5 rounded-xl flex -mt-10">
            {
              icons.get(skill.icon)
            }
          </div>
          <h3 className="text-lg text-white font-semibold">{ skill.name }</h3>
        </div>
        <p className="text-neutral-300 mt-2">
          {skill.content}
        </p>
      </div>
    </div>
  );
}
