import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Button from '../../components/ui/Button.jsx'
import { useAuthContext } from '../../context/AuthContext.jsx'
import * as authService from '../../services/auth.service'

function LoginPage() {
  const navigate = useNavigate()
  const { login: setUser } = useAuthContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
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

    setLoading(true)
    try {
      const data = await authService.login({ email: trimmedEmail, password })
      if (data.token) {
        localStorage.setItem('token', data.token)
      }
      setUser(data.user ?? { email, name: email.split('@')[0] })
      navigate('/', { replace: true })
    } catch (err) {
      const message =
        err.response?.data?.message ??
        err.response?.data?.error ??
        'No se pudo iniciar sesión. Revisa correo y contraseña.'
      setFormError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-4 py-16">
      <div className="w-full space-y-4 rounded-xl border border-neutral-900 bg-neutral-950/80 p-5 shadow-lg shadow-black/40">
        <header>
          <h1 className="text-xl font-semibold tracking-tight text-neutral-50">
            Entrar a Sesgados
          </h1>
        </header>

        <form className="space-y-2" onSubmit={handleSubmit} noValidate>
          <div className="space-y-0.5 text-sm">
            <label className="block text-neutral-300" htmlFor="email">
              Correo
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (emailError) setEmailError('')
              }}
              aria-invalid={Boolean(emailError)}
              aria-describedby={emailError ? 'email-error' : undefined}
              className={`w-full rounded-md border bg-neutral-950 px-3 py-2 text-sm text-neutral-50 outline-none placeholder:text-neutral-600 focus:border-neutral-500 ${
                emailError ? 'border-red-800/80' : 'border-neutral-800'
              }`}
              placeholder="tucorreo@ejemplo.com"
            />
            <div className="min-h-4 mt-0" aria-live="polite">
              {emailError && (
                <p id="email-error" className="text-xs text-red-400/90" role="alert">
                  {emailError}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-0.5 text-sm">
            <label className="block text-neutral-300" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (passwordError) setPasswordError('')
              }}
              aria-invalid={Boolean(passwordError)}
              aria-describedby={passwordError ? 'password-error' : undefined}
              className={`w-full rounded-md border bg-neutral-950 px-3 py-2 text-sm text-neutral-50 outline-none placeholder:text-neutral-600 focus:border-neutral-500 ${
                passwordError ? 'border-red-800/80' : 'border-neutral-800'
              }`}
              placeholder="••••••••"
            />
            <div className="min-h-4 mt-0" aria-live="polite">
              {passwordError && (
                <p id="password-error" className="text-xs text-red-400/90" role="alert">
                  {passwordError}
                </p>
              )}
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Entrando…' : 'Entrar'}
          </Button>

          <div className="min-h-4 text-center" aria-live="polite">
            {formError && (
              <p className="text-xs text-red-400/90" role="alert">
                {formError}
              </p>
            )}
          </div>

          <p className="pt-0.5 text-center text-sm text-neutral-500">
            ¿No tienes cuenta?{' '}
            <Link to="/register" className="text-neutral-300 underline hover:text-neutral-50">
              Regístrate
            </Link>
          </p>
        </form>
      </div>
    </main>
  )
}

export default LoginPage

