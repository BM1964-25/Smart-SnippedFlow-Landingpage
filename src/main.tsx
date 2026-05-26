import { StrictMode } from "react";
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
} from "lucide-react";
import "./styles.css";

const purchaseLink = "https://bm1964-25.github.io/Landing-Tafel-Kontakt/";
const logoUrl = `${import.meta.env.BASE_URL}app-logo.png`;
const heroScreenshotUrl = `${import.meta.env.BASE_URL}hero-app-screenshot.png`;

const legalLinks = [
  { label: "Impressum", href: "https://www.built-smart-hub.com/impressum" },
  { label: "Datenschutz", href: "https://www.built-smart-hub.com/datenschutz" },
  { label: "AGB", href: "https://www.built-smart-hub.com/agb" },
  { label: "Widerrufsbelehrung", href: "https://www.built-smart-hub.com/widerrufsbelehrung" },
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
    question: "Wie wird die App geöffnet?",
    answer:
      "Die App wird nach dem Download über den mitgelieferten Starter geöffnet. Sie läuft lokal auf deinem Gerät und wird anschließend im Browser angezeigt.",
  },
  {
    question: "Werden Daten in der Cloud gespeichert?",
    answer:
      "Nein. Deine Inhalte werden lokal auf deinem Gerät bzw. im lokalen Browser-Speicher gespeichert. Es gibt keine automatische zentrale Cloud-Datenbank und keine automatische Synchronisierung zwischen Nutzern.",
  },
  {
    question: "Gibt es eine Windows- und macOS-Version?",
    answer:
      "Ja. Die App kann auf Windows und macOS lokal im Browser genutzt werden. Dafür gibt es passende Starter für das jeweilige System.",
  },
  {
    question: "Wie funktioniert die Lizenz?",
    answer:
      "Du erhältst eine Jahreslizenz für 12 Monate. Sie verlängert sich automatisch um weitere 12 Monate, sofern sie nicht spätestens 1 Monat vor Ablauf gekündigt wird.",
  },
  {
    question: "Gibt es eine kostenlose Testphase?",
    answer:
      "Ja, sofern dieses Modell aktiviert ist. Die App kann dann für einen begrenzten Zeitraum mit vollem Funktionsumfang getestet werden.",
  },
  {
    question: "Brauche ich ein Nutzerkonto?",
    answer:
      "Für Testphase, Kauf und Lizenzprüfung kann ein Nutzerkonto erforderlich sein. Die gespeicherten Inhalte der App bleiben davon getrennt lokal auf deinem Gerät.",
  },
  {
    question: "Kann ich Daten exportieren?",
    answer:
      "Ja. Du kannst deine Bibliothek als JSON exportieren und später wieder importieren, z. B. zur Sicherung oder zur Übertragung auf ein anderes Gerät.",
  },
  {
    question: "Welche Inhalte kann ich verwalten?",
    answer:
      "Du kannst Prompts, Code-Snippets, einfache Workflows, Notizen, Kategorien, Tags und Favoriten strukturiert verwalten.",
  },
  {
    question: "Gibt es KI-Funktionen?",
    answer:
      "Ja. Die App kann beim Erstellen von Titeln, Beschreibungen, Kategorien, Tags und Prompt-Varianten unterstützen. Für KI-Funktionen wird ein eigener API-Key benötigt.",
  },
  {
    question: "Warum brauche ich einen Anthropic API-Key?",
    answer:
      "Die KI-Funktionen laufen über die Anthropic API. Dafür wird ein eigener Anthropic API-Key benötigt. Ein normales Claude-Abo, z. B. Claude Pro, ist dafür nicht ausreichend. Für API-Nutzung können zusätzliche Kosten nach Anthropic-Abrechnung entstehen. Inhalte werden nur für die jeweilige KI-Anfrage an den Anbieter übertragen.",
  },
];

function App() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <HeroVariant />
      <Problem />
      <FeatureGrid />
      <LocalStorage />
      <Audience />
      <License />
      <FAQ />
      <Footer />
    </main>
  );
}

function HeroVariant() {
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
          <nav className="hidden items-center gap-6 text-sm text-graphite/70 md:flex">
            <a href="#features" className="hover:text-ink">Funktionen</a>
            <a href="#local" className="hover:text-ink">Arbeitsbereich</a>
            <a href="#audience" className="hover:text-ink">Zielgruppe</a>
            <a href="#license" className="hover:text-ink">Lizenz</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
          </nav>
          <a
            href={purchaseLink}
            className="hidden h-11 items-center gap-2 rounded-xl bg-ink px-5 text-sm font-semibold text-white transition hover:bg-ink/88 sm:inline-flex"
            rel="noreferrer"
            target="_blank"
          >
            Lizenz sichern
            <ArrowRight className="h-4 w-4" />
          </a>
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
              <a
                href={purchaseLink}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-ink transition hover:bg-[#f4f1eb]"
                rel="noreferrer"
                target="_blank"
              >
                Jetzt kaufen
                <ArrowRight className="h-4 w-4" />
              </a>
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
    <section className="section bg-[#f6f3ee]">
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
    <section id="features" className="section border-y border-ink/10 bg-[#fffdf9]">
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
    <section id="local" className="section bg-[#eee8de]">
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
            <div className="rounded-xl border border-ink/10 bg-white/78 p-5 shadow-sm" key={title}>
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
              Arbeitsbausteine verlässlich zu organisieren. Persönliche Arbeitsbereiche, klare Datenzuordnung und professionelle
              KI-Unterstützung schaffen die Grundlage für konzentriertes Arbeiten.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-[1.65] text-white/64">
              Mit der Jahreslizenz entsteht eine langfristig nutzbare Wissensbibliothek, die Prozesse beschleunigt,
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
    <div className="rounded-lg border border-white/45 bg-[#26384d]/92 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-10">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-white/62">Professional</p>
          <h3 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl">Jahreslizenz</h3>
        </div>
        <BadgeCheck className="mt-2 h-14 w-14 shrink-0 text-[#A0F5E8] sm:h-16 sm:w-16" />
      </div>
      <div className="mt-7 flex flex-wrap items-end gap-x-5 gap-y-2">
        <span className="text-[82px] font-bold leading-none tracking-normal text-white sm:text-[92px]">179 €</span>
        <span className="pb-4 text-base font-semibold text-white/88">pro Jahr zzgl. 19% MwSt.</span>
      </div>
      <p className="mt-4 text-sm font-semibold leading-6 text-white/78">213,01 € inkl. MwSt.</p>
      <p className="text-sm font-semibold leading-6 text-white/78">
        Entspricht 14,92 € netto / 17,75 € brutto pro Monat
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {["12 Monate Laufzeit", "3 Tage testen", "1 Nutzerzugriff"].map((item) => (
          <div
            className="rounded-full border border-white/20 bg-white/12 px-4 py-2 text-center text-sm font-bold leading-none text-white shadow-inner"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Verlängerung", "Automatisch um 12 Monate"],
          ["Kündigung", "1 Monat vor Ablauf"],
          ["Zahlung", "Sicherer Online-Zahlungsprozess"],
        ].map(([title, text]) => (
          <div className="rounded-lg border border-white/14 bg-[#1f3147]/68 p-4 text-center" key={title}>
            <p className="text-xs font-bold uppercase tracking-wide text-[#A0F5E8]">{title}</p>
            <p className="mt-2 text-base font-semibold leading-6 text-white/90">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-lg border border-[#A0F5E8]/18 bg-[#315268]/45 p-5 text-center">
        <p className="text-xs font-bold uppercase tracking-wide text-[#A0F5E8]">KI-Nutzung</p>
        <p className="mt-2 text-base font-semibold leading-6 text-white/92">
          Eigener Anthropic API-Key erforderlich
        </p>
      </div>
      <a
        href={purchaseLink}
        className="mt-7 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-white px-6 text-base font-bold text-[#142135] shadow-[0_18px_36px_rgba(4,12,24,0.24)] transition duration-200 hover:scale-[1.01] hover:bg-[#f4f1eb]"
        rel="noreferrer"
        target="_blank"
      >
        Lizenz sichern
        <ArrowRight className="h-4 w-4" />
      </a>
      <p className="mt-5 text-center text-sm font-semibold text-white/58">
        Jahreslizenz | sichere Zahlung | persönlicher Nutzerzugriff
      </p>
    </div>
  );
}

function Audience() {
  return (
    <section id="audience" className="section border-t border-ink/10 bg-[#fffaf3]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="eyebrow">Zielgruppe</p>
        <h2 className="section-title max-w-4xl">Gebaut für Menschen, die Wissen, Prompts und Arbeitsbausteine wiederverwenden.</h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <div className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white/78 p-4 shadow-sm" key={audience}>
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
    <section id="faq" className="section border-t border-ink/10 bg-[#eee8de]">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title">Kurz beantwortet.</h2>
        <div className="mt-10 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white/[0.82] shadow-sm">
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
