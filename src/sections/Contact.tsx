import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      // Log the form data (backend integration later)
      console.log("Form submitted:", formData);

      // Simulate submission delay
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 500);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
  };

  const inputBaseStyles =
    "w-full rounded-lg border bg-white/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50";
  const inputErrorStyles = "border-red-400";
  const inputNormalStyles = "border-white/20";

  // Success state
  if (isSubmitted) {
    return (
      <section id="contact" className="bg-primary py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-3xl text-primary-foreground md:text-4xl">
              Message Sent!
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Thank you for reaching out. We'll get back to you as soon as
              possible.
            </p>
            <Button
              variant="outline"
              className="mt-8 border-white/30 bg-transparent text-primary-foreground hover:bg-white/10"
              onClick={handleReset}
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-primary py-20 md:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form Column */}
          <div>
            <h2 className="text-3xl text-primary-foreground md:text-4xl">
              Send Us a Message
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-primary-foreground"
                >
                  Name <span className="text-red-300">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={cn(
                    inputBaseStyles,
                    errors.name ? inputErrorStyles : inputNormalStyles
                  )}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-300">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-primary-foreground"
                >
                  Email <span className="text-red-300">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={cn(
                    inputBaseStyles,
                    errors.email ? inputErrorStyles : inputNormalStyles
                  )}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-red-300">{errors.email}</p>
                )}
              </div>

              {/* Company Field (Optional) */}
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-primary-foreground"
                >
                  Company{" "}
                  <span className="text-primary-foreground/50">(optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className={cn(inputBaseStyles, inputNormalStyles)}
                  disabled={isSubmitting}
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-primary-foreground"
                >
                  Message <span className="text-red-300">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or question..."
                  rows={5}
                  className={cn(
                    inputBaseStyles,
                    "resize-none",
                    errors.message ? inputErrorStyles : inputNormalStyles
                  )}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="mt-1.5 text-sm text-red-300">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Info Column */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-primary-foreground">
              Get in Touch
            </h3>
            <p className="mt-4 text-primary-foreground/80">
              Ready to transform your business with data and AI? We'd love to
              hear from you. Reach out directly or use the form.
            </p>

            <div className="mt-8 space-y-6">
              <a
                href="mailto:hello@capebridge.com.au"
                className="flex items-center gap-4 text-primary-foreground transition-colors hover:text-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Email</p>
                  <p className="font-medium">hello@capebridge.com.au</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-primary-foreground">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Location</p>
                  <p className="font-medium">Based in Australia</p>
                </div>
              </div>
            </div>

            <p className="mt-10 text-sm text-primary-foreground/60">
              We work with clients globally, across all timezones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
