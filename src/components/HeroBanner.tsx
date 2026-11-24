import React from 'react';
import { Sparkles, ShieldCheck, Heart, Wand2, ArrowRight } from 'lucide-react';

interface HeroBannerProps {
  onExploreClick: () => void;
  onOpenStylingRoom: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onExploreClick,
  onOpenStylingRoom,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F7F3EE] to-[#F3EDE6] border-b border-[#E8E0D8]">
      {/* Subtle warm ambient accents */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#EAD8DC]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-12 w-80 h-80 bg-[#EDE3D5]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#763A4B] tracking-wide">
              <span className="uppercase tracking-[0.16em] text-[11px] font-semibold">2026 Holiday Collection</span>
              <span aria-hidden="true" className="text-[#C9B9B0]">·</span>
              <span>크리스마스 리미티드 에디션 &amp; 무료 선물 포장</span>
            </div>

            <h1 className="text-[1.375rem] sm:text-3xl lg:text-[1.9rem] xl:text-[2.35rem] font-bold text-[#1F1B1D] tracking-tight leading-[1.35] font-serif-luxury break-keep">
              <span className="block">매일 거울을 보며 미소 짓는,</span>
              <span className="block mt-1 text-[#8E4A5C]">
                세상에서 가장 눈부신 공주 드레스
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#5A5255] leading-relaxed max-w-xl font-normal">
              어린이 피부를 고려한 100% 무자극 순면 안감과 입체감 있는 오간자 튤 스커트.
              드레스와 완벽히 어우러지는 티아라, 요술봉, 슈즈까지 프라이빗 로열 컬렉션으로 만나보세요.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onExploreClick}
                className="px-7 py-3.5 text-sm font-semibold text-white bg-[#8E4A5C] hover:bg-[#763A4B] rounded-full shadow-[0_8px_20px_-6px_rgba(142,74,92,0.45)] transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>컬렉션 둘러보기</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenStylingRoom}
                className="px-6 py-3.5 text-sm font-medium text-[#262123] bg-white/90 hover:bg-white border border-[#DED4CB] hover:border-[#8E4A5C]/50 rounded-full shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <Wand2 className="w-4 h-4 text-[#8E4A5C]" />
                <span>나만의 코디 피팅룸</span>
              </button>
            </div>

            {/* Adjacent Proof Points / Trust Markers */}
            <div className="pt-5 border-t border-[#E6DDD5] grid grid-cols-3 gap-4 text-xs text-[#5A5255]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#5D7B6F] shrink-0" />
                <span>KC 안전 인증 &amp; 순면 안감</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B5945B] shrink-0" />
                <span>탈락 없는 안전 글리터</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#8E4A5C] shrink-0" />
                <span>누적 12,000+ 구매 후기</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Anchor */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(31,27,29,0.14)] border border-white/80 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] bg-[#EFE9E2]">
              <img
                src="/src/assets/images/hero_princess_boutique_1793680423481.jpg"
                alt="라 프린세스 공주 드레스 부티크 쇼룸"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B1D]/55 via-[#1F1B1D]/10 to-transparent" />

              {/* Floating overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[#EAE3DC] flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-[#8E4A5C] uppercase block">
                    Atelier Featured Edition
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#1F1B1D] font-serif-luxury mt-0.5">
                    2026 로열 블라썸 &amp; 크리스탈 에디션
                  </p>
                  <p className="text-xs text-[#6E6568] mt-0.5">
                    생일파티 · 유치원 발표회 · 화동 · 스페셜 데이
                  </p>
                </div>
                <button
                  onClick={onExploreClick}
                  className="px-4 py-2 text-xs font-semibold text-[#8E4A5C] bg-[#F7ECEF] hover:bg-[#EEDDE2] rounded-full transition-colors whitespace-nowrap cursor-pointer"
                >
                  컬렉션 보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
