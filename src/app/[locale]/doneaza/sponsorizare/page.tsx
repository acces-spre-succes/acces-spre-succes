import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Mail, Check, ShieldCheck, FileText, Send, Heart, Users, BookOpen, TrendingUp } from "lucide-react";

export default async function Page({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Donation.sponsorship' });

    const whyItems = [
        { icon: BookOpen, text: t('why_items.item1') },
        { icon: Users, text: t('why_items.item2') },
        { icon: Heart, text: t('why_items.item3') },
        { icon: TrendingUp, text: t('why_items.item4') },
    ];

    const benefits = [
        t('benefit1'),
        t('benefit2'),
        t('benefit3'),
        t('benefit4'),
        t('benefit5'),
    ];

    const steps = [
        {
            number: 1,
            title: t('step1_title'),
            description: t('step1_description'),
            icon: Download,
        },
        {
            number: 2,
            title: t('step2_title'),
            description: t('step2_description'),
            icon: FileText,
        },
        {
            number: 3,
            title: t('step3_title'),
            description: t('step3_description'),
            icon: Send,
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gold/10 via-white to-gold/5 py-20">
                <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-gold mb-6">
                        {t('title')}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>
            </section>

            <div className="container px-4 md:px-6 max-w-5xl mx-auto py-16 space-y-20">
                {/* Why Sponsor Us Section */}
                <section>
                    <h2 className="text-3xl font-heading font-bold text-center mb-4">
                        {t('why_title')}
                    </h2>
                    <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
                        {t('why_description')}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {whyItems.map((item, index) => (
                            <Card key={index} className="border-gold/10 hover:border-gold/30 transition-colors">
                                <CardContent className="flex items-start gap-4 p-6">
                                    <div className="bg-gold/10 p-3 rounded-full shrink-0">
                                        <item.icon className="h-6 w-6 text-gold" />
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{item.text}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Steps Section */}
                <section>
                    <h2 className="text-3xl font-heading font-bold text-center mb-10">
                        {t('steps_title')}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step) => (
                            <div key={step.number} className="flex flex-col items-center text-center gap-4">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                                        <step.icon className="h-7 w-7 text-gold" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-white flex items-center justify-center text-sm font-bold">
                                        {step.number}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Download & Send Section */}
                <section>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Download Contract Card */}
                        <Card className="border-gold/20 shadow-lg">
                            <CardHeader className="text-center pb-4">
                                <div className="mx-auto bg-gold/10 p-4 rounded-full w-fit mb-2">
                                    <Download className="h-8 w-8 text-gold" />
                                </div>
                                <CardTitle className="text-xl font-heading">
                                    {t('step1_title')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center space-y-4">
                                <p className="text-gray-600">{t('step1_description')}</p>
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gold text-white hover:bg-gold/90 w-full text-base"
                                >
                                    <a href="/Contract_Sponsorizare_Acces_Spre_Succes_2026.pdf" download>
                                        <Download className="mr-2 h-5 w-5" />
                                        {t('download_contract')}
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Send Contract Card */}
                        <Card className="border-gold/20 shadow-lg">
                            <CardHeader className="text-center pb-4">
                                <div className="mx-auto bg-gold/10 p-4 rounded-full w-fit mb-2">
                                    <Mail className="h-8 w-8 text-gold" />
                                </div>
                                <CardTitle className="text-xl font-heading">
                                    {t('send_contract')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center space-y-4">
                                <p className="text-gray-600">{t('send_info')}</p>
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gold text-white hover:bg-gold/90 w-full text-base"
                                >
                                    <a href="mailto:admin@acces-spre-succes.ro">
                                        <Mail className="mr-2 h-5 w-5" />
                                        admin@acces-spre-succes.ro
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Benefits Section */}
                <section>
                    <h2 className="text-3xl font-heading font-bold text-center mb-10">
                        {t('benefits_title')}
                    </h2>
                    <div className="max-w-2xl mx-auto">
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                                    <div className="mt-0.5 bg-gold/10 p-1.5 rounded-full shrink-0">
                                        <Check className="h-4 w-4 text-gold" />
                                    </div>
                                    <span className="text-gray-700">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Fiscal Details Section */}
                <section>
                    <Card className="bg-gray-50 border-gray-200">
                        <CardHeader>
                            <CardTitle className="text-2xl font-heading text-center">
                                {t('fiscal_title')}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                                {t('fiscal_description')}
                            </p>
                            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                                {t('how_description')}
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pb-8">
                    <ShieldCheck className="h-4 w-4 text-green-600" />
                    <span>{t('trust')}</span>
                </div>
            </div>
        </div>
    );
}
