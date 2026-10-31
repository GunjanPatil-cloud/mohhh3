import React from 'react';
import { ShoppingBag, Menu, X, ArrowUpRight, Palette, Leaf, FolderGit2 } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenBlueprint: () => void;
  currentPage: 'home' | 'sustainability' | 'projects';
  onNavigatePage: (page: 'home' | 'sustainability' | 'projects', sectionId?: string) => void;
  currentTheme: 'terracotta' | 'slate-amber' | 'nordic-sage';
  onToggleTheme: (theme: 'terracotta' | 'slate-amber' | 'nordic-sage') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenBlueprint,
  currentPage,
  onNavigatePage,
  currentTheme,
  onToggleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = React.useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigatePage('home', sectionId);
    setMobileMenuOpen(false);
  };

  const themes = [
    { id: 'terracotta', label: 'Terracotta & Basalt', color: '#C85A32' },
    { id: 'slate-amber', label: 'Slate & Amber', color: '#D97706' },
    { id: 'nordic-sage', label: 'Nordic Sage', color: '#1E7F55' }
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-[#F8F7F4]/90 backdrop-blur-md border-b border-[#E5E1D8] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              onNavigatePage('home', 'hero');
            }}
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0"
          >
            <span className="w-8 h-8 rounded-lg bg-[#16191D] text-[#F07A4B] font-bold flex items-center justify-center text-sm shadow-sm group-hover:scale-105 transition-transform">
              DM
            </span>
            <span className="text-xl font-bold tracking-tight text-[#16191D]">
              DailyMate
            </span>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-[#16191D]/80">
            <button
              onClick={() => handleNavClick('catalog')}
              className={`hover:text-[#C85A32] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'home' ? '' : 'opacity-80'
              }`}
            >
              Catalog
            </button>
            <button
              onClick={() => handleNavClick('bundle-builder')}
              className="hover:text-[#C85A32] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Setup Builder
            </button>
            <button
              onClick={() => handleNavClick('craft')}
              className="hover:text-[#C85A32] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Craft &amp; Process
            </button>
            <button
              onClick={() => onNavigatePage('sustainability')}
              className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'sustainability'
                  ? 'text-[#C85A32] font-bold'
                  : 'hover:text-[#C85A32]'
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Sustainability</span>
            </button>
            <button
              onClick={() => onNavigatePage('projects')}
              className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'projects'
                  ? 'text-[#C85A32] font-bold'
                  : 'hover:text-[#C85A32]'
              }`}
            >
              <FolderGit2 className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Projects (8)</span>
            </button>
            <button
              onClick={() => handleNavClick('corporate')}
              className="hover:text-[#C85A32] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Corporate
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-[#C85A32] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1 primary action + theme selector */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Theme switcher dropdown */}
            <div className="relative">
              <button
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                className="p-2 rounded-lg text-[#16191D] hover:bg-black/5 border border-[#E5E1D8] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium"
                title="Change Color Theme"
              >
                <Palette className="w-3.5 h-3.5 text-[#C85A32]" />
                <span className="hidden xl:inline capitalize">Theme</span>
              </button>

              {themeMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-[#E5E1D8] p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-[10px] uppercase font-bold text-[#676E79] px-2 py-1">
                    Select Color Palette
                  </div>
                  {themes.map((th) => (
                    <button
                      key={th.id}
                      onClick={() => {
                        onToggleTheme(th.id);
                        setThemeMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium text-left cursor-pointer transition-colors ${
                        currentTheme === th.id
                          ? 'bg-[#FBF1EB] text-[#C85A32] font-bold'
                          : 'text-[#16191D] hover:bg-[#F8F7F4]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full border border-black/15 shrink-0"
                          style={{ backgroundColor: th.color }}
                        />
                        <span>{th.label}</span>
                      </div>
                      {currentTheme === th.id && <span className="text-[10px]">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={onOpenBlueprint}
              className="hidden lg:flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-[#16191D] bg-white border border-[#E5E1D8] rounded-md hover:border-[#C85A32]/40 transition-all cursor-pointer whitespace-nowrap"
              title="Google Sites Reproduction Guide"
            >
              <span>Blueprint</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C85A32]" />
            </button>

            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 py-2 bg-[#16191D] text-white hover:bg-[#23282E] active:scale-95 transition-all rounded-lg text-xs font-semibold shadow-sm cursor-pointer whitespace-nowrap shrink-0"
              aria-label="View shopping bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#F07A4B]" />
              <span className="hidden sm:inline">Bag</span>
              <span className="bg-[#C85A32] text-white font-bold text-[11px] px-1.5 py-0.2 rounded-full min-w-5 text-center">
                {cartCount}
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#16191D] hover:bg-black/5 rounded-md cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5E1D8] bg-[#F8F7F4] px-4 pt-3 pb-5 space-y-2">
          <button
            onClick={() => handleNavClick('catalog')}
            className="block w-full text-left py-2 text-sm font-medium text-[#16191D] hover:text-[#C85A32]"
          >
            Catalog
          </button>
          <button
            onClick={() => handleNavClick('bundle-builder')}
            className="block w-full text-left py-2 text-sm font-medium text-[#16191D] hover:text-[#C85A32]"
          >
            Setup Builder
          </button>
          <button
            onClick={() => handleNavClick('craft')}
            className="block w-full text-left py-2 text-sm font-medium text-[#16191D] hover:text-[#C85A32]"
          >
            Craft &amp; Process
          </button>
          <button
            onClick={() => {
              onNavigatePage('sustainability');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-sm font-bold text-[#C85A32] flex items-center gap-1.5"
          >
            <Leaf className="w-4 h-4" />
            <span>Sustainability Page</span>
          </button>
          <button
            onClick={() => {
              onNavigatePage('projects');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-sm font-bold text-[#C85A32] flex items-center gap-1.5"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Projects Page (8 Studies)</span>
          </button>
          <button
            onClick={() => handleNavClick('corporate')}
            className="block w-full text-left py-2 text-sm font-medium text-[#16191D] hover:text-[#C85A32]"
          >
            Corporate Gifting
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left py-2 text-sm font-medium text-[#16191D] hover:text-[#C85A32]"
          >
            Contact
          </button>

          {/* Theme choices in mobile */}
          <div className="pt-3 border-t border-[#E5E1D8] space-y-1">
            <div className="text-[11px] font-bold text-[#676E79] uppercase">Switch Theme:</div>
            <div className="flex gap-2">
              {themes.map((th) => (
                <button
                  key={th.id}
                  onClick={() => {
                    onToggleTheme(th.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex-1 py-1.5 px-2 rounded text-xs font-semibold border flex items-center justify-center gap-1.5 ${
                    currentTheme === th.id
                      ? 'border-[#C85A32] bg-[#FBF1EB] text-[#C85A32]'
                      : 'border-[#E5E1D8] bg-white text-[#16191D]'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: th.color }} />
                  <span>{th.label.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
