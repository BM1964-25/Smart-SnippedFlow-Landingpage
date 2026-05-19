import React from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Braces,
  Check,
  Code2,
  Database,
  FileJson,
  Heart,
  HelpCircle,
  Library,
  Lock,
  NotebookText,
  PanelLeftClose,
  Play,
  Plus,
  Search,
  Settings,
  Sparkles,
  Star,
  Tags,
  Trash2,
  Users,
  Workflow,
} from "lucide-react";
import "./styles.css";

const checkoutFunctionUrl = import.meta.env.VITE_CHECKOUT_FUNCTION_URL as string | undefined;
const fallbackPaymentLink = import.meta.env.VITE_STRIPE_PAYMENT_LINK as string | undefined;
const logoUrl = `${import.meta.env.BASE_URL}app-logo.png`;

const legalLinks = [
  { label: "Impressum", href: "https://www.built-smart-hub.com/impressum" },
  { label: "Datenschutz", href: "https://www.built-smart-hub.com/datenschutz" },
  { label: "AGB", href: "https://www.built-smart-hub.com/agb" },
  { label: "Widerrufsbelehrung", href: "https://www.built-smart-hub.com/widerrufsbelehrung" },
];

const premiumLicenseFeatures = [
  "12 Monate Nutzung für professionelle Einzelanwender",
  "Lizenz für lokale Nutzung der App",
  "Professionelle Arbeitsumgebung mit lokaler Wissensbasis",
  "KI-gestützte Unterstützung innerhalb der App",
  "Export und Import lokaler Arbeitsdaten",
  "Nutzung eigener API-Keys über lokalen Proxy möglich",
  "Automatische Verlängerung um weitere 12 Monate",
  "Kündigungsfrist 1 Monat vor Ablauf",
  "Sichere Online-Zahlung",
];

const features = [
  {
    icon: Library,
    title: "Prompts verwalten",
    text: "Sammle wiederverwendbare Prompts mit Kontext, Struktur und sauberer Beschreibung.",
  },
  {
    icon: Code2,
    title: "Code-Snippets speichern",
    text: "Lege kleine Bausteine, Skripte und Beispiele auffindbar ab, ohne im Dateichaos zu suchen.",
  },
  {
    icon: Workflow,
    title: "Workflows dokumentieren",
    text: "Halte mehrstufige KI-Abläufe, Routinen und Produktionsschritte kompakt fest.",
  },
  {
    icon: NotebookText,
    title: "Notizen organisieren",
    text: "Nutze die Bibliothek auch für Denkzettel, Projektideen und wiederkehrende Vorlagen.",
  },
  {
    icon: Tags,
    title: "Tags und Kategorien",
    text: "Ordne Inhalte nach Projekt, Zweck, Sprache, Tool oder persönlichem System.",
  },
  {
    icon: Heart,
    title: "Favoriten",
    text: "Markiere die wichtigsten Snippets und Prompts für schnellen Zugriff.",
  },
  {
    icon: Database,
    title: "Lokale Speicherung",
    text: "Deine Inhalte bleiben auf deinem Rechner und werden nicht automatisch in eine Cloud übertragen.",
  },
  {
    icon: FileJson,
    title: "Export und Import",
    text: "Sichere deine Bibliothek und nimm deine Inhalte mit, wenn du sie später wiederherstellen möchtest.",
  },
  {
    icon: BrainCircuit,
    title: "KI-Vorschläge",
    text: "Lass passende Titel, Kurzbeschreibungen und ergänzende Hinweise für neue Einträge vorbereiten.",
  },
  {
    icon: Braces,
    title: "Direkte Vorschau",
    text: "Prüfe Inhalte wie HTML, CSS, JavaScript und Markdown direkt beim Arbeiten.",
  },
  {
    icon: Search,
    title: "Schnelle Suche",
    text: "Finde Einträge über Suchbegriffe, Typen, Kategorien und Tags ohne Umwege wieder.",
  },
  {
    icon: Star,
    title: "Klare Bibliotheksansicht",
    text: "Behalte Prompts, Code, Workflows und Notizen in einer ruhigen Oberfläche im Blick.",
  },
];

