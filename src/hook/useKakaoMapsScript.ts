import { useEffect, useState } from 'react';

const useKakaoMapsScript = (appKey: string, libraries: string[] = []) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector(`script[src*="//dapi.kakao.com/v2/maps/sdk.js"]`);
    
    if (existingScript) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    const libraryParams = libraries.length > 0 ? `&libraries=${libraries.join(',')}` : '';
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}${libraryParams}`;
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [appKey, libraries]);

  return isLoaded;
};

export default useKakaoMapsScript;