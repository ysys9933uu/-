import React, { useState } from 'react';
import { X, Ruler, Sparkles, Check, Heart, ShieldCheck } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [childHeight, setChildHeight] = useState<number>(105);
  const [childAge, setChildAge] = useState<number>(5);

  if (!isOpen) return null;

  // Size calculation logic
  const getRecommendation = (height: number) => {
    if (height < 95) return { size: '90호', age: '2~3세', length: '52cm', chest: '54cm', tip: '아장아장 걷는 아이를 위해 발목 위로 오는 경쾌한 길이감' };
    if (height < 105) return { size: '100호', age: '3~4세', length: '60cm', chest: '58cm', tip: '가장 발랄하고 편안한 활동성을 보장하는 정사이즈' };
    if (height < 115) return { size: '110호', age: '4~5세', length: '68cm', chest: '62cm', tip: '유치원 발표회 및 생일파티 인기 No.1 황금 사이즈' };
    if (height < 125) return { size: '120호', age: '5~6세', length: '76cm', chest: '66cm', tip: '바닥에 끌리지 않는 우아한 발목 길이감' };
    if (height < 135) return { size: '130호', age: '7~8세', length: '85cm', chest: '70cm', tip: '초등 저학년 공주님을 위한 풍성한 풀 렝스' };
    return { size: '140호 / 150호', age: '9~11세', length: '95cm', chest: '74cm', tip: '성장기 여유 핏 & 등 스모크 밴딩 조절 가능' };
  };

  const rec = getRecommendation(childHeight);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1F1B1D]/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#EAE3DC] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#EFE9E2] text-[#8A8084] hover:text-[#1F1B1D] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-9 h-9 rounded-full bg-[#F7ECEF] text-[#8E4A5C] flex items-center justify-center">
            <Ruler className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#1F1B1D] font-serif-luxury">
              맞춤 사이즈 가이드
            </h2>
            <p className="text-xs text-[#6E6568]">
              아이의 키를 입력하시면 가장 편안하고 예쁜 핏의 사이즈를 추천해 드립니다.
            </p>
          </div>
        </div>

        {/* Interactive Height Slider */}
        <div className="my-6 p-5 bg-[#FAF8F5] rounded-2xl border border-[#EAE3DC]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-[#1F1B1D]">우리 아이 현재 키</span>
            <span className="text-lg font-bold text-[#8E4A5C] tabular-nums">
              {childHeight} cm
            </span>
          </div>

          <input
            type="range"
            min={85}
            max={145}
            step={1}
            value={childHeight}
            onChange={(e) => setChildHeight(Number(e.target.value))}
            className="w-full accent-[#8E4A5C] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-[#8A8084] mt-1 tabular-nums">
            <span>85cm (2세)</span>
            <span>115cm (6세)</span>
            <span>145cm (10세)</span>
          </div>

          {/* Recommended Result Box */}
          <div className="mt-4 pt-4 border-t border-[#EAE3DC] bg-white rounded-xl p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase font-semibold text-[#8E4A5C] tracking-[0.16em]">
                RECOMMENDED SIZE
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-xl font-bold text-[#1F1B1D] font-serif-luxury">
                  {rec.size}
                </span>
                <span className="text-xs text-[#6E6568]">
                  (권장 나이: {rec.age})
                </span>
              </div>
              <p className="text-xs text-[#8E4A5C] font-medium mt-0.5">
                총 기장 {rec.length} · 가슴 둘레 {rec.chest}
              </p>
            </div>

            <div className="text-xs text-[#5A5255] bg-[#FAF8F5] p-3 rounded-lg border border-[#EAE3DC] max-w-xs text-center sm:text-left">
              {rec.tip}
            </div>
          </div>
        </div>

        {/* Full Size Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E8E0D8] text-[#6E6568] bg-[#FAF8F5]">
                <th className="py-2.5 px-3 font-semibold">사이즈 호수</th>
                <th className="py-2.5 px-3 font-semibold">권장 키</th>
                <th className="py-2.5 px-3 font-semibold">권장 연령</th>
                <th className="py-2.5 px-3 font-semibold">총 기장</th>
                <th className="py-2.5 px-3 font-semibold">가슴 둘레</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EAE3] text-[#5A5255] tabular-nums">
              {[
                { size: '90호', height: '85~95cm', age: '2~3세', len: '52cm', chest: '54cm' },
                { size: '100호', height: '95~105cm', age: '3~4세', len: '60cm', chest: '58cm' },
                { size: '110호', height: '105~115cm', age: '4~5세', len: '68cm', chest: '62cm' },
                { size: '120호', height: '115~125cm', age: '5~6세', len: '76cm', chest: '66cm' },
                { size: '130호', height: '125~135cm', age: '7~8세', len: '85cm', chest: '70cm' },
                { size: '140호', height: '135~145cm', age: '9~10세', len: '95cm', chest: '74cm' },
              ].map((row, idx) => {
                const isCurrent = rec.size.includes(row.size.replace('호', ''));
                return (
                  <tr
                    key={idx}
                    className={isCurrent ? 'bg-[#F7ECEF] font-semibold text-[#4A2530]' : 'hover:bg-[#FAF8F5]'}
                  >
                    <td className="py-2.5 px-3">{row.size} {isCurrent && '· 추천'}</td>
                    <td className="py-2.5 px-3">{row.height}</td>
                    <td className="py-2.5 px-3">{row.age}</td>
                    <td className="py-2.5 px-3">{row.len}</td>
                    <td className="py-2.5 px-3">{row.chest}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Fitting comfort guarantee */}
        <div className="mt-6 pt-4 border-t border-[#F0EAE3] flex items-start gap-2.5 text-xs text-[#5A5255] bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#EAE3DC]">
          <ShieldCheck className="w-4 h-4 text-[#5D7B6F] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#1F1B1D]">라 프린세스의 편안한 착용감 철학:</span>{' '}
            모든 드레스의 상의 등판 부분에는 부드러운 스모크 밴딩과 숨김 지퍼가 적용되어 있어 약 3~5cm의 품 조절이 가능합니다.
          </div>
        </div>
      </div>
    </div>
  );
};
