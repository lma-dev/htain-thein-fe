import Link from "next/link";
import { FileText, ScrollText, UsersRound, Frown, Smile } from 'lucide-react';

const ItemCountCard = ({ title, count, text = null }) => {
    const getIcon = () => {
        if (title === "reports") {
            return <ScrollText size={24} />
        } else if (title === "outcome") {
            return <Frown size={24} />
        } else if (title === "income") {
            return <Smile size={24} />
        } else if (title === "users") {
            return <UsersRound size={24} />
        }
        return <FileText size={24} />
    }

    return (
        <div>
            <article className="rounded-lg border border-gray-100 bg-white p-6 shadow-lg hover:cursor-pointer hover:shadow-gray-300">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 uppercase">{title}</p>

                        {count ? (
                            <p className="text-2xl font-medium">{text} <span className="text-indigo-500 font-bold">{count}</span> </p>
                        ) : (
                            <p className="text-2xl font-medium"><span className="text-indigo-500 font-bold">{text} </span> </p>
                        )

                        }
                    </div>

                    <span className="rounded-full bg-blue-100 p-3 text-blue-600">

                        {getIcon()}
                    </span>
                </div>

                <div className="mt-1 flex gap-1 text-green-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                    </svg>

                    <p className="flex gap-2 text-xs">
                        <span className="font-medium"> 67.81% </span>

                        <span className="text-gray-500"> Since last week </span>
                    </p>
                </div>
            </article>
        </div>


    )
}

export default ItemCountCard;