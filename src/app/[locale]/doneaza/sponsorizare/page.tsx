import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Check } from "lucide-react";

export default async function Page({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Donation.sponsorship' });

    const benefits = [
        "Deducere fiscală de până la 20% din impozitul pe profit",
        "Vizibilitate în cadrul evenimentelor noastre",
        "Menționare pe site și social media",
        "Raportare transparentă a utilizării fondurilor",
        "Oportunități de voluntariat corporate pentru angajați"
    ];

    return (
        <div className="container py-20 px-4 md:px-6 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-heading font-bold text-gold mb-4">{t('title')}</h1>
                <p className="text-xl text-gray-600">{t('subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h2 className="text-2xl font-bold mb-6">{t('benefits')}</h2>
                    <ul className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="mt-1 bg-gold/10 p-1 rounded-full">
                                    <Check className="h-4 w-4 text-gold" />
                                </div>
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                    <h3 className="text-xl font-bold mb-4">Vrei să devii partener?</h3>
                    <p className="text-gray-600 mb-6">
                        Contactează-ne pentru a discuta despre cum putem colabora pentru un viitor mai bun.
                    </p>
                    <Button asChild size="lg" className="bg-gold text-white hover:bg-gold/90 w-full">
                        <a href="mailto:admin@acces-spre-succes.ro">
                            <Mail className="mr-2 h-5 w-5" /> {t('cta')}
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
