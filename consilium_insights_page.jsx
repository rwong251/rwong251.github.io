export default function ConsiliumInsightsPage() {
  const featuredInsight = {
    category: 'Featured Insight',
    title: 'Why Decision Quality Matters More Than Productivity Alone',
    text: 'Many organizations approach AI through a productivity lens. That creates value, but it does not fully address the larger enterprise opportunity. The greater advantage often comes from improving the quality, timing, and consistency of strategic decisions across the business.',
  };

  const insightCards = [
    {
      category: 'Strategy',
      title: 'From AI experimentation to enterprise capability',
      text: 'What it takes to move from isolated pilots and proofs of concept to a durable operating model for AI-enabled decision-making.',
    },
    {
      category: 'Decision Intelligence',
      title: 'What decision intelligence actually means in practice',
      text: 'A practical explanation of how forecasting, simulation, causal reasoning, and optimization come together to support better choices.',
    },
    {
      category: 'Risk',
      title: 'Why uncertainty should be modeled, not ignored',
      text: 'How leaders can use scenario thinking and uncertainty ranges to improve resilience rather than rely on single-point planning.',
    },
    {
      category: 'Leadership',
      title: 'The executive case for AI-native decision systems',
      text: 'Why the long-term opportunity is not just automation, but building a systematic capability for enterprise judgment at scale.',
    },
    {
      category: 'Forecasting',
      title: 'Forecasts are useful, but decisions require more',
      text: 'Why prediction alone is not enough and how forecasting should connect to scenarios, actions, and trade-off evaluation.',
    },
    {
      category: 'Transformation',
      title: 'Building AI into the institution, not around it',
      text: 'How organizations can embed AI into planning, operations, and leadership processes rather than keep it at the edge of the enterprise.',
    },
  ];

  const themes = [
    'Enterprise AI strategy',
    'Decision intelligence',
    'Scenario planning',
    'Forecasting and uncertainty',
    'Risk and resilience',
    'Executive operating models',
  ];

  const valuePoints = [
    {
      title: 'Executive perspective',
      text: 'Insights are framed around the questions senior leaders must answer, not around technical novelty for its own sake.',
    },
    {
      title: 'Strategic relevance',
      text: 'The content is designed to connect AI, risk, macro conditions, and enterprise decisions into one coherent strategic conversation.',
    },
    {
      title: 'Applied thinking',
      text: 'The purpose is not only to inform, but to help organizations think more clearly about action, timing, and operating choices.',
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
              <a className="font-semibold text-[#163766]" href="#insights">Insights</a>
              <a className="transition hover:text-[#1253A4]" href="#about">About Consilium</a>
              <a className="transition hover:text-[#1253A4]" href="#contact">Contact</a>
              <button className="rounded-xl bg-[#4FB86E] px-4 py-2 text-white shadow-md transition hover:-translate-y-0.5">Request a Demo</button>
            </nav>
          </div>
        </header>

        <section id="insights" className="mt-8 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#1253A4] via-[#114A90] to-[#198F8A] shadow-[0_24px_70px_rgba(18,83,164,0.28)]">
          <div className="grid items-center gap-12 px-8 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-16">
            <div className="text-white">
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur-sm">
                Insights for Enterprise AI and Decision Intelligence
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight lg:text-6xl">
                Strategic thinking for an <span className="text-[#8EE2B1]">AI-native enterprise</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                The Insights page is where Consilium.ai connects ideas, operating models, and executive questions. It is designed to help leaders think more clearly about AI, risk, uncertainty, and the future of enterprise decision-making.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-[#4FB86E] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
                  Read Featured Insight
                </button>
                <button className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15">
                  Explore Thought Themes
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 h-32 w-32 rounded-3xl bg-white/10 blur-xl" />
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#4FB86E]/20 blur-2xl" />
              <div className="relative rounded-[30px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <div className="rounded-[24px] bg-[#0F396F]/50 p-5 ring-1 ring-white/10 text-white">
                  <div className="text-sm font-semibold text-[#8EE2B1]">Thought Leadership Themes</div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {themes.map((theme) => (
                      <div key={theme} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold ring-1 ring-white/10">
                        {theme}
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
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">Featured Insight</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#163766] lg:text-5xl">Lead the conversation, not just the implementation</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#526371]">
              Consilium.ai uses insights to frame the bigger strategic questions around enterprise AI, decision intelligence, and operating transformation.
            </p>
          </div>

          <div className="mt-8 rounded-[28px] bg-gradient-to-r from-[#F8FAFB] to-white p-8 ring-1 ring-[#DDE4EA] shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#198F8A]">{featuredInsight.category}</div>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#163766]">{featuredInsight.title}</h3>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#526371]">{featuredInsight.text}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1253A4]">
              Read the full perspective
              <span>→</span>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[32px] bg-gradient-to-r from-white to-[#F3F8F8] px-8 py-10 shadow-[0_18px_60px_rgba(22,55,102,0.06)] ring-1 ring-[#D6DDE3]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">Insight Library</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#163766] lg:text-4xl">Ideas that support strategic clarity</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#526371]">
              These articles and perspectives are intended to help executives, operators, and boards think more rigorously about AI and decision systems.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {insightCards.map((item) => (
              <div key={item.title} className="rounded-[28px] bg-white p-6 shadow-[0_18px_50px_rgba(22,55,102,0.08)] ring-1 ring-[#D6DDE3] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(22,55,102,0.12)]">
                <div className="text-sm font-semibold text-[#198F8A]">{item.category}</div>
                <h3 className="mt-3 text-2xl font-bold leading-tight text-[#163766]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#526371]">{item.text}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1253A4]">
                  Read article
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-[0_18px_60px_rgba(22,55,102,0.08)] ring-1 ring-[#D6DDE3]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">What Makes These Insights Different</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#163766]">Thought leadership grounded in executive reality</h2>
            <div className="mt-8 space-y-5">
              {valuePoints.map((item) => (
                <div key={item.title} className="rounded-2xl bg-[#F8FAFB] p-5 ring-1 ring-[#E3E9EE]">
                  <div className="text-xl font-bold text-[#163766]">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-[#526371]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1253A4] via-[#163766] to-[#198F8A] p-8 text-white shadow-[0_20px_70px_rgba(18,83,164,0.24)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Why This Page Matters</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Credibility comes from how you frame the problem</h2>
            <p className="mt-4 text-base leading-7 text-white/82">
              A strong Insights page gives Consilium.ai intellectual presence. It signals that the firm is not only implementing AI, but also shaping how leaders should think about enterprise transformation, uncertainty, and strategic choice.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Demonstrates strategic depth',
                'Supports executive trust',
                'Creates thought-leadership pull',
                'Strengthens the platform narrative',
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
          <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-5xl">Use insight to shape stronger enterprise decisions</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/82">
            Consilium.ai can help translate these themes into practical decision intelligence capabilities, executive briefings, and strategic platform engagements.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-2xl bg-[#4FB86E] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
              Request a Demo
            </button>
            <button className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15">
              Discuss a Strategic Topic
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
