export const Pet = ({ name, animal, favoriteThing }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{animal}</h3>
      <h3>{favoriteThing}</h3>
    </div>
  );
};
