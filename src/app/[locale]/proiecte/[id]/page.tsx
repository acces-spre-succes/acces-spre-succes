import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { projects } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";

export default async function Page({
    params
}: {
    params: Promise<{ locale: string; id: string }>;
}) {
    const { locale, id } = await params;
    setRequestLocale(locale);

    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen pb-20">
            {/* Hero */}
            <div className="h-[400px] bg-gray-900 relative flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="container relative z-20 px-4 text-center">
                    <div className="text-gold font-bold uppercase tracking-widest mb-4">{project.category}</div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">{project.title}</h1>
                </div>
            </div>

            <div className="container px-4 md:px-6 -mt-20 relative z-30">
                <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                    <div className="flex flex-wrap gap-6 mb-8 text-gray-500 text-sm border-b pb-8">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>Ianuarie 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>București</span>
                        </div>
                    </div>

                    <div className="prose max-w-none mb-12">
                        <p className="text-lg leading-relaxed text-gray-700">
                            {project.description}
                        </p>
                        <p className="text-gray-600 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <h3 className="text-2xl font-bold mt-8 mb-4">Obiective</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Obiectiv 1: Lorem ipsum dolor sit amet</li>
                            <li>Obiectiv 2: Consectetur adipiscing elit</li>
                            <li>Obiectiv 3: Sed do eiusmod tempor</li>
                        </ul>
                    </div>

                    <div className="flex justify-between items-center border-t pt-8">
                        <Button asChild variant="outline">
                            <Link href="/proiecte"><ArrowLeft className="mr-2 h-4 w-4" /> Înapoi la proiecte</Link>
                        </Button>
                        <Button asChild className="bg-gold text-white hover:bg-gold/90">
                            <Link href="/doneaza/anaf">Susține acest proiect</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
