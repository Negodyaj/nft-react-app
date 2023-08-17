import './HomePage.scss';
import { Categories } from './components/Categories/Categories';
import { HeroSection } from './components/HeroSection/HeroSection';
import { TopCreators } from './components/TopCreators/TopCreators';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TopCreators />
      <Categories />
    </>
  );
};
