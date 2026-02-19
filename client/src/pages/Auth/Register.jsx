import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button.jsx'

function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [formError, setFormError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setEmailError('')
    setPasswordError('')
    setFormError('')

    const trimmedEmail = email.trim()
    let hasError = false
    if (!trimmedEmail) {
      setEmailError('Escribe tu correo.')
      hasError = true
    }
    if (!password) {
      setPasswordError('Escribe tu contraseña.')
      hasError = true
    }
    if (hasError) return

    // TODO: llamar a authService.register cuando esté conectado
    setFormError('Registro en construcción.')
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-4 py-16">
      <div className="w-full space-y-6 rounded-xl border border-neutral-900 bg-neutral-950/80 p-6 shadow-lg shadow-black/40">
        <header className="space-y-2">
          <h1 className="text-xl font-semibold tracking-tight text-neutral-50">
            Crear cuenta
          </h1>
          <p className="text-sm text-neutral-400">
            Súmate a la galería. Crea tu espacio y comparte tu mirada.
          </p>
        </header>

        <form className="space-y-3" onSubmit={handleSubmit} noValidate>
          <div className="space-y-1 text-sm">
            <label className="block text-neutral-300" htmlFor="reg-email">
              Correo
            </label>
            <input
              id="reg-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (emailError) setEmailError('')
              }}
              aria-invalid={Boolean(emailError)}
              aria-describedby={emailError ? 'reg-email-error' : undefined}
              className={`w-full rounded-md border bg-neutral-950 px-3 py-2 text-sm text-neutral-50 outline-none placeholder:text-neutral-600 focus:border-neutral-500 ${
                emailError ? 'border-red-800/80' : 'border-neutral-800'
              }`}
              placeholder="tucorreo@ejemplo.com"
            />
            <div className="min-h-4 mt-0.5" aria-live="polite">
              {emailError && (
                <p id="reg-email-error" className="text-xs text-red-400/90" role="alert">
                  {emailError}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label className="block text-neutral-300" htmlFor="reg-password">
              Contraseña
            </label>
            <input
              id="reg-password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (passwordError) setPasswordError('')
              }}
              aria-invalid={Boolean(passwordError)}
              aria-describedby={passwordError ? 'reg-password-error' : undefined}
              className={`w-full rounded-md border bg-neutral-950 px-3 py-2 text-sm text-neutral-50 outline-none placeholder:text-neutral-600 focus:border-neutral-500 ${
                passwordError ? 'border-red-800/80' : 'border-neutral-800'
              }`}
              placeholder="••••••••"
            />
            <div className="min-h-4 mt-0.5" aria-live="polite">
              {passwordError && (
                <p id="reg-password-error" className="text-xs text-red-400/90" role="alert">
                  {passwordError}
                </p>
              )}
            </div>
          </div>

          <Button type="submit" className="w-full">
            Crear cuenta
          </Button>

          <div className="min-h-4 text-center" aria-live="polite">
            {formError && (
              <p className="text-xs text-red-400/90" role="alert">
                {formError}
              </p>
            )}
          </div>

          <p className="text-center text-sm text-neutral-500">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="text-neutral-300 underline hover:text-neutral-50">
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </main>
  )
}

export default RegisterPage

