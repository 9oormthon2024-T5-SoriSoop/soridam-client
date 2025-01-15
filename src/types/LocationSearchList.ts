export interface Suggestion {
  id: string; // 고유 ID
  place_name: string; // 장소 이름
  road_address_name: string; // 도로명 주소
  address_name: string; // 지번 주소
  x: string; // 경도
  y: string; // 위도
}