// types/FilterBottomSheetStyleValue.ts
export type StyledKey = 'category' | 'noiseLevel' | 'radius';

export type StyleValue = {
  category: string[]; // 중복 선택 가능
  noiseLevel: string[]; // 중복 선택 가능
  radius: string | null; // 단일 선택
};