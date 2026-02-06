import { useState } from "react";
import { Mail, MapPin, CheckCircle } from "lucide-react";
import { Logo } from "@/components/ui";
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

function BlueprintGrid() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="contact-grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.05"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contact-grid)" />
    </svg>
  );
}

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
    "w-full rounded-none border bg-white/5 px-4 py-3 text-white placeholder:text-white/40 transition-colors focus:outline-none focus:border-white focus:ring-1 focus:ring-white/30";
  const inputErrorStyles = "border-red-400";
  const inputNormalStyles = "border-white/20";

  // Success state
  if (isSubmitted) {
    return (
      <section id="contact" className="relative bg-primary py-20 md:py-28">
        <BlueprintGrid />
        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6">
              <div className="flex justify-center">
                <Logo variant="white" size={28} />
              </div>
              <p className="mt-2 text-sm tracking-[0.03em] text-white/70">
                Your path, properly built
              </p>
            </div>
            <div className="mb-6 flex justify-center">
              <CheckCircle className="h-12 w-12 text-white/80" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl text-primary-foreground md:text-4xl">
              Message Sent!
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Thank you for reaching out. We'll get back to you as soon as
              possible.
            </p>
            <button
              className="mt-8 inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-medium tracking-[0.02em] text-navy transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              onClick={handleReset}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative bg-primary py-20 md:py-28">
      <BlueprintGrid />
      <div className="container relative">
        {/* Logo + Tagline */}
        <div className="mb-10">
          <Logo variant="white" size={28} />
          <p className="mt-2 text-sm tracking-[0.03em] text-white/70">
            Your path, properly built
          </p>
        </div>

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
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.05em] text-white/70"
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
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.05em] text-white/70"
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
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.05em] text-white/70"
                >
                  Company{" "}
                  <span className="normal-case tracking-normal text-white/40">
                    (optional)
                  </span>
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
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.05em] text-white/70"
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
                  <p className="mt-1.5 text-sm text-red-300">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={cn(
                  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-medium tracking-[0.02em] text-navy transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 w-full sm:w-auto",
                  isSubmitting && "pointer-events-none opacity-50"
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message →"}
              </button>
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

            <div className="mt-8 space-y-0">
              <a
                href="mailto:hello@capebridge.com.au"
                className="flex items-center gap-3 py-4 text-primary-foreground transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5 shrink-0 text-white/70" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-[0.05em] text-white/50">
                    Email
                  </p>
                  <p className="font-medium">hello@capebridge.com.au</p>
                </div>
              </a>

              <div className="h-px bg-white/10" />

              <div className="flex items-center gap-3 py-4 text-primary-foreground">
                <MapPin className="h-5 w-5 shrink-0 text-white/70" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-[0.05em] text-white/50">
                    Location
                  </p>
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
