"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects, impactStats, testimonials, partners } from "@/data/mock";
import { ArrowRight, Heart, Users, GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeContent() {
    const t = useTranslations("HomePage");

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center bg-white text-black overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-10" />
                {/* Placeholder for Hero Image - Optional or removed for clean look */}

                <div className="container relative z-20 px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center space-y-8"
                    >
                        <div className="flex justify-center mb-8">
                            <Image src="/logo.png" alt="Acces spre Succes" width={300} height={90} className="h-24 w-auto" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-black tracking-tight">
                            {t("hero.title")}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            {t("hero.subtitle")}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button asChild size="lg" className="bg-gold text-white hover:bg-gold/90 px-8 text-lg h-12">
                                <Link href="/voluntariat/devino-voluntar">{t("hero.cta_volunteer")}</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-black border-gray-300 hover:bg-gray-50 hover:text-black px-8 text-lg h-12">
                                <Link href="/doneaza/anaf">{t("hero.cta_donate")}</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>



            {/* Featured Projects */}
            <section className="py-20 bg-gray-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-heading font-bold mb-4">{t("projects.title")}</h2>
                            <div className="w-20 h-1 bg-gold" />
                        </div>
                        <Button asChild variant="link" className="text-gold hidden md:inline-flex">
                            <Link href="/proiecte">
                                {t("projects.view_all")} <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow border-none shadow-md">
                                <div className="h-48 bg-gray-200 relative">
                                    {/* Placeholder for project image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                        Image Placeholder
                                    </div>
                                </div>
                                <CardHeader>
                                    <div className="text-xs font-bold text-gold uppercase tracking-wider mb-2">{project.category}</div>
                                    <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="line-clamp-3">
                                        {project.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-gold">
                                        <Link href={`/proiecte/${project.id}`}>Detalii <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Button asChild variant="outline">
                            <Link href="/proiecte">{t("projects.view_all")}</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-black text-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-heading font-bold mb-12 text-center">{t("testimonials.title")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star} className="text-gold">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-700" />
                                    <div>
                                        <div className="font-bold">{testimonial.name}</div>
                                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="py-16 bg-white border-t">
                <div className="container px-4 md:px-6 text-center mx-auto">
                    <h3 className="text-xl font-bold text-gray-400 mb-8 uppercase tracking-widest">{t("partners.title")}</h3>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {partners.map((partner, index) => (
                            <div key={index} className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500 font-bold">
                                {partner.name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-gold/10">
                <div className="container px-4 md:px-6 max-w-2xl text-center mx-auto">
                    <h2 className="text-3xl font-heading font-bold mb-4">{t("newsletter.title")}</h2>
                    <p className="text-gray-600 mb-8">{t("newsletter.subtitle")}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder={t("newsletter.placeholder")}
                            className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                        <Button className="bg-gold text-white hover:bg-gold/90 px-8">
                            {t("newsletter.button")}
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
