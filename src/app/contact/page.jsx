"use client";
import { Navbar } from "@/component/Navbar";
import { Footer } from "@/component/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#1E1E1E] py-16"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Have questions or ready to start your project? Get in touch with
                our team of experts.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-gray-800"
              >
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="network">
                        Network Architecture and Design
                      </option>
                      <option value="security">
                        Cloud Infrastructure Security
                      </option>
                      <option value="automation">
                        Infrastructure Automation
                      </option>
                      <option value="consulting">
                        Networking and Cloud Consulting
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#4ADE80] hover:bg-[#22c55e] text-black font-medium px-6 py-3 rounded-md transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-8">
                  Our team is here to help. Contact us through any of the
                  following methods or fill out the form, and we'll get back to
                  you as soon as possible.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start space-x-4">
                    <MapPin
                      size={24}
                      className="text-[#4ADE80] flex-shrink-0 mt-1"
                    />
                    <div>
                      <h3 className="font-medium mb-1">Our Location</h3>
                      <p className="text-gray-400">
                        123 Cloud Street, Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone
                      size={24}
                      className="text-[#4ADE80] flex-shrink-0 mt-1"
                    />
                    <div>
                      <h3 className="font-medium mb-1">Phone Number</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail
                      size={24}
                      className="text-[#4ADE80] flex-shrink-0 mt-1"
                    />
                    <div>
                      <h3 className="font-medium mb-1">Email Address</h3>
                      <p className="text-gray-400">info@cloudcore.com</p>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800"
                >
                  <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-400">Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-[#1E1E1E]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Find Us</h2>
            <div className="h-96 bg-[#252525] rounded-lg flex items-center justify-center">
              <p className="text-gray-400">
                Map placeholder - Google Maps would be embedded here
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
