import React from 'react'

export const AnimationButton = ({ text }) => {
    return (
        <div>
            <button className="block w-full rounded bg-yellow-400 p-2 text-sm font-medium transition hover:scale-105">
                {text}
            </button>
        </div>
    )
}


export const NormalButton = ({ text, onClick }) => {
    return (
        <div>
            <button className="block w-full rounded-lg p-3 text-sm text-gray-600 font-medium transition hover:scale-105 border" onClick={onClick} type="submit">
                {text}
            </button>
        </div>
    )
}