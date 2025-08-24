import React from 'react'
import Chapters from '../Chapters'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate()

    return (
        <div className="flex-grow">
            <div className="relative h-[80vh] md:h-[90vh] w-full flex items-center justify-center overflow-hidden rounded mb-10 border-b-4 border-yellow-500">
                {/* Background image */}
                <img
                    src="/images/Hero1.jpeg"
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />

                {/* Overlay Content */}
                <div className="relative z-10 text-center px-4 md:px-10 select-none">
                    <h1 className="text-3xl md:text-6xl font-extrabold text-[#6b1b1b] leading-tight hero">
                    श्रीमद्भगवद्गीता
                    </h1>
                    <p className="text-md md:text-2xl mt-4 font-semibold text-gray-800">
                    The Song of the Divine — Eternal Wisdom of Life
                    </p>

                    <button
                    onClick={() => navigate("/chapter/1", { state: { chapter: 1 } })}
                    className="mt-6 px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg bg-[#6b1b1b] text-white font-bold rounded-full hover:bg-[#6b1b16] transition duration-300 shadow-lg"
                    >
                    Start Reading
                    </button>
                </div>
            </div>

            <div className='text-center text-5xl text-yellow-950 font-semibold'>Chapters</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-6xl mx-auto p-8'>
                {Array.from({ length: 18 }, (_, i) => i + 1).map(num =>
                    <div
                        className='group w-full h-[70vh] bg-blue-700 rounded-lg shadow-md cursor-pointer relative overflow-hidden border-4 border-yellow-600 select-none'
                        key={num}
                        onClick={()=>navigate(`/chapter/${num}`, { state:{chapter: num} })}
                    >
                        <img
                            src={`/images/${num%9 + 1}.png`}
                            alt={`Chapter ${num} background`}
                            className='absolute inset-0 w-full h-full object-cover opacity-70'
                        />

                        <div className='absolute inset-0 flex items-center justify-center z-10 p-3'>
                            <span className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-neutral-300 text-shadow-lg text-center select-none" style={{mixBlendMode: 'overlay'}}>
                                {Chapters[num-1].name_translated}
                            </span>
                        </div>

                        <div
                            className='absolute text-white opacity-50 text-[20rem] font-extrabold select-none pointer-events-none mask'
                            style={{
                                bottom: '0%',
                                right: '0%',
                                transform: 'translate(10%, 10%)',
                                zIndex: 0,
                                lineHeight: '1',
                                userSelect: 'none',
                                mixBlendMode: 'overlay'
                            }}
                        >
                            {num}
                        </div>
                    </div>
                )}
            </div>
            <div className='mt-5 text-lg text-center'>
                created by <a href='https://www.linkedin.com/in/abhi-vardhan09/' className='text-green-950' target='blank'>Abhi Vardhan</a>
            </div>
        </div>
    )
}
