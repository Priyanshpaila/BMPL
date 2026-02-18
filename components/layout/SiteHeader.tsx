"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Sun, Moon, Search } from "lucide-react";
import { useTheme } from "next-themes";

import { NAV_ITEMS } from "@/content/nav";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import BrandLogo from "@/components/layout/BrandLogo";

const TRENDING_SEARCHES = [
  "MS Billets",
  "MS Angles",
  "MS Channels",
  "MS Rounds",
  "MS Square",
  "MS Patti (Flats)",
  "MS Gate Channel",
  "More"
];
const normalize = (s: string) =>
  s.toLowerCase().replace(/\s+/g, " ").replace(/[()]/g, "").trim();

const TRENDING_HREF: Record<string, string> = {
  [normalize("MS Billets")]: "/products/ms-billets-mild-steel",
  [normalize("MS Angles")]: "/products/ms-angles-structural",
  [normalize("MS Channels")]: "/products/ms-channels-structural",
  [normalize("MS Rounds")]: "/products/ms-rounds",
  [normalize("MS Square")]: "/products/ms-squares",
  [normalize("MS Patti (Flats)")]: "/products/ms-flats-patti",
  [normalize("MS Gate Channel")]: "/products/ms-gate-channels",
  [normalize("More")]: "/products",
};

