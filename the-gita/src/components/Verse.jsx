import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Verse() {

    const [cnt, setCnt] = React.useState(0)
    const [verses, setVerses] = React.useState(null)

    const navigate = useNavigate()

    const { chapter, verse } = useParams()

    const getVerse = async()=>{
        try {
            const res = await import(`../verses/v${chapter}.js`)
            setVerses(res.default[verse-1])
            setCnt(res.default.length)
            console.log(res.default[verse-1])
        } catch (error) {
            
        }
    }

    React.useEffect(()=>{
        getVerse()
        window.scroll(0, 0)
    }, [chapter, verse])

    if(!verses) return <div className=''>Loading</div>

    return (
        <div className='flex justify-center flex-col relative items-center mt-5'>
            {
                !(chapter===1 && verse===1) &&
                <button 
                className='fixed w-10 h-10 rounded-full left-[5%] top-[50%] cursor-pointer'
                onClick={()=>{
                    if(verse!==1){ navigate(`/chapter/${chapter}/verse/${parseInt(verse)-1}`) }
                    else{ navigate(`/chapter/${parseInt(chapter)-1}`) }
                }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6b1b1b" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                    </svg>
                </button>
            }
            {
                !(chapter===18 && verse===78) &&
                <button 
                className='fixed w-10 h-10 rounded-full right-[5%] top-[50%] cursor-pointer flex justify-center items-center'
                onClick={()=>{
                    if(verse!==cnt){ navigate(`/chapter/${chapter}/verse/${parseInt(verse)+1}`) }
                    else{ navigate(`/chapter/${parseInt(chapter)+1}`) }
                }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6b1b1b" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </button>
            }

            <div className="max-w-3xl mx-auto p-6 rounded-2xl space-y-8 text-yellow-950 font-serif mb-5">

                {/* Verse Number Header */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl font-bold">Verse {verses.verse_number}</h2>
                    <p className="text-md md:text-3xl italic text-yellow-950">Chapter {chapter}</p>
                </div>

                {/* Sanskrit Verse */}
                <div className="bg-[#6b1b1b] text-[#D4AF37] rounded-xl p-4 pt-6 shadow-inner">
                    <p className="text-xl md:text-3xl whitespace-pre-wrap text-center verse">{verses.text}</p>
                </div>

                {/* Transliteration */}
                <div className='text-center'>
                    <h3 className="text-lg md:text-3xl font-bold mb-1">Transliteration</h3>
                    <p className="text-md md:text-2xl font-serif whitespace-pre-wrap text-black">{verses.transliteration}</p>
                </div>

                {/* Word Meanings */}
                <div className='text-center'>
                    <h3 className="text-lg md:text-3xl font-semibold mb-1">Word Meanings</h3>
                    <p className="text-md md:text-2xl font-serif whitespace-pre-wrap text-black">{verses.word_meanings}</p>
                </div>

                {/* Translation */}
                <div className="text-center">
                    <h3 className="text-lg md:text-3xl font-semibold mb-1">Translation</h3>
                    <p className="text-md md:text-2xl font-serif text-black">{verses.translations[0]?.description}</p>
                </div>

                {/* Commentary */}
                <div className="text-center">
                    <h3 className="text-lg md:text-3xl font-semibold mb-1">Commentary</h3>
                    <p className="text-md md:text-2xl font-serif text-black">{verses.commentaries[0]?.description}</p>
                </div>

            </div>
        </div>
    )
}
