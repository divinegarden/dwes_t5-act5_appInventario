import { getProveedor, getPrueba } from '@/lib/data'
import { Suspense } from 'react'
import { SquareLoader } from 'react-spinners'
import BackButton from '@/components/backbutton'
import Proveedor, { Prueba } from '@/components/proveedores/info'



export default async function PaginaProveedor({ params }) {
    const { id } = await params
    const promesaProveedor = getProveedor(id)
    const promesaPrueba = getPrueba()

    return (
        <section>
            <div className="flex gap-4 items-center mb-4">
                <BackButton />
                <h1 className='grow text-2xl pb-2 border-b-2 border-blue-400'>Proveedor {id}</h1>
            </div>

            <Suspense fallback={
                <SquareLoader
                    color="#cad5e2"
                    cssOverride={{}}
                    size={150}
                />
            }>
                <Proveedor promesaProveedor={promesaProveedor} /> {/*  Pasamos promesa */}
            </Suspense>

            <Suspense fallback={<p className="text-blue-500 italic">Cargando prueba...</p>}>
                <Prueba promesaPrueba={promesaPrueba} />
            </Suspense>
        </section>
    )
}


