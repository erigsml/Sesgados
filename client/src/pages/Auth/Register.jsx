import Button from '../../components/ui/Button.jsx'

function RegisterPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center px-4">
      <div className="w-full space-y-6 rounded-xl border border-neutral-900 bg-neutral-950/80 p-6 shadow-lg shadow-black/40">
        <header className="space-y-2">
          <h1 className="text-xl font-semibold tracking-tight text-neutral-50">
            Crear cuenta
          </h1>
          <p className="text-sm text-neutral-400">
            Súmate a la galería. Crea tu espacio y comparte tu mirada.
          </p>
        </header>

        <form className="space-y-4">
          <div className="space-y-2 text-sm">
            <label className="block text-neutral-300" htmlFor="email">
              Correo
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-50 outline-none ring-0 placeholder:text-neutral-600 focus:border-neutral-500"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>

          <div className="space-y-2 text-sm">
            <label className="block text-neutral-300" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-50 outline-none ring-0 placeholder:text-neutral-600 focus:border-neutral-500"
              placeholder="••••••••"
            />
          </div>

          <Button type="submit" className="w-full">
            Crear cuenta
          </Button>
        </form>
      </div>
    </main>
  )
}

export default RegisterPage

