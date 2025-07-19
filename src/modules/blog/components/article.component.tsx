import Image from "next/image";

export default function Article() {
  return (
    <article className="rounded-xl flex flex-col gap-2 group bg-neutral-800 hover:cursor-pointer">
      <div className="overflow-hidden rounded-xl">
        <Image
          height={500}
          width={500}
          src="https://res.cloudinary.com/dlgusambk/image/upload/v1692840056/tienda/pnoxcizjh89v9vbuftvj.jpg"
          alt="blog-image"
          className="object-cover rounded-xl group-hover:scale-110 w-full max-h-60 transition-transform"
        />
      </div>
      <div className="flex flex-col gap-3 px-4 py-5">
        <p className="text-gray-500">Web Design - Feb 23, 2025</p>
        <h3 className="text-2xl text-white font-bold">Article Title</h3>
        <p className="text-white">Article Description</p>
      </div>
    </article>
  );
}
