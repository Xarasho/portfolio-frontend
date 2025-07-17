import Image from "next/image";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

export default function Project() {
  return (
    <article className="rounded-xl flex flex-col gap-3 group max-h-96">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          width={500}
          height={500}
          src="https://res.cloudinary.com/dlgusambk/image/upload/v1692840056/tienda/pnoxcizjh89v9vbuftvj.jpg"
          // src="https://avatars.githubusercontent.com/u/42187901?v=4"
          alt="project-image"
          className="object-cover rounded-xl group-hover:scale-110 duration-300"
        />
        <div className="w-full h-full bg-neutral-900/0 group-hover:bg-neutral-900/60 absolute top-0 left-0 flex justify-center items-center transition-all">
          <button className="rounded-lg p-4 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 bg-neutral-700 transition-all duration-300">
            <RemoveRedEyeOutlinedIcon sx={{ color: '#fef08a'}} />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-white font-semibold">Title</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          nesciunt reprehenderit obcaecati dolorum? Minus illum quis enim sed
          explicabo quia ab dolorum in corporis doloremque? Recusandae officia
          asperiores facilis ipsa.
        </p>
      </div>
    </article>
  );
}
