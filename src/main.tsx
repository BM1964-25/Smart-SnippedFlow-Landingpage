import { StrictMode, useState } from "react";
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
  Search,
  Sparkles,
  Star,
  Tags,
  Users,
  Workflow,
  X,
} from "lucide-react";
import "./styles.css";

const logoUrl = `${import.meta.env.BASE_URL}app-logo.png`;
const heroScreenshotUrl = `${import.meta.env.BASE_URL}hero-app-screenshot.png`;

const legalLinks = [
  { label: "Impressum", href: "https://www.built-smart-hub.com/impressum" },
  { label: "Datenschutz", href: "https://www.built-smart-hub.com/datenschutz" },
  { label: "AGB", href: "https://www.built-smart-hub.com/agb" },
  { label: "Widerrufsbelehrung", href: "https://www.built-smart-hub.com/widerrufsbelehrung" },
];

const premiumLicenseFeatures = [
  "12 Monate Nutzung für professionelle Einzelanwender",
  "Nutzung der App im Webbrowser",
  "Professionelle Arbeitsumgebung mit persönlicher Wissensbibliothek",
  "KI-gestützte Unterstützung innerhalb der App",
  "Export und Import eigener Arbeitsdaten",
  "KI-Nutzung mit eigenem Anthropic API-Key",
  "Automatische Verlängerung um weitere 12 Monate",
  "Kündigungsfrist 1 Monat vor Ablauf",
  "Sichere Online-Zahlung",
];

