import { Link } from 'react-router-dom';

const stages = [
  {
    number: '01',
    title: 'Listen & define',
    text: 'Clarify the operational need, success criteria, constraints and interfaces.',
    focus: 'Start with understanding.',
  },
  {
    number: '02',
    title: 'Plan & coordinate',
    text: 'Bring the relevant people and requirements together around a workable plan.',
    focus: 'Connect the right details.',
  },
  {
    number: '03',
    title: 'Support delivery',
    text: 'Stay engaged, communicate clearly and adapt as the operation evolves.',
    focus: 'Keep the work connected.',
  },
  {
    number: '04',
    title: 'Review & learn',
    text: 'Capture lessons and use them to strengthen future ways of working.',
    focus: 'Take the learning forward.',
  },
];

const principles = [
  {
    title: 'Clear expectations',
    text: 'A shared understanding of the scope, priorities and responsibilities.',
  },
  {
    title: 'Open communication',
    text: 'Relevant updates and constructive conversations throughout the work.',
  },
  {
    title: 'Continuous learning',
    text: 'Time to review the approach and identify opportunities to improve.',
  },
];

const focusClass =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9a20d]';

function TrackRecord() {
  return (
    <div className="bg-white text-[#142344]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[460px] items-center overflow-hidden bg-[#102442] py-24 sm:min-h-[520px]">
        <img
          src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2200&q=85"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07162b]/95 via-[#102442]/80 to-[#102442]/35" />

        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <p className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[#f0ae19]">
            <span className="h-6 w-0.5 bg-[#f0ae19]" />
            Track record
          </p>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-[-1.5px] text-white sm:text-6xl lg:text-[72px]">
            Built through
            <br />
            good work together<span className="text-[#f0ae19]">.</span>
          </h1>

          <p className="mt-7 max-w-[560px] text-sm leading-8 text-slate-200 sm:text-base">
            A dependable track record starts with clear expectations,
            coordinated effort and learning from delivery.
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 border-t border-white/15">
          <div className="mx-auto flex max-w-[1240px] justify-between gap-4 px-5 py-5 text-[9px] font-semibold uppercase tracking-[2px] text-slate-300 sm:px-8">
            <span>AngoMarine Offshore</span>
            <span>Plan · Support · Learn</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#68758a]">
            <span className="h-0.5 w-8 bg-[#e9a20d]" />
            Our way of working
          </p>

          <h2 className="text-3xl font-bold leading-[1.15] tracking-[-1px] sm:text-[44px]">
            Consistency is
            <br />
            <span className="text-[#6c7a8b]">earned every day.</span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#68758a]">
            We believe a strong track record is built one commitment at a
            time. Our focus is on understanding the scope, aligning the
            team and keeping communication open throughout the work.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#68758a]">
            Every operation brings its own context. We aim to approach
            each brief with careful preparation, shared expectations and
            a willingness to learn.
          </p>

          <Link
            to="/services"
            className={`mt-7 inline-flex min-h-[44px] items-center gap-6 border-b border-[#e9a20d] py-2 text-sm font-bold text-[#263777] transition-colors hover:text-[#946400] ${focusClass}`}
          >
            Explore our services
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <aside className="border-l-4 border-[#f0ae19] bg-[#f3f5f8] p-7 sm:p-10">
          <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#946400]">
            Project information
          </p>

          <h3 className="mt-5 text-2xl font-bold leading-snug tracking-tight">
            A clear process.
            <br />
            Evidence that matters.
          </h3>

          <p className="mt-5 text-sm leading-8 text-[#68758a]">
            This page outlines our working approach. Project references,
            client-approved case studies and verified performance
            information will be published as they become available.
          </p>

          <Link
            to="/contact"
            className={`mt-5 inline-flex min-h-[44px] items-center gap-5 border-b border-[#e9a20d] py-2 text-sm font-bold text-[#263777] transition-colors hover:text-[#946400] ${focusClass}`}
          >
            Discuss your project
            <span aria-hidden="true">↗</span>
          </Link>
        </aside>
      </section>

      {/* Delivery process */}
      <section className="bg-[#f3f5f8] py-16 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#68758a]">
                <span className="h-0.5 w-8 bg-[#e9a20d]" />
                From brief to review
              </p>

              <h2 className="text-3xl font-bold leading-[1.15] tracking-[-1px] sm:text-[44px]">
                Good work starts
                <br />
                with a shared understanding.
              </h2>
            </div>

            <p className="max-w-[350px] text-sm leading-7 text-[#68758a]">
              Four stages to help keep the brief, the team and the
              operation connected.
            </p>
          </div>

          <ol className="mt-10 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage) => (
              <li
                key={stage.number}
                className="flex flex-col border-b-[3px] border-[#e9a20d] bg-white p-7"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#142344] text-xs font-bold text-[#f0ae19]">
                    {stage.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-px w-8 bg-[#dce2eb]"
                  />
                </div>

                <h3 className="text-lg font-bold tracking-tight">
                  {stage.title}
                </h3>

                <p className="mb-7 mt-4 text-sm leading-7 text-[#68758a]">
                  {stage.text}
                </p>

                <p className="mt-auto border-t border-[#e4e8ef] pt-5 text-xs font-semibold leading-6 text-[#263777]">
                  {stage.focus}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Working principles */}
      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#68758a]">
              <span className="h-0.5 w-8 bg-[#e9a20d]" />
              What we work towards
            </p>

            <h2 className="text-3xl font-bold leading-[1.15] tracking-[-1px] sm:text-[44px]">
              Confidence through
              <br />
              clarity and care.
            </h2>
          </div>

          <div className="border-t border-[#dce2eb]">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="border-b border-[#dce2eb] py-6"
              >
                <h3 className="text-lg font-bold tracking-tight">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#68758a]">
                  {principle.text}
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
              Your next operation
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-[-1px] text-white sm:text-[40px]">
              Let’s put a clear
              <br />
              plan in motion.
            </h2>

            <p className="mt-5 max-w-[520px] text-sm leading-7 text-slate-300">
              Have a project in mind? Share the context and we can discuss
              how to support your next operation.
            </p>
          </div>

          <Link
            to="/contact"
            className={`inline-flex min-h-[54px] shrink-0 items-center justify-center gap-8 bg-[#f0ae19] px-7 py-4 text-sm font-bold text-[#142344] transition-colors hover:bg-[#ffc442] ${focusClass}`}
          >
            Start a conversation
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default TrackRecord;