# Standard-Notiz: Browserbasierte Apps, Speicherung, Nutzerkonto und Lizenz

Diese Notiz dient als gemeinsame Grundlage fuer SMART SnippetFlow und weitere Apps mit aehnlichem Lizenz- und Nutzungsmodell.

## Grundentscheidung

Die Apps werden nicht mehr als rein lokale Desktop-Apps beschrieben, sondern als browserbasierte Anwendungen mit Nutzerkonto, Testphase, Kauf, Lizenzpruefung und persoenlicher Datenablage.

Das ist sinnvoll, wenn mehrere Apps spaeter ueber ein einheitliches System verwaltet werden sollen und Nutzer ihre Lizenzen, Testphasen und Kauefe zentral nutzen koennen.

## Browserbasierte Nutzung

Die App laeuft im Webbrowser und kann dadurch auf Windows, macOS und anderen modernen Systemen genutzt werden. Eine separate Installation als klassische Desktop-App ist fuer dieses Modell nicht zwingend erforderlich.

Geeignete Formulierung:

> Die App kann ueber den Browser auf Windows, macOS und anderen modernen Systemen genutzt werden.

Nicht mehr passend fuer dieses Modell:

> Die App wird lokal auf dem Rechner installiert.

## Nutzerkonto

Fuer Testphase, Kauf, Lizenzpruefung und Nutzung wird ein Nutzerkonto benoetigt. Jeder Nutzer arbeitet in seinem eigenen Konto mit eigenen Daten.

Geeignete Formulierung:

> Fuer Testphase, Kauf und Lizenzpruefung wird ein Nutzerkonto benoetigt.

Wichtig:

- Nicht behaupten, dass kein Nutzerkonto notwendig ist.
- Nicht von einer klassischen lokalen Einzelplatz-Installation sprechen, wenn die App im Browser laeuft.
- Login-Details wie Magic Link oder Passwort nur nennen, wenn die technische Umsetzung final feststeht.

## Speicherung der Daten

Bei einer browserbasierten App liegen die Daten nicht nur lokal auf dem Rechner. Die Inhalte werden dem jeweiligen Nutzerkonto zugeordnet. Andere Nutzer koennen nicht auf diese Daten zugreifen.

Geeignete Formulierung:

> Jeder Nutzer arbeitet in seinem eigenen Konto. Andere Nutzer koennen nicht auf diese Daten zugreifen.

Oder:

> Deine Inhalte werden deinem persoenlichen Arbeitsbereich zugeordnet und sind nicht fuer andere Nutzer sichtbar.

Nicht mehr passend:

> Deine Bibliothek bleibt nur lokal auf deinem Rechner.

> Es gibt keine Cloud.

Diese Aussagen passen nur zu einer echten Offline-Desktop-App ohne Konto- und Serveranbindung.

## Lizenzmodell

Das Lizenzmodell kann app-uebergreifend gleich aufgebaut werden:

- Jahreslizenz mit 12 Monaten Laufzeit
- automatische Verlaengerung um weitere 12 Monate
- Kuendigungsfrist 1 Monat vor Ablauf
- sichere Online-Zahlung
- Testphase, zum Beispiel 7 Tage
- pro Lizenz ein Nutzer beziehungsweise ein eigener Arbeitsbereich

Geeignete Formulierung:

> Du erhaeltst eine Jahreslizenz fuer 12 Monate. Sie verlaengert sich automatisch um weitere 12 Monate, wenn sie nicht spaetestens 1 Monat vor Ablauf gekuendigt wird.

## Mehrere Lizenzen

Wenn ein Kunde mehrere Personen ausstatten moechte, kauft er mehrere Lizenzen derselben App. Jeder Nutzer arbeitet mit eigenem Konto und eigenen Daten.

Geeignete Formulierung:

> Du kannst mehrere Lizenzen derselben App kaufen, zum Beispiel 5 Lizenzen fuer 5 getrennte Nutzer. Jeder Nutzer arbeitet mit eigenem Konto und eigenen Daten.

## Mehrere Apps

In der ersten Ausbaustufe kann pro Checkout eine App gekauft werden. Ein gemeinsamer Checkout fuer mehrere unterschiedliche Apps kann spaeter ergaenzt werden.

Geeignete Formulierung:

> In der ersten Version wird pro Checkout eine App gekauft. Mehrere unterschiedliche Apps in einem gemeinsamen Checkout sind fuer spaeter vorgesehen.

## KI-Funktionen

Wenn die App KI-Funktionen nutzt, sollte klar beschrieben werden, ob ein eigener API-Key notwendig ist.

Geeignete Formulierung:

> Die App kann dich bei Titeln, Kurzbeschreibungen und ergaenzenden Hinweisen unterstuetzen. Fuer die KI-Nutzung ist ein eigener Anthropic API-Key notwendig.

Nicht noetig auf der Landingpage:

> Lokaler Proxy

Technische Begriffe wie Proxy, Supabase, Webhooks oder Lizenzserver sollten auf der Verkaufsseite nur genannt werden, wenn sie fuer den Nutzer wirklich relevant sind.

## Empfohlene FAQ-Basis

### Laeuft die App im Browser?

Ja. Die App ist als browserbasierte Anwendung vorgesehen und laeuft im Webbrowser.

### Werden Daten in der Cloud gespeichert?

Die App ist browserbasiert. Jeder Nutzer arbeitet in seinem eigenen Konto. Andere Nutzer koennen nicht auf diese Daten zugreifen.

### Gibt es eine Windows- und macOS-Version?

Die App kann ueber den Browser auf Windows, macOS und anderen modernen Systemen genutzt werden.

### Wie funktioniert die Lizenz?

Du erhaeltst eine Jahreslizenz fuer 12 Monate. Sie verlaengert sich automatisch um weitere 12 Monate, wenn sie nicht spaetestens 1 Monat vor Ablauf gekuendigt wird.

### Brauche ich ein Nutzerkonto?

Ja. Fuer Testphase, Kauf und Lizenzpruefung wird ein Nutzerkonto benoetigt.

### Kann ich Daten exportieren?

Ja. Eigene Daten koennen exportiert und spaeter wieder importiert werden.

## Kurzfazit

Fuer die kommenden Apps ist das browserbasierte Modell mit Nutzerkonto, Lizenzpruefung und persoenlicher Datenablage der einheitlichere Weg. Es ist besser skalierbar, einfacher fuer Testphasen und Kauefe und spaeter leichter auf mehrere Apps, mehrere Geraete und Teamfunktionen erweiterbar.