const audiences = [
  "Entwickler",
  "KI-Nutzer",
  "Content-Ersteller",
  "Selbstständige",
  "private Anwender",
  "Menschen mit wiederverwendbaren Prompts, Snippets und Workflows",
];

const faqs = [
  {
    question: "Läuft die App lokal?",
    answer:
      "Ja. SMART SnippetFlow ist als lokale Desktop-App gedacht und speichert deine Bibliothek auf deinem Rechner.",
  },
  {
    question: "Werden Daten in der Cloud gespeichert?",
    answer:
      "Nein. Deine Inhalte bleiben lokal auf deinem Rechner. Es gibt in der Einzelplatzversion keine automatische Cloud-Ablage.",
  },
  {
    question: "Gibt es eine Windows- und macOS-Version?",
    answer:
      "Ja. SMART SnippetFlow ist für Windows und macOS vorgesehen. Die Lizenz ist als Einzelplatzversion gedacht und wird je Installation bzw. Arbeitsplatz genutzt.",
  },
  {
    question: "Wie funktioniert die Lizenz?",
    answer:
      "Du erhältst eine Jahreslizenz für 12 Monate. Sie verlängert sich automatisch um weitere 12 Monate, wenn sie nicht spätestens 1 Monat vor Ablauf gekündigt wird.",
  },
  {
    question: "Kann ich Daten exportieren?",
    answer:
      "Ja. Du kannst deine Bibliothek exportieren und später wieder importieren.",
  },
  {
    question: "Gibt es KI-Funktionen?",
    answer:
      "Ja. Die App kann dich bei Titeln, Kurzbeschreibungen und ergänzenden Hinweisen unterstützen, bleibt aber bewusst schlank.",
  },
  {
    question: "Brauche ich ein Nutzerkonto?",
    answer:
      "Für die lokale Nutzung ist kein klassisches Online-Konto nötig. Kauf und Lizenzaktivierung laufen über einen sicheren Online-Prozess.",
  },
];

function App() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Header />
      <Hero />
      <Problem />
      <FeatureGrid />
      <LocalStorage />
      <License />
      <Audience />
      <FAQ />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-normal">
          <img src={logoUrl} alt="" className="h-9 w-9 rounded-lg shadow-sm" />
          <span>SMART SnippetFlow</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-graphite/70 md:flex">
          <a href="#features" className="hover:text-ink">Funktionen</a>
          <a href="#local" className="hover:text-ink">Lokal</a>
          <a href="#license" className="hover:text-ink">Lizenz</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </nav>
        <CheckoutButton className="button button-dark hidden sm:inline-flex">
          Lizenz sichern
          <ArrowRight className="h-4 w-4" />
        </CheckoutButton>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-ink/10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-[0.72fr_1.28fr] lg:px-8 lg:pb-24 lg:pt-24">
        <div>
          <p className="mb-5 inline-flex max-w-[360px] items-start gap-3 rounded-2xl border border-ink/10 bg-white/70 px-4 py-3 text-sm leading-5 text-graphite/80 shadow-sm backdrop-blur">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
            <span>
              Lokale Wissensbasis für
              <br />
              Prompts, Code, Workflows und Notizen
            </span>
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.03] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            SMART SnippetFlow
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-graphite/75 sm:text-xl">
            Die minimalistische Desktop-App, mit der du Prompts, Code-Snippets,
            KI-Workflows, Notizen und Vorlagen strukturiert sammelst, lokal
            speicherst und schnell wiederfindest.
          </p>
          <div className="mt-9 grid w-full max-w-[430px] grid-cols-1 gap-3 sm:grid-cols-2">
            <CheckoutButton className="button button-dark w-full">
              Jetzt kaufen
              <ArrowRight className="h-4 w-4" />
            </CheckoutButton>
            <a className="button button-light w-full" href="#features">
              Funktionen ansehen
              <Play className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 grid w-full max-w-[430px] grid-cols-1 gap-3 text-sm text-graphite/70 sm:grid-cols-3">
            <TrustItem>Lokal gespeichert</TrustItem>
            <TrustItem>Keine Cloud</TrustItem>
            <TrustItem>Export möglich</TrustItem>
          </div>
        </div>
        <AppMockup />
      </div>
    </section>
  );
}

function TrustItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-ink/10 bg-white/45 px-3 py-2">
      <Check className="h-4 w-4 text-sage" />
      <span>{children}</span>
    </div>
  );
}

function AppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="overflow-hidden rounded-[22px] border border-ink/10 bg-[#1f211f] shadow-soft">
        <div className="flex items-center justify-between border-b border-white/10 bg-[#2b2d2a] px-5 py-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#d8705a]" />
            <span className="h-3 w-3 rounded-full bg-[#d8ad61]" />
            <span className="h-3 w-3 rounded-full bg-[#78a87b]" />
          </div>
          <div className="text-xs text-white/48">SMART SnippetFlow</div>
        </div>
        <div className="grid min-h-[480px] grid-cols-[150px_1fr] bg-[#f7f4ef] sm:grid-cols-[210px_1fr]">
          <aside className="border-r border-ink/10 bg-[#ece7dc] p-4">
            <div className="mb-5 flex items-center gap-3">
              <img src={logoUrl} alt="" className="h-8 w-8 rounded-lg shadow-sm" />
              <div className="min-w-0">
                <div className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-graphite/60">
                  SMART
                </div>
                <div className="truncate text-sm font-semibold text-ink">SnippetFlow</div>
                <div className="truncate text-xs text-graphite/60">Lokale Wissensbasis</div>
              </div>
            </div>
            <div className="space-y-1">
              {[
                ["Bibliothek", Library],
                ["Prompts", NotebookText],
                ["Code", Code2],
                ["Workflows", Workflow],
                ["Notizen", NotebookText],
                ["Favoriten", Star],
                ["Einstellungen", Settings],
                ["Hilfe", HelpCircle],
              ].map(([item, Icon], index) => {
                const MenuIcon = Icon as typeof Library;

                return (
                  <div
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${
                      index === 0 ? "bg-white/72 text-ink shadow-sm" : "text-graphite/70"
                    }`}
                    key={item as string}
                  >
                    <MenuIcon className="h-4 w-4 shrink-0" />
                    <span className="truncate">{item as string}</span>
                  </div>
                );
              })}
            </div>
          </aside>
          <section className="p-4 sm:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-xs uppercase text-graphite/45">Bibliothek</div>
                <h2 className="mt-1 text-2xl font-semibold">Wiederverwendbare Bausteine</h2>
              </div>
              <div className="rounded-full bg-sage/10 px-3 py-1 text-sm text-sage">Favorit</div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Landingpage Copy", "React Component", "FAQ Rewrite", "Abfrage Beispiel"].map((title, index) => (
                <article className="rounded-xl border border-ink/10 bg-white p-4 shadow-sm" key={title}>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium">{title}</span>
                    <span className="rounded-full bg-mist px-2 py-1 text-xs text-graphite/60">
                      {index % 2 === 0 ? "Prompt" : "Code"}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <span className="block h-2 rounded-full bg-ink/10" />
                    <span className="block h-2 w-11/12 rounded-full bg-ink/10" />
                    <span className="block h-2 w-8/12 rounded-full bg-ink/10" />
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-ink/10 bg-[#20231f] p-4 text-sm text-white shadow-glow">
              <div className="mb-3 flex items-center justify-between text-white/60">
                <span>Vorschau</span>
                <span>Notiz</span>
              </div>
              <div className="rounded-lg bg-white/10 p-4 leading-7 text-white/80">
                # Kampagnenstruktur<br />
                - Zielgruppe definieren<br />
                - Prompt mit Kontext speichern<br />
                - Ergebnis als Vorlage markieren
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function Problem() {
  return (
    <section className="section">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="eyebrow">Problem und Nutzen</p>
          <h2 className="section-title">Prompts, Code, Workflows und Notizen sind Arbeitskapital.</h2>
        </div>
        <div className="grid gap-4 text-lg leading-8 text-graphite/75">
          <p>
            Wer regelmäßig mit KI, Code und wiederkehrenden Arbeitsabläufen
            arbeitet, produziert wertvolle kleine Bausteine. Ohne Struktur
            verschwinden sie in Chats, Notizen, Dateien oder Browser-Tabs.
            Dabei sind Prompts, Code, Workflows und Notizen echtes
            Arbeitskapital.
          </p>
          <p>
            SMART SnippetFlow bringt diese Bausteine an einen ruhigen Ort:
            auffindbar, kategorisiert, lokal gespeichert und bereit für den
            nächsten Einsatz.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section id="features" className="section bg-white/45">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Funktionen</p>
          <h2 className="section-title">Alles, was eine fokussierte Wissensbasis für wiederverwendbare Bausteine braucht.</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="feature-card" key={feature.title}>
                <Icon className="h-5 w-5 text-blue" />
                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-graphite/70">{feature.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LocalStorage() {
  return (
    <section id="local" className="section">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="eyebrow">Lokale Datenspeicherung</p>
          <h2 className="section-title">Deine Bibliothek bleibt auf deinem Rechner.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite/75">
            SMART SnippetFlow speichert deine Bibliothek lokal auf deinem
            Rechner. Es gibt keine automatische Cloud-Ablage, keine
            Teamverwaltung und kein unnötig komplexes Online-System im
            Hintergrund.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            ["Lokal gespeichert", "Deine Bibliothek bleibt direkt auf deinem Rechner."],
            ["Keine Cloud", "Keine automatische Übertragung deiner Inhalte."],
            ["Bewusst schlank", "Ein Werkzeug für Einzelpersonen und private Anwender."],
          ].map(([title, text]) => (
            <div className="rounded-xl border border-ink/10 bg-white/60 p-5 shadow-sm" key={title}>
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-sage" />
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-3 leading-7 text-graphite/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function License() {
  return (
    <section id="license" className="bg-[#0b0b10] py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,1fr)_640px] xl:gap-20">
          <div>
            <p className="eyebrow text-white/55">Lizenzmodell</p>
            <h2 className="section-title max-w-3xl text-white">
              Eine professionelle Jahreslizenz für produktive KI-Arbeit.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-[1.65] text-white/78">
              Eine strukturierte Arbeitsumgebung hilft dabei, wiederkehrende Aufgaben, Vorlagen und produktive
              Arbeitsbausteine verlässlich zu organisieren. Lokale Nutzung, klare Datenkontrolle und professionelle
              KI-Unterstützung schaffen die Grundlage für konzentriertes Arbeiten.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-[1.65] text-white/64">
              Mit der Jahreslizenz entsteht eine langfristig nutzbare Wissensbasis, die Prozesse beschleunigt,
              Ergebnisse konsistenter macht und den professionellen Arbeitsalltag dauerhaft entlastet.
            </p>
          </div>
          <PremiumFramedPriceCard />
        </div>
      </div>
    </section>
  );
}

function PremiumFramedPriceCard() {
  return (
    <div className="rounded-2xl border border-white bg-white/[0.09] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-12">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold text-white">Professional Jahreslizenz</h3>
          <div className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-2">
            <span className="text-[56px] font-bold leading-none tracking-normal text-white">599 €</span>
            <span className="pb-2 text-base text-white/60">pro Jahr</span>
          </div>
          <p className="mt-3 text-[13px] leading-6 text-white/54">
            zzgl. 19 % MwSt. · entspricht 49,92 € netto pro Monat
          </p>
        </div>
        <BadgeCheck className="h-14 w-14 shrink-0 text-[#A0F5E8]" />
      </div>
      <ul className="mt-8 space-y-4">
        {premiumLicenseFeatures.map((item) => (
          <li className="flex gap-3 text-[15px] leading-[1.5] text-white/85" key={item}>
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#A0F5E8]" />
            <span className="xl:whitespace-nowrap">{item}</span>
          </li>
        ))}
      </ul>
      <CheckoutButton className="mt-10 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-[10px] bg-gradient-to-r from-[#A0F5E8] to-[#7DD3C0] px-6 text-base font-semibold text-[#09100f] transition duration-200 hover:scale-[1.02] hover:brightness-110">
        Lizenz sichern
        <ArrowRight className="h-4 w-4" />
      </CheckoutButton>
    </div>
  );
}

function CheckoutButton({ children, className }: { children: React.ReactNode; className: string }) {
  const [state, setState] = React.useState<"idle" | "loading" | "error">("idle");

  async function handleCheckout() {
    if (!checkoutFunctionUrl) {
      if (fallbackPaymentLink) {
        window.location.href = fallbackPaymentLink;
        return;
      }

      setState("error");
      return;
    }

    setState("loading");

    try {
      const response = await fetch(checkoutFunctionUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          successUrl: `${window.location.origin}${window.location.pathname}?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}${window.location.pathname}#license`,
        }),
      });
      const payload = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !payload.url) {
        throw new Error(payload.error ?? "Checkout konnte nicht gestartet werden.");
      }

      window.location.href = payload.url;
    } catch {
      setState("error");
    }
  }

  return (
    <button type="button" className={className} onClick={() => void handleCheckout()} disabled={state === "loading"}>
      {state === "loading" ? "Checkout wird geöffnet..." : state === "error" ? "Checkout nicht konfiguriert" : children}
    </button>
  );
}

