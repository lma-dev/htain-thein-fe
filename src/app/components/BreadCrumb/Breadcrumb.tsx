import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "../../context/LangContext";
import { TitlePropType } from "../../types/Share/titlePropType";


const BreadCrumb = ({ title }: TitlePropType) => {
  const t = useTranslations("Translation");
  const { currentLocale } = useLocale();

  return (
    <div className="py-5">
      <nav aria-label="BreadCrumb">
        <ol className="flex items-center gap-1 text-sm text-gray-600">
          <li>
            <Link
              href={`/${currentLocale}/dashboard`}
              className="block transition hover:text-gray-700"
            >
              <span className="sr-only"> {t("home")} </span>

              <Home size={16} />
            </Link>
          </li>

          <li className="rtl:rotate-180">
            <ChevronRight size={16} />
          </li>

          <li>
            <a
              href="#"
              className="block transition hover:text-gray-700"
              aria-label="title"
            >
              {title}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
