function statusReducer(state, action) {
  if (action.type == "opened-menu") {
    document.documentElement.style.overflow = "hidden";
    return "active";
  } else {
    document.documentElement.style.overflow = "";
    return "";
  }
}

export { statusReducer as default };