function Audience() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="eyebrow">Zielgruppe</p>
        <h2 className="section-title max-w-4xl">Gebaut für Menschen, die ihre besten Bausteine wiederverwenden.</h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <div className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white/60 p-4" key={audience}>
              <Users className="h-5 w-5 text-clay" />
              <span className="font-medium">{audience}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section bg-white/45">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title">Kurz beantwortet.</h2>
        <div className="mt-10 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white/70">
          {faqs.map((item) => (
            <details className="group p-5 sm:p-6" key={item.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold">
                {item.question}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/10 text-xl leading-none text-graphite/60 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 leading-7 text-graphite/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <FooterVariant
          appName="SMART SnippetFlow"
          slogan="Lokale Wissensbasis für Prompts, Code, Workflows und Notizen"
        />
      </div>
    </footer>
  );
}

function FooterVariant({ appName, slogan }: { appName: string; slogan: string }) {
  return (
    <section>
      <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-3 md:flex-row">
          <img src={logoUrl} alt="" className="h-11 w-11 rounded-xl shadow-sm" />
          <div>
            <div className="font-semibold text-ink">{appName}</div>
            <div className="mt-1 text-sm text-graphite/60">{slogan}</div>
          </div>
        </div>
        <div className="text-sm text-graphite/68 md:text-right">
          <div>© 2026 SmartBuilt-AI · Powered by BuiltSmart Hub</div>
          <nav className="mt-2 flex flex-wrap justify-center gap-x-2 gap-y-1 md:justify-end">
            {legalLinks.map((link, index) => (
              <span className="inline-flex items-center gap-2" key={link.href}>
                {index > 0 ? <span className="text-graphite/35">|</span> : null}
                <a className="hover:text-ink" href={link.href} rel="noreferrer" target="_blank">
                  {link.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