const resolveSearchHref = (q: string) => {
  const key = normalize(q);
  return TRENDING_HREF[key] ?? `/products?search=${encodeURIComponent(q.trim())}`;
};

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Theme (safe mount handling)
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  // ---- Search (dropdown) ----
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const searchWrapRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const goSearch = (term?: string) => {
    const q = (term ?? searchValue).trim();
    if (!q) return;

    router.push(resolveSearchHref(q));
    setSearchOpen(false);
  };
  // close dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // close dropdown on outside click
  useEffect(() => {
    if (!searchOpen) return;

    const onPointerDown = (e: PointerEvent) => {
      const wrap = searchWrapRef.current;
      if (!wrap) return;
      if (wrap.contains(e.target as Node)) return;
      setSearchOpen(false);
    };

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [searchOpen]);

  // ESC closes dropdown
  useEffect(() => {
    if (!searchOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [searchOpen]);

  // lock scroll for mobile menu only
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileMenuOpen]);

  const isActive = useMemo(() => {
    return (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(`${href}/`);
    };
  }, [pathname]);

  // border color requirement:
  // light => red, dark => blue
  const searchBorder =
    "border border-red-500 dark:border-blue-500 focus-visible:ring-2 focus-visible:ring-red-500 dark:focus-visible:ring-blue-500";

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-border">
      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 dark:bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <Container>
        <div className="relative z-50 flex items-center justify-between py-3">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="BMPL Home"
          >
            <BrandLogo
              className="h-10 w-auto object-contain"
              height={28}
              alt="BMPL"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "text-sm font-medium text-foreground smooth-transition relative"
                      : "text-sm text-muted-foreground hover:text-foreground smooth-transition"
                  }
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Search (inline input + dropdown) */}
            <div ref={searchWrapRef} className="relative">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  ref={searchInputRef}
                  suppressHydrationWarning
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    if (!searchOpen) setSearchOpen(true);
                  }}
                  onFocus={() => setSearchOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") goSearch();
                  }}
                  placeholder="Search products"
                  aria-label="Search products"
                  className={[
                    "h-8 w-[140px] lg:w-[165px] rounded-xl bg-background/60 backdrop-blur pl-8 pr-8 text-[13px] outline-none",
                    "placeholder:text-muted-foreground",
                    searchBorder,
                  ].join(" ")}
                />

                {/* Clear / Close button on input */}
                {(searchOpen || searchValue) && (
                  <button
                    type="button"
                    onClick={() => {
                      if (searchValue) {
                        setSearchValue("");
                        requestAnimationFrame(() => searchInputRef.current?.focus());
                      } else {
                        setSearchOpen(false);
                      }
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-1 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                    aria-label={searchValue ? "Clear search" : "Close search"}
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Dropdown */}
              {searchOpen && (
                <div
                  className="absolute left-0 mt-2 w-[280px] lg:w-[320px] rounded-2xl border border-border bg-background/95 backdrop-blur shadow-xl overflow-hidden"
                  role="dialog"
                  aria-label="Search dropdown"
                >
                  {/* Top row like screenshot */}
                  <div className="p-4 flex items-stretch gap-2">
                    <div className="flex-1">
                      <input
                        suppressHydrationWarning
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") goSearch();
                        }}
                        placeholder="Search all products"
                        className={[
                          "w-full h-9 rounded-xl bg-background/70 px-3 text-[13px] outline-none",
                          "placeholder:text-muted-foreground",
                          searchBorder,
                        ].join(" ")}
                        autoFocus
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => goSearch()}
                      className="h-11 w-11 rounded-xl flex items-center justify-center text-white hover:opacity-95 smooth-transition
                                 bg-red-500 dark:bg-blue-600"
                      aria-label="Search"
                    >
                      <Search className="w-5 h-5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setSearchOpen(false)}
                      className="h-11 w-11 rounded-xl border border-border bg-background/60 hover:bg-muted/35 smooth-transition flex items-center justify-center"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5 text-foreground" />
                    </button>
                  </div>

                  <div className="px-4 pb-5">
                    <div className="text-base font-semibold text-foreground mb-3">
                      Trending Searches
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {TRENDING_SEARCHES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => {
                            setSearchValue(t);
                            goSearch(t);
                          }}
                          className={[
                            "px-4 py-2 rounded-md bg-background/40 hover:bg-muted/30 smooth-transition text-sm",
                            "text-foreground",
                            "border border-border",
                          ].join(" ")}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-xl px-3 text-muted-foreground hover:text-foreground bg-transparent hover:bg-muted/40 border border-transparent hover:border-border/60 shadow-none hover:shadow-none"
            >
              {mounted ? (
                resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )
              ) : (
                <span className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden text-muted-foreground hover:text-foreground smooth-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl p-2 border border-border bg-background/60 hover:bg-muted/40"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav id="mobile-nav" className="relative z-50 md:hidden pb-4" aria-label="Mobile">
            <div className="rounded-2xl border border-border bg-background/70 backdrop-blur p-2 flex flex-col gap-2">
              {/* Mobile Search (dropdown-ish in menu itself) */}
              <div className="px-1 pt-1">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    suppressHydrationWarning
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        goSearch();
                        setMobileMenuOpen(false);
                      }
                    }}
                    placeholder="Search all products"
                    className={[
                      "w-full h-11 rounded-xl bg-background/60 backdrop-blur pl-9 pr-10 text-sm outline-none",
                      "placeholder:text-muted-foreground",
                      searchBorder,
                    ].join(" ")}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (!searchValue.trim()) return;
                      goSearch();
                      setMobileMenuOpen(false);
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-white bg-red-500 dark:bg-blue-600 hover:opacity-95"
                    aria-label="Search"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-3">
                  <div className="text-sm font-semibold text-foreground mb-2">
                    Trending Searches
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {TRENDING_SEARCHES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => {
                          setSearchValue(t);
                          goSearch(t);
                          setMobileMenuOpen(false);
                        }}
                        className="px-3 py-1.5 rounded-md border border-border bg-background/40 hover:bg-muted/30 smooth-transition text-xs text-foreground"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Nav items */}
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "text-sm text-foreground bg-muted/50 border border-border rounded-xl px-3 py-2"
                        : "text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-xl px-3 py-2 smooth-transition"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-2">
                <Button
                  variant="secondary"
                  className="w-full rounded-xl border border-border bg-muted/30 hover:bg-muted/45 flex items-center justify-center gap-2"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {mounted ? (
                    resolvedTheme === "dark" ? (
                      <Sun className="w-4 h-4" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )
                  ) : (
                    <span className="w-4 h-4" />
                  )}
                  Theme
                </Button>
              </div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}