import { Suspense } from 'react'
import { getProveedores } from '@/lib/data'
import { createProveedor } from '@/lib/actions'
import ListaProveedores from '@/components/proveedores/lista'
import Modal from '@/components/modal'
import Form from '@/components/proveedores/form'
import Skeleton from '@/components/proveedores/skeleton'
import BackButton from '@/components/backbutton'



export default function PaginaProveedores() {

    const promesaProveedores = getProveedores()

    return (
        <section>
            <div className='flex gap-4 items-center mb-4'>
                <BackButton />
                <h1 className='grow text-2xl pb-2 border-b-2 border-blue-400'>Proveedores </h1>
                <Modal openElement={
                    <p className='bg-blue-400 text-white px-4 py-1 rounded-md hover:cursor-pointer'>NUEVO</p>
                }>
                    <Form action={createProveedor} title={"Crear proveedor"} proveedor={null} />
                </Modal>
            </div>


            <Suspense fallback={<Skeleton />}  >
                <ListaProveedores promesaProveedores={promesaProveedores} /> {/* Pasamos promesa */}
            </Suspense>
        </section>
    )
}
