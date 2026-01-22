"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="bg-black text-white py-12">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto px-4">
                <div className="space-y-4">
                    <Link href="/" className="flex items-center space-x-2 font-heading font-bold text-xl">
                        <span className="text-gold">Acces</span>
                        <span>spre Succes</span>
                    </Link>
                    <p className="text-gray-400 text-sm">
                        {t("description")}
                    </p>
                </div>

                <div>
                    <h3 className="font-heading font-bold text-lg mb-4">{t("quick_links")}</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="/despre-noi/misiune" className="hover:text-gold transition-colors">{t("about") || "Despre Noi"}</Link></li>
                        <li><Link href="/proiecte" className="hover:text-gold transition-colors">{t("projects") || "Proiecte"}</Link></li>
                        <li><Link href="/voluntariat/devino-voluntar" className="hover:text-gold transition-colors">{t("volunteer") || "Voluntariat"}</Link></li>
                        <li><Link href="/blog" className="hover:text-gold transition-colors">{t("blog") || "Blog"}</Link></li>
                        <li><Link href="/contact" className="hover:text-gold transition-colors">{t("contact") || "Contact"}</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-heading font-bold text-lg mb-4">{t("legal")}</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="/politica-de-confidentialitate" className="hover:text-gold transition-colors">{t("privacy")}</Link></li>
                        <li><Link href="/cookies" className="hover:text-gold transition-colors">{t("cookies")}</Link></li>
                        <li><Link href="/termeni" className="hover:text-gold transition-colors">{t("terms")}</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-heading font-bold text-lg mb-4">{t("contact")}</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-gold" />
                            <a href="mailto:admin@acces-spre-succes.ro" className="hover:text-gold transition-colors">admin@acces-spre-succes.ro</a>
                        </li>
                        <li className="flex gap-4 mt-4">
                            <a href="https://www.facebook.com/profile.php?id=61583332327364" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="https://www.instagram.com/acces.spre.succes/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><Instagram className="h-5 w-5" /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 mx-auto px-4">
                &copy; {new Date().getFullYear()} {t("copyright")}
            </div>
        </footer>
    );
}
