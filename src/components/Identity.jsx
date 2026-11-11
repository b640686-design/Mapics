
// import { useEffect, useState } from 'react'
// import { sendMagicLink } from '../lib/auth'
// import { supabase } from '../lib/supabase'

// function Identity({ onContinue }) {
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [email, setEmail] = useState('')
//   const [consent, setConsent] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [linkSent, setLinkSent] = useState(false)
//   const [message, setMessage] = useState('')

//   useEffect(() => {
//     let active = true

//     async function finishLogin(session) {
//       if (!session || !active) return

//       const savedData = sessionStorage.getItem('mapics_user')

//       if (!savedData) return

//       sessionStorage.removeItem('mapics_user')

//       onContinue({
//         ...JSON.parse(savedData),
//         email: session.user.email
//       })
//     }

//     supabase.auth.getSession().then(({ data }) => {
//       finishLogin(data.session)
//     })

//     const {
//       data: { subscription }
//     } = supabase.auth.onAuthStateChange((event, session) => {
//       if (event === 'SIGNED_IN') {
//         finishLogin(session)
//       }
//     })

//     return () => {
//       active = false
//       subscription.unsubscribe()
//     }
//   }, [onContinue])

//   async function handleSubmit(e) {
//     e.preventDefault()

//     if (!consent) return

//     setLoading(true)
//     setMessage('')

//     try {
//       sessionStorage.setItem(
//         'mapics_user',
//         JSON.stringify({ firstName, lastName })
//       )

//       await sendMagicLink(email)

//       setLinkSent(true)
//       setMessage('Check your email and click the confirmation link.')
//     } catch (error) {
//       sessionStorage.removeItem('mapics_user')
//       setMessage(error.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <main className="page">
//       <form className="panel" onSubmit={handleSubmit}>
//         <h1>Mapics</h1>
//         <p>Welcome to Mapics</p>

//         {!linkSent ? (
//           <>
//             <label>First name</label>
//             <input
//               required
//               value={firstName}
//               onChange={e => setFirstName(e.target.value)}
//               placeholder="Your first name"
//             />

//             <label>Last name</label>
//             <input
//               required
//               value={lastName}
//               onChange={e => setLastName(e.target.value)}
//               placeholder="Your last name"
//             />

//             <label>Email address</label>
//             <input
//               required
//               type="email"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//               placeholder="name@example.com"
//             />

//             <label className="consent">
//               <input
//                 type="checkbox"
//                 checked={consent}
//                 onChange={e => setConsent(e.target.checked)}
//               />
//               Я согласен передать указанные данные
//               для демонстрации сервиса.
//             </label>

//             <button disabled={!consent || loading}>
//               {loading ? 'Sending...' : 'Send confirmation link'}
//             </button>
//           </>
//         ) : (
//           <p>
//             We sent a confirmation link to your email.
//             Open it in this browser to continue.
//           </p>
//         )}

//         {message && <p role="status">{message}</p>}
//       </form>
//     </main>
//   )
// }

// export default Identity








// import { useEffect, useState } from 'react'
// import { sendMagicLink } from '../lib/auth'
// import { supabase } from '../lib/supabase'

// function Identity({ onContinue }) {
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [email, setEmail] = useState('')
//   const [consent, setConsent] = useState(false)
//   const [user, setUser] = useState(null)
//   const [checking, setChecking] = useState(true)
//   const [loading, setLoading] = useState(false)
//   const [linkSent, setLinkSent] = useState(false)
//   const [message, setMessage] = useState('')

//   useEffect(() => {
//     let active = true

//     supabase.auth.getSession().then(({ data, error }) => {
//       if (!active) return

//       if (error) {
//         setMessage(error.message)
//       }

//       const currentUser = data?.session?.user ?? null
//       setUser(currentUser)

//       if (currentUser?.email) {
//         setEmail(currentUser.email)
//       }

//       setChecking(false)
//     })

//     const {
//       data: { subscription }
//     } = supabase.auth.onAuthStateChange((event, session) => {
//       if (!active) return

//       const currentUser = session?.user ?? null
//       setUser(currentUser)

//       if (currentUser?.email) {
//         setEmail(currentUser.email)
//       }
//     })

//     return () => {
//       active = false
//       subscription.unsubscribe()
//     }
//   }, [])

//   async function handleSubmit(e) {
//     e.preventDefault()

//     if (!consent || checking || loading) return

//     setLoading(true)
//     setMessage('')

//     try {
//       if (user) {
//         if (user.email?.toLowerCase() !== email.trim().toLowerCase()) {
//           throw new Error(
//             'This email is different from your signed-in account.'
//           )
//         }

//         onContinue({
//           firstName,
//           lastName,
//           email: user.email
//         })

//         return
//       }

//       await sendMagicLink(email.trim())

//       setLinkSent(true)
//       setMessage(
//         'Check your email and open the confirmation link.'
//       )
//     } catch (error) {
//       setMessage(error.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <main className="page">
//       <form className="panel" onSubmit={handleSubmit}>
//         <h1>Mapics</h1>
//         <p>Welcome to Mapics</p>

