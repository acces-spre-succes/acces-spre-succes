import { setRequestLocale } from 'next-intl/server';
import ProjectShowcase from "@/components/projects/ProjectShowcase";

export default async function Page({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="container py-20 px-4 md:px-6">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-heading font-bold text-gold mb-4">Proiectele Noastre</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Descoperă inițiativele prin care aducem schimbarea în comunitate.
                </p>
            </div>

            <ProjectShowcase />
        </div>
    );
}
