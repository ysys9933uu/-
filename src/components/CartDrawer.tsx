import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Sparkles, Gift, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Product } from '../data/products';

export interface CartItem {
  id: string; // unique item id (product.id + size)
  product: Product;
  size: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [giftBox, setGiftBox] = useState(true);
  const [princessLetter, setPrincessLetter] = useState(true);
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 50000;
  const isFreeShipping = subtotal >= freeShippingThreshold || items.length === 0;
  const shippingFee = isFreeShipping ? 0 : 3000;
  const discountAmount = Math.round(subtotal * appliedDiscount);
  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'PRINCESS' || code === 'ROYAL' || code === 'PRINCESS2026') {
      setAppliedDiscount(0.1);
      setCouponSuccess('공주님 환영 10% 로열 할인 쿠폰이 적용되었습니다!');
      setCouponError('');
    } else {
      setCouponError('유효하지 않은 쿠폰입니다. (체험 쿠폰: PRINCESS)');
      setCouponSuccess('');
    }
  };

  const handleCheckout = () => {
    const randomId = 'RP-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomId);
    setOrderComplete(true);
  };

  const handleFinishOrder = () => {
    setOrderComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#1F1B1D]/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div
          className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#E8E0D8]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#EAE3DC] flex items-center justify-between bg-[#FAF8F5]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#8E4A5C]" />
              <h2 className="text-base sm:text-lg font-bold text-[#1F1B1D] font-serif-luxury">
                쇼핑 백 ({items.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#8A8084] hover:text-[#1F1B1D] rounded-full hover:bg-[#EFE9E2] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="px-6 py-3 bg-[#F7F3EE] border-b border-[#EAE3DC] text-xs text-[#5A5255]">
            {subtotal >= freeShippingThreshold ? (
              <div className="flex items-center gap-1.5 font-semibold text-[#763A4B]">
                <Sparkles className="w-3.5 h-3.5 text-[#B5945B]" />
                <span>무료 배송 혜택이 적용되었습니다.</span>
              </div>
            ) : (
              <div>
                <p>
                  <span className="font-bold text-[#8E4A5C] tabular-nums">
                    {(freeShippingThreshold - subtotal).toLocaleString()}원
                  </span>{' '}
                  추가 구매 시 무료 배송
                </p>
                <div className="w-full bg-[#E6DDD5] rounded-full h-1.5 mt-1.5 overflow-hidden">
                  <div
                    className="bg-[#8E4A5C] h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#F5F1EC] text-[#8E4A5C] flex items-center justify-center">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <p className="text-sm font-bold text-[#1F1B1D] font-serif-luxury">
                  장바구니가 비어 있습니다.
                </p>
                <p className="text-xs text-[#6E6568]">
                  예쁜 공주 드레스와 반짝이는 티아라를 담아보세요.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3.5 p-3.5 bg-[#FAF8F5] rounded-2xl border border-[#EAE3DC]"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-20 rounded-xl object-cover bg-[#EFE9E2] shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-bold text-[#1F1B1D] line-clamp-1 font-serif-luxury">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#8A8084] hover:text-[#8E4A5C] p-0.5 cursor-pointer"
                          title="삭제"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#6E6568] mt-1">
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-[#D4CBC2] shrink-0"
                          style={{ backgroundColor: item.product.color.hex }}
                          title={item.product.color.name}
                        />
                        <span className="text-[#8E4A5C] font-medium truncate max-w-[120px]">{item.product.color.name}</span>
                        <span className="text-[#D4CBC2]">·</span>
                        <span className="text-[#6E6568]">{item.size}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs font-bold text-[#1F1B1D] tabular-nums">
                        {(item.product.price * item.quantity).toLocaleString()}원
                      </span>

                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#DFD6CE] rounded-full overflow-hidden bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="px-2.5 py-0.5 text-xs font-bold text-[#5A5255] hover:bg-[#F5F1EC] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 text-[11px] font-bold text-[#1F1B1D] tabular-nums min-w-[1.2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="px-2.5 py-0.5 text-xs font-bold text-[#5A5255] hover:bg-[#F5F1EC] cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Gift Options Package Toggle */}
            {items.length > 0 && (
              <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-[#EAE3DC] space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#1F1B1D]">
                  <Gift className="w-4 h-4 text-[#8E4A5C]" />
                  <span>아틀리에 시그니처 무료 선물 패키지</span>
                </div>

                <label className="flex items-center gap-2 text-xs text-[#5A5255] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={giftBox}
                    onChange={(e) => setGiftBox(e.target.checked)}
                    className="accent-[#8E4A5C] rounded"
                  />
                  <span>시그니처 새틴 리본 선물상자 (무료)</span>
                </label>

                <label className="flex items-center gap-2 text-xs text-[#5A5255] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={princessLetter}
                    onChange={(e) => setPrincessLetter(e.target.checked)}
                    className="accent-[#8E4A5C] rounded"
                  />
                  <span>공주 임명장 &amp; 초대장 레터 카드 (무료 동봉)</span>
                </label>

                <label className="flex items-center gap-2 text-xs text-[#763A4B] cursor-pointer font-medium">
                  <input
                    type="checkbox"
                    defaultChecked={true}
                    className="accent-[#8E4A5C] rounded"
                  />
                  <span>홀리데이 스페셜 태그 &amp; 벨벳 리본 (시즌 무료)</span>
                </label>
              </div>
            )}

            {/* Coupon Code Input */}
            {items.length > 0 && (
              <form onSubmit={handleApplyCoupon} className="space-y-1.5 pt-1">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="쿠폰 코드 (힌트: PRINCESS)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-3.5 py-2 text-xs border border-[#DFD6CE] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#8E4A5C] bg-white text-[#1F1B1D]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-[#763A4B] bg-[#F7ECEF] hover:bg-[#EEDDE2] rounded-xl transition-colors whitespace-nowrap cursor-pointer"
                  >
                    적용
                  </button>
                </div>
                {couponSuccess && (
                  <p className="text-[11px] text-[#5D7B6F] font-semibold">{couponSuccess}</p>
                )}
                {couponError && (
                  <p className="text-[11px] text-[#8E4A5C]">{couponError}</p>
                )}
              </form>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-[#EAE3DC] bg-[#FAF8F5] space-y-3.5">
              <div className="space-y-1.5 text-xs text-[#5A5255]">
                <div className="flex justify-between">
                  <span>상품 금액</span>
                  <span className="tabular-nums">{subtotal.toLocaleString()}원</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-[#8E4A5C] font-semibold">
                    <span>쿠폰 할인 (10%)</span>
                    <span className="tabular-nums">-{discountAmount.toLocaleString()}원</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>배송비</span>
                  <span className="tabular-nums">
                    {shippingFee === 0 ? '무료' : `${shippingFee.toLocaleString()}원`}
                  </span>
                </div>
                <div className="pt-2.5 border-t border-[#E6DDD5] flex justify-between items-baseline font-bold text-[#1F1B1D] text-sm">
                  <span>최종 결제 금액</span>
                  <span className="text-xl text-[#8E4A5C] tabular-nums">
                    {total.toLocaleString()}원
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 px-4 text-sm font-semibold text-white bg-[#8E4A5C] hover:bg-[#763A4B] rounded-full shadow-md transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
              >
                <span>주문하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8A8084]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5D7B6F]" />
                <span>안심 결제 &amp; 당일 아틀리에 출고</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Simulated Order Confirmation Dialog */}
      {orderComplete && (
        <div className="fixed inset-0 z-60 bg-[#1F1B1D]/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-7 text-center space-y-4 border border-[#EAE3DC] shadow-2xl animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#F7ECEF] text-[#8E4A5C] flex items-center justify-center mx-auto shadow-inner animate-gentle-pulse">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[11px] font-semibold text-[#8E4A5C] tracking-[0.2em] uppercase block">
                ORDER CONFIRMED
              </span>
              <h3 className="text-xl font-bold text-[#1F1B1D] font-serif-luxury mt-1">
                주문이 정상적으로 접수되었습니다.
              </h3>
              <p className="text-xs text-[#6E6568] mt-1">
                주문번호: <span className="font-mono font-bold text-[#1F1B1D]">{orderId}</span>
              </p>
            </div>

            <div className="bg-[#FAF8F5] rounded-2xl p-4 text-left text-xs text-[#5A5255] space-y-1.5 border border-[#EAE3DC]">
              <p className="font-bold text-[#1F1B1D]">아틀리에 기프트 패키지 준비 중</p>
              <p>· {giftBox ? '시그니처 새틴 리본 박스 포장 포함' : '일반 패키지'}</p>
              {princessLetter && <p>· 공주 임명장 &amp; 골드 레터 카드 동봉</p>}
              <p className="text-[#8E4A5C] font-semibold pt-1">
                정성스럽게 검수하여 빠르게 발송을 시작하겠습니다.
              </p>
            </div>

            <button
              onClick={handleFinishOrder}
              className="w-full py-3 text-sm font-semibold text-white bg-[#8E4A5C] hover:bg-[#763A4B] rounded-full shadow-sm transition-all cursor-pointer"
            >
              부티크로 돌아가기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
