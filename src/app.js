const Pet = ({ name, animal, favoriteThing }) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h3", {}, animal),
    React.createElement("h3", {}, favoriteThing),
  ]);
};

const App = () =>
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Oliver",
      animal: "Cat",
      favoriteThing: "Biting people.",
    }),
    React.createElement(Pet, {
      name: "Maxwell",
      animal: "Cat",
      favoriteThing: "Back Scratches.",
    }),
    React.createElement(Pet, {
      name: "Oliver",
      animal: "Cat",
      favoriteThing: "Cuddling.",
    }),
  ]);

ReactDOM.render(React.createElement(App), document.getElementById("root"));
