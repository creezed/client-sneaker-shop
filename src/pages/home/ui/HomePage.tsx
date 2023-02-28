import { HomeMainBanner, HomeSaleBanner } from '@/widgets/home-banners';
import { ProductCardSlider } from '@/widgets/products-slider';

const HomePage = () => {
  return (
    <>
      <HomeMainBanner />
      <ProductCardSlider />
      <ProductCardSlider />
      <HomeSaleBanner />
      <ProductCardSlider />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default HomePage;
