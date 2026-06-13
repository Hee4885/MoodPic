export const SLIDER_DEFS = [
  { key: 'brightness', label: '밝기', min: -50, max: 50 },
  { key: 'contrast', label: '대비', min: -50, max: 80 },
  { key: 'saturation', label: '채도', min: -50, max: 80 },
  { key: 'warmth', label: '온도', min: -50, max: 80 },
  { key: 'clarity', label: '선명도', min: -20, max: 60 },
];

export const DEFAULT_VALUES = {
  brightness: 0,
  contrast: 0,
  saturation: 0,
  warmth: 0,
  clarity: 0,
};

export const CATEGORIES = {
  food: {
    id: 'food',
    name: '브런치 사진',
    shortName: '브런치',
    accent: '#d99b88',
    image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=1400&q=85',
    tagline: '부드러운 빛과 살짝 따뜻한 색감으로 더 포근하게.',
    summary: '브런치 사진은 따뜻한 온도와 자연스러운 채도가 핵심입니다. 음식이 과하게 붉어지지 않도록 부드럽게 조절해 보세요.',
    keyPoints: [
      { title: '온도는 따뜻하게', desc: '창가 햇살처럼 은은한 노란빛을 더하면 음식이 더 편안하게 보입니다.' },
      { title: '채도는 살짝만', desc: '재료 색이 살아나는 정도까지만 올리면 과한 보정 느낌을 줄일 수 있습니다.' },
      { title: '대비는 낮고 선명도는 조금', desc: '부드러운 톤은 유지하되 접시와 음식의 경계는 자연스럽게 살립니다.' },
    ],
    sliderTips: [
      { key: 'brightness', recommended: 8, tip: '밝기를 조금 올려 창가에서 찍은 듯한 느낌을 만듭니다.' },
      { key: 'contrast', recommended: 8, tip: '대비는 강하지 않게, 질감만 살짝 정리합니다.' },
      { key: 'saturation', recommended: 14, tip: '재료 색이 맑아지는 정도까지만 올려주세요.' },
      { key: 'warmth', recommended: 22, tip: '따뜻한 톤이 브런치 사진의 포근함을 만들어줍니다.' },
      { key: 'clarity', recommended: 7, tip: '선명도는 음식 윤곽이 살아나는 정도가 좋습니다.' },
    ],
    relatedCategories: ['cafe', 'sky'],
  },
  sky: {
    id: 'sky',
    name: '하늘 사진',
    shortName: '하늘',
    accent: '#9dbbd6',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',
    tagline: '맑은 파스텔 블루와 구름의 결을 깨끗하게.',
    summary: '하늘 사진은 밝은 영역을 지키면서 파란 톤을 맑게 만드는 것이 좋습니다. 밝기보다 대비와 온도를 먼저 만져보세요.',
    keyPoints: [
      { title: '밝은 영역 보호', desc: '구름의 디테일이 날아가지 않도록 밝기는 과하게 올리지 않습니다.' },
      { title: '온도는 살짝 차갑게', desc: '맑은 하늘은 온도를 낮추면 더 깨끗하고 투명하게 보입니다.' },
      { title: '대비로 구름 정리', desc: '구름과 하늘의 경계를 살짝 또렷하게 만들어줍니다.' },
    ],
    sliderTips: [
      { key: 'brightness', recommended: -3, tip: '밝기를 조금 낮추면 하늘색이 더 안정적으로 보입니다.' },
      { key: 'contrast', recommended: 14, tip: '구름의 결이 살아나도록 대비를 천천히 올립니다.' },
      { key: 'saturation', recommended: 12, tip: '파란색이 맑아지는 정도까지만 올립니다.' },
      { key: 'warmth', recommended: -12, tip: '온도를 낮추면 청량한 파스텔 하늘 느낌이 납니다.' },
      { key: 'clarity', recommended: 10, tip: '선명도는 구름 경계가 어색하지 않을 정도만 사용합니다.' },
    ],
    relatedCategories: ['cafe', 'night'],
  },
  cafe: {
    id: 'cafe',
    name: '카페 사진',
    shortName: '카페',
    accent: '#cda47e',
    image: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1400&q=85',
    tagline: '크림빛 조명과 잔잔한 그림자로 아늑하게.',
    summary: '카페 사진은 전체 톤을 부드럽게 잡는 것이 중요합니다. 따뜻함은 살리고 그림자는 너무 무겁지 않게 정리하세요.',
    keyPoints: [
      { title: '크림빛 톤 만들기', desc: '온도를 살짝 올려 공간의 따뜻한 조명을 살립니다.' },
      { title: '밝기는 차분하게', desc: '너무 밝은 사진보다 약간 낮은 밝기가 카페 분위기에 잘 어울립니다.' },
      { title: '대비는 부드럽게', desc: '강한 대비보다 잔잔한 대비가 소품과 공간을 예쁘게 보여줍니다.' },
    ],
    sliderTips: [
      { key: 'brightness', recommended: -4, tip: '조금 차분하게 두면 공간의 아늑함이 살아납니다.' },
      { key: 'contrast', recommended: 8, tip: '부드러운 대비로 컵과 소품의 형태만 정리합니다.' },
      { key: 'saturation', recommended: 8, tip: '채도는 소품 색이 자연스럽게 보이는 정도가 좋습니다.' },
      { key: 'warmth', recommended: 24, tip: '따뜻한 온도감은 카페 사진의 핵심입니다.' },
      { key: 'clarity', recommended: 5, tip: '선명도는 과하지 않게 텍스처만 살짝 살립니다.' },
    ],
    relatedCategories: ['food', 'night'],
  },
  night: {
    id: 'night',
    name: '밤 산책 사진',
    shortName: '밤',
    accent: '#a9a5d6',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85',
    tagline: '빛 번짐은 살리고 어두운 톤은 부드럽게.',
    summary: '밤 사진은 어두운 분위기를 유지하면서 조명의 색만 맑게 정리하는 편이 예쁩니다. 밝기를 과하게 올리기보다 대비와 채도를 조절해 보세요.',
    keyPoints: [
      { title: '밤의 깊이는 유지', desc: '밝기를 많이 올리면 밤 특유의 분위기가 사라질 수 있습니다.' },
      { title: '조명 색감 살리기', desc: '채도를 조금 올려 가로등과 간판의 빛을 맑게 보여줍니다.' },
      { title: '선명도는 조심스럽게', desc: '빛 번짐이 거칠어지지 않도록 선명도는 필요한 만큼만 올립니다.' },
    ],
    sliderTips: [
      { key: 'brightness', recommended: 4, tip: '어두운 디테일이 보일 정도로만 살짝 올립니다.' },
      { key: 'contrast', recommended: 18, tip: '빛과 그림자의 층이 정리되도록 대비를 올립니다.' },
      { key: 'saturation', recommended: 18, tip: '도시의 조명 색이 더 맑아집니다.' },
      { key: 'warmth', recommended: 6, tip: '조명을 약간 따뜻하게 두면 부드러운 밤 분위기가 납니다.' },
      { key: 'clarity', recommended: 12, tip: '건물과 길의 윤곽을 살짝 정리합니다.' },
    ],
    relatedCategories: ['sky', 'cafe'],
  },
};

export function getCategoryList() {
  return Object.values(CATEGORIES);
}

export function getCategory(id) {
  return CATEGORIES[id] || null;
}

export function getRelatedCategories(category) {
  return (category?.relatedCategories || []).map((id) => CATEGORIES[id]).filter(Boolean);
}

export function getRecommendedValues(category) {
  return (category?.sliderTips || []).reduce(
    (acc, tip) => ({ ...acc, [tip.key]: tip.recommended }),
    { ...DEFAULT_VALUES },
  );
}

export function buildFilter(vals) {
  const brightness = 1 + vals.brightness / 100;
  const contrast = 1 + vals.contrast / 100;
  const saturate = 1 + vals.saturation / 100;
  const sepia = vals.warmth > 0 ? vals.warmth * 0.32 / 100 : 0;
  const hueShift = vals.warmth < 0 ? vals.warmth * 0.28 : 0;
  const clarityBoost = 1 + vals.clarity / 260;

  return `brightness(${brightness}) contrast(${contrast * clarityBoost}) saturate(${saturate}) sepia(${sepia}) hue-rotate(${hueShift}deg)`;
}
