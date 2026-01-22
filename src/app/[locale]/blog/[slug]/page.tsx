import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { blogPosts } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";

export default async function Page({
    params
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen pb-20">
            <div className="h-[400px] bg-gray-900 relative flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="container relative z-20 px-4 text-center max-w-4xl">
                    <div className="text-gold font-bold uppercase tracking-widest mb-4">{post.category}</div>
                    <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">{post.title}</h1>
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>

            <div className="container px-4 md:px-6 -mt-20 relative z-30">
                <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto">
                    <div className="prose prose-lg max-w-none mb-12">
                        <p className="lead text-xl text-gray-600 mb-8 font-medium">
                            {post.excerpt}
                        </p>
                        <p>
                            {post.content}
                        </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <h2>Subtitlu articol</h2>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                    </div>

                    <div className="flex justify-between items-center border-t pt-8">
                        <Button asChild variant="ghost">
                            <Link href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Înapoi la blog</Link>
                        </Button>
                        <Button variant="outline" size="icon">
                            <Share2 className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
