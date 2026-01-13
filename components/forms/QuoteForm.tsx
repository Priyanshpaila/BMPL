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
import { submitQuoteFuture } from "@/lib/whatsapp";

interface FormData {
  name: string;
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
    if (!formData.product) newErrors.product = "Please select a product";

    if (!formData.quantity.trim()) {
      newErrors.quantity = "Quantity is required";
    } else if (isNaN(Number.parseFloat(formData.quantity))) {
      newErrors.quantity = "Please enter a valid quantity";
    }

    if (!formData.location.trim()) newErrors.location = "Delivery location is required";

    if (formData.phone) {
      const digits = formData.phone.replace(/\s/g, "");
      if (!/^[0-9\-+]{10,}$/.test(digits)) newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.consent) newErrors.consent = "Please agree to communication preferences";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
      await submitQuoteFuture({
        name: formData.name,
        phone: formData.phone,
        product: formData.product,
        quantity: formData.quantity,
        location: formData.location,
        notes: formData.notes,
      });

      setSubmitted(true);
      setFormData({
        name: "",
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
            <Card className="border border-emerald-500/30 bg-emerald-500/10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-300" />
                <div>
                  <h3 className="mb-1 font-semibold text-emerald-200">
                    Quote request sent
                  </h3>
                  <p className="text-sm text-emerald-200/80">
                    Your request was sent via WhatsApp. Our team will respond shortly.
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

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.03 }}
        >
          <Input
            label="Phone Number (optional)"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
        </motion.div>

        {/* Product Select (glass + matches theme) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
        >
          <Card
            variant="glass"
            className={`border-white/10 bg-white/[0.03] ${
              errors.product ? "ring-1 ring-red-500/30" : ""
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <label htmlFor="product" className="text-sm font-medium text-slate-300">
                Product *
              </label>

              {selectedProduct?.minQty ? (
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-200">
                  <Sparkles className="h-3.5 w-3.5 text-blue-300" />
                  Min: {selectedProduct.minQty}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs text-slate-500">
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
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-slate-50 outline-none smooth-transition focus:border-blue-400/40 focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="" className="bg-slate-900">
                  Select a product
                </option>
                {PRODUCTS.map((product) => (
                  <option key={product.slug} value={product.slug} className="bg-slate-900">
                    {product.name} — {product.minQty}
                  </option>
                ))}
              </select>

              {errors.product && <p className="mt-2 text-sm text-red-400">{errors.product}</p>}
            </div>

            {/* Product details block (consistent + pinned footer) */}
            {selectedProduct && (
              <div className="mt-5">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="mt-4 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-white/10">
                    <CheckCircle2 className="h-5 w-5 text-blue-300" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold text-slate-200">{selectedProduct.name}</span>
                    </p>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      Minimum order: <span className="text-slate-300">{selectedProduct.minQty}</span>
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

        {/* Consent (match theme + error) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
        >
          <Card
            variant="glass"
            className={`border-white/10 bg-white/[0.03] ${
              errors.consent ? "ring-1 ring-red-500/30" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="consent" className="text-sm text-slate-300 cursor-pointer flex-1">
                I agree to be contacted via WhatsApp, phone, or email for quote follow-up and business communication.
              </label>
            </div>
            {errors.consent && (
              <p className="mt-2 text-sm text-red-400">
                {errors.consent}
              </p>
            )}

            <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="mt-3 text-xs text-slate-500 text-center">
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

        {/* Info message (glass) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.24 }}
        >
          <Card
            variant="glass"
            className="border-white/10 bg-white/[0.03]"
          >
            <div className="flex gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-white/10">
                <AlertCircle className="h-4 w-4 text-blue-300" />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Your quote request will be sent directly to our WhatsApp Business account. We typically respond within 24 hours.
              </p>
            </div>
          </Card>
        </motion.div>
      </form>
    </div>
  );
}
