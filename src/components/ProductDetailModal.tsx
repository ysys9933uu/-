import React, { useState, useEffect } from 'react';
import { 
  X, Sparkles, Heart, Star, ShieldCheck, Ruler, 
  ShoppingBag, Check, ArrowRight, Wand2, RefreshCw 
} from 'lucide-react';
import { Product, ColorOption, getColorImage, getSimilarProducts, getMatchingAccessories } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (item: { product: Product; size: string; quantity: number }) => void;
  onAddBundleToCart: (items: { product: Product; size: string; quantity: number }[]) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onOpenSizeGuide: () => void;
  onOpenStylingRoomWithProduct?: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = (props) => {
  if (!props.product) return null;
  return <ProductDetailModalContent {...props} product={props.product} />;
};

const ProductDetailModalContent: React.FC<Omit<ProductDetailModalProps, 'product'> & { product: Product }> = ({
  product,
  onClose,
  onSelectProduct,
  onAddToCart,
  onAddBundleToCart,
  isWishlisted,
  onToggleWishlist,
  onOpenSizeGuide,
  onOpenStylingRoomWithProduct,
}) => {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(product.color);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes ? product.sizes[0] : 'Free');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'similar' | 'accessories' | 'details'>('similar');
  const [addedToast, setAddedToast] = useState(false);

  // Compute similar products and matching accessories
  const similarProducts = getSimilarProducts(product);
  const matchingAccessories = getMatchingAccessories(product);

  const displayImage = getColorImage(product, selectedColor);

  // Reset selected accessories and sync color when product changes
  useEffect(() => {
    setSelectedColor(product.color);
    if (product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    } else {
      setSelectedSize('Free');
    }
    setQuantity(1);
    if (matchingAccessories.length > 0) {
      setSelectedAccessories([matchingAccessories[0].id]);
    } else {
      setSelectedAccessories([]);
    }
  }, [product.id, product.color.name]);

  const toggleAccessory = (accId: string) => {
    setSelectedAccessories(prev => 
      prev.includes(accId) ? prev.filter(id => id !== accId) : [...prev, accId]
    );
  };

  // Calculate bundle pricing
  const chosenAccessoryItems = matchingAccessories.filter(a => selectedAccessories.includes(a.id));
  const accessoriesSubtotal = chosenAccessoryItems.reduce((acc, curr) => acc + curr.price, 0);
  const bundleOriginalTotal = product.price + accessoriesSubtotal;
  const bundleDiscount = chosenAccessoryItems.length > 0 ? Math.round(bundleOriginalTotal * 0.1) : 0;
  const bundleFinalPrice = bundleOriginalTotal - bundleDiscount;

  const activeProduct: Product = {
    ...product,
    color: selectedColor,
    image: displayImage,
  };

  const handleBuySingle = () => {
    onAddToCart({ product: activeProduct, size: selectedSize, quantity });
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2200);
  };

  const handleBuyBundle = () => {
    const items = [
      { product: activeProduct, size: selectedSize, quantity },
      ...chosenAccessoryItems.map(acc => ({
        product: acc,
        size: acc.sizes ? acc.sizes[0] : 'Free',
        quantity: 1
      }))
    ];
    onAddBundleToCart(items);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1F1B1D]/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      <div
        className="relative bg-[#FAF8F5] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E8E0D8] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/95 hover:bg-[#F5F1EC] text-[#6E6568] hover:text-[#1F1B1D] shadow-sm border border-[#EAE3DC] transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Added Notification Toast */}
        {addedToast && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-[#8E4A5C] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-xl flex items-center gap-2 animate-bounce">
            <Check className="w-4 h-4" />
            <span>장바구니에 상품이 담겼습니다.</span>
          </div>
        )}

        <div className="p-5 sm:p-7 lg:p-9 bg-white rounded-3xl">
          {/* Main Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-7 lg:gap-9 items-start">

            {/* Gallery Left */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#F5F1EC] border border-[#EAE3DC] shadow-inner group">
                <img
                  src={displayImage}
                  alt={`${product.name} - ${selectedColor.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                />
                <button
                  type="button"
                  onClick={() => onToggleWishlist(activeProduct)}
                  className="absolute top-3.5 left-3.5 p-2.5 rounded-full bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm text-[#6E6568] hover:text-[#8E4A5C] transition-colors cursor-pointer"
                  title="위시리스트"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isWishlisted ? 'text-[#8E4A5C] fill-[#8E4A5C]' : 'text-[#6E6568]'
                    }`}
                  />
                </button>

                <div className="absolute bottom-3.5 right-3.5 bg-[#FAF8F5]/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#1F1B1D] shadow-xs border border-[#EAE3DC] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B5945B] fill-[#D4B483]" />
                  <span>반짝임 {product.sparkleLevel}/5</span>
                </div>
              </div>

              {/* Safety & Fabric Assurance */}
              <div className="bg-[#FAF8F5] rounded-xl p-3.5 border border-[#EAE3DC] text-xs text-[#5A5255] space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-[#5D7B6F]">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{product.lining}</span>
                </div>
                <p className="text-[11px] text-[#6E6568] pl-5">
                  가려움 걱정 없이 하루 종일 편안한 피부 친화적 프리미엄 봉제입니다.
                </p>
              </div>
            </div>

            {/* Contiguous Purchase Module Right */}
            <div className="md:col-span-7 space-y-4">
              {/* Unboxed Metadata */}
              <div className="flex items-center gap-2 text-xs text-[#8A8084] font-medium">
                <span className="text-[#8E4A5C] font-semibold">{selectedColor.name}</span>
                <span aria-hidden="true" className="text-[#D4CBC2]">·</span>
                <span>{product.materials[0]}</span>
                {product.silhouette && (
                  <>
                    <span aria-hidden="true" className="text-[#D4CBC2]">·</span>
                    <span>{product.silhouette}</span>
                  </>
                )}
              </div>

              {/* Title & Subtitle */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1F1B1D] font-serif-luxury">
                  {product.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#6E6568] mt-1.5 leading-relaxed">
                  {product.subtitle}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 text-xs">
                <div className="flex items-center text-[#B5945B]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating) ? 'fill-[#B5945B]' : 'text-[#E8E0D8]'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-[#1F1B1D] tabular-nums">{product.rating}</span>
                <span className="text-[#8A8084]">({product.reviewCount}개의 구매 후기)</span>
              </div>

              {/* Price */}
              <div className="py-3 border-y border-[#F0EAE3] flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-[#1F1B1D] tabular-nums">
                  {product.price.toLocaleString()}원
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-sm text-[#A3999C] line-through tabular-nums">
                      {product.originalPrice.toLocaleString()}원
                    </span>
                    <span className="text-xs font-semibold text-[#8E4A5C] bg-[#F7ECEF] px-2.5 py-0.5 rounded-full">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% 아틀리에 혜택
                    </span>
                  </>
                )}
              </div>

              {/* Color Selection */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#1F1B1D] flex items-center gap-1.5">
                    <span>컬러 선택:</span>
                    <span className="text-[#8E4A5C] font-bold">{selectedColor.name}</span>
                  </span>
                  <span className="text-[11px] text-[#8A8084]">
                    {product.availableColors && product.availableColors.length > 0
                      ? `${product.availableColors.length}가지 컬러 옵션`
                      : '단독 컬러'}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(product.availableColors && product.availableColors.length > 0
                    ? product.availableColors
                    : [product.color]
                  ).map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-2 border transition-all cursor-pointer ${
                        selectedColor.name === c.name
                          ? 'border-[#8E4A5C] bg-[#F7ECEF] text-[#4A2530] font-semibold ring-1 ring-[#8E4A5C] shadow-xs'
                          : 'border-[#E6DDD5] bg-white text-[#5A5255] hover:border-[#8E4A5C]/40 hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-[#D4CBC2] shadow-inner shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                      {selectedColor.name === c.name && (
                        <Check className="w-3.5 h-3.5 text-[#8E4A5C] ml-0.5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#1F1B1D]">사이즈 선택</span>
                    <button
                      type="button"
                      onClick={onOpenSizeGuide}
                      className="text-[#8E4A5C] hover:text-[#763A4B] font-medium flex items-center gap-1 underline underline-offset-2 cursor-pointer"
                    >
                      <Ruler className="w-3.5 h-3.5" />
                      <span>키/나이별 사이즈표</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3 py-2 text-xs font-medium rounded-xl border text-left transition-all cursor-pointer ${
                          selectedSize === sz
                            ? 'border-[#8E4A5C] bg-[#F7ECEF] text-[#4A2530] font-semibold shadow-2xs ring-1 ring-[#8E4A5C]'
                            : 'border-[#E6DDD5] hover:border-[#8E4A5C]/40 text-[#5A5255] bg-white'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Stepper & Actions */}
              <div className="pt-3 flex items-center gap-3">
                <div className="flex items-center border border-[#E6DDD5] rounded-full overflow-hidden bg-[#FAF8F5]">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-3.5 py-2.5 text-[#5A5255] hover:bg-[#EFE9E2] text-sm font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 py-2.5 text-xs font-bold text-[#1F1B1D] tabular-nums min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-3.5 py-2.5 text-[#5A5255] hover:bg-[#EFE9E2] text-sm font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleBuySingle}
                  className="flex-1 py-3.5 px-5 text-sm font-semibold text-white bg-[#8E4A5C] hover:bg-[#763A4B] rounded-full shadow-md flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>단품 장바구니 담기</span>
                </button>

                {onOpenStylingRoomWithProduct && product.category === 'dress' && (
                  <button
                    type="button"
                    onClick={() => onOpenStylingRoomWithProduct(activeProduct)}
                    className="p-3.5 text-[#8E4A5C] bg-[#F7ECEF] hover:bg-[#EEDDE2] rounded-full border border-[#DFC6CE] transition-colors cursor-pointer"
                    title="피팅룸에서 코디해보기"
                  >
                    <Wand2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Section Navigation Tabs */}
          <div className="mt-10 pt-7 border-t border-[#EAE3DC]">
            <div className="flex items-center gap-1.5 p-1 bg-[#F4EFEA] rounded-xl max-w-md mx-auto mb-7">
              <button
                type="button"
                onClick={() => setActiveTab('similar')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'similar'
                    ? 'bg-white text-[#1F1B1D] shadow-xs'
                    : 'text-[#6E6568] hover:text-[#1F1B1D]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#8E4A5C]" />
                <span>비슷한 스타일 추천</span>
              </button>
              {product.category === 'dress' && (
                <button
                  type="button"
                  onClick={() => setActiveTab('accessories')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'accessories'
                      ? 'bg-white text-[#1F1B1D] shadow-xs'
                      : 'text-[#6E6568] hover:text-[#1F1B1D]'
                  }`}
                >
                  <Wand2 className="w-3.5 h-3.5 text-[#8E4A5C]" />
                  <span>어울리는 악세사리</span>
                </button>
              )}
              <button
                type="button"
                onClick={() => setActiveTab('details')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'details'
                    ? 'bg-white text-[#1F1B1D] shadow-xs'
                    : 'text-[#6E6568] hover:text-[#1F1B1D]'
                }`}
              >
                <span>상세 &amp; 안감 정보</span>
              </button>
            </div>

            {/* TAB 1: Similar Styles */}
            {activeTab === 'similar' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-[#1F1B1D] font-serif-luxury flex items-center gap-2">
                      <span>이 상품과 색상 · 소재 · 분위기가 닮은 추천</span>
                      <span className="text-[11px] font-sans text-[#8E4A5C] font-semibold bg-[#F7ECEF] px-2.5 py-0.5 rounded-full">
                        큐레이션
                      </span>
                    </h3>
                    <p className="text-xs text-[#6E6568] mt-1">
                      {product.name}의 {selectedColor.name} 톤과 {product.materials[0]} 감성을 고려한 아틀리에 추천입니다.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {similarProducts.map(({ product: sim, score, reasons }) => (
                    <div
                      key={sim.id}
                      onClick={() => onSelectProduct(sim)}
                      className="group p-3 bg-white rounded-2xl border border-[#EAE3DC] hover:border-[#8E4A5C]/40 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#F5F1EC] mb-2.5">
                        <img
                          src={sim.image}
                          alt={sim.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2 bg-[#1F1B1D]/80 backdrop-blur-sm text-[#FAF8F5] px-2 py-0.5 rounded-full text-[10px] font-medium shadow-xs">
                          {score}% 매칭
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <h4 className="text-xs font-bold text-[#1F1B1D] line-clamp-1 group-hover:text-[#8E4A5C] transition-colors font-serif-luxury">
                          {sim.name}
                        </h4>

                        <div className="space-y-0.5">
                          {reasons.map((r, i) => (
                            <div key={i} className="text-[10px] text-[#8E4A5C] flex items-center gap-1 font-medium">
                              <span className="w-1 h-1 rounded-full bg-[#8E4A5C]" />
                              <span className="truncate">{r}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 flex items-center justify-between border-t border-[#F0EAE3]">
                          <span className="text-xs font-bold text-[#1F1B1D] tabular-nums">
                            {sim.price.toLocaleString()}원
                          </span>
                          <span className="text-[11px] text-[#8E4A5C] font-semibold group-hover:translate-x-0.5 transition-transform flex items-center">
                            보기 <ArrowRight className="w-3 h-3 ml-0.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: Matching Accessories */}
            {activeTab === 'accessories' && product.category === 'dress' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-[#1F1B1D] font-serif-luxury">
                    함께하면 완벽한 로열 풀세트 악세사리
                  </h3>
                  <p className="text-xs text-[#6E6568] mt-1">
                    디자이너가 이 드레스에 꼭 맞게 큐레이션한 티아라, 목걸이, 귀찌, 팔찌, 슈즈입니다. 함께 담으시면 10% 세트 할인이 적용됩니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {matchingAccessories.map((acc) => {
                    const isChecked = selectedAccessories.includes(acc.id);
                    return (
                      <div
                        key={acc.id}
                        onClick={() => toggleAccessory(acc.id)}
                        className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isChecked
                            ? 'border-[#8E4A5C] bg-[#F7ECEF]/60 shadow-sm ring-1 ring-[#8E4A5C]'
                            : 'border-[#EAE3DC] bg-white hover:border-[#8E4A5C]/40'
                        }`}
                      >
                        <div>
                          <div className="relative aspect-square rounded-xl overflow-hidden bg-[#F5F1EC] mb-2">
                            <img
                              src={acc.image}
                              alt={acc.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 right-2">
                              <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                                  isChecked
                                    ? 'bg-[#8E4A5C] text-white'
                                    : 'bg-white/90 border border-[#D4CBC2]'
                                }`}
                              >
                                {isChecked && <Check className="w-3.5 h-3.5" />}
                              </div>
                            </div>
                          </div>

                          <h4 className="text-xs font-bold text-[#1F1B1D] line-clamp-1 mb-1">
                            {acc.name}
                          </h4>
                          <p className="text-[11px] text-[#6E6568] line-clamp-1">
                            {acc.subtitle}
                          </p>
                        </div>

                        <div className="pt-2 mt-2 border-t border-[#F0EAE3] flex items-center justify-between">
                          <span className="text-xs font-bold text-[#1F1B1D] tabular-nums">
                            +{acc.price.toLocaleString()}원
                          </span>
                          <span className={`text-[10px] font-semibold ${isChecked ? 'text-[#8E4A5C]' : 'text-[#8A8084]'}`}>
                            {isChecked ? '선택됨' : '선택하기'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bundle Buy Action Banner */}
                <div className="bg-gradient-to-r from-[#F7ECEF] via-[#FAF8F5] to-[#F3ECE6] border border-[#DFC6CE] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <span className="text-xs font-bold text-[#4A2530]">
                        {product.name} + 악세사리 {chosenAccessoryItems.length}종
                      </span>
                      {chosenAccessoryItems.length > 0 && (
                        <span className="text-[10px] font-semibold bg-[#8E4A5C] text-white px-2.5 py-0.5 rounded-full">
                          10% 세트 혜택
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                      <span className="text-lg font-bold text-[#1F1B1D] tabular-nums">
                        {bundleFinalPrice.toLocaleString()}원
                      </span>
                      {chosenAccessoryItems.length > 0 && (
                        <span className="text-xs text-[#A3999C] line-through tabular-nums">
                          {bundleOriginalTotal.toLocaleString()}원
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleBuyBundle}
                    className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#8E4A5C] hover:bg-[#763A4B] rounded-full shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>로열 세트로 한 번에 담기</span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB 3: Fabric, Care & Details */}
            {activeTab === 'details' && (
              <div className="space-y-4 text-xs text-[#5A5255]">
                <div className="bg-[#FAF8F5] rounded-2xl border border-[#EAE3DC] p-5 space-y-3">
                  <h4 className="font-bold text-[#1F1B1D] text-sm font-serif-luxury">
                    어린이를 생각한 프리미엄 제작 디테일
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#8E4A5C] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#FAF8F5] rounded-2xl border border-[#EAE3DC] p-4">
                    <span className="font-bold text-[#1F1B1D] block mb-1">소재 정보</span>
                    <p className="text-[#5A5255]">{product.materials.join(', ')}</p>
                    <p className="text-[#8E4A5C] font-medium mt-1">안감: {product.lining}</p>
                  </div>
                  <div className="bg-[#FAF8F5] rounded-2xl border border-[#EAE3DC] p-4">
                    <span className="font-bold text-[#1F1B1D] block mb-1">세탁 및 보관 방법</span>
                    <p className="text-[#5A5255]">{product.fabricCare}</p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};
