"use client";

import React from "react";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const legal = legalTexts[params.slug];
  if (!legal) {
    return { title: "Seite nicht gefunden – David Luff" };
  }
  return {
    title: `${legal.title} – David Luff`,
    description: `Rechtliche Informationen: ${legal.title}`,
  };
}

const legalTexts: Record<string, { title: string; content: string }> = {
  imprint: {
    title: "Impressum",
    content: `
<p>Angaben gemäß § 5 DDG</p><p>David Luff
Westermühlstraße 4
80469 München
</p><p><strong>Vertreten durch:</strong>
David Luff
</p><p><strong>Kontakt:</strong>
Telefon: +49-15732352131
E-Mail: <a href='mailto:kontakt@davidluff.de'>kontakt@davidluff.de</a></p><p><strong>Hinweis:</strong><br><strong>Haftung für Inhalte</strong>
Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p><p><strong>Haftung für Links</strong>
Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p><p><strong>Urheberrecht</strong>
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
<p><strong>Hosting:</strong><br>
Diese Website wird gehostet von Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.<br>
<a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a>
</p>
<p>Erstellt mit <a href="https://impressum-generator.de" rel="dofollow">Impressum-Generator.de</a>, dem Tool für Impressum und <a href="https://impressum-generator.de/datenschutz-generator" rel="dofollow">Datenschutz-Erklärung</a>. Nach einer Vorlage der <a href="https://www.kanzlei-hasselbach.de/" rel="dofollow">Kanzlei Hasselbach</a>.</p>
    `,
  },
  "privacy-policy": {
    title: "Datenschutzerklärung",
    content: `
<p><strong>Datenschutz</strong>
Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
<p>Erstellt mit <a href="https://impressum-generator.de" rel="dofollow">Impressum-Generator.de</a>, dem Tool für Impressum und <a href="https://impressum-generator.de/datenschutz-generator" rel="dofollow">Datenschutz-Erklärung</a>. Nach einer Vorlage der <a href="https://www.kanzlei-hasselbach.de/" rel="dofollow">Kanzlei Hasselbach</a>.</p>
`,
  },
  "cookie-policy": {
    title: "Cookie-Richtlinie",
    content: `
<p><strong>Cookie-Richtlinie</strong></p>
<p>Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Seite erforderlich sind. Diese dienen zum Beispiel der sicheren Bereitstellung und Darstellung der Inhalte.</p>
<p>Wir verwenden keine Tracking-, Analyse- oder Marketing-Cookies.</p>

<p>Bei der Nutzung unseres Chatbots werden Anfragen über die OpenAI API verarbeitet. Dabei werden keine Cookies zur Nachverfolgung oder Profilbildung eingesetzt. Weitere Informationen zur Datenverarbeitung findest du in unserer <a href="/legal/privacy-policy">Datenschutzerklärung</a>.</p>

<p>Du kannst die Nutzung unserer Website ohne Einschränkungen auch ohne Zustimmung zu optionalen Cookies fortsetzen, da keine gesetzt werden.</p>
    `,
  },
};

interface LegalProps {
  slug: string;
}

const Legal: React.FC<LegalProps> = ({ slug }) => {
  const legal = legalTexts[slug];

  if (!legal) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-20 text-center text-muted-foreground">
        <h1 className="text-4xl font-extrabold mb-6 text-foreground">Seite nicht gefunden</h1>
        <p className="text-lg">Die angeforderte rechtliche Seite existiert nicht.</p>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-6 text-foreground">{legal.title}</h1>
      <div
        className="text-muted-foreground whitespace-pre-line leading-relaxed space-y-4 prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: legal.content }}
      />
      <div className="mt-8">
        <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">← Zurück zur Startseite</a>
      </div>
    </main>
  );
};

export default Legal;

<style jsx global>{`
  a:hover {
    color: var(--muted-foreground);
  }
`}</style>