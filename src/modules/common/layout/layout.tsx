import Image from "next/image";

interface Props {
  children: React.ReactNode
}

export default function Layout({children}: Props) {
  return (
    <main className="bg-neutral-950 px-20 h-screen flex gap-5">

      <aside className="flex flex-col w-1/4 px-4 py-5 bg-neutral-900 my-20 rounded-lg">
        <div className="flex flex-col gap-5 items-center h-1/2">
          <div className="bg-neutral-800 p-3 rounded-md">
            <Image src="" alt="Logo" />
          </div>
          <h1 className="text-white font-bold text-2xl">Manuel Alejandro Olmedo Rojas</h1>
          <span className="bg-neutral-800 p-2 rounded-lg">
            <h2 className="text-white text-sm">Full Stack Web Developer</h2>
          </span>
        </div>

        <div className="flex flex-col items-center gap-5 h-1/2">
          <div className="flex gap-2 w-full">
            <div className="bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-lg ">
              <Image src="" alt="icon" />
            </div>
            <div>
              <h1 className="text-neutral-400 text-sm uppercase">Email</h1>
              <p className="text-white text-sm">xarasho.mail@gmail.com</p>
            </div>
          </div>
        </div>
      </aside> 

      <section>
        {children}
      </section>
    
    </main>
  )
}