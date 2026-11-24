import React from 'react';
import { Crown, Heart, ShoppingBag, Sparkles, Ruler } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenStylingRoom: () => void;
  onOpenSizeGuide: () => void;
  activeCategory: 'all' | 'dress' | 'accessory';
  onSelectCategory: (cat: 'all' | 'dress' | 'accessory') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenStylingRoom,
  onOpenSizeGuide,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E0D8] shadow-[0_2px_20px_-4px_rgba(31,27,29,0.05)]">
      {/* Top micro banner */}
      <div className="bg-[#262123] text-[#F5EFEA] text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium tracking-wider">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#D4B483]" />
          <span>전 상품 시그니처 기프트 박스 무료 포장 &amp; 5만원 이상 무료 배송</span>
          <span className="hidden sm:inline text-[#6E6568]">·</span>
          <span className="hidden sm:inline text-[#D6C7BD]">어린이 KC 안전 인증 100% 순면 안감</span>
        </span>
      </div>

      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onSelectCategory('all'); }}
          className="flex items-center gap-2.5 group whitespace-nowrap shrink-0"
        >
          <div className="w-9 h-9 rounded-full bg-[#8E4A5C] flex items-center justify-center text-[#FAF8F5] shadow-sm group-hover:bg-[#763A4B] transition-colors">
            <Crown className="w-4 h-4 text-[#EAD7B7]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1F1B1D] font-serif-luxury leading-none">
              La Princesse
            </span>
            <span className="text-[10px] tracking-[0.2em] text-[#8E4A5C] font-semibold uppercase mt-0.5">
              Atelier &amp; Boutique
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5A5255]">
          <button
            onClick={() => onSelectCategory('dress')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1.5 cursor-pointer ${
              activeCategory === 'dress'
                ? 'text-[#8E4A5C] font-semibold border-b-2 border-[#8E4A5C]'
                : 'hover:text-[#1F1B1D]'
            }`}
          >
            공주 드레스
          </button>
          <button
            onClick={() => onSelectCategory('accessory')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1.5 cursor-pointer ${
              activeCategory === 'accessory'
                ? 'text-[#8E4A5C] font-semibold border-b-2 border-[#8E4A5C]'
                : 'hover:text-[#1F1B1D]'
            }`}
          >
            로열 악세사리
          </button>
          <button
            onClick={onOpenStylingRoom}
            className="whitespace-nowrap shrink-0 text-[#5A5255] hover:text-[#8E4A5C] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B5945B]" />
            <span>공주 코디 피팅룸</span>
          </button>
          <button
            onClick={onOpenSizeGuide}
            className="whitespace-nowrap shrink-0 text-[#5A5255] hover:text-[#8E4A5C] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Ruler className="w-3.5 h-3.5 text-[#8A8084]" />
            <span>사이즈 가이드</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action & Shortcuts */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenWishlist}
            className="p-2 sm:px-3 sm:py-2 text-[#5A5255] hover:text-[#8E4A5C] hover:bg-[#F3ECE6] rounded-full transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
            title="보석함 (위시리스트)"
          >
            <div className="relative">
              <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'text-[#8E4A5C] fill-[#8E4A5C]' : 'text-[#5A5255]'}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#8E4A5C] text-white text-[10px] font-bold rounded-full flex items-center justify-center tabular-nums">
                  {wishlistCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline">보석함</span>
          </button>

          <button
            onClick={onOpenCart}
            className="relative px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#8E4A5C] hover:bg-[#763A4B] rounded-full shadow-sm transition-all flex items-center gap-2 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>장바구니</span>
            {cartCount > 0 && (
              <span className="bg-[#FAF8F5] text-[#8E4A5C] text-xs px-1.5 py-0.5 rounded-full font-bold tabular-nums leading-none">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
