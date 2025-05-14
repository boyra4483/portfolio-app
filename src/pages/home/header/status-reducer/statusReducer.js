function statusReducer(state, action) {
  switch (action.type) {
    case "opened-menu": {
      document.documentElement.style.overflow = "hidden";
      return "active";
    }
    case "click nav-btn":
    default: {
      document.documentElement.style.overflow = "";
      return "";
    }
  }
}

export { statusReducer as default };
