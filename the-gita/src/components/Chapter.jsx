import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Chapters from '../Chapters'

export default function Chapter() {

    const { chapter } = useParams()

    const navigate = useNavigate()

    const [verses, setVerses] = React.useState([])

    const getVerses = async()=>{
        try {
            const verse = await import(`../verses/v${chapter}.js`)
            setVerses(verse.default)
        } catch (error) {
            console.log(error.message)
        }
    }

    React.useEffect(()=>{
        const chapterNum = parseInt(chapter, 10);
    
    if (isNaN(chapterNum) || chapterNum < 1 || chapterNum > 18) {
        navigate('/');
    } else {
        getVerses();
        window.scrollTo(0, 0);
    }
    }, [chapter])

    if(!verses) return <div className=''>Loading...</div>


    return (
        <div className='flex justify-center flex-col relative items-center mt-5'>
            {
                chapter>1 &&
                <button 
                className='fixed w-10 h-10 rounded-full left-[1%] md:left-[5%] top-[50%] cursor-pointer z-10'
                onClick={()=>navigate(`/chapter/${chapter-1}`, { state:{chapter: chapter-1} })}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6b1b1b" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                    </svg>
                </button>
            }
            {
                chapter<18 &&
                <button 
                className='fixed w-10 h-10 rounded-full right-[1%] md:right-[5%] top-[50%] cursor-pointer flex justify-center items-center z-10'
                onClick={()=>navigate(`/chapter/${parseInt(chapter)+1}`)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6b1b1b" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </button>
            }

            <div className="relative flex lg:hidden flex-col justify-center items-center text-center md:mx-8 w-full md:w-3/4 self-center my-4 overflow-hidden">
                <img
                    src="/images/Wheel.png"
                    alt="Background"
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
                />
                <div className="relative px-4 py-6">
                    <h2 className="text-xl md:text-3xl font-bold text-yellow-950 mb-4">
                    Chapter {chapter} : {Chapters[chapter - 1].name_translated}
                    </h2>
                    <p className="text-sm md:text-xl font-semibold leading-relaxed max-w-[500px] mx-auto">
                    {Chapters[chapter - 1].chapter_summary}
                    </p>
                </div>
            </div>


            <div className="relative hidden lg:flex justify-center items-center w-full md:w-2/3 h-auto overflow-hidden">
                <img
                    src="/images/Script.png" 
                    alt="Scroll Background"
                    className="w-full h-full object-cover transform"
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="text-center p-8">
                    <h2 className="text-xl md:text-4xl font-bold text-yellow-950 mb-4">
                        Chapter {chapter} : {Chapters[chapter-1].name_translated}
                    </h2>
                    <p className="text-sm md:text-xl text-gray-900 font-semibold leading-relaxed max-w-[500px] mx-auto">
                        {Chapters[chapter-1].chapter_summary}
                    </p>
                    </div>
                </div>
            </div>

        

            <div className='w-[95%] md:w-2/3 mt-4 flex flex-col justify-center mx-auto mb-5'>
                <div className='text-center text-2xl md:text-5xl mb-3 font-semibold flex justify-center items-center'>
                    {/* <img src='/images/Flute.png' className='w-40' /> */}
                    <div className='text-yellow-950'>{Chapters[chapter-1].verses_count} verses</div>
                </div>
                {
                    Array.from({ length: Chapters[chapter-1].verses_count }, (_, i) => i + 1).map(num =>
                        <div 
                            className='w-full p-3 my-2 bg-[#6b1b1b] font-semibold rounded text-[#D4AF37] text-2xl flex flex-col md:flex-row md:items-center md:gap-5 overflow-hidden cursor-pointer'
                            key={num}
                            onClick={()=>navigate(`/chapter/${chapter}/verse/${num}`, {state:{ chapter, verse: num }})}
                        >
                            <div className='flex items-center shrink-0 me-3'>
                                <img  
                                src='/images/Logo4.png'
                                className='w-5 md:w-7 me-3 shrink-0'
                                />
                                <div className='whitespace-nowrap text-lg md:text-2xl'>Verse {num}</div>
                            </div>
                            <div className='text-sm md:text-xl font-normal truncate'>{verses[num - 1]?.translations[0]?.description}</div> 
                        </div>
                    )
                }
            </div>
        </div>
    )
}
