// import Image from "next/image";

export default function Info() {
  return (
    <div className="flex gap-2 w-full">
      <div className="bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-lg ">
        {/* <Image src="" alt="icon" /> */}
      </div>
      <div>
        <h1 className="text-neutral-400 text-sm uppercase">Email</h1>
        <p className="text-white text-sm">xarasho.mail@gmail.com</p>
      </div>
    </div>
  );
}
