import { CardSubtitle, CardTitle, ColumnTask } from './Card.styles';
interface ICard {
  title: string;
  desc: string;
}

const Card = ({ title, desc }: ICard) => {
  return (
    <ColumnTask>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{desc}</CardSubtitle>
    </ColumnTask>
  );
};

export default Card;
