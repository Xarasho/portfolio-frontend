import Activity from "@/modules/common/activity/components/activity.component";
import Layout from "@/modules/common/layouts/layout";
import SoftSkill from "@/modules/soft-skill/components/soft-skill.component";

export default function Home() {
  return (
    <Layout>
      <section>
        <p className="text-white">Home</p>
      </section>

      <section className="mt-8">
        <h2 className="text-white font-semibold text-2xl">{`What I'm doing`}</h2>
        {
          // Render components here
        }
        <div className="grid grid-cols-2 gap-3 mt-5">
          <Activity />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-white font-semibold text-2xl">Soft Skills</h2>
        <div className="grid grid-cols-2 gap-3 mt-10">
          <SoftSkill />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-white font-semibold text-2xl">Tech Stack</h2>
      </section>
    </Layout>
  );
}
