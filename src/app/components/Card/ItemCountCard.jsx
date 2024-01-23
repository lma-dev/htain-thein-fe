import Link from "next/link";


const ItemCountCard = ({ title, count, text = null }) => {

    return (
        <div>
            <Link href={title}>
                <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                    <div className="p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg className="h-12 w-12 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15v5h14v-5h-3V10a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v5H5zm2-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm12 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                                {count ? (
                                    <p className="text-gray-600">{text} <span className="text-indigo-500 font-bold">{count}</span> items in your collection.</p>
                                ) : (
                                    <p className="text-gray-600">{text}</p>
                                )

                                }
                            </div>
                        </div>
                    </div>
                </div>

            </Link>
        </div>


    )
}

export default ItemCountCard;