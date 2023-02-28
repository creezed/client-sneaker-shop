import { RefObject, useCallback } from 'react';
import { SwiperRef } from 'swiper/react';

export const useNavigationSwiper = (swiperRef: RefObject<SwiperRef>) => {
  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, [swiperRef]);

  return [handlePrev, handleNext];
};
