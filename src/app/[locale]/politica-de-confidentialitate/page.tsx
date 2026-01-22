import { setRequestLocale } from 'next-intl/server';

export default async function Page({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="container py-20 px-4 md:px-6 max-w-3xl mx-auto">
            <h1 className="text-4xl font-heading font-bold text-gold mb-8">Politica de Confidențialitate</h1>

            <div className="prose max-w-none">
                <p>Ultima actualizare: {new Date().toLocaleDateString()}</p>

                <h2>1. Introducere</h2>
                <p>
                    Asociația Acces spre Succes respectă confidențialitatea datelor dumneavoastră și se angajează să protejeze datele personale pe care ni le furnizați. Această politică explică modul în care colectăm, utilizăm și protejăm informațiile dumneavoastră.
                </p>

                <h2>2. Datele colectate</h2>
                <p>
                    Colectăm date personale atunci când:
                </p>
                <ul>
                    <li>Completați formulare pe site-ul nostru (ex: formular de voluntariat, contact).</li>
                    <li>Vă abonați la newsletter.</li>
                    <li>Navigați pe site-ul nostru (prin cookie-uri).</li>
                </ul>

                <h2>3. Utilizarea datelor</h2>
                <p>
                    Utilizăm datele colectate pentru:
                </p>
                <ul>
                    <li>A comunica cu dumneavoastră.</li>
                    <li>A procesa cererile de voluntariat.</li>
                    <li>A vă trimite noutăți despre activitatea noastră (doar cu acordul dumneavoastră).</li>
                </ul>

                <h2>4. Drepturile dumneavoastră</h2>
                <p>
                    Aveți dreptul de a solicita accesul, rectificarea sau ștergerea datelor dumneavoastră personale. Pentru orice solicitare, vă rugăm să ne contactați la admin@acces-spre-succes.ro.
                </p>

                <h2>5. Contact</h2>
                <p>
                    Pentru întrebări legate de această politică, ne puteți scrie la admin@acces-spre-succes.ro.
                </p>
            </div>
        </div>
    );
}
