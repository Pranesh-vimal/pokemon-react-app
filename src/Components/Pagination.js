import React from "react";

function Pagination({ previous, next, setUrl }) {
    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">
            <div className="flex-1 flex justify-end">
                {previous && (
                    <p
                        onClick={() => setUrl(previous)}
                        className="cursor-pointer relative inline-flex items-center px-4 py-2 border border-2 border-purple-500 text-sm font-bold rounded-md text-purple-700 bg-white hover:text-purple-900"
                    >
                        Previous
                    </p>
                )}
                {next && (
                    <p
                        onClick={() => setUrl(next)}
                        className="cursor-pointer ml-3 relative inline-flex items-center px-4 py-2 border border-2 border-purple-500 text-sm font-bold rounded-md text-purple-700 bg-white hover:text-purple-900"
                    >
                        Next
                    </p>
                )}
            </div>
        </div>
    );
}

export default Pagination;
