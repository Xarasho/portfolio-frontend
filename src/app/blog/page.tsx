import Layout from "@/modules/common/layouts/layout";
import Article from '../../modules/blog/components/article.component';

export default function Blog() {
  return (
    <Layout>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Article />
        <Article />
        <Article />
      </section>
    </Layout>
  );
}
