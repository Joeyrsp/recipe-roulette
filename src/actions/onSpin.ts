import exampleFx from "/effects/exampleFx";

const onSpin = (state) => [{ ...state, recipe: state.recipes[Math.floor(Math.random() * state.recipes.length)] }, exampleFx(state)];
export default onSpin;
