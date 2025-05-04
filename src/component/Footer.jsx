import Link from "next/link";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-bold">Orianx</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Providing network and cloud engineering services to help you
              build, secure, and scale your infrastructure.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#4ADE80] transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#4ADE80] transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#4ADE80] transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#network"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Network Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/services#security"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services#automation"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Infrastructure Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#consulting"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cloud Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-[#4ADE80] flex-shrink-0 mt-0.5"
                />
                <span className="text-gray-400">
                  123 Cloud Street, Tech City, TC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[#4ADE80] flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[#4ADE80] flex-shrink-0" />
                <span className="text-gray-400">info@cloudcore.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} CloudCore. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
