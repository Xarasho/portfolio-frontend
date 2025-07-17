import Layout from "@/modules/common/layouts/layout";
import ProjectLayout from '../../modules/project/layouts/project-layout.component';
import Project from '../../modules/project/components/project.component';

export default function Portfolio() {
  return (
      <Layout>
        <ProjectLayout />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Project />
          <Project />
          <Project />
        </section>
      </Layout>
    )
}