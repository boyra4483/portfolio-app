import { createContext, useContext, useRef } from "react";

const ArticlesRefContext = createContext(null);

function ArticlesRefProvider({ children }) {
  const articlesRef = useRef(new Map());

  return (
    <ArticlesRefContext.Provider value={articlesRef}>
      {children}
    </ArticlesRefContext.Provider>
  );
}

function useArticlesRef() {
  return useContext(ArticlesRefContext);
}

export { ArticlesRefProvider, useArticlesRef };
