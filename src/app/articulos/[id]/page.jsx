import { getArticulo, getPrueba } from '@/lib/data'
import { Suspense } from 'react'
import Articulo, { Prueba } from '@/components/articulos/info'
import { SquareLoader } from 'react-spinners'
import BackButton from '@/components/backbutton'




export default async function PaginaArticulo({ params }) {
    const { id } = await params
    const promesaArticulo = getArticulo(id)
    const promesaPrueba = getPrueba()

    return (
        <section>
            <div className="flex gap-4 items-center mb-4">
                <BackButton />
                <h1 className='grow text-2xl pb-2 border-b-2 border-blue-400'>Artículo {id}</h1>
            </div>

            <Suspense fallback={
                <SquareLoader
                    color="#cad5e2"
                    cssOverride={{}}
                    size={150}
                />
            }>
                <Articulo promesaArticulo={promesaArticulo} /> {/*  Pasamos promesa */}
            </Suspense>

            <Suspense fallback={<p className="text-blue-500 italic">Cargando prueba...</p>}>
                <Prueba promesaPrueba={promesaPrueba} />
            </Suspense>
        </section>
    )
}


