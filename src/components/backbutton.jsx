'use client'
import { useRouter } from 'next/navigation'

function BackButton() {
    const { back } = useRouter()

    return (
        <span onClick={back}
            className='cursor-pointer text-blue-500 text-2xl'>
            🡄
        </span>
    )
}

export default BackButton