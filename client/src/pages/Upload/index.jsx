import Button from '../../components/ui/Button.jsx'

function UploadPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <header className="mb-8 space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-50">
          Subir foto
        </h1>
        <p className="text-sm text-neutral-400">
          Arrastra tu imagen, escribe una descripción corta y publícala en tu galería.
        </p>
      </header>

      <section className="space-y-6 rounded-xl border border-neutral-900 bg-neutral-950/80 p-6">
        <div className="flex h-56 flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-neutral-800 bg-neutral-950 text-center text-sm text-neutral-400">
          <p className="text-neutral-300">Arrastra una imagen aquí</p>
          <p className="text-xs text-neutral-500">o haz clic para seleccionar un archivo</p>
        </div>

        <div className="space-y-2 text-sm">
          <label className="block text-neutral-300" htmlFor="description">
            Descripción
          </label>
          <textarea
            id="description"
            className="min-h-[96px] w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-50 outline-none ring-0 placeholder:text-neutral-600 focus:border-neutral-500"
            placeholder="Cuenta qué hay detrás de esta foto..."
          />
        </div>

        <div className="space-y-2 text-sm">
          <label className="block text-neutral-300" htmlFor="filter">
            Filtro
          </label>
          <select
            id="filter"
            className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-50 outline-none ring-0 focus:border-neutral-500"
          >
            <option>Sin filtro</option>
            <option>Grano suave</option>
            <option>Contraste alto</option>
            <option>Monocromo</option>
          </select>
        </div>

        <div className="flex justify-end">
          <Button type="button">Publicar</Button>
        </div>
      </section>
    </main>
  )
}

export default UploadPage

