import { setRequestLocale } from 'next-intl/server';
import { Link } from "@/i18n/routing";
import { blogPosts } from "@/data/mock";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

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
                <h1 className="text-4xl font-heading font-bold text-gold mb-4">Blog</h1>
                <p className="text-xl text-gray-600">Noutăți, povești și resurse din comunitatea noastră.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow border-none shadow-md flex flex-col">
                        <div className="h-48 bg-gray-200 relative">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                Image Placeholder
                            </div>
                        </div>
                        <CardHeader>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-bold text-gold uppercase tracking-wider">{post.category}</span>
                                <div className="flex items-center text-xs text-gray-400">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    {post.date}
                                </div>
                            </div>
                            <CardTitle className="font-heading text-xl leading-tight">
                                <Link href={`/blog/${post.slug}`} className="hover:text-gold transition-colors">
                                    {post.title}
                                </Link>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <CardDescription className="line-clamp-3">
                                {post.excerpt}
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="link" className="p-0 text-gold">
                                <Link href={`/blog/${post.slug}`}>Citește mai mult <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
