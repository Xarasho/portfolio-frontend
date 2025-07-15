import Layout from "@/modules/common/layouts/layout";
import Achievement from '../../modules/common/components/achievement.component';

export default function Resume() {
  return (
    <Layout>

      <section className="mt-9">
        <article className="flex items-center gap-5">
          <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl p-4 relative flex items-center justify-center">
            <span className="border-r border-neutral-700 w-[1px] h-6 absolute -bottom-6"></span>
          </div>
          <h1 className="text-2xl text-white font-semibold">Education</h1>
        </article>

        <Achievement />
      </section>

      <section className="mt-9">
        <article className="flex items-center gap-5">
          <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl p-4 relative flex items-center justify-center">
            <span className="border-r border-neutral-700 w-[1px] h-6 absolute -bottom-6"></span>
          </div>
          <h1 className="text-2xl text-white font-semibold">Experience</h1>
        </article>
      </section>
    
    </Layout>
  );
}
