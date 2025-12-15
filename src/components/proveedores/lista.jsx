'use client'
import { use } from "react"

import Modal from "@/components/modal"
import Form from "@/components/proveedores/form"

import { updateProveedor, deleteProveedor } from "@/lib/actions"
import Link from "next/link"


export default function ListaProveedores({ promesaProveedores }) {
    const proveedores = use(promesaProveedores)   // Resolvemos promesa

    return (
        <div className="flex flex-wrap gap-4">
            {proveedores.map(proveedor => <Item key={proveedor.id} proveedor={proveedor} />)}
        </div>
    )
}


function Item({ proveedor }) {
    return (
        <div className="grid sm:grid-cols-[112px_1fr] gap-2 border border-slate-200 bg-slate-100 w-96 p-8 rounded">
            {/* Imagen */}
            <Link prefetch href={`/proveedores/${proveedor.id}`} className="font-bold text-xl">
                <img src={proveedor.imagen || '/imagen-vacia.png'} />
            </Link>

            <div>
                {/* Título */}
                <p className="font-bold text-xl">
                    {proveedor.nombre}
                </p>

                {/* Descripción */}
                <p>{proveedor.descripcion}</p>

                {/* Botones */}
                <div className="mt-4 flex gap-4 justify-end">
                    <Modal openElement={
                        <p className='bg-blue-400 text-white px-4 py-1 rounded-md hover:cursor-pointer'>EDITAR</p>
                    }>
                        <Form action={updateProveedor} title={"Actualizar proveedor"} proveedor={proveedor} />
                    </Modal>
                    <Modal openElement={
                        <p className='bg-blue-400 text-white px-4 py-1 rounded-md hover:cursor-pointer'>ELIMINAR</p>
                    }>
                        <Form action={deleteProveedor} title={"Eliminar proveedor"} proveedor={proveedor} disabled />
                    </Modal>
                </div>
            </div>
        </div>
    )
}