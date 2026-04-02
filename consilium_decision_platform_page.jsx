export default function ConsiliumDecisionPlatformPage() {
  const platformLayers = [
    {
      title: 'Integrated Intelligence Layer',
      text: 'Unify macroeconomic, market, company, operational, and external signals into a structured information foundation for decision-making.',
    },
    {
      title: 'Modeling & Simulation Layer',
      text: 'Combine forecasting, scenario analysis, simulation, causal reasoning, and estimation to understand how conditions may evolve.',
    },
    {
      title: 'Decision & Optimization Layer',
      text: 'Evaluate strategic alternatives, quantify trade-offs, and identify actions that best balance growth, resilience, and risk.',
    },
    {
      title: 'Executive Delivery Layer',
      text: 'Translate technical output into executive-ready reports, dashboards, scenario tools, and decision support workflows.',
    },
  ];

  const capabilities = [
    'Forecasting across multiple horizons',
    'Scenario generation and stress testing',
    'Monte Carlo and uncertainty analysis',
    'Causal reasoning and decision impact evaluation',
    'Optimization and action prioritization',
    'Agentic orchestration across models and workflows',
  ];

  const differentiators = [
    {
      title: 'Not just prediction',
      text: 'AAIDIS is designed to support full decisions, not simply generate forecasts or charts.',
    },
    {
      title: 'Not just dashboards',
      text: 'The platform is built to evaluate alternatives, compare scenarios, and guide action under uncertainty.',
    },
    {
      title: 'Not just one model',
      text: 'It integrates multiple analytical methods into a coherent decision intelligence system.',
    },
  ];

  const workflow = [
    {
      step: '01',
      title: 'Ingest and structure the information set',
      text: 'Bring together structured and unstructured data relevant to the strategic problem.',
    },
    {
      step: '02',
      title: 'Generate possible futures',
      text: 'Forecast outcomes, simulate scenarios, and assess alternative paths and ranges.',
    },
    {
      step: '03',
      title: 'Evaluate strategic choices',
      text: 'Compare actions against business objectives, constraints, and downside risks.',
    },
    {
      step: '04',
      title: 'Deliver decision guidance',
      text: 'Surface insights through reports, dashboards, and executive decision workflows.',
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
              <a className="font-semibold text-[#163766]" href="#platform">Decision Platform</a>
              <a className="transition hover:text-[#1253A4]" href="#use-cases">Use Cases</a>
              <a className="transition hover:text-[#1253A4]" href="#decision-intelligence">Decision Intelligence</a>
              <a className="transition hover:text-[#1253A4]" href="#insights">Insights</a>
              <a className="transition hover:text-[#1253A4]" href="#about">About Consilium</a>
              <a className="transition hover:text-[#1253A4]" href="#contact">Contact</a>
              <button className="rounded-xl bg-[#4FB86E] px-4 py-2 text-white shadow-md transition hover:-translate-y-0.5">Request a Demo</button>
            </nav>
          </div>
        </header>

        <section id="platform" className="mt-8 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#1253A4] via-[#114A90] to-[#198F8A] shadow-[0_24px_70px_rgba(18,83,164,0.28)]">
          <div className="grid items-center gap-12 px-8 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-16">
            <div className="text-white">
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur-sm">
                The Decision Platform Behind Consilium.ai
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight lg:text-6xl">
                AAIDIS is built for <span className="text-[#8EE2B1]">enterprise decision intelligence</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                The platform combines integrated data, forecasting, simulation, causal reasoning, optimization, and agentic orchestration to help leaders evaluate choices under uncertainty and act with greater precision.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-[#4FB86E] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
                  Explore Architecture
                </button>
                <button className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15">
                  Request a Platform Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 h-32 w-32 rounded-3xl bg-white/10 blur-xl" />
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#4FB86E]/20 blur-2xl" />
              <div className="relative rounded-[30px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ['Forecasting', 'See likely paths'],
                    ['Simulation', 'Stress-test futures'],
                    ['Optimization', 'Evaluate best actions'],
                    ['Agentic Layer', 'Orchestrate intelligence'],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl bg-white/12 p-4 text-white shadow-inner ring-1 ring-white/10">
                      <div className="text-sm font-semibold text-[#8EE2B1]">{title}</div>
                      <div className="mt-2 text-xl font-bold">{text}</div>
                      <div className="mt-3 h-20 rounded-xl bg-gradient-to-br from-white/10 to-transparent p-3">
                        <div className="flex h-full items-end gap-2">
                          <div className="h-8 w-3 rounded-full bg-[#8EE2B1]" />
                          <div className="h-14 w-3 rounded-full bg-white/70" />
                          <div className="h-10 w-3 rounded-full bg-[#8EE2B1]" />
                          <div className="h-16 w-3 rounded-full bg-white/60" />
                          <div className="h-12 w-3 rounded-full bg-[#8EE2B1]" />
                          <div className="ml-auto h-10 w-10 rounded-full border-2 border-white/60" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="architecture" className="mt-12 rounded-[32px] bg-white px-8 py-10 shadow-[0_18px_60px_rgba(22,55,102,0.08)] ring-1 ring-[#D6DDE3] lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">Platform Architecture</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#163766] lg:text-5xl">A layered system for decision-making</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#526371]">
              AAIDIS is designed as a modular platform that turns broad information inputs into decision-ready outputs for enterprise leadership.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {platformLayers.map((item, idx) => (
              <div key={item.title} className="rounded-[26px] bg-[#F8FAFB] p-6 ring-1 ring-[#DDE4EA] shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1253A4] to-[#198F8A] text-lg font-bold text-white shadow-md">
                    0{idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-[#163766]">{item.title}</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-[#526371]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="capabilities" className="mt-12 rounded-[32px] bg-gradient-to-r from-white to-[#F3F8F8] px-8 py-10 shadow-[0_18px_60px_rgba(22,55,102,0.06)] ring-1 ring-[#D6DDE3]">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">Core Capabilities</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#163766] lg:text-4xl">What the platform is designed to do</h2>
              <p className="mt-4 text-base leading-7 text-[#526371]">
                The platform supports both analytical depth and executive usability. It is meant to help decision-makers move from fragmented signals to structured choices.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item} className="rounded-2xl bg-white px-5 py-5 font-semibold text-[#163766] shadow-sm ring-1 ring-[#DDE4EA]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-[0_18px_60px_rgba(22,55,102,0.08)] ring-1 ring-[#D6DDE3]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">Why It Is Different</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#163766]">Built to improve decisions, not just tasks</h2>
            <div className="mt-8 space-y-5">
              {differentiators.map((item) => (
                <div key={item.title} className="rounded-2xl bg-[#F8FAFB] p-5 ring-1 ring-[#E3E9EE]">
                  <div className="text-xl font-bold text-[#163766]">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-[#526371]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1253A4] via-[#163766] to-[#198F8A] p-8 text-white shadow-[0_20px_70px_rgba(18,83,164,0.24)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Strategic Outcome</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">From analytics to action guidance</h2>
            <p className="mt-4 text-base leading-7 text-white/82">
              AAIDIS is intended to help organizations move beyond isolated pilots and point solutions toward a more durable operating capability for strategic decision intelligence.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Reduce uncertainty across decisions',
                'Frame alternative futures clearly',
                'Compare strategic actions rigorously',
                'Deliver executive-ready guidance',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-lg font-semibold">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="mt-12 rounded-[32px] bg-white px-8 py-10 shadow-[0_18px_60px_rgba(22,55,102,0.08)] ring-1 ring-[#D6DDE3] lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">How It Works</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#163766] lg:text-4xl">A practical decision workflow</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#526371]">
              The platform is designed to move methodically from information integration to strategic action support.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {workflow.map((item) => (
              <div key={item.step} className="rounded-[26px] bg-[#F8FAFB] p-6 ring-1 ring-[#DDE4EA] shadow-sm">
                <div className="text-sm font-semibold text-[#198F8A]">{item.step}</div>
                <div className="mt-2 text-2xl font-bold text-[#163766]">{item.title}</div>
                <p className="mt-3 text-base leading-7 text-[#526371]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-12 mb-6 overflow-hidden rounded-[34px] bg-gradient-to-r from-[#163766] via-[#1253A4] to-[#198F8A] px-8 py-12 text-center text-white shadow-[0_24px_80px_rgba(18,83,164,0.28)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Ready to Engage</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-5xl">See how the Decision Platform fits your business</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/82">
            Whether the need is enterprise forecasting, scenario planning, strategic risk management, or executive decision support, Consilium.ai can shape the platform around the questions that matter most.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-2xl bg-[#4FB86E] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
              Request a Demo
            </button>
            <button className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15">
              Discuss the Platform
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
