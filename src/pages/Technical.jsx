import { Link } from 'react-router-dom';

const capabilities = [
  {
    number: '01',
    title: 'Operational planning',
    description:
      'Translate the scope, operating environment and constraints into a clear plan for the work.',
    focus: 'Scope · Priorities · Operational interfaces',
  },
  {
    number: '02',
    title: 'Technical coordination',
    description:
      'Connect technical requirements with people, equipment and the wider delivery team.',
    focus: 'Requirements · Resources · Communication',
  },
  {
    number: '03',
    title: 'Marine logistics',
    description:
      'Coordinate the movement of resources and information to support offshore activity.',
    focus: 'Movement · Scheduling · Coordination',
  },
  {
    number: '04',
    title: 'HSE awareness',
    description:
      'Keep risk awareness, preparation and responsible working practices in view throughout delivery.',
    focus: 'People · Preparation · Responsible decisions',
  },
];

const stages = [
  {
    number: '01',
    title: 'Define the requirements',
    description:
      'Understand the brief, operating conditions and interfaces that shape the work.',
  },
  {
    number: '02',
    title: 'Align the plan',
    description:
      'Bring the relevant people, resources and technical requirements into a coordinated approach.',
  },
  {
    number: '03',
    title: 'Stay connected',
    description:
      'Maintain clear communication and review the approach as operational needs evolve.',
  },
];

const focusClass =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9a20d]';

function Technical() {
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
            Technical capability
          </p>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-[-1.5px] text-white sm:text-6xl lg:text-[72px]">
            Precision in the plan.
            <br />
            Confidence offshore<span className="text-[#f0ae19]">.</span>
          </h1>

          <p className="mt-7 max-w-[560px] text-sm leading-8 text-slate-200 sm:text-base">
            A coordinated approach to the people, requirements and
            operational details behind marine work.
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 border-t border-white/15">
          <div className="mx-auto flex max-w-[1240px] justify-between gap-4 px-5 py-5 text-[9px] font-semibold uppercase tracking-[2px] text-slate-300 sm:px-8">
            <span>AngoMarine Offshore</span>
            <span>Plan · Coordinate · Support</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-[1240px] items-start gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#68758a]">
            <span className="h-0.5 w-8 bg-[#e9a20d]" />
            Connecting the details
          </p>

          <h2 className="text-3xl font-bold leading-[1.15] tracking-[-1px] sm:text-[44px]">
            Clear requirements.
            <br />
            <span className="text-[#6c7a8b]">
              Coordinated delivery.
            </span>
          </h2>
        </div>

        <div>
          <p className="text-sm leading-8 text-[#68758a]">
            Every scope brings its own technical demands, operational
            constraints and points of coordination. We start by
            understanding how these details connect.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#68758a]">
            Our approach brings planning, communication and practical
            support together, helping teams stay aligned from the initial
            brief through the work.
          </p>

          <Link
            to="/services"
            className={`mt-6 inline-flex min-h-[44px] items-center gap-6 border-b border-[#e9a20d] py-2 text-sm font-bold text-[#263777] transition-colors hover:text-[#946400] ${focusClass}`}
          >
            Explore our services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#f3f5f8] py-16 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#68758a]">
                <span className="h-0.5 w-8 bg-[#e9a20d]" />
                How we support
              </p>

              <h2 className="text-3xl font-bold leading-[1.15] tracking-[-1px] sm:text-[44px]">
                Practical capability.
                <br />
                A connected approach.
              </h2>
            </div>

            <p className="max-w-[360px] text-sm leading-7 text-[#68758a]">
              Support shaped around the requirements and working
              environment of your operation.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {capabilities.map((capability) => (
              <article
                key={capability.number}
                className="flex flex-col border-b-[3px] border-[#e9a20d] bg-white p-7 sm:p-9"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-[#946400]">
                    {capability.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-px w-12 bg-[#dce2eb]"
                  />
                </div>

                <h3 className="text-2xl font-bold tracking-tight">
                  {capability.title}
                </h3>

                <p className="mt-4 text-sm leading-8 text-[#68758a]">
                  {capability.description}
                </p>

                <p className="mb-7 mt-5 text-[10px] font-semibold uppercase leading-6 tracking-[1.3px] text-[#68758a]">
                  {capability.focus}
                </p>

                <Link
                  to="/contact"
                  aria-label={`Discuss ${capability.title}`}
                  className={`group mt-auto flex min-h-[48px] items-center justify-between gap-5 border-t border-[#e4e8ef] pt-5 text-sm font-bold text-[#263777] transition-colors hover:text-[#946400] ${focusClass}`}
                >
                  Discuss this capability
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#dce2eb] text-xl transition-colors group-hover:border-[#f0ae19] group-hover:bg-[#f0ae19] group-hover:text-[#142344]"
                  >
                    ↗
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Working approach */}
      <section className="mx-auto grid max-w-[1240px] items-start gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#68758a]">
            <span className="h-0.5 w-8 bg-[#e9a20d]" />
            From brief to operation
          </p>

          <h2 className="text-3xl font-bold leading-[1.15] tracking-[-1px] sm:text-[44px]">
            Preparation creates
            <br />
            a clearer path.
          </h2>

          <p className="mt-6 max-w-[390px] text-sm leading-8 text-[#68758a]">
            We aim to make the requirements clear, keep responsibilities
            connected and maintain communication as the work develops.
          </p>
        </div>

        <ol className="m-0 list-none border-t border-[#dce2eb] p-0">
          {stages.map((stage) => (
            <li
              key={stage.number}
              className="grid grid-cols-[32px_1fr] gap-4 border-b border-[#dce2eb] py-7 sm:gap-6"
            >
              <span className="pt-1 text-xs font-bold tracking-wider text-[#946400]">
                {stage.number}
              </span>

              <div>
                <h3 className="text-lg font-bold tracking-tight">
                  {stage.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#68758a]">
                  {stage.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <section className="bg-[#142344] py-14 sm:py-16">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[2px] text-[#f0ae19]">
              Every scope is different
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-[-1px] text-white sm:text-[40px]">
              Bring us your
              <br />
              technical requirements.
            </h2>

            <p className="mt-5 max-w-[520px] text-sm leading-7 text-slate-300">
              Share the context, constraints and priorities. We’ll work
              with you to understand the right way forward.
            </p>
          </div>

          <Link
            to="/contact"
            className={`inline-flex min-h-[54px] shrink-0 items-center justify-center gap-8 bg-[#f0ae19] px-7 py-4 text-sm font-bold text-[#142344] transition-colors hover:bg-[#ffc442] ${focusClass}`}
          >
            Discuss your requirements
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Technical;