'use client'
import Link from "next/link"
import Aside from "../components/aside.component"
import { usePathname } from "next/navigation"

interface Props {
  children: React.ReactNode
}

export default function Layout({children}: Props) {

  const pathName = usePathname()
  const title = pathName === '/' 
    ? 'About' 
    : pathName === '/resume'
    ? 'Resume'
    : pathName === '/contact'
    ? 'Contact'
    : pathName === '/portfolio'
    ? 'Portfolio'
    : 'Blog';

  return (
    <main className="bg-neutral-950 px-20 h-screen flex gap-5">

      <Aside />

      <section className="flex flex-col w-3/4 px-4 py-5 bg-neutral-900 my-20 rounded-lg relative">
      <header className="flex justify-between">
        <h1 className="text-white text-3xl font-bold mb-3 capitalize">{title}</h1>
        <nav className="absolute top-0 right-0 px-10 py-4 bg-neutral-800 rounded-bl-2xl border-b border-l border-neutral-700">
          <ul className="flex gap-10">
            <Link className="text-neutral-400 font-semibold capitalize" href={'/about'}>about</Link>
            <Link className="text-neutral-400 font-semibold capitalize" href={'/resume'}>resume</Link>
            <Link className="text-neutral-400 font-semibold capitalize" href={'/portfolio'}>portfolio</Link>
            <Link className="text-neutral-400 font-semibold capitalize" href={'/blog'}>blog</Link>
            <Link className="text-neutral-400 font-semibold capitalize" href={'/contact'}>contact</Link>
          </ul>
        </nav>
      </header>
        {children}
      </section>
    
    </main>
  )
}