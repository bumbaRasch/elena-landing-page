"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useTranslation } from "@/hooks/use-translation"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react"
import { toast } from "sonner"

export function ContactSection() {
  const { t } = useTranslation()

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t.contact.form.validation.nameMin,
    }),
    email: z.string().email({
      message: t.contact.form.validation.emailInvalid,
    }),
    phone: z.string().optional(),
    subject: z.string().min(1, {
      message: t.contact.form.validation.subjectRequired,
    }),
    message: z.string().min(10, {
      message: t.contact.form.validation.messageMin,
    }),
    privacy: z.boolean().refine((val) => val === true, {
      message: t.contact.form.validation.privacyRequired,
    }),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      privacy: false,
    },
  })

  function onSubmit(_values: z.infer<typeof formSchema>) {
    toast.success(t.contact.form.success)
    form.reset()
  }
  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Contact Info */}
          <div className="space-y-6" data-aos="fade-right">
            <Card>
              <CardHeader>
                <CardTitle className="dark:text-gray-100">{t.contact.contactMe}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{t.contact.info.phone}</p>
                    <p className="text-gray-600 dark:text-gray-300">+49 (111) 123-45-67</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{t.contact.info.email}</p>
                    <p className="text-gray-600 dark:text-gray-300">max.mustermann@example.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{t.contact.info.location}</p>
                    <p className="text-gray-600 dark:text-gray-300">{t.contact.info.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Networks */}
            <Card>
              <CardHeader>
                <CardTitle className="dark:text-gray-100">{t.contact.social}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-3">
                  <Button variant="outline" size="icon" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                    <MessageCircle className="h-4 w-4" />
                    <span className="sr-only">Telegram</span>
                  </Button>
                  <Button variant="outline" size="icon" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                    <Phone className="h-4 w-4" />
                    <span className="sr-only">WhatsApp</span>
                  </Button>
                  <Button variant="outline" size="icon" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Contact Form */}
          <Card data-aos="fade-left">
            <CardHeader>
              <CardTitle className="dark:text-gray-100">{t.contact.form.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.name} <span className="text-red-500">{t.contact.form.required}</span></FormLabel>
                        <FormControl>
                          <Input placeholder={t.contact.form.name} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.email} <span className="text-red-500">{t.contact.form.required}</span></FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.phone} <span className="text-gray-400 text-sm">{t.contact.form.phoneOptional}</span></FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+49 (___) ___-__-__" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Subject */}
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.subject} <span className="text-red-500">{t.contact.form.required}</span></FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder={t.contact.form.subjectPlaceholder} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="piano">{t.contact.form.subjectOptions.piano}</SelectItem>
                            <SelectItem value="guitar">{t.contact.form.subjectOptions.guitar}</SelectItem>
                            <SelectItem value="vocal">{t.contact.form.subjectOptions.vocal}</SelectItem>
                            <SelectItem value="other">{t.contact.form.subjectOptions.other}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.message} <span className="text-red-500">{t.contact.form.required}</span></FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t.contact.form.placeholder}
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Privacy Consent */}
                  <FormField
                    control={form.control}
                    name="privacy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm">
                            {t.contact.form.privacy.consent}{" "}
                            <a
                              href="/privacy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
                            >
                              {t.contact.form.privacy.policyLink}
                            </a>
                            {t.contact.form.privacy.agreement}{" "}
                            <span className="text-red-500">{t.contact.form.required}</span>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900">
                    <Send className="w-4 h-4 mr-2" />
                    {t.contact.form.send}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}