import './CategoryCard.scss'

interface CategoryCardProps {
  background: string;
  icon: string;
  name: string;
}

export const CategoryCard = (props: CategoryCardProps) => {
  return (
    <div className="category-card">
      <div className="top-part">
        <img src={props.background} alt="" />
        <div className="background"></div>
        <img className="icon" src={props.icon} alt="" />
      </div>
      <div>{props.name}</div>
    </div>
  );
};
