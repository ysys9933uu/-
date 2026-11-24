import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Star, Plus } from 'lucide-react';
import { Product, getColorImage } from '../data/products';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product, e: React.MouseEvent) => void;
  onQuickAdd: (product: Product, e: React.MouseEvent) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  isWishlisted,
  onToggleWishlist,
  onQuickAdd,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [activeColor, setActiveColor] = useState(product.color);

  useEffect(() => {
    setActiveColor(product.color);
    setImageError(false);
  }, [product.id, product.color.name]);

  const displayImage = getColorImage(product, activeColor);
  const activeProduct: Product = {
    ...product,
    color: activeColor,
    image: displayImage,
  };

  return (
    <div
      onClick={() => onSelect(activeProduct)}
      className="group relative bg-white rounded-2xl border border-[#EAE3DC]/90 overflow-hidden shadow-[0_2px_14px_rgba(31,27,29,0.04)] hover:shadow-[0_16px_32px_rgba(31,27,29,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
    >
      {/* Visual Image Container */}
      <div className="relative aspect-[3/4] w-full bg-[#F5F1EC] overflow-hidden flex items-center justify-center">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-tr from-[#EFE9E2] to-[#FAF8F5] animate-pulse flex items-center justify-center">
            <Sparkles className="w-7 h-7 text-[#C8B9AE]" />
          </div>
        )}

        {imageError ? (
          <div className="absolute inset-0 bg-gradient-to-tr from-[#EFE9E2] via-[#FAF8F5] to-[#F7ECEF] flex flex-col items-center justify-center p-4 text-center">
            <Sparkles className="w-9 h-9 text-[#8E4A5C] mb-2" />
            <span className="text-xs font-serif-luxury font-bold text-[#1F1B1D]">{product.name}</span>
            <span className="text-[11px] text-[#8E4A5C] mt-1">{activeColor.name}</span>
          </div>
        ) : (
          <img
            src={displayImage}
            alt={`${product.name} - ${activeColor.name}`}
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Floating Quick Action: Wishlist Heart */}
        <button
          type="button"
          onClick={(e) => onToggleWishlist(activeProduct, e)}
          className="absolute top-3.5 right-3.5 p-2 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm hover:bg-white text-[#6E6568] hover:text-[#8E4A5C] transition-colors z-10 cursor-pointer"
          aria-label="위시리스트 담기"
        >
          <Heart
            className={`w-4 h-4 transition-transform active:scale-125 ${
              isWishlisted ? 'text-[#8E4A5C] fill-[#8E4A5C]' : 'text-[#6E6568]'
            }`}
          />
        </button>

        {/* Subtle rating indicator */}
        <div className="absolute bottom-3.5 left-3.5 bg-[#FAF8F5]/92 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium text-[#262123] flex items-center gap-1 shadow-xs border border-[#EAE3DC]/60">
          <Star className="w-3 h-3 text-[#B5945B] fill-[#B5945B]" />
          <span className="tabular-nums font-semibold">{product.rating.toFixed(1)}</span>
          <span className="text-[#8A8084] tabular-nums">({product.reviewCount})</span>
        </div>

        {/* Quick Add Button on Hover */}
        <div className="absolute bottom-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            type="button"
            onClick={(e) => onQuickAdd(activeProduct, e)}
            className="p-2.5 rounded-full bg-[#8E4A5C] text-white shadow-md hover:bg-[#763A4B] transition-colors cursor-pointer"
            title="상세보기 & 바로담기"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-white">
        <div>
          {/* Unboxed Metadata with · separator */}
          <div className="flex items-center gap-1.5 text-[11px] text-[#8A8084] mb-1.5 font-medium tracking-wide">
            <span className="text-[#8E4A5C] font-semibold truncate max-w-[95px]">{activeColor.name}</span>
            <span aria-hidden="true" className="text-[#D4CBC2]">·</span>
            <span className="truncate">{product.materials[0]}</span>
          </div>

          {/* Product Name */}
          <h3 className="text-[15px] font-semibold text-[#1F1B1D] group-hover:text-[#8E4A5C] transition-colors line-clamp-1 mb-1 font-serif-luxury">
            {product.name}
          </h3>

          {/* Subtitle / Key Silhouette */}
          <p className="text-xs text-[#6E6568] line-clamp-1 mb-3 leading-relaxed">
            {product.subtitle}
          </p>

          {/* Minimalist Color Variants Swatches Row */}
          {product.availableColors && product.availableColors.length > 0 && (
            <div className="flex items-center gap-2 mb-3.5 py-1">
              <div className="flex items-center gap-1.5 shrink-0">
                {product.availableColors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveColor(c);
                      setImageError(false);
                    }}
                    title={c.name}
                    aria-label={`${c.name} 색상 보기`}
                    className={`w-4 h-4 rounded-full border transition-all cursor-pointer ${
                      activeColor.name === c.name
                        ? 'ring-2 ring-[#8E4A5C] ring-offset-1 scale-110 border-white shadow-xs'
                        : 'border-[#D4CBC2] hover:scale-110 opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
              <span className="text-[11px] text-[#8A8084] truncate">
                {product.availableColors.length} colors
              </span>
            </div>
          )}
        </div>

        {/* Price & Sparkle Level */}
        <div className="pt-3 border-t border-[#F0EAE3] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-[#1F1B1D] tabular-nums">
              {product.price.toLocaleString()}원
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#A3999C] line-through tabular-nums">
                {product.originalPrice.toLocaleString()}원
              </span>
            )}
          </div>

          {/* Champagne Gold Sparkle Rating */}
          <div className="flex items-center gap-0.5" title={`반짝임 지수: ${product.sparkleLevel}/5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Sparkles
                key={i}
                className={`w-3 h-3 ${
                  i < product.sparkleLevel ? 'text-[#B5945B] fill-[#D4B483]' : 'text-[#E8E0D8]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
