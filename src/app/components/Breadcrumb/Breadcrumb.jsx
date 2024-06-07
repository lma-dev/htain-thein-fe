import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const BreadCrumb = ({ title, lang }) => {
  const t = useTranslations("Translation");

  return (
    <div className="py-5">
      <nav aria-label="BreadCrumb">
        <ol className="flex items-center gap-1 text-sm text-gray-600">
          <li>
            <Link
              href={`/${lang}/dashboard`}
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
            <a href="#" className="block transition hover:text-gray-700">
              {title}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
