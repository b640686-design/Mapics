
// // // // function Location({ onContinue }) {
// // // //   function requestLocation() {
// // // //     navigator.geolocation.getCurrentPosition(
// // // //       (position) => {
// // // //         const { latitude, longitude } = position.coords

// // // //         onContinue({
// // // //           latitude,
// // // //           longitude
// // // //         })
// // // //       },
// // // //       () => {
// // // //         alert('Location permission is required to continue.')
// // // //       }
// // // //     )
// // // //   }

// // // //   return (
// // // //     <main className="page">
// // // //       <div className="panel">
// // // //         <h1>Mapics</h1>
// // // //         <h2>Location access</h2>

// // // //         <p>
// // // //           Чтобы продолжить, разрешите геолокацию.
// // // //           Ваши координаты будут переданы сервису
// // // //           только после вашего согласия.
// // // //         </p>

// // // //         <button onClick={requestLocation}>
// // // //           Allow location →
// // // //         </button>
// // // //       </div>
// // // //     </main>
// // // //   )
// // // // }

// // // // export default Location






// // // import { useState } from 'react'

// // // function Location({ onContinue }) {
// // //   const [loading, setLoading] = useState(false)
// // //   const [message, setMessage] = useState('')

// // //   function requestLocation() {
// // //     if (!navigator.geolocation) {
// // //       setMessage('Your browser does not support geolocation.')
// // //       return
// // //     }

// // //     setLoading(true)
// // //     setMessage('')

// // //     navigator.geolocation.getCurrentPosition(
// // //       (position) => {
// // //         const { latitude, longitude } = position.coords

// // //         onContinue({
// // //           latitude,
// // //           longitude
// // //         })

// // //         setLoading(false)
// // //       },
// // //       (error) => {
// // //         setLoading(false)

// // //         if (error.code === error.PERMISSION_DENIED) {
// // //           setMessage(
// // //             'Location permission was denied. You are still on this page.'
// // //           )
// // //         } else if (error.code === error.TIMEOUT) {
// // //           setMessage('Location request timed out. Please try again.')
// // //         } else {
// // //           setMessage('Could not get your location. Please try again.')
// // //         }
// // //       },
// // //       {
// // //         enableHighAccuracy: false,
// // //         timeout: 15000,
// // //         maximumAge: 0
// // //       }
// // //     )
// // //   }

// // //   return (
// // //     <main className="page">
// // //       <div className="panel">
// // //         <h1>Mapics</h1>
// // //         <h2>Location access</h2>

// // //         <p>
// // //           Mapics requests access to your current location
// // //           to demonstrate its location feature.
// // //           Your coordinates will be shared only after
// // //           you grant permission.
// // //         </p>

// // //         <button onClick={requestLocation} disabled={loading}>
// // //           {loading ? 'Getting location...' : 'Allow location →'}
// // //         </button>

// // //         {message && <p role="status">{message}</p>}
// // //       </div>
// // //     </main>
// // //   )
// // // }

// // // export default Location



// // import { useState } from 'react'
// // import { saveLocationConsent } from '../lib/demo'

// // function Location({ onContinue }) {
// //   const [loading, setLoading] = useState(false)
// //   const [consent, setConsent] = useState(false)
// //   const [message, setMessage] = useState('')

// //   function requestLocation() {
// //     if (!consent) return

// //     if (!navigator.geolocation) {
// //       setMessage('Geolocation is not supported.')
// //       return
// //     }

// //     setLoading(true)
// //     setMessage('')

// //     navigator.geolocation.getCurrentPosition(
// //       async (position) => {
// //         try {
// //           await saveLocationConsent()

// //           onContinue({
// //             latitude: position.coords.latitude,
// //             longitude: position.coords.longitude
// //           })
// //         } catch (error) {
// //           setMessage(error.message)
// //         } finally {
// //           setLoading(false)
// //         }
// //       },
// //       (error) => {
// //         setLoading(false)

// //         if (error.code === 1) {
// //           setMessage('Location denied. You can try again.')
// //         } else {
// //           setMessage('Unable to get location. Try again.')
// //         }
// //       },
// //       { timeout: 15000 }
// //     )
// //   }

// //   return (
// //     <main className="page">
// //       <div className="panel">
// //         <h1>Mapics</h1>
// //         <h2>Location Access</h2>

// //         <p>
// //           Mapics requests your location for its
// //           location demonstration. Your exact
// //           coordinates are not stored in this database.
// //         </p>

// //         <label className="consent">
// //           <input
// //             type="checkbox"
// //             checked={consent}
// //             onChange={e => setConsent(e.target.checked)}
// //           />
// //           I agree to store my location permission
// //           status in Supabase.
// //         </label>

// //         <button
// //           onClick={requestLocation}
// //           disabled={!consent || loading}
// //         >
// //           {loading ? 'Processing...' : 'Allow Location →'}
// //         </button>

// //         {message && <p role="status">{message}</p>}
// //       </div>
// //     </main>
// //   )
// // }

// // export default Location




// import { useState } from 'react'
// import { saveLocationConsent } from '../lib/demo'

