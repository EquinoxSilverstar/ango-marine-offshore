import { Link } from 'react-router-dom';

const values = [
  {
    number: '01',
    title: 'Safety-minded',
    description:
      'Put people, preparation and safe ways of working at the centre of every conversation.',
  },
  {
    number: '02',
    title: 'Collaborative',
    description:
      'Work openly with clients, partners and teams to align around shared objectives.',
  },
  {
    number: '03',
    title: 'Accountable',
    description:
      'Be clear about commitments, communicate progress and learn from every operation.',
  },
];

function About() {
  return (
    <div className="bg-white text-[#142344]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[480px] items-center overflow-hidden bg-[#102442] py-24 sm:min-h-[540px]">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2200&q=85"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07162b]/95 via-[#102442]/75 to-[#102442]/30" />

        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <p className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[#f0ae19]">
            <span className="h-6 w-0.5 bg-[#f0ae19]" />
            Who we are
          </p>

          <h1 className="max-w-[850px] text-4xl font-bold leading-[1.08] tracking-[-1.5px] text-white sm:text-6xl lg:text-[72px]">
            Grounded in purpose.
            <br />
            Focused on the sea<span className="text-[#f0ae19]">.</span>
          </h1>

          <p className="mt-7 max-w-[540px] text-sm leading-8 text-slate-200 sm:text-base">
            A marine and offshore partner with a practical, people-first
            approach to complex work.
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 border-t border-white/15">
          <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-5 text-[9px] font-semibold uppercase tracking-[2px] text-slate-300 sm:px-8">
            <span>AngoMarine Offshore</span>
            <span>Angola · Marine · Offshore</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20">
        <div className="relative pb-5 pr-5 sm:pb-7 sm:pr-7">
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 h-3/4 w-3/4 bg-[#eef2f7]"
          />

          <img
            src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85"
            alt="Cargo vessel alongside port infrastructure"
            loading="lazy"
            className="relative aspect-[4/3] w-full object-cover"
          />

          <div className="relative ml-6 -mt-14 max-w-[280px] border-l-4 border-[#f0ae19] bg-[#142344] p-6 text-white shadow-lg sm:ml-8">
            <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#f0ae19]">
              Our mindset
            </p>
            <p className="mt-3 text-xl font-semibold leading-snug">
              Practical support.
              <br />
              Shared purpose.
            </p>
          </div>
        </div>

        <div>
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#68758a]">
            <span className="h-0.5 w-8 bg-[#e9a20d]" />
            Our approach
          </p>

          <h2 className="text-3xl font-bold leading-[1.15] tracking-[-1px] sm:text-[44px]">
            Understand first.
            <br />
            <span className="text-[#6c7a8b]">Deliver together.</span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#68758a]">
            Every operation has its own pressures, priorities and context.
            We start by listening, then work collaboratively to shape support
            that fits the brief.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#68758a]">
            Clear communication and careful coordination guide our approach
            from the first conversation through delivery. As an Angola-focused
            marine and offshore company, we aim to build lasting working
            relationships and contribute to the communities and industry
            around us.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex min-h-[44px] items-center gap-6 border-b border-[#e9a20d] py-2 text-sm font-bold text-[#263777] transition-colors hover:text-[#a56d00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9a20d]"
          >
            Talk with our team
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f3f5f8] py-16 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#68758a]">
                <span className="h-0.5 w-8 bg-[#e9a20d]" />
                What guides us
              </p>

              <h2 className="text-3xl font-bold leading-tight tracking-[-1px] sm:text-[44px]">
                Shared values.
                <br />
                Practical action.
              </h2>
            </div>

            <p className="max-w-[360px] text-sm leading-7 text-[#68758a]">
              Principles that shape how we prepare, communicate and work
              together.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.number}
                className="border-b-[3px] border-[#e9a20d] bg-white p-7 sm:p-9"
              >
                <div className="mb-9 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-[#a56d00]">
                    {value.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-px w-12 bg-[#dce2eb]"
                  />
                </div>

                <h3 className="text-xl font-bold tracking-tight">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#68758a]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#142344] py-14 sm:py-16">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[2px] text-[#f0ae19]">
              Let’s work together
            </p>

            <h2 className="max-w-[680px] text-3xl font-bold leading-tight tracking-[-1px] text-white sm:text-[40px]">
              Your next operation starts
              <br className="hidden sm:block" /> with a conversation.
            </h2>

            <p className="mt-5 max-w-[520px] text-sm leading-7 text-slate-300">
              Share your priorities, challenges and requirements. We’ll work
              with you to understand the right way forward.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex min-h-[54px] shrink-0 items-center justify-center gap-8 bg-[#f0ae19] px-7 py-4 text-sm font-bold text-[#142344] transition-colors hover:bg-[#ffc442] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Request a consultation
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;