import { Link } from 'react-router-dom';

const services = [
  {
    number: '01',
    title: 'Offshore support',
    text: 'Practical coordination and operational support aligned with your offshore scope and schedule.',
    focus: 'Scope · Schedule · Coordination',
  },
  {
    number: '02',
    title: 'Marine services',
    text: 'Marine-focused planning and support to help connect the vessel, shore and project teams.',
    focus: 'Vessel · Shore · Project teams',
  },
  {
    number: '03',
    title: 'Logistics coordination',
    text: 'Planning and coordination of resources, movement and information across the operation.',
    focus: 'Resources · Movement · Information',
  },
  {
    number: '04',
    title: 'Project support',
    text: 'Flexible support for defined project needs, from early conversations through execution.',
    focus: 'Planning · Communication · Delivery',
  },
];

const steps = [
  {
    number: '01',
    title: 'Understand the brief',
    text: 'Discuss your scope, location, priorities and operational constraints.',
  },
  {
    number: '02',
    title: 'Coordinate the approach',
    text: 'Align the requirements, people and communication around a practical plan.',
  },
  {
    number: '03',
    title: 'Support the operation',
    text: 'Stay connected as the work progresses and requirements evolve.',
  },
];

const focusClass =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9a20d]';

function Services() {
  return (
    <div className="bg-white text-[#142344]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[460px] items-center overflow-hidden bg-[#102442] py-24 sm:min-h-[520px]">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2200&q=85"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07162b]/95 via-[#102442]/80 to-[#102442]/30" />

        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <p className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[#f0ae19]">
            <span className="h-6 w-0.5 bg-[#f0ae19]" />
            Our services
          </p>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-[-1.5px] text-white sm:text-6xl lg:text-[72px]">
            One brief.
            <br />
            Thoughtful support<span className="text-[#f0ae19]">.</span>
          </h1>

          <p className="mt-7 max-w-[540px] text-sm leading-8 text-slate-200 sm:text-base">
            Flexible marine and offshore services, shaped around the people,
            priorities and requirements of your project.
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 border-t border-white/15">
          <div className="mx-auto flex max-w-[1240px] justify-between gap-4 px-5 py-5 text-[9px] font-semibold uppercase tracking-[2px] text-slate-300 sm:px-8">
            <span>AngoMarine Offshore</span>
            <span>Angola · Marine · Offshore</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#68758a]">
              <span className="h-0.5 w-8 bg-[#e9a20d]" />
              Areas of support
            </p>

            <h2 className="text-3xl font-bold leading-[1.15] tracking-[-1px] sm:text-[44px]">
              The right support.
              <br />
              <span className="text-[#6c7a8b]">Where it matters.</span>
            </h2>
          </div>

          <p className="max-w-[500px] text-sm leading-8 text-[#68758a]">
            Every operation has its own demands. We start with your brief
            and work with you to identify practical support across marine,
            offshore and project requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="flex flex-col border border-[#e1e6ee] bg-white p-7 sm:p-9"
            >
              <div className="mb-9 flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-[#946400]">
                  {service.number}
                </span>

                <span
                  aria-hidden="true"
                  className="h-0.5 w-12 bg-[#e9a20d]"
                />
              </div>

              <h3 className="text-2xl font-bold tracking-tight">
                {service.title}
              </h3>

              <p className="mt-4 max-w-[460px] text-sm leading-8 text-[#68758a]">
                {service.text}
              </p>

              <p className="mb-7 mt-5 text-[10px] font-semibold uppercase leading-6 tracking-[1.3px] text-[#68758a]">
                {service.focus}
              </p>

              <Link
                to="/contact"
                aria-label={`Enquire about ${service.title}`}
                className={`group mt-auto flex min-h-[48px] items-center justify-between gap-5 border-t border-[#e1e6ee] pt-5 text-sm font-bold text-[#263777] transition-colors hover:text-[#946400] ${focusClass}`}
              >
                Discuss your requirements
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
      </section>

      {/* Approach */}
      <section className="bg-[#f3f5f8] py-16 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#68758a]">
                <span className="h-0.5 w-8 bg-[#e9a20d]" />
                How we work
              </p>

              <h2 className="text-3xl font-bold leading-[1.15] tracking-[-1px] sm:text-[44px]">
                Clear from the start.
                <br />
                Connected throughout.
              </h2>
            </div>

            <Link
              to="/technical"
              className={`inline-flex min-h-[44px] self-start items-center gap-5 border-b border-[#e9a20d] py-2 text-sm font-bold text-[#263777] transition-colors hover:text-[#946400] ${focusClass}`}
            >
              Explore our technical approach
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ol className="mt-10 grid list-none gap-5 p-0 md:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.number}
                className="border-t-2 border-[#dce2eb] pt-6"
              >
                <span className="text-xs font-bold tracking-wider text-[#946400]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-bold tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-[340px] text-sm leading-7 text-[#68758a]">
                  {step.text}
                </p>
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
              Tell us what you need
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-[-1px] text-white sm:text-[44px]">
              Let’s shape the
              <br />
              right solution.
            </h2>

            <p className="mt-5 max-w-[500px] text-sm leading-7 text-slate-300">
              Share your scope, schedule and priorities. We’ll work with you
              to understand the way forward.
            </p>
          </div>

          <Link
            to="/contact"
            className={`inline-flex min-h-[54px] shrink-0 items-center justify-center gap-8 bg-[#f0ae19] px-7 py-4 text-sm font-bold text-[#142344] transition-colors hover:bg-[#ffc442] ${focusClass}`}
          >
            Request a consultation
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;