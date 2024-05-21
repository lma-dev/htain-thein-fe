import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Change import statement
import { usePathname } from "next/navigation";

const LangSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [selectedLanguage, setSelectedLanguage] = useState(pathname.slice(1));
  const languageCode = selectedLanguage.split("/")[0];

  const handleChange = (event) => {
    const newLanguage = event.target.value;
    const currentRoute = pathname.slice(4);
    console.log("Language : " + newLanguage);
    setSelectedLanguage(newLanguage);
    router.push(`/${newLanguage}/${currentRoute}`, undefined, {
      locale: newLanguage,
    });
  };

  const getLanguageName = () => {
    const selectedOption = options.find(
      (option) => option.code === languageCode
    );
    return selectedOption ? selectedOption.language : "";
  };

  return (
    <div className="flex">
      <select
        onChange={handleChange}
        className="focus:shadow-outline-blue p-1 block w-auto appearance-none rounded-lg text-center border mr-2 border-gray-300 bg-gray-800 text-white leading-tight shadow hover:border-blue-500 focus:border-blue-300 focus:outline-none"
      >
        <option value="" readOnly>
          {getLanguageName()}
        </option>
        {options
          .filter((option) => option.code !== languageCode)
          .map((option) => (
            <option key={option.code} value={option.code}>
              {option.language}
            </option>
          ))}
      </select>
    </div>
  );
};

export default LangSwitcher;

const options = [
  { language: "English", code: "en" },
  { language: "Japanese", code: "jp" },
  { language: "Myanmar", code: "mm" },
];
