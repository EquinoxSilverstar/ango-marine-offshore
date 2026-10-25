import { Link } from 'react-router-dom';

const priorities = [
  {
    number: '01',
    title: 'People & safety',
    text: 'Support a safety-minded culture through preparation, communication and respect for the people doing the work.',
    principle: 'Put people first.',
  },
  {
    number: '02',
    title: 'Environmental care',
    text: 'Consider environmental risks in operational decisions and follow applicable procedures and requirements.',
    principle: 'Consider the wider impact.',
  },
  {
    number: '03',
    title: 'Local value',
    text: 'Build constructive relationships and look for opportunities to contribute to local capability and participation.',
    principle: 'Grow through collaboration.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Understand the context',
    text: 'Consider the people, operating environment and local priorities connected to the scope.',
  },
  {
    number: '02',
    title: 'Plan with care',
    text: 'Bring relevant risks, responsibilities and requirements into the planning conversation.',
  },
  {
    number: '03',
    title: 'Review and improve',
    text: 'Use feedback and lessons from delivery to identify better ways of working.',
  },
];

const focusClass =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9a20d]';

function Sustainability() {
  return (
    <div className="bg-white text-[#142344]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[460px] items-center overflow-hidden bg-[#102442] py-24 sm:min-h-[520px]">
        <img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2200&q=85"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07162b]/95 via-[#102442]/80 to-[#102442]/35" />

        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <p className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[#f0ae19]">
            <span className="h-6 w-0.5 bg-[#f0ae19]" />
            Sustainability
          </p>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-[-1.5px] text-white sm:text-6xl lg:text-[72px]">
            Progress with
            <br />
            care and purpose<span className="text-[#f0ae19]">.</span>
          </h1>

          <p className="mt-7 max-w-[560px] text-sm leading-8 text-slate-200 sm:text-base">
            Responsible operations begin with the choices we make every
            day—for people, the environment and our communities.
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 border-t border-white/15">
          <div className="mx-auto flex max-w-[1240px] justify-between gap-4 px-5 py-5 text-[9px] font-semibold uppercase tracking-[2px] text-slate-300 sm:px-8">
            <span>AngoMarine Offshore</span>
            <span>People · Environment · Community</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#68758a]">
            <span className="h-0.5 w-8 bg-[#e9a20d]" />
            Our responsibility
          </p>

          <h2 className="text-3xl font-bold leading-[1.15] tracking-[-1px] sm:text-[44px]">
            Do the work.
            <br />
            <span className="text-[#6c7a8b]">Consider the impact.</span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#68758a]">
            Sustainability is an ongoing commitment. We aim to work
            thoughtfully, meet applicable requirements and keep improving
            how operational decisions affect people and the environment.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#68758a]">
            Our approach starts with understanding the context: listening
            to the people involved, considering potential impacts and
            bringing responsible choices into everyday planning.
          </p>

          <Link
            to="/contact"
            className={`mt-7 inline-flex min-h-[44px] items-center gap-6 border-b border-[#e9a20d] py-2 text-sm font-bold text-[#263777] transition-colors hover:text-[#946400] ${focusClass}`}
          >
            Discuss our approach
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="border-l-4 border-[#f0ae19] bg-[#f3f5f8] p-7 sm:p-10">
          <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#946400]">
            A shared commitment
          </p>

          <p className="mt-6 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            Thoughtful decisions today.
            <br />
            Better ways of working tomorrow.
          </p>

          <div className="mt-8 space-y-4 border-t border-[#dce2eb] pt-6">
            {[
              'Respect the people doing the work',
              'Consider the operating environment',
              'Look for opportunities to learn',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm leading-7 text-[#68758a]"
              >
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-[#bd820b]"
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="bg-[#f3f5f8] py-16 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#68758a]">
                <span className="h-0.5 w-8 bg-[#e9a20d]" />
                Our focus areas
              </p>

              <h2 className="text-3xl font-bold leading-[1.15] tracking-[-1px] sm:text-[44px]">
                Connected priorities.
                <br />
                Shared responsibility.
              </h2>
            </div>

            <p className="max-w-[360px] text-sm leading-7 text-[#68758a]">
              Three priorities to guide conversations, planning and
              operational decisions.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {priorities.map((priority) => (
              <article
                key={priority.number}
                className="flex flex-col border-b-[3px] border-[#e9a20d] bg-white p-7 sm:p-8"
              >
                <div className="mb-9 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-[#946400]">
                    {priority.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-px w-12 bg-[#dce2eb]"
                  />
                </div>

                <h3 className="text-xl font-bold tracking-tight">
                  {priority.title}
                </h3>

                <p className="mb-7 mt-4 text-sm leading-7 text-[#68758a]">
                  {priority.text}
                </p>

                <p className="mt-auto border-t border-[#e4e8ef] pt-5 text-xs font-bold text-[#263777]">
                  {priority.principle}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Practical approach */}
      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#68758a]">
              <span className="h-0.5 w-8 bg-[#e9a20d]" />
              From intention to action
            </p>

            <h2 className="text-3xl font-bold leading-[1.15] tracking-[-1px] sm:text-[44px]">
              Care belongs
              <br />
              in the details.
            </h2>

            <p className="mt-6 max-w-[390px] text-sm leading-8 text-[#68758a]">
              We aim to keep responsibility in view throughout the work,
              from the initial brief to the lessons we take forward.
            </p>
          </div>

          <ol className="m-0 list-none border-t border-[#dce2eb] p-0">
            {steps.map((step) => (
              <li
                key={step.number}
                className="grid grid-cols-[32px_1fr] gap-4 border-b border-[#dce2eb] py-7 sm:gap-6"
              >
                <span className="pt-1 text-xs font-bold tracking-wider text-[#946400]">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-lg font-bold tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#68758a]">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#142344] py-14 sm:py-16">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[2px] text-[#f0ae19]">
              Keep the conversation open
            </p>

            <h2 className="max-w-[650px] text-3xl font-bold leading-tight tracking-[-1px] text-white sm:text-[40px]">
              Responsible progress
              <br />
              starts with a conversation.
            </h2>

            <p className="mt-5 max-w-[520px] text-sm leading-7 text-slate-300">
              Have a question about our approach or your operating
              requirements? We welcome the conversation.
            </p>
          </div>

          <Link
            to="/contact"
            className={`inline-flex min-h-[54px] shrink-0 items-center justify-center gap-8 bg-[#f0ae19] px-7 py-4 text-sm font-bold text-[#142344] transition-colors hover:bg-[#ffc442] ${focusClass}`}
          >
            Contact our team
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Sustainability;