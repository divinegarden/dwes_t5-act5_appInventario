'use client'
import { useActionState, useEffect, useId } from "react"
import Imagen from "@/components/image"
import { toast } from "sonner"



export default function Form({ action, title, proveedor, disabled = false }) {
    const formId = useId()
    const [state, faction, pending] = useActionState(action, {})


    useEffect(() => {
        if (state?.success) {
            toast.success(state.success)
            document.getElementById(formId).closest('dialog')?.close()
        }
    }, [state, formId])


    return (
        <form id={formId} action={faction} className="flex flex-col">
            <input type='hidden' name='id' value={proveedor?.id} />

            <h1 className="uppercase text-center text-xl">{title}</h1>

            <fieldset disabled={disabled} className="grid place-items-center md:grid-cols-[30%_1fr] gap-4">
                <Imagen src={proveedor?.imagen || disabled ? '/imagen-vacia.png' : '/imagen.png'} />

                <div className="flex flex-col py-4 w-full">
                    <label className="mt-4 grid grid-cols-[100px_1fr] items-center">
                        <p>Nombre</p>
                        <input
                            name='nombre'
                            placeholder='Nombre'
                            defaultValue={proveedor?.nombre}
                            className="outline-blue-400 p-2"
                        />
                    </label>

                    <label className="mt-4 grid grid-cols-[100px_1fr] items-center">
                        <p>Descripción</p>
                        <input
                            name='descripcion'
                            placeholder='Descripción'
                            defaultValue={proveedor?.descripcion}
                            className="outline-blue-400 p-2"
                        />
                    </label>

                </div>
            </fieldset>

            <button
                autoFocus
                type='submit'
                disabled={pending}
                className="self-end rounded-md px-8 py-4 bg-blue-400 text-white hover:cursor-pointer disabled:bg-slate-400 disabled:hover:cursor-default"
            >
                {pending ? 'Realizando operación...' : title}
            </button>
        </form>
    )
}

