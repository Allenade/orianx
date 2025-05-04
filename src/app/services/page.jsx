"use client";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/component/Footer";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col">
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
                Our Services
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Empowering your business with secure, scalable, and innovative
                cloud and network engineering solutions.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Service 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#1A1A1A] p-8 rounded-xl border border-gray-800 text-center shadow-lg"
              >
                <div className="mb-4 flex justify-center">
                  <div className="aspect-[16/9] relative w-full">
                    <iframe
                      src="https://www.youtube.com/embed/pqJ8jz7lwns?si=qZu832aGaBE2Dtnl"
                      title="Network Architecture and Design"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Network Architecture & Design
                </h3>
                <p className="text-gray-400 mb-4">
                  We design and implement robust, scalable network
                  infrastructures tailored to your business needs, ensuring high
                  availability, security, and performance.
                </p>
              </motion.div>
              {/* Service 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#1A1A1A] p-8 rounded-xl border border-gray-800 text-center shadow-lg"
              >
                <div className="mb-4 flex justify-center">
                  <div className="aspect-[16/9] relative w-full">
                    <iframe
                      src="https://www.youtube.com/embed/3QhU9jd03a0"
                      title="Cloud Infrastructure Security"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Cloud Infrastructure Solutions
                </h3>
                <p className="text-gray-400 mb-4">
                  Our team helps you migrate, deploy, and manage cloud
                  environments on AWS, Azure, or Google Cloud, optimizing for
                  cost, security, and scalability.
                </p>
              </motion.div>
              {/* Service 3 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-[#1A1A1A] p-8 rounded-xl border border-gray-800 text-center shadow-lg"
              >
                <div className="mb-4 flex justify-center">
                  <div className="aspect-[16/9] relative w-full">
                    <iframe
                      src="https://www.youtube.com/embed/Ula3TG8QS7g?si=FqSBKJkzZsLGEQ8t"
                      title="Cybersecurity & Compliance"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Cybersecurity & Compliance
                </h3>
                <p className="text-gray-400 mb-4">
                  Protect your data and operations with our comprehensive
                  security solutions, including firewalls, intrusion detection,
                  and compliance with industry standards.
                </p>
              </motion.div>
              {/* Service 4 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#1A1A1A] p-8 rounded-xl border border-gray-800 text-center shadow-lg"
              >
                <div className="mb-4 flex justify-center">
                  <div className="aspect-[16/9] relative w-full">
                    <iframe
                      src="https://www.youtube.com/embed/3hLmDS179YE"
                      title="Networking and Cloud Consulting"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Networking and Cloud Consulting
                </h3>
                <p className="text-gray-400 mb-4">
                  Leverage our expertise for strategic planning, technology
                  assessments, and staff training to keep your team ahead of the
                  curve.
                </p>
              </motion.div>
              {/* Service 5 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-[#1A1A1A] p-8 rounded-xl border border-gray-800 text-center shadow-lg"
              >
                <div className="aspect-[16/9] relative w-full">
                  <iframe
                    src="https://www.youtube.com/embed/Epybba4FO5s?si=iiD0pyruca-vF5WE"
                    title="Networking and Cloud Consulting"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Managed IT Services
                </h3>
                <p className="text-gray-400 mb-4">
                  Focus on your core business while we monitor, maintain, and
                  support your IT infrastructure 24/7.
                </p>
              </motion.div>
              {/* Service 6 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-[#1A1A1A] p-8 rounded-xl border border-gray-800 text-center shadow-lg"
              >
                <div className="mb-4 flex justify-center">
                  <div className="aspect-[16/9] relative w-full">
                    <iframe
                      src="https://www.youtube.com/embed/RfEOrbbMwMU?si=6iiAKC9FhB-ill9Z"
                      title="Consulting & Training"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Consulting & Training
                </h3>
                <p className="text-gray-400 mb-4">
                  Leverage our expertise for strategic planning, technology
                  assessments, and staff training to keep your team ahead of the
                  curve.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#121212] rounded-xl p-8 mb-16 container mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <svg
                  className="h-8 w-8 text-[#4ADE80]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path d="M12 8v4l3 3" strokeWidth="2" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Certified Experts</h4>
              <p className="text-gray-400">
                Our engineers are certified in leading cloud and network
                technologies.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <svg
                  className="h-8 w-8 text-[#4ADE80]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="4"
                    strokeWidth="2"
                  />
                  <path d="M8 12h8" strokeWidth="2" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">24/7 Support</h4>
              <p className="text-gray-400">
                We provide round-the-clock monitoring and support for your peace
                of mind.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <svg
                  className="h-8 w-8 text-[#4ADE80]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path d="M8 12h8" strokeWidth="2" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Proven Track Record</h4>
              <p className="text-gray-400">
                Trusted by businesses across industries for reliable, secure
                solutions.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-16"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Ready to elevate your infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help you achieve your
              network and cloud infrastructure goals.
            </p>
            <Link
              href="/contact"
              className="bg-[#4ADE80] hover:bg-[#22c55e] text-black font-medium px-8 py-3 rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
