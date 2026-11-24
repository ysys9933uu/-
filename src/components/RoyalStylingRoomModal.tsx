import React, { useState, useEffect } from 'react';
import { X, Sparkles, Crown, Wand2, ShoppingBag, Check, Heart, RefreshCw } from 'lucide-react';
import { Product, PRODUCTS, getColorImage } from '../data/products';

interface RoyalStylingRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDress?: Product;
  onAddStylingToCart: (items: { product: Product; size: string; quantity: number }[]) => void;
}

export const RoyalStylingRoomModal: React.FC<RoyalStylingRoomModalProps> = (props) => {
  if (!props.isOpen) return null;
  return <RoyalStylingRoomModalContent {...props} />;
};

const RoyalStylingRoomModalContent: React.FC<RoyalStylingRoomModalProps> = ({
  isOpen,
  onClose,
  initialDress,
  onAddStylingToCart,
}) => {
  const dresses = PRODUCTS.filter(p => p.category === 'dress');
  const accessories = PRODUCTS.filter(p => p.category === 'accessory');

  // Currently selected dress
  const [selectedDress, setSelectedDress] = useState<Product>(
    initialDress && initialDress.category === 'dress' ? initialDress : dresses[0]
  );

  useEffect(() => {
    if (initialDress && initialDress.category === 'dress') {
      setSelectedDress(initialDress);
    }
  }, [initialDress?.id, initialDress?.color.name]);

  // Selected accessories
  const [selectedAccessoryIds, setSelectedAccessoryIds] = useState<string[]>([
    'acc-royal-tiara-wand',
    'acc-heart-necklace',
    'acc-crown-earrings',
    'acc-glass-slippers'
  ]);

  const [sparkleTrigger, setSparkleTrigger] = useState(0);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const toggleAccessory = (id: string) => {
    setSelectedAccessoryIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
    setSparkleTrigger(prev => prev + 1);
  };

  const selectedAccessories = accessories.filter(a => selectedAccessoryIds.includes(a.id));

  // Pricing
  const dressPrice = selectedDress.price;
  const accessoriesPrice = selectedAccessories.reduce((sum, a) => sum + a.price, 0);
  const totalOriginal = dressPrice + accessoriesPrice;
  const setDiscount = Math.round(totalOriginal * 0.12); // 12% styling discount!
  const finalPrice = totalOriginal - setDiscount;

  // Royal title generation
  const getRoyalLookTitle = () => {
    if (selectedDress.id.includes('cinderella')) return '🕛 12시 자정 무도회의 눈부신 신데렐라 공주님';
    if (selectedDress.id.includes('christmas')) return '🎄 크리스마스 무도회의 눈부신 루돌프 공주님';
    if (selectedDress.id.includes('aurora')) return '로맨틱 장미 정원의 로열 오로라 공주님';
    if (selectedDress.id.includes('ice')) return '신비로운 겨울 별빛의 크리스탈 공주님';
    if (selectedDress.id.includes('strawberry')) return '달콤한 딸기 궁전의 사랑스러운 요정님';
    if (selectedDress.id.includes('mermaid')) return '🌊 에메랄드 바닷속 신비로운 인어공주님';
    if (selectedDress.id.includes('galaxy') || selectedDress.id.includes('midnight')) return '🌌 밤하늘 은하수와 별빛을 담은 로열 공주님';
    if (selectedDress.id.includes('forest') || selectedDress.id.includes('emerald')) return '🍃 숲속에서 춤추는 싱그러운 팅커벨 요정님';
    if (selectedDress.id.includes('cherry')) return '🌸 살랑이는 봄날의 벚꽃 사쿠라 공주님';
    if (selectedDress.id.includes('lavender')) return '몽환적인 보랏빛 나비 숲의 공주님';
    if (selectedDress.id.includes('belle')) return '황실 무도회의 눈부신 벨로열 공주님';
    if (selectedDress.id.includes('swan')) return '순백의 호수 위 우아한 백조 발레리나 공주님';
    if (selectedDress.id.includes('peach')) return '향긋한 봄날의 피치 티파티 공주님';
    return '세상에서 가장 아름다운 로열 공주님';
  };

  const dressDisplayImage = getColorImage(selectedDress, selectedDress.color);

  const handleAddToCart = () => {
    const items = [
      {
        product: { ...selectedDress, image: dressDisplayImage },
        size: selectedDress.sizes ? selectedDress.sizes[0] : '110 (4-5세)',
        quantity: 1
      },
      ...selectedAccessories.map(acc => ({
        product: acc,
        size: acc.sizes ? acc.sizes[0] : 'Free',
        quantity: 1
      }))
    ];
    onAddStylingToCart(items);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1F1B1D]/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      <div
        className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#EAE3DC] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#FAF8F5]/95 backdrop-blur-md px-6 py-4 border-b border-[#E8E0D8] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#F7ECEF] text-[#8E4A5C] flex items-center justify-center">
              <Crown className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1F1B1D] font-serif-luxury">
                공주 코디 피팅룸 (Royal Dressing Room)
              </h2>
              <p className="text-xs text-[#6E6568]">
                마음에 드는 드레스에 티아라와 요술봉, 구두를 자유롭게 매치해보세요.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EFE9E2] text-[#8A8084] hover:text-[#1F1B1D] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 lg:p-9">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-start">

            {/* Left: Interactive Royal Mannequin Showcase */}
            <div className="lg:col-span-6 bg-gradient-to-b from-[#FAF8F5] via-[#F7F3EE] to-[#F3EDE6] rounded-3xl p-6 border border-[#E6DDD5] shadow-inner flex flex-col items-center justify-between min-h-[460px] relative overflow-hidden">
              <div className="absolute top-4 left-4 text-[#C99AA5] opacity-70">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="absolute top-8 right-6 text-[#B5945B] opacity-80">
                <Sparkles className="w-6 h-6" />
              </div>

              {/* Title Card */}
              <div className="text-center z-10 mb-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-xs border border-[#EAE3DC]">
                <span className="text-[10px] font-semibold text-[#8E4A5C] uppercase tracking-[0.2em] block">
                  TODAY&apos;S ATELIER LOOK
                </span>
                <span className="text-sm sm:text-base font-bold text-[#1F1B1D] font-serif-luxury">
                  {getRoyalLookTitle()}
                </span>
              </div>

              {/* Central Dress Display */}
              <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white my-auto group">
                <img
                  src={dressDisplayImage}
                  alt={`${selectedDress.name} - ${selectedDress.color.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />

                {/* Coordinated Accessories Pill Badges */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap gap-1 justify-center">
                  {selectedAccessories.map(acc => (
                    <span
                      key={acc.id}
                      className="bg-[#FAF8F5]/95 backdrop-blur-md text-[10px] font-semibold text-[#763A4B] px-2.5 py-0.5 rounded-full shadow-xs border border-[#E6DDD5] flex items-center gap-1"
                    >
                      <Sparkles className="w-2.5 h-2.5 text-[#B5945B]" />
                      <span className="truncate max-w-[120px]">{acc.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Summary Bar */}
              <div className="w-full mt-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#EAE3DC] shadow-sm flex items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-[#6E6568]">풀세트 총 {1 + selectedAccessories.length}개 상품</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg sm:text-xl font-bold text-[#1F1B1D] tabular-nums">
                      {finalPrice.toLocaleString()}원
                    </span>
                    <span className="text-xs text-[#A3999C] line-through tabular-nums">
                      {totalOriginal.toLocaleString()}원
                    </span>
                    <span className="text-[10px] font-semibold text-[#8E4A5C] bg-[#F7ECEF] px-2 py-0.5 rounded-full">
                      12% 혜택
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={addedSuccess}
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#8E4A5C] hover:bg-[#763A4B] rounded-full shadow-sm transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>담기 완료</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>이 코디 담기</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right: Picker Controls */}
            <div className="lg:col-span-6 space-y-6">

              {/* Step 1: Select Dress */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-[#1F1B1D] flex items-center gap-2 font-serif-luxury">
                    <span className="w-5 h-5 rounded-full bg-[#8E4A5C] text-white text-[11px] font-sans font-bold flex items-center justify-center">
                      1
                    </span>
                    <span>공주 드레스 선택</span>
                  </h3>
                  <span className="text-xs text-[#8E4A5C] font-semibold truncate max-w-[180px]">{selectedDress.name}</span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 max-h-48 overflow-y-auto pr-1">
                  {dresses.map(dress => {
                    const isSelected = selectedDress.id === dress.id;
                    return (
                      <div
                        key={dress.id}
                        onClick={() => {
                          setSelectedDress(dress);
                          setSparkleTrigger(prev => prev + 1);
                        }}
                        className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#8E4A5C] bg-[#F7ECEF]/60 shadow-xs ring-1 ring-[#8E4A5C]'
                            : 'border-[#EAE3DC] hover:border-[#8E4A5C]/40 bg-white'
                        }`}
                      >
                        <div className="aspect-square rounded-lg overflow-hidden bg-[#F5F1EC] mb-1.5">
                          <img
                            src={dress.image}
                            alt={dress.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-[11px] font-semibold text-[#1F1B1D] truncate">{dress.name}</p>
                        <p className="text-[10px] text-[#6E6568] tabular-nums">{dress.price.toLocaleString()}원</p>
                      </div>
                    );
                  })}
                </div>

                {/* Step 1-2: Dress Color Variant */}
                {selectedDress.availableColors && selectedDress.availableColors.length > 0 && (
                  <div className="mt-3 p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE3DC] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-[#5A5255]">선택 컬러:</span>
                      <span className="text-xs font-bold text-[#8E4A5C]">{selectedDress.color.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {selectedDress.availableColors.map(c => (
                        <button
                          key={c.name}
                          type="button"
                          onClick={() => {
                            setSelectedDress({
                              ...selectedDress,
                              color: c,
                              image: getColorImage(selectedDress, c),
                            });
                            setSparkleTrigger(prev => prev + 1);
                          }}
                          className={`w-5 h-5 rounded-full border transition-all cursor-pointer ${
                            selectedDress.color.name === c.name
                              ? 'ring-2 ring-[#8E4A5C] ring-offset-1 scale-115 border-white shadow-xs'
                              : 'border-[#D4CBC2] opacity-80 hover:opacity-100 hover:scale-110'
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Step 2: Select Accessories */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-[#1F1B1D] flex items-center gap-2 font-serif-luxury">
                    <span className="w-5 h-5 rounded-full bg-[#8E4A5C] text-white text-[11px] font-sans font-bold flex items-center justify-center">
                      2
                    </span>
                    <span>어울리는 악세사리 추가 (다중 선택)</span>
                  </h3>
                  <span className="text-xs text-[#6E6568]">{selectedAccessories.length}개 선택</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 max-h-60 overflow-y-auto pr-1">
                  {accessories.map(acc => {
                    const isChecked = selectedAccessoryIds.includes(acc.id);
                    return (
                      <div
                        key={acc.id}
                        onClick={() => toggleAccessory(acc.id)}
                        className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center gap-2.5 ${
                          isChecked
                            ? 'border-[#8E4A5C] bg-[#F7ECEF]/60 shadow-2xs ring-1 ring-[#8E4A5C]'
                            : 'border-[#EAE3DC] bg-white hover:border-[#8E4A5C]/40'
                        }`}
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#F5F1EC] shrink-0">
                          <img
                            src={acc.image}
                            alt={acc.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-[#1F1B1D] truncate">{acc.name}</p>
                          <p className="text-[11px] text-[#8E4A5C] tabular-nums">+{acc.price.toLocaleString()}원</p>
                        </div>

                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            isChecked
                              ? 'bg-[#8E4A5C] text-white'
                              : 'border border-[#D4CBC2] bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
