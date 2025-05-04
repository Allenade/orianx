"use client";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/component/Footer";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Global Financial Institution Network Upgrade",
      category: "Network Architecture",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Complete network infrastructure upgrade for a global financial institution with 200+ locations.",
    },
    {
      id: 2,
      title: "Healthcare Provider Cloud Migration",
      category: "Cloud Consulting",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Secure migration of sensitive healthcare data to a HIPAA-compliant cloud environment.",
    },
    {
      id: 3,
      title: "E-commerce Platform Security Enhancement",
      category: "Cloud Security",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Implementation of advanced security measures for a high-traffic e-commerce platform.",
    },
    {
      id: 4,
      title: "Manufacturing Company DevOps Transformation",
      category: "Infrastructure Automation",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Complete DevOps transformation reducing deployment time by 80% and improving reliability.",
    },
    {
      id: 5,
      title: "Government Agency Hybrid Cloud Implementation",
      category: "Cloud Consulting",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Design and implementation of a secure hybrid cloud solution for a government agency.",
    },
    {
      id: 6,
      title: "Telecommunications Provider Network Optimization",
      category: "Network Architecture",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Network optimization project resulting in 40% improved performance and reduced latency.",
    },
  ];

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
                Our Projects
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Explore our portfolio of successful projects where we've helped
                organizations transform their network and cloud infrastructure.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Project Gallery */}
        <section id="gallery" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
              Project Gallery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-[#1A1A1A] rounded-lg overflow-hidden border border-gray-800 transition-transform hover:scale-[1.02] duration-300"
                >
                  <div className="relative h-60">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block rounded-lg bg-[#4ADE80] bg-opacity-20 px-3 py-1 text-sm text-[#4ADE80] mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-[#4ADE80] hover:text-[#22c55e] font-medium transition-colors inline-flex items-center"
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-16 bg-[#1E1E1E]"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
              Featured Project
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=500&width=700"
                    alt="Featured Project"
                    width={700}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <div className="inline-block rounded-lg bg-[#4ADE80] bg-opacity-20 px-3 py-1 text-sm text-[#4ADE80] mb-4">
                  Case Study
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Global Financial Institution Network Upgrade
                </h3>
                <p className="text-gray-300 mb-6">
                  We helped a leading financial institution modernize their
                  entire network infrastructure across 200+ global locations,
                  improving security, reliability, and performance while
                  reducing operational costs by 30%.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-[#4ADE80]"></div>
                    <span>Complete network redesign and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-[#4ADE80]"></div>
                    <span>Advanced security measures implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-[#4ADE80]"></div>
                    <span>24/7 monitoring and management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-[#4ADE80]"></div>
                    <span>Seamless migration with zero downtime</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="bg-[#4ADE80] hover:bg-[#22c55e] text-black font-medium px-6 py-3 rounded-md inline-block transition-colors"
                >
                  Read Full Case Study
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-16"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Ready to start your project?
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
