import { useMemo, useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { brand, faqs, policy, pricing } from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";
import { cn, easings } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const tripTypes = [
  { id: "open-half", label: "Open Water · Half Day" },
  { id: "open-full", label: "Open Water · Full Day" },
  { id: "trophy", label: "Pinehurst · Trophy Pike Hunt" },
  { id: "ice-half", label: "Ice Fishing · Half Day" },
  { id: "ice-full", label: "Ice Fishing · Full Day" },
];

export default function Book() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    trip: tripTypes[0].id,
    date: "",
    anglers: 2,
    note: "",
  });

  const mailto = useMemo(() => {
    const tripLabel = tripTypes.find((t) => t.id === form.trip)?.label ?? form.trip;
    const subject = encodeURIComponent(`Charter request — ${tripLabel} · ${form.date || "TBD"}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Trip: ${tripLabel}`,
        `Preferred date: ${form.date}`,
        `Anglers: ${form.anglers}`,
        ``,
        `Notes:`,
        form.note,
      ].join("\n"),
    );
    return `mailto:${brand.email}?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <PageShell title="Book Now — Gators & Gold Fishing">
      {/* Hero */}
      <section className="relative bg-ink overflow-hidden pt-32 pb-12 md:pt-40 grain">
        <div className="container-wide grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: easings.expoOut }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="stamp">Reserve a Date</span>
              <span className="stamp">2026 Season Open</span>
            </motion.div>
            <h1 className="font-display heavy text-paper leading-[0.85]">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.0, delay: 0.4, ease: easings.expoOut }}
                className="block text-[clamp(3rem,12vw,10rem)]"
              >
                Lock In
              </motion.span>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.0, delay: 0.55, ease: easings.expoOut }}
                className="block text-[clamp(3rem,12vw,10rem)] -mt-2 md:-mt-4 text-gold"
              >
                Your Day.
              </motion.span>
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: easings.expoOut }}
            className="col-span-12 lg:col-span-3"
          >
            <p className="text-bone leading-relaxed">
              Send Rob your dates. He confirms within 24 hours. $200 deposit
              locks the date in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-ink py-16 md:py-24">
        <div className="container-wide grid grid-cols-12 gap-6 md:gap-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;
            }}
            className="col-span-12 lg:col-span-8 bg-ink-2 border-2 border-rule p-6 md:p-10"
          >
            <p className="stamp mb-4">Charter Request</p>
            <h2 className="font-display heavy text-paper text-3xl md:text-5xl leading-[0.95] mb-10">
              Tell Rob about your trip.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Field label="Name">
                <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="form-input" placeholder="Your full name" />
              </Field>
              <Field label="Email">
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="form-input" placeholder="you@email.com" />
              </Field>
              <Field label="Phone (optional)">
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="form-input" placeholder="780 ··· ····" />
              </Field>
              <Field label="Anglers">
                <select value={form.anglers} onChange={(e) => setForm({ ...form, anglers: Number(e.target.value) })} className="form-input">
                  <option value={1}>1 angler</option>
                  <option value={2}>2 anglers</option>
                  <option value={3}>3 anglers</option>
                </select>
              </Field>
              <Field label="Trip type" className="md:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {tripTypes.map((t) => (
                    <label
                      key={t.id}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 border-2 cursor-pointer transition-colors duration-300",
                        form.trip === t.id ? "border-gold bg-gold/5" : "border-rule hover:border-rule-strong",
                      )}
                    >
                      <input
                        type="radio"
                        name="trip"
                        value={t.id}
                        checked={form.trip === t.id}
                        onChange={() => setForm({ ...form, trip: t.id })}
                        className="sr-only"
                      />
                      <span className={cn("block h-3 w-3 transition-colors duration-300", form.trip === t.id ? "bg-gold" : "bg-stone/40")} />
                      <span className="text-sm text-paper">{t.label}</span>
                    </label>
                  ))}
                </div>
              </Field>
              <Field label="Preferred date" className="md:col-span-2">
                <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="form-input" />
              </Field>
              <Field label="Anything else?" className="md:col-span-2">
                <textarea rows={4} value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} className="form-input resize-none" placeholder="Skill level, special occasions, alternate dates..." />
              </Field>
            </div>

            <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-6 border-t-2 border-gold/40">
              <p className="text-stone text-xs font-mono uppercase tracking-[0.22em]">
                Submitting opens an email with all details prefilled.
              </p>
              <button type="submit" className="btn">
                Send to Rob →
              </button>
            </div>
          </form>

          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-4 space-y-4">
            <div className="bg-ink-2 border-2 border-rule p-6 md:p-8">
              <p className="stamp mb-4">Quick Reference</p>
              <ul className="space-y-3 text-sm">
                {pricing.openWater.concat(pricing.ice).map((p) => (
                  <li key={p.label} className="border-b border-rule pb-3 last:border-0 last:pb-0">
                    <p className="font-display font-extrabold text-paper text-base uppercase leading-tight">{p.label}</p>
                    <div className="mt-1 flex items-baseline justify-between text-stone font-mono text-[0.65rem] uppercase tracking-[0.18em]">
                      <span>{p.hours}</span>
                      <span className="font-display heavy text-base text-gold normal-case tracking-normal">{p.tiers[0].price}+</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ink-2 border-2 border-rule p-6 md:p-8">
              <p className="stamp mb-4">The Fine Print</p>
              <dl className="space-y-4 text-sm text-bone leading-relaxed">
                <div>
                  <dt className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-gold mb-1">Deposit</dt>
                  <dd>{policy.deposit}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-gold mb-1">Payment</dt>
                  <dd>{policy.payment}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-gold mb-1">Cancellation</dt>
                  <dd>{policy.cancellation}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-gold mb-1">Waiver</dt>
                  <dd>{policy.waiver}</dd>
                </div>
              </dl>
            </div>

            <div className="bg-pine-deep border-2 border-gold/30 p-6 md:p-8">
              <p className="stamp mb-2">Prefer to talk first?</p>
              <p className="text-bone text-sm leading-relaxed mb-6 mt-3">
                Text Rob directly. He'll get back to you between charters.
              </p>
              <a href={`sms:${brand.phone.replace(/-/g, "")}`} className="block font-display heavy text-3xl text-gold hover:text-paper transition-colors">
                {brand.phone}
              </a>
              <a href={`mailto:${brand.email}`} className="block font-display font-extrabold text-lg text-paper hover:text-gold transition-colors mt-1 break-all">
                {brand.email}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink-2 py-24 md:py-32 border-t-2 border-gold/30">
        <div className="container-wide grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <span className="stamp mb-4">FAQ</span>
            <h2 className="mt-4 font-display heavy text-paper leading-[0.9] text-[clamp(2rem,5vw,4.5rem)]">
              <span className="block">Questions?</span>
              <span className="block text-gold">Answers.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul>
              {faqs.map((f, i) => (
                <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <style>{`
        .form-input {
          width: 100%;
          background: rgba(12, 10, 8, 0.6);
          border: 2px solid var(--color-rule);
          color: var(--color-paper);
          padding: 0.875rem 1rem;
          font-size: 0.95rem;
          transition: border-color 250ms var(--ease-expo-out), background 250ms var(--ease-expo-out);
          font-family: var(--font-sans);
        }
        .form-input::placeholder { color: var(--color-stone); }
        .form-input:focus {
          outline: none;
          border-color: var(--color-gold);
          background: rgba(12, 10, 8, 0.85);
        }
        select.form-input {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23d4a82c' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.5rem;
        }
        input[type='date'].form-input { color-scheme: dark; }
      `}</style>
    </PageShell>
  );
}

function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={cn("flex flex-col gap-2", className)}>
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-gold">{label}</span>
      {children}
    </label>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useReveal<HTMLLIElement>(0.1);

  return (
    <li
      ref={ref}
      className={cn(
        "border-b-2 border-rule",
        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button onClick={() => setOpen(!open)} className="flex w-full items-baseline justify-between gap-6 py-6 text-left" aria-expanded={open}>
        <span className="font-display heavy text-paper text-2xl md:text-3xl leading-[1.05] pr-4">
          {q}
        </span>
        <span className={cn("shrink-0 font-display font-black text-3xl text-gold transition-transform duration-500", open && "rotate-45")} aria-hidden>
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: easings.expoOut }}
            className="overflow-hidden"
          >
            <p className="pb-8 max-w-2xl text-bone leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
