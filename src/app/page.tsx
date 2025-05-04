"use client";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/component/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const plans = [
    {
      name: "Basic",
      price: "$99/mo",
      features: ["Up to 5 devices", "Basic support", "Standard security"],
    },
    {
      name: "Standard",
      price: "$199/mo",
      features: ["Up to 20 devices", "Priority support", "Advanced security"],
    },
    {
      name: "Premium",
      price: "$399/mo",
      features: ["Unlimited devices", "24/7 support", "Enterprise security"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-[#1E1E1E] rounded-lg overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-6 md:p-8"
          >
            {/* Hero Image and Text */}
            <div className="relative rounded-lg overflow-hidden mb-8">
              <div className="aspect-[16/9] relative">
                <Image
                  src="/image/_ (2).jpeg"
                  alt="Server Equipment"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-8 bg-black/40">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Network and Cloud Engineering Services
                </h1>
                <p className="text-base md:text-lg max-w-2xl">
                  We provide network and cloud engineering services to help you
                  build, secure, and scale your infrastructure.
                </p>
                <div className="mt-6 md:mt-8">
                  <Link
                    href="#"
                    className="bg-[#4ADE80] hover:bg-[#22c55e] text-black font-medium px-6 py-3 rounded-md inline-block transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>

            {/* Explore Services Button */}
            <div className="text-center mt-10 mb-10">
              <Link
                href="#"
                className="bg-[#4ADE80] hover:bg-[#22c55e] text-black font-medium px-6 py-3 rounded-md inline-block transition-colors"
              >
                Explore our services
              </Link>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              {/* Network Architecture and Design */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
                className="bg-[#1A1A1A] p-4 rounded-lg border border-gray-800"
              >
                <div className="aspect-square relative mb-4 bg-[#f5f5dc] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/RfEOrbbMwMU?si=6iiAKC9FhB-ill9Z"
                    title="Network Architecture and Design"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute inset-0 w-full h-full rounded-lg"
                  />
                </div>
                <h3 className="font-medium text-sm">
                  Network Architecture and Design
                </h3>
              </motion.div>

              {/* Cloud Infrastructure Security */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#1A1A1A] p-4 rounded-lg border border-gray-800"
              >
                <div className="aspect-square relative mb-4 bg-[#e6f0f3] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/3QhU9jd03a0"
                    title="Cloud Infrastructure Security"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-lg"
                  />
                </div>
                <h3 className="font-medium text-sm">
                  Cloud Infrastructure Security
                </h3>
              </motion.div>

              {/* Infrastructure Automation */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#1A1A1A] p-4 rounded-lg border border-gray-800"
              >
                <div className="aspect-square relative mb-4 bg-[#f0f0f0] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/bEA94yxbt-w?si=Aq00nlDJrqKA0OAr"
                    title="Cloud Infrastructure Security"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-lg"
                  />
                </div>
                <h3 className="font-medium text-sm">
                  Infrastructure Automation
                </h3>
              </motion.div>

              {/* Networking and Cloud Consulting */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-[#1A1A1A] p-4 rounded-lg border border-gray-800"
              >
                <div className="aspect-square relative mb-4 bg-[#f0f0f0] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/3hLmDS179YE"
                    title="Networking and Cloud Consulting"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-lg"
                  />
                </div>
                <h3 className="font-medium text-sm">
                  Networking and Cloud Consulting
                </h3>
              </motion.div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
              {/* Happy Customers */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800"
              >
                <p className="text-sm text-gray-400">100+</p>
                <h3 className="text-xl font-medium">Happy Customers</h3>
              </motion.div>

              {/* Years of Experience */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800"
              >
                <p className="text-sm text-gray-400">10+</p>
                <h3 className="text-xl font-medium">Years of Experience</h3>
              </motion.div>

              {/* Projects Completed */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800"
              >
                <p className="text-sm text-gray-400">500+</p>
                <h3 className="text-xl font-medium">Projects Completed</h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[#1A1A1A] rounded-xl border border-gray-800 p-8 text-center shadow-lg flex flex-col justify-between"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-[#4ADE80] mb-4">
                {plan.price}
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-gray-300">
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/2347077477604?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(
                  plan.name
                )}%20plan.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4ADE80] hover:bg-[#22c55e] text-black font-medium px-6 py-3 rounded-md inline-block transition-colors"
              >
                Pick Plan
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/2347077477604?text=Hi,%20I'm%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition"
        aria-label="Chat on WhatsApp"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <FaWhatsapp className="w-6 h-6 text-white" />
      </motion.a>

      <Footer />
    </div>
  );
}
