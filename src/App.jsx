export default function App() {
  return (
    <main className="text-neutral-900">
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/holding/Nuro Group Logo.svg" alt="Nuro Group" className="h-6" />
          </div>
          <a href="mailto:hello@nurogroup.co.uk" className="text-sm rounded-xl px-3 py-2 bg-neutral-900 text-white">Get in touch</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <img src="/assets/holding/Hero.png" alt="Abstract hero" className="w-full max-h-[70vh] object-cover" />
        <div className="mx-auto max-w-7xl px-4 py-12">
          <p className="uppercase text-xs tracking-[0.22em] text-neutral-500">Launching soon</p>
          <h1 className="text-4xl md:text-5xl font-semibold mt-2">Nuro Group</h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Parent company for advanced R&D and technology ventures. We bring together expertise in embedded engineering,
            industrial design and product commercialisation to turn complex ideas into scalable solutions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
          <img src="/assets/holding/stats.png" alt="PCB abstract" className="w-full rounded-2xl border border-neutral-200" />
          <div className="grid grid-cols-3 gap-4">
            {[
              ["200+", "projects delivered"],
              ["10+", "patents authored"],
              ["—", "award-winning design & engineering"],
            ].map(([n, t]) => (
              <div key={t} className="rounded-2xl border border-neutral-200 p-5">
                <div className="text-2xl font-semibold">{n}</div>
                <div className="text-sm text-neutral-600 mt-1">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surfaces */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold">What we do</h2>
            <p className="mt-3 text-neutral-600">
              We incubate and back R&D programmes that bridge concept and execution — across AI, connected devices,
              thermal & energy systems, and next-generation user experiences.
            </p>
          </div>
          <img src="/assets/holding/surfaces.png" alt="Surfaces & shadows" className="w-full rounded-2xl border border-neutral-200" />
        </div>
      </section>

      {/* Logistics */}
      <section className="py-10 bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4">
          <img src="/assets/holding/logistics.png" alt="Logistics abstraction" className="w-full rounded-2xl border border-neutral-200" />
        </div>
      </section>

      {/* PCB */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4">
          <img src="/assets/holding/pcb.png" alt="PCB close-up" className="w-full rounded-2xl border border-neutral-200" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 rounded-3xl border border-neutral-200 p-8">
          <h3 className="text-2xl font-semibold">Want to talk?</h3>
          <p className="mt-2 text-neutral-700">Email us and we’ll loop you into the launch.</p>
          <a href="mailto:hello@nurogroup.co.uk" className="inline-block mt-5 rounded-xl bg-neutral-900 text-white px-4 py-2">hello@nurogroup.co.uk</a>
        </div>
      </section>

      <footer className="border-t border-neutral-200 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Nuro Group
      </footer>
    </main>
  );
}