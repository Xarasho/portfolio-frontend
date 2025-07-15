import Layout from "@/modules/common/layouts/layout";

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

        <article className="flex gap-5 mt-5">
          <div className="flex items-center justify-center h-1 w-1 bg-yellow-200 p-2 rounded-full relative ml-2">
            <span className="border-r border-neutral-700 w-[1px] h-10 absolute -bottom-10"></span>
          </div>

          <div>
            <h2 className="text-white font-semibold">Title of education</h2>
          <span className="text-yellow-200">2019 - 2023</span>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            perferendis qui cupiditate ipsam aspernatur praesentium dolores rem
            suscipit, pariatur quos soluta minus nobis amet nostrum accusantium
            veritatis sequi. Distinctio, quae?
          </p>
          </div>
        </article>
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
