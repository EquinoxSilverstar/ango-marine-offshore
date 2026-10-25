import { Link } from 'react-router-dom';

const highlights = [
  {
    number: '01',
    title: 'Offshore support',
    description:
      'Operational support tailored to the demands of marine and offshore work.',
    to: '/services',
  },
  {
    number: '02',
    title: 'Technical capability',
    description:
      'Practical technical coordination across planning, people and equipment.',
    to: '/technical',
  },
  {
    number: '03',
    title: 'Responsible operations',
    description:
      'A thoughtful approach to safety, environmental care and local value.',
    to: '/sustainability',
  },
];

const focusClass =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9a20d]';

const buttonClass =
  `inline-flex min-h-[54px] items-center justify-center gap-8 bg-[#f0ae19] px-7 py-4 text-sm font-bold text-[#142344] transition-colors hover:bg-[#ffc442] ${focusClass}`;

const textLinkClass =
  `inline-flex min-h-[44px] items-center gap-5 border-b border-[#e9a20d] py-2 text-sm font-bold text-[#263777] transition-colors hover:text-[#a56d00] ${focusClass}`;

function Home() {
  return (
    <div className="bg-white text-[#142344]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#102442] pb-28 pt-20 sm:min-h-[700px] sm:pt-24">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2200&q=85"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07162b]/95 via-[#102442]/75 to-[#102442]/30" />

        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <div className="max-w-[820px]">
            <p className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2.5px] text-[#f0ae19] sm:text-[11px]">
              <span className="h-6 w-0.5 bg-[#f0ae19]" />
              Angola · Marine · Offshore
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-[-2px] text-white sm:text-7xl lg:text-[84px]">
              Capability for
              <br />
              the open water<span className="text-[#f0ae19]">.</span>
            </h1>

            <p className="mt-7 max-w-[540px] text-sm leading-8 text-slate-200 sm:text-base">
              Marine and offshore support shaped around the people,
              technical demands and changing conditions of every operation.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4 sm:gap-7">
              <Link className={buttonClass} to="/services">
                Explore our services
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                className={`inline-flex min-h-[54px] items-center justify-center gap-6 border border-white/40 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 ${focusClass}`}
                to="/about"
              >
                Get to know us
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 border-t border-white/15">
          <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-5 text-[9px] font-semibold uppercase tracking-[2px] text-slate-300 sm:px-8">
            <span>AngoMarine Offshore</span>
            <a
              href="#our-approach"
              className={`hidden items-center gap-4 py-2 transition-colors hover:text-white sm:inline-flex ${focusClass}`}
            >
              Discover more
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* Capability strip */}
      <div className="bg-[#142344] text-white">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
          {[
            'Offshore support',
            'Marine services',
            'Technical coordination',
            'Local commitment',
          ].map((item) => (
            <div
              key={item}
              className="flex min-h-[76px] items-center justify-center border-b border-white/10 px-3 py-5 text-center text-[9px] font-semibold uppercase leading-5 tracking-[1.5px] sm:text-[10px] lg:border-b-0"
            >
              <span
                aria-hidden="true"
                className="mr-3 h-1 w-1 shrink-0 bg-[#f0ae19]"
              />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Introduction */}
      <section
        id="our-approach"
        className="mx-auto grid max-w-[1240px] scroll-mt-24 items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20"
      >
        <div>
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#68758a]">
            <span className="h-0.5 w-8 bg-[#e9a20d]" />
            A capable partner
          </p>

          <h2 className="text-3xl font-bold leading-[1.15] tracking-[-1px] sm:text-[44px]">
            Supporting work
            <br />
            that moves
            <br className="hidden lg:block" />{' '}
            <span className="text-[#6c7a8b]">the world forward.</span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#68758a]">
            AngoMarine Offshore brings a considered, collaborative approach
            to marine and offshore operations. We work to understand the
            brief first, then align the right people, planning and support.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#68758a]">
            From the first conversation through delivery, clear communication
            and careful coordination keep everyone connected to the work.
          </p>

          <Link className={`mt-7 ${textLinkClass}`} to="/about">
            More about AngoMarine
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="relative pb-5 pl-5 sm:pb-7 sm:pl-7">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-3/4 w-3/4 bg-[#eef2f7]"
          />

          <img
            src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85"
            alt="Commercial cargo vessel alongside port infrastructure"
            loading="lazy"
            className="relative aspect-[4/3] w-full object-cover"
          />

          <div className="relative mr-5 -mt-16 max-w-[290px] border-l-4 border-[#f0ae19] bg-[#142344] p-6 text-white sm:mr-8 sm:p-7">
            <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#f0ae19]">
              Connected by purpose
            </p>
            <p className="mt-3 text-xl font-semibold leading-snug">
              People. Planning.
              <br />
              Practical support.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f3f5f8] py-16 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#68758a]">
                <span className="h-0.5 w-8 bg-[#e9a20d]" />
                What we do
              </p>

              <h2 className="text-3xl font-bold leading-[1.15] tracking-[-1px] sm:text-[44px]">
                Built around
                <br />
                your operation.
              </h2>
            </div>

            <Link className={textLinkClass} to="/services">
              View all services
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <Link
                key={item.number}
                to={item.to}
                className={`group flex h-full flex-col border-b-[3px] border-transparent bg-white p-7 transition-colors hover:border-[#e9a20d] sm:p-8 ${focusClass}`}
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-[#946400]">
                    {item.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce2eb] text-xl text-[#263777] transition-colors group-hover:border-[#f0ae19] group-hover:bg-[#f0ae19]"
                  >
                    ↗
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight">
                  {item.title}
                </h3>

                <p className="mb-7 mt-4 text-sm leading-7 text-[#68758a]">
                  {item.description}
                </p>

                <span className="mt-auto inline-flex items-center gap-4 text-xs font-bold text-[#263777]">
                  Discover more
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="relative isolate overflow-hidden bg-[#102442] py-16 sm:py-24">
        <img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2000&q=85"
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07162b]/95 via-[#102442]/85 to-[#102442]/40" />

        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="max-w-[650px]">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#f0ae19]">
              <span className="h-6 w-0.5 bg-[#f0ae19]" />
              Responsible operations
            </p>

            <h2 className="text-3xl font-bold leading-[1.15] tracking-[-1px] text-white sm:text-[44px]">
              Progress with care.
              <br />
              Purpose in every decision.
            </h2>

            <p className="mt-6 max-w-[500px] text-sm leading-8 text-slate-200">
              Responsible work begins with people, environmental awareness
              and respect for the communities around us. These priorities
              shape how we approach each operation.
            </p>

            <Link
              className={`mt-8 ${buttonClass}`}
              to="/sustainability"
            >
              Our approach to sustainability
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-[1176px] flex-col items-start justify-between gap-8 border-l-4 border-[#f0ae19] bg-[#f3f5f8] px-6 py-10 sm:px-10 sm:py-12 lg:flex-row lg:items-center">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[2px] text-[#946400]">
              Let’s talk
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-[-1px] sm:text-[40px]">
              Have a challenge
              <br />
              on the horizon?
            </h2>

            <p className="mt-5 max-w-[480px] text-sm leading-7 text-[#68758a]">
              Share your project requirements and let’s discuss the support
              your next operation needs.
            </p>
          </div>

          <Link
            className={`shrink-0 ${buttonClass}`}
            to="/contact"
          >
            Request a consultation
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;