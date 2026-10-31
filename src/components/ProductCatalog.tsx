import React, { useState, useMemo } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { Search, Eye, Plus, Star, Check } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, color: string, qty: number) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onAddToCart
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Essentials', count: PRODUCTS.length },
    { id: 'stands', label: 'Mobile Stands', count: PRODUCTS.filter((p) => p.category === 'stands').length },
    { id: 'keys', label: 'Key Holders', count: PRODUCTS.filter((p) => p.category === 'keys').length },
    { id: 'bags', label: 'Everyday Bags', count: PRODUCTS.filter((p) => p.category === 'bags').length },
    { id: 'organizers', label: 'Desk Organizers', count: PRODUCTS.filter((p) => p.category === 'organizers').length }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.tagline.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.materials.some((m) => m.toLowerCase().includes(query)) ||
        item.highlights.some((h) => h.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleQuickAdd = (product: Product) => {
    onAddToCart(product, product.colors[0]?.name || 'Standard', 1);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1800);
  };

  return (
    <section id="catalog" className="py-16 bg-[#F8F7F4] border-t border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1">
              Curated Everyday Hardware
            </div>
            <h2 className="text-3xl font-extrabold text-[#16191D] tracking-tight">
              The DailyMate Collection
            </h2>
            <p className="text-sm text-[#676E79] mt-1 max-w-xl">
              Engineered to eliminate friction points in your routine—from your morning departure to deep-focus desk sessions.
            </p>
          </div>

          {/* Search bar & Sort Controls */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#676E79]/60 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search titanium, stands, cordura..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-[#E5E1D8] rounded-lg text-[#16191D] placeholder-[#676E79]/60 focus:outline-none focus:border-[#C85A32] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#676E79] hover:text-[#16191D]"
                >
                  ✕
                </button>
              )}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="py-2 px-3 text-xs bg-white border border-[#E5E1D8] rounded-lg text-[#16191D] focus:outline-none focus:border-[#C85A32] cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#16191D] text-white shadow-xs'
                  : 'bg-white text-[#16191D]/80 border border-[#E5E1D8] hover:border-[#C85A32]/40 hover:bg-[#FBF1EB]/30'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`ml-2 text-[11px] ${selectedCategory === cat.id ? 'text-[#F07A4B]' : 'text-[#676E79]'}`}>
                ({cat.count})
              </span>
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-2xl border border-[#E5E1D8] p-8">
            <p className="text-base font-semibold text-[#16191D]">No products match your search criteria.</p>
            <p className="text-xs text-[#676E79] mt-1">Try clearing your search query or switching categories.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-[#16191D] text-white rounded-lg text-xs font-medium cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isAdded = addedProductId === product.id;

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-[#E5E1D8] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#C85A32]/40 transition-all flex flex-col"
                >
                  {/* Image Container with Fallback */}
                  <div className="relative aspect-4/3 bg-[#F1EFEA] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />

                    {/* Quick View Overlay Button */}
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="absolute inset-0 bg-[#16191D]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-[2px]"
                      aria-label={`Quick view ${product.name}`}
                    >
                      <span className="px-3 py-1.5 bg-white text-[#16191D] rounded-md text-xs font-semibold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5 text-[#C85A32]" />
                        <span>Inspect Specs</span>
                      </span>
                    </button>

                    {/* Badge */}
                    {product.featured && (
                      <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#16191D] text-[#F07A4B] text-[10px] font-bold uppercase tracking-wider rounded">
                        Flagship
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Unboxed Metadata with Typographic Separator */}
                      <div className="flex items-center gap-1.5 text-[11px] text-[#676E79] mb-1.5 font-medium">
                        <span>{product.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{product.materials[0]}</span>
                      </div>

                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="text-base font-bold text-[#16191D] group-hover:text-[#C85A32] transition-colors cursor-pointer leading-snug line-clamp-1"
                      >
                        {product.name}
                      </h3>

                      <p className="text-xs text-[#676E79] mt-1 line-clamp-2 leading-relaxed">
                        {product.tagline}
                      </p>

                      {/* Ratings & Color Indicators */}
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#E5E1D8]">
                        <div className="flex items-center gap-1 text-xs">
                          <Star className="w-3.5 h-3.5 fill-[#C85A32] text-[#C85A32]" />
                          <span className="font-semibold text-[#16191D] tabular-nums">{product.rating}</span>
                          <span className="text-[11px] text-[#676E79]">({product.reviewsCount})</span>
                        </div>

                        {/* Color swatches */}
                        <div className="flex items-center gap-1">
                          {product.colors.map((c) => (
                            <span
                              key={c.name}
                              title={c.name}
                              className="w-2.5 h-2.5 rounded-full border border-black/10 shadow-2xs"
                              style={{ backgroundColor: c.hex }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="mt-4 pt-3 border-t border-[#E5E1D8] flex items-center justify-between">
                      <div>
                        <span className="text-base font-extrabold text-[#16191D] tabular-nums">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="ml-1.5 text-xs text-[#676E79] line-through tabular-nums">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectProduct(product)}
                          className="px-2.5 py-1.5 text-xs text-[#16191D]/80 hover:text-[#16191D] hover:bg-[#F1EFEA] rounded-md transition-colors cursor-pointer"
                        >
                          Specs
                        </button>
                        <button
                          onClick={() => handleQuickAdd(product)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                            isAdded
                              ? 'bg-[#C85A32] text-white'
                              : 'bg-[#16191D] text-white hover:bg-[#23282E] active:scale-95'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-white" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5 text-[#F07A4B]" />
                              <span>Add</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
