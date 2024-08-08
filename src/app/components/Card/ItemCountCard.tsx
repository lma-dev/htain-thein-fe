import {
  FileText,
  ScrollText,
  UsersRound,
  Frown,
  Smile,
  TrendingUp,
  TrendingDown,
} from "lucide-react";


type ItemCountCardProps = {
  title?: string,
  count?: number,
  text?: string,
  rate?: number,
  financialStatus?: boolean,
  t: any
}
const ItemCountCard = ({
  title,
  count,
  text,
  rate,
  financialStatus,
  t,
}: ItemCountCardProps) => {
  const getIcon = () => {
    if (title === "reports") {
      return <ScrollText size={24} />;
    } else if (title === "outcome") {
      return <Frown size={24} />;
    } else if (title === "income") {
      return <Smile size={24} />;
    } else if (title === "users") {
      return <UsersRound size={24} />;
    }
    return <FileText size={24} />;
  };

  return (
    <div>
      <article className="rounded-lg border border-gray-100 bg-white p-6 shadow-lg hover:cursor-pointer hover:shadow-gray-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 uppercase">{title}</p>

            {count ? (
              <p className="text-2xl font-medium">
                {text}
                <span className="text-indigo-500 font-bold">{count}</span>{" "}
              </p>
            ) : (
              <p className="text-2xl font-medium">
                <span className="text-indigo-500 font-bold">{text} </span>{" "}
              </p>
            )}
          </div>

          <span className="rounded-full bg-blue-100 p-3 text-blue-600">
            {getIcon()}
          </span>
        </div>

        <div className="mt-1 flex gap-1">
          {rate === null ? (
            <>
              <span className="text-gray-500 text-xs">{t("notingToShow")}</span>
            </>
          ) : (
            <>
              {financialStatus != null && financialStatus === true ? (
                <TrendingUp size={16} className="text-green-600" />
              ) : (
                <TrendingDown size={16} className="text-red-600" />
              )}

              <p className="flex gap-2 text-xs">
                <span className="font-medium"> {rate} %</span>

                <span className="text-gray-500"> {t("timeLastWeek")} </span>
              </p>
            </>
          )}
        </div>
      </article>
    </div>
  );
};

export default ItemCountCard;