const features = [
  {
    icon: Library,
    title: "Prompts verwalten",
    text: "Sammle wiederverwendbare Prompts mit Kontext, Struktur und klarer Beschreibung.",
  },
  {
    icon: Code2,
    title: "Code-Snippets speichern",
    text: "Lege Code-Beispiele, Skripte und wiederkehrende Lösungen auffindbar ab.",
  },
  {
    icon: Workflow,
    title: "Workflows dokumentieren",
    text: "Halte mehrstufige KI-Abläufe, Routinen und Arbeitsschritte kompakt fest.",
  },
  {
    icon: NotebookText,
    title: "Notizen organisieren",
    text: "Speichere Projektideen, Hinweise und persönliche Arbeitsnotizen an einem zentralen Ort.",
  },
  {
    icon: Tags,
    title: "Tags und Kategorien",
    text: "Ordne Inhalte nach Projekt, Zweck, Sprache, Tool oder persönlichem System.",
  },
  {
    icon: Heart,
    title: "Favoriten",
    text: "Markiere wichtige Prompts, Snippets und Notizen für schnellen Zugriff.",
  },
  {
    icon: Database,
    title: "Eigener Arbeitsbereich",
    text: "Jeder Nutzer arbeitet in seinem eigenen Konto mit getrennten Inhalten.",
  },
  {
    icon: FileJson,
    title: "Export und Import",
    text: "Sichere deine Bibliothek und stelle sie bei Bedarf wieder her.",
  },
  {
    icon: BrainCircuit,
    title: "KI-Unterstützung",
    text: "Lass passende Titel, Kurzbeschreibungen und ergänzende Hinweise für neue Einträge vorbereiten.",
  },
  {
    icon: Braces,
    title: "Live-Preview",
    text: "Prüfe HTML, CSS, JavaScript und Markdown direkt beim Arbeiten.",
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
  "KI-Anwender",
  "Content-Ersteller",
  "Selbstständige",
  "Private Anwender",
  "Anwender mit wiederkehrenden Arbeitsabläufen",
];

const faqs = [
  {
    question: "Läuft die App lokal?",
    answer:
      "SMART SnippetFlow läuft direkt im Webbrowser und kann über einen Link geöffnet werden. Eine Installation ist nicht erforderlich.",
  },
  {
    question: "Werden meine Inhalte in der Cloud gespeichert?",
    answer:
      "Nein. Deine Inhalte werden lokal im Browser gespeichert. Über JSON Export und Import kannst du sie sichern oder auf ein anderes Gerät übertragen.",
  },
  {
    question: "Gibt es eine Windows- und macOS-Version?",
    answer:
      "SMART SnippetFlow ist browserbasiert und kann auf Windows, macOS und anderen modernen Systemen genutzt werden.",
  },
  {
    question: "Brauche ich ein Nutzerkonto?",
    answer:
      "Für Trial, Kauf und Lizenzprüfung kann ein Nutzerkonto bzw. Login per E-Mail/Magic Link erforderlich sein. Deine Inhalte werden dadurch nicht automatisch in der Cloud gespeichert.",
  },
  {
    question: "Können andere Nutzer auf meine Daten zugreifen?",
    answer:
      "Nein. Deine Inhalte liegen lokal in deinem Browser. Andere Nutzer haben keinen Zugriff darauf.",
  },
  {
    question: "Kann ich Daten exportieren?",
    answer:
      "Ja. Du kannst deine Bibliothek als JSON exportieren und später wieder importieren.",
  },
  {
    question: "Gibt es eine kostenlose Testphase?",
    answer:
      "Ja. Du kannst die App 7 Tage kostenlos mit vollem Funktionsumfang testen.",
  },
  {
    question: "Wie funktioniert die Lizenz?",
    answer:
      "Du erhältst eine Jahreslizenz für 12 Monate. Sie verlängert sich automatisch um weitere 12 Monate, wenn sie nicht spätestens 1 Monat vor Ablauf gekündigt wird.",
  },
  {
    question: "Kann ich mehrere Lizenzen kaufen?",
    answer:
      "Ja. Du kannst mehrere Lizenzen derselben App kaufen, zum Beispiel 5 Lizenzen für 5 getrennte Nutzer.",
  },
  {
    question: "Kann ich mehrere Apps zusammen kaufen?",
    answer:
      "In der ersten Version wird pro Checkout eine App gekauft. Mehrere unterschiedliche Apps in einem gemeinsamen Checkout sind für später vorgesehen.",
  },
  {
    question: "Gibt es KI-Funktionen?",
    answer:
      "Ja. Die App kann dich bei Titeln, Kurzbeschreibungen und ergänzenden Hinweisen unterstützen. KI-Funktionen können optional mit eigenem API-Key genutzt werden.",
  },
];

function App() {
  const [isPreorderOpen, setIsPreorderOpen] = useState(false);

  return (
    <main className="min-h-screen bg-paper text-ink">
      <HeroVariant onPreorderClick={() => setIsPreorderOpen(true)} />
      <Problem />
      <FeatureGrid />
      <LocalStorage />
      <License onPreorderClick={() => setIsPreorderOpen(true)} />
      <Audience />
      <FAQ />
      <Footer />
      <PreorderDialog isOpen={isPreorderOpen} onClose={() => setIsPreorderOpen(false)} />
    </main>
  );
}

function HeroVariant({ onPreorderClick }: { onPreorderClick: () => void }) {
  return (
    <section id="top" className="relative min-h-[680px] overflow-hidden border-b border-ink/10 bg-[#09090d] text-white">
      <div className="absolute inset-0">
        <img
          src={heroScreenshotUrl}
          alt=""
          className="h-full w-full object-cover object-left-top opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020813] via-[#07111f]/88 to-[#07111f]/24" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020813]/98 via-[#020813]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020813]/68 via-transparent to-[#020813]/18" />
      </div>
      <div className="relative border-b border-ink/10 bg-[#f8f6f1]/95 shadow-[0_18px_60px_rgba(2,8,19,0.18)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-normal text-ink">
            <img src={logoUrl} alt="" className="h-9 w-9 rounded-lg shadow-sm" />
            <span>SMART SnippetFlow</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-graphite/70 md:flex">
            <a href="#features" className="hover:text-ink">Funktionen</a>
            <a href="#local" className="hover:text-ink">Konto</a>
            <a href="#license" className="hover:text-ink">Lizenz</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
          </nav>
          <button
            type="button"
            className="hidden h-11 items-center gap-2 rounded-xl bg-ink px-5 text-sm font-semibold text-white transition hover:bg-ink/88 sm:inline-flex"
            onClick={onPreorderClick}
          >
            Lizenz sichern
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="relative mx-auto flex min-h-[604px] max-w-7xl flex-col px-5 pb-6 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center py-12 lg:py-14">
          <div className="max-w-4xl">
            <p className="eyebrow text-[#A0F5E8]">Browserbasierte Produktivitäts-App</p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-4 py-2 text-sm text-white/76 backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#A0F5E8]" />
              Wiederverwendbare Prompts, Snippets und Workflows an einem Ort
            </p>
            <h2 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              SMART SnippetFlow
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
              Sammle Prompts, Code-Snippets, KI-Workflows und Notizen strukturiert
              in deinem eigenen Arbeitsbereich. Auffindbar, klar geordnet und schnell bereit
              für den nächsten Einsatz.
            </p>
            <div className="mt-9 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-ink transition hover:bg-[#f4f1eb]"
                onClick={onPreorderClick}
              >
                Jetzt kaufen
                <ArrowRight className="h-4 w-4" />
              </button>
              <a className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.06] px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/[0.12]" href="#features">
                Funktionen ansehen
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
              {[
                ["Eigenes Konto", "Getrennte Daten pro Nutzer"],
                ["Strukturiert", "Prompts, Code, Workflows und Notizen sortieren"],
                ["Wiederverwendbar", "Bausteine schneller finden"],
              ].map(([title, text]) => (
                <div className="rounded-xl border border-white/10 bg-white/[0.07] p-4 text-center backdrop-blur" key={title}>
                  <div className="flex items-center justify-center gap-2 text-sm font-semibold text-white">
                    <Check className="h-4 w-4 text-[#A0F5E8]" />
                    {title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/62">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
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
            arbeitet, erstellt wertvolle Bausteine für den nächsten Einsatz.
            Ohne Struktur verschwinden sie schnell in Chats, Notizen, Dateien
            oder Browser-Tabs.
          </p>
          <p>
            SMART SnippetFlow bringt diese Bausteine an einen ruhigen Ort:
            auffindbar, kategorisiert, im eigenen Konto gespeichert und bereit für den
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
          <h2 className="section-title">Alles, was eine fokussierte Wissensbibliothek für wiederverwendbare Inhalte braucht.</h2>
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
          <p className="eyebrow">Eigener Arbeitsbereich</p>
          <h2 className="section-title">
            Deine Bibliothek
            <br />
            bleibt bei dir.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite/75">
            SMART SnippetFlow speichert deine Prompts, Code-Snippets,
            Workflows und Notizen in deinem eigenen Nutzerkonto. Andere Nutzer
            können nicht auf deine Inhalte zugreifen. Die App bleibt bewusst
            schlank und konzentriert sich auf deine persönliche Arbeitsbibliothek.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            ["Eigenes Nutzerkonto", "Jeder Nutzer arbeitet mit getrennten Daten und eigener Bibliothek."],
            ["Browserbasiert", "Nutzbar auf Windows, macOS und anderen modernen Systemen."],
            ["Bewusst schlank", "Ein fokussiertes Werkzeug für Einzelanwender und persönliche Arbeitsabläufe."],
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

function License({ onPreorderClick }: { onPreorderClick: () => void }) {
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
              Arbeitsbausteine verlässlich zu organisieren. Persönliche Arbeitsbereiche, klare Datenzuordnung und professionelle
              KI-Unterstützung schaffen die Grundlage für konzentriertes Arbeiten.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-[1.65] text-white/64">
              Mit der Jahreslizenz entsteht eine langfristig nutzbare Wissensbibliothek, die Prozesse beschleunigt,
              Ergebnisse konsistenter macht und den professionellen Arbeitsalltag dauerhaft entlastet.
            </p>
          </div>
          <PremiumFramedPriceCard onPreorderClick={onPreorderClick} />
        </div>
      </div>
    </section>
  );
}

function PremiumFramedPriceCard({ onPreorderClick }: { onPreorderClick: () => void }) {
  return (
    <div className="rounded-2xl border border-white bg-white/[0.09] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-12">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold text-white">Professionelle Jahreslizenz</h3>
          <div className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-2">
            <span className="text-[56px] font-bold leading-none tracking-normal text-white">179 €</span>
            <span className="pb-2 text-base text-white/60">pro Jahr</span>
          </div>
          <p className="mt-3 text-[13px] leading-6 text-white/54">
            zzgl. 19 % MwSt. · entspricht 14,92 € netto pro Monat
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
      <button
        type="button"
        className="mt-10 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-[10px] bg-gradient-to-r from-[#A0F5E8] to-[#7DD3C0] px-6 text-base font-semibold text-[#09100f] transition duration-200 hover:scale-[1.02] hover:brightness-110"
        onClick={onPreorderClick}
      >
        Lizenz sichern
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function PreorderDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/55 px-5 py-8 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="preorder-title">
      <button type="button" className="absolute inset-0 cursor-default" aria-label="Hinweisfenster schließen" onClick={onClose} />
      <div className="relative w-full max-w-xl rounded-2xl border border-ink/10 bg-[#f8f6f1] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-9">
        <button
          type="button"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-graphite transition hover:bg-white hover:text-ink"
          aria-label="Hinweisfenster schließen"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </button>
        <p className="eyebrow">Vorbestellung</p>
        <h2 id="preorder-title" className="mt-4 pr-8 text-3xl font-semibold leading-tight tracking-normal text-ink">
          SMART SnippetFlow ist in Vorbereitung.
        </h2>
        <div className="mt-5 grid gap-4 text-base leading-7 text-graphite/74">
          <p>
            Der Kaufbereich wird derzeit vorbereitet. Bei Interesse kannst du
            eine Vorbestellung vormerken lassen.
          </p>
          <p>
            Sobald Trial, Zahlung und Lizenzfreischaltung aktiv sind, führt der
            Kaufbutton direkt zur sicheren Online-Bestellung.
          </p>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto]">
          <a
            href="mailto:info@built-smart-hub.com?subject=Vorbestellung%20SMART%20SnippetFlow"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-ink px-6 text-sm font-semibold text-white transition hover:bg-ink/88"
          >
            Vorbestellung anfragen
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-ink/12 bg-white/60 px-6 text-sm font-semibold text-ink transition hover:bg-white"
            onClick={onClose}
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}

function Audience() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="eyebrow">Zielgruppe</p>
        <h2 className="section-title max-w-4xl">Gebaut für Menschen, die Wissen, Prompts und Arbeitsbausteine wiederverwenden.</h2>
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
          slogan="Persönliche Wissensbibliothek für Prompts, Code, Workflows und Notizen"
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
          <div>© 2026 SmartBuilt-AI · powered by BuiltSmart Hub - Bernhard Metzger</div>
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
  <StrictMode>
    <App />
  </StrictMode>,
);
