// Language context — provides { lang, setLang } to all components
import { createContext, useContext, useState } from 'react';

// oxlint-disable-next-line react/only-export-components
export const LangContext = createContext({ lang: 'de', setLang: () => {} });

// oxlint-disable-next-line react/only-export-components
export const useLang = () => useContext(LangContext);

export function LangProvider({ children }) {
  const [lang, setLang] = useState('de');
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
