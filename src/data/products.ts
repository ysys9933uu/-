export interface ColorOption {
  name: string;
  hex: string;
  family: 'pink' | 'blue' | 'purple' | 'white' | 'gold' | 'coral' | 'red' | 'green' | 'navy';
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'dress' | 'accessory';
  subCategory?: string; // e.g. 'ballgown', 'tutu', 'tiara', 'wand', 'shoes', 'gloves', 'jewelry', 'cape', 'necklace', 'earrings', 'bracelet', 'bag'
  price: number;
  originalPrice?: number;
  image: string;
  color: ColorOption;
  availableColors?: ColorOption[];
  materials: string[];
  vibes: string[];
  silhouette?: string;
  sparkleLevel: number; // 1 to 5
  rating: number;
  reviewCount: number;
  sizes?: string[]; // e.g. ['100 (3-4세)', '110 (4-5세)', '120 (5-6세)', '130 (7-8세)', '140 (9-10세)']
  description: string;
  features: string[];
  fabricCare: string;
  lining: string; // e.g., '100% 프리미엄 순면 안감 (가려움 없는 안심 봉제)'
  matchingAccessoryIds: string[];
  isNew?: boolean;
  isBest?: boolean;
}

export function getColorImage(product: Product, color?: ColorOption): string {
  const targetColor = color || product.color;
  if (targetColor?.image) return targetColor.image;
  const matched = product.availableColors?.find(
    (c) => c.name === targetColor?.name || (c.hex === targetColor?.hex && c.image)
  );
  if (matched?.image) return matched.image;
  return product.image;
}

