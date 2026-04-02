export default function ConsiliumDecisionIntelligencePage() {
  const pillars = [
    {
      title: 'Reduce uncertainty',
      text: 'Bring together richer information sets so leaders can make choices with a narrower uncertainty envelope.',
    },
    {
      title: 'Model possible futures',
      text: 'Use forecasting, scenarios, and simulation to understand alternative states, ranges, and pathways before acting.',
    },
    {
      title: 'Evaluate actions',
      text: 'Compare choices across growth, resilience, risk, and strategic fit instead of relying on instinct alone.',
    },
    {
      title: 'Guide enterprise action',
      text: 'Translate analysis into decision-ready recommendations, executive narratives, and operating direction.',
    },
  ];

  const contrasts = [
    {
      title: 'Traditional analytics',
      points: ['Explains what happened', 'Often backward-looking', 'Usually fragmented across teams'],
    },
    {
      title: 'AI productivity tools',
      points: ['Accelerate tasks and workflows', 'Reduce labor and cycle time', 'Do not necessarily improve strategic choices'],
    },
    {
      title: 'Decision intelligence',
      points: ['Frames what could happen next', 'Evaluates alternatives before commitment', 'Supports better enterprise decisions under uncertainty'],
    },
  ];

  const workflow = [
    {
      step: '01',
      title: 'See the full information set',
      text: 'Integrate macro, market, company, operational, and external signals relevant to the decision context.',
    },
    {
      step: '02',
      title: 'Understand the range of futures',
      text: 'Forecast, simulate, and stress-test conditions to reveal downside, upside, and base-case paths.',
    },
    {
      step: '03',
      title: 'Assess the impact of choices',
      text: 'Estimate how actions affect outcomes and compare trade-offs across competing priorities.',
    },
    {
      step: '04',
      title: 'Choose and act with clarity',
      text: 'Deliver executive-ready recommendations that connect evidence, scenarios, and action.',
    },
  ];

  const outcomes = [
    'Sharper strategic timing',
    'Stronger capital allocation',
    'Better risk-adjusted choices',
    'More resilient planning under uncertainty',
    'Clearer executive alignment',
    'Greater decision consistency across the enterprise',
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
              <a className="font-semibold text-[#163766]" href="#decision-intelligence">Decision Intelligence</a>
              <a className="transition hover:text-[#1253A4]" href="#insights">Insights</a>
              <a className="transition hover:text-[#1253A4]" href="#about">About Consilium</a>
              <a className="transition hover:text-[#1253A4]" href="#contact">Contact</a>
              <button className="rounded-xl bg-[#4FB86E] px-4 py-2 text-white shadow-md transition hover:-translate-y-0.5">Request a Demo</button>
            </nav>
          </div>
        </header>

        <section id="decision-intelligence" className="mt-8 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#1253A4] via-[#114A90] to-[#198F8A] shadow-[0_24px_70px_rgba(18,83,164,0.28)]">
          <div className="grid items-center gap-12 px-8 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-16">
            <div className="text-white">
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur-sm">
                Decision Intelligence for Enterprise Leaders
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight lg:text-6xl">
                Better decisions matter more than <span className="text-[#8EE2B1]">faster tasks</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Decision intelligence helps organizations reduce uncertainty, evaluate alternatives, and choose actions with greater clarity. It connects information, modeling, and executive judgment into a repeatable capability for better enterprise decisions.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-[#4FB86E] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
                  Explore the Platform
                </button>
                <button className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15">
                  See Use Cases
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 h-32 w-32 rounded-3xl bg-white/10 blur-xl" />
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#4FB86E]/20 blur-2xl" />
              <div className="relative rounded-[30px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <div className="rounded-[24px] bg-[#0F396F]/50 p-5 ring-1 ring-white/10">
                  <div className="text-sm font-semibold text-[#8EE2B1]">Decision Intelligence Loop</div>
                  <div className="mt-4 space-y-4">
                    {[
                      'Information breadth',
                      'Scenario understanding',
                      'Trade-off evaluation',
                      'Action guidance',
                    ].map((item, idx) => (
                      <div key={item} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#4FB86E] text-sm font-bold text-white">0{idx + 1}</div>
                        <div className="text-base font-semibold text-white">{item}</div>
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
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">What It Means</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#163766] lg:text-5xl">Decision intelligence is a system for making better choices</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#526371]">
              It is not just analytics, and it is not just automation. It is the disciplined process of reducing uncertainty, seeing possible futures, evaluating actions, and guiding leadership decisions.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((item) => (
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
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">Why It Matters</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#163766] lg:text-4xl">The distinction between analytics, productivity, and decision intelligence</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#526371]">
              Organizations often invest in tools that explain the past or accelerate work. Fewer build the capability to improve the quality of their decisions.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {contrasts.map((item) => (
              <div key={item.title} className="rounded-[26px] bg-white p-6 shadow-sm ring-1 ring-[#DDE4EA]">
                <div className="text-2xl font-bold text-[#163766]">{item.title}</div>
                <div className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <div key={point} className="flex items-start gap-3 text-sm text-[#526371]">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#4FB86E]" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-[0_18px_60px_rgba(22,55,102,0.08)] ring-1 ring-[#D6DDE3]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">How Decision Intelligence Works</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#163766]">A practical decision workflow</h2>
            <div className="mt-8 space-y-5">
              {workflow.map((item) => (
                <div key={item.step} className="flex gap-4 rounded-2xl bg-[#F8FAFB] p-4 ring-1 ring-[#E3E9EE]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1253A4] to-[#198F8A] text-sm font-bold text-white shadow-md">
                    {item.step}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#163766]">{item.title}</div>
                    <p className="mt-1 text-sm leading-6 text-[#526371]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1253A4] via-[#163766] to-[#198F8A] p-8 text-white shadow-[0_20px_70px_rgba(18,83,164,0.24)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Enterprise Value</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Decision quality compounds across the business</h2>
            <p className="mt-4 text-base leading-7 text-white/82">
              Better decisions affect strategic timing, capital allocation, risk posture, and operational resilience. The impact accumulates across many choices over time.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-lg font-semibold">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-12 mb-6 overflow-hidden rounded-[34px] bg-gradient-to-r from-[#163766] via-[#1253A4] to-[#198F8A] px-8 py-12 text-center text-white shadow-[0_24px_80px_rgba(18,83,164,0.28)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Ready to Engage</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-5xl">Build decision intelligence into your operating model</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/82">
            Consilium.ai helps organizations move beyond fragmented analytics and isolated AI tools toward a more durable capability for structured decision-making under uncertainty.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-2xl bg-[#4FB86E] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
              Request a Demo
            </button>
            <button className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15">
              Discuss Your Business Need
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
