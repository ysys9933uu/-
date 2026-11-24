import React from 'react';
import { X, Heart, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../data/products';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  onRemoveFromWishlist: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (item: { product: Product; size: string; quantity: number }) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlist,
  onRemoveFromWishlist,
  onSelectProduct,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1F1B1D]/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#EAE3DC] max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#EFE9E2] text-[#8A8084] hover:text-[#1F1B1D] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-9 h-9 rounded-full bg-[#F7ECEF] text-[#8E4A5C] flex items-center justify-center">
            <Heart className="w-4 h-4 fill-[#8E4A5C]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#1F1B1D] font-serif-luxury">
              공주님의 보석함 (위시리스트)
            </h2>
            <p className="text-xs text-[#6E6568]">
              마음에 담아둔 드레스와 악세사리 {wishlist.length}개
            </p>
          </div>
        </div>

        {wishlist.length === 0 ? (
          <div className="py-12 text-center space-y-2">
            <Sparkles className="w-8 h-8 text-[#C8B9AE] mx-auto" />
            <p className="text-sm font-bold text-[#1F1B1D] font-serif-luxury">보석함이 아직 비어있어요.</p>
            <p className="text-xs text-[#6E6568]">하트(♡)를 눌러 좋아하는 아이템을 담아보세요.</p>
          </div>
        ) : (
          <div className="divide-y divide-[#F0EAE3]">
            {wishlist.map((item) => (
              <div key={item.id} className="py-4 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-20 rounded-xl object-cover bg-[#F5F1EC] shrink-0 cursor-pointer"
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                />

                <div className="flex-1 min-w-0">
                  <span className="text-[11px] text-[#8E4A5C] font-semibold">{item.color.name}</span>
                  <h4
                    onClick={() => {
                      onSelectProduct(item);
                      onClose();
                    }}
                    className="text-xs sm:text-sm font-bold text-[#1F1B1D] truncate hover:text-[#8E4A5C] cursor-pointer font-serif-luxury"
                  >
                    {item.name}
                  </h4>
                  <p className="text-xs font-bold text-[#1F1B1D] tabular-nums mt-0.5">
                    {item.price.toLocaleString()}원
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onAddToCart({
                        product: item,
                        size: item.sizes ? item.sizes[0] : 'Free',
                        quantity: 1,
                      });
                    }}
                    className="px-3.5 py-2 text-xs font-semibold text-white bg-[#8E4A5C] hover:bg-[#763A4B] rounded-full shadow-xs transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">담기</span>
                  </button>
                  <button
                    onClick={() => onRemoveFromWishlist(item)}
                    className="p-1.5 text-[#8A8084] hover:text-[#8E4A5C] rounded-full hover:bg-[#F5F1EC] transition-colors cursor-pointer"
                    title="삭제"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
