import { setRequestLocale } from 'next-intl/server';
import ContactForm from "@/components/contact/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default async function Page({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="container py-20 px-4 md:px-6">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-heading font-bold text-gold mb-4">Contactează-ne</h1>
                <p className="text-xl text-gray-600">Suntem aici pentru a răspunde întrebărilor tale.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div>
                    <h2 className="text-2xl font-bold mb-8">Informații de contact</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-gold/10 p-3 rounded-full">
                                <MapPin className="h-6 w-6 text-gold" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Adresă</h3>
                                <p className="text-gray-600">Bulevardul Republicii nr. 2, Bistrița 420074</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-gold/10 p-3 rounded-full">
                                <Mail className="h-6 w-6 text-gold" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Email</h3>
                                <p className="text-gray-600">admin@acces-spre-succes.ro</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-gold/10 p-3 rounded-full">
                                <Phone className="h-6 w-6 text-gold" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Telefon</h3>
                                <p className="text-gray-600">+40 741 963 166</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 h-64 bg-gray-200 rounded-xl overflow-hidden relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d169.63256389077148!2d24.497295356298213!3d47.13589500508219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sro!4v1768322026564!5m2!1sen!2sro"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6">Trimite-ne un mesaj</h2>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
