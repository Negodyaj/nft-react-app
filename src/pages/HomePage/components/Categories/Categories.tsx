import './Categories.scss';
import { CategoryCard } from './components/CategoryCard';
import basketball from './assets/icons/Basketball.svg';
import camera from './assets/icons/Camera.svg';
import category1 from './assets/categories/category1.png';
import category2 from './assets/categories/category2.png';
import category3 from './assets/categories/category3.png';
import category4 from './assets/categories/category4.png';
import category5 from './assets/categories/category5.png';
import category6 from './assets/categories/category6.png';
import category7 from './assets/categories/category7.png';
import category8 from './assets/categories/category8.png';
import magicWand from './assets/icons/MagicWand.svg';
import musicNotes from './assets/icons/MusicNotes.svg';
import paintBrush from './assets/icons/PaintBrush.svg';
import planet from './assets/icons/Planet.svg';
import swatches from './assets/icons/Swatches.svg';
import videoCamera from './assets/icons/VideoCamera.svg';

const categories: Category[] = [
  {
    id: 1,
    name: 'Art',
    background: category1,
    icon: paintBrush,
  },
  {
    id: 2,
    name: 'Collectibles',
    background: category2,
    icon: swatches,
  },
  {
    id: 3,
    name: 'Music',
    background: category3,
    icon: musicNotes,
  },
  {
    id: 4,
    name: 'Photography',
    background: category4,
    icon: camera,
  },
  {
    id: 5,
    name: 'Video',
    background: category5,
    icon: videoCamera,
  },
  {
    id: 6,
    name: 'Utility',
    background: category6,
    icon: magicWand,
  },
  {
    id: 7,
    name: 'Sport',
    background: category7,
    icon: basketball,
  },
  {
    id: 8,
    name: 'Virtual Worlds',
    background: category8,
    icon: planet,
  },
];

interface Category {
  id: number;
  name: string;
  background: string;
  icon: string;
}

export const Categories = () => {
  return (
    <section className="container">
      <div className="carousel-wrapper">
        <button
          className="carousel-btn left disabled"
          // onclick="doLeftSlide()"
        >
          {'<-'}
        </button>
        <button
          className="carousel-btn right"
          // onclick="doRightSlide()"
        >
          {'->'}
        </button>
        <div className="categories-grid">
          {categories.map((item) => (
            <CategoryCard key={`category-${item.id}`} background={item.background} icon={item.icon} name={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
};
