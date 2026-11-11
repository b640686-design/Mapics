
// import { useState } from 'react'

// import PrivacyPolicy from './components/PrivacyPolicy'
// import Identity from './components/Identity'
// import Location from './components/Location'
// import ThankYou from './components/ThankYou'
// import AuthDebug from './components/AuthDebug'

// function App() {
//   const [step, setStep] = useState(() => {
//     const resume = localStorage.getItem('mapics_resume_identity')
//     return resume === 'true' ? 2 : 1
//   })

//   function handlePrivacy() {
//     localStorage.setItem('mapics_resume_identity', 'true')
//     setStep(2)
//   }

//   function handleIdentity() {
//     localStorage.removeItem('mapics_resume_identity')
//     setStep(3)
//   }

//   function handleLocation() {
//     setStep(4)
//   }

//   return (
//     <>
//       <AuthDebug />

//       {step === 1 && (
//         <PrivacyPolicy onContinue={handlePrivacy} />
//       )}

//       {step === 2 && (
//         <Identity onContinue={handleIdentity} />
//       )}

//       {step === 3 && (
//         <Location onContinue={handleLocation} />
//       )}

//       {step === 4 && <ThankYou />}
//     </>
//   )
// }

// export default App



import { useState } from 'react'

import PrivacyPolicy from './components/PrivacyPolicy'
import Identity from './components/Identity'
import Location from './components/Location'
import ThankYou from './components/ThankYou'

const STORAGE_KEY = 'mapics_privacy_choices'
const RESUME_KEY = 'mapics_resume_identity'

const defaultChoices = {
  personalConsent: false,
  locationConsent: false
}

function getSavedChoices() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || 'null'
    )

    if (!saved) return defaultChoices

    return {
      personalConsent: saved.personalConsent === true,
      locationConsent: saved.locationConsent === true
    }
  } catch {
    return defaultChoices
  }
}

function App() {
  const [step, setStep] = useState(() => {
    const resume = localStorage.getItem(RESUME_KEY)

    return resume === 'true' &&
      localStorage.getItem(STORAGE_KEY)
      ? 2
      : 1
  })

  const [privacyChoices, setPrivacyChoices] =
    useState(getSavedChoices)

  function handlePrivacy(choices) {
    const selectedChoices = {
      personalConsent: choices.personalConsent === true,
      locationConsent: choices.locationConsent === true
    }

    setPrivacyChoices(selectedChoices)

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(selectedChoices)
    )

    localStorage.setItem(RESUME_KEY, 'true')

    setStep(2)
  }

  function handleIdentity() {
    localStorage.removeItem(RESUME_KEY)
    setStep(3)
  }

  function handleLocation() {
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(RESUME_KEY)

    setStep(4)
  }

  return (
    <>
      {step === 1 && (
        <PrivacyPolicy
          onContinue={handlePrivacy}
        />
      )}

      {step === 2 && (
        <Identity
          onContinue={handleIdentity}
        />
      )}

      {step === 3 && (
        <Location
          onContinue={handleLocation}
          shareDeviceInfo={
            privacyChoices.personalConsent
          }
          locationConsent={
            privacyChoices.locationConsent
          }
        />
      )}

      {step === 4 && (
        <ThankYou />
      )}
    </>
  )
}

export default App
