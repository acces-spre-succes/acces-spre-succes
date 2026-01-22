import { setRequestLocale } from 'next-intl/server';
import VolunteerForm from "@/components/voluntariat/VolunteerForm";

export default async function Page({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="container py-20 px-4 md:px-6 max-w-2xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-heading font-bold text-gold mb-4">Devino Voluntar</h1>
                <p className="text-xl text-gray-600">Alătură-te echipei noastre și ajută-ne să schimbăm vieți.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <VolunteerForm />
            </div>
        </div>
    );
}
