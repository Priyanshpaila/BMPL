"use client";

import type React from "react";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { PRODUCTS } from "@/content/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { submitQuoteAndNotify } from "@/lib/whatsapp";

interface FormData {
  name: string;
  email: string; // ✅ added (required)
  phone: string;
  product: string; // slug
  quantity: string;
  location: string;
  notes: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "", // ✅ added
    phone: "",
    product: "",
    quantity: "",
    location: "",
    notes: "",
    consent: true,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectedProduct = useMemo(
    () => PRODUCTS.find((p) => p.slug === formData.product),
    [formData.product]
  );

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    // ✅ Email required + basic validation
    const email = (formData.email || "").trim().toLowerCase();
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.product) newErrors.product = "Please select a product";

    if (!formData.quantity.trim()) {
      newErrors.quantity = "Quantity is required";
    } else if (Number.isNaN(Number.parseFloat(formData.quantity))) {
      newErrors.quantity = "Please enter a valid quantity";
    }

    if (!formData.location.trim())
      newErrors.location = "Delivery location is required";

    if (formData.phone) {
      const digits = formData.phone.replace(/\s/g, "");
      if (!/^[0-9\-+]{10,}$/.test(digits))
        newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.consent)
      newErrors.consent = "Please agree to communication preferences";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "consent") {
      const isChecked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: isChecked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await submitQuoteAndNotify({
        name: formData.name,
        email: formData.email, // ✅ added
        phone: formData.phone,
        product: formData.product,
        quantity: formData.quantity,
        location: formData.location,
        notes: formData.notes,
        consent: formData.consent,
      });

      setSubmitted(true);
      setFormData({
        name: "",
        email: "", // ✅ added reset
        phone: "",
        product: "",
        quantity: "",
        location: "",
        notes: "",
        consent: true,
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting quote:", error);
    } finally {
      setLoading(false);
    }
  };

  const glass =
    "border-border/60 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/40 shadow-sm";
  const divider =
    "h-px w-full bg-gradient-to-r from-transparent via-border/60 to-transparent";

  return (
    <div className="max-w-2xl mx-auto">
      {/* Success */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            className="mb-6"
          >
            <Card
              className={[
                "border border-emerald-500/30 bg-emerald-500/10",
                "text-foreground",
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-600 dark:text-emerald-300" />
                <div>
                  <h3 className="mb-1 font-semibold text-emerald-800 dark:text-emerald-200">
                    Quote request sent
                  </h3>
                  <p className="text-sm text-emerald-800/80 dark:text-emerald-200/80">
                    Your request was sent via WhatsApp. Our team will respond
                    shortly.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Input
            label="Your Name *"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            required
          />
        </motion.div>

        {/* Email ✅ */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.02 }}
        >
          <Input
            label="Email Address *"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.03 }}
        >
          <Input
            label="Phone Number *"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />
        </motion.div>

        {/* Product Select */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
        >
          <Card
            variant="glass"
            className={[
              glass,
              errors.product ? "ring-1 ring-destructive/30" : "",
            ].join(" ")}
          >
            <div className="flex items-center justify-between gap-3">
              <label
                htmlFor="product"
                className="text-sm font-medium text-foreground"
              >
                Product *
              </label>

              {selectedProduct?.minQty ? (
                <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/40 px-2.5 py-1 text-[11px] text-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-blue-700 dark:text-blue-300" />
                  Min: {selectedProduct.minQty}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  Select one <ChevronDown className="h-4 w-4" />
                </span>
              )}
            </div>

            <div className="mt-3">
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
                className={[
                  "w-full rounded-2xl border px-4 py-3 outline-none smooth-transition",
                  "bg-background text-foreground border-border/60",
                  "focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20",
                ].join(" ")}
              >
                <option value="">Select a product</option>
                {PRODUCTS.map((product) => (
                  <option key={product.slug} value={product.slug}>
                    {product.name} — {product.minQty}
                  </option>
                ))}
              </select>

              {errors.product && (
                <p className="mt-2 text-sm text-destructive">
                  {errors.product}
                </p>
              )}
            </div>

            {/* Product details */}
            {selectedProduct && (
              <div className="mt-5">
                <div className={divider} />

                <div className="mt-4 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-border/60 dark:ring-white/10">
                    <CheckCircle2 className="h-5 w-5 text-blue-700 dark:text-blue-300" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">
                        {selectedProduct.name}
                      </span>
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {selectedProduct.description}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Minimum order:{" "}
                      <span className="text-foreground">
                        {selectedProduct.minQty}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </motion.div>

        {/* Quantity */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.09 }}
        >
          <Input
            label="Quantity *"
            name="quantity"
            type="text"
            placeholder="e.g., 10 MT"
            value={formData.quantity}
            onChange={handleChange}
            error={errors.quantity}
            required
          />
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
        >
          <Input
            label="Delivery Location *"
            name="location"
            type="text"
            placeholder="City, State"
            value={formData.location}
            onChange={handleChange}
            error={errors.location}
            required
          />
        </motion.div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <Textarea
            label="Special Requirements (optional)"
            name="notes"
            placeholder="Custom sizes, grade, packaging, inspection needs, target dispatch date..."
            value={formData.notes}
            onChange={handleChange}
          />
        </motion.div>

        {/* Consent */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
        >
          <Card
            variant="glass"
            className={[
              glass,
              errors.consent ? "ring-1 ring-destructive/30" : "",
            ].join(" ")}
          >
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className={[
                  "mt-1 h-4 w-4 rounded border",
                  "border-border/60 bg-background",
                  "text-blue-600 focus:ring-2 focus:ring-blue-500/20 cursor-pointer",
                ].join(" ")}
              />
              <label
                htmlFor="consent"
                className="text-sm text-foreground cursor-pointer flex-1"
              >
                I agree to be contacted via WhatsApp, phone, or email for quote
                follow-up and business communication.
              </label>
            </div>

            {errors.consent && (
              <p className="mt-2 text-sm text-destructive">{errors.consent}</p>
            )}

            <div className={`mt-5 ${divider}`} />
            <p className="mt-3 text-xs text-muted-foreground text-center">
              We respect your privacy. No spam—only quote-related communication.
            </p>
          </Card>
        </motion.div>

        {/* Submit */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.21 }}
        >
          <Button
            size="lg"
            className="w-full rounded-2xl flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Request Quote"
            )}
          </Button>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.24 }}
        >
          <Card variant="glass" className={glass}>
            <div className="flex gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-border/60 dark:ring-white/10">
                <AlertCircle className="h-4 w-4 text-blue-700 dark:text-blue-300" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your quote request will be sent directly to our WhatsApp Business
                account, and you’ll receive a confirmation email. We typically
                respond within 24 hours.
              </p>
            </div>
          </Card>
        </motion.div>
      </form>
    </div>
  );
}
