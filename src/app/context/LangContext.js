"use client";
import { createContext, useContext, useState } from "react";

const LocaleContext = createContext();

export const LocaleProvider = ({ locale, children }) => {
  const [currentLocale, setCurrentLocale] = useState(locale);

  return (
    <LocaleContext.Provider value={{ currentLocale, setCurrentLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  return useContext(LocaleContext);
};