// function Location({ onContinue }) {
//   const [loading, setLoading] = useState(false)
//   const [consent, setConsent] = useState(false)
//   const [shareDeviceInfo, setShareDeviceInfo] = useState(false)
//   const [message, setMessage] = useState('')

//   function requestLocation() {
//     if (!consent || loading) return

//     if (!navigator.geolocation) {
//       setMessage('Geolocation is not supported.')
//       return
//     }

//     setLoading(true)
//     setMessage('')

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         try {
//           await saveLocationConsent({ shareDeviceInfo })

//           onContinue({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude
//           })
//         } catch (error) {
//           setMessage(error.message)
//         } finally {
//           setLoading(false)
//         }
//       },
//       (error) => {
//         setLoading(false)

//         if (error.code === 1) {
//           setMessage('Location permission denied.')
//         } else {
//           setMessage('Unable to get location. Try again.')
//         }
//       },
//       {
//         timeout: 15000,
//         enableHighAccuracy: false
//       }
//     )
//   }

//   return (
//     <main className="page">
//       <div className="panel">
//         <h1>Mapics</h1>
//         <h2>Location Access</h2>

//         <p>
//           Mapics requests location access for its
//           demonstration. Exact coordinates are not
//           stored in Supabase.
//         </p>

//         <label className="consent">
//           <input
//             type="checkbox"
//             checked={consent}
//             onChange={e => setConsent(e.target.checked)}
//           />
//           I agree to store my location permission
//           status in Supabase.
//         </label>

//         <label className="consent">
//           <input
//             type="checkbox"
//             checked={shareDeviceInfo}
//             onChange={e => setShareDeviceInfo(e.target.checked)}
//           />
//           I also agree to share my device type,
//           operating system, browser, screen resolution
//           and browser language with Mapics.
//           This information will be stored in Supabase.
//           (Optional)
//         </label>

//         <button
//           type="button"
//           onClick={requestLocation}
//           disabled={!consent || loading}
//         >
//           {loading ? 'Processing...' : 'Allow Location →'}
//         </button>

//         {message && <p role="status">{message}</p>}
//       </div>
//     </main>
//   )
// }

// export default Location





import { useState } from 'react'
import { saveLocationConsent } from '../lib/demo'

function Location({
  onContinue,
  shareDeviceInfo = false,
  locationConsent = false
}) {
  const [loading, setLoading] = useState(false)
  const [consent, setConsent] = useState(false)
  const [message, setMessage] = useState('')
  const [coordinates, setCoordinates] = useState(null)

  function requestLocation() {
    if (!consent || loading) return

    if (!navigator.geolocation) {
      setMessage('Geolocation is not supported.')
      return
    }

    setLoading(true)
    setMessage('')

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        setCoordinates({
          latitude,
          longitude,
          combined: `${latitude}, ${longitude}`
        })

        setLoading(false)
      },
      (error) => {
        setLoading(false)

        if (error.code === 1) {
          setMessage(
            'Location permission denied. You can try again.'
          )
        } else if (error.code === 3) {
          setMessage(
            'Location request timed out. Please try again.'
          )
        } else {
          setMessage(
            'Unable to get your location. Try again.'
          )
        }
      },
      {
        timeout: 15000,
        enableHighAccuracy: false,
        maximumAge: 0
      }
    )
  }

  async function finishDemo() {
    if (!coordinates || loading) return

    setLoading(true)
    setMessage('')

    try {
      await saveLocationConsent({
        shareDeviceInfo
      })

      onContinue()
    } catch (error) {
      console.error('Mapics error:', error)
      setMessage(
        error.message || 'Failed to save demo status.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="page">
      <div className="panel">
        <h1>Mapics</h1>
        <h2>Location Access</h2>

        <p>
          В следуюшей странице вы увидите карту
        </p>

        <p>
          email:{' '}
          <strong>
            {shareDeviceInfo ? 'Allowed' : 'Not allowed'}
          </strong>
        </p>

        {locationConsent && (
          <p>
            Спасибо за сотрудничество
          </p>
        )}

        {!coordinates ? (
          <>
            <label className="consent">
              <input
                type="checkbox"
                checked={consent}
                onChange={e => setConsent(e.target.checked)}
              />
              Нажмите чтобы продолжить
            </label>

            <button
              type="button"
              onClick={requestLocation}
              disabled={!consent || loading}
            >
              {loading
                ? 'Getting location...'
                : 'Allow Location →'}
            </button>
          </>
        ) : (
          <>

            <p>
              <strong>Ваш User ID:</strong>{' '}
              {coordinates.latitude}
            </p>

            <p>
              <strong>Ваш Profile ID он нужен чтобы вас могли добавлять в друзья: </strong>{' '}
              USER:{coordinates.longitude}
            </p>

            <p>
              <strong>Ваша позиция:</strong>{' '}
              {coordinates.combined}
            </p>

            <button
              type="button"
              onClick={finishDemo}
              disabled={loading}
            >
              {loading
                ? 'Saving...'
                : 'Продолжить'}
            </button>
          </>
        )}

        {message && (
          <p role="status">{message}</p>
        )}
      </div>
    </main>
  )
}

export default Location
