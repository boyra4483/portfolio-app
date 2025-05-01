function statusReducer(status, action) {
  return action.type == "opened-menu" ? "active" : "";
}

export { statusReducer as default };
