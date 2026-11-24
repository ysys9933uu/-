import React, { useState, useMemo } from 'react';
import { 
  Sparkles, Crown, Wand2, Ruler, Heart, ShoppingBag, 
  Search, Filter, ArrowRight, ShieldCheck, Star, 
  Package, Award, Smile, X, RotateCcw
} from 'lucide-react';
import { PRODUCTS, Product } from './data/products';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { RoyalStylingRoomModal } from './components/RoyalStylingRoomModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { WishlistModal } from './components/WishlistModal';
import { SparkleCanvas } from './components/SparkleCanvas';

export default function App() {
  // Navigation & Filtering State
  const [activeCategory, setActiveCategory] = useState<'all' | 'dress' | 'accessory'>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [selectedVibe, setSelectedVibe] = useState<string>('all');
  const [selectedColorFamily, setSelectedColorFamily] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Cart & Wishlist State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Modals State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isStylingRoomOpen, setIsStylingRoomOpen] = useState(false);
  const [stylingRoomDress, setStylingRoomDress] = useState<Product | undefined>(undefined);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  // Synchronized category handlers
  const handleSelectCategory = (cat: 'all' | 'dress' | 'accessory') => {
    setActiveCategory(cat);
    // If selecting dress, reset accessory subcategory
    if (cat === 'dress' && !['all', 'ballgown', 'tutu'].includes(selectedSubCategory)) {
      setSelectedSubCategory('all');
    } else if (cat === 'accessory' && ['ballgown', 'tutu'].includes(selectedSubCategory)) {
      setSelectedSubCategory('all');
    }
  };

  const handleSelectSubCategory = (subId: string) => {
    setSelectedSubCategory(subId);
    if (['ballgown', 'tutu'].includes(subId)) {
      setActiveCategory('dress');
    } else if (['tiara', 'wand', 'shoes', 'bag', 'necklace', 'earrings', 'bracelet', 'gloves', 'cape', 'wings'].includes(subId)) {
      setActiveCategory('accessory');
    }
  };

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSelectedSubCategory('all');
    setSelectedVibe('all');
    setSelectedColorFamily('all');
    setSearchQuery('');
  };

  // Robust Filtered Products with Zero Dead Ends Guarantee
  const { filteredProducts, isRelaxedMatch, relaxedNotice } = useMemo(() => {
    // 1. Strict intersection
    const strictMatches = PRODUCTS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Sub-category filter
      if (selectedSubCategory !== 'all' && item.subCategory !== selectedSubCategory) {
        return false;
      }
      // Vibe filter
      if (selectedVibe !== 'all' && !item.vibes.includes(selectedVibe)) {
        return false;
      }
      // Color family filter (checks primary color OR any available color variant)
      if (selectedColorFamily !== 'all') {
        const matchesPrimary = item.color.family === selectedColorFamily;
        const matchesAvailable = item.availableColors?.some(c => c.family === selectedColorFamily);
        if (!matchesPrimary && !matchesAvailable) {
          return false;
        }
      }
      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchSub = item.subtitle.toLowerCase().includes(query);
        const matchMat = item.materials.some(m => m.toLowerCase().includes(query));
        const matchCol = item.color.name.toLowerCase().includes(query);
        const matchAvailableCols = item.availableColors?.some(c => c.name.toLowerCase().includes(query));
        if (!matchName && !matchSub && !matchMat && !matchCol && !matchAvailableCols) {
          return false;
        }
      }
      return true;
    });

    if (strictMatches.length > 0) {
      return { filteredProducts: strictMatches, isRelaxedMatch: false, relaxedNotice: '' };
    }

    // 2. If strict intersection yields 0, intelligently relax constraints to guarantee products are shown
    const hasFilter = activeCategory !== 'all' || selectedSubCategory !== 'all' || selectedVibe !== 'all' || selectedColorFamily !== 'all' || searchQuery.trim() !== '';
    if (!hasFilter) {
      return { filteredProducts: PRODUCTS, isRelaxedMatch: false, relaxedNotice: '' };
    }

    // Rank candidate items based on how many selected criteria they fulfill
    const scoredCandidates = PRODUCTS.map((item) => {
      let score = 0;
      if (activeCategory !== 'all' && item.category === activeCategory) score += 3;
      if (selectedSubCategory !== 'all' && item.subCategory === selectedSubCategory) score += 7;
      if (selectedVibe !== 'all' && item.vibes.includes(selectedVibe)) score += 5;
      if (selectedColorFamily !== 'all') {
        if (item.color.family === selectedColorFamily) score += 4;
        else if (item.availableColors?.some(c => c.family === selectedColorFamily)) score += 2;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        if (item.name.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q)) score += 5;
      }
      return { item, score };
    })
    .filter(res => res.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(res => res.item);

    const fallbackProducts = scoredCandidates.length > 0 ? scoredCandidates : PRODUCTS.slice(0, 8);

    let notice = '선택하신 복합 조건의 조합 대신, 가장 어울리는 추천 상품을 엄선하여 보여드립니다 ✨';
    if (selectedSubCategory !== 'all' && selectedVibe !== 'all') {
      notice = `선택하신 품목 및 [${selectedVibe}] 테마와 가장 잘 어울리는 인기 상품들입니다 ✨`;
    } else if (selectedVibe !== 'all') {
      notice = `[${selectedVibe}] 테마의 인기 공주 컬렉션 추천 상품입니다 ✨`;
    } else if (selectedSubCategory !== 'all') {
      notice = `선택하신 품목의 인기 베스트 상품입니다 ✨`;
    } else if (selectedColorFamily !== 'all') {
      notice = `선택하신 색상 계열의 아름다운 로열 컬렉션입니다 ✨`;
    }

    return { filteredProducts: fallbackProducts, isRelaxedMatch: true, relaxedNotice: notice };
  }, [activeCategory, selectedSubCategory, selectedVibe, selectedColorFamily, searchQuery]);

  // Wishlist Handlers
  const handleToggleWishlist = (product: Product, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWishlist(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  // Cart Handlers
  const handleAddToCart = (item: { product: Product; size: string; quantity: number }) => {
    setCartItems(prev => {
      const key = `${item.product.id}-${item.product.color.name}-${item.size}`;
      const existing = prev.find(i => i.id === key);
      if (existing) {
        return prev.map(i => i.id === key ? { ...i, quantity: i.quantity + item.quantity } : i);
      }
      return [...prev, { id: key, ...item }];
    });
  };

  const handleAddBundleToCart = (items: { product: Product; size: string; quantity: number }[]) => {
    setCartItems(prev => {
      let updated = [...prev];
      items.forEach(newItem => {
        const key = `${newItem.product.id}-${newItem.product.color.name}-${newItem.size}`;
        const idx = updated.findIndex(i => i.id === key);
        if (idx >= 0) {
          updated[idx] = { ...updated[idx], quantity: updated[idx].quantity + newItem.quantity };
        } else {
          updated.push({ id: key, ...newItem });
        }
      });
      return updated;
    });
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedProduct(product);
  };

  const handleOpenStylingRoomWithProduct = (product: Product) => {
    setStylingRoomDress(product);
    setSelectedProduct(null);
    setIsStylingRoomOpen(true);
  };

  const scrollToCollection = () => {
    const el = document.getElementById('collection-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#262123] flex flex-col selection:bg-[#E9D5DB] selection:text-[#4A2530]">
      <SparkleCanvas />

      {/* Primary Top Bar */}
      <Navbar
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenStylingRoom={() => {
          setStylingRoomDress(undefined);
          setIsStylingRoomOpen(true);
        }}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          handleSelectCategory(cat);
          scrollToCollection();
        }}
      />

      {/* Main Campaign Hero Banner */}
      <HeroBanner
        onExploreClick={scrollToCollection}
        onOpenStylingRoom={() => {
          setStylingRoomDress(undefined);
          setIsStylingRoomOpen(true);
        }}
      />

      {/* Boutique Product Collection Section */}
      <main id="collection-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 flex-1 w-full">

        {/* Section Title & Description */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <span className="text-[11px] font-semibold text-[#8E4A5C] tracking-[0.22em] uppercase block">
            CURATED ROYAL COLLECTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1B1D] font-serif-luxury">
            공주님의 특별한 날을 완성하는 컬렉션
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6568] leading-relaxed">
            마음에 드는 상품을 클릭하면 색상·소재가 닮은 추천 아이템과 완벽히 어울리는 악세사리 코디를 함께 보실 수 있습니다.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EAE3DC] shadow-[0_2px_16px_rgba(31,27,29,0.03)] mb-8 space-y-4">

          {/* Row 1: Category Filter & Search Box */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Functional Category Filter Buttons */}
            <div className="flex items-center gap-1 p-1 bg-[#F4EFEA] rounded-xl w-full sm:w-auto">
              {[
                { id: 'all', label: '전체 컬렉션' },
                { id: 'dress', label: '공주 드레스' },
                { id: 'accessory', label: '로열 악세사리' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleSelectCategory(tab.id as any)}
                  className={`flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-white text-[#1F1B1D] shadow-xs'
                      : 'text-[#6E6568] hover:text-[#1F1B1D]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#8A8084] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="드레스, 목걸이, 귀걸이, 팔찌 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#E6DDD5] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#8E4A5C] focus:border-[#8E4A5C] text-[#1F1B1D] placeholder:text-[#9E9497]"
              />
            </div>
          </div>

          {/* Row 1.5: Detailed Category & Subcategory Filter */}
          <div className="pt-3 border-t border-[#F0EAE3] flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-[#8A8084] mr-1.5 font-medium">품목별 보기:</span>
            {(activeCategory === 'dress' ? [
              { id: 'all', label: '드레스 전체' },
              { id: 'ballgown', label: '👗 볼가운 드레스' },
              { id: 'tutu', label: '🎀 캉캉 튜튜' },
            ] : activeCategory === 'accessory' ? [
              { id: 'all', label: '악세사리 전체' },
              { id: 'tiara', label: '👑 왕관·티아라' },
              { id: 'wand', label: '🪄 마법 요술봉' },
              { id: 'shoes', label: '👠 유리구두·슈즈' },
              { id: 'bag', label: '👜 공주 핸드백' },
              { id: 'necklace', label: '💎 목걸이' },
              { id: 'earrings', label: '✨ 귀걸이·귀찌' },
              { id: 'bracelet', label: '💖 참 팔찌' },
              { id: 'gloves', label: '🧤 새틴 장갑' },
              { id: 'cape', label: '🧣 퍼 케이프' },
              { id: 'wings', label: '🧚‍♀️ 요정 날개' },
            ] : [
              { id: 'all', label: '전체 품목' },
              { id: 'ballgown', label: '👗 볼가운' },
              { id: 'tutu', label: '🎀 튜튜' },
              { id: 'tiara', label: '👑 티아라' },
              { id: 'wand', label: '🪄 요술봉' },
              { id: 'shoes', label: '👠 슈즈' },
              { id: 'bag', label: '👜 핸드백' },
              { id: 'necklace', label: '💎 목걸이' },
              { id: 'earrings', label: '✨ 귀걸이' },
              { id: 'bracelet', label: '💖 팔찌' },
              { id: 'gloves', label: '🧤 장갑' },
              { id: 'cape', label: '🧣 케이프' },
              { id: 'wings', label: '🧚‍♀️ 날개' },
            ]).map(sub => (
              <button
                key={sub.id}
                onClick={() => handleSelectSubCategory(sub.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedSubCategory === sub.id
                    ? 'bg-[#F7ECEF] text-[#763A4B] font-semibold border border-[#DFC6CE]'
                    : 'bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#5A5255] border border-[#EAE3DC]'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {/* Row 2: Vibe & Color Swatch Filters */}
          <div className="pt-3 border-t border-[#F0EAE3] flex flex-wrap items-center justify-between gap-3 text-xs">

            {/* Vibe Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[#8A8084] mr-1.5 font-medium">동화 컬렉션:</span>
              {[
                { id: 'all', label: '전체 컬렉션' },
                { id: '스프링 블라썸', label: '🌸 스프링 블라썸' },
                { id: '미드나잇 신데렐라', label: '🕛 미드나잇 신데렐라' },
                { id: '골든 팰리스', label: '👑 골든 팰리스' },
                { id: '크리스마스 에디션', label: '🎄 크리스마스 에디션' },
                { id: '눈꽃 왕국', label: '❄️ 눈꽃 왕국' },
                { id: '인어공주 바다', label: '🌊 인어공주 바다' },
                { id: '요정 숲', label: '🦋 요정 숲' },
                { id: '로맨틱 로즈', label: '🌹 로맨틱 로즈' },
                { id: '러블리 베리', label: '🍓 러블리 베리' },
              ].map(vibe => (
                <button
                  key={vibe.id}
                  onClick={() => setSelectedVibe(vibe.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                    selectedVibe === vibe.id
                      ? 'bg-[#8E4A5C] text-white font-semibold shadow-xs'
                      : 'bg-[#F4EFEA]/80 text-[#5A5255] hover:bg-[#EAE2DA]'
                  }`}
                >
                  {vibe.label}
                </button>
              ))}
            </div>

            {/* Color Swatches */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[#8A8084] mr-1 font-medium">색상:</span>
              {[
                { id: 'all', label: '전체' },
                { id: 'pink', color: '#F472B6', label: '핑크' },
                { id: 'blue', color: '#38BDF8', label: '블루' },
                { id: 'purple', color: '#C084FC', label: '바이올렛' },
                { id: 'green', color: '#34D399', label: '그린/민트' },
                { id: 'navy', color: '#1E1B4B', label: '네이비' },
                { id: 'gold', color: '#FDE047', label: '골드' },
                { id: 'red', color: '#DC2626', label: '레드' },
                { id: 'white', color: '#FFFFFF', label: '화이트' },
              ].map(c => (
                <button
                  key={c.id}
                  onClick={() => setSelectedColorFamily(c.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                    selectedColorFamily === c.id
                      ? 'ring-1 ring-[#8E4A5C] bg-[#F7ECEF] text-[#763A4B] font-semibold'
                      : 'hover:bg-[#F4EFEA] text-[#5A5255]'
                  }`}
                  title={c.label}
                >
                  {c.color && (
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-[#D4CBC2]"
                      style={{ backgroundColor: c.color }}
                    />
                  )}
                  <span>{c.label}</span>
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Active Filters Bar */}
        {(activeCategory !== 'all' || selectedSubCategory !== 'all' || selectedVibe !== 'all' || selectedColorFamily !== 'all' || searchQuery.trim() !== '') && (
          <div className="flex flex-wrap items-center gap-2 mb-6 px-1 text-xs">
            <span className="text-[#8A8084] font-medium flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#8E4A5C]" />
              <span>적용된 필터:</span>
            </span>

            {activeCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F7ECEF] text-[#763A4B] font-medium border border-[#DFC6CE]">
                <span>{activeCategory === 'dress' ? '공주 드레스' : '로열 악세사리'}</span>
                <button onClick={() => handleSelectCategory('all')} className="hover:text-[#1F1B1D] p-0.5 cursor-pointer">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedSubCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F7ECEF] text-[#763A4B] font-medium border border-[#DFC6CE]">
                <span>품목: {selectedSubCategory}</span>
                <button onClick={() => setSelectedSubCategory('all')} className="hover:text-[#1F1B1D] p-0.5 cursor-pointer">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedVibe !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F7ECEF] text-[#763A4B] font-medium border border-[#DFC6CE]">
                <span>테마: {selectedVibe}</span>
                <button onClick={() => setSelectedVibe('all')} className="hover:text-[#1F1B1D] p-0.5 cursor-pointer">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedColorFamily !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F7ECEF] text-[#763A4B] font-medium border border-[#DFC6CE]">
                <span>색상: {selectedColorFamily}</span>
                <button onClick={() => setSelectedColorFamily('all')} className="hover:text-[#1F1B1D] p-0.5 cursor-pointer">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {searchQuery.trim() !== '' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F7ECEF] text-[#763A4B] font-medium border border-[#DFC6CE]">
                <span>검색: &quot;{searchQuery}&quot;</span>
                <button onClick={() => setSearchQuery('')} className="hover:text-[#1F1B1D] p-0.5 cursor-pointer">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#EFE9E2] hover:bg-[#E4DBD2] text-[#5A5255] font-medium transition-colors ml-auto text-[11px] cursor-pointer"
            >
              <RotateCcw className="w-3 h-3 text-[#6E6568]" />
              <span>전체 초기화</span>
            </button>
          </div>
        )}

        {/* Relaxed Matching Notice Banner */}
        {isRelaxedMatch && (
          <div className="mb-6 p-4 rounded-2xl bg-[#F7ECEF]/80 border border-[#DFC6CE] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#4A2530]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#E9D5DB] flex items-center justify-center text-[#763A4B] shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="font-medium">
                {relaxedNotice}
              </p>
            </div>
            <button
              onClick={handleResetFilters}
              className="px-3.5 py-1.5 bg-white hover:bg-[#FAF8F5] text-[#763A4B] font-semibold rounded-full border border-[#DFC6CE] shadow-2xs transition-colors whitespace-nowrap active:scale-95 text-xs cursor-pointer"
            >
              필터 전체 초기화
            </button>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-[#EAE3DC] shadow-sm space-y-3">
            <Sparkles className="w-10 h-10 text-[#C8B9AE] mx-auto" />
            <h3 className="text-base font-bold text-[#1F1B1D] font-serif-luxury">
              조건에 맞는 상품을 찾을 수 없습니다.
            </h3>
            <p className="text-xs text-[#6E6568]">
              다른 테마나 검색어를 선택해 보세요.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-2 px-5 py-2 text-xs font-semibold text-[#8E4A5C] bg-[#F7ECEF] hover:bg-[#EEDDE2] rounded-full cursor-pointer"
            >
              필터 전체 초기화
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => setSelectedProduct(p)}
                isWishlisted={wishlist.some(w => w.id === product.id)}
                onToggleWishlist={handleToggleWishlist}
                onQuickAdd={handleQuickAdd}
              />
            ))}
          </div>
        )}

        {/* Interactive Feature Callout Banner: Royal Fitting Room Experience */}
        <div className="mt-16 bg-gradient-to-r from-[#F6EEF0] via-[#F7F3EE] to-[#EFE8E0] rounded-3xl p-7 sm:p-10 border border-[#E4D8D2] shadow-[0_6px_24px_rgba(31,27,29,0.04)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2.5 text-center md:text-left">
            <span className="text-[11px] font-semibold text-[#8E4A5C] tracking-[0.2em] uppercase inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B5945B]" />
              <span>PRIVATE STYLING ATELIER</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F1B1D] font-serif-luxury">
              우리 아이에게 어떤 드레스와 티아라가 가장 잘 어울릴까요?
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5255] max-w-xl leading-relaxed">
              프라이빗 피팅룸에서 드레스와 요술봉, 유리구두를 가상으로 매치해보고 세트 할인 혜택으로 완성해보세요.
            </p>
          </div>

          <button
            onClick={() => {
              setStylingRoomDress(undefined);
              setIsStylingRoomOpen(true);
            }}
            className="px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#8E4A5C] hover:bg-[#763A4B] rounded-full shadow-[0_8px_20px_-6px_rgba(142,74,92,0.45)] transition-all flex items-center gap-2 whitespace-nowrap active:scale-95 cursor-pointer"
          >
            <Wand2 className="w-4 h-4" />
            <span>공주 코디 피팅룸 열기</span>
          </button>
        </div>

        {/* Proof & Quality Assurance Section */}
        <div className="mt-16 border-t border-[#E8E0D8] pt-14">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-1.5">
            <span className="text-[11px] font-semibold text-[#8E4A5C] uppercase tracking-[0.22em]">
              WHY LA PRINCESSE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F1B1D] font-serif-luxury">
              엄마와 아이가 모두 신뢰하는 3가지 아틀리에 철학
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#EAE3DC] shadow-[0_2px_12px_rgba(31,27,29,0.03)] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F5F1EC] text-[#5D7B6F] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#1F1B1D] font-serif-luxury">
                100% 무자극 순면 안감
              </h4>
              <p className="text-xs text-[#6E6568] leading-relaxed">
                아이의 연약한 피부가 닿는 모든 부위에 부드러운 40~60수 천연 순면 안감을 덧대어 하루 종일 쾌적하고 편안합니다.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#EAE3DC] shadow-[0_2px_12px_rgba(31,27,29,0.03)] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F5F1EC] text-[#B5945B] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#1F1B1D] font-serif-luxury">
                가루 탈락 없는 열처리 글리터
              </h4>
              <p className="text-xs text-[#6E6568] leading-relaxed">
                특수 고온 압착 본딩 기법을 적용해 반짝이가 손이나 실내에 묻어나지 않으며 우아한 광채가 오래 유지됩니다.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#EAE3DC] shadow-[0_2px_12px_rgba(31,27,29,0.03)] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F7ECEF] text-[#8E4A5C] flex items-center justify-center">
                <Package className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#1F1B1D] font-serif-luxury">
                시그니처 기프트 무료 박스 포장
              </h4>
              <p className="text-xs text-[#6E6568] leading-relaxed">
                모든 주문 건에 고급 새틴 리본 박스와 아이 이름이 담긴 임명장 레터 카드를 무료로 동봉해 선물 같은 순간을 선사합니다.
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* Boutique Footer */}
      <footer className="mt-20 bg-white border-t border-[#E8E0D8] text-[#6E6568] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-[#8E4A5C]" />
                <span className="text-base font-bold text-[#1F1B1D] font-serif-luxury">
                  La Princesse
                </span>
              </div>
              <p className="text-[#6E6568] leading-relaxed text-[11px]">
                라 프린세스는 아이들의 반짝이는 동화 속 꿈을 품격 있게 완성하는 프리미엄 키즈 프린세스 부티크입니다.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-[#1F1B1D] mb-2.5">부티크 안내</h5>
              <ul className="space-y-1.5 text-[11px]">
                <li><button onClick={() => { handleSelectCategory('dress'); scrollToCollection(); }} className="hover:text-[#8E4A5C] cursor-pointer">공주 드레스 컬렉션</button></li>
                <li><button onClick={() => { handleSelectCategory('accessory'); scrollToCollection(); }} className="hover:text-[#8E4A5C] cursor-pointer">로열 악세사리 라인업</button></li>
                <li><button onClick={() => setIsStylingRoomOpen(true)} className="hover:text-[#8E4A5C] cursor-pointer">나만의 피팅룸 체험</button></li>
                <li><button onClick={() => setIsSizeGuideOpen(true)} className="hover:text-[#8E4A5C] cursor-pointer">키/나이별 사이즈 가이드</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-[#1F1B1D] mb-2.5">고객 안심 센터</h5>
              <ul className="space-y-1.5 text-[11px]">
                <li>상담 시간: 평일 10:00 ~ 18:00 (점심 12:00~13:00)</li>
                <li>로열 긴급 상담: 1544-7788</li>
                <li>배송 안내: 전 상품 무료 선물 포장 &amp; 당일 출고</li>
                <li>교환/반품: 수령 후 7일 이내 무상 사이즈 교환 1회 지원</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-[#1F1B1D] mb-2.5">안전 기준 인증</h5>
              <p className="text-[11px] text-[#6E6568] leading-relaxed">
                국가공인 어린이제품 안전특별법(KC인증) 필증 획득. 유해물질 불검출 및 무자극 테스트 완료.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[#5D7B6F] font-semibold text-[11px]">
                <ShieldCheck className="w-4 h-4" />
                <span>KC 안전 인증 마크 획득</span>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[#F0EAE3] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#9E9497] gap-2">
            <span>© 2026 La Princesse Boutique. All rights reserved.</span>
            <span>Atelier crafted for timeless childhood moments.</span>
          </div>
        </div>
      </footer>

      {/* Modals & Slide-outs */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onAddToCart={handleAddToCart}
        onAddBundleToCart={handleAddBundleToCart}
        isWishlisted={selectedProduct ? wishlist.some(w => w.id === selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onOpenStylingRoomWithProduct={handleOpenStylingRoomWithProduct}
      />

      <RoyalStylingRoomModal
        isOpen={isStylingRoomOpen}
        onClose={() => setIsStylingRoomOpen(false)}
        initialDress={stylingRoomDress}
        onAddStylingToCart={handleAddBundleToCart}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={(p) => handleToggleWishlist(p)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => setCartItems([])}
      />
    </div>
  );
}
