
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

function AuthDebug() {
  const [status, setStatus] = useState('Checking...')

  useEffect(() => {
    supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        setStatus(error.message)
      } else if (data.session) {
        setStatus('Authenticated ✅')
      } else {
        setStatus('Not authenticated ❌')
      }
    })
  }, [])

  return <p>Auth status: {status}</p>
}

export default AuthDebug