export const PRODUCTS: Product[] = [
  {
    id: 'dress-christmas-velvet',
    name: '홀리데이 크리스마스 벨벳 로열 볼가운',
    subtitle: '루비 레드 로열 벨벳과 보송보송 화이트 에코 퍼 카라, 골드 눈꽃 자수의 특별 한정판 드레스',
    category: 'dress',
    subCategory: 'ballgown',
    price: 58000,
    originalPrice: 89000,
    image: '/src/assets/images/studio_christmas_red_1794892112536.jpg',
    color: {
      name: '홀리데이 루비 레드',
      hex: '#DC2626',
      family: 'red'
    },
    availableColors: [
      { name: '홀리데이 루비 레드', hex: '#DC2626', family: 'red', image: '/src/assets/images/studio_christmas_red_1794892112536.jpg' },
      { name: '로열 포레스트 에메랄드', hex: '#059669', family: 'green', image: '/src/assets/images/studio_christmas_emerald_1794892112538.jpg' },
      { name: '미드나잇 로열 네이비', hex: '#1E3A8A', family: 'navy', image: '/src/assets/images/studio_christmas_navy_1794892114866.jpg' }
    ],
    materials: ['하이엔드 로열 벨벳', '스노우 에코 퍼 카라', '골드 스파클 튤', '크리스탈 눈꽃 비딩'],
    vibes: ['크리스마스 에디션', '동화 속 무도회', '클래식 로열'],
    silhouette: '벨라인 볼가운',
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 189,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '크리스마스 트리 불빛 아래 가장 눈부시게 빛나는 루비 레드 로열 벨벳과 포근한 화이트 에코 퍼 카라가 돋보이는 2026 홀리데이 리미티드 에디션입니다. 스커트 하단에는 풍성한 3단 캉캉 스파클 튤과 밍크 퍼 트리밍이 더해져 동화 속 크리스마스 파티의 주인공으로 변신시켜 줍니다.',
    features: [
      '크리스마스 파티 및 연말 발표회 전용 리미티드 에디션',
      '목을 부드럽게 감싸주는 분리 가능한 프리미엄 에코 퍼 카라',
      '아이 피부 닿는 몸판 100% 무자극 순면 안감 처리',
      '골드 눈꽃 자수와 열처리 가루 탈락 방지 글리터 스커트'
    ],
    fabricCare: '드라이클리닝 권장 또는 미온수 손세탁',
    lining: '100% 프리미엄 순면 안감',
    matchingAccessoryIds: ['acc-holiday-velvet-tiara', 'acc-christmas-red-shoes', 'acc-heart-necklace', 'acc-feather-cape'],
    isBest: true,
    isNew: true
  },
  {
    id: 'dress-aurora-rose',
    name: '오로라 로즈 로열 볼가운 드레스',
    subtitle: '입체 장미 꽃잎 자수와 눈부신 글리터 튤 스커트의 궁극의 핑크 공주님 드레스',
    category: 'dress',
    subCategory: 'ballgown',
    price: 58000,
    originalPrice: 85000,
    image: '/src/assets/images/studio_aurora_rose_1794892114434.jpg',
    color: {
      name: '로맨틱 로즈 핑크',
      hex: '#F472B6',
      family: 'pink'
    },
    availableColors: [
      { name: '로맨틱 로즈 핑크', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_aurora_rose_1794892114434.jpg' },
      { name: '오로라 라벤더 퍼플', hex: '#C084FC', family: 'purple', image: '/src/assets/images/studio_aurora_lavender_1794892114720.jpg' },
      { name: '블라썸 아이스 블루', hex: '#38BDF8', family: 'blue', image: '/src/assets/images/studio_aurora_blue_1794892114614.jpg' },
      { name: '퓨어 펄 화이트', hex: '#F8FAFC', family: 'white', image: '/src/assets/images/studio_aurora_white_1794892116586.jpg' }
    ],
    materials: ['프리미엄 글리터 튤', '3D 입체 장미 자수', '천연 진주 비딩', '소프트 오간자'],
    vibes: ['로맨틱 로즈', '동화 속 무도회', '클래식 로열'],
    silhouette: '벨라인 볼가운',
    sparkleLevel: 5,
    rating: 4.9,
    reviewCount: 384,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '빛을 받을 때마다 수천 개의 은하수처럼 반짝이는 글리터 튤 위에 손수 놓은 3D 입체 장미 플라워와 은은한 진주 비딩이 수놓아진 최고급 로열 볼가운입니다. 풍성한 5단 캉캉 패티코트가 내장되어 있어 별도의 속치마 없이도 마법처럼 봉긋하게 띄워집니다.',
    features: [
      '별도 속치마가 필요 없는 풍성한 5겹 볼륨 튤 레이어드',
      '아이 피부에 닿는 몸판 100% 무자극 순면 안감 처리',
      '등 부분 부드러운 스모크 밴딩 & 숨김 지퍼로 편안한 착용감',
      '가루 날림을 특수 열처리로 최소화한 프리미엄 스파클 글리터'
    ],
    fabricCare: '미온수 중성세제 단독 손세탁 또는 드라이클리닝 권장',
    lining: '100% 프리미엄 순면 안감 (가려움 없는 안심 봉제)',
    matchingAccessoryIds: ['acc-royal-tiara-wand', 'acc-heart-necklace', 'acc-crown-earrings', 'acc-glass-slippers'],
    isBest: true,
    isNew: false
  },
  {
    id: 'dress-ice-starlight',
    name: '스노우 크리스탈 얼음 요정 드레스',
    subtitle: '은빛 눈꽃 모티브와 살랑이는 오간자 케이프 슬리브의 겨울 왕국 공주 드레스',
    category: 'dress',
    subCategory: 'ballgown',
    price: 59000,
    originalPrice: 88000,
    image: '/src/assets/images/studio_ice_blue_1794892116629.jpg',
    color: {
      name: '아이스 스카이 블루',
      hex: '#93C5FD',
      family: 'blue'
    },
    availableColors: [
      { name: '아이스 스카이 블루', hex: '#93C5FD', family: 'blue', image: '/src/assets/images/studio_ice_blue_1794892116629.jpg' },
      { name: '스노우 실버 화이트', hex: '#E2E8F0', family: 'white', image: '/src/assets/images/studio_ice_white_1794892117760.jpg' },
      { name: '오로라 딥 바이올렛', hex: '#A855F7', family: 'purple', image: '/src/assets/images/studio_ice_purple_1794892118697.jpg' }
    ],
    materials: ['실버 스파클 오간자', '크리스탈 스노우 자수', '홀로그램 튤', '새틴 리본'],
    vibes: ['미드나잇 신데렐라', '눈꽃 왕국', '동화 속 무도회', '요정 숲'],
    silhouette: '케이프 케이프렛',
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 290,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '얼음 궁전의 별빛을 수놓은 듯 은색 눈꽃 자수와 탈부착 가능한 날개 모양의 오간자 케이프가 신비로움을 더합니다. 걸을 때마다 하늘빛과 은빛이 교차하며 춤을 추는 마법 같은 드레스입니다.',
    features: [
      '바람에 흩날리는 우아한 탈부착 케이프 슬리브 포함',
      '반사각에 따라 무지갯빛을 내는 홀로그램 스팽글 포인트',
      '허리 라인을 조절할 수 있는 프리미엄 새틴 리본 벨트',
      '아이 피부 닿는 부위 올 코튼 소프트 라이닝 마감'
    ],
    fabricCare: '찬물 중성세제 가볍게 손세탁 (비틀기 금지)',
    lining: '100% 프리미엄 순면 안감',
    matchingAccessoryIds: ['acc-royal-tiara-wand', 'acc-crown-earrings', 'acc-glass-slippers', 'acc-feather-cape'],
    isBest: true,
    isNew: true
  },
  {
    id: 'dress-strawberry-chiffon',
    name: '스위트 베리 캉캉 티어드 드레스',
    subtitle: '딸기 우윳빛 샤 캉캉 프릴과 빈티지 레이스 코르사주의 사랑스러운 튜튜 드레스',
    category: 'dress',
    subCategory: 'tutu',
    price: 54000,
    originalPrice: 78000,
    image: '/src/assets/images/studio_berry_pink_1794892119187.jpg',
    color: {
      name: '베이비 스트로베리 핑크',
      hex: '#F9A8D4',
      family: 'pink'
    },
    availableColors: [
      { name: '베이비 스트로베리 핑크', hex: '#F9A8D4', family: 'pink', image: '/src/assets/images/studio_berry_pink_1794892119187.jpg' },
      { name: '바닐라 크림 옐로우', hex: '#FEF08A', family: 'gold', image: '/src/assets/images/studio_berry_yellow_1794892120185.jpg' },
      { name: '민트 마카롱 그린', hex: '#6EE7B7', family: 'green', image: '/src/assets/images/studio_berry_mint_1794892120522.jpg' }
    ],
    materials: ['밀크 시폰', '프랑스 토숑 레이스', '새틴 와이드 보우', '소프트 캉캉 튤'],
    vibes: ['러블리 베리', '티파티 프린세스', '로맨틱 로즈'],
    silhouette: '티어드 프릴 러플',
    sparkleLevel: 3,
    rating: 4.8,
    reviewCount: 215,
    sizes: ['90 (2-3세 / 80-90cm)', '100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)'],
    description: '인형처럼 사랑스러운 3단 티어드 프릴과 가슴 부분의 앤틱 프랑스 레이스 장식, 사랑스러운 딸기 브로치가 매력적인 러블리 공주 드레스입니다. 생일 파티나 유치원 발표회에서 가장 주목받는 인기 베스트셀러입니다.',
    features: [
      '구김 없이 항상 풍성함을 유지하는 고탄성 소프트 시폰',
      '활동량이 많은 아이들을 위한 여유로운 플레어 핏',
      '탈부착 가능한 수제 딸기 꽃 코르사주 브로치 증정',
      '피부 트러블 방지 실리콘 밴드 처리'
    ],
    fabricCare: '세탁망 사용 울코스 단독 세탁 또는 미온수 손세탁',
    lining: '100% 코마사 순면 40수 안감',
    matchingAccessoryIds: ['acc-heart-necklace', 'acc-pearl-bracelet', 'acc-royal-tiara-wand', 'acc-pink-handbag'],
    isBest: true,
    isNew: false
  },
  {
    id: 'dress-mermaid-ocean-pearl',
    name: '머메이드 아쿠아 오션 펄 드레스',
    subtitle: '인어공주 파도물결 쉬폰 캉캉과 영롱한 조개 진주 스팽글 드레스',
    category: 'dress',
    subCategory: 'ballgown',
    price: 59000,
    originalPrice: 88000,
    image: '/src/assets/images/studio_mermaid_mint_1794892120781.jpg',
    color: {
      name: '아쿠아 씨폼 민트',
      hex: '#2DD4BF',
      family: 'green'
    },
    availableColors: [
      { name: '아쿠아 씨폼 민트', hex: '#2DD4BF', family: 'green', image: '/src/assets/images/studio_mermaid_mint_1794892120781.jpg' },
      { name: '오션 머메이드 블루', hex: '#0EA5E9', family: 'blue', image: '/src/assets/images/studio_mermaid_blue_1794892121652.jpg' },
      { name: '코랄 펄 핑크', hex: '#FB7185', family: 'pink', image: '/src/assets/images/studio_mermaid_pink_1794892122230.jpg' }
    ],
    materials: ['오션 웨이브 플리츠 쉬폰', '자개 펄 시퀸', '글리터 오간자', '진주 네크라인 비딩'],
    vibes: ['인어공주 바다', '동화 속 무도회', '요정 숲'],
    silhouette: '머메이드 플레어 볼가운',
    sparkleLevel: 5,
    rating: 4.9,
    reviewCount: 215,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '바닷속 인어공주의 아름다운 지느러미처럼 부드럽게 층을 이룬 아쿠아 민트빛 플리츠 러플과, 빛에 따라 영롱하게 무지갯빛을 발하는 자개 펄 시퀸이 보석처럼 빛나는 프리미엄 머메이드 드레스입니다.',
    features: [
      '신비로운 인어공주 무드의 물결 캉캉 플리츠 스커트',
      '네크라인과 상체 가득 수놓아진 핸드메이드 진주 비딩',
      '살이 쓸리지 않는 부드러운 오간자 러플 슬리브',
      '100% 무자극 순면 안감'
    ],
    fabricCare: '찬물 단독 울샴푸 손세탁',
    lining: '100% 프리미엄 순면 안감',
    matchingAccessoryIds: ['acc-glass-slippers', 'acc-heart-necklace', 'acc-crown-earrings', 'acc-royal-tiara-wand'],
    isBest: true,
    isNew: true
  },
  {
    id: 'dress-midnight-galaxy-star',
    name: '미드나잇 갤럭시 스타라이트 볼가운',
    subtitle: '신비로운 은하수 별빛 자수와 깊은 밤하늘 로열 네이비 볼가운 드레스',
    category: 'dress',
    subCategory: 'ballgown',
    price: 59000,
    originalPrice: 89000,
    image: '/src/assets/images/studio_galaxy_navy_1794892121000.jpg',
    color: {
      name: '미드나잇 딥 네이비',
      hex: '#1E1B4B',
      family: 'navy'
    },
    availableColors: [
      { name: '미드나잇 딥 네이비', hex: '#1E1B4B', family: 'navy', image: '/src/assets/images/studio_galaxy_navy_1794892121000.jpg' },
      { name: '스타라이트 딥 퍼플', hex: '#581C87', family: 'purple', image: '/src/assets/images/studio_galaxy_purple_1794892123668.jpg' },
      { name: '로열 사파이어 블루', hex: '#2563EB', family: 'blue', image: '/src/assets/images/studio_cinderella_navy_1794892133001.jpg' }
    ],
    materials: ['은하수 글리터 튤', '실버 별자리 손자수', '크리스탈 젬 벨트', '헤비 볼륨 패티코트'],
    vibes: ['미드나잇 신데렐라', '은하수 밤하늘', '동화 속 무도회', '눈꽃 왕국'],
    silhouette: '하이로 벨라인 볼가운',
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 198,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '칠흑 같은 밤하늘에 쏟아지는 은하수처럼 수만 개의 은빛 별빛 자수가 수놓아진 웅장하고 기품 넘치는 로열 네이비 볼가운입니다. 허리에는 눈부신 크리스탈 보석 벨트가 둘러져 있어 특별한 날의 주인공을 만들어 줍니다.',
    features: [
      '별빛과 은하수를 담은 입체 실버 글리터 자수',
      '앞은 경쾌하고 뒤는 우아하게 끌리는 하이로 볼가운 핏',
      '허리를 빛내주는 탈부착 크리스탈 주얼리 벨트',
      '피부 보호 100% 코튼 라이닝'
    ],
    fabricCare: '드라이클리닝 권장',
    lining: '100% 프리미엄 순면 안감',
    matchingAccessoryIds: ['acc-royal-tiara-wand', 'acc-crown-earrings', 'acc-glass-slippers', 'acc-feather-cape'],
    isBest: true,
    isNew: true
  },
  {
    id: 'dress-emerald-forest-fairy',
    name: '에메랄드 팅커벨 포레스트 페어리 드레스',
    subtitle: '싱그러운 민트 에메랄드 튤과 골드 덩굴 자수, 꽃잎 소매의 숲속 요정 드레스',
    category: 'dress',
    subCategory: 'tutu',
    price: 54000,
    originalPrice: 79000,
    image: '/src/assets/images/studio_emerald_fairy_1794892124282.jpg',
    color: {
      name: '에메랄드 페어리 민트',
      hex: '#34D399',
      family: 'green'
    },
    availableColors: [
      { name: '에메랄드 페어리 민트', hex: '#34D399', family: 'green', image: '/src/assets/images/studio_emerald_fairy_1794892124282.jpg' },
      { name: '세이지 포레스트 그린', hex: '#059669', family: 'green', image: '/src/assets/images/studio_christmas_emerald_1794892112538.jpg' },
      { name: '팅커벨 선샤인 골드', hex: '#FBBF24', family: 'gold', image: '/src/assets/images/studio_belle_gold_1794892126484.jpg' }
    ],
    materials: ['골드 덩굴 손자수', '소프트 에메랄드 튤', '플러터 오간자 소매', '크리스탈 꽃잎 아플리케'],
    vibes: ['요정 숲', '동화 속 무도회', '러블리 베리'],
    silhouette: '페어리 페탈 튤',
    sparkleLevel: 4,
    rating: 4.9,
    reviewCount: 174,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '피터팬 동화 속 팅커벨처럼 숲속에서 춤추는 요정을 연상시키는 싱그러운 에메랄드 민트빛 드레스입니다. 층층이 물결치는 꽃잎 러플 소매와 몸판의 섬세한 골드 덩굴 자수가 고급스럽습니다.',
    features: [
      '신비로운 요정 느낌의 3단 꽃잎 플러터 오간자 소매',
      '골드 메탈릭사로 수놓은 고급스러운 포레스트 덩굴 자수',
      '가볍고 하늘거려 뛰어놀기 편한 초경량 에어 튤',
      '피부 저자극 순면 안감'
    ],
    fabricCare: '찬물 단독 손세탁',
    lining: '100% 프리미엄 순면 안감',
    matchingAccessoryIds: ['acc-fairy-wings', 'acc-pearl-bracelet', 'acc-heart-necklace', 'acc-royal-tiara-wand'],
    isBest: false,
    isNew: true
  },
  {
    id: 'dress-cherry-blossom-pink',
    name: '체리블라썸 사쿠라 프린세스 파티 드레스',
    subtitle: '살랑이는 벚꽃 꽃잎 러플과 은은한 코랄 핑크 그라데이션의 사랑스러운 드레스',
    category: 'dress',
    subCategory: 'tutu',
    price: 56000,
    originalPrice: 82000,
    image: '/src/assets/images/studio_cherry_pink_1794892122945.jpg',
    color: {
      name: '체리블라썸 베이비 핑크',
      hex: '#F472B6',
      family: 'pink'
    },
    availableColors: [
      { name: '체리블라썸 베이비 핑크', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_cherry_pink_1794892122945.jpg' },
      { name: '선셋 코랄 피치', hex: '#FB923C', family: 'coral', image: '/src/assets/images/studio_cherry_coral_1794892125173.jpg' },
      { name: '스노우 블라썸 화이트', hex: '#FFF1F2', family: 'white', image: '/src/assets/images/studio_cherry_white_1794892126511.jpg' }
    ],
    materials: ['꽃잎 오간자 캉캉 러플', '천연 진주 웨이스트 밴드', '은사 스파클 자수', '소프트 코튼 안감'],
    vibes: ['스프링 블라썸', '로맨틱 로즈', '러블리 베리', '동화 속 무도회'],
    silhouette: '그라데이션 러플 볼가운',
    sparkleLevel: 5,
    rating: 4.9,
    reviewCount: 228,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '벚꽃 꽃잎이 살포시 흩날리는 봄날의 공주님을 담은 드레스입니다. 수백 개의 꽃잎 모양 오간자 러플이 층층이 볼륨감을 이루고, 허리에는 천연 담수 진주 모양의 비딩 밴드가 고급스러움을 더합니다.',
    features: [
      '풍성한 솜사탕 같은 6단 꽃잎 오간자 볼륨 러플',
      '아이 허리를 우아하게 밝혀주는 펄 진주 밴드',
      '등 부분 신축성 스모크 밴드로 편안한 맞춤 핏',
      '100% 무자극 순면 안감'
    ],
    fabricCare: '미온수 중성세제 손세탁',
    lining: '100% 프리미엄 순면 안감',
    matchingAccessoryIds: ['acc-pink-handbag', 'acc-heart-necklace', 'acc-pearl-bracelet', 'acc-crown-earrings'],
    isBest: true,
    isNew: true
  },
  {
    id: 'dress-lavender-fairy',
    name: '라벤더 블라썸 요정 볼가운',
    subtitle: '은은한 바이올렛 퍼플 그라데이션과 흩날리는 나비 아플리케의 몽환적인 드레스',
    category: 'dress',
    subCategory: 'ballgown',
    price: 56000,
    originalPrice: 82000,
    image: '/src/assets/images/studio_lavender_fairy_1794892126418.jpg',
    color: {
      name: '미스틱 라벤더 바이올렛',
      hex: '#C084FC',
      family: 'purple'
    },
    availableColors: [
      { name: '미스틱 라벤더 바이올렛', hex: '#C084FC', family: 'purple', image: '/src/assets/images/studio_lavender_fairy_1794892126418.jpg' },
      { name: '파스텔 로즈 핑크', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_lavender_pink_1794892126446.jpg' },
      { name: '크리스탈 스카이 블루', hex: '#7DD3FC', family: 'blue', image: '/src/assets/images/studio_lavender_blue_1794892128148.jpg' }
    ],
    materials: ['그라데이션 글리터 튤', '3D 입체 나비 아플리케', '새틴', '펄 비딩'],
    vibes: ['요정 숲', '동화 속 무도회', '로맨틱 로즈'],
    silhouette: '벨라인 볼가운',
    sparkleLevel: 4,
    rating: 4.9,
    reviewCount: 167,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '신비로운 보랏빛 요정의 숲에서 갓 날아온 듯, 햇빛에 따라 은은하게 보라와 핑크빛이 교차하는 그라데이션 글리터 튤에 입체 나비 모티브가 사랑스럽게 내려앉은 드레스입니다.',
    features: [
      '신비로운 2톤 바이올렛-핑크 그라데이션 염색 원단',
      '살아 움직이듯 입체감 있는 핸드메이드 나비 장식',
      '어깨를 짓누르지 않는 초경량 소프트 와이어 패티코트',
      '민감한 피부를 지켜주는 100% 천연 순면 안감'
    ],
    fabricCare: '드라이클리닝 권장 또는 찬물 중성세제 조물조물 손세탁',
    lining: '100% 오가닉 순면 안감',
    matchingAccessoryIds: ['acc-crown-earrings', 'acc-pearl-bracelet', 'acc-fairy-wings', 'acc-royal-tiara-wand'],
    isNew: false
  },
  {
    id: 'dress-belle-gold',
    name: '골든 엠프레스 벨로열 드레스',
    subtitle: '황금빛 샴페인 골드 자수와 로열 옐로우 오간자의 기품 넘치는 황실 공주 드레스',
    category: 'dress',
    subCategory: 'ballgown',
    price: 58000,
    originalPrice: 86000,
    image: '/src/assets/images/studio_belle_gold_1794892126484.jpg',
    color: {
      name: '샴페인 골드 옐로우',
      hex: '#FDE047',
      family: 'gold'
    },
    availableColors: [
      { name: '샴페인 골드 옐로우', hex: '#FDE047', family: 'gold', image: '/src/assets/images/studio_belle_gold_1794892126484.jpg' },
      { name: '앤틱 로즈 골드', hex: '#FB7185', family: 'pink', image: '/src/assets/images/studio_belle_pink_1794892128952.jpg' },
      { name: '로열 아이보리 화이트', hex: '#FEF3C7', family: 'white', image: '/src/assets/images/studio_belle_white_1794892130048.jpg' }
    ],
    materials: ['골드 메탈릭 자수', '프리미엄 로열 새틴', '소프트 튤', '골드 비딩'],
    vibes: ['골든 팰리스', '클래식 로열', '동화 속 무도회'],
    silhouette: '벨라인 볼가운',
    sparkleLevel: 4,
    rating: 4.9,
    reviewCount: 142,
    sizes: ['100 (3-4세)', '110 (4-5세)', '120 (5-6세)', '130 (7-8세)', '140 (9-10세)'],
    description: '황실 무도회의 주인공처럼 고급스러운 샴페인 골드빛 새틴과 정교한 금사 자수가 화려함을 극대화한 미녀와 야수 감성의 벨로열 드레스입니다.',
    features: [
      '고급스러운 반사광의 헤비 로열 새틴 바디',
      '어깨를 우아하게 감싸는 드레이핑 오프숄더 디테일',
      '숨 쉬기 편안한 허리 스트레치 구조',
      '100% 순면 안감'
    ],
    fabricCare: '드라이클리닝 권장',
    lining: '100% 프리미엄 순면 안감',
    matchingAccessoryIds: ['acc-heart-necklace', 'acc-crown-earrings', 'acc-rose-gloves', 'acc-royal-tiara-wand'],
    isNew: false
  },
  {
    id: 'dress-swan-white',
    name: '백조의 호수 스완 크리스탈 드레스',
    subtitle: '순백의 깃털 자수와 은은한 펄 스팽글이 영롱하게 빛나는 발레리나 프린세스 드레스',
    category: 'dress',
    subCategory: 'tutu',
    price: 55000,
    originalPrice: 79000,
    image: '/src/assets/images/studio_swan_white_1794892130601.jpg',
    color: {
      name: '밀키 펄 화이트',
      hex: '#FDF4FF',
      family: 'white'
    },
    availableColors: [
      { name: '밀키 펄 화이트', hex: '#FDF4FF', family: 'white', image: '/src/assets/images/studio_swan_white_1794892130601.jpg' },
      { name: '페더 파스텔 핑크', hex: '#FCE7F3', family: 'pink', image: '/src/assets/images/studio_swan_pink_1794892131133.jpg' },
      { name: '실버 펄 그레이', hex: '#E2E8F0', family: 'white', image: '/src/assets/images/studio_cinderella_white_1794892133927.jpg' }
    ],
    materials: ['순백 펄 글리터 튤', '입체 깃털 자수 레이스', '소프트 튜튜', '크리스탈 비즈'],
    vibes: ['골든 팰리스', '동화 속 무도회', '눈꽃 왕국', '클래식 로열'],
    silhouette: '하이웨이스트 튜튜',
    sparkleLevel: 5,
    rating: 4.9,
    reviewCount: 198,
    sizes: ['100 (3-4세)', '110 (4-5세)', '120 (5-6세)', '130 (7-8세)', '140 (9-10세)'],
    description: '우아한 백조처럼 청순하면서도 별빛처럼 쏟아지는 펄 스팽글이 눈이 부신 화이트 튜튜 드레스입니다. 피아노 연주회나 화동 드레스로도 가장 찬사받는 모델입니다.',
    features: [
      '피아노 콩쿠르 및 화동에 가장 사랑받는 순백 프리미엄 핏',
      '발끝까지 가볍게 퍼지는 6단 플러피 튜튜 스커트',
      '자극 없는 스무스 코튼 안감',
      '탈부착 가능한 펄 진주 허리 벨트'
    ],
    fabricCare: '미온수 손세탁',
    lining: '100% 순면 60수 안감',
    matchingAccessoryIds: ['acc-heart-necklace', 'acc-glass-slippers', 'acc-royal-tiara-wand', 'acc-crown-earrings'],
    isNew: false
  },
  {
    id: 'dress-peach-blossom',
    name: '피치 블라썸 플라워 가든 드레스',
    subtitle: '화사한 복숭아빛 피치 코랄 튤과 은은한 골드 플라워 아플리케의 티파티 드레스',
    category: 'dress',
    subCategory: 'tutu',
    price: 52000,
    originalPrice: 75000,
    image: '/src/assets/images/studio_peach_floral_1794892131926.jpg',
    color: {
      name: '블루밍 피치 코랄',
      hex: '#FDBA74',
      family: 'coral'
    },
    availableColors: [
      { name: '블루밍 피치 코랄', hex: '#FDBA74', family: 'coral', image: '/src/assets/images/studio_peach_floral_1794892131926.jpg' },
      { name: '애플 블라썸 핑크', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_cherry_pink_1794892122945.jpg' },
      { name: '레몬 크림 옐로우', hex: '#FEF9C3', family: 'gold', image: '/src/assets/images/studio_berry_yellow_1794892120185.jpg' }
    ],
    materials: ['소프트 피치 튤', '골드 플라워 아플리케', '밀크 시폰', '새틴 리본'],
    vibes: ['스프링 블라썸', '티파티 프린세스', '로맨틱 로즈'],
    silhouette: '티어드 프릴 러플',
    sparkleLevel: 3,
    rating: 4.8,
    reviewCount: 153,
    sizes: ['100 (3-4세)', '110 (4-5세)', '120 (5-6세)', '130 (7-8세)', '140 (9-10세)'],
    description: '화사한 햇살 아래 봄날의 정원 티파티를 연상시키는 사랑스러운 피치 코랄 드레스입니다. 얼굴빛을 생기있고 환하게 밝혀주어 스튜디오 사진 촬영 시 압도적인 인기를 자랑합니다.',
    features: [
      '피부톤을 화사하게 살려주는 따뜻한 피치 코랄 쉐이드',
      '가볍고 찰랑이는 실크 터치 시폰',
      '편안한 풀 밴딩 허리 디자인',
      '순면 안감 장착'
    ],
    fabricCare: '세탁망 울코스 세탁',
    lining: '100% 순면 안감',
    matchingAccessoryIds: ['acc-spring-blossom-shoes', 'acc-spring-cherry-wand', 'acc-pink-handbag'],
    isNew: false
  },
  {
    id: 'dress-cinderella-midnight',
    name: '미드나잇 신데렐라 로열 크리놀린 볼가운',
    subtitle: '자정에 울리는 마법 같은 별빛 글리터 튤과 오프숄더 오간자 볼가운',
    category: 'dress',
    subCategory: 'ballgown',
    price: 59000,
    originalPrice: 89000,
    image: '/src/assets/images/studio_cinderella_blue_1794892156310.jpg',
    color: {
      name: '미드나잇 신데렐라 블루',
      hex: '#60A5FA',
      family: 'blue'
    },
    availableColors: [
      { name: '미드나잇 신데렐라 블루', hex: '#60A5FA', family: 'blue', image: '/src/assets/images/studio_cinderella_blue_1794892156310.jpg' },
      { name: '스노우 글리터 실버', hex: '#E2E8F0', family: 'white', image: '/src/assets/images/studio_cinderella_white_1794892133927.jpg' },
      { name: '로열 사파이어 딥블루', hex: '#2563EB', family: 'navy', image: '/src/assets/images/studio_cinderella_navy_1794892133001.jpg' }
    ],
    materials: ['크리놀린 볼륨 튤', '은하수 스팽글 비딩', '소프트 오간자 슬리브', '새틴'],
    vibes: ['미드나잇 신데렐라', '동화 속 무도회', '눈꽃 왕국'],
    silhouette: '크리놀린 볼가운',
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 312,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '12시 자정이 되어도 풀리지 않는 마법! 동화 속 신데렐라의 황실 무도회 드레스처럼 우아한 오프숄더 오간자 러플과 스커트 전체에 눈부시게 반짝이는 은하수 스팽글이 기품 넘치는 최고급 볼가운입니다.',
    features: [
      '신데렐라 무도회를 그대로 재현한 7겹 풍성 크리놀린 핏',
      '어깨를 우아하게 감싸는 러플 오간자 오프숄더',
      '빛을 받을 때마다 눈부신 프리미엄 스파클 글리터',
      '100% 무자극 순면 안감'
    ],
    fabricCare: '드라이클리닝 권장',
    lining: '100% 프리미엄 순면 안감',
    matchingAccessoryIds: ['acc-glass-slippers', 'acc-royal-tiara-wand', 'acc-crown-earrings', 'acc-feather-cape'],
    isBest: true,
    isNew: true
  },

  // ACCESSORIES (2~3만원대)
  {
    id: 'acc-princess-pearl-bag',
    name: '프린세스 퀼팅 펄 핸들 벨벳 미니백',
    subtitle: '천연 진주 구슬 핸들과 핑크 퀼팅 벨벳, 반짝이는 큐빅 리본 브로치',
    category: 'accessory',
    subCategory: 'bag',
    price: 26000,
    originalPrice: 36000,
    image: '/src/assets/images/studio_pearl_bag_1794892158482.jpg',
    color: {
      name: '로즈 퀼팅 핑크',
      hex: '#F472B6',
      family: 'pink'
    },
    availableColors: [
      { name: '로즈 퀼팅 핑크', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_pearl_bag_1794892158482.jpg' },
      { name: '밀키 펄 아이보리', hex: '#FAF8F5', family: 'white', image: '/src/assets/images/studio_pearl_basket_bag_1795494868346.jpg' },
      { name: '홀리데이 루비 레드', hex: '#B91C1C', family: 'red', image: '/src/assets/images/studio_holiday_bag_1794892173408.jpg' }
    ],
    materials: ['프리미엄 퀼팅 벨벳', '천연 광택 펄 핸들 체인', '크리스탈 리본 브로치'],
    vibes: ['스프링 블라썸', '로맨틱 로즈', '러블리 베리', '티파티 프린세스'],
    sparkleLevel: 4,
    rating: 5.0,
    reviewCount: 164,
    sizes: ['Free (가로 16cm x 높이 13cm x 폭 6cm)'],
    description: '작은 요술 거울과 립밤, 머리핀을 쏙 넣고 다닐 수 있는 최고급 퀼팅 벨벳 공주 핸드백입니다. 우아한 진주 비즈 핸들과 눈부신 크리스탈 리본 보석이 어떤 드레스에 들어도 품격을 높여줍니다.',
    features: [
      '손에 착 감기는 고급스러운 천연 광택 펄 비즈 핸들',
      '탈부착 가능한 골드 체인 숄더 스트랩 포함 (크로스백 겸용)',
      '어린이도 쉽게 여닫을 수 있는 마그네틱 자석 잠금'
    ],
    fabricCare: '부드러운 솔로 털어내기',
    lining: '부드러운 새틴 안감',
    matchingAccessoryIds: ['dress-strawberry-chiffon', 'dress-aurora-rose', 'dress-peach-blossom'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-christmas-red-shoes',
    name: '크리스마스 루비 스파클 글리터 슈즈',
    subtitle: '눈꽃 큐빅 버클과 와인 벨벳 리본, 라텍스 쿠션 인솔의 크리스마스 파티 구두',
    category: 'accessory',
    subCategory: 'shoes',
    price: 34000,
    originalPrice: 48000,
    image: '/src/assets/images/studio_red_shoes_1794892158542.jpg',
    color: {
      name: '홀리데이 루비 레드',
      hex: '#B91C1C',
      family: 'red'
    },
    availableColors: [
      { name: '홀리데이 루비 레드', hex: '#B91C1C', family: 'red', image: '/src/assets/images/studio_red_shoes_1794892158542.jpg' },
      { name: '샴페인 시퀸 골드', hex: '#EAB308', family: 'gold', image: '/src/assets/images/studio_champagne_sequin_shoes_1795494686884.jpg' },
      { name: '스노우 글리터 실버', hex: '#E2E8F0', family: 'white', image: '/src/assets/images/studio_glass_slippers_1794892161577.jpg' }
    ],
    materials: ['루비 레드 글리터', '와인 벨벳 리본', '눈꽃 지르콘 버클', '천연 라텍스 인솔'],
    vibes: ['크리스마스 에디션', '동화 속 무도회'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 142,
    sizes: ['150mm', '160mm', '170mm', '180mm', '190mm', '200mm'],
    description: '크리스마스 무도회의 주인공처럼 반짝이는 깊은 루비 레드 컬러의 글리터 파티 슈즈입니다. 푹신한 라텍스 깔창과 조절식 벨크로 스트랩으로 발이 편안합니다.',
    features: [
      '크리스마스 시즌 리미티드 루비 레드 스파클',
      '탈착이 편리한 벨크로 스트랩 & 눈꽃 큐빅 브로치',
      '미끄럼 방지 논슬립 고무 밑창'
    ],
    fabricCare: '가벼운 오염은 물티슈로 닦아내기',
    lining: '통기성 소프트 메쉬',
    matchingAccessoryIds: ['dress-christmas-velvet', 'acc-holiday-velvet-tiara'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-holiday-velvet-tiara',
    name: '크리스마스 스노우 벨벳 크라운 티아라',
    subtitle: '골드 크리스탈 티아라에 딥레드 벨벳 리본과 찰랑이는 눈꽃 지르콘 드롭',
    category: 'accessory',
    subCategory: 'tiara',
    price: 29000,
    originalPrice: 39000,
    image: '/src/assets/images/studio_holiday_tiara_1794892159441.jpg',
    color: {
      name: '골드 & 루비 벨벳',
      hex: '#EAB308',
      family: 'gold'
    },
    availableColors: [
      { name: '골드 & 루비 벨벳', hex: '#EAB308', family: 'gold', image: '/src/assets/images/studio_holiday_tiara_1794892159441.jpg' },
      { name: '스파클 실버 크리스탈', hex: '#E2E8F0', family: 'white', image: '/src/assets/images/studio_royal_tiara_1794892160197.jpg' },
      { name: '로즈골드 블라썸', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_rosegold_floral_tiara_1795494690091.jpg' }
    ],
    materials: ['골드 도금 합금', '딥레드 벨벳 리본', '눈꽃 지르콘 드롭 체인'],
    vibes: ['크리스마스 에디션', '클래식 로열'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 98,
    sizes: ['Free (어린이 두상 맞춤 쿠션 보호캡)'],
    description: '크리스마스 파티의 여왕을 위한 스페셜 에디션 티아라로, 딥레드 벨벳 리본과 이마 양옆으로 찰랑이는 눈꽃 크리스탈 드롭이 환상적인 분위기를 연출합니다.',
    features: [
      '움직일 때마다 살랑이는 5가닥 눈꽃 큐빅 드롭 체인',
      '두통 방지 실리콘 캡 장착 헤어밴드 구조',
      '고급 골드 프롱 세팅 크리스탈'
    ],
    fabricCare: '안경천으로 마른 닦기',
    lining: '무알러지 코팅',
    matchingAccessoryIds: ['dress-christmas-velvet', 'acc-christmas-red-shoes'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-royal-tiara-wand',
    name: '로열 크리스탈 티아라 & 마법 요술봉 세트',
    subtitle: '영롱한 다이아몬드 컷 큐빅 티아라와 별빛이 쏟아지는 스타 요술봉',
    category: 'accessory',
    subCategory: 'tiara',
    price: 29000,
    originalPrice: 39000,
    image: '/src/assets/images/studio_royal_tiara_1794892160197.jpg',
    color: {
      name: '스파클 실버 크리스탈',
      hex: '#E2E8F0',
      family: 'white'
    },
    availableColors: [
      { name: '스파클 실버 크리스탈', hex: '#E2E8F0', family: 'white', image: '/src/assets/images/studio_royal_tiara_1794892160197.jpg' },
      { name: '임페리얼 샴페인 골드', hex: '#FDE047', family: 'gold', image: '/src/assets/images/studio_golden_tiara_1794892166014.jpg' },
      { name: '미드나잇 사파이어', hex: '#1E1B4B', family: 'navy', image: '/src/assets/images/studio_sapphire_tiara_1794892174660.jpg' }
    ],
    materials: ['오스트리아 크리스탈 큐빅', '무알러지 은도금 합금', '소프트 헤어콤 빗핀'],
    vibes: ['미드나잇 신데렐라', '클래식 로열', '동화 속 무도회', '눈꽃 왕국'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 420,
    sizes: ['Free (3~12세 공용 실리콘 보호캡 장착)'],
    description: '머리가 아프지 않도록 양쪽 끝에 실리콘 쿠션 보호캡이 장착된 최고급 크리스탈 티아라와, 흔들 때마다 별가루처럼 빛을 반사하는 스타 요술봉 풀세트입니다. 어떤 드레스에 매치해도 즉시 여왕 공주님으로 변신합니다.',
    features: [
      '어린이 두상 맞춤 설계 - 양끝 소프트 실리콘 쿠션으로 장시간 착용해도 편안함',
      '묵직하지 않은 초경량 합금으로 흘러내림 없는 빗핀 고정 구조',
      '핸드메이드 프롱 세팅으로 큐빅 탈락 방지',
      '선물용 로열 핑크 벨벳 파우치 증정'
    ],
    fabricCare: '부드러운 마른 안경천으로 닦아 보관',
    lining: '무알러지 안심 코팅',
    matchingAccessoryIds: ['dress-aurora-rose', 'dress-ice-starlight', 'dress-strawberry-chiffon'],
    isBest: true
  },
  {
    id: 'acc-heart-necklace',
    name: '로열 핑크 하트 크라운 펄 목걸이',
    subtitle: '영롱한 핑크 지르코니아 하트 펜던트와 2줄 천연 담수 느낌 펄 체인',
    category: 'accessory',
    subCategory: 'necklace',
    price: 28000,
    originalPrice: 38000,
    image: '/src/assets/images/studio_heart_necklace_1794892160631.jpg',
    color: {
      name: '로맨틱 핑크 & 화이트 펄',
      hex: '#F472B6',
      family: 'pink'
    },
    availableColors: [
      { name: '로맨틱 핑크 & 화이트 펄', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_heart_necklace_1794892160631.jpg' },
      { name: '홀리데이 루비 레드', hex: '#DC2626', family: 'red', image: '/src/assets/images/studio_ruby_necklace_1794892169216.jpg' },
      { name: '미드나잇 사파이어 블루', hex: '#2563EB', family: 'blue', image: '/src/assets/images/studio_sapphire_necklace_1794892168493.jpg' }
    ],
    materials: ['오스트리아 하트 컷 핑크 크리스탈', '광택 펄 비즈', '안전 릴리즈 체인'],
    vibes: ['로맨틱 로즈', '동화 속 무도회', '클래식 로열'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 312,
    sizes: ['Free (길이 조절 연장 체인 5cm 포함)'],
    description: '공주님의 작은 목선에 부드럽게 감기는 2줄 진주 목걸이와 중앙에 왕관을 쓴 눈부신 핑크 하트 크리스탈 펜던트가 특징인 하이엔드 키즈 주얼리입니다. 당겨지면 스스로 풀리는 어린이 안심 릴리즈 잠금장치가 적용되었습니다.',
    features: [
      '빛을 받는 각도마다 무지갯빛이 쏟아지는 대형 하트 크리스탈',
      'KC 어린이 안전 인증 무독성 은도금 프레임',
      '당김 시 안전하게 분리되는 키즈 세이프티 버클 탑재',
      '로열 핑크 주얼리 케이스 기본 제공'
    ],
    fabricCare: '부드러운 천으로 닦아 보관',
    lining: 'KC 어린이 안전 인증 무니켈',
    matchingAccessoryIds: ['dress-aurora-rose', 'dress-strawberry-chiffon', 'dress-belle-gold'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-crown-earrings',
    name: '크라운 드롭 핑크 크리스탈 귀찌 (무통증 실리콘)',
    subtitle: '귀를 뚫지 않아도 아프지 않은 앤틱 골드 크라운 & 물방울 보석 귀찌',
    category: 'accessory',
    subCategory: 'earrings',
    price: 24000,
    originalPrice: 34000,
    image: '/src/assets/images/studio_crown_earrings_1794892161863.jpg',
    color: {
      name: '골든 핑크 지르콘',
      hex: '#FB7185',
      family: 'pink'
    },
    availableColors: [
      { name: '골든 핑크 지르콘', hex: '#FB7185', family: 'pink', image: '/src/assets/images/studio_crown_earrings_1794892161863.jpg' },
      { name: '로열 사파이어 블루', hex: '#2563EB', family: 'blue', image: '/src/assets/images/studio_sapphire_earrings_1794892172404.jpg' },
      { name: '샴페인 골드 펄', hex: '#FDE047', family: 'gold', image: '/src/assets/images/studio_gold_earrings_1794892175482.jpg' }
    ],
    materials: ['골드 도금 무니켈', '물방울 컷 핑크 큐빅', '무통증 에어 실리콘 쿠션'],
    vibes: ['골든 팰리스', '미드나잇 신데렐라', '인어공주 바다', '동화 속 무도회', '로맨틱 로즈'],
    sparkleLevel: 5,
    rating: 4.9,
    reviewCount: 265,
    sizes: ['Free (스프링 장력 조절 클립)'],
    description: '귀를 뚫지 않은 어린이들도 하루 종일 편안하게 착용할 수 있도록 특수 에어 실리콘 쿠션 클립이 장착되었습니다. 걸을 때마다 딸랑딸랑 찰랑이는 물방울 핑크 큐빅이 진짜 공주님이 된 기분을 선사합니다.',
    features: [
      '눌림 통증 제로! 부드러운 소프트 실리콘 쿠션 장착',
      '귓볼 두께에 맞게 장력이 자동 분산되는 인체공학 스프링 클립',
      '화려한 미니 골드 크라운 모티브 펜던트'
    ],
    fabricCare: '착용 후 마른 천으로 닦아 보관',
    lining: '알러지 방지 코팅',
    matchingAccessoryIds: ['dress-aurora-rose', 'dress-ice-starlight', 'dress-lavender-fairy'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-pearl-bracelet',
    name: '로열 펄 & 스타 참 공주 팔찌',
    subtitle: '반짝이는 골드 티아라와 별빛 참이 딸랑이는 소프트 펄 브레이슬릿',
    category: 'accessory',
    subCategory: 'bracelet',
    price: 22000,
    originalPrice: 31000,
    image: '/src/assets/images/studio_pearl_bracelet_1794892161384.jpg',
    color: {
      name: '로즈 핑크 펄',
      hex: '#FCE7F3',
      family: 'pink'
    },
    availableColors: [
      { name: '로즈 핑크 펄', hex: '#FCE7F3', family: 'pink', image: '/src/assets/images/studio_pearl_bracelet_1794892161384.jpg' },
      { name: '에메랄드 포레스트', hex: '#059669', family: 'green', image: '/src/assets/images/studio_emerald_bracelet_1794892172429.jpg' },
      { name: '임페리얼 샴페인 골드', hex: '#FDE047', family: 'gold', image: '/src/assets/images/studio_gold_bracelet_1794892173917.jpg' }
    ],
    materials: ['글로시 핑크 & 아이보리 펄', '14K 골드 도금 참', '큐빅 지르코니아'],
    vibes: ['골든 팰리스', '인어공주 바다', '요정 숲', '러블리 베리', '스프링 블라썸'],
    sparkleLevel: 4,
    rating: 4.9,
    reviewCount: 198,
    sizes: ['Free (손목 둘레 11~15cm 조절 토글 체인)'],
    description: '핑크와 아이보리 펄이 사랑스럽게 배열되고, 중앙의 미니 티아라 참과 양쪽의 크리스탈 별빛 참이 움직일 때마다 반짝이는 공주님의 손목 주얼리입니다. 아이 혼자서도 착용하기 쉬운 토글 바 & 조절 체인이 적용되었습니다.',
    features: [
      '정교하게 세팅된 미니 티아라 & 2개의 별빛 큐빅 참',
      '손목이 쓸리지 않는 부드러운 라운드 펄 가공',
      '성장기에 맞춰 조절 가능한 하트 보조 체인'
    ],
    fabricCare: '오염 시 안경천으로 부드럽게 닦기',
    lining: 'KC 어린이 안전 인증 무니켈',
    matchingAccessoryIds: ['dress-strawberry-chiffon', 'dress-peach-blossom', 'dress-aurora-rose'],
    isBest: false,
    isNew: true
  },
  {
    id: 'acc-glass-slippers',
    name: '신데렐라 스파클 글리터 플랫슈즈 (유리구두)',
    subtitle: '발걸음마다 무지갯빛 글리터와 쿠션 인솔로 편안한 공주님의 유리구두',
    category: 'accessory',
    subCategory: 'shoes',
    price: 34000,
    originalPrice: 48000,
    image: '/src/assets/images/studio_glass_slippers_1794892161577.jpg',
    color: {
      name: '글리터 실버 & 베이비 핑크',
      hex: '#FCE7F3',
      family: 'pink'
    },
    availableColors: [
      { name: '글리터 실버 & 베이비 핑크', hex: '#FCE7F3', family: 'pink', image: '/src/assets/images/studio_glass_slippers_1794892161577.jpg' },
      { name: '신데렐라 아이스 블루', hex: '#60A5FA', family: 'blue', image: '/src/assets/images/studio_cinderella_shoes_1794892174489.jpg' },
      { name: '샴페인 시퀸 골드', hex: '#EAB308', family: 'gold', image: '/src/assets/images/studio_champagne_sequin_shoes_1795494686884.jpg' }
    ],
    materials: ['영롱 글리터 패브릭', '새틴 리본 & 하트 큐빅', '천연 라텍스 쿠션 인솔', '논슬립 고무 밑창'],
    vibes: ['미드나잇 신데렐라', '인어공주 바다', '동화 속 무도회', '눈꽃 왕국', '로맨틱 로즈'],
    sparkleLevel: 5,
    rating: 4.9,
    reviewCount: 342,
    sizes: ['150mm', '160mm', '170mm', '180mm', '190mm', '200mm'],
    description: '신데렐라의 유리구두처럼 눈이 부시지만, 폭신한 8mm 라텍스 메모리폼 쿠션과 미끄럼 방지 밑창으로 하루 종일 신고 뛰어놀아도 발이 아프지 않은 편안한 프린세스 슈즈입니다. 핑크 새틴 리본과 하트 보석 버클이 정교하게 장식되어 있습니다.',
    features: [
      '아동 발 건강을 위한 8mm 고탄성 라텍스 풋베드',
      '벗겨짐 방지 조절식 엘라스틱 벨크로 스트랩',
      '비가 오거나 무도회장에서도 안전한 논슬립 미끄럼 방지창'
    ],
    fabricCare: '가벼운 오염은 물티슈로 닦아내기',
    lining: '땀 흡수가 빠른 메쉬 라이닝',
    matchingAccessoryIds: ['dress-ice-starlight', 'dress-aurora-rose', 'dress-swan-white'],
    isBest: true
  },
  {
    id: 'acc-rose-gloves',
    name: '프린세스 새틴 & 펄 롱 장갑',
    subtitle: '손목을 감싸는 진주 리본과 부드러운 스판 새틴의 우아한 공주 장갑',
    category: 'accessory',
    subCategory: 'gloves',
    price: 22000,
    originalPrice: 32000,
    image: '/src/assets/images/studio_rose_gloves_1794892163071.jpg',
    color: {
      name: '로즈 블러쉬 핑크',
      hex: '#FBCFE8',
      family: 'pink'
    },
    availableColors: [
      { name: '로즈 블러쉬 핑크', hex: '#FBCFE8', family: 'pink', image: '/src/assets/images/studio_rose_gloves_1794892163071.jpg' },
      { name: '스노우 펄 화이트', hex: '#FFFFFF', family: 'white', image: '/src/assets/images/studio_white_gloves_1794892173018.jpg' },
      { name: '신데렐라 파스텔 블루', hex: '#93C5FD', family: 'blue', image: '/src/assets/images/studio_blue_gloves_1794892170626.jpg' }
    ],
    materials: ['신축성 스판 새틴', '천연 담수 느낌 펄 비즈', '오간자 프릴'],
    vibes: ['골든 팰리스', '로맨틱 로즈', '클래식 로열'],
    sparkleLevel: 3,
    rating: 4.8,
    reviewCount: 182,
    sizes: ['Free (4~9세 신축성 핏)'],
    description: '아이들의 작은 손에 맞게 신축성이 뛰어난 소프트 스판 새틴 소재로 제작되어 손가락 움직임이 편안하며, 손목 위로 올라오는 펄 비딩이 정통 무도회 공주님의 품격을 완성합니다.',
    features: [
      '신축성 있는 프리미엄 스판 새틴으로 조이지 않고 쏙 들어감',
      '손목 부분 고급스러운 펄 링 & 리본 포인트',
      '손끝 풀림 방지 오버록 정밀 봉제'
    ],
    fabricCare: '미온수 손세탁 후 자연 건조',
    lining: '부드러운 저자극 내부 안감',
    matchingAccessoryIds: ['dress-aurora-rose', 'dress-belle-gold'],
    isBest: false
  },
  {
    id: 'acc-pink-handbag',
    name: '로열 펄 체인 벨벳 하트 미니백',
    subtitle: '진주 스트랩과 핑크 벨벳, 하트 보석 버클이 앙증맞은 공주 핸드백',
    category: 'accessory',
    subCategory: 'bag',
    price: 25000,
    originalPrice: 35000,
    image: '/src/assets/images/studio_heart_bag_1794892163146.jpg',
    color: {
      name: '앤틱 로즈 핑크',
      hex: '#FB7185',
      family: 'pink'
    },
    availableColors: [
      { name: '앤틱 로즈 핑크', hex: '#FB7185', family: 'pink', image: '/src/assets/images/studio_heart_bag_1794892163146.jpg' },
      { name: '홀리데이 루비 레드', hex: '#B91C1C', family: 'red', image: '/src/assets/images/studio_holiday_bag_1794892173408.jpg' },
      { name: '아쿠아 오로라 민트', hex: '#2DD4BF', family: 'green', image: '/src/assets/images/studio_shell_bag_1794892167127.jpg' }
    ],
    materials: ['소프트 벨벳', '펄 비즈 체인', '골드 하트 큐빅 버클'],
    vibes: ['스프링 블라썸', '티파티 프린세스', '러블리 베리', '로맨틱 로즈'],
    sparkleLevel: 3,
    rating: 4.8,
    reviewCount: 119,
    sizes: ['Free (가로 14cm x 높이 11cm x 폭 5cm)'],
    description: '작은 립밤과 머리핀, 요술 거울을 쏙 넣고 다닐 수 있는 사랑스러운 하트 쉐입의 핑크 벨벳 미니백입니다. 탈부착 가능한 진주 체인으로 크로스백 또는 핸드백으로 연출 가능합니다.',
    features: [
      '가볍고 부드러운 고급 터치 벨벳 소재',
      '아이 손으로도 열기 쉬운 마그네틱 원터치 자석 버클',
      '아이 어깨에 닿는 부위 쿠션 처리된 진주 크로스 스트랩'
    ],
    fabricCare: '부드러운 솔로 털어내기',
    lining: '새틴 내부 안감',
    matchingAccessoryIds: ['dress-strawberry-chiffon', 'dress-peach-blossom'],
    isBest: false
  },
  {
    id: 'acc-fairy-wings',
    name: '스파클링 버터플라이 요정 날개',
    subtitle: '빛에 따라 홀로그램 펄이 반짝이는 신비로운 나비 요정 날개',
    category: 'accessory',
    subCategory: 'wings',
    price: 23000,
    originalPrice: 33000,
    image: '/src/assets/images/studio_fairy_wings_1794892164112.jpg',
    color: {
      name: '오로라 라벤더 펄',
      hex: '#E9D5FF',
      family: 'purple'
    },
    availableColors: [
      { name: '오로라 라벤더 펄', hex: '#E9D5FF', family: 'purple', image: '/src/assets/images/studio_fairy_wings_1794892164112.jpg' },
      { name: '스노우 아이스 화이트', hex: '#FFFFFF', family: 'white', image: '/src/assets/images/studio_snow_wings_1794892173982.jpg' },
      { name: '아쿠아 씨폼 민트', hex: '#2DD4BF', family: 'green', image: '/src/assets/images/studio_ocean_mermaid_wings_1795494686254.jpg' }
    ],
    materials: ['형상기억 소프트 와이어', '홀로그램 펄 오간자', '신축성 어깨 밴드'],
    vibes: ['요정 숲', '러블리 베리', '스프링 블라썸'],
    sparkleLevel: 4,
    rating: 4.9,
    reviewCount: 147,
    sizes: ['Free (3~10세 신축성 숄더 밴드)'],
    description: '어깨에 부드럽게 매는 순간 숲속 팅커벨 요정으로 변신! 구부려도 부러지지 않는 유연한 안전 프레임과 은은하게 빛나는 홀로그램 날개가 꿈결 같은 분위기를 연출합니다.',
    features: [
      '몸에 맞춰 각도를 부드럽게 조절 가능한 플렉시블 안전 프레임',
      '살이 쓸리지 않는 부드러운 패브릭 숄더 밴드',
      '중앙 반짝이는 플라워 큐빅 코르사주 포인트'
    ],
    fabricCare: '오염 부위만 물티슈로 살살 닦기',
    lining: '저자극 밴딩',
    matchingAccessoryIds: ['dress-lavender-fairy', 'dress-aurora-rose'],
    isBest: false
  },
  {
    id: 'acc-feather-cape',
    name: '스노우 화이트 프린세스 퍼 케이프',
    subtitle: '보송보송 부드러운 에코 퍼와 크리스탈 리본 여밈의 따뜻한 공주 망토',
    category: 'accessory',
    subCategory: 'cape',
    price: 32000,
    originalPrice: 45000,
    image: '/src/assets/images/studio_white_cape_1794892164127.jpg',
    color: {
      name: '스노우 퓨어 화이트',
      hex: '#FFFFFF',
      family: 'white'
    },
    availableColors: [
      { name: '스노우 퓨어 화이트', hex: '#FFFFFF', family: 'white', image: '/src/assets/images/studio_white_cape_1794892164127.jpg' },
      { name: '홀리데이 루비 레드', hex: '#DC2626', family: 'red', image: '/src/assets/images/studio_ruby_cape_1794892167838.jpg' },
      { name: '샴페인 펄 골드', hex: '#FDE68A', family: 'gold', image: '/src/assets/images/studio_champagne_hooded_cloak_1795494683717.jpg' }
    ],
    materials: ['하이엔드 프리미엄 에코 퍼', '새틴 안감', '크리스탈 보석 버클'],
    vibes: ['크리스마스 에디션', '눈꽃 왕국', '미드나잇 신데렐라', '클래식 로열'],
    sparkleLevel: 3,
    rating: 4.9,
    reviewCount: 165,
    sizes: ['S (3-5세)', 'M (6-8세)', 'L (9-11세)'],
    description: '쌀쌀한 계절이나 에어컨 바람 아래에서도 공주님의 우아함을 지켜주는 포근한 화이트 퍼 케이프입니다. 털 빠짐이 거의 없는 최고급 친환경 인조 모피로 제작되었습니다.',
    features: [
      '털 빠짐 시험 검증 완료된 극세사 에코 퍼',
      '드레스 구김 없이 어깨 위에 살포시 얹는 편안한 핏',
      '반짝이는 보석 원터치 후크 잠금'
    ],
    fabricCare: '울샴푸 손세탁 후 자연 건조',
    lining: '부드러운 새틴 안감',
    matchingAccessoryIds: ['dress-ice-starlight', 'dress-aurora-rose', 'dress-swan-white'],
    isBest: false
  },
  {
    id: 'acc-spring-blossom-shoes',
    name: '스프링 블라썸 핑크 에나멜 리본 슈즈',
    subtitle: '벚꽃 플라워 크리스탈 브로치와 오간자 리본 스트랩의 폭신한 메리제인 파티슈즈',
    category: 'accessory',
    subCategory: 'shoes',
    price: 28000,
    originalPrice: 39000,
    image: '/src/assets/images/studio_blossom_shoes_1794892165201.jpg',
    color: {
      name: '블라썸 베이비 핑크',
      hex: '#FBCFE8',
      family: 'pink'
    },
    availableColors: [
      { name: '블라썸 베이비 핑크', hex: '#FBCFE8', family: 'pink', image: '/src/assets/images/studio_blossom_shoes_1794892165201.jpg' },
      { name: '신데렐라 아이스 블루', hex: '#60A5FA', family: 'blue', image: '/src/assets/images/studio_cinderella_shoes_1794892174489.jpg' },
      { name: '홀리데이 루비 레드', hex: '#B91C1C', family: 'red', image: '/src/assets/images/studio_red_shoes_1794892158542.jpg' }
    ],
    materials: ['소프트 에나멜 레더', '벚꽃 크리스탈 플라워 브로치', '라텍스 쿠션 인솔', '논슬립 밑창'],
    vibes: ['스프링 블라썸', '로맨틱 로즈', '러블리 베리'],
    sparkleLevel: 4,
    rating: 4.9,
    reviewCount: 142,
    sizes: ['150mm', '160mm', '170mm', '180mm', '190mm', '200mm'],
    description: '봄날의 벚꽃 정원을 걷는 듯 발걸음마다 사랑스러움이 피어나는 파스텔 핑크 에나멜 슈즈입니다. 발등의 입체 플라워 크리스탈 장식과 오간자 리본이 공주님의 발끝을 완벽하게 완성해 줍니다.',
    features: [
      '발이 아프지 않은 8mm 고탄성 라텍스 쿠셔닝 풋베드',
      '신고 벗기 편리한 원터치 벨크로 스트랩',
      '파티와 야외 활동 모두 안전한 논슬립 미끄럼 방지 고무창'
    ],
    fabricCare: '부드러운 천으로 가볍게 닦아내기',
    lining: '통기성 소프트 레더 라이닝',
    matchingAccessoryIds: ['dress-cherry-blossom-pink', 'dress-peach-blossom', 'dress-strawberry-chiffon'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-golden-palace-tiara',
    name: '골든 팰리스 엠프레스 24K 크리스탈 티아라',
    subtitle: '화려한 골드 필리그리 잎사귀와 샴페인 크리스탈, 담수 진주 드롭 왕관',
    category: 'accessory',
    subCategory: 'tiara',
    price: 29000,
    originalPrice: 42000,
    image: '/src/assets/images/studio_golden_tiara_1794892166014.jpg',
    color: {
      name: '임페리얼 샴페인 골드',
      hex: '#FDE047',
      family: 'gold'
    },
    availableColors: [
      { name: '임페리얼 샴페인 골드', hex: '#FDE047', family: 'gold', image: '/src/assets/images/studio_golden_tiara_1794892166014.jpg' },
      { name: '스파클 실버 크리스탈', hex: '#E2E8F0', family: 'white', image: '/src/assets/images/studio_royal_tiara_1794892160197.jpg' },
      { name: '로즈골드 사쿠라', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_rosegold_floral_tiara_1795494690091.jpg' }
    ],
    materials: ['골드 필리그리 합금 프레임', '샴페인 젬 크리스탈', '천연 담수 느낌 드롭 펄'],
    vibes: ['골든 팰리스', '클래식 로열', '동화 속 무도회'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 198,
    sizes: ['Free (양끝 빗살 핀 고정)'],
    description: '황실 무도회의 여왕님처럼 머리 위에 얹는 순간 찬란한 황금빛 아우라를 선사하는 하이엔드 로열 티아라입니다. 정교하게 조각된 황금 잎사귀와 눈부신 샴페인 크리스탈이 돋보입니다.',
    features: [
      '흘러내림 없는 인체공학적 라운드 빗살 고정 핀',
      '금속 알러지 방지 저자극 코팅 마감',
      '빛의 각도마다 영롱한 프리미엄 스와로브스키풍 크리스탈'
    ],
    fabricCare: '마른 극세사 천으로 닦아서 보관',
    lining: '실리콘 빗살 보호 팁',
    matchingAccessoryIds: ['dress-belle-gold', 'dress-swan-white', 'acc-rose-gloves'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-mermaid-shell-bag',
    name: '머메이드 오로라 진주 조개 미니 클러치',
    subtitle: '무지갯빛 자개 펄 쉘과 크리스탈 불가사리 버클, 진주 구슬 체인백',
    category: 'accessory',
    subCategory: 'bag',
    price: 27000,
    originalPrice: 38000,
    image: '/src/assets/images/studio_shell_bag_1794892167127.jpg',
    color: {
      name: '아쿠아 오로라 민트',
      hex: '#2DD4BF',
      family: 'green'
    },
    availableColors: [
      { name: '아쿠아 오로라 민트', hex: '#2DD4BF', family: 'green', image: '/src/assets/images/studio_shell_bag_1794892167127.jpg' },
      { name: '로즈 퀼팅 핑크', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_pearl_bag_1794892158482.jpg' },
      { name: '밀키 펄 아이보리', hex: '#FAF8F5', family: 'white', image: '/src/assets/images/studio_pearl_basket_bag_1795494868346.jpg' }
    ],
    materials: ['오로라 무지개 자개 펄 하드쉘', '크리스탈 스타피시 버클', '천연 진주 비즈 스트랩'],
    vibes: ['인어공주 바다', '요정 숲', '동화 속 무도회'],
    sparkleLevel: 5,
    rating: 4.9,
    reviewCount: 176,
    sizes: ['Free (가로 16cm x 높이 15cm x 폭 6cm)'],
    description: '바닷속 깊은 산호초 궁전에서 가져온 듯, 신비로운 조개 껍질 모양의 하드쉘에 반짝이는 불가사리 크리스탈 버클과 진주 손잡이가 달린 인어공주 전용 미니백입니다.',
    features: [
      '탈부착 가능한 롱 진주 체인으로 크로스백 겸 핸드백 연출',
      '아이 손으로 가볍게 열고 닫히는 마그네틱 원터치 잠금',
      '작은 보물과 립밤을 안전하게 보관하는 내부 새틴 안감'
    ],
    fabricCare: '부드러운 물티슈로 표면 닦기',
    lining: '실크 새틴 안감',
    matchingAccessoryIds: ['dress-mermaid-ocean-pearl', 'acc-glass-slippers'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-spring-cherry-wand',
    name: '체리블라썸 사쿠라 크리스탈 플라워 요술봉',
    subtitle: '로즈골드 핸들과 벚꽃 큐빅 참, 은은하게 흩날리는 새틴 리본 매직완드',
    category: 'accessory',
    subCategory: 'wand',
    price: 24000,
    originalPrice: 34000,
    image: '/src/assets/images/studio_cherry_wand_1794892167188.jpg',
    color: {
      name: '사쿠라 로즈 골드',
      hex: '#FB7185',
      family: 'pink'
    },
    availableColors: [
      { name: '사쿠라 로즈 골드', hex: '#FB7185', family: 'pink', image: '/src/assets/images/studio_cherry_wand_1794892167188.jpg' },
      { name: '스노우 아이스 블루', hex: '#7DD3FC', family: 'blue', image: '/src/assets/images/studio_ice_wand_1794892169816.jpg' },
      { name: '라벤더 버터플라이', hex: '#C084FC', family: 'purple', image: '/src/assets/images/studio_lavender_wand_1794892175061.jpg' }
    ],
    materials: ['로즈골드 메탈릭 완드', '사쿠라 크리스탈 플라워 참', '새틴 & 글리터 리본'],
    vibes: ['스프링 블라썸', '요정 숲', '로맨틱 로즈'],
    sparkleLevel: 5,
    rating: 4.9,
    reviewCount: 168,
    sizes: ['Free (길이 32cm)'],
    description: '주문을 외우면 벚꽃 꽃잎이 마법처럼 흩날릴 것 같은 사랑스러운 사쿠라 매직완드입니다. 찰랑이는 진주 참과 롱 새틴 리본이 흔들릴 때마다 공주님의 손끝을 신비롭게 빛내줍니다.',
    features: [
      '아이 손에 꼭 맞는 가볍고 안전한 라운드 로즈골드 핸들',
      '단단히 세팅되어 떨어지지 않는 정밀 크리스탈 꽃잎',
      '우아하게 흩날리는 3색 프리미엄 새틴 스트리머'
    ],
    fabricCare: '마른 천으로 가볍게 닦기',
    lining: '저자극 코팅',
    matchingAccessoryIds: ['dress-cherry-blossom-pink', 'acc-spring-blossom-shoes'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-christmas-ruby-cape',
    name: '홀리데이 루비 벨벳 스노우 후드 케이프',
    subtitle: '루비 레드 로열 벨벳과 보송보송 화이트 에코 퍼 후드, 골드 글리터 리본의 크리스마스 망토',
    category: 'accessory',
    subCategory: 'cape',
    price: 34000,
    originalPrice: 49000,
    image: '/src/assets/images/studio_ruby_cape_1794892167838.jpg',
    color: {
      name: '홀리데이 루비 레드',
      hex: '#DC2626',
      family: 'red'
    },
    availableColors: [
      { name: '홀리데이 루비 레드', hex: '#DC2626', family: 'red', image: '/src/assets/images/studio_ruby_cape_1794892167838.jpg' },
      { name: '스노우 펄 화이트', hex: '#FFFFFF', family: 'white', image: '/src/assets/images/studio_white_cape_1794892164127.jpg' },
      { name: '로열 에메랄드 그린', hex: '#059669', family: 'green', image: '/src/assets/images/studio_emerald_cape_1794892167616.jpg' }
    ],
    materials: ['로열 크리스마스 벨벳', '스노우 에코 퍼 카라 & 후드', '골드 글리터 보우', '새틴 안감'],
    vibes: ['크리스마스 에디션', '동화 속 무도회', '클래식 로열', '눈꽃 왕국'],
    sparkleLevel: 4,
    rating: 5.0,
    reviewCount: 178,
    sizes: ['S (3-5세)', 'M (6-8세)', 'L (9-11세)'],
    description: '크리스마스 파티와 한겨울 특별한 외출을 위한 최고급 루비 레드 벨벳 후드 케이프입니다. 보송보송한 스노우 에코 퍼 트리밍과 고급스러운 골드 글리터 리본이 어떤 드레스 위에 걸쳐도 완벽한 홀리데이 공주님으로 변신시켜 줍니다.',
    features: [
      '보온성과 기품을 모두 갖춘 프리미엄 헤비 벨벳',
      '털 빠짐 없는 최고급 스노우 에코 퍼 트리밍',
      '골드 글리터 리본 장식 & 원터치 자석 버클',
      '아이 피부에 닿는 부위 부드러운 새틴 안감'
    ],
    fabricCare: '드라이클리닝 권장 또는 찬물 단독 손세탁',
    lining: '부드러운 프리미엄 새틴 안감',
    matchingAccessoryIds: ['dress-christmas-velvet', 'acc-holiday-velvet-tiara', 'acc-christmas-red-shoes'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-sapphire-heart-necklace',
    name: '신데렐라 사파이어 하트 펄 목걸이',
    subtitle: '오스트리아 사파이어 블루 하트 크리스탈과 2줄 천연 담수 느낌 펄 체인의 로열 목걸이',
    category: 'accessory',
    subCategory: 'necklace',
    price: 29000,
    originalPrice: 39000,
    image: '/src/assets/images/studio_sapphire_necklace_1794892168493.jpg',
    color: {
      name: '미드나잇 사파이어 블루',
      hex: '#2563EB',
      family: 'blue'
    },
    availableColors: [
      { name: '미드나잇 사파이어 블루', hex: '#2563EB', family: 'blue', image: '/src/assets/images/studio_sapphire_necklace_1794892168493.jpg' },
      { name: '홀리데이 루비 레드', hex: '#DC2626', family: 'red', image: '/src/assets/images/studio_ruby_necklace_1794892169216.jpg' },
      { name: '스노우 크리스탈 화이트', hex: '#FFFFFF', family: 'white', image: '/src/assets/images/studio_heart_necklace_1794892160631.jpg' }
    ],
    materials: ['오스트리아 하트 컷 사파이어 큐빅', '천연 담수 느낌 펄 체인', '다이아몬드 지르콘 프레임', '안전 릴리즈 체인'],
    vibes: ['미드나잇 신데렐라', '눈꽃 왕국', '동화 속 무도회', '클래식 로열'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 214,
    sizes: ['Free (길이 조절 연장 체인 5cm 포함)'],
    description: '신데렐라의 무도회와 깊은 밤하늘의 별빛을 담은 하트 컷 로열 사파이어 블루 크리스탈 펜던트 목걸이입니다. 정교하게 세팅된 다이아몬드 지르콘 프레임과 은은한 진주 체인이 목선을 품격 있게 밝혀줍니다.',
    features: [
      '빛을 반사하는 오스트리아 하트 컷 사파이어 젬',
      'KC 어린이 안전 인증 무독성 은도금 프레임',
      '당김 시 안전하게 분리되는 키즈 세이프티 버클',
      '로열 핑크 주얼리 케이스 기본 제공'
    ],
    fabricCare: '부드러운 마른 천으로 닦아 보관',
    lining: 'KC 어린이 안전 인증 무니켈',
    matchingAccessoryIds: ['dress-cinderella-midnight', 'dress-ice-starlight', 'acc-glass-slippers'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-holiday-wings',
    name: '홀리데이 루비 스노우 요정 날개',
    subtitle: '루비 레드 글리터 튤과 골드 눈꽃 필리그리가 반짝이는 크리스마스 요정 날개',
    category: 'accessory',
    subCategory: 'wings',
    price: 26000,
    originalPrice: 37000,
    image: '/src/assets/images/studio_holiday_wings_1794892170506.jpg',
    color: {
      name: '홀리데이 루비 레드',
      hex: '#DC2626',
      family: 'red'
    },
    availableColors: [
      { name: '홀리데이 루비 레드', hex: '#DC2626', family: 'red', image: '/src/assets/images/studio_holiday_wings_1794892170506.jpg' },
      { name: '스노우 오로라 화이트', hex: '#FFFFFF', family: 'white', image: '/src/assets/images/studio_fairy_wings_1794892164112.jpg' }
    ],
    materials: ['형상기억 플렉시블 와이어', '루비 스팽글 자수 튤', '골드 눈꽃 필리그리', '소프트 벨벳 어깨 밴드'],
    vibes: ['크리스마스 에디션', '동화 속 무도회', '요정 숲'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 139,
    sizes: ['Free (3~11세 신축성 숄더 밴드)'],
    description: '크리스마스 트리의 꼭대기에서 춤추는 요정처럼 반짝이는 루비 레드 스팽글과 골드 눈꽃 자수가 수놓아진 홀리데이 요정 날개입니다. 어깨를 짓누르지 않는 부드러운 패브릭 밴드로 편안하게 착용할 수 있습니다.',
    features: [
      '유연하게 각도를 조절할 수 있는 플렉시블 안전 프레임',
      '중앙 화려한 14K 골드 컬러 눈꽃 코르사주',
      '살이 쓸리지 않는 소프트 벨벳 어깨 스트랩'
    ],
    fabricCare: '물티슈로 오염 부위 가볍게 닦기',
    lining: '저자극 밴딩',
    matchingAccessoryIds: ['dress-christmas-velvet', 'acc-holiday-velvet-tiara'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-ice-crystal-wand',
    name: '스노우 크리스탈 눈꽃 매직 요술봉',
    subtitle: '대형 다면 얼음 눈꽃 보석과 은빛 핸들, 찰랑이는 스카이블루 새틴 리본 마법봉',
    category: 'accessory',
    subCategory: 'wand',
    price: 25000,
    originalPrice: 36000,
    image: '/src/assets/images/studio_ice_wand_1794892169816.jpg',
    color: {
      name: '스노우 아이스 블루',
      hex: '#7DD3FC',
      family: 'blue'
    },
    availableColors: [
      { name: '스노우 아이스 블루', hex: '#7DD3FC', family: 'blue', image: '/src/assets/images/studio_ice_wand_1794892169816.jpg' },
      { name: '순백 실버 화이트', hex: '#F8FAFC', family: 'white', image: '/src/assets/images/studio_royal_tiara_1794892160197.jpg' },
      { name: '사쿠라 로즈 핑크', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_cherry_wand_1794892167188.jpg' }
    ],
    materials: ['실버 필리그리 완드 바디', '대형 얼음 눈꽃 다면 큐빅', '스카이 블루 새틴 & 오간자 리본'],
    vibes: ['눈꽃 왕국', '미드나잇 신데렐라', '동화 속 무도회'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 228,
    sizes: ['Free (길이 33cm)'],
    description: '겨울 왕국의 엘사 여왕처럼 얼음 마법을 부릴 수 있을 것 같은 대형 크리스탈 눈꽃 요술봉입니다. 정교하게 세공된 실버 릴리프 핸들과 흩날리는 은빛 리본이 아이들의 상상력을 가득 채워줍니다.',
    features: [
      '빛을 다각도로 굴절시키는 정밀 다면 눈꽃 보석',
      '가벼운 초경량 알로이 핸들로 장시간 들고 놀아도 무리 없음',
      '찰랑이는 스와로브스키풍 미니 크리스탈 드롭 참'
    ],
    fabricCare: '마른 안경천으로 닦기',
    lining: 'KC 안전 인증',
    matchingAccessoryIds: ['dress-ice-starlight', 'dress-cinderella-midnight', 'acc-royal-tiara-wand'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-cinderella-blue-gloves',
    name: '신데렐라 파스텔 블루 새틴 리본 롱 장갑',
    subtitle: '손목을 감싸는 진주 리본과 부드러운 스판 새틴의 우아한 신데렐라 장갑',
    category: 'accessory',
    subCategory: 'gloves',
    price: 23000,
    originalPrice: 33000,
    image: '/src/assets/images/studio_blue_gloves_1794892170626.jpg',
    color: {
      name: '신데렐라 파스텔 블루',
      hex: '#93C5FD',
      family: 'blue'
    },
    availableColors: [
      { name: '신데렐라 파스텔 블루', hex: '#93C5FD', family: 'blue', image: '/src/assets/images/studio_blue_gloves_1794892170626.jpg' },
      { name: '스노우 펄 화이트', hex: '#FFFFFF', family: 'white', image: '/src/assets/images/studio_rose_gloves_1794892163071.jpg' }
    ],
    materials: ['프리미엄 소프트 스판 새틴', '입체 진주 리본 브로치', '크리스탈 비딩'],
    vibes: ['미드나잇 신데렐라', '동화 속 무도회', '눈꽃 왕국', '클래식 로열'],
    sparkleLevel: 4,
    rating: 4.9,
    reviewCount: 156,
    sizes: ['Free (4~9세 신축성 스판 핏)'],
    description: '무도회장의 신데렐라가 착용한 것과 똑같은 우아한 하늘빛 새틴 롱 장갑입니다. 손목을 장식한 풍성한 진주 리본과 부드러운 스판 소재가 아이의 손가락을 조임 없이 편안하게 감싸줍니다.',
    features: [
      '당겨도 형태가 복원되는 고급 신축성 스판 새틴',
      '손목 위로 입체감 있게 빛나는 펄 리본 장식',
      '손끝 올풀림 없는 오버록 2중 안심 봉제'
    ],
    fabricCare: '미온수 손세탁',
    lining: '부드러운 내부 안감',
    matchingAccessoryIds: ['dress-cinderella-midnight', 'dress-ice-starlight', 'acc-glass-slippers'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-holiday-ruby-necklace',
    name: '홀리데이 루비 하트 골든 펄 목걸이',
    subtitle: '정교한 하트 컷 루비 젬스톤과 14K 골드 체인, 천연 담수 진주의 홀리데이 초커',
    category: 'accessory',
    subCategory: 'necklace',
    price: 29000,
    originalPrice: 39000,
    image: '/src/assets/images/studio_ruby_necklace_1794892169216.jpg',
    color: {
      name: '홀리데이 루비 레드',
      hex: '#DC2626',
      family: 'red'
    },
    availableColors: [
      { name: '홀리데이 루비 레드', hex: '#DC2626', family: 'red', image: '/src/assets/images/studio_ruby_necklace_1794892169216.jpg' },
      { name: '로열 사파이어 블루', hex: '#2563EB', family: 'blue', image: '/src/assets/images/studio_sapphire_necklace_1794892168493.jpg' },
      { name: '로맨틱 로즈 핑크', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_heart_necklace_1794892160631.jpg' }
    ],
    materials: ['하트 컷 루비 젬스톤', '14K 골드 도금 체인', '천연 담수 스타일 진주', '큐빅 지르콘 프레임'],
    vibes: ['크리스마스 에디션', '클래식 로열', '로맨틱 로즈'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 187,
    sizes: ['Free (연장 체인 5cm 포함)'],
    description: '크리스마스 트리의 가장 찬란한 별처럼 빛나는 하트 컷 루비 레드 원석과 천연 진주 비즈가 조화롭게 어우러진 최고급 홀리데이 초커 목걸이입니다. 목걸이를 거는 순간 모든 시선을 사로잡습니다.',
    features: [
      '눈부신 빛을 내뿜는 정밀 컷팅 루비 레드 크리스탈',
      '14K 리얼 골드 이온 도금으로 변색 방지',
      '어린이 안전 분리형 자석 릴리즈 버클'
    ],
    fabricCare: '부드러운 천으로 닦아 보관',
    lining: 'KC 무니켈 인증',
    matchingAccessoryIds: ['dress-christmas-velvet', 'acc-holiday-velvet-tiara', 'acc-christmas-red-shoes'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-emerald-fairy-bracelet',
    name: '포레스트 에메랄드 플라워 참 요정 팔찌',
    subtitle: '물방울 에메랄드 크리스탈과 황금빛 꽃잎 참, 천연 펄이 딸랑이는 숲속 요정 팔찌',
    category: 'accessory',
    subCategory: 'bracelet',
    price: 24000,
    originalPrice: 35000,
    image: '/src/assets/images/studio_emerald_bracelet_1794892172429.jpg',
    color: {
      name: '에메랄드 포레스트 그린',
      hex: '#059669',
      family: 'green'
    },
    availableColors: [
      { name: '에메랄드 포레스트 그린', hex: '#059669', family: 'green', image: '/src/assets/images/studio_emerald_bracelet_1794892172429.jpg' },
      { name: '로즈 핑크 & 펄 화이트', hex: '#FCE7F3', family: 'pink', image: '/src/assets/images/studio_pearl_bracelet_1794892161384.jpg' }
    ],
    materials: ['물방울 컷 에메랄드 큐빅', '골든 플라워 참', '천연 펄 비즈', '14K 골드 도금 체인'],
    vibes: ['요정 숲', '골든 팰리스', '스프링 블라썸', '인어공주 바다'],
    sparkleLevel: 5,
    rating: 4.9,
    reviewCount: 163,
    sizes: ['Free (손목 둘레 11~15cm 조절 토글 체인)'],
    description: '숲속 요정 여왕의 축복을 받은 듯 영롱한 물방울 에메랄드 원석과 활짝 핀 황금 꽃잎 참, 은은한 진주가 달랑이는 숲속의 요정 팔찌입니다. 손목을 움직일 때마다 맑은 소리와 싱그러운 빛을 냅니다.',
    features: [
      '싱그러운 숲의 마법을 담은 영롱한 에메랄드 크리스탈',
      '아이 손목에 닿아도 걸림 없는 매끄러운 엠보싱 마감',
      '길이 조절용 하트 체인 장착'
    ],
    fabricCare: '마른 천으로 닦아서 보관',
    lining: 'KC 안심 무알러지',
    matchingAccessoryIds: ['dress-emerald-forest-fairy', 'acc-fairy-wings', 'acc-royal-tiara-wand'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-sapphire-earrings',
    name: '로열 사파이어 필리그리 드롭 귀찌 (무통증 실리콘)',
    subtitle: '골드 필리그리 왕관 문양과 물방울 사파이어 큐빅의 아프지 않은 로열 귀찌',
    category: 'accessory',
    subCategory: 'earrings',
    price: 26000,
    originalPrice: 36000,
    image: '/src/assets/images/studio_sapphire_earrings_1794892172404.jpg',
    color: {
      name: '로열 사파이어 블루',
      hex: '#2563EB',
      family: 'blue'
    },
    availableColors: [
      { name: '로열 사파이어 블루', hex: '#2563EB', family: 'blue', image: '/src/assets/images/studio_sapphire_earrings_1794892172404.jpg' },
      { name: '골든 로즈 핑크', hex: '#FB7185', family: 'pink', image: '/src/assets/images/studio_crown_earrings_1794892161863.jpg' }
    ],
    materials: ['물방울 사파이어 큐빅', '골드 필리그리 레이스 프레임', '무통증 에어 실리콘 쿠션'],
    vibes: ['미드나잇 신데렐라', '골든 팰리스', '눈꽃 왕국', '동화 속 무도회'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 195,
    sizes: ['Free (스프링 장력 자동 조절 클립)'],
    description: '귀를 뚫지 않은 어린이도 하루 종일 편안하게 착용할 수 있는 무통증 에어 실리콘 클립 귀찌입니다. 화려한 골드 필리그리 왕관 문양 아래로 찰랑이는 물방울 사파이어 큐빅이 무도회 여왕의 기품을 선사합니다.',
    features: [
      '귓볼 통증 없는 에어 쿠션 실리콘 팁 장착',
      '안전한 키즈 전용 스프링 힌지 클립 구조',
      '14K 골드 도금 프레임과 사파이어 젬스톤'
    ],
    fabricCare: '마른 극세사 천으로 닦기',
    lining: '무알러지 코팅',
    matchingAccessoryIds: ['dress-cinderella-midnight', 'acc-sapphire-heart-necklace'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-holiday-bag',
    name: '홀리데이 스타 루비 벨벳 미니 핸드백',
    subtitle: '골드 크리스탈 스타 버클과 루비 레드 벨벳, 진주 구슬 핸들의 크리스마스 백',
    category: 'accessory',
    subCategory: 'bag',
    price: 28000,
    originalPrice: 39000,
    image: '/src/assets/images/studio_holiday_bag_1794892173408.jpg',
    color: {
      name: '홀리데이 루비 레드',
      hex: '#B91C1C',
      family: 'red'
    },
    availableColors: [
      { name: '홀리데이 루비 레드', hex: '#B91C1C', family: 'red', image: '/src/assets/images/studio_holiday_bag_1794892173408.jpg' },
      { name: '로즈 퀼팅 핑크', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_pearl_bag_1794892158482.jpg' },
      { name: '아쿠아 오로라 민트', hex: '#2DD4BF', family: 'green', image: '/src/assets/images/studio_shell_bag_1794892167127.jpg' }
    ],
    materials: ['홀리데이 로열 벨벳', '천연 진주 비즈 핸들', '골드 스타 크리스탈 버클', '새틴 안감'],
    vibes: ['크리스마스 에디션', '클래식 로열', '동화 속 무도회'],
    sparkleLevel: 4,
    rating: 5.0,
    reviewCount: 167,
    sizes: ['Free (가로 15cm x 높이 13cm x 폭 6cm)'],
    description: '크리스마스 트리의 황금 별빛을 담은 크리스탈 스타 버클과 루비 레드 벨벳, 진주 손잡이가 앙증맞은 홀리데이 리미티드 핸드백입니다. 벨벳 리본 참과 골드 체인 스트랩이 포함되어 크로스백으로도 연출할 수 있습니다.',
    features: [
      '어린이 손에 착 감기는 광택 펄 비즈 핸들',
      '원터치 마그네틱 자석 잠금장치',
      '골드 체인 숄더 스트랩 무료 동봉 (핸드백 & 크로스백 2WAY)'
    ],
    fabricCare: '부드러운 솔로 털어내기',
    lining: '새틴 라이닝',
    matchingAccessoryIds: ['dress-christmas-velvet', 'acc-holiday-velvet-tiara', 'acc-christmas-red-shoes'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-golden-palace-bracelet',
    name: '골든 팰리스 샴페인 펄 참 브레이슬릿',
    subtitle: '14K 골드 도금 왕관 참과 은은한 샴페인 크리스탈이 달랑이는 황실 공주 팔찌',
    category: 'accessory',
    subCategory: 'bracelet',
    price: 25000,
    originalPrice: 36000,
    image: '/src/assets/images/studio_gold_bracelet_1794892173917.jpg',
    color: {
      name: '임페리얼 골드 & 에메랄드',
      hex: '#FDE047',
      family: 'gold'
    },
    availableColors: [
      { name: '임페리얼 골드 & 에메랄드', hex: '#FDE047', family: 'gold', image: '/src/assets/images/studio_gold_bracelet_1794892173917.jpg' },
      { name: '로맨틱 로즈 펄', hex: '#FB7185', family: 'pink', image: '/src/assets/images/studio_pearl_bracelet_1794892161384.jpg' }
    ],
    materials: ['14K 골드 도금 필리그리', '샴페인 지르콘 큐빅', '담수 스타일 진주', '조절 체인'],
    vibes: ['골든 팰리스', '클래식 로열', '동화 속 무도회'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 145,
    sizes: ['Free (손목 둘레 11~15cm)'],
    description: '황실 무도회의 공주님 손목에서 영롱하게 빛나는 샴페인 골드 필리그리 팔찌입니다.',
    features: ['14K 골드 도금', '안전 토글 체인', '피부 무자극'],
    fabricCare: '마른 천으로 닦기',
    lining: 'KC 무니켈 인증',
    matchingAccessoryIds: ['dress-belle-gold', 'acc-golden-palace-tiara'],
    isBest: false,
    isNew: true
  },
  {
    id: 'acc-swan-white-gloves',
    name: '스완 화이트 깃털 오간자 새틴 장갑',
    subtitle: '보드라운 오간자 프릴과 순백의 스판 새틴, 진주 비즈 장식의 발레리나 장갑',
    category: 'accessory',
    subCategory: 'gloves',
    price: 22000,
    originalPrice: 32000,
    image: '/src/assets/images/studio_white_gloves_1794892173018.jpg',
    color: {
      name: '밀키 펄 화이트',
      hex: '#FFFFFF',
      family: 'white'
    },
    availableColors: [
      { name: '밀키 펄 화이트', hex: '#FFFFFF', family: 'white', image: '/src/assets/images/studio_white_gloves_1794892173018.jpg' },
      { name: '파스텔 블루', hex: '#93C5FD', family: 'blue', image: '/src/assets/images/studio_blue_gloves_1794892170626.jpg' }
    ],
    materials: ['스판 새틴', '깃털 오간자 프릴', '진주 비즈'],
    vibes: ['눈꽃 왕국', '골든 팰리스', '동화 속 무도회', '클래식 로열'],
    sparkleLevel: 4,
    rating: 4.9,
    reviewCount: 132,
    sizes: ['Free (4~9세)'],
    description: '백조의 깃털처럼 보드라운 오간자 프릴과 순백의 새틴으로 이루어진 정통 발레리나 프린세스 장갑입니다.',
    features: ['신축성 스판 새틴', '손목 진주 비즈 장식', '무자극 안감'],
    fabricCare: '미온수 손세탁',
    lining: '저자극 새틴',
    matchingAccessoryIds: ['dress-swan-white', 'dress-ice-starlight'],
    isBest: false,
    isNew: true
  },
  {
    id: 'acc-ice-crystal-wings',
    name: '스노우 퀸 크리스탈 오로라 날개',
    subtitle: '순백의 홀로그램 오간자와 은빛 눈꽃 자수가 은은하게 빛나는 겨울 요정 날개',
    category: 'accessory',
    subCategory: 'wings',
    price: 25000,
    originalPrice: 35000,
    image: '/src/assets/images/studio_snow_wings_1794892173982.jpg',
    color: {
      name: '스노우 아이스 화이트',
      hex: '#FFFFFF',
      family: 'white'
    },
    availableColors: [
      { name: '스노우 아이스 화이트', hex: '#FFFFFF', family: 'white', image: '/src/assets/images/studio_snow_wings_1794892173982.jpg' },
      { name: '홀리데이 루비 골드', hex: '#DC2626', family: 'red', image: '/src/assets/images/studio_holiday_wings_1794892170506.jpg' }
    ],
    materials: ['홀로그램 오간자', '크리스탈 눈꽃 비딩', '신축성 밴드'],
    vibes: ['눈꽃 왕국', '미드나잇 신데렐라', '요정 숲'],
    sparkleLevel: 5,
    rating: 4.9,
    reviewCount: 161,
    sizes: ['Free (3~11세)'],
    description: '겨울 왕국의 설원을 가르는 순백의 얼음 요정 날개입니다. 빛의 각도마다 무지갯빛 오로라가 반사됩니다.',
    features: ['유연한 플렉시블 프레임', '눈꽃 홀로그램 자수', '소프트 어깨 밴드'],
    fabricCare: '물티슈로 오염 제거',
    lining: '저자극 밴딩',
    matchingAccessoryIds: ['dress-ice-starlight', 'acc-ice-crystal-wand'],
    isBest: false,
    isNew: true
  },
  {
    id: 'dress-christmas-emerald-velvet',
    name: '홀리데이 에메랄드 포레스트 로열 볼가운',
    subtitle: '포레스트 그린 벨벳과 골드 스파클 튤, 눈꽃 자수의 크리스마스 리미티드 볼가운',
    category: 'dress',
    subCategory: 'ballgown',
    price: 58000,
    originalPrice: 89000,
    image: '/src/assets/images/studio_christmas_emerald_1794892112538.jpg',
    color: {
      name: '로열 포레스트 에메랄드',
      hex: '#059669',
      family: 'green'
    },
    availableColors: [
      { name: '로열 포레스트 에메랄드', hex: '#059669', family: 'green', image: '/src/assets/images/studio_christmas_emerald_1794892112538.jpg' },
      { name: '홀리데이 루비 레드', hex: '#DC2626', family: 'red', image: '/src/assets/images/studio_christmas_red_1794892112536.jpg' },
      { name: '미드나잇 네이비', hex: '#1E3A8A', family: 'navy', image: '/src/assets/images/studio_christmas_navy_1794892114866.jpg' }
    ],
    materials: ['하이엔드 로열 벨벳', '골드 글리터 튤', '에코 퍼 카라', '눈꽃 비딩'],
    vibes: ['크리스마스 에디션', '골든 팰리스', '클래식 로열', '요정 숲'],
    silhouette: '벨라인 볼가운',
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 172,
    sizes: ['100 (3-4세)', '110 (4-5세)', '120 (5-6세)', '130 (7-8세)', '140 (9-10세)'],
    description: '크리스마스 트리의 깊고 영롱한 상록수 빛깔을 담은 에메랄드 그린 벨벳 볼가운입니다.',
    features: ['크리스마스 에디션 리미티드', '100% 무자극 순면 안감', '탈부착 에코 퍼 카라'],
    fabricCare: '드라이클리닝 권장',
    lining: '100% 프리미엄 순면 안감',
    matchingAccessoryIds: ['acc-holiday-wings', 'acc-emerald-fairy-bracelet', 'acc-holiday-velvet-tiara'],
    isBest: true,
    isNew: true
  },
  {
    id: 'dress-ruby-holiday-tutu',
    name: '홀리데이 루비 스노우 티어드 튜튜 드레스',
    subtitle: '화사한 루비 레드 글리터 튤과 화이트 눈꽃 레이스의 크리스마스 파티 튜튜',
    category: 'dress',
    subCategory: 'tutu',
    price: 54000,
    originalPrice: 78000,
    image: '/src/assets/images/studio_ruby_tutu_1794892132292.jpg',
    color: {
      name: '홀리데이 루비 레드',
      hex: '#DC2626',
      family: 'red'
    },
    availableColors: [
      { name: '홀리데이 루비 레드', hex: '#DC2626', family: 'red', image: '/src/assets/images/studio_ruby_tutu_1794892132292.jpg' },
      { name: '로맨틱 로즈 핑크', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_aurora_rose_1794892114434.jpg' },
      { name: '포레스트 그린', hex: '#059669', family: 'green', image: '/src/assets/images/studio_christmas_emerald_1794892112538.jpg' }
    ],
    materials: ['스파클 루비 튤', '스노우 레이스', '벨벳 리본'],
    vibes: ['크리스마스 에디션', '러블리 베리', '로맨틱 로즈'],
    silhouette: '티어드 프릴 러플',
    sparkleLevel: 4,
    rating: 4.9,
    reviewCount: 164,
    sizes: ['100 (3-4세)', '110 (4-5세)', '120 (5-6세)', '130 (7-8세)', '140 (9-10세)'],
    description: '크리스마스 파티에서 경쾌하게 뛰어놀 수 있는 루비 레드 캉캉 튜튜 드레스입니다.',
    features: ['입체 프릴 러플', '100% 코튼 라이닝', '신축성 밴딩'],
    fabricCare: '손세탁',
    lining: '100% 프리미엄 순면 안감',
    matchingAccessoryIds: ['acc-holiday-bag', 'acc-holiday-ruby-necklace'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-midnight-sapphire-tiara',
    name: '미드나잇 스타 사파이어 로열 티아라',
    subtitle: '깊은 밤하늘의 네이비 사파이어 젬과 은하수 크리스탈 지르콘 왕관',
    category: 'accessory',
    subCategory: 'tiara',
    price: 29000,
    originalPrice: 42000,
    image: '/src/assets/images/studio_sapphire_tiara_1794892174660.jpg',
    color: {
      name: '미드나잇 로열 네이비',
      hex: '#1E1B4B',
      family: 'navy'
    },
    availableColors: [
      { name: '미드나잇 로열 네이비', hex: '#1E1B4B', family: 'navy', image: '/src/assets/images/studio_sapphire_tiara_1794892174660.jpg' },
      { name: '스노우 실버 화이트', hex: '#FFFFFF', family: 'white', image: '/src/assets/images/studio_royal_tiara_1794892160197.jpg' },
      { name: '루비 벨벳 레드', hex: '#DC2626', family: 'red', image: '/src/assets/images/studio_holiday_tiara_1794892159441.jpg' }
    ],
    materials: ['사파이어 젬스톤', '은도금 알로이 프레임', '스마트 실리콘 쿠션 헤어콤'],
    vibes: ['미드나잇 신데렐라', '눈꽃 왕국', '동화 속 무도회', '클래식 로열'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 178,
    sizes: ['Free (어린이 맞춤 실리콘 캡)'],
    description: '자정의 신데렐라 궁전 무도회에서 가장 신비롭게 빛나는 로열 네이비 사파이어 티아라입니다. 두통 방지 실리콘 캡이 장착되어 있습니다.',
    features: ['오스트리아 정품 사파이어 컷팅 큐빅', '흘러내리지 않는 빗살 고정 핀', 'KC 안전 인증'],
    fabricCare: '마른 천으로 닦기',
    lining: '무니켈 코팅',
    matchingAccessoryIds: ['dress-midnight-galaxy-star', 'dress-cinderella-midnight'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-lavender-fairy-wand',
    name: '라벤더 블라썸 버터플라이 매직 요술봉',
    subtitle: '신비로운 바이올렛 나비 아플리케와 영롱한 퍼플 크리스탈 스타 요술봉',
    category: 'accessory',
    subCategory: 'wand',
    price: 24000,
    originalPrice: 34000,
    image: '/src/assets/images/studio_lavender_wand_1794892175061.jpg',
    color: {
      name: '미스틱 라벤더 & 로즈',
      hex: '#C084FC',
      family: 'purple'
    },
    availableColors: [
      { name: '미스틱 라벤더 & 로즈', hex: '#C084FC', family: 'purple', image: '/src/assets/images/studio_lavender_wand_1794892175061.jpg' },
      { name: '아이스 크리스탈 블루', hex: '#7DD3FC', family: 'blue', image: '/src/assets/images/studio_ice_wand_1794892169816.jpg' },
      { name: '스파클 실버 화이트', hex: '#FFFFFF', family: 'white', image: '/src/assets/images/studio_royal_tiara_1794892160197.jpg' }
    ],
    materials: ['바이올렛 홀로그램 오간자', '나비 크리스탈 참', '새틴 리본'],
    vibes: ['요정 숲', '러블리 베리', '로맨틱 로즈', '스프링 블라썸'],
    sparkleLevel: 4,
    rating: 4.9,
    reviewCount: 154,
    sizes: ['Free (길이 32cm)'],
    description: '보랏빛 숲속 나비 요정의 마법을 담은 낭만적인 라벤더 요술봉입니다. 흔들 때마다 찰랑이는 리본과 반짝이는 나비가 공주님의 손을 환하게 밝힙니다.',
    features: ['입체 글리터 나비 참', '손목 걸이 스트랩 포함', '안전 라운드 마감'],
    fabricCare: '가볍게 털어내기',
    lining: 'KC 인증',
    matchingAccessoryIds: ['dress-lavender-fairy', 'acc-fairy-wings'],
    isBest: false,
    isNew: true
  },
  {
    id: 'acc-cinderella-glass-heels',
    name: '미드나잇 신데렐라 블루 리본 유리구두',
    subtitle: '아이스 블루 글리터와 오간자 빅 리본, 하트 크리스탈 버클의 편안한 파티 슈즈',
    category: 'accessory',
    subCategory: 'shoes',
    price: 34000,
    originalPrice: 48000,
    image: '/src/assets/images/studio_cinderella_shoes_1794892174489.jpg',
    color: {
      name: '신데렐라 아이스 블루',
      hex: '#60A5FA',
      family: 'blue'
    },
    availableColors: [
      { name: '신데렐라 아이스 블루', hex: '#60A5FA', family: 'blue', image: '/src/assets/images/studio_cinderella_shoes_1794892174489.jpg' },
      { name: '스노우 펄 실버', hex: '#E2E8F0', family: 'white', image: '/src/assets/images/studio_glass_slippers_1794892161577.jpg' },
      { name: '블라썸 베이비 핑크', hex: '#FBCFE8', family: 'pink', image: '/src/assets/images/studio_blossom_shoes_1794892165201.jpg' }
    ],
    materials: ['영롱 글리터 패브릭', '오간자 리본', '라텍스 메모리폼 인솔', '논슬립 밑창'],
    vibes: ['미드나잇 신데렐라', '눈꽃 왕국', '동화 속 무도회'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 289,
    sizes: ['150mm', '160mm', '170mm', '180mm', '190mm', '200mm'],
    description: '신데렐라가 무도회에 신고 간 유리구두의 하늘빛 버전입니다. 폭신한 라텍스 인솔과 미끄럼 방지 고무창으로 편안하게 걸을 수 있습니다.',
    features: ['8mm 충격 흡수 라텍스 쿠션', '발등 조절 벨크로 스트랩', '미끄럼 방지창'],
    fabricCare: '물티슈로 오염 닦기',
    lining: '부드러운 통기성 메쉬',
    matchingAccessoryIds: ['dress-cinderella-midnight', 'acc-cinderella-blue-gloves'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-mermaid-ocean-necklace',
    name: '머메이드 아쿠아 조개 진주 목걸이',
    subtitle: '영롱한 아쿠아 민트빛 조개 펜던트와 천연 자개 펄 체인의 인어공주 목걸이',
    category: 'accessory',
    subCategory: 'necklace',
    price: 27000,
    originalPrice: 38000,
    image: '/src/assets/images/studio_ocean_necklace_1794892175966.jpg',
    color: {
      name: '오션 사파이어 블루',
      hex: '#0EA5E9',
      family: 'blue'
    },
    availableColors: [
      { name: '오션 사파이어 블루', hex: '#0EA5E9', family: 'blue', image: '/src/assets/images/studio_ocean_necklace_1794892175966.jpg' },
      { name: '로맨틱 로즈 핑크', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_heart_necklace_1794892160631.jpg' },
      { name: '루비 골드 레드', hex: '#DC2626', family: 'red', image: '/src/assets/images/studio_ruby_necklace_1794892169216.jpg' }
    ],
    materials: ['자개 조개 펜던트', '천연 펄 비즈', '안전 릴리즈 버클'],
    vibes: ['인어공주 바다', '요정 숲', '동화 속 무도회'],
    sparkleLevel: 4,
    rating: 4.9,
    reviewCount: 147,
    sizes: ['Free (길이 조절 연장 체인 5cm 포함)'],
    description: '바닷속 깊은 궁전의 인어공주가 아끼는 조개 모양 자개 펜던트와 은은한 진주 체인의 목걸이입니다.',
    features: ['어린이 안전 릴리즈 잠금', 'KC 안전 인증 무니켈', '선물용 핑크 파우치 증정'],
    fabricCare: '마른 천으로 닦기',
    lining: '무니켈',
    matchingAccessoryIds: ['dress-mermaid-ocean-pearl', 'acc-mermaid-shell-bag'],
    isBest: false,
    isNew: true
  },
  {
    id: 'acc-golden-palace-earrings',
    name: '골든 팰리스 엠프레스 샹들리에 귀찌 (무통증)',
    subtitle: '14K 골드 도금 황실 샹들리에 문양과 샴페인 큐빅의 아프지 않은 로열 귀찌',
    category: 'accessory',
    subCategory: 'earrings',
    price: 25000,
    originalPrice: 35000,
    image: '/src/assets/images/studio_gold_earrings_1794892175482.jpg',
    color: {
      name: '골든 로즈 지르콘',
      hex: '#FB7185',
      family: 'pink'
    },
    availableColors: [
      { name: '골든 로즈 지르콘', hex: '#FB7185', family: 'pink', image: '/src/assets/images/studio_gold_earrings_1794892175482.jpg' },
      { name: '로열 사파이어 블루', hex: '#2563EB', family: 'blue', image: '/src/assets/images/studio_sapphire_earrings_1794892172404.jpg' }
    ],
    materials: ['14K 골드 도금 합금', '샴페인 큐빅', '무통증 에어 실리콘 팁'],
    vibes: ['골든 팰리스', '클래식 로열', '동화 속 무도회'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 173,
    sizes: ['Free (스프링 장력 조절 클립)'],
    description: '황실 무도회의 화려한 샹들리에를 형상화한 고급 골드 귀찌입니다. 부드러운 실리콘 쿠션으로 아프지 않습니다.',
    features: ['무통증 실리콘 에어 쿠션', '정교한 프롱 세팅 크리스탈', '어린이 안전 인증'],
    fabricCare: '마른 천으로 닦기',
    lining: '알러지 방지 코팅',
    matchingAccessoryIds: ['dress-belle-gold', 'acc-golden-palace-tiara'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-holiday-ruby-gloves',
    name: '홀리데이 루비 레드 벨벳 리본 장갑',
    subtitle: '화사한 크리스마스 루비 레드 스판 새틴과 골드 눈꽃 자수 리본의 공주 장갑',
    category: 'accessory',
    subCategory: 'gloves',
    price: 23000,
    originalPrice: 33000,
    image: '/src/assets/images/studio_ruby_gloves_1794892176549.jpg',
    color: {
      name: '홀리데이 루비 레드',
      hex: '#B91C1C',
      family: 'red'
    },
    availableColors: [
      { name: '홀리데이 루비 레드', hex: '#B91C1C', family: 'red', image: '/src/assets/images/studio_ruby_gloves_1794892176549.jpg' },
      { name: '스노우 펄 화이트', hex: '#FFFFFF', family: 'white', image: '/src/assets/images/studio_white_gloves_1794892173018.jpg' },
      { name: '파스텔 로열 블루', hex: '#93C5FD', family: 'blue', image: '/src/assets/images/studio_blue_gloves_1794892170626.jpg' }
    ],
    materials: ['스판 새틴', '골드 눈꽃 자수 리본', '진주 비딩'],
    vibes: ['크리스마스 에디션', '동화 속 무도회', '클래식 로열'],
    sparkleLevel: 4,
    rating: 4.9,
    reviewCount: 129,
    sizes: ['Free (4~9세)'],
    description: '크리스마스 파티와 연말 무도회를 위한 화려한 루비 레드 공주 장갑입니다.',
    features: ['부드러운 신축성 스판', '손목 골드 눈꽃 포인트', '2중 안심 봉제'],
    fabricCare: '손세탁',
    lining: '저자극 안감',
    matchingAccessoryIds: ['dress-christmas-velvet', 'acc-christmas-ruby-cape'],
    isBest: false,
    isNew: true
  },
  // EXPANDED BOUTIQUE COLLECTION (+15 UNIQUE DESIGNS -> 64 TOTAL)
  {
    id: 'dress-camellia-wine-velvet',
    name: '카멜리아 버건디 벨벳 카메오 로열 볼가운',
    subtitle: '깊은 빈티지 와인 컬러의 실크 벨벳과 오프숄더 샴페인 레이스 카라, 3D 카멜리아 코르사주 볼가운',
    category: 'dress',
    subCategory: 'ballgown',
    price: 62000,
    originalPrice: 94000,
    image: '/src/assets/images/studio_wine_velvet_gown_1795494681598.jpg',
    color: {
      name: '빈티지 카멜리아 와인',
      hex: '#8E2443',
      family: 'red'
    },
    availableColors: [
      { name: '빈티지 카멜리아 와인', hex: '#8E2443', family: 'red', image: '/src/assets/images/studio_wine_velvet_gown_1795494681598.jpg' },
      { name: '로열 포레스트 에메랄드', hex: '#059669', family: 'green', image: '/src/assets/images/studio_christmas_emerald_1794892112538.jpg' },
      { name: '미드나잇 딥 네이비', hex: '#1E1B4B', family: 'navy', image: '/src/assets/images/studio_galaxy_navy_1794892121000.jpg' }
    ],
    materials: ['이탈리아 빈티지 실크 벨벳', '샴페인 샹틸리 레이스', '수제 카멜리아 아플리케', '6겹 더스티 튤'],
    vibes: ['크리스마스 에디션', '로맨틱 로즈', '동화 속 무도회', '골든 팰리스'],
    silhouette: '오프숄더 카메오 볼가운',
    sparkleLevel: 4,
    rating: 5.0,
    reviewCount: 168,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '파리 아틀리에 감성의 깊고 고혹적인 버건디 와인 실크 벨벳 바디에 섬세한 샴페인 레이스 칼라와 수제 동백꽃 코르사주가 우아하게 어우러진 하이엔드 볼가운입니다. 연말 파티, 독주회, 가족 화보에서 압도적인 기품을 자랑합니다.',
    features: [
      '은은한 광택의 고밀도 빈티지 실크 벨벳 바디',
      '쇄골 라인을 우아하게 감싸는 스칼럽 샴페인 레이스',
      '허리 리본과 어우러지는 탈부착 입체 카멜리아 브로치',
      '아이 피부 닿는 전신 100% 부드러운 순면 안감'
    ],
    fabricCare: '드라이클리닝 권장',
    lining: '100% 프리미엄 오가닉 순면 안감',
    matchingAccessoryIds: ['acc-cameo-velvet-choker', 'acc-velvet-locket-bracelet', 'acc-royal-champagne-cloak', 'acc-champagne-sequin-shoes'],
    isBest: true,
    isNew: true
  },
  {
    id: 'dress-tiffany-mint-organza',
    name: '티파니 민트 실크 오간자 플리츠 볼가운',
    subtitle: '맑은 티파니 민트빛 세로 플리츠 오간자와 깃털처럼 가벼운 진주 비딩 리본 볼가운',
    category: 'dress',
    subCategory: 'ballgown',
    price: 59000,
    originalPrice: 88000,
    image: '/src/assets/images/studio_tiffany_organza_gown_1795494682537.jpg',
    color: {
      name: '티파니 셸 민트',
      hex: '#5EEAD4',
      family: 'green'
    },
    availableColors: [
      { name: '티파니 셸 민트', hex: '#5EEAD4', family: 'green', image: '/src/assets/images/studio_tiffany_organza_gown_1795494682537.jpg' },
      { name: '신데렐라 아이스 블루', hex: '#60A5FA', family: 'blue', image: '/src/assets/images/studio_cinderella_blue_1794892156310.jpg' },
      { name: '퓨어 밀키 화이트', hex: '#FDF4FF', family: 'white', image: '/src/assets/images/studio_swan_white_1794892130601.jpg' }
    ],
    materials: ['아코디언 플리츠 실크 오간자', '더블 페이스 새틴 보우', '담수 진주 비딩', '소프트 볼륨 튤'],
    vibes: ['인어공주 바다', '눈꽃 왕국', '스프링 블라썸', '동화 속 무도회'],
    silhouette: '하이웨이스트 플리츠 볼가운',
    sparkleLevel: 4,
    rating: 4.9,
    reviewCount: 152,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '맑고 청아한 보석함에서 꺼낸 듯한 티파니 민트 컬러의 아코디언 플리츠 오간자 스커트가 특징입니다. 빛을 머금은 듯 투명하게 찰랑이는 실루엣과 어깨의 새틴 윙 리본이 시선을 단번에 사로잡습니다.',
    features: [
      '걸을 때마다 우아하게 펼쳐지는 360도 선버스트 플리츠',
      '보석처럼 영롱한 네크라인 핸드메이드 진주 스트랩',
      '구김이 적고 가벼워 장시간 착용해도 편안한 오간자',
      '땀 흡수력이 뛰어난 순면 40수 내부 라이닝'
    ],
    fabricCare: '미온수 단독 손세탁 후 그늘 건조',
    lining: '100% 프리미엄 순면 안감',
    matchingAccessoryIds: ['acc-ocean-prism-wings', 'acc-mermaid-shell-bag', 'acc-crescent-moon-scepter', 'acc-ivory-lace-gloves'],
    isBest: true,
    isNew: true
  },
  {
    id: 'dress-daisy-lemon-tutu',
    name: '레몬 쉬폰 데이지 자수 스퀘어넥 튜튜',
    subtitle: '햇살을 머금은 버터 레몬 오간자와 입체 화이트 데이지 꽃 자수의 사랑스러운 티파티 튜튜',
    category: 'dress',
    subCategory: 'tutu',
    price: 53000,
    originalPrice: 76000,
    image: '/src/assets/images/studio_lemon_daisy_tutu_1795494681978.jpg',
    color: {
      name: '버터밀크 레몬 옐로우',
      hex: '#FEF08A',
      family: 'gold'
    },
    availableColors: [
      { name: '버터밀크 레몬 옐로우', hex: '#FEF08A', family: 'gold', image: '/src/assets/images/studio_lemon_daisy_tutu_1795494681978.jpg' },
      { name: '블루밍 피치 코랄', hex: '#FDBA74', family: 'coral', image: '/src/assets/images/studio_peach_floral_1794892131926.jpg' },
      { name: '베이비 스트로베리 핑크', hex: '#F9A8D4', family: 'pink', image: '/src/assets/images/studio_berry_pink_1794892119187.jpg' }
    ],
    materials: ['시스루 일루전 데이지 튤', '버터밀크 실크 시폰', '크로셰 꽃잎 트리밍', '스모크 코튼'],
    vibes: ['스프링 블라썸', '요정 숲', '러블리 베리', '골든 팰리스'],
    silhouette: '스퀘어넥 엠파이어 튜튜',
    sparkleLevel: 3,
    rating: 4.9,
    reviewCount: 141,
    sizes: ['90 (2-3세 / 80-90cm)', '100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)'],
    description: '봄날의 데이지 정원에서 소풍을 즐기는 듯 따스한 버터 레몬빛 시폰과 섬세한 화이트 데이지 자수가 촘촘히 수놓아진 스퀘어넥 튜튜 드레스입니다. 퍼프 소매의 로맨틱한 볼륨감이 아이를 동화 속 소녀로 만들어 줍니다.',
    features: [
      '스커트와 퍼프 슬리브 위 입체 화이트 데이지 꽃 자수',
      '여유로운 신축성 등판 스모크 밴딩으로 혼자서도 착탈의 용이',
      '발걸음을 가볍게 해주는 구름 핏 4중 에어 시폰 튤',
      '아이 피부에 닿는 전 부위 저자극 코튼 안감'
    ],
    fabricCare: '세탁망 사용 울코스 단독 세탁',
    lining: '100% 천연 순면 60수 안감',
    matchingAccessoryIds: ['acc-pearl-basket-bag', 'acc-rosegold-floral-tiara', 'acc-spring-blossom-shoes', 'acc-spring-cherry-wand'],
    isBest: false,
    isNew: true
  },
  {
    id: 'dress-rosebud-lace-tutu',
    name: '빅토리안 아이보리 샹틸리 레이스 칼라 튜튜',
    subtitle: '프랑스 빅토리안 레이스 세일러 칼라와 로즈버드 비즈, 샴페인 크림 5겹 튜튜 드레스',
    category: 'dress',
    subCategory: 'tutu',
    price: 57000,
    originalPrice: 84000,
    image: '/src/assets/images/studio_cream_lace_tutu_1795494682795.jpg',
    color: {
      name: '앤틱 크림 아이보리',
      hex: '#FEF3C7',
      family: 'white'
    },
    availableColors: [
      { name: '앤틱 크림 아이보리', hex: '#FEF3C7', family: 'white', image: '/src/assets/images/studio_cream_lace_tutu_1795494682795.jpg' },
      { name: '페더 파스텔 핑크', hex: '#FCE7F3', family: 'pink', image: '/src/assets/images/studio_swan_pink_1794892131133.jpg' },
      { name: '밀키 펄 화이트', hex: '#FDF4FF', family: 'white', image: '/src/assets/images/studio_swan_white_1794892130601.jpg' }
    ],
    materials: ['프렌치 샹틸리 플라워 레이스', '로즈버드 자수 망사', '새틴 파이핑 리본', '5단 소프트 튤'],
    vibes: ['골든 팰리스', '로맨틱 로즈', '눈꽃 왕국', '스프링 블라썸'],
    silhouette: '빅토리안 클래식 튜튜',
    sparkleLevel: 4,
    rating: 5.0,
    reviewCount: 184,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '고풍스러운 유럽 왕실 화보에서 막 걸어나온 듯한 앤틱 크림 아이보리 톤의 빅토리안 튜튜 드레스입니다. 프렌치 샹틸리 레이스 칼라와 작은 장미 봉오리 리본 디테일이 돌스냅·화동·연주회 무대에서 최고의 우아함을 선사합니다.',
    features: [
      '얼굴을 작고 화사하게 밝혀주는 스칼럽 레이스 빅 칼라',
      '어린 소녀의 손목을 감싸는 클래식 퍼프 레이스 커프스',
      '풍성하면서도 처지지 않는 5단 하프 튜튜 볼륨 설계',
      '100% 부드러운 오가닉 순면 라이닝'
    ],
    fabricCare: '미온수 중성세제 단독 손세탁 권장',
    lining: '100% 오가닉 순면 안감',
    matchingAccessoryIds: ['acc-ivory-lace-gloves', 'acc-pearl-basket-bag', 'acc-champagne-sequin-shoes', 'acc-cameo-velvet-choker'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-starlight-sheer-cape',
    name: '스타라이트 실버 별자리 시스루 오간자 롱 케이프',
    subtitle: '투명한 실버 오간자 위 별똥별 포일 자수와 보송한 새틴 칼라 리본의 엘사 무드 망토',
    category: 'accessory',
    subCategory: 'cape',
    price: 29000,
    originalPrice: 42000,
    image: '/src/assets/images/studio_silver_star_cape_1795494683155.jpg',
    color: {
      name: '실버 스타라이트 문라이트',
      hex: '#E2E8F0',
      family: 'white'
    },
    availableColors: [
      { name: '실버 스타라이트 문라이트', hex: '#E2E8F0', family: 'white', image: '/src/assets/images/studio_silver_star_cape_1795494683155.jpg' },
      { name: '샴페인 펄 골드', hex: '#FDE68A', family: 'gold', image: '/src/assets/images/studio_champagne_hooded_cloak_1795494683717.jpg' },
      { name: '홀리데이 루비 레드', hex: '#DC2626', family: 'red', image: '/src/assets/images/studio_ruby_cape_1794892167838.jpg' }
    ],
    materials: ['실버 별자리 포일 시스루 오간자', '더블 새틴 리본 타이', '크리스탈 별 브로치'],
    vibes: ['눈꽃 왕국', '미드나잇 신데렐라', '요정 숲', '동화 속 무도회'],
    sparkleLevel: 5,
    rating: 4.9,
    reviewCount: 162,
    sizes: ['S (총장 65cm / 3-5세)', 'M (총장 78cm / 6-8세)', 'L (총장 92cm / 9-11세)'],
    description: '드레스 디자인을 가리지 않고 그 위로 신비로운 밤하늘의 별빛만을 덧입혀주는 시스루 오간자 롱 케이프입니다. 걸을 때마다 뒤로 유영하듯 흩날리는 은하수 별자리 자수가 드라마틱한 동화 속 장면을 완성합니다.',
    features: [
      '드레스의 본래 색감과 디테일을 그대로 살리는 고투명 시스루 튤',
      '탈락 걱정 없는 고온 실버 별·초승달 메탈릭 포일',
      '목을 조이지 않는 넉넉한 실키 새틴 리본 여밈'
    ],
    fabricCare: '찬물 단독 가볍게 흔들어 손세탁',
    lining: '단일 시어 레이어',
    matchingAccessoryIds: ['dress-ice-starlight', 'dress-cinderella-midnight', 'acc-crescent-moon-scepter'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-royal-champagne-cloak',
    name: '로열 샴페인 듀체스 새틴 스노우 후드 망토',
    subtitle: '은은한 샴페인 골드 듀체스 새틴과 아이보리 에코 퍼 트리밍 후드의 황실 겨울 망토',
    category: 'accessory',
    subCategory: 'cape',
    price: 36000,
    originalPrice: 52000,
    image: '/src/assets/images/studio_champagne_hooded_cloak_1795494683717.jpg',
    color: {
      name: '샴페인 아이보리 골드',
      hex: '#FDE68A',
      family: 'gold'
    },
    availableColors: [
      { name: '샴페인 아이보리 골드', hex: '#FDE68A', family: 'gold', image: '/src/assets/images/studio_champagne_hooded_cloak_1795494683717.jpg' },
      { name: '스노우 퓨어 화이트', hex: '#FFFFFF', family: 'white', image: '/src/assets/images/studio_white_cape_1794892164127.jpg' },
      { name: '홀리데이 루비 레드', hex: '#DC2626', family: 'red', image: '/src/assets/images/studio_ruby_cape_1794892167838.jpg' }
    ],
    materials: ['듀체스 헤비 새틴', '럭셔리 에코 밍크 퍼 후드', '진주 보석 자석 버클', '누빔 방풍 안감'],
    vibes: ['골든 팰리스', '눈꽃 왕국', '크리스마스 에디션', '동화 속 무도회'],
    sparkleLevel: 4,
    rating: 5.0,
    reviewCount: 158,
    sizes: ['S (3-5세)', 'M (6-8세)', 'L (9-11세)'],
    description: '한겨울 야외 행사나 연말 외출에서도 차가운 바람을 완벽히 막아주는 샴페인 골드 듀체스 새틴 후드 클로크입니다. 후드 가장자리의 풍성한 아이보리 에코 퍼와 진주 잠금 버클이 왕실 공주님 같은 웅장함을 더해줍니다.',
    features: [
      '은은한 진주 광택을 지닌 두툼한 듀체스 새틴 외피',
      '후드를 썼을 때 얼굴을 감싸는 고밀도 아이보리 에코 밍크 퍼',
      '아이 스스로도 쉽게 여닫을 수 있는 펄 크라운 자석 클로저'
    ],
    fabricCare: '드라이클리닝 권장',
    lining: '보온 실크 새틴 안감',
    matchingAccessoryIds: ['dress-belle-gold', 'dress-camellia-wine-velvet', 'acc-champagne-sequin-shoes'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-baroque-butterfly-earrings',
    name: '바로크 펄 모나크 버터플라이 실버 귀찌',
    subtitle: '입체 크리스탈 나비와 천연 담수 느낌 바로크 진주 드롭의 우아한 무통증 귀찌',
    category: 'accessory',
    subCategory: 'earrings',
    price: 25000,
    originalPrice: 36000,
    image: '/src/assets/images/studio_baroque_butterfly_earrings_1795494683853.jpg',
    color: {
      name: '문라이트 실버 & 바로크 펄',
      hex: '#E2E8F0',
      family: 'white'
    },
    availableColors: [
      { name: '문라이트 실버 & 바로크 펄', hex: '#E2E8F0', family: 'white', image: '/src/assets/images/studio_baroque_butterfly_earrings_1795494683853.jpg' },
      { name: '골든 핑크 지르콘', hex: '#FB7185', family: 'pink', image: '/src/assets/images/studio_crown_earrings_1794892161863.jpg' },
      { name: '로열 사파이어 블루', hex: '#2563EB', family: 'blue', image: '/src/assets/images/studio_sapphire_earrings_1794892172404.jpg' }
    ],
    materials: ['미세 파베 지르콘 나비', '바로크 담수 스타일 진주', '무통증 실리콘 스프링 클립'],
    vibes: ['요정 숲', '스프링 블라썸', '눈꽃 왕국', '로맨틱 로즈'],
    sparkleLevel: 5,
    rating: 4.9,
    reviewCount: 134,
    sizes: ['Free (어린이 맞춤 무통증 스프링 클립)'],
    description: '귓볼 위에 사뿐히 내려앉은 작은 크리스탈 나비 아래로 우아한 바로크 물방울 진주가 찰랑이는 아틀리에 에디션 귀찌입니다. 실리콘 에어 쿠션 클립을 적용해 귀를 뚫지 않아도 장시간 편안합니다.',
    features: [
      '귓볼 압박을 최소화하는 듀얼 실리콘 에어 패드',
      '빛에 따라 맑게 반사되는 마키즈 컷 나비 날개 크리스탈',
      'KC 안전 인증 무니켈 플래티넘 도금'
    ],
    fabricCare: '안경천으로 가볍게 닦기',
    lining: '무알러지 실리콘 & 백금 도금',
    matchingAccessoryIds: ['dress-lavender-fairy', 'dress-swan-white', 'acc-velvet-locket-bracelet'],
    isBest: false,
    isNew: true
  },
  {
    id: 'acc-velvet-locket-bracelet',
    name: '로열 벨벳 & 골드 하트 로켓 참 팔찌',
    subtitle: '실제로 여닫히는 골드 하트 로켓 참과 블러쉬 핑크 벨벳 리본이 엮인 빈티지 팔찌',
    category: 'accessory',
    subCategory: 'bracelet',
    price: 26000,
    originalPrice: 37000,
    image: '/src/assets/images/studio_velvet_locket_bracelet_1795494684621.jpg',
    color: {
      name: '빈티지 블러쉬 핑크 & 골드',
      hex: '#F472B6',
      family: 'pink'
    },
    availableColors: [
      { name: '빈티지 블러쉬 핑크 & 골드', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_velvet_locket_bracelet_1795494684621.jpg' },
      { name: '임페리얼 골드 & 에메랄드', hex: '#FDE047', family: 'gold', image: '/src/assets/images/studio_gold_bracelet_1794892173917.jpg' },
      { name: '에메랄드 포레스트 그린', hex: '#059669', family: 'green', image: '/src/assets/images/studio_emerald_bracelet_1794892172429.jpg' }
    ],
    materials: ['블러쉬 실크 벨벳 리본', '14K 골드 도금 체인', '미니 하트 로켓 펜던트', '담수 펄'],
    vibes: ['로맨틱 로즈', '골든 팰리스', '러블리 베리', '스프링 블라썸'],
    sparkleLevel: 4,
    rating: 5.0,
    reviewCount: 151,
    sizes: ['Free (손목 둘레 11~15.5cm 연장 체인)'],
    description: '부드러운 블러쉬 핑크 벨벳 리본과 14K 골드 체인이 믹스매치된 로맨틱 브레이슬릿입니다. 중앙에 달린 엔틱 골드 하트 로켓 안에는 작은 스티커나 소원 메모를 쏙 숨겨 간직할 수 있어 아이들이 더욱 아끼는 보물 팔찌입니다.',
    features: [
      '실제 개폐 가능한 빈티지 인그레이빙 하트 로켓 참',
      '손목에 부드럽게 감기는 벨벳 & 펄 믹스 체인',
      '아이 피부 안전 KC 무니켈 골드 이온 도금'
    ],
    fabricCare: '벨벳 부위 물기 주의 및 마른 천 보관',
    lining: 'KC 무니켈 안심 도금',
    matchingAccessoryIds: ['dress-camellia-wine-velvet', 'dress-rosebud-lace-tutu', 'acc-cameo-velvet-choker'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-crescent-moon-scepter',
    name: '크레센트 문 오로라 크리스탈 셉터 요술봉',
    subtitle: '별이 담긴 은빛 초승달과 프리즘 오로라 크리스탈 구체가 빛나는 로열 셉터 매직완드',
    category: 'accessory',
    subCategory: 'wand',
    price: 27000,
    originalPrice: 38000,
    image: '/src/assets/images/studio_crescent_moon_wand_1795494684890.jpg',
    color: {
      name: '오로라 문라이트 골드',
      hex: '#60A5FA',
      family: 'blue'
    },
    availableColors: [
      { name: '오로라 문라이트 골드', hex: '#60A5FA', family: 'blue', image: '/src/assets/images/studio_crescent_moon_wand_1795494684890.jpg' },
      { name: '미스틱 라벤더 & 로즈', hex: '#C084FC', family: 'purple', image: '/src/assets/images/studio_lavender_wand_1794892175061.jpg' },
      { name: '사쿠라 로즈 골드', hex: '#FB7185', family: 'pink', image: '/src/assets/images/studio_cherry_wand_1794892167188.jpg' }
    ],
    materials: ['글로시 화이트 펄 로드', '샴페인 골드 초승달 프레임', '오로라 다면 프리즘 구체', '새틴 리본'],
    vibes: ['미드나잇 신데렐라', '동화 속 무도회', '눈꽃 왕국', '요정 숲'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 192,
    sizes: ['Free (총 길이 35cm)'],
    description: '깊은 밤 별빛을 모으는 초승달 여왕의 왕홀(Scepter)에서 영감을 받아 탄생한 럭셔리 매직완드입니다. 달빛을 품은 오로라 프리즘 구체가 각도에 따라 푸른빛과 보랏빛 무지개를 만들어냅니다.',
    features: [
      '은하수를 담은 듯 투명하고 영롱한 36면 컷팅 오로라 오브',
      '아이 손에 쥐기 편안한 매끄러운 펄 라커 코팅 핸들',
      '살랑이는 투톤 실크 새틴 & 시스루 오간자 스트리머'
    ],
    fabricCare: '극세사 안경천으로 크리스탈 닦기',
    lining: 'KC 어린이 제품 안전 인증',
    matchingAccessoryIds: ['dress-midnight-galaxy-star', 'dress-tiffany-mint-organza', 'acc-starlight-sheer-cape'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-ocean-prism-wings',
    name: '머메이드 아쿠아 코랄 프리즘 요정 날개',
    subtitle: '산호초 물결 골드 레이스 라인과 투톤 아쿠아-코랄 이리데슨트 오간자 페어리 윙',
    category: 'accessory',
    subCategory: 'wings',
    price: 27000,
    originalPrice: 38000,
    image: '/src/assets/images/studio_ocean_mermaid_wings_1795494686254.jpg',
    color: {
      name: '오션 아쿠아 & 코랄 프리즘',
      hex: '#2DD4BF',
      family: 'green'
    },
    availableColors: [
      { name: '오션 아쿠아 & 코랄 프리즘', hex: '#2DD4BF', family: 'green', image: '/src/assets/images/studio_ocean_mermaid_wings_1795494686254.jpg' },
      { name: '오로라 라벤더 펄', hex: '#E9D5FF', family: 'purple', image: '/src/assets/images/studio_fairy_wings_1794892164112.jpg' },
      { name: '스노우 아이스 화이트', hex: '#FFFFFF', family: 'white', image: '/src/assets/images/studio_snow_wings_1794892173982.jpg' }
    ],
    materials: ['이리데슨트 편광 오간자', '산호초 골드 글리터 자수', '진주 쉘 센터 브로치', '벨벳 숄더 스트랩'],
    vibes: ['인어공주 바다', '요정 숲', '스프링 블라썸'],
    sparkleLevel: 5,
    rating: 4.9,
    reviewCount: 148,
    sizes: ['Free (3~11세 신축성 숄더 밴드)'],
    description: '햇빛이 닿으면 바다 물결과 산호초의 영롱한 파스텔 프리즘이 동시에 피어오르는 편광 오간자 날개입니다. 중앙에는 진주 조개 장식이 자리해 바다 요정 및 인어공주 드레스와 환상적인 조화를 이룹니다.',
    features: [
      '움직일 때마다 민트·라벤더·코랄 빛으로 변하는 편광 필름 원단',
      '접어서 보관해도 형태가 유지되는 고탄성 안전 프레임',
      '어깨가 배기지 않는 푹신한 쉬폰 래핑 밴드'
    ],
    fabricCare: '오염 부위만 물티슈로 닦아 건조',
    lining: '저자극 소프트 밴드',
    matchingAccessoryIds: ['dress-mermaid-ocean-pearl', 'dress-tiffany-mint-organza', 'acc-mermaid-shell-bag'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-cameo-velvet-choker',
    name: '로맨틱 빈티지 카메오 벨벳 리본 초커',
    subtitle: '더스티 와인 실크 벨벳 리본과 18K 골드 프레임 핑크 카메오, 물방울 진주 드롭 목걸이',
    category: 'accessory',
    subCategory: 'necklace',
    price: 26000,
    originalPrice: 36000,
    image: '/src/assets/images/studio_cameo_velvet_choker_1795494686907.jpg',
    color: {
      name: '더스티 와인 로즈 벨벳',
      hex: '#8E4A5C',
      family: 'red'
    },
    availableColors: [
      { name: '더스티 와인 로즈 벨벳', hex: '#8E4A5C', family: 'red', image: '/src/assets/images/studio_cameo_velvet_choker_1795494686907.jpg' },
      { name: '로맨틱 핑크 & 화이트 펄', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_heart_necklace_1794892160631.jpg' },
      { name: '미드나잇 사파이어 블루', hex: '#2563EB', family: 'blue', image: '/src/assets/images/studio_sapphire_necklace_1794892168493.jpg' }
    ],
    materials: ['프랑스 실크 벨벳 리본', '앤틱 골드 조각 카메오 팬던트', '물방울 진주 드롭', '키즈 세이프티 클립'],
    vibes: ['로맨틱 로즈', '골든 팰리스', '크리스마스 에디션', '동화 속 무도회'],
    sparkleLevel: 4,
    rating: 5.0,
    reviewCount: 159,
    sizes: ['Free (목둘레 27~34cm 연장 체인)'],
    description: '유럽 고전 회화 속 작은 귀족 영애가 착용한 듯 고풍스러운 실루엣의 빈티지 벨벳 초커입니다. 피부에 자극 없이 부드럽게 감기는 더스티 와인 벨벳 리본과 섬세하게 부조된 카메오 펜던트가 기품을 완성합니다.',
    features: [
      '금속 차가움 없이 목에 부드럽게 닿는 프렌치 벨벳 스트랩',
      '입체 장미 & 공주 실루엣이 조각된 앤틱 골드 카메오',
      '성장기와 의상에 맞춰 조절 가능한 7cm 연장 체인'
    ],
    fabricCare: '마른 브러시로 먼지 제거 후 보관',
    lining: 'KC 무니켈 인증 버클',
    matchingAccessoryIds: ['dress-camellia-wine-velvet', 'dress-rosebud-lace-tutu', 'acc-velvet-locket-bracelet'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-champagne-sequin-shoes',
    name: '샴페인 시퀸 더블 보우 메리제인 파티슈즈',
    subtitle: '은은한 샴페인 골드 마이크로 시퀸과 더블 오간자 보우의 럭셔리 화동·연주회 구두',
    category: 'accessory',
    subCategory: 'shoes',
    price: 35000,
    originalPrice: 49000,
    image: '/src/assets/images/studio_champagne_sequin_shoes_1795494686884.jpg',
    color: {
      name: '샴페인 로즈 골드',
      hex: '#EAB308',
      family: 'gold'
    },
    availableColors: [
      { name: '샴페인 로즈 골드', hex: '#EAB308', family: 'gold', image: '/src/assets/images/studio_champagne_sequin_shoes_1795494686884.jpg' },
      { name: '블라썸 베이비 핑크', hex: '#FBCFE8', family: 'pink', image: '/src/assets/images/studio_blossom_shoes_1794892165201.jpg' },
      { name: '스노우 펄 실버', hex: '#E2E8F0', family: 'white', image: '/src/assets/images/studio_glass_slippers_1794892161577.jpg' }
    ],
    materials: ['마이크로 샴페인 시퀸', '더블 페이스 오간자 보우', '8mm 라텍스 풋베드', '논슬립 로우 힐 솔'],
    vibes: ['골든 팰리스', '동화 속 무도회', '크리스마스 에디션', '로맨틱 로즈'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 204,
    sizes: ['150mm', '160mm', '170mm', '180mm', '190mm', '200mm'],
    description: '기존 글리터보다 한층 정교하고 은은하게 빛나는 마이크로 시퀸 패브릭에 고급스러운 더블 오간자 리본을 얹은 아틀리에 시그니처 파티슈즈입니다. 화이트·아이보리·버건디 등 어떤 컬러 드레스와도 격조 높게 매치됩니다.',
    features: [
      '스타킹이나 레이스 양말에 걸리지 않는 매끄러운 마이크로 시퀸 마감',
      '성장기 발 아치를 지지해주는 인체공학적 8mm 라텍스 쿠션',
      '아이 혼자서도 착화 가능한 슬라이드 버클 스타일 벨크로 스트랩'
    ],
    fabricCare: '물티슈로 아웃솔 및 표면 부드럽게 닦기',
    lining: '프리미엄 양가죽 터치 소프트 라이닝',
    matchingAccessoryIds: ['dress-rosebud-lace-tutu', 'dress-belle-gold', 'dress-camellia-wine-velvet'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-pearl-basket-bag',
    name: '아이보리 펄 위빙 로즈 가든 바스켓 미니백',
    subtitle: '한 알 한 알 엮어낸 아이보리 펄 바스켓과 입체 핑크 실크 로즈 코르사주의 가든백',
    category: 'accessory',
    subCategory: 'bag',
    price: 31000,
    originalPrice: 44000,
    image: '/src/assets/images/studio_pearl_basket_bag_1795494868346.jpg',
    color: {
      name: '밀키 펄 아이보리',
      hex: '#FAF8F5',
      family: 'white'
    },
    availableColors: [
      { name: '밀키 펄 아이보리', hex: '#FAF8F5', family: 'white', image: '/src/assets/images/studio_pearl_basket_bag_1795494868346.jpg' },
      { name: '로즈 퀼팅 핑크', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_pearl_bag_1794892158482.jpg' },
      { name: '아쿠아 오로라 민트', hex: '#2DD4BF', family: 'green', image: '/src/assets/images/studio_shell_bag_1794892167127.jpg' }
    ],
    materials: ['수공예 위빙 광택 펄 비즈', '입체 쉬폰 실크 로즈', '브레이드 골드 체인 핸들', '새틴 파우치 내피'],
    vibes: ['스프링 블라썸', '로맨틱 로즈', '러블리 베리', '골든 팰리스'],
    sparkleLevel: 4,
    rating: 5.0,
    reviewCount: 176,
    sizes: ['Free (가로 15cm x 높이 13cm x 폭 7cm)'],
    description: '공주님의 티파티와 가든 촬영을 위해 장인이 한 땀씩 펄 비즈를 엮어 완성한 스페셜 바스켓 핸드백입니다. 가방 전면에 핀 화사한 파스텔 핑크 쉬폰 장미와 땋은 듯한 골드 핸들이 작품 같은 완성도를 자랑합니다.',
    features: [
      '탄탄한 이중 낚싯줄 수공예 직조로 형태가 무너지지 않는 스퀘어 쉐입',
      '물건이 빠지지 않는 드로우스트링 오간자 내부 파우치 포함',
      '스페어 진주 및 크로스용 롱 골드 체인 함께 증정'
    ],
    fabricCare: '마른 극세사 천으로 진주 표면 닦기',
    lining: '오간자 드로우스트링 파우치 내장',
    matchingAccessoryIds: ['dress-daisy-lemon-tutu', 'dress-rosebud-lace-tutu', 'dress-cherry-blossom-pink'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-rosegold-floral-tiara',
    name: '로즈골드 포슬린 체리블라썸 브라이달 티아라',
    subtitle: '수제 포슬린 벚꽃 꽃잎과 담수 진주 가지, 로즈골드 와이어가 어우러진 아틀리에 화관 티아라',
    category: 'accessory',
    subCategory: 'tiara',
    price: 32000,
    originalPrice: 45000,
    image: '/src/assets/images/studio_rosegold_floral_tiara_1795494690091.jpg',
    color: {
      name: '블라썸 로즈 골드',
      hex: '#FB7185',
      family: 'pink'
    },
    availableColors: [
      { name: '블라썸 로즈 골드', hex: '#FB7185', family: 'pink', image: '/src/assets/images/studio_rosegold_floral_tiara_1795494690091.jpg' },
      { name: '임페리얼 샴페인 골드', hex: '#FDE047', family: 'gold', image: '/src/assets/images/studio_golden_tiara_1794892166014.jpg' },
      { name: '스파클 실버 크리스탈', hex: '#E2E8F0', family: 'white', image: '/src/assets/images/studio_royal_tiara_1794892160197.jpg' }
    ],
    materials: ['수제 포슬린 벚꽃 플라워', '로즈골드 핸드와이어', '담수 느낌 펄 비즈', '소프트 벨벳 밴딩 팁'],
    vibes: ['스프링 블라썸', '로맨틱 로즈', '요정 숲', '동화 속 무도회'],
    sparkleLevel: 4,
    rating: 5.0,
    reviewCount: 185,
    sizes: ['Free (유연한 두상 맞춤 밴드)'],
    description: '무거운 금속 왕관 대신 수작업으로 빚은 순백의 도자기(포슬린) 꽃잎과 영롱한 진주 가지로 엮어낸 브라이달 무드의 로즈골드 화관 티아라입니다. 화보 촬영이나 야외 가든 파티에서 가장 내추럴하고 고급스럽게 어우러집니다.',
    features: [
      '머리에 무게감이 느껴지지 않는 초경량 핸드위빙 와이어 구조',
      '양끝 실리콘 & 벨벳 이중 팁 마감으로 귀 뒤 눌림 Zero',
      '빛에 따라 은은하게 반짝이는 클리어 오스트리아 시드 비즈'
    ],
    fabricCare: '전용 하드 케이스에 담아 보관',
    lining: '저자극 로즈골드 코팅 & 벨벳 팁',
    matchingAccessoryIds: ['dress-cherry-blossom-pink', 'dress-aurora-rose', 'dress-daisy-lemon-tutu'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-ivory-lace-gloves',
    name: '샹틸리 플라워 시어 레이스 진주 커프 장갑',
    subtitle: '꽃무늬가 비치는 얇은 샹틸리 시스루 레이스와 손목 펄 진주 단추의 클래식 공주 장갑',
    category: 'accessory',
    subCategory: 'gloves',
    price: 24000,
    originalPrice: 34000,
    image: '/src/assets/images/studio_ivory_lace_gloves_1795494690517.jpg',
    color: {
      name: '샹틸리 크림 아이보리',
      hex: '#FAF8F5',
      family: 'white'
    },
    availableColors: [
      { name: '샹틸리 크림 아이보리', hex: '#FAF8F5', family: 'white', image: '/src/assets/images/studio_ivory_lace_gloves_1795494690517.jpg' },
      { name: '로즈 블러쉬 핑크', hex: '#FBCFE8', family: 'pink', image: '/src/assets/images/studio_rose_gloves_1794892163071.jpg' },
      { name: '밀키 펄 화이트', hex: '#FFFFFF', family: 'white', image: '/src/assets/images/studio_white_gloves_1794892173018.jpg' }
    ],
    materials: ['프렌치 신축성 샹틸리 플라워 레이스', '미니 펄 비즈 커프 트리밍', '소프트 튤 스칼럽'],
    vibes: ['골든 팰리스', '스프링 블라썸', '로맨틱 로즈', '눈꽃 왕국'],
    sparkleLevel: 3,
    rating: 4.9,
    reviewCount: 146,
    sizes: ['Free (4~10세 소프트 스판 레이스 핏)'],
    description: '두꺼운 새틴 장갑보다 한층 섬세하고 로맨틱한 느낌을 주는 시스루 샹틸리 플라워 레이스 숏 장갑입니다. 봄·여름 드레스나 화동·콩쿠르 의상과 함께 매치했을 때 땀 차지 않고 청순한 공주님 손끝을 완성해 줍니다.',
    features: [
      '통기성이 뛰어난 시어 플라워 레이스로 사계절 내내 쾌적한 착용감',
      '손목을 사랑스럽게 감싸는 스칼럽 물결 커프스와 미니 진주 비즈',
      '어린이 작은 손가락 마디까지 편안하게 늘어나는 스트레치 망사'
    ],
    fabricCare: '찬물 중성세제 단독 손세탁 후 평평하게 건조',
    lining: '소프트 신축성 샹틸리 레이스',
    matchingAccessoryIds: ['dress-rosebud-lace-tutu', 'dress-tiffany-mint-organza', 'acc-pearl-basket-bag'],
    isBest: false,
    isNew: true
  },
  // SECOND EXPANSION BATCH (+25 UNIQUE PRODUCTS -> 89 TOTAL)
  {
    id: 'dress-celeste-lavender-ballgown',
    name: '셀레스테 라벤더 위스테리아 자수 볼가운',
    subtitle: '흐드러진 등나무꽃 입체 레이스 자수와 몽환적인 연보라빛 오간자 겹치마 로열 볼가운',
    category: 'dress',
    subCategory: 'ballgown',
    price: 64000,
    originalPrice: 96000,
    image: '/src/assets/images/studio_celeste_lavender_gown_1795495176343.jpg',
    color: {
      name: '위스테리아 파스텔 라벤더',
      hex: '#C4B5FD',
      family: 'purple'
    },
    availableColors: [
      { name: '위스테리아 파스텔 라벤더', hex: '#C4B5FD', family: 'purple', image: '/src/assets/images/studio_celeste_lavender_gown_1795495176343.jpg' },
      { name: '파스텔 로즈 핑크', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_lavender_pink_1794892126446.jpg' },
      { name: '크리스탈 스카이 블루', hex: '#7DD3FC', family: 'blue', image: '/src/assets/images/studio_lavender_blue_1794892128148.jpg' }
    ],
    materials: ['3D 위스테리아 플라워 레이스', '미스트 라벤더 멀티 튤', '시스루 일루전 넥라인', '순면 60수 안감'],
    vibes: ['요정 숲', '스프링 블라썸', '로맨틱 로즈', '동화 속 무도회'],
    silhouette: '일루전 플로럴 볼가운',
    sparkleLevel: 4,
    rating: 5.0,
    reviewCount: 148,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '봄날의 비밀 정원 위로 등나무꽃이 폭포수처럼 쏟아지는 듯한 입체 플로럴 자수 볼가운입니다. 목선을 투명하게 감싸는 일루전 튤 넥라인과 풍성한 연보라빛 스커트가 피아노 독주회 및 야외 스냅에서 동화 같은 실루엣을 완성합니다.',
    features: [
      '가슴선부터 스커트 아래로 흐르는 3D 등나무꽃 핸드 아플리케',
      '여섯 겹의 부드러운 에어 튤이 만들어내는 가벼운 A라인 볼륨',
      '살갗이 비치지 않는 안전한 누드톤 순면 가슴 안감 처리',
      '등판 진주 단추 & 히든 지퍼 2중 마감'
    ],
    fabricCare: '드라이클리닝 권장 또는 찬물 중성세제 단독 손세탁',
    lining: '100% 프리미엄 오가닉 순면 안감',
    matchingAccessoryIds: ['acc-lavender-fairy-wand', 'acc-rosegold-floral-tiara', 'acc-baroque-butterfly-earrings', 'acc-fairy-wings'],
    isBest: true,
    isNew: true
  },
  {
    id: 'dress-noel-tartan-velvet',
    name: '노엘 타탄 체크 벨벳 칼라 홀리데이 볼가운',
    subtitle: '클래식 로열 타탄 체크 스커트와 크림 자수 빅 칼라, 루비 벨벳 보우의 브리티시 홀리데이 볼가운',
    category: 'dress',
    subCategory: 'ballgown',
    price: 59000,
    originalPrice: 89000,
    image: '/src/assets/images/studio_noel_tartan_gown_1795495175248.jpg',
    color: {
      name: '홀리데이 로열 타탄 레드',
      hex: '#991B1B',
      family: 'red'
    },
    availableColors: [
      { name: '홀리데이 로열 타탄 레드', hex: '#991B1B', family: 'red', image: '/src/assets/images/studio_noel_tartan_gown_1795495175248.jpg' },
      { name: '빈티지 카멜리아 와인', hex: '#8E2443', family: 'red', image: '/src/assets/images/studio_wine_velvet_gown_1795494681598.jpg' },
      { name: '로열 포레스트 에메랄드', hex: '#059669', family: 'green', image: '/src/assets/images/studio_christmas_emerald_1794892112538.jpg' }
    ],
    materials: ['브리티시 실크 벨벳', '금사 스칼럽 자수 피터팬 칼라', '오간자 체크 오버레이 튤', '벨벳 빅 보우'],
    vibes: ['크리스마스 에디션', '클래식 로열', '동화 속 무도회'],
    silhouette: '피터팬 칼라 프린세스 볼가운',
    sparkleLevel: 3,
    rating: 5.0,
    reviewCount: 175,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '영국 왕실 공주님의 겨울 휴가를 연상시키는 클래식한 레드·그린 타탄 체크 튤 스커트와 포근한 딥 루비 벨벳 상의가 어우러진 홀리데이 에디션입니다. 금사 레이스로 마감된 피터팬 칼라가 단정하면서도 사랑스러운 기품을 더해줍니다.',
    features: [
      '부드러운 딥 루비 실크 벨벳 상의와 퍼프 소매',
      '스커트 위 금사 라인이 반짝이는 투명 타탄 체크 오간자',
      '얼굴이 단정하고 화사해 보이는 금사 자수 피터팬 칼라',
      '겨울철 보온을 고려한 도톰한 순면 40수 안감'
    ],
    fabricCare: '드라이클리닝 권장',
    lining: '100% 프리미엄 코마사 순면 안감',
    matchingAccessoryIds: ['acc-velvet-ruby-maryjane', 'acc-holiday-velvet-tiara', 'acc-holiday-bag', 'acc-christmas-ruby-cape'],
    isBest: true,
    isNew: true
  },
  {
    id: 'dress-moonlight-silver-ballgown',
    name: '문라이트 아이스 실버 스노우 퀸 볼가운',
    subtitle: '프로스트 실버 시퀸 바디와 투명한 아이스 케이프 베일이 어우러진 눈의 여왕 볼가운',
    category: 'dress',
    subCategory: 'ballgown',
    price: 65000,
    originalPrice: 98000,
    image: '/src/assets/images/studio_moonlight_silver_gown_1795495176705.jpg',
    color: {
      name: '프로스트 아이스 실버',
      hex: '#E2E8F0',
      family: 'white'
    },
    availableColors: [
      { name: '프로스트 아이스 실버', hex: '#E2E8F0', family: 'white', image: '/src/assets/images/studio_moonlight_silver_gown_1795495176705.jpg' },
      { name: '아이스 스카이 블루', hex: '#93C5FD', family: 'blue', image: '/src/assets/images/studio_ice_blue_1794892116629.jpg' },
      { name: '오로라 딥 바이올렛', hex: '#A855F7', family: 'purple', image: '/src/assets/images/studio_ice_purple_1794892118697.jpg' }
    ],
    materials: ['프로스트 실버 시퀸 메쉬', '하이넥 크리스탈 넥밴드', '시어 롱 케이프 슬리브', '다층 글리터 스노우 튤'],
    vibes: ['눈꽃 왕국', '미드나잇 신데렐라', '동화 속 무도회', '클래식 로열'],
    silhouette: '케이프 트레인 페플럼 볼가운',
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 206,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '한겨울 궁전의 달빛을 머금은 듯 은빛 눈꽃 시퀸과 2단 페플럼 웨이스트 러플, 그리고 어깨 뒤로 길게 흐르는 순백의 시폰 케이프 베일이 웅장한 눈의 여왕 실루엣을 연출하는 최상위 아틀리에 볼가운입니다.',
    features: [
      '은빛 눈꽃 결정체가 수놓아진 럭셔리 스팽글 바디',
      '탈부착 가능한 어깨 롱 오간자 케이프 트레인',
      '허리 라인이 더욱 풍성해 보이는 입체 2단 페플럼 스커트',
      '까슬거림을 완벽 차단한 이중 소프트 순면 안감'
    ],
    fabricCare: '찬물 중성세제 가볍게 손세탁 또는 드라이클리닝',
    lining: '100% 프리미엄 순면 안감',
    matchingAccessoryIds: ['acc-ice-crystal-wand', 'acc-starlight-sheer-cape', 'acc-ice-crystal-wings', 'acc-glass-slippers'],
    isBest: true,
    isNew: true
  },
  {
    id: 'dress-coraline-peach-ballgown',
    name: '코랄린 펄 오간자 플라워 왈츠 볼가운',
    subtitle: '살구빛 코랄 핑크 러플 티어와 진주 비즈 스파게티 숄더 스트랩의 로맨틱 왈츠 볼가운',
    category: 'dress',
    subCategory: 'ballgown',
    price: 61000,
    originalPrice: 92000,
    image: '/src/assets/images/studio_coraline_peach_gown_1795495176938.jpg',
    color: {
      name: '코랄린 선셋 피치',
      hex: '#FB923C',
      family: 'coral'
    },
    availableColors: [
      { name: '코랄린 선셋 피치', hex: '#FB923C', family: 'coral', image: '/src/assets/images/studio_coraline_peach_gown_1795495176938.jpg' },
      { name: '로맨틱 로즈 핑크', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_aurora_rose_1794892114434.jpg' },
      { name: '샴페인 골드 옐로우', hex: '#FDE047', family: 'gold', image: '/src/assets/images/studio_belle_gold_1794892126484.jpg' }
    ],
    materials: ['수제 펄 비딩 스트랩', '3D 보태니컬 자수 뷔스티에', '4단 웨이브 크레이프 쉬폰', '순면 안감'],
    vibes: ['스프링 블라썸', '로맨틱 로즈', '동화 속 무도회', '골든 팰리스'],
    silhouette: '티어드 쉬폰 왈츠 볼가운',
    sparkleLevel: 4,
    rating: 4.9,
    reviewCount: 142,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '노을빛 산호초와 장미 정원을 닮은 화사한 코랄 피치 컬러에 다채로운 꽃잎 자수 코르셋 바디, 그리고 4단으로 우아하게 흩날리는 쉬폰 티어드 스커트가 왈츠를 추는 듯 로맨틱한 볼가운입니다.',
    features: [
      '어깨 라인을 보석처럼 빛내주는 천연 진주 비즈 스트랩',
      '정교한 입체 꽃 자수와 골드 잎사귀가 어우러진 슬림 뷔스티에',
      '공기처럼 가볍고 풍성하게 퍼지는 4단 웨이브 쉬폰 티어',
      '아이 피부 보호 100% 부드러운 코튼 라이닝'
    ],
    fabricCare: '미온수 울샴푸 단독 손세탁 후 자연 건조',
    lining: '100% 천연 순면 안감',
    matchingAccessoryIds: ['acc-rosegold-floral-tiara', 'acc-pearl-basket-bag', 'acc-spring-blossom-shoes', 'acc-crown-earrings'],
    isBest: false,
    isNew: true
  },
  {
    id: 'dress-stardust-navy-ballgown',
    name: '스타더스트 미드나잇 골드 플로럴 볼가운',
    subtitle: '짙은 밤하늘 네이비 튤 위에 금사 별꽃 자수를 촘촘히 수놓은 웅장한 리사이틀 볼가운',
    category: 'dress',
    subCategory: 'ballgown',
    price: 63000,
    originalPrice: 95000,
    image: '/src/assets/images/studio_stardust_navy_gown_1795495178082.jpg',
    color: {
      name: '스타더스트 미드나잇 네이비',
      hex: '#1E3A8A',
      family: 'navy'
    },
    availableColors: [
      { name: '스타더스트 미드나잇 네이비', hex: '#1E3A8A', family: 'navy', image: '/src/assets/images/studio_stardust_navy_gown_1795495178082.jpg' },
      { name: '스타라이트 딥 퍼플', hex: '#581C87', family: 'purple', image: '/src/assets/images/studio_galaxy_purple_1794892123668.jpg' },
      { name: '빈티지 카멜리아 와인', hex: '#8E2443', family: 'red', image: '/src/assets/images/studio_wine_velvet_gown_1795494681598.jpg' }
    ],
    materials: ['금사 별꽃 손자수', '미드나잇 딥 네이비 소프트 튤', '플러터 오간자 소매', '새틴 허리 벨트'],
    vibes: ['미드나잇 신데렐라', '골든 팰리스', '동화 속 무도회', '클래식 로열'],
    silhouette: '벨라인 리사이틀 볼가운',
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 164,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '깊고 차분한 미드나잇 네이비 튤 전면에 황금빛 별꽃과 나뭇가지 자수를 수놓은 웅장한 무드 볼가운입니다. 무대 조명 아래서 별빛처럼 고품격의 반짝임을 선사해 피아노·바이올린 콩쿠르 및 연말 음악회 드레스로 큰 사랑을 받습니다.',
    features: [
      '전면 스커트와 소매를 수놓은 촘촘한 금사 스타플라워 자수',
      '팔을 자유롭게 움직일 수 있는 가벼운 나비 플러터 소매',
      '허리를 단단하게 잡아주는 미드나잇 네이비 새틴 밴드',
      '4겹 튤 스커트 + 풍성한 순면 속치마 일체형 구조'
    ],
    fabricCare: '드라이클리닝 권장',
    lining: '100% 프리미엄 순면 안감',
    matchingAccessoryIds: ['acc-midnight-sapphire-tiara', 'acc-crescent-moon-scepter', 'acc-sapphire-earrings', 'acc-golden-palace-bracelet'],
    isBest: true,
    isNew: true
  },
  {
    id: 'dress-hydrangea-blue-tutu',
    name: '수국 블루 시폰 리본 레이어드 튜튜',
    subtitle: '맑은 하늘색 수국 꽃잎 아플리케와 겹겹이 풍성한 블루 미스트 튤이 어우러진 가든 튜튜',
    category: 'dress',
    subCategory: 'tutu',
    price: 55000,
    originalPrice: 79000,
    image: '/src/assets/images/studio_hydrangea_blue_tutu_1795495178568.jpg',
    color: {
      name: '하이드렌지아 스카이 블루',
      hex: '#93C5FD',
      family: 'blue'
    },
    availableColors: [
      { name: '하이드렌지아 스카이 블루', hex: '#93C5FD', family: 'blue', image: '/src/assets/images/studio_hydrangea_blue_tutu_1795495178568.jpg' },
      { name: '체리블라썸 베이비 핑크', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_cherry_pink_1794892122945.jpg' },
      { name: '버터밀크 레몬 옐로우', hex: '#FEF08A', family: 'gold', image: '/src/assets/images/studio_lemon_daisy_tutu_1795494681978.jpg' }
    ],
    materials: ['3D 입체 수국 실크 꽃잎', '쉬어 블루 미스트 튤', '퍼프 오간자 소매', '코튼 40수 안감'],
    vibes: ['스프링 블라썸', '요정 숲', '미드나잇 신데렐라', '눈꽃 왕국'],
    silhouette: '퍼프 슬리브 플라워 튜튜',
    sparkleLevel: 3,
    rating: 4.9,
    reviewCount: 137,
    sizes: ['90 (2-3세 / 80-90cm)', '100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)'],
    description: '초여름 정원에 만개한 파스텔 수국을 그대로 옮겨 놓은 듯 하늘빛과 연보라 꽃잎 아플리케가 상의를 가득 채운 튜튜 드레스입니다. 구름처럼 몽실몽실한 튤 스커트와 퍼프 소매가 아이의 사랑스러움을 극대화합니다.',
    features: [
      '네크라인부터 허리까지 입체적으로 피어난 투톤 실크 수국 꽃잎',
      '팔뚝을 감싸는 발랄한 시어 오간자 버블 퍼프 소매',
      '가볍고 탄력 있는 5겹 소프트 튤 캉캉 튜튜',
      '피부 자극 없는 코마사 100% 순면 안감'
    ],
    fabricCare: '찬물 단독 울코스 또는 가벼운 손세탁',
    lining: '100% 코마사 순면 안감',
    matchingAccessoryIds: ['acc-cinderella-glass-heels', 'acc-cinderella-blue-gloves', 'acc-baroque-butterfly-earrings', 'acc-pearl-bracelet'],
    isBest: false,
    isNew: true
  },
  {
    id: 'dress-scarlet-camellia-tutu',
    name: '스칼렛 로즈 벨벳 퍼프 슬리브 튜튜',
    subtitle: '딥 루비 벨벳 퍼프 소매와 하트 네크라인, 골드 도트 스커트가 사랑스러운 크리스마스 파티 튜튜',
    category: 'dress',
    subCategory: 'tutu',
    price: 56000,
    originalPrice: 82000,
    image: '/src/assets/images/studio_scarlet_camellia_tutu_1795495178941.jpg',
    color: {
      name: '스칼렛 카멜리아 레드',
      hex: '#DC2626',
      family: 'red'
    },
    availableColors: [
      { name: '스칼렛 카멜리아 레드', hex: '#DC2626', family: 'red', image: '/src/assets/images/studio_scarlet_camellia_tutu_1795495178941.jpg' },
      { name: '홀리데이 루비 튜튜', hex: '#B91C1C', family: 'red', image: '/src/assets/images/studio_ruby_tutu_1794892132292.jpg' },
      { name: '포레스트 세이지 그린', hex: '#059669', family: 'green', image: '/src/assets/images/studio_christmas_emerald_1794892112538.jpg' }
    ],
    materials: ['딥 루비 벨벳 바디', '골드 메탈릭 도트 튤', '골드 파이핑 스위트하트 넥', '벨벳 보우 벨트'],
    vibes: ['크리스마스 에디션', '러블리 베리', '로맨틱 로즈', '동화 속 무도회'],
    silhouette: '티어드 벨벳 튜튜',
    sparkleLevel: 4,
    rating: 5.0,
    reviewCount: 169,
    sizes: ['90 (2-3세 / 80-90cm)', '100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)'],
    description: '크리스마스 선물 상자의 벨벳 리본을 닮은 스칼렛 레드 벨벳 퍼프 상의와 작은 금빛 별가루처럼 골드 도트가 찍힌 3단 티어드 튜튜 스커트가 발랄하고 고급스러운 홀리데이 파티룩을 완성합니다.',
    features: [
      '스위트하트 네크라인을 따라 둘러진 섬세한 골드 파이핑',
      '앉고 뛰어도 풍성함이 살아있는 3단 케이크 실루엣 골드 도트 튤',
      '허리 중앙 벨벳 미니 리본 포인트',
      '보온성과 땀 흡수가 뛰어난 순면 안감'
    ],
    fabricCare: '세탁망 단독 손세탁 권장',
    lining: '100% 프리미엄 순면 안감',
    matchingAccessoryIds: ['acc-velvet-ruby-maryjane', 'acc-holiday-bag', 'acc-holiday-velvet-tiara', 'acc-holiday-ruby-gloves'],
    isBest: true,
    isNew: true
  },
  {
    id: 'dress-sage-botanical-tutu',
    name: '세이지 보태니컬 페어리 리프 튜튜',
    subtitle: '은은한 세이지 그린 실크 튤 위 아이보리 잎사귀 레이스와 린넨 리본이 어우러진 숲속 요정 튜튜',
    category: 'dress',
    subCategory: 'tutu',
    price: 55000,
    originalPrice: 79000,
    image: '/src/assets/images/studio_sage_botanical_tutu_1795495178824.jpg',
    color: {
      name: '세이지 포레스트 그린',
      hex: '#84A98C',
      family: 'green'
    },
    availableColors: [
      { name: '세이지 포레스트 그린', hex: '#84A98C', family: 'green', image: '/src/assets/images/studio_sage_botanical_tutu_1795495178824.jpg' },
      { name: '에메랄드 페어리 민트', hex: '#34D399', family: 'green', image: '/src/assets/images/studio_emerald_fairy_1794892124282.jpg' },
      { name: '앤틱 크림 아이보리', hex: '#FEF3C7', family: 'white', image: '/src/assets/images/studio_cream_lace_tutu_1795494682795.jpg' }
    ],
    materials: ['아이보리 보태니컬 리프 자수', '세이지 그린 에어 튤', '내추럴 코튼 린넨 벨트', '레이스 캡 소매'],
    vibes: ['요정 숲', '스프링 블라썸', '골든 팰리스', '인어공주 바다'],
    silhouette: '내추럴 가든 튜튜',
    sparkleLevel: 3,
    rating: 4.9,
    reviewCount: 144,
    sizes: ['100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)', '140 (9-10세 / 130-140cm)'],
    description: '동화 속 비밀의 숲을 거니는 요정을 연상시키는 세련된 뮤트 세이지 그린 컬러와 순백의 나뭇잎 레이스 자수가 어우러진 내추럴 감성의 아틀리에 튜튜 드레스입니다. 야외 공원이나 숲속 가족 스냅 촬영에 특히 잘 어울립니다.',
    features: [
      '가슴선과 스커트 상단을 우아하게 수놓은 아이보리 나뭇잎 자수',
      '은은하고 고급스러운 파리 부티크 특유의 뮤트 세이지 톤',
      '뒷면 귀여운 린넨 리본 허리 묶음 디테일',
      '가볍고 시원한 코튼 100% 통기성 안감'
    ],
    fabricCare: '미온수 울코스 단독 세탁',
    lining: '100% 천연 순면 안감',
    matchingAccessoryIds: ['acc-emerald-fairy-bracelet', 'acc-ocean-prism-wings', 'acc-pearl-basket-bag', 'acc-rosegold-floral-tiara'],
    isBest: false,
    isNew: true
  },
  {
    id: 'dress-champagne-swan-tutu',
    name: '샴페인 펄 스완 발레리나 시퀸 튜튜',
    subtitle: '은은한 샴페인 골드 깃털 트리밍과 정교한 스팽글 뷔스티에가 돋보이는 발레·콩쿠르 튜튜',
    category: 'dress',
    subCategory: 'tutu',
    price: 58000,
    originalPrice: 85000,
    image: '/src/assets/images/studio_champagne_swan_tutu_1795495179782.jpg',
    color: {
      name: '샴페인 펄 골드',
      hex: '#FDE68A',
      family: 'gold'
    },
    availableColors: [
      { name: '샴페인 펄 골드', hex: '#FDE68A', family: 'gold', image: '/src/assets/images/studio_champagne_swan_tutu_1795495179782.jpg' },
      { name: '밀키 펄 화이트', hex: '#FDF4FF', family: 'white', image: '/src/assets/images/studio_swan_white_1794892130601.jpg' },
      { name: '페더 파스텔 핑크', hex: '#FCE7F3', family: 'pink', image: '/src/assets/images/studio_swan_pink_1794892131133.jpg' }
    ],
    materials: ['마이크로 샴페인 스팽글', '진주 엣지 트리밍 2단 튜튜', '오간자 날개 숄더 스트랩', '새틴 안감'],
    vibes: ['골든 팰리스', '동화 속 무도회', '클래식 로열', '로맨틱 로즈'],
    silhouette: '발레리나 튜튜',
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 189,
    sizes: ['90 (2-3세 / 80-90cm)', '100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)'],
    description: '호수 위 햇살을 머금은 샴페인 골드빛 스팽글 뷔스티에와 치마 끝단에 한 알씩 정교하게 엮인 진주 비즈 라인이 돋보이는 발레리나 튜튜 드레스입니다. 움직일 때마다 톡톡 튀는 입체 튜튜 스커트가 발레·피아노 발표회에서 빛을 발합니다.',
    features: [
      '스커트 두 겹 끝단을 따라 촘촘히 장식된 광택 펄 비즈 트리밍',
      '어깨 위 나비 날개처럼 사랑스럽게 솟은 오간자 러플 스트랩',
      '스타킹에 걸리지 않는 고밀도 마이크로 샴페인 스팽글',
      '신축성 있는 부드러운 순면 내부 안감'
    ],
    fabricCare: '미온수 단독 손세탁 후 형태 잡아 건조',
    lining: '100% 프리미엄 순면 안감',
    matchingAccessoryIds: ['acc-champagne-sequin-shoes', 'acc-golden-palace-tiara', 'acc-golden-palace-earrings', 'acc-ivory-lace-gloves'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-velvet-ruby-maryjane',
    name: '빈티지 루비 벨벳 진주 버클 메리제인 슈즈',
    subtitle: '부드러운 버건디 벨벳 어퍼에 앤틱 진주 클러스터 버클이 달린 클래식 메리제인 파티 슈즈',
    category: 'accessory',
    subCategory: 'shoes',
    price: 36000,
    originalPrice: 51000,
    image: '/src/assets/images/studio_velvet_ruby_maryjane_1795495208494.jpg',
    color: {
      name: '빈티지 버건디 와인',
      hex: '#881337',
      family: 'red'
    },
    availableColors: [
      { name: '빈티지 버건디 와인', hex: '#881337', family: 'red', image: '/src/assets/images/studio_velvet_ruby_maryjane_1795495208494.jpg' },
      { name: '홀리데이 루비 레드', hex: '#B91C1C', family: 'red', image: '/src/assets/images/studio_red_shoes_1794892158542.jpg' },
      { name: '샴페인 로즈 골드', hex: '#EAB308', family: 'gold', image: '/src/assets/images/studio_champagne_sequin_shoes_1795494686884.jpg' }
    ],
    materials: ['이탈리아 실크 벨벳 어퍼', '앤틱 골드 진주 클러스터 버클', '라텍스 쿠션 인솔', '논슬립 러버 솔'],
    vibes: ['크리스마스 에디션', '로맨틱 로즈', '클래식 로열', '골든 팰리스'],
    sparkleLevel: 4,
    rating: 5.0,
    reviewCount: 188,
    sizes: ['150mm', '160mm', '170mm', '180mm', '190mm', '200mm'],
    description: '깊은 버건디 와인 벨벳 바디 위로 보석함에서 꺼낸 듯한 진주 클러스터 버클이 돋보이는 파리 부티크 시그니처 메리제인 슈즈입니다. 벨벳 드레스는 물론 튜튜 드레스에 양말과 함께 매치해도 클래식한 무드가 살아납니다.',
    features: [
      '그로그랭 리본 파이핑과 보드라운 프리미엄 실크 벨벳 어퍼',
      '탈착이 간편한 버클형 히든 원터치 스트랩',
      '오래 걸어도 발이 편안한 8mm 라텍스 메모리폼 깔창'
    ],
    fabricCare: '벨벳 전용 부드러운 브러시로 먼지 제거',
    lining: '소프트 카프스킨 터치 천연 안감',
    matchingAccessoryIds: ['dress-camellia-wine-velvet', 'dress-noel-tartan-velvet', 'dress-scarlet-camellia-tutu'],
    isBest: true,
    isNew: true
  },
  {
    id: 'dress-lilac-buttercup-tutu',
    name: '라일락 버터컵 플라워 백오픈 리본 튜튜',
    subtitle: '파스텔 라일락 튤과 뒷면 실크 새틴 리본, 은은한 아이보리 버터컵 꽃 자수가 수놓아진 가든 튜튜',
    category: 'dress',
    subCategory: 'tutu',
    price: 55000,
    originalPrice: 79000,
    image: '/src/assets/images/studio_lilac_buttercup_tutu_1795495301403.jpg',
    color: {
      name: '파스텔 라일락 라벤더',
      hex: '#D8B4FE',
      family: 'purple'
    },
    availableColors: [
      { name: '파스텔 라일락 라벤더', hex: '#D8B4FE', family: 'purple', image: '/src/assets/images/studio_lilac_buttercup_tutu_1795495301403.jpg' },
      { name: '위스테리아 파스텔 라벤더', hex: '#C4B5FD', family: 'purple', image: '/src/assets/images/studio_celeste_lavender_gown_1795495176343.jpg' },
      { name: '베이비 스트로베리 핑크', hex: '#F9A8D4', family: 'pink', image: '/src/assets/images/studio_berry_pink_1794892119187.jpg' }
    ],
    materials: ['아이보리 버터컵 플로럴 자수', '실크 새틴 웨이스트 보우', '소프트 라일락 튤', '캡 오간자 슬리브'],
    vibes: ['스프링 블라썸', '요정 숲', '러블리 베리', '로맨틱 로즈'],
    silhouette: '새틴 보우 가든 튜튜',
    sparkleLevel: 3,
    rating: 4.9,
    reviewCount: 152,
    sizes: ['90 (2-3세 / 80-90cm)', '100 (3-4세 / 90-100cm)', '110 (4-5세 / 100-110cm)', '120 (5-6세 / 110-120cm)', '130 (7-8세 / 120-130cm)'],
    description: '파스텔 라일락빛 튤 위에 아이보리빛 버터컵 잔꽃 자수가 화사하게 피어나며, 허리를 감싸는 풍성한 연보라 새틴 왕리본이 동화 같은 포인트를 더하는 봄·가을 인기 튜튜 드레스입니다.',
    features: [
      '스커트와 상의를 연결하는 입체 아이보리 플로럴 자수',
      '탈부착 가능한 볼륨 새틴 리본 허리 벨트',
      '어깨 라인이 여리여리해 보이는 시스루 캡 오간자 소매',
      '100% 부드러운 코튼 순면 안감'
    ],
    fabricCare: '세탁망 단독 울코스 세탁',
    lining: '100% 코마사 순면 안감',
    matchingAccessoryIds: ['acc-lavender-butterfly-slippers', 'acc-lavender-fairy-wand', 'acc-rosegold-floral-tiara', 'acc-pearl-bracelet'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-lavender-butterfly-slippers',
    name: '라벤더 시폰 3D 나비 크리스탈 파티 슈즈',
    subtitle: '파스텔 라일락 글리터 바디에 반투명 오간자 입체 나비 코르사주와 진주가 앉은 요정 구두',
    category: 'accessory',
    subCategory: 'shoes',
    price: 35000,
    originalPrice: 49000,
    image: '/src/assets/images/studio_lavender_butterfly_slippers_1795495303050.jpg',
    color: {
      name: '오로라 라벤더 글리터',
      hex: '#C084FC',
      family: 'purple'
    },
    availableColors: [
      { name: '오로라 라벤더 글리터', hex: '#C084FC', family: 'purple', image: '/src/assets/images/studio_lavender_butterfly_slippers_1795495303050.jpg' },
      { name: '신데렐라 아이스 블루', hex: '#60A5FA', family: 'blue', image: '/src/assets/images/studio_cinderella_shoes_1794892174489.jpg' },
      { name: '블라썸 베이비 핑크', hex: '#FBCFE8', family: 'pink', image: '/src/assets/images/studio_blossom_shoes_1794892165201.jpg' }
    ],
    materials: ['미세 파스텔 라벤더 글리터', '3D 오간자 나비 코르사주', '진주 & 큐빅 센터 장식', '라텍스 쿠션 인솔'],
    vibes: ['요정 숲', '스프링 블라썸', '동화 속 무도회', '러블리 베리'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 174,
    sizes: ['150mm', '160mm', '170mm', '180mm', '190mm', '200mm'],
    description: '걸을 때마다 구두 앞코의 투명한 3D 라일락 나비가 살랑이는 듯 사랑스러운 글리터 공주 구두입니다. 안정적인 로우 블록 힐과 발등 스트랩이 아이 발목을 단단하게 받쳐줍니다.',
    features: [
      '구두 앞코에 수작업으로 고정된 입체 오간자 버터플라이 & 진주 장식',
      '성장기 발목 흔들림을 잡아주는 조절식 버클 스트랩',
      '8mm 고탄성 라텍스 풋베드 및 논슬립 밑창'
    ],
    fabricCare: '가벼운 오염은 부드러운 물티슈로 닦아내기',
    lining: '통기성 소프트 레더 라이닝',
    matchingAccessoryIds: ['dress-lavender-fairy', 'dress-celeste-lavender-ballgown', 'dress-lilac-buttercup-tutu'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-mint-pearl-ballet-flats',
    name: '아쿠아 민트 새틴 크로스 스트랩 발레 슈즈',
    subtitle: '발목을 우아하게 감싸는 민트 새틴 리본과 펄 비즈 파이핑이 특징인 발레리나 플랫 슈즈',
    category: 'accessory',
    subCategory: 'shoes',
    price: 33000,
    originalPrice: 46000,
    image: '/src/assets/images/studio_mint_pearl_ballet_flats_1795495303995.jpg',
    color: {
      name: '아쿠아 씨폼 민트',
      hex: '#5EEAD4',
      family: 'green'
    },
    availableColors: [
      { name: '아쿠아 씨폼 민트', hex: '#5EEAD4', family: 'green', image: '/src/assets/images/studio_mint_pearl_ballet_flats_1795495303995.jpg' },
      { name: '샹틸리 크림 아이보리', hex: '#FAF8F5', family: 'white', image: '/src/assets/images/studio_ivory_lace_bridal_shoes_1795495303893.jpg' },
      { name: '피치 코랄 펄', hex: '#FB923C', family: 'coral', image: '/src/assets/images/studio_coral_ribbon_pumps_1795495304679.jpg' }
    ],
    materials: ['아쿠아 광택 실크 새틴', '진주 엣지 트리밍', '골드 팁 크로스 리본 스트랩', '논슬립 러버 솔'],
    vibes: ['인어공주 바다', '요정 숲', '스프링 블라썸', '눈꽃 왕국'],
    sparkleLevel: 4,
    rating: 4.9,
    reviewCount: 159,
    sizes: ['150mm', '160mm', '170mm', '180mm', '190mm', '200mm'],
    description: '발레리나의 토슈즈를 모티브로 발등 라인을 따라 진주 구슬을 한 알씩 수놓은 아쿠아 민트 새틴 플랫 슈즈입니다. 골드 메탈 팁이 달린 실크 리본 스트랩을 발목에 리본으로 묶으면 동화 속 발레리나 무드가 완성됩니다.',
    features: [
      '구두 입구 전체를 두른 촘촘한 화이트 진주 비즈 라인',
      '풀리지 않고 예쁘게 묶이는 프리미엄 골드 팁 새틴 앵클 리본',
      '가벼운 유연성 고무창으로 발가락 움직임이 편안함'
    ],
    fabricCare: '젖은 수건으로 살살 눌러 닦기',
    lining: '부드러운 스웨이드 터치 쿠션 안감',
    matchingAccessoryIds: ['dress-tiffany-mint-organza', 'dress-mermaid-ocean-pearl', 'dress-sage-botanical-tutu'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-midnight-star-shoes',
    name: '미드나잇 네이비 스타 젬 벨벳 파티 구두',
    subtitle: '밤하늘 네이비 벨벳에 골드 별 큐빅 브로치가 빛나는 연말 무도회 및 리사이틀용 메리제인',
    category: 'accessory',
    subCategory: 'shoes',
    price: 36000,
    originalPrice: 51000,
    image: '/src/assets/images/studio_midnight_star_shoes_1795495303928.jpg',
    color: {
      name: '미드나잇 로열 네이비',
      hex: '#1E1B4B',
      family: 'navy'
    },
    availableColors: [
      { name: '미드나잇 로열 네이비', hex: '#1E1B4B', family: 'navy', image: '/src/assets/images/studio_midnight_star_shoes_1795495303928.jpg' },
      { name: '빈티지 버건디 와인', hex: '#881337', family: 'red', image: '/src/assets/images/studio_velvet_ruby_maryjane_1795495208494.jpg' },
      { name: '샴페인 로즈 골드', hex: '#EAB308', family: 'gold', image: '/src/assets/images/studio_champagne_sequin_shoes_1795494686884.jpg' }
    ],
    materials: ['미드나잇 네이비 실크 벨벳', '골드 스타버스트 큐빅 브로치', '그로그랭 리본 트리밍', '논슬립 밑창'],
    vibes: ['미드나잇 신데렐라', '동화 속 무도회', '클래식 로열', '크리스마스 에디션'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 162,
    sizes: ['150mm', '160mm', '170mm', '180mm', '190mm', '200mm'],
    description: '깊은 밤하늘 빛깔의 미드나잇 네이비 실크 벨벳 위 발등 스트랩에 황금빛 별 브로치가 찬란하게 반짝이는 프리미엄 메리제인 슈즈입니다. 네이비·퍼플·화이트 계열 무대 의상과 완벽하게 어우러집니다.',
    features: [
      '별빛이 쏟아지는 듯한 파베 세팅 골드 스타버스트 브로치',
      '발등과 발뒤꿈치를 부드럽게 잡아주는 천연 스웨이드 힐 카운터',
      '장시간 연주회 대기에도 푹신한 8mm 라텍스 인솔'
    ],
    fabricCare: '부드러운 브러시로 먼지 털어내기',
    lining: '천연 양가죽 터치 인솔 라이닝',
    matchingAccessoryIds: ['dress-stardust-navy-ballgown', 'dress-midnight-galaxy-star', 'dress-cinderella-midnight'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-ivory-lace-bridal-shoes',
    name: '샹틸리 아이보리 레이스 플라워 화동 구두',
    subtitle: '순백의 꽃무늬 샹틸리 레이스와 시폰 장미 코르사주가 조화로운 연주회·화동 전용 구두',
    category: 'accessory',
    subCategory: 'shoes',
    price: 35000,
    originalPrice: 49000,
    image: '/src/assets/images/studio_ivory_lace_bridal_shoes_1795495303893.jpg',
    color: {
      name: '샹틸리 크림 아이보리',
      hex: '#FAF8F5',
      family: 'white'
    },
    availableColors: [
      { name: '샹틸리 크림 아이보리', hex: '#FAF8F5', family: 'white', image: '/src/assets/images/studio_ivory_lace_bridal_shoes_1795495303893.jpg' },
      { name: '스노우 펄 실버', hex: '#E2E8F0', family: 'white', image: '/src/assets/images/studio_glass_slippers_1794892161577.jpg' },
      { name: '아쿠아 씨폼 민트', hex: '#5EEAD4', family: 'green', image: '/src/assets/images/studio_mint_pearl_ballet_flats_1795495303995.jpg' }
    ],
    materials: ['프렌치 샹틸리 플로럴 레이스', '수제 실크 쉬폰 로즈 코르사주', '오가닉 코튼 파이핑', '논슬립 러버 솔'],
    vibes: ['골든 팰리스', '로맨틱 로즈', '눈꽃 왕국', '스프링 블라썸'],
    sparkleLevel: 3,
    rating: 5.0,
    reviewCount: 194,
    sizes: ['150mm', '160mm', '170mm', '180mm', '190mm', '200mm'],
    description: '웨딩 화동과 피아노 콩쿠르, 돌스냅을 위해 가장 고전적이고 품격 있게 제작된 아이보리 샹틸리 레이스 메리제인입니다. 구두 앞코에 핀 입체 시폰 장미가 화보 속 한 장면을 완성해 줍니다.',
    features: [
      '은은하게 비치는 섬세한 프렌치 꽃무늬 레이스 바디',
      '골드 타원형 버클 & 히든 벨크로로 아이 혼자서도 착화 가능',
      '미끄러짐 없는 플렉시블 고무 아웃솔'
    ],
    fabricCare: '중성세제 묻힌 젖은 천으로 가볍게 닦아내기',
    lining: '부드러운 스킨 베이지 레더 인솔',
    matchingAccessoryIds: ['dress-rosebud-lace-tutu', 'dress-swan-white', 'dress-moonlight-silver-ballgown'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-coral-ribbon-pumps',
    name: '피치 코랄 펄 팁 저굽 젤리 프린세스 슈즈',
    subtitle: '은은한 피치 코랄 펄 글리터와 실크 새틴 리본 보우, 안전한 키즈 로우힐 크리스탈 슈즈',
    category: 'accessory',
    subCategory: 'shoes',
    price: 34000,
    originalPrice: 48000,
    image: '/src/assets/images/studio_coral_ribbon_pumps_1795495304679.jpg',
    color: {
      name: '피치 코랄 펄',
      hex: '#FB923C',
      family: 'coral'
    },
    availableColors: [
      { name: '피치 코랄 펄', hex: '#FB923C', family: 'coral', image: '/src/assets/images/studio_coral_ribbon_pumps_1795495304679.jpg' },
      { name: '블라썸 베이비 핑크', hex: '#FBCFE8', family: 'pink', image: '/src/assets/images/studio_blossom_shoes_1794892165201.jpg' },
      { name: '신데렐라 아이스 블루', hex: '#60A5FA', family: 'blue', image: '/src/assets/images/studio_cinderella_shoes_1794892174489.jpg' }
    ],
    materials: ['미세 파베 펄 크리스탈 메쉬', '더블 페이스 피치 새틴 보우', '진주 보석 브로치', '안정형 2cm 키즈 굽'],
    vibes: ['스프링 블라썸', '로맨틱 로즈', '러블리 베리', '동화 속 무도회'],
    sparkleLevel: 5,
    rating: 4.9,
    reviewCount: 147,
    sizes: ['150mm', '160mm', '170mm', '180mm', '190mm', '200mm'],
    description: '진짜 공주님 구두처럼 살짝 굽이 있지만 넓고 안정적인 2cm 블록 힐로 발목 무리 없이 예쁜 걸음걸이를 만들어주는 피치 코랄 펌프스입니다. 크리스탈 앵클 스트랩과 새틴 보우가 화사하게 빛납니다.',
    features: [
      '빛을 받을 때마다 맑게 반사되는 코랄 펄 크리스탈 스톤',
      '성장기 아치를 지켜주는 인체공학적 2cm 와이드 블록 로우힐',
      '발목 전체를 우아하게 감싸는 스파클 스트랩'
    ],
    fabricCare: '물티슈로 가볍게 닦아 그늘 건조',
    lining: '논슬립 소프트 패드 안감',
    matchingAccessoryIds: ['dress-coraline-peach-ballgown', 'dress-peach-blossom', 'dress-cherry-blossom-pink'],
    isBest: false,
    isNew: true
  },
  {
    id: 'acc-gold-leaf-sandals',
    name: '골든 리프 그리시안 진주 오픈 스트랩 슈즈',
    subtitle: '황금빛 월계수 잎사귀 비딩 모티브와 진주 앵클 스트랩이 우아한 가든·썸머 파티 샌들',
    category: 'accessory',
    subCategory: 'shoes',
    price: 34000,
    originalPrice: 48000,
    image: '/src/assets/images/studio_gold_leaf_sandals_1795495305800.jpg',
    color: {
      name: '샴페인 메탈릭 골드',
      hex: '#EAB308',
      family: 'gold'
    },
    availableColors: [
      { name: '샴페인 메탈릭 골드', hex: '#EAB308', family: 'gold', image: '/src/assets/images/studio_gold_leaf_sandals_1795495305800.jpg' },
      { name: '샴페인 로즈 골드', hex: '#FDE047', family: 'gold', image: '/src/assets/images/studio_champagne_sequin_shoes_1795494686884.jpg' },
      { name: '샹틸리 크림 아이보리', hex: '#FAF8F5', family: 'white', image: '/src/assets/images/studio_ivory_lace_bridal_shoes_1795495303893.jpg' }
    ],
    materials: ['금사 비딩 월계수 리프 아플리케', '메탈릭 샴페인 레더', '미니 진주 앵클 스트랩', '쿠션 풋베드'],
    vibes: ['골든 팰리스', '요정 숲', '스프링 블라썸', '인어공주 바다'],
    sparkleLevel: 4,
    rating: 4.9,
    reviewCount: 138,
    sizes: ['150mm', '160mm', '170mm', '180mm', '190mm', '200mm'],
    description: '따사로운 봄·여름 야외 파티나 리조트 휴양지, 숲속 스냅 촬영에 최적인 그리시안 여신 무드의 골드 리프 드레스 샌들입니다. 발등을 장식한 금사 월계수 자수와 진주 스트랩이 시원하고 화려한 분위기를 완성합니다.',
    features: [
      '장인이 비즈와 금사로 정교하게 수놓은 입체 월계수 잎사귀 모티브',
      '통풍이 쾌적해 한여름 야외 행사에서도 땀 차지 않는 오픈 디자인',
      '발바닥 충격을 흡수하는 도톰한 우레탄 쿠션 밑창'
    ],
    fabricCare: '마른 천으로 먼지 닦기',
    lining: '소프트 천연 레더 라이닝',
    matchingAccessoryIds: ['dress-belle-gold', 'dress-champagne-swan-tutu', 'dress-daisy-lemon-tutu'],
    isBest: false,
    isNew: true
  },
  {
    id: 'acc-cinderella-coach-bag',
    name: '미드나잇 블루 자수 벨벳 호박마차 미니백',
    subtitle: '신데렐라 호박마차 금사 자수와 파스텔 블루 실크 벨벳, 진주 구슬 아치 핸들의 드림백',
    category: 'accessory',
    subCategory: 'bag',
    price: 32000,
    originalPrice: 45000,
    image: '/src/assets/images/studio_cinderella_coach_bag_1795495305406.jpg',
    color: {
      name: '신데렐라 파스텔 블루',
      hex: '#93C5FD',
      family: 'blue'
    },
    availableColors: [
      { name: '신데렐라 파스텔 블루', hex: '#93C5FD', family: 'blue', image: '/src/assets/images/studio_cinderella_coach_bag_1795495305406.jpg' },
      { name: '로즈 퀼팅 핑크', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_pearl_bag_1794892158482.jpg' },
      { name: '홀리데이 루비 레드', hex: '#B91C1C', family: 'red', image: '/src/assets/images/studio_holiday_bag_1794892173408.jpg' }
    ],
    materials: ['파스텔 스카이 실크 벨벳', '금사·진주 호박마차 손자수', '광택 아치 펄 핸들', '골드 파이핑 트리밍'],
    vibes: ['미드나잇 신데렐라', '동화 속 무도회', '눈꽃 왕국', '클래식 로열'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 201,
    sizes: ['Free (가로 17cm x 높이 13cm x 폭 7cm)'],
    description: '동화 속 12시 자정의 신데렐라 호박마차를 가방 전면에 정교한 금사 자수와 진주로 수놓은 마법 같은 벨벳 미니백입니다. 둥글고 영롱한 진주 구슬 아치 손잡이와 크로스 체인이 함께 구성되어 있습니다.',
    features: [
      '가방 플랩 전체를 수놓은 정밀 금사 & 펄 호박마차 엠브로이더리',
      '여닫기 편리한 진주 마그네틱 버튼 & 탈부착 골드 숄더 체인',
      '모양이 무너지지 않는 탄탄한 골드 파이핑 프레임'
    ],
    fabricCare: '벨벳 전용 부드러운 브러시로 털어내기',
    lining: '스카이 블루 실크 새틴 안감',
    matchingAccessoryIds: ['dress-cinderella-midnight', 'dress-hydrangea-blue-tutu', 'acc-cinderella-glass-heels'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-lavender-macaron-bag',
    name: '라벤더 실크 리본 퀼팅 진주 체인 미니백',
    subtitle: '은은한 연보라 다이아 퀼팅 나파 터치 바디와 빅 실크 리본, 진주 체인의 둥근 마카롱백',
    category: 'accessory',
    subCategory: 'bag',
    price: 29000,
    originalPrice: 41000,
    image: '/src/assets/images/studio_lavender_macaron_bag_1795495379776.jpg',
    color: {
      name: '파스텔 라벤더 라일락',
      hex: '#D8B4FE',
      family: 'purple'
    },
    availableColors: [
      { name: '파스텔 라벤더 라일락', hex: '#D8B4FE', family: 'purple', image: '/src/assets/images/studio_lavender_macaron_bag_1795495379776.jpg' },
      { name: '신데렐라 파스텔 블루', hex: '#93C5FD', family: 'blue', image: '/src/assets/images/studio_cinderella_coach_bag_1795495305406.jpg' },
      { name: '로즈 퀼팅 핑크', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_pearl_bag_1794892158482.jpg' }
    ],
    materials: ['다이아 퀼팅 소프트 에코 레더', '수제 실크 라벤더 리본', '진주 믹스 골드 체인 스트랩'],
    vibes: ['요정 숲', '스프링 블라썸', '러블리 베리', '로맨틱 로즈'],
    sparkleLevel: 4,
    rating: 5.0,
    reviewCount: 164,
    sizes: ['Free (지름 14.5cm x 폭 6cm)'],
    description: '달콤한 파리 마카롱을 닮은 사랑스러운 둥근 실루엣의 라벤더 다이아 퀼팅 미니백입니다. 가방 중앙을 장식한 입체 실크 새틴 리본과 진주가 엮인 골드 크로스 스트랩이 포인트가 되어 데일리 외출과 파티 모두에 완벽합니다.',
    features: [
      '가볍고 긁힘에 강한 소프트 터치 퀼팅 나파 마감',
      '골드 클래스프 버클 & 진주 믹스 크로스 체인 포함',
      '어린이 소지품(손수건, 립밤, 머리핀) 수납이 넉넉한 라운드 내부'
    ],
    fabricCare: '마른 천이나 물티슈로 부드럽게 닦기',
    lining: '라일락 실크 새틴 안감',
    matchingAccessoryIds: ['dress-celeste-lavender-ballgown', 'dress-lilac-buttercup-tutu', 'acc-lavender-butterfly-slippers'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-snow-icicle-tiara',
    name: '아이시클 눈꽃 물방울 플래티넘 다이아 티아라',
    subtitle: '얼음 고드름처럼 날렵하게 솟은 눈꽃 크리스탈과 아쿠아마린 물방울 보석 왕관',
    category: 'accessory',
    subCategory: 'tiara',
    price: 33000,
    originalPrice: 46000,
    image: '/src/assets/images/studio_snow_icicle_tiara_1795495380559.jpg',
    color: {
      name: '아이스 아쿠아마린 실버',
      hex: '#BAE6FD',
      family: 'blue'
    },
    availableColors: [
      { name: '아이스 아쿠아마린 실버', hex: '#BAE6FD', family: 'blue', image: '/src/assets/images/studio_snow_icicle_tiara_1795495380559.jpg' },
      { name: '스파클 실버 크리스탈', hex: '#E2E8F0', family: 'white', image: '/src/assets/images/studio_royal_tiara_1794892160197.jpg' },
      { name: '미드나잇 로열 네이비', hex: '#1E1B4B', family: 'navy', image: '/src/assets/images/studio_sapphire_tiara_1794892174660.jpg' }
    ],
    materials: ['백금 도금 합금 프레임', '투명 컷 아이시클 크리스탈 스파이어', '아쿠아마린 물방울 젬스톤'],
    vibes: ['눈꽃 왕국', '미드나잇 신데렐라', '동화 속 무도회', '클래식 로열'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 218,
    sizes: ['Free (양끝 소프트 실리콘 보호캡 장착)'],
    description: '만년설 빙하 궁전의 여왕을 위해 세공된 듯 투명하게 솟은 크리스탈 고드름 첨탑과 영롱한 아쿠아마린 물방울 보석이 압도적인 존재감을 발하는 최고급 실버 티아라입니다.',
    features: [
      '입체적으로 빛을 반사하는 아이시클 스파이어 커팅 크리스탈',
      '무겁지 않고 두상을 감싸는 인체공학적 백금 도금 밴드',
      '양끝 실리콘 쿠션 캡으로 장시간 착용 시 두통 방지'
    ],
    fabricCare: '극세사 안경천으로 닦은 후 케이스 보관',
    lining: 'KC 무니켈 플래티넘 코팅',
    matchingAccessoryIds: ['dress-moonlight-silver-ballgown', 'dress-ice-starlight', 'acc-starlight-sheer-cape'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-forest-leaf-headpiece',
    name: '포레스트 에메랄드 리프 크리스탈 화관 티아라',
    subtitle: '초록빛 에메랄드 젬스톤과 브러시드 앤틱 골드 올리브 잎, 작은 꽃봉오리가 엮인 요정 여왕 왕관',
    category: 'accessory',
    subCategory: 'tiara',
    price: 31000,
    originalPrice: 44000,
    image: '/src/assets/images/studio_forest_leaf_headpiece_1795495380920.jpg',
    color: {
      name: '에메랄드 & 앤틱 골드',
      hex: '#059669',
      family: 'green'
    },
    availableColors: [
      { name: '에메랄드 & 앤틱 골드', hex: '#059669', family: 'green', image: '/src/assets/images/studio_forest_leaf_headpiece_1795495380920.jpg' },
      { name: '블라썸 로즈 골드', hex: '#FB7185', family: 'pink', image: '/src/assets/images/studio_rosegold_floral_tiara_1795494690091.jpg' },
      { name: '임페리얼 샴페인 골드', hex: '#FDE047', family: 'gold', image: '/src/assets/images/studio_golden_tiara_1794892166014.jpg' }
    ],
    materials: ['브러시드 앤틱 골드 올리브 잎', '페어 컷 에메랄드 지르콘', '세라믹 화이트 미니 플라워'],
    vibes: ['요정 숲', '골든 팰리스', '스프링 블라썸', '크리스마스 에디션'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 171,
    sizes: ['Free (헤어핀 & 리본 고정 가능 투웨이)'],
    description: '신비로운 숲속 요정 여왕의 관을 그대로 빚어낸 듯 섬세한 앤틱 골드 올리브 잎사귀와 깊이 있는 에메랄드 원석, 순백의 작은 꽃잎들이 어우러진 하이엔드 보태니컬 헤어피스입니다.',
    features: [
      '정교한 나뭇잎 잎맥 각인 디테일과 선명한 마키즈 컷 에메랄드',
      '양끝 고리에 새틴 리본 또는 실핀으로 원하는 위치에 자유롭게 고정',
      '무알러지 무독성 앤틱 골드 마감'
    ],
    fabricCare: '전용 파우치 보관 및 마른 천 세척',
    lining: 'KC 어린이 안전 인증 코팅',
    matchingAccessoryIds: ['dress-sage-botanical-tutu', 'dress-emerald-forest-fairy', 'dress-christmas-emerald-velvet'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-buttercup-sun-necklace',
    name: '골든 썬버스트 레몬 시트린 진주 목걸이',
    subtitle: '햇살처럼 빛나는 골드 썬버스트 프레임과 레몬 시트린 크리스탈, 크림 진주 체인 목걸이',
    category: 'accessory',
    subCategory: 'necklace',
    price: 28000,
    originalPrice: 39000,
    image: '/src/assets/images/studio_buttercup_sun_necklace_1795495381001.jpg',
    color: {
      name: '레몬 시트린 골드',
      hex: '#FDE047',
      family: 'gold'
    },
    availableColors: [
      { name: '레몬 시트린 골드', hex: '#FDE047', family: 'gold', image: '/src/assets/images/studio_buttercup_sun_necklace_1795495381001.jpg' },
      { name: '로맨틱 핑크 & 화이트 펄', hex: '#F472B6', family: 'pink', image: '/src/assets/images/studio_heart_necklace_1794892160631.jpg' },
      { name: '미드나잇 사파이어 블루', hex: '#2563EB', family: 'blue', image: '/src/assets/images/studio_sapphire_necklace_1794892168493.jpg' }
    ],
    materials: ['레몬 시트린 파베 크리스탈', '14K 골드 썬버스트 프레임', '광택 아이보리 펄 스트랜드'],
    vibes: ['골든 팰리스', '스프링 블라썸', '요정 숲', '동화 속 무도회'],
    sparkleLevel: 5,
    rating: 4.9,
    reviewCount: 156,
    sizes: ['Free (연장 체인 5cm 포함)'],
    description: '동화 속 태양의 공주처럼 따스하고 찬란한 황금빛 썬버스트 메달리온과 맑은 레몬빛 시트린 보석이 크림 진주 목걸이 중앙에 영롱하게 빛나는 럭셔리 주얼리입니다.',
    features: [
      '은은한 크림빛 진주 알이 촘촘히 연결된 클래식 스트랜드',
      '당김 시 안전하게 열리는 키즈 안심 릴리즈 잠금장치',
      '선물하기 좋은 핑크 벨벳 주얼리 파우치 기본 증정'
    ],
    fabricCare: '마른 안경천으로 닦아 보관',
    lining: 'KC 무니켈 안전 도금',
    matchingAccessoryIds: ['dress-belle-gold', 'dress-daisy-lemon-tutu', 'dress-champagne-swan-tutu'],
    isBest: false,
    isNew: true
  },
  {
    id: 'acc-cherry-enamel-earrings',
    name: '스위트 체리 에나멜 & 진주 리본 무통증 귀찌',
    subtitle: '앵두빛 레드 에나멜 더블 체리와 진주 리본 스터드가 달랑이는 앙증맞은 클립형 귀찌',
    category: 'accessory',
    subCategory: 'earrings',
    price: 23000,
    originalPrice: 32000,
    image: '/src/assets/images/studio_cherry_enamel_earrings_1795495381667.jpg',
    color: {
      name: '스위트 체리 루비',
      hex: '#DC2626',
      family: 'red'
    },
    availableColors: [
      { name: '스위트 체리 루비', hex: '#DC2626', family: 'red', image: '/src/assets/images/studio_cherry_enamel_earrings_1795495381667.jpg' },
      { name: '골든 핑크 지르콘', hex: '#FB7185', family: 'pink', image: '/src/assets/images/studio_crown_earrings_1794892161863.jpg' },
      { name: '문라이트 실버 & 바로크 펄', hex: '#E2E8F0', family: 'white', image: '/src/assets/images/studio_baroque_butterfly_earrings_1795494683853.jpg' }
    ],
    materials: ['광택 루비 에나멜 체리 참', '시드 펄 리본 스터드', '무통증 실리콘 클립'],
    vibes: ['러블리 베리', '스프링 블라썸', '크리스마스 에디션', '로맨틱 로즈'],
    sparkleLevel: 4,
    rating: 4.9,
    reviewCount: 168,
    sizes: ['Free (무통증 스프링 클립)'],
    description: '앙증맞은 작은 진주 리본 아래로 탱글탱글한 붉은 쌍체리가 달랑이는 사랑스러운 아동용 클립 귀찌입니다. 홀리데이 룩과 발랄한 파티 튜튜 드레스 모두에 상큼한 포인트가 됩니다.',
    features: [
      '유리알처럼 투명하고 선명한 에나멜 글로시 코팅',
      '귀를 뚫지 않은 아이도 통증 없이 편안한 실리콘 팁 장착',
      '초경량 설계로 귓볼 처짐 걱정 제로'
    ],
    fabricCare: '착용 후 마른 천으로 닦아 보관',
    lining: '무알러지 실리콘 & 골드 도금',
    matchingAccessoryIds: ['dress-scarlet-camellia-tutu', 'dress-strawberry-chiffon', 'dress-noel-tartan-velvet'],
    isBest: true,
    isNew: true
  },
  {
    id: 'acc-midnight-star-gloves',
    name: '미드나잇 네이비 벨벳 골드 별 자수 롱 장갑',
    subtitle: '짙은 밤하늘 네이비 신축 벨벳 위 금사 별자리 자수와 진주 버튼 커프스의 무도회 장갑',
    category: 'accessory',
    subCategory: 'gloves',
    price: 25000,
    originalPrice: 36000,
    image: '/src/assets/images/studio_midnight_star_gloves_1795495382581.jpg',
    color: {
      name: '미드나잇 로열 네이비',
      hex: '#1E1B4B',
      family: 'navy'
    },
    availableColors: [
      { name: '미드나잇 로열 네이비', hex: '#1E1B4B', family: 'navy', image: '/src/assets/images/studio_midnight_star_gloves_1795495382581.jpg' },
      { name: '신데렐라 파스텔 블루', hex: '#93C5FD', family: 'blue', image: '/src/assets/images/studio_blue_gloves_1794892170626.jpg' },
      { name: '홀리데이 루비 레드', hex: '#B91C1C', family: 'red', image: '/src/assets/images/studio_ruby_gloves_1794892176549.jpg' }
    ],
    materials: ['신축성 미드나잇 실크 벨벳', '금사 미니 스타 자수', '3연 광택 진주 단추'],
    vibes: ['미드나잇 신데렐라', '동화 속 무도회', '클래식 로열', '크리스마스 에디션'],
    sparkleLevel: 4,
    rating: 5.0,
    reviewCount: 143,
    sizes: ['Free (4~10세 신축성 벨벳 핏)'],
    description: '깊고 고급스러운 미드나잇 네이비 실크 벨벳 소재에 손목 트임 부분 3개의 진주 버튼과 별자리 자수를 촘촘히 수놓은 겨울 무도회 전용 공주 롱 장갑입니다.',
    features: [
      '사방 스판이 뛰어나 손가락이 편안한 벨벳 원단',
      '손목을 따라 반짝이는 정교한 금사 별빛 자수와 진주 장식',
      '추운 겨울 야외나 연주회 대기실에서도 따뜻한 보온감'
    ],
    fabricCare: '미온수 울샴푸 단독 조물조물 손세탁',
    lining: '부드러운 기모 터치 내피',
    matchingAccessoryIds: ['dress-stardust-navy-ballgown', 'dress-midnight-galaxy-star', 'acc-midnight-star-shoes'],
    isBest: false,
    isNew: true
  },
  {
    id: 'acc-ruby-scepter-wand',
    name: '크림슨 하트 루비 크라운 매직 셉터 요술봉',
    subtitle: '왕관을 쓴 입체 하트 컷 루비 젬스톤과 앤틱 골드 핸들, 버건디 벨벳 리본 황실 요술봉',
    category: 'accessory',
    subCategory: 'wand',
    price: 28000,
    originalPrice: 39000,
    image: '/src/assets/images/studio_ruby_scepter_wand_1795495382764.jpg',
    color: {
      name: '크림슨 로열 루비 & 골드',
      hex: '#991B1B',
      family: 'red'
    },
    availableColors: [
      { name: '크림슨 로열 루비 & 골드', hex: '#991B1B', family: 'red', image: '/src/assets/images/studio_ruby_scepter_wand_1795495382764.jpg' },
      { name: '오로라 문라이트 골드', hex: '#60A5FA', family: 'blue', image: '/src/assets/images/studio_crescent_moon_wand_1795494684890.jpg' },
      { name: '사쿠라 로즈 골드', hex: '#FB7185', family: 'pink', image: '/src/assets/images/studio_cherry_wand_1794892167188.jpg' }
    ],
    materials: ['다면 하트 컷 루비 젬', '앤틱 골드 필리그리 크라운 로드', '와인 실크 벨벳 스트리머'],
    vibes: ['크리스마스 에디션', '로맨틱 로즈', '골든 팰리스', '클래식 로열'],
    sparkleLevel: 5,
    rating: 5.0,
    reviewCount: 196,
    sizes: ['Free (총 길이 34cm)'],
    description: '하트 여왕의 왕실 보물처럼 앤틱 골드 필리그리 크라운 프레임 안에 깊은 크림슨 루비 하트 보석이 박힌 웅장한 매직 셉터입니다. 흐르는 듯 매듭진 와인 벨벳 리본이 고급스러움을 배가시킵니다.',
    features: [
      '빛을 깊이 머금고 반사하는 대형 다면 루비 하트 보석',
      '장식 조각이 섬세하게 각인된 앤틱 골드 세공 바디',
      '탈부착 가능한 고품격 버건디 벨벳 리본 타이'
    ],
    fabricCare: '마른 안경천으로 닦아 보관',
    lining: 'KC 어린이 안전 인증 마감',
    matchingAccessoryIds: ['dress-camellia-wine-velvet', 'dress-noel-tartan-velvet', 'dress-christmas-velvet'],
    isBest: true,
    isNew: true
  }
];

/**
 * Intelligent Similarity Recommendation Algorithm
 * Analyzes:
 * 1. Color family and hex tone compatibility (40 pts)
 * 2. Fabric / Material shared characteristics (30 pts)
 * 3. Mood / Vibe overlaps (20 pts)
 * 4. Silhouette harmony (10 pts)
 */
export interface RecommendationMatch {
  product: Product;
  score: number; // 0 to 100%
  reasons: string[];
}

export function getSimilarProducts(target: Product, allProducts: Product[] = PRODUCTS, limit: number = 4): RecommendationMatch[] {
  const candidates = allProducts.filter(p => p.id !== target.id && p.category === target.category);

  const scored: RecommendationMatch[] = candidates.map(item => {
    let score = 50; // base score
    const reasons: string[] = [];

    // 1. Color matching
    const targetColors = [target.color.family, ...(target.availableColors?.map(c => c.family) || [])];
    const itemColors = [item.color.family, ...(item.availableColors?.map(c => c.family) || [])];
    const sharesDirectColor = targetColors.some(tc => itemColors.includes(tc));

    if (item.color.family === target.color.family) {
      score += 25;
      reasons.push(`${target.color.name}과 어울리는 톤 계열`);
    } else if (sharesDirectColor) {
      score += 20;
      reasons.push(`${target.color.name}과 함께 연출 가능한 공통 색상 옵션`);
    } else if (
      (target.color.family === 'pink' && item.color.family === 'purple') ||
      (target.color.family === 'purple' && item.color.family === 'pink') ||
      (target.color.family === 'blue' && item.color.family === 'white') ||
      (target.color.family === 'white' && item.color.family === 'pink') ||
      (target.color.family === 'green' && item.color.family === 'blue') ||
      (target.color.family === 'navy' && item.color.family === 'blue') ||
      (target.color.family === 'gold' && item.color.family === 'pink') ||
      (target.color.family === 'red' && item.color.family === 'green')
    ) {
      score += 15;
      reasons.push(`동화적인 ${item.color.name} 로열 하모니`);
    }

    // 2. Material overlaps
    const sharedMaterials = item.materials.filter(m => 
      target.materials.some(tm => tm.includes(m.split(' ')[0]) || m.includes(tm.split(' ')[0]))
    );
    if (sharedMaterials.length > 0) {
      score += Math.min(20, sharedMaterials.length * 10);
      reasons.push(`${sharedMaterials[0]} 소재 공유`);
    }

    // 3. Vibe overlaps
    const sharedVibes = item.vibes.filter(v => target.vibes.includes(v));
    if (sharedVibes.length > 0) {
      score += Math.min(20, sharedVibes.length * 10);
      reasons.push(`'${sharedVibes[0]}' 공주 무드 일치`);
    }

    // 4. Sparkle similarity
    const sparkleDiff = Math.abs(item.sparkleLevel - target.sparkleLevel);
    if (sparkleDiff === 0) {
      score += 10;
      reasons.push(`별 ${item.sparkleLevel}개 극상의 반짝임 지수 일치`);
    } else if (sparkleDiff === 1) {
      score += 5;
    }

    // Cap score at 99%
    const finalScore = Math.min(99, Math.max(65, score));

    return {
      product: item,
      score: finalScore,
      reasons: reasons.slice(0, 3)
    };
  });

  return scored.sort((a, b) => b.score - a.score).slice(0, limit);
}

/**
 * Get matching accessories for a given dress
 */
export function getMatchingAccessories(dress: Product, allProducts: Product[] = PRODUCTS): Product[] {
  if (dress.category !== 'dress') return [];
  
  // Find curated accessories
  const curated = allProducts.filter(p => 
    p.category === 'accessory' && dress.matchingAccessoryIds.includes(p.id)
  );

  // If fewer than 3, backfill with top accessories
  if (curated.length < 3) {
    const others = allProducts.filter(p => 
      p.category === 'accessory' && !curated.some(c => c.id === p.id)
    );
    return [...curated, ...others].slice(0, 4);
  }

  return curated.slice(0, 4);
}
