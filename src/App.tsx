import { useState, useEffect } from 'react';
import { Product, PRODUCTS } from './data/products';
import { CartItem, OrderDetails } from './types/cart';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetailModal } from './components/ProductDetailModal';
import { BundleBuilder } from './components/BundleBuilder';
import { ProductionProcess } from './components/ProductionProcess';
import { SustainabilitySection } from './components/SustainabilitySection';
import { SustainabilityPage } from './components/SustainabilityPage';
import { ProjectsPage } from './components/ProjectsPage';
import { StartupStudies } from './components/StartupStudies';
import { CorporateGifting } from './components/CorporateGifting';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { GoogleSitesBlueprintModal } from './components/GoogleSitesBlueprintModal';
import { Footer } from './components/Footer';
import { Check, X } from 'lucide-react';

export default function App() {
  // Page Routing state: 'home' | 'sustainability' | 'projects'
  const [currentPage, setCurrentPage] = useState<'home' | 'sustainability' | 'projects'>('home');
  const [activeProjectId, setActiveProjectId] = useState<string>('sustainability-audit');

  // Theme state: 'terracotta' (default new theme) | 'slate-amber' | 'nordic-sage'
  const [currentTheme, setCurrentTheme] = useState<'terracotta' | 'slate-amber' | 'nordic-sage'>(() => {
    try {
      const savedTheme = localStorage.getItem('dailymate_theme');
      return (savedTheme as any) || 'terracotta';
    } catch {
      return 'terracotta';
    }
  });

  // Cart state persisted to localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('dailymate_cart');
      return saved ? JSON.parse(saved) : [
        { product: PRODUCTS[0], selectedColor: 'Space Gray', quantity: 1 }
      ];
    } catch {
      return [{ product: PRODUCTS[0], selectedColor: 'Space Gray', quantity: 1 }];
    }
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isBlueprintOpen, setIsBlueprintOpen] = useState<boolean>(false);
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [appliedPromoCode, setAppliedPromoCode] = useState<string>('');
  const [topBannerVisible, setTopBannerVisible] = useState<boolean>(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Apply data-theme to documentElement
  useEffect(() => {
    if (currentTheme === 'terracotta') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', currentTheme);
    }
    try {
      localStorage.setItem('dailymate_theme', currentTheme);
    } catch {
      // ignore
    }
  }, [currentTheme]);

  useEffect(() => {
    try {
      localStorage.setItem('dailymate_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (product: Product, color: string, qty: number) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (it) => it.product.id === product.id && it.selectedColor === color
      );
      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += qty;
        return copy;
      } else {
        return [...prev, { product, selectedColor: color, quantity: qty }];
      }
    });
    showToast(`Added ${qty}× ${product.name} (${color}) to your bag`);
  };

  const handleAddBundleToCart = (items: { product: Product; color: string; qty: number }[]) => {
    setCartItems((prev) => {
      let copy = [...prev];
      items.forEach(({ product, color, qty }) => {
        const idx = copy.findIndex(
          (it) => it.product.id === product.id && it.selectedColor === color
        );
        if (idx > -1) {
          copy[idx].quantity += qty;
        } else {
          copy.push({ product, selectedColor: color, quantity: qty });
        }
      });
      return copy;
    });
    showToast('Added the 4-Piece Everyday Setup to your bag with 15% discount!');
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, color: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((it) => {
          if (it.product.id === productId && it.selectedColor === color) {
            const nextQty = it.quantity + delta;
            return nextQty > 0 ? { ...it, quantity: nextQty } : null;
          }
          return it;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (productId: string, color: string) => {
    setCartItems((prev) =>
      prev.filter((it) => !(it.product.id === productId && it.selectedColor === color))
    );
  };

  const handleExpressBuy = (product: Product, color: string, qty: number) => {
    handleAddToCart(product, color, qty);
    setSelectedProduct(null);
    setIsCheckoutOpen(true);
  };

  const handleOpenCheckout = (discount: number, promo: string) => {
    setAppliedDiscount(discount);
    setAppliedPromoCode(promo);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = (order: OrderDetails) => {
    setCartItems([]);
    showToast(`Order #${order.orderId} placed successfully!`);
  };

  const handleNavigatePage = (page: 'home' | 'sustainability' | 'projects', sectionId?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleOpenProject = (projectId: string) => {
    setActiveProjectId(projectId);
    setCurrentPage('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#16191D] flex flex-col selection:bg-[#C85A32] selection:text-white transition-colors">
      {/* Slim Dismissible Top Notification Banner (<40px) */}
      {topBannerVisible && (
        <div className="bg-[#16191D] text-white px-4 py-2 text-xs font-medium flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex-1 text-center truncate">
            <span className="text-[#F07A4B] font-bold">STARTUP SPECIAL:</span> Free Global Dispatch over $50 · 10-Year Mechanical Longevity Guarantee
          </div>
          <button
            onClick={() => setTopBannerVisible(false)}
            className="text-white/60 hover:text-white p-0.5 ml-2 cursor-pointer"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Top Bar Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBlueprint={() => setIsBlueprintOpen(true)}
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
        currentTheme={currentTheme}
        onToggleTheme={setCurrentTheme}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'sustainability' ? (
          <SustainabilityPage
            onBackToHome={() => handleNavigatePage('home')}
            onExploreProducts={() => handleNavigatePage('home', 'catalog')}
          />
        ) : currentPage === 'projects' ? (
          <ProjectsPage
            initialProjectId={activeProjectId}
            onBackToHome={() => handleNavigatePage('home')}
            onOpenEnquiry={(topic) => {
              handleNavigatePage('home', 'contact');
              if (topic) showToast(`Inquiry topic selected: ${topic}`);
            }}
          />
        ) : (
          <>
            <Hero
              onExplore={() => scrollToSection('catalog')}
              onOpenBuilder={() => scrollToSection('bundle-builder')}
              onGoToSustainability={() => handleNavigatePage('sustainability')}
            />

            <ProductCatalog
              onSelectProduct={(p) => setSelectedProduct(p)}
              onAddToCart={handleAddToCart}
            />

            <BundleBuilder onAddBundleToCart={handleAddBundleToCart} />

            <ProductionProcess />

            <SustainabilitySection />

            <StartupStudies
              onGoToProjectsPage={() => handleNavigatePage('projects')}
              onSelectStudy={handleOpenProject}
            />

            {/* Quick banner linking to all 8 projects */}
            <section className="py-10 bg-[#F1EFEA] border-t border-[#E5E1D8]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
                    Operations &amp; Strategy Documentation
                  </div>
                  <h3 className="text-lg font-bold text-[#16191D] mt-0.5">
                    Explore all 8 DailyMate Startup Projects &amp; Studies
                  </h3>
                  <p className="text-xs text-[#676E79]">
                    Detailed analysis covering sustainability audits, supply chain, financial roadmaps, and risk governance.
                  </p>
                </div>
                <button
                  onClick={() => handleNavigatePage('projects')}
                  className="px-5 py-2.5 bg-[#16191D] text-white hover:bg-[#C85A32] rounded-xl text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer"
                >
                  View All 8 Projects
                </button>
              </div>
            </section>

            <CorporateGifting />

            <TestimonialsSection />

            <ContactSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenBlueprint={() => setIsBlueprintOpen(true)}
        onNavigate={scrollToSection}
        onNavigatePage={handleNavigatePage}
      />

      {/* Modals & Overlays */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onExpressBuy={handleExpressBuy}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleOpenCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        discountAmount={appliedDiscount}
        promoCode={appliedPromoCode}
        onOrderSuccess={handleOrderSuccess}
      />

      <GoogleSitesBlueprintModal
        isOpen={isBlueprintOpen}
        onClose={() => setIsBlueprintOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#16191D] text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-2.5 text-xs font-semibold animate-in slide-in-from-bottom-3 duration-200 border border-[#C85A32]/40">
          <div className="w-4 h-4 rounded-full bg-[#C85A32] text-white flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
