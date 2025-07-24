'use client'
import Layout from "@/modules/common/layouts/layout";
import Achievement from '../../modules/common/components/achievement.component';
import Percentages from '../../modules/common/components/percentages.component';
import { useIcons } from "@/modules/common/hooks/useIcons";
import { useEducationStore } from "@/stores/education.store";
import { useEffect } from "react";

export default function Resume() {
  
  const { icons } = useIcons();
  const educationList = useEducationStore(state => state.education);
  const getEducationList = useEducationStore(state => state.getEducationList);
  
  useEffect(() => {
    getEducationList();
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


        {/* <Achievement />
        <Achievement /> */}
      </section>

      <section className="mt-10">
        <h2 className="text-2xl text-white font-semibold">Languages</h2>
        <article className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl p-4 flex flex-col mt-5"> 
          <Percentages />
          <Percentages />
        </article>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl text-white font-semibold">My Skills</h2>
        <article className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl p-4 flex flex-col mt-5"> 
          <Percentages />
          <Percentages />
          <Percentages />
        </article>
      </section>
    
    </Layout>
  );
}
