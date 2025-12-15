'use client'
import {
    changeHandler,
    dblclickHandler,
    dragOverHandler,
    dropHandler
} from '@/lib/eventos'




function Imagen({ src }) {
    return (
        <>
            <img
                id='imgPreview'
                src={src}
                alt="imagen"
                onDrop={dropHandler}
                onDragOver={dragOverHandler}
                onDoubleClick={dblclickHandler}
                className='size-[200px] object-cover object-center'
            />
            <input type='file'
                name='file'
                accept='image/*'
                onChange={changeHandler}
                className='hidden'
            />
        </>
    )
}

export default Imagen