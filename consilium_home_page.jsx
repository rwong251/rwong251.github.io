export default function ConsiliumHomePage() {
  const pillars = [
    {
      title: 'Decision Intelligence',
      text: 'Move beyond isolated analytics and connect forecasting, simulation, causal reasoning, optimization, and executive judgment into one system for better decisions.',
    },
    {
      title: 'Scenario-Led Strategy',
      text: 'Explore alternative futures, stress-test assumptions, and evaluate strategic choices before capital, resources, and time are committed.',
    },
    {
      title: 'Enterprise Execution',
      text: 'Deliver intelligence through reports, dashboards, advisory workflows, and decision support tools that leaders can actually use.',
    },
  ];

  const capabilities = [
    'Forecasting & early signal detection',
    'Scenario planning & simulation',
    'Risk & uncertainty management',
    'Capital allocation & portfolio choices',
    'Commercial and demand intelligence',
    'Executive briefings & strategic reporting',
  ];

  const workflow = [
    {
      step: '01',
      title: 'Integrate the information set',
      text: 'Bring together macro, market, company, and operational data into a decision-ready layer.',
    },
    {
      step: '02',
      title: 'Model futures and trade-offs',
      text: 'Generate forecasts, scenarios, and outcome ranges to understand what could happen next.',
    },
    {
      step: '03',
      title: 'Guide action for leaders',
      text: 'Translate analytics into executive-ready choices, priorities, and decision pathways.',
    },
  ];

  const outcomes = [
    'Reduce uncertainty',
    'Improve strategic timing',
    'Mitigate downside exposure',
    'Allocate resources more effectively',
  ];

  return (
    <div id="home" className="min-h-screen bg-[#E1E5E9] text-[#163766] font-sans">
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
              <a className="font-semibold text-[#163766]" href="#home">Home</a>
              <a className="transition hover:text-[#1253A4]" href="#platform">Decision Platform</a>
              <a className="transition hover:text-[#1253A4]" href="#capabilities">Capabilities</a>
              <a className="transition hover:text-[#1253A4]" href="#how-it-works">How It Works</a>
              <a className="transition hover:text-[#1253A4]" href="#why-consilium">Why Consilium.ai</a>
              <a className="transition hover:text-[#1253A4]" href="#contact">Contact</a>
              <button className="rounded-xl bg-[#4FB86E] px-4 py-2 text-white shadow-md transition hover:-translate-y-0.5">Request a Demo</button>
            </nav>
          </div>
        </header>

        <section className="mt-8 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#1253A4] via-[#114A90] to-[#198F8A] shadow-[0_24px_70px_rgba(18,83,164,0.28)]">
          <div className="grid items-center gap-12 px-8 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-18">
            <div className="text-white">
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur-sm">
                AI Decision Intelligence for Enterprise Leaders
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight lg:text-6xl">
                Turn complexity into <span className="text-[#8EE2B1]">better decisions</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Consilium.ai helps leaders reduce uncertainty, evaluate alternatives, and act with greater confidence. Powered by AAIDIS, the platform combines forecasting, simulation, optimization, and strategic intelligence into one decision system.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-[#4FB86E] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
                  Explore the Platform
                </button>
                <button className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15">
                  View Use Cases
                </button>
              </div>
              <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
                {[
                  ['Forecast', 'See what is likely next'],
                  ['Simulate', 'Understand alternatives'],
                  ['Decide', 'Choose with more confidence'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-lg font-bold">{title}</div>
                    <div className="mt-1 text-sm leading-6 text-white/78">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 h-32 w-32 rounded-3xl bg-white/10 blur-xl" />
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#4FB86E]/20 blur-2xl" />
              <div className="relative rounded-[30px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <div className="rounded-[24px] bg-[#0F396F]/50 p-5 ring-1 ring-white/10">
                  <div className="flex items-center justify-between text-white/80">
                    <span className="text-sm font-semibold">Decision Intelligence Dashboard</span>
                    <span className="rounded-full bg-[#4FB86E]/20 px-3 py-1 text-xs text-[#B8F0C9]">Live strategic view</span>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                      <div className="text-sm font-semibold text-[#8EE2B1]">Scenario Range</div>
                      <div className="mt-2 text-3xl font-bold text-white">Base / Down / Up</div>
                      <div className="mt-4 flex h-24 items-end gap-2">
                        <div className="h-10 w-4 rounded-full bg-white/60" />
                        <div className="h-16 w-4 rounded-full bg-[#8EE2B1]" />
                        <div className="h-12 w-4 rounded-full bg-white/60" />
                        <div className="h-20 w-4 rounded-full bg-[#8EE2B1]" />
                        <div className="h-14 w-4 rounded-full bg-white/60" />
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                      <div className="text-sm font-semibold text-[#8EE2B1]">Decision Drivers</div>
                      <div className="mt-4 space-y-3 text-sm text-white/82">
                        <div className="flex items-center justify-between"><span>Interest rates</span><span>High</span></div>
                        <div className="flex items-center justify-between"><span>Demand signals</span><span>Rising</span></div>
                        <div className="flex items-center justify-between"><span>Risk exposure</span><span>Moderate</span></div>
                        <div className="flex items-center justify-between"><span>Capital trade-off</span><span>Active</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                    <div className="text-sm font-semibold text-[#8EE2B1]">Recommended posture</div>
                    <div className="mt-2 text-xl font-bold text-white">Protect downside. Preserve optionality. Invest selectively.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="mt-12 rounded-[32px] bg-white px-8 py-10 shadow-[0_18px_60px_rgba(22,55,102,0.08)] ring-1 ring-[#D6DDE3] lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">Decision Platform</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#163766] lg:text-5xl">AAIDIS is the intelligence engine behind Consilium.ai</h2>
              <p className="mt-4 text-base leading-7 text-[#526371]">
                AAIDIS is built to support enterprise decisions, not just isolated tasks. It integrates broad information sets, models uncertainty, evaluates strategic options, and guides leaders toward action.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {pillars.map((item) => (
                <div key={item.title} className="rounded-[24px] bg-[#F8FAFB] p-5 ring-1 ring-[#DDE4EA]">
                  <div className="text-lg font-bold text-[#163766]">{item.title}</div>
                  <p className="mt-3 text-sm leading-6 text-[#526371]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="mt-12 rounded-[32px] bg-gradient-to-r from-white to-[#F3F8F8] px-8 py-10 shadow-[0_18px_60px_rgba(22,55,102,0.06)] ring-1 ring-[#D6DDE3]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">Core Capabilities</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#163766] lg:text-4xl">What leaders can do with Consilium.ai</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#526371]">
              Built for environments where decisions are complex, uncertainty is material, and leadership needs a structured basis for action.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item} className="rounded-2xl bg-white px-5 py-5 font-semibold text-[#163766] shadow-sm ring-1 ring-[#DDE4EA]">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-[0_18px_60px_rgba(22,55,102,0.08)] ring-1 ring-[#D6DDE3]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">How It Works</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#163766]">From information to action</h2>
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

          <div id="why-consilium" className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1253A4] via-[#163766] to-[#198F8A] p-8 text-white shadow-[0_20px_70px_rgba(18,83,164,0.24)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Why Consilium.ai</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Better decisions create durable value.</h2>
            <p className="mt-4 text-base leading-7 text-white/82">
              Many AI efforts focus on productivity alone. Consilium.ai is built around the larger opportunity: improving decisions across risk, growth, capital allocation, and strategic positioning.
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
          <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-5xl">Bring decision intelligence into your business</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/82">
            Start with a strategic use case, an executive briefing, or a tailored decision intelligence engagement built around the questions your leadership team needs to answer.
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
