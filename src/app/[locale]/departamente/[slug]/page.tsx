import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";

const departments: Record<string, { title: string; description: string }> = {
    marketing: { title: "Marketing", description: "Promovăm cauza noastră și atragem resurse." },
    tabere: { title: "Tabere", description: "Organizăm experiențe memorabile pentru copii." },
    it: { title: "Web Development / IT", description: "Dezvoltăm soluții digitale pentru ONG." },
    media: { title: "Fotografie & Media", description: "Documentăm activitățile noastre." },
    educatie: { title: "Educație", description: "Oferim mentorat și sprijin educațional." },
};

export default async function Page({
    params
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    const department = departments[slug];

    if (!department) {
        notFound();
    }

    return (
        <div className="container py-20 px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
                <Button asChild variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-gold">
                    <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Înapoi la acasă</Link>
                </Button>

                <h1 className="text-4xl font-heading font-bold text-gold mb-6">{department.title}</h1>
                <p className="text-xl text-gray-600 mb-12">{department.description}</p>

                <div className="prose max-w-none">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h3>Ce facem noi?</h3>
                    <ul>
                        <li>Activitate principală 1</li>
                        <li>Activitate principală 2</li>
                        <li>Activitate principală 3</li>
                    </ul>
                    <h3>Cum te poți implica?</h3>
                    <p>
                        Dacă ești pasionat de {department.title.toLowerCase()}, te așteptăm în echipa noastră!
                    </p>
                </div>

                <div className="mt-12">
                    <Button asChild className="bg-gold text-white hover:bg-gold/90">
                        <Link href="/voluntariat/devino-voluntar">Devino voluntar în acest departament</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
