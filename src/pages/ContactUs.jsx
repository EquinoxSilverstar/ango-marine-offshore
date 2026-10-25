import { useState } from 'react';

const inputClass =
  'w-full rounded-none border border-[#dce2eb] bg-white px-4 py-3.5 text-sm text-[#142344] placeholder:text-[#8691a1] transition-colors focus:border-[#bd820b] focus:outline-none focus:ring-2 focus:ring-[#f0ae19]/20';

const services = [
  'Offshore support',
  'Marine services',
  'Logistics coordination',
  'Technical capability',
  'Project support',
  'Other enquiry',
];

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-white text-[#142344]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[440px] items-center overflow-hidden bg-[#102442] py-24 sm:min-h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2200&q=85"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07162b]/95 via-[#102442]/80 to-[#102442]/40" />

        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <p className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[#f0ae19]">
            <span className="h-6 w-0.5 bg-[#f0ae19]" />
            Contact AngoMarine
          </p>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-[-1.5px] text-white sm:text-6xl lg:text-[72px]">
            Start with a
            <br />
            conversation<span className="text-[#f0ae19]">.</span>
          </h1>

          <p className="mt-7 max-w-[540px] text-sm leading-8 text-slate-200 sm:text-base">
            Tell us about your project, your priorities and the support
            you need. Let’s explore the way forward together.
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 border-t border-white/15">
          <div className="mx-auto flex max-w-[1240px] justify-between gap-4 px-5 py-5 text-[9px] font-semibold uppercase tracking-[2px] text-slate-300 sm:px-8">
            <span>AngoMarine Offshore</span>
            <span>Angola · Marine · Offshore</span>
          </div>
        </div>
      </section>

      {/* Contact information and enquiry form */}
      <section className="mx-auto grid max-w-[1240px] items-start gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#68758a]">
            <span className="h-0.5 w-8 bg-[#e9a20d]" />
            Request a consultation
          </p>

          <h2 className="text-3xl font-bold leading-[1.15] tracking-[-1px] sm:text-[44px]">
            Your next operation.
            <br />
            <span className="text-[#6c7a8b]">Our next conversation.</span>
          </h2>

          <p className="mt-6 max-w-[390px] text-sm leading-8 text-[#68758a]">
            Every project starts with understanding the brief. Share the
            essentials so we can discuss support that fits your operational
            requirements.
          </p>

          <div className="mt-9 border-y border-[#dce2eb] py-6">
            <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#946400]">
              Where we work
            </p>
            <h3 className="mt-3 text-xl font-bold">Angola</h3>
            <p className="mt-2 text-sm text-[#68758a]">
              Marine & offshore support
            </p>
          </div>

          <div className="mt-8 border-l-[3px] border-[#f0ae19] bg-[#f3f5f8] p-6">
            <h3 className="text-sm font-bold">
              A useful starting point
            </h3>

            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#68758a]">
              {[
                'Your project location and scope',
                'The services or support you need',
                'Your expected schedule',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#c58a12]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border border-[#e4e8ef] bg-[#f5f7fa] p-6 sm:p-9">
          <div className="mb-7 border-b border-[#dce2eb] pb-6">
            <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#946400]">
              Let’s connect
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              Tell us what you need.
            </h2>
            <p
              id="contact-preview-note"
              className="mt-3 text-xs leading-6 text-[#68758a]"
            >
              This form is a preview. Enquiries are not sent yet.
              Fields marked * are required.
            </p>
          </div>

          <form
            className="space-y-5"
            onSubmit={handleSubmit}
            onChange={() => {
              if (submitted) setSubmitted(false);
            }}
            aria-describedby="contact-preview-note"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs font-bold"
                >
                  Your name *
                </label>
                <input
                  className={inputClass}
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Full name"
                  maxLength={150}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-company"
                  className="mb-2 block text-xs font-bold"
                >
                  Company{' '}
                  <span className="font-normal text-[#68758a]">
                    (optional)
                  </span>
                </label>
                <input
                  className={inputClass}
                  id="contact-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Company name"
                  maxLength={200}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-xs font-bold"
              >
                Business email *
              </label>
              <input
                className={inputClass}
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                maxLength={254}
                required
              />
            </div>

            <div>
              <label
                htmlFor="contact-service"
                className="mb-2 block text-xs font-bold"
              >
                Area of interest{' '}
                <span className="font-normal text-[#68758a]">
                  (optional)
                </span>
              </label>
              <select
                className={inputClass}
                id="contact-service"
                name="service"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs font-bold"
              >
                How can we help? *
              </label>
              <textarea
                className={`${inputClass} min-h-[150px] resize-y`}
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell us about your project, location and requirements…"
                maxLength={5000}
                required
              />
            </div>

            <button
              className="inline-flex min-h-[54px] w-full items-center justify-center gap-8 bg-[#f0ae19] px-7 py-4 text-sm font-bold text-[#142344] transition-colors hover:bg-[#ffc442] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#142344] sm:w-auto"
              type="submit"
            >
              Preview enquiry
              <span aria-hidden="true">↗</span>
            </button>

            <div role="status" aria-live="polite" aria-atomic="true">
              {submitted && (
                <p className="border-l-[3px] border-[#e9a20d] bg-white p-4 text-sm leading-7 text-[#536176]">
                  Your enquiry has not been sent. This preview needs an
                  email or form service connected before it can deliver
                  messages.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Closing statement */}
      <section className="border-t border-[#e4e8ef] bg-[#142344] py-10 sm:py-12">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-5 px-5 sm:px-8 md:flex-row md:items-center">
          <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Practical support. Shared purpose. Open horizons.
          </p>

          <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#f0ae19]">
            AngoMarine Offshore
          </span>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;