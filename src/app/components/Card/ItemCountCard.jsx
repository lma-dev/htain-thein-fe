import Link from "next/link";


const ItemCountCard = ({ title, count }) => {

    return (
        <div>
            <Link href={title}>
                <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                    <div class="p-6">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <svg class="h-12 w-12 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15v5h14v-5h-3V10a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v5H5zm2-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm12 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <h2 class="text-2xl font-bold text-gray-800">{title}</h2>
                                <p class="text-gray-600">You have <span class="text-indigo-500 font-bold">{count}</span> items in your collection.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Link>
        </div>


    )
}

export default ItemCountCard;