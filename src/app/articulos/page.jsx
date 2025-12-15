import { Suspense } from 'react'
import { getArticulos } from '@/lib/data'
import { createArticulo } from '@/lib/actions'
import ListaArticulos from '@/components/articulos/lista'
import Modal from '@/components/modal'
import Form from '@/components/articulos/form'
import Skeleton from '@/components/articulos/skeleton'
import BackButton from '@/components/backbutton'



export default function PaginaArticulos() {

    const promesaArticulos = getArticulos()

    return (
        <section>
            <div className='flex gap-4 items-center mb-4'>
                <BackButton />
                <h1 className='grow text-2xl pb-2 border-b-2 border-blue-400'>Artículos </h1>
                <Modal openElement={
                    <p className='bg-blue-400 text-white px-4 py-1 rounded-md hover:cursor-pointer'>NUEVO</p>
                }>
                    <Form action={createArticulo} title={"Crear artículo"} articulo={null} />
                </Modal>
            </div>


            <Suspense fallback={<Skeleton />}  >
                <ListaArticulos promesaArticulos={promesaArticulos} />
                {/* <ListaArticulos data={getArticulos()} />  Pasamos promesa */}
            </Suspense>
        </section>
    )
}
