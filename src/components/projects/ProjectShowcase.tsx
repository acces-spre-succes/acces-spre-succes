"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/mock";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Toate", "Tabere", "Educație", "Evenimente", "Media"];

export default function ProjectShowcase() {
    const [filter, setFilter] = useState("Toate");

    const filteredProjects = projects.filter(
        (project) => filter === "Toate" || project.category === filter
    );

    return (
        <div className="space-y-8">
            <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((cat) => (
                    <Button
                        key={cat}
                        variant={filter === cat ? "default" : "outline"}
                        onClick={() => setFilter(cat)}
                        className={filter === cat ? "bg-gold text-white hover:bg-gold/90" : ""}
                    >
                        {cat}
                    </Button>
                ))}
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                                <div className="h-48 bg-gray-200 relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                        Image Placeholder
                                    </div>
                                </div>
                                <CardHeader>
                                    <div className="text-xs font-bold text-gold uppercase tracking-wider mb-2">{project.category}</div>
                                    <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
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
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
