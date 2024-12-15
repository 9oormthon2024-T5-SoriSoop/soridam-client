import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: "474943ecc6f14c17466a22ee39f0c57f",
    libraries: ["clusterer", "drawing", "services"],
  })
}