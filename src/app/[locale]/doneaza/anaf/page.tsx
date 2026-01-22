import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, ShieldCheck } from "lucide-react";

export default async function Page({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Donation.anaf' });

    return (
        <div className="container py-20 px-4 md:px-6 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-heading font-bold text-gold mb-4">{t('title')}</h1>
                <p className="text-xl text-gray-600">{t('subtitle')}</p>
            </div>

            <Card className="mb-12 border-gold/20 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-heading text-center">{t('steps_title')}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-3 text-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-xl">1</div>
                        <p className="font-medium">{t('step1')}</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-xl">2</div>
                        <p className="font-medium">{t('step2')}</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-xl">3</div>
                        <p className="font-medium">{t('step3')}</p>
                    </div>
                </CardContent>
            </Card>

            <div className="text-center space-y-8">
                <Button asChild size="lg" className="bg-gold text-white hover:bg-gold/90 text-lg px-8 py-6 h-auto">
                    <a href="https://formular230.ro/asociatia-acces-spre-succes" target="_blank" rel="noopener noreferrer">
                        {t('cta')} <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <ShieldCheck className="h-4 w-4 text-green-600" />
                    <span>{t('trust')}</span>
                </div>
            </div>
        </div>
    );
}
