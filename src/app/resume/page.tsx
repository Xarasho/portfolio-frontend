'use client'
import Layout from "@/modules/common/layouts/layout";
import Achievement from '../../modules/common/components/achievement.component';
import Percentages from '../../modules/common/components/percentages.component';
import { useIcons } from "@/modules/common/hooks/useIcons";
import { useEducationStore } from "@/stores/education.store";
import { useEffect } from "react";
import { useExperienceStore } from "@/stores/experience.store";
import { useLanguageStore } from "@/stores/languages.store";
import { useSkillStore } from "@/stores/skill.store";

export default function Resume() {
  
  const { icons } = useIcons();
  const educationList = useEducationStore(state => state.education);
  const getEducationList = useEducationStore(state => state.getEducationList);
  const experienceList = useExperienceStore(state => state.experience);
  const getExperienceList = useExperienceStore(state => state.getExperience);
  const getLanguages = useLanguageStore(state => state.getLanguages);
  const languages = useLanguageStore(state => state.languages);
  const skills = useSkillStore(state => state.skills);
  const getSkills = useSkillStore(state => state.getSkills);

  useEffect(() => {
    getEducationList();
    getExperienceList();
    getLanguages();
    getSkills();
  }, [])
  

  return (
    <Layout>

      <section className="mt-10">
        <article className="flex items-center gap-5 mb-10">
          <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl p-4 relative flex items-center justify-center">
          <span className="border-r border-neutral-700 w-[1px] h-10 absolute -bottom-10"></span>
            {
              icons.get('book')
            }
          </div>
          <h2 className="text-2xl text-white font-semibold">Education</h2>
        </article>
            {
              educationList?.length === 0 
                ? null
                : educationList.map((education, i) => (
                  <Achievement key={education.id} achievement={education} isLast={educationList.length - 1 === i} />
                ))
            }
        {/* <Achievement />
        <Achievement />
        <Achievement isLast={true} /> */}
      </section>

      <section className="mt-10">
        <article className="flex items-center gap-5">
          <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl p-3 relative flex items-center justify-center">
            <span className="border-r border-neutral-700 w-[1px] h-8 absolute -bottom-8"></span>
            {
              icons.get('book')
            }
          </div>
          <h2 className="text-2xl text-white font-semibold">Experience</h2>
        </article>
            {
              experienceList?.length === 0 
                ? null
                : experienceList.map((xp, i) => (
                  <Achievement key={xp.id} achievement={xp} isLast={experienceList.length - 1 === i} />
                ))
            }

        {/* <Achievement />
        <Achievement /> */}
      </section>

      <section className="mt-10">
        <h2 className="text-2xl text-white font-semibold">Languages</h2>
        <article className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl px-8 py-8 gap-8 flex flex-col mt-5"> 
          {
            languages?.length === 0
              ? null
              : languages.map((language) => (
                <Percentages key={language.id} property={language} />
              ))
          }        
          {/* <Percentages />
          <Percentages /> */}
        </article>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl text-white font-semibold">My Skills</h2>
        <article className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl px-8 py-8 gap-8 flex flex-col mt-5"> 
          {
            skills?.length === 0
              ? null
              : skills.map((skill) => (
                <Percentages key={skill.id} property={skill} />
              ))
          }
          {/* <Percentages />
          <Percentages />
          <Percentages /> */}
        </article>
      </section>
    
    </Layout>
  );
}
