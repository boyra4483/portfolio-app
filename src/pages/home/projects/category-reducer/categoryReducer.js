function categoryReducer(category, action) {
  return action.nextCategory
    .toLowerCase()
    .replaceAll("+", " ")
    .replaceAll("reactjs", "reactJs");
}

export { categoryReducer as default };
