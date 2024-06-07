const Pagination = ({ meta, handlePageChange }) => {

    return (
        <div className="flex justify-center mt-4">
            <nav className="relative z-0 inline-flex shadow-sm rounded-md">
                {meta?.currentPage > 1 && (
                    <div
                        onClick={() => handlePageChange(meta?.currentPage - 1)}
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
                    >
                        Previous
                    </div>
                )}
                {meta?.totalPages > 5 ? (
                    <>
                        {meta?.currentPage > 3 && (
                            <div
                                onClick={() => handlePageChange(1)}
                                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                            >
                                1
                            </div>
                        )}
                        {meta?.currentPage > 4 && (
                            <div
                                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500"
                            >
                                ...
                            </div>
                        )}
                        {Array.from(
                            { length: 5 },
                            (_, index) => index + meta?.currentPage - 2
                        ).map((page) => (
                            <div
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${page === meta?.currentPage ? 'text-indigo-500 bg-indigo-100' : 'text-gray-700 hover:bg-gray-50'
                                    } cursor-pointer`}
                            >
                                {page}
                            </div>
                        ))}
                        {meta?.currentPage + 2 < meta?.totalPages && (
                            <div
                                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500"
                            >
                                ...
                            </div>
                        )}
                        {meta?.currentPage + 1 < meta?.totalPages && (
                            <div
                                onClick={() => handlePageChange(meta?.totalPages)}
                                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                            >
                                {meta?.totalPages}
                            </div>
                        )}
                    </>
                ) : (
                    Array.from({ length: meta?.totalPages }, (_, index) => index + 1).map((page) => (
                        <div
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${page === meta?.currentPage ? 'text-indigo-500 bg-indigo-100' : 'text-gray-700 hover:bg-gray-50'
                                } cursor-pointer`}
                        >
                            {page}
                        </div>
                    ))
                )}
                {meta?.currentPage < meta?.totalPages && (
                    <div
                        onClick={() => handlePageChange(meta?.currentPage + 1)}
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
                    >
                        Next
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Pagination;
