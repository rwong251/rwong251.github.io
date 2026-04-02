export default function ConsiliumContactPage() {
  const contactOptions = [
    {
      title: 'Platform Demo',
      text: 'Explore how AAIDIS and Consilium.ai can support forecasting, scenario planning, optimization, and executive decision support.',
    },
    {
      title: 'Strategic Use Case Discussion',
      text: 'Discuss a business problem, leadership question, or decision challenge where decision intelligence may create value.',
    },
    {
      title: 'Executive Briefing',
      text: 'Engage around enterprise AI strategy, decision intelligence, risk, uncertainty, or operating model transformation.',
    },
  ];

  const reasons = [
    'Decision platform conversations',
    'Use case exploration',
    'Enterprise AI strategy discussions',
    'Thought leadership and speaking inquiries',
    'Partnership and advisory opportunities',
    'General questions about Consilium.ai',
  ];

  const process = [
    {
      step: '01',
      title: 'Share your context',
      text: 'Describe the business challenge, decision area, or question your organization is trying to address.',
    },
    {
      step: '02',
      title: 'Frame the opportunity',
      text: 'We identify where decision intelligence, scenario analysis, forecasting, or strategic support may be most relevant.',
    },
    {
      step: '03',
      title: 'Plan the next step',
      text: 'Determine whether the best path is a demo, an executive discussion, a use-case engagement, or a broader platform conversation.',
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
              <a className="transition hover:text-[#1253A4]" href="#about">About Consilium</a>
              <a className="font-semibold text-[#163766]" href="#contact">Contact</a>
              <button className="rounded-xl bg-[#4FB86E] px-4 py-2 text-white shadow-md transition hover:-translate-y-0.5">Request a Demo</button>
            </nav>
          </div>
        </header>

        <section id="contact" className="mt-8 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#1253A4] via-[#114A90] to-[#198F8A] shadow-[0_24px_70px_rgba(18,83,164,0.28)]">
          <div className="grid items-center gap-12 px-8 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-16">
            <div className="text-white">
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur-sm">
                Contact Consilium.ai
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight lg:text-6xl">
                Start a conversation about <span className="text-[#8EE2B1]">better decisions</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Whether you are exploring a strategic use case, an enterprise AI initiative, or a broader decision intelligence capability, Consilium.ai is built to engage where leadership questions carry real stakes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-[#4FB86E] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
                  Request a Demo
                </button>
                <button className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15">
                  Start a Discussion
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 h-32 w-32 rounded-3xl bg-white/10 blur-xl" />
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#4FB86E]/20 blur-2xl" />
              <div className="relative rounded-[30px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <div className="rounded-[24px] bg-[#0F396F]/50 p-5 ring-1 ring-white/10 text-white">
                  <div className="text-sm font-semibold text-[#8EE2B1]">Ways to Engage</div>
                  <div className="mt-5 space-y-3">
                    {contactOptions.map((item) => (
                      <div key={item.title} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                        <div className="text-lg font-bold">{item.title}</div>
                        <p className="mt-2 text-sm leading-6 text-white/82">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-[0_18px_60px_rgba(22,55,102,0.08)] ring-1 ring-[#D6DDE3]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">Get In Touch</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#163766]">Tell us what decision challenge you are facing</h2>
            <p className="mt-4 text-base leading-7 text-[#526371]">
              This page can be connected to your preferred contact workflow, whether that is a form, email address, scheduling link, or CRM intake flow. For now, the structure below provides a clean branded layout for your future contact capture experience.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#163766]">Full Name</label>
                <input className="w-full rounded-2xl border border-[#D6DDE3] bg-[#F8FAFB] px-4 py-3 text-sm outline-none ring-0" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#163766]">Email</label>
                <input className="w-full rounded-2xl border border-[#D6DDE3] bg-[#F8FAFB] px-4 py-3 text-sm outline-none ring-0" placeholder="you@company.com" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#163766]">Company</label>
                <input className="w-full rounded-2xl border border-[#D6DDE3] bg-[#F8FAFB] px-4 py-3 text-sm outline-none ring-0" placeholder="Organization name" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#163766]">Inquiry Type</label>
                <select className="w-full rounded-2xl border border-[#D6DDE3] bg-[#F8FAFB] px-4 py-3 text-sm outline-none ring-0">
                  <option>Platform Demo</option>
                  <option>Use Case Discussion</option>
                  <option>Executive Briefing</option>
                  <option>Partnership Inquiry</option>
                  <option>General Question</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-semibold text-[#163766]">Message</label>
              <textarea className="min-h-[160px] w-full rounded-2xl border border-[#D6DDE3] bg-[#F8FAFB] px-4 py-3 text-sm outline-none ring-0" placeholder="Tell us about your business need, decision area, or strategic question" />
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-[#4FB86E] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
                Send Inquiry
              </button>
              <button className="rounded-2xl border border-[#D6DDE3] bg-white px-6 py-3 text-base font-semibold text-[#163766] transition hover:bg-[#F8FAFB]">
                Schedule a Conversation
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[32px] bg-white p-8 shadow-[0_18px_60px_rgba(22,55,102,0.08)] ring-1 ring-[#D6DDE3]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#198F8A]">Common Reasons To Reach Out</p>
              <div className="mt-6 grid gap-4">
                {reasons.map((item) => (
                  <div key={item} className="rounded-2xl bg-[#F8FAFB] px-5 py-4 font-semibold text-[#163766] ring-1 ring-[#E3E9EE]">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1253A4] via-[#163766] to-[#198F8A] p-8 text-white shadow-[0_20px_70px_rgba(18,83,164,0.24)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">What Happens Next</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">A clear and practical engagement path</h2>
              <div className="mt-8 space-y-4">
                {process.map((item) => (
                  <div key={item.step} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-sm font-semibold text-[#B8F0C9]">{item.step}</div>
                    <div className="mt-1 text-lg font-bold">{item.title}</div>
                    <p className="mt-2 text-sm leading-6 text-white/82">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 mb-6 overflow-hidden rounded-[34px] bg-gradient-to-r from-[#163766] via-[#1253A4] to-[#198F8A] px-8 py-12 text-center text-white shadow-[0_24px_80px_rgba(18,83,164,0.28)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Ready to Engage</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-5xl">Let’s discuss your business need</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/82">
            Consilium.ai is designed to support leaders facing complexity, uncertainty, and high-stakes choices. Reach out to begin the conversation.
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
