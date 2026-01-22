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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Numele trebuie să aibă cel puțin 2 caractere.",
    }),
    email: z.string().email({
        message: "Introduceți o adresă de email validă.",
    }),
    phone: z.string().optional(),
    department: z.string().min(1, {
        message: "Vă rugăm să selectați un departament.",
    }),
    message: z.string().min(10, {
        message: "Mesajul trebuie să aibă cel puțin 10 caractere.",
    }),
});

export default function VolunteerForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Simulate API call
        console.log(values);
        toast.success("Formular trimis cu succes!", {
            description: "Te vom contacta în curând.",
        });
        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nume și Prenume</FormLabel>
                            <FormControl>
                                <Input placeholder="Ion Popescu" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="ion@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Telefon (Opțional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="07xx xxx xxx" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Departament de interes</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selectează un departament" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="marketing">Marketing</SelectItem>
                                    <SelectItem value="tabere">Tabere</SelectItem>
                                    <SelectItem value="it">Web Development / IT</SelectItem>
                                    <SelectItem value="media">Fotografie & Media</SelectItem>
                                    <SelectItem value="educatie">Educație</SelectItem>
                                    <SelectItem value="general">Voluntariat General</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>De ce vrei să fii voluntar?</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Spune-ne câteva cuvinte despre tine și motivația ta..."
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="bg-gold text-white hover:bg-gold/90 w-full md:w-auto">Trimite formularul</Button>
            </form>
        </Form>
    );
}
