export default function ConsiliumAboutPage() {
  const principles = [
    {
      title: 'Decision-first orientation',
      text: 'Consilium.ai is built around the idea that the greatest enterprise value often comes from improving decisions, not only automating tasks.',
    },
    {
      title: 'Executive relevance',
      text: 'The firm is designed to help leaders address risk, growth, capital allocation, timing, and strategic positioning with greater clarity.',
    },
    {
      title: 'Systemic thinking',
      text: 'Consilium.ai connects data, models, workflows, and operating choices into a more coherent enterprise capability for decision-making.',
    },
  ];

  const companyPoints = [
    'AI Decision Intelligence platform and advisory model',
    'Built on AAIDIS, the Agentic AI Decision Intelligence System',
    'Focused on forecasting, simulation, optimization, and strategic guidance',
    'Designed for leaders operating under uncertainty and complexity',
  ];

  const values = [
    {
      title: 'Clarity',
      text: 'Make complex questions understandable without stripping away what matters.',
    },
    {
      title: 'Rigor',
      text: 'Ground recommendations in structured analysis, scenario thinking, and disciplined evaluation.',
    },
    {
      title: 'Practicality',
      text: 'Deliver outputs leaders can use in real business decisions, not just technical artifacts.',
    },
    {
      title: 'Durability',
      text: 'Help organizations build long-term capability instead of isolated pilots and one-off exercises.',
    },
  ];

  const journey = [
    {
      step: '01',
      title: 'Recognize the gap',
      text: 'Most AI conversations focus on productivity and automation, while the larger opportunity in decision quality remains underserved.',
    },
    {
      step: '02',
      title: 'Build the platform',
      text: 'AAIDIS was conceived as a decision intelligence system that integrates forecasting, simulation, causal reasoning, optimization, and agentic orchestration.',
    },
    {
      step: '03',
      title: 'Translate to enterprise value',
      text: 'Consilium.ai brings that platform into an external-facing business model through strategic use cases, executive intelligence, and decision support.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#E1E5E9] text-[#163766] font-sans">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <header className="rounded-[28px] bg-white/95 shadow-[0_20px_60px_rgba(22,55,102,0.08)] ring-1 ring-white/60">
          <div className="flex flex-col gap-5 px-6 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1253A4] via-[#198F8A] to-[#4FB86E] text-white shadow-lg">
                <svg viewBox="0 0 64 64" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 49c-6-3-10-9-10-17 0-11 9-20 20-20 10 0 18 7 20 17" />
                  <path d="M19 39c4-3 8-6 12-10" />
                  <path d="M29 27c2 3 3 6 2 10" />
                  <circle cx="18" cy="40" r="3" />
                  <circle cx="30" cy="27" r="3" />
                  <circle cx="31" cy="39" r="3" />
                  <path d="M36 24c3-6 12-8 18-3 6 4 8 13 4 19-5 8-16 10-24 4" />
                  <path d="M41 27l6 6 12-12" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold tracking-tight">
                  <span className="text-[#163766]">Consilium</span>
                  <span className="text-[#4FB86E]">.ai</span>
                </div>
                <div className="text-sm text-[#526371]">AI Decision Intelligence</div>
              </div>
            </div>
            <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-[#526371]">
              <a className="transition hover:text-[#1253A4]" href="#home">Home</a>
              <a className="transition hover:text-[#1253A4]" href="#platform">Decision Platform</a>
              <a className="transition hover:text-[#1253A4]" href="#use-cases">Use Cases</a>
              <a className="transition hover:text-[#1253A4]" href="#decision-intelligence">Decision Intelligence</a>
              <a className="transition hover:text-[#1253A4]" href="#insights">Insights</a>
              <a className="font-semibold text-[#163766]" href="#about">About Consilium</a>
              <a className="transition hover:text-[#1253A4]" href="#contact">Contact</a>
              <button className="rounded-xl bg-[#4FB86E] px-4 py-2 text-white shadow-md transition hover:-translate-y-0.5">Request a Demo</button>
            </nav>
          </div>
        </header>

        <section id="about" className="mt-8 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#1253A4] via-[#114A90] to-[#198F8A] shadow-[0_24px_70px_rgba(18,83,164,0.28)]">
          <div className="grid items-center gap-12 px-8 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-16">
            <div className="text-white">
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur-sm">
                About Consilium.ai
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight lg:text-6xl">
                Built to help enterprises make <span className="text-[#8EE2B1]">better decisions</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Consilium.ai exists to help organizations move beyond fragmented analytics, isolated AI pilots, and productivity-only thinking. The firm is built around a larger premise: decision quality is one of the most important drivers of durable enterprise value.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-[#4FB86E] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
                  Explore the Platform
                </button>
                <button className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15">
                  View Use Cases
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 h-32 w-32 rounded-3xl bg-white/10 blur-xl" />
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#4FB86E]/20 blur-2xl" />
              <div className="relative rounded-[30px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <div className="rounded-[24px] bg-[#0F396F]/50 p-5 ring-1 ring-white/10 text-white">
                  <div className="text-sm font-semibold text-[#8EE2B1]">What Consilium.ai is</div>
                  <div className="mt-5 space-y-3">
                    {companyPoints.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#4FB86E]" />
                        <span className="text-sm leading-6 text-white/88">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[32px] bg-white px-8 py-10 shadow-[0_18px_60px_rgba(22,55,102,0.08)] ring-1 ring-[#D6DDE3] lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">Who We Are</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#163766] lg:text-5xl">A decision intelligence company with a strategic point of view</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#526371]">
              Consilium.ai is not positioned as a generic AI consultancy. It is built to help leaders think more clearly, plan more rigorously, and act more effectively under uncertainty.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="rounded-[26px] bg-[#F8FAFB] p-6 ring-1 ring-[#DDE4EA] shadow-sm">
                <div className="text-2xl font-bold text-[#163766]">{item.title}</div>
                <p className="mt-4 text-base leading-7 text-[#526371]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-[32px] bg-gradient-to-r from-white to-[#F3F8F8] px-8 py-10 shadow-[0_18px_60px_rgba(22,55,102,0.06)] ring-1 ring-[#D6DDE3]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">Our Journey</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#163766] lg:text-4xl">From a platform vision to an enterprise offering</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#526371]">
              Consilium.ai emerged from the recognition that enterprises need more than prediction, dashboards, or productivity tools. They need a better way to make decisions.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {journey.map((item) => (
              <div key={item.step} className="rounded-[26px] bg-white p-6 shadow-sm ring-1 ring-[#DDE4EA]">
                <div className="text-sm font-semibold text-[#198F8A]">{item.step}</div>
                <div className="mt-2 text-2xl font-bold text-[#163766]">{item.title}</div>
                <p className="mt-3 text-base leading-7 text-[#526371]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-[0_18px_60px_rgba(22,55,102,0.08)] ring-1 ring-[#D6DDE3]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">What We Value</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#163766]">Principles that shape the work</h2>
            <div className="mt-8 space-y-5">
              {values.map((item) => (
                <div key={item.title} className="rounded-2xl bg-[#F8FAFB] p-5 ring-1 ring-[#E3E9EE]">
                  <div className="text-xl font-bold text-[#163766]">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-[#526371]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1253A4] via-[#163766] to-[#198F8A] p-8 text-white shadow-[0_20px_70px_rgba(18,83,164,0.24)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">What We Aim To Build</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">A more durable enterprise capability for decision-making</h2>
            <p className="mt-4 text-base leading-7 text-white/82">
              Consilium.ai is intended to help organizations move toward a more AI-native operating model, where better decisions are supported systematically through information, models, and structured judgment.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Move beyond isolated pilots',
                'Build decision capability at scale',
                'Connect analytics to action',
                'Support leadership under uncertainty',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-lg font-semibold">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-12 mb-6 overflow-hidden rounded-[34px] bg-gradient-to-r from-[#163766] via-[#1253A4] to-[#198F8A] px-8 py-12 text-center text-white shadow-[0_24px_80px_rgba(18,83,164,0.28)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Ready to Engage</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-5xl">Work with Consilium.ai</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/82">
            Whether the need is a strategic use case, a platform discussion, or a broader enterprise decision intelligence conversation, Consilium.ai is designed to meet leaders where the stakes are highest.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-2xl bg-[#4FB86E] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
              Request a Demo
            </button>
            <button className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15">
              Start a Conversation
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
