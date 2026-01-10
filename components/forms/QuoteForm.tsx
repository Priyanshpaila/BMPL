"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, AlertCircle, Loader } from "lucide-react"
import { PRODUCTS } from "@/content/products"
import {Button} from  "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Card} from "@/components/ui/card"
import { submitQuoteFuture } from "@/lib/whatsapp"

interface FormData {
  name: string
  phone: string
  product: string
  quantity: string
  location: string
  notes: string
  consent: boolean
}

interface FormErrors {
  [key: string]: string
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
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.product) {
      newErrors.product = "Please select a product"
    }

    if (!formData.quantity.trim()) {
      newErrors.quantity = "Quantity is required"
    } else if (isNaN(Number.parseFloat(formData.quantity))) {
      newErrors.quantity = "Please enter a valid quantity"
    }

    if (!formData.location.trim()) {
      newErrors.location = "Delivery location is required"
    }

    if (formData.phone && !/^[0-9\s\-+]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number"
    }

    if (!formData.consent) {
      newErrors.consent = "Please agree to communication preferences"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name === "consent") {
      const isChecked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({
        ...prev,
        [name]: isChecked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      // Call the WhatsApp integration
      await submitQuoteFuture({
        name: formData.name,
        phone: formData.phone,
        product: formData.product,
        quantity: formData.quantity,
        location: formData.location,
        notes: formData.notes,
      })

      setSubmitted(true)
      setFormData({
        name: "",
        phone: "",
        product: "",
        quantity: "",
        location: "",
        notes: "",
        consent: true,
      })

      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Error submitting quote:", error)
    } finally {
      setLoading(false)
    }
  }

  const selectedProduct = PRODUCTS.find((p) => p.slug === formData.product)

  return (
    <div className="max-w-2xl mx-auto">
      {/* Success Message */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mb-6"
        >
          <Card className="bg-green-500/10 border-green-500/30">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-green-300 mb-1">Quote Request Sent!</h3>
                <p className="text-sm text-green-300/80">
                  Your quotation request has been sent via WhatsApp. Our team will respond shortly.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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
          transition={{ delay: 0.05 }}
        >
          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
        </motion.div>

        {/* Product */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-2"
        >
          <label htmlFor="product" className="text-sm font-medium text-slate-300">
            Product *
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border border-slate-600 text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed smooth-transition"
            required
          >
            <option value="">Select a product</option>
            {PRODUCTS.map((product) => (
              <option key={product.slug} value={product.slug}>
                {product.name} - {product.minQty}
              </option>
            ))}
          </select>
          {errors.product && <p className="text-sm text-red-400">{errors.product}</p>}
        </motion.div>

        {/* Product Details */}
        {selectedProduct && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card variant="default" className="bg-blue-500/5 border-blue-500/20">
              <p className="text-sm text-slate-300 mb-2">
                <span className="font-semibold text-slate-200">{selectedProduct.name}</span>
              </p>
              <p className="text-xs text-slate-400">{selectedProduct.description}</p>
              <p className="text-xs text-slate-500 mt-2">Min Order: {selectedProduct.minQty}</p>
            </Card>
          </motion.div>
        )}

        {/* Quantity */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
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

        {/* Delivery Location */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
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
          transition={{ delay: 0.25 }}
        >
          <Textarea
            label="Special Requirements (Optional)"
            name="notes"
            placeholder="Any specific requirements, custom sizes, or additional information..."
            value={formData.notes}
            onChange={handleChange}
          />
        </motion.div>

        {/* Consent */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-start gap-3"
        >
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-slate-600 bg-slate-800/50 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
          />
          <label htmlFor="consent" className="text-sm text-slate-300 cursor-pointer flex-1">
            I agree to be contacted via WhatsApp, phone, or email for quote follow-up and business communication
          </label>
        </motion.div>
        {errors.consent && <p className="text-sm text-red-400 -mt-2 ml-7">{errors.consent}</p>}

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <Button size="lg" className="w-full flex items-center justify-center gap-2" disabled={loading}>
            {loading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Request Quote"
            )}
          </Button>
        </motion.div>

        {/* Info Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg"
        >
          <div className="flex gap-2">
            <AlertCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-slate-400">
              Your quote request will be sent directly to our WhatsApp Business account. We'll respond within 24 hours.
            </p>
          </div>
        </motion.div>
      </form>
    </div>
  )
}
