import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";

const pages: Record<string, { title: string; description: string }> = {
    misiune: { title: "Misiunea Noastră", description: "Valorile care ne ghidează." },
    echipa: { title: "Echipa", description: "Oamenii din spatele proiectului." },
    ambasadori: { title: "Ambasadori", description: "Cei care duc mesajul nostru mai departe." },
    media: { title: "Apariții Media", description: "Acces spre Succes în presă." },
    parteneri: { title: "Parteneri Strategici", description: "Companiile care ne susțin." },
};

export default async function Page({
    params
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    const page = pages[slug];

    if (!page) {
        notFound();
    }

    return (
        <div className="container py-20 px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
                <Button asChild variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-gold">
                    <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Înapoi la acasă</Link>
                </Button>

                <h1 className="text-4xl font-heading font-bold text-gold mb-6">{page.title}</h1>
                <p className="text-xl text-gray-600 mb-12">{page.description}</p>

                <div className="prose max-w-none">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    );
}
