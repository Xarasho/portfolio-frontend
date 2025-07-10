interface Props {
  children: React.ReactNode
}

export default function Layout({children}: Props) {
  return (
    <main className="bg-neutral-800 mx-auto p-20">
      <aside></aside>

      <section>
        {children}
      </section>
    </main>
  )
}