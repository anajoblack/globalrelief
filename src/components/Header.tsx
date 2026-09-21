"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "The Leadership", href: "/our-team" },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Construction & Logistics",
    href: "/purple-petals-construction-transport-and-logistics-llc",
  },
  {
    label: "Warehouse & Storage Management",
    href: "/warehouse-storage-management",
  },
  { label: "DEEP DREAM", href: "/deep-dream" },
  { label: "BRAVE HEART", href: "/brave-heart" },
];

export default function Header() {
  const pathname = usePathname() || "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      {/* Top Bar: Logo on the left, Contact Us button on the right */}
      <div className="header-top-bar">
        <div className="header-top-container">
          <Link href="/" className="brand-logo" aria-label="Global Relief Consult">
            <Image
              src="/images/LOGOO.png"
              alt="Global Relief Consult"
              width={122}
              height={64}
              priority
              className="logo-img"
            />
          </Link>

          <div className="header-actions">
            <Link href="/contact-us" className="contact-btn">
              Contact Us
            </Link>

            <button
              type="button"
              className="mobile-toggle-btn"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              ) : (
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 28"
                  width="24"
                  height="24"
                >
                  <path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Header Menus directly below logo and contact button */}
      <nav className="header-nav-bar" aria-label="Main Menu">
        <div className="header-nav-container">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href} className="nav-item">
                  <Link
                    href={item.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li key={item.href} className="mobile-nav-item">
                    <Link
                      href={item.href}
                      className={`mobile-nav-link ${isActive ? "active" : ""}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mobile-nav-item mobile-cta-item">
                <Link
                  href="/contact-us"
                  className="contact-btn mobile-contact-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
