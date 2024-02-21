import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';


const BreadCrumb = ({ title }) => {
    return (
        <div className="py-5">
            <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-1 text-sm text-gray-600">
                    <li>
                        <Link href="/dashboard" className="block transition hover:text-gray-700">
                            <span className="sr-only"> Home </span>

                            <Home size={16} />
                        </Link>
                    </li>

                    <li className="rtl:rotate-180">
                        <ChevronRight size={16} />
                    </li>

                    <li>
                        <a href="#" className="block transition hover:text-gray-700"> {title} </a>
                    </li>


                </ol>
            </nav>
        </div>
    )
}

export default BreadCrumb;