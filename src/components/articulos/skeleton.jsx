
export default function SkeletonList() {
    return (
        <div className="flex flex-wrap gap-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>

    )
}



function SkeletonCard() {
    return (
        <div className="grid sm:grid-cols-[112px_1fr] gap-2 border border-slate-200 bg-slate-100 w-96 p-8 rounded animate-pulse">
            {/* Imagen */}
            <div className='w-full aspect-square bg-slate-300'>
            </div>
            <div>
                {/* Título */}
                <div className="h-6 w-2/3 bg-slate-300 rounded mb-2" />

                {/* Descripción */}
                <div className="h-4 w-full bg-slate-300 rounded mb-2" />

                {/* Precio */}
                <div className="h-4 w-1/3 bg-slate-300 rounded" />

                {/* Botones */}
                <div className="mt-4 flex gap-4 justify-end">
                    <div className="h-8 w-24 bg-slate-300 rounded" />
                    <div className="h-8 w-24 bg-slate-300 rounded" />
                </div>
            </div>
        </div>
    )
}

