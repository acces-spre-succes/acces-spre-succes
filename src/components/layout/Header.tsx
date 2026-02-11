"use client";

import * as React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Header() {
    const t = useTranslations("Navigation");
    const [isOpen, setIsOpen] = React.useState(false);

    const navigation = [
        {
            title: t("departments"),
            items: [
                { title: t("marketing"), href: "/departamente/marketing" },
                { title: t("camps"), href: "/departamente/tabere" },
                { title: t("it"), href: "/departamente/it" },
                { title: t("media"), href: "/departamente/media" },
                { title: t("education"), href: "/departamente/educatie" },
            ],
        },
        {
            title: t("about"),
            items: [
                { title: t("mission"), href: "/despre-noi/misiune" },
                { title: t("team"), href: "/despre-noi/echipa" },
                { title: t("ambassadors"), href: "/despre-noi/ambasadori" },
                { title: t("media_appearances"), href: "/despre-noi/media" },
                { title: t("partners"), href: "/despre-noi/parteneri" },
            ],
        },
        {
            title: t("projects"),
            items: [
                { title: t("gala"), href: "/proiecte/gala" },
                { title: t("camps"), href: "/proiecte/tabere" },
                { title: t("showcase"), href: "/proiecte" },
            ],
        },
        {
            title: t("volunteer"),
            items: [
                { title: t("become_volunteer"), href: "/voluntariat/devino-voluntar" },
                { title: t("volunteer_portrait"), href: "/voluntariat/portret" },
                { title: t("faq"), href: "/voluntariat/faq" },
            ],
        },
        {
            title: t("donate"),
            items: [
                { title: t("anaf"), href: "/doneaza/anaf" },
                { title: t("sponsorship"), href: "/doneaza/sponsorizare" },
            ],
        },
        {
            title: t("blog"),
            items: [
                { title: t("facts"), href: "/blog/fapte" },
                { title: t("events"), href: "/blog/evenimente" },
                { title: t("news"), href: "/blog/noutati" },
                { title: t("resources"), href: "/blog/resurse" },
            ],
        },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between mx-auto px-4">
                <Link href="/" className="flex items-center space-x-2 font-heading font-bold text-xl">
                    <Image src="/logo.png" alt="Acces spre Succes" width={150} height={40} className="h-10 w-auto" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:items-center lg:gap-6">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navigation.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {item.items.map((subItem) => (
                                                <ListItem key={subItem.title} title={subItem.title} href={subItem.href}>
                                                    {/* Description could go here if needed */}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ))}
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/contact" className={navigationMenuTriggerStyle()}>
                                        {t("contact")}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <LanguageSwitcher />
                </div>

                {/* Mobile Navigation */}
                <div className="flex items-center gap-4 lg:hidden">
                    <LanguageSwitcher />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col gap-4 mt-8">
                                {navigation.map((item) => (
                                    <div key={item.title} className="flex flex-col gap-2">
                                        <h4 className="font-medium text-muted-foreground">{item.title}</h4>
                                        {item.items.map((subItem) => (
                                            <Link
                                                key={subItem.title}
                                                href={subItem.href}
                                                className="text-sm hover:text-gold transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {subItem.title}
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                                <Link
                                    href="/contact"
                                    className="font-medium hover:text-gold transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t("contact")}
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref as any}
                    href={props.href as string}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