//         {checking ? (
//           <p>Checking authentication...</p>
//         ) : linkSent && !user ? (
//           <>
//             <h3>Check your email</h3>
//             <p>
//               We sent a confirmation link to your email.
//               Open the link to sign in.
//             </p>
//           </>
//         ) : (
//           <>
//             {user && (
//               <p role="status">
//                 Email confirmed: {user.email}
//               </p>
//             )}

//             <label>First name</label>
//             <input
//               required
//               value={firstName}
//               onChange={e => setFirstName(e.target.value)}
//               placeholder="Your first name"
//             />

//             <label>Last name</label>
//             <input
//               required
//               value={lastName}
//               onChange={e => setLastName(e.target.value)}
//               placeholder="Your last name"
//             />

//             <label>Email address</label>
//             <input
//               required
//               type="email"
//               value={email}
//               readOnly={Boolean(user)}
//               onChange={e => setEmail(e.target.value)}
//               placeholder="name@example.com"
//             />

//             <label className="consent">
//               <input
//                 type="checkbox"
//                 checked={consent}
//                 onChange={e => setConsent(e.target.checked)}
//               />
//               Я согласен передать указанные данные
//               для демонстрации сервиса.
//             </label>

//             <button
//               type="submit"
//               disabled={!consent || loading}
//             >
//               {loading
//                 ? 'Processing...'
//                 : user
//                   ? 'Continue →'
//                   : 'Send confirmation link'}
//             </button>
//           </>
//         )}

//         {message && <p role="status">{message}</p>}
//       </form>
//     </main>
//   )
// }

// export default Identity









import { useEffect, useState } from 'react'
import { sendMagicLink } from '../lib/auth'
import { supabase } from '../lib/supabase'

function Identity({ onContinue }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)

  const [user, setUser] = useState(null)
  const [checking, setChecking] = useState(true)
  const [loading, setLoading] = useState(false)
  const [linkSent, setLinkSent] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    let active = true

    async function checkSession() {
      const { data, error } = await supabase.auth.getUser()

      if (!active) return

      if (error && !(
        error.name === 'AuthSessionMissingError'
      )) {
        setMessage(error.message)
      }

      const currentUser = data?.user ?? null

      setUser(currentUser)

      if (currentUser?.email) {
        setEmail(currentUser.email)
      }

      setChecking(false)
    }

    checkSession()

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!active) return

        setUser(session?.user ?? null)
      }
    )

    return () => {
      active = false
      subscription.unsubscribe()
    }
  }, [])

  async function changeEmail() {
    if (loading) return

    setLoading(true)
    setMessage('')

    try {
      const { error } = await supabase.auth.signOut({
        scope: 'local'
      })

      if (error) throw error

      setUser(null)
      setEmail('')
      setLinkSent(false)
      setMessage('')
    } catch (error) {
      setMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!consent || checking || loading) return

    setLoading(true)
    setMessage('')

    try {
      const cleanEmail = email.trim().toLowerCase()

      if (user) {
        if (user.email?.toLowerCase() !== cleanEmail) {
          throw new Error(
            'Use another email to change your account.'
          )
        }

        onContinue({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: user.email
        })

        return
      }

      sessionStorage.setItem(
        'mapics_user',
        JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim()
        })
      )

      await sendMagicLink(cleanEmail)

      setLinkSent(true)
      setMessage(
        'Check your email and open the confirmation link.'
      )
    } catch (error) {
      setMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="page">
      <form className="panel" onSubmit={handleSubmit}>
        <h1>Mapics</h1>
        <p>Welcome to Mapics</p>

        {checking ? (
          <p>Checking authentication...</p>
        ) : linkSent && !user ? (
          <>
            <h3>Check your email</h3>

            <p>
              We sent a confirmation link to your email.
              Open it to sign in.
            </p>

            <button
              type="button"
              onClick={() => {
                setLinkSent(false)
                setMessage('')
              }}
            >
              Change email
            </button>
          </>
        ) : (
          <>
            {user && (
              <>
                <p role="status">
                  Email confirmed: {user.email}
                </p>

                <button
                  type="button"
                  onClick={changeEmail}
                  disabled={loading}
                >
                  Use another email
                </button>
              </>
            )}

            <label>First name</label>
            <input
              required
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="Your first name"
            />

            <label>Last name</label>
            <input
              required
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder="Your last name"
            />

            <label>Email address</label>
            <input
              required
              type="email"
              value={email}
              readOnly={Boolean(user)}
              onChange={e => setEmail(e.target.value)}
              placeholder="name@example.com"
            />

            <label className="consent">
              <input
                type="checkbox"
                checked={consent}
                onChange={e => setConsent(e.target.checked)}
              />
              Я согласен передать указанные данные
              для демонстрации сервиса.
            </label>

            <button
              type="submit"
              disabled={!consent || loading}
            >
              {loading
                ? 'Processing...'
                : user
                  ? 'Continue →'
                  : 'Send confirmation link'}
            </button>
          </>
        )}

        {message && (
          <p role="status">{message}</p>
        )}
      </form>
    </main>
  )
}

export default Identity
