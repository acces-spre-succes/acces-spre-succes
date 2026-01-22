"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Numele trebuie să aibă cel puțin 2 caractere.",
    }),
    email: z.string().email({
        message: "Introduceți o adresă de email validă.",
    }),
    subject: z.string().min(5, {
        message: "Subiectul trebuie să aibă cel puțin 5 caractere.",
    }),
    message: z.string().min(10, {
        message: "Mesajul trebuie să aibă cel puțin 10 caractere.",
    }),
});

export default function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast.success("Mesaj trimis cu succes!", {
            description: "Îți vom răspunde cât mai curând posibil.",
        });
        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nume</FormLabel>
                            <FormControl>
                                <Input placeholder="Numele tău" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="email@exemplu.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subiect</FormLabel>
                            <FormControl>
                                <Input placeholder="Subiectul mesajului" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mesaj</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Scrie mesajul tău aici..."
                                    className="resize-none min-h-[120px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="bg-gold text-white hover:bg-gold/90 w-full">Trimite Mesajul</Button>
            </form>
        </Form>
    );
}
