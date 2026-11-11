
import { supabase } from './supabase'

function getDeviceInfo() {
  const ua = navigator.userAgent

  let deviceType = 'PC'

  if (/tablet|ipad/i.test(ua)) {
    deviceType = 'Tablet'
  } else if (/mobile|iphone|android/i.test(ua)) {
    deviceType = 'Phone'
  }

  let operatingSystem = 'Unknown'

  if (/windows/i.test(ua)) {
    operatingSystem = 'Windows'
  } else if (/android/i.test(ua)) {
    operatingSystem = 'Android'
  } else if (/iphone|ipad|ipod/i.test(ua)) {
    operatingSystem = 'iOS'
  } else if (/mac os/i.test(ua)) {
    operatingSystem = 'macOS'
  } else if (/linux/i.test(ua)) {
    operatingSystem = 'Linux'
  }

  let browser = 'Unknown'

  if (/edg\//i.test(ua)) {
    browser = 'Edge'
  } else if (/opr\/|opera/i.test(ua)) {
    browser = 'Opera'
  } else if (/firefox/i.test(ua)) {
    browser = 'Firefox'
  } else if (/chrome|crios/i.test(ua)) {
    browser = 'Chrome'
  } else if (/safari/i.test(ua)) {
    browser = 'Safari'
  }

  return {
    device_type: deviceType,
    operating_system: operatingSystem,
    browser,
    screen_resolution:
      `${window.screen.width}x${window.screen.height}`,
    browser_language: navigator.language
  }
}

export async function saveLocationConsent({
  shareDeviceInfo = false
} = {}) {
  const {
    data: { user },
    error: authError
  } = await supabase.auth.getUser()

  if (authError) {
    console.error('Authentication error:', authError)
    throw authError
  }

  if (!user) {
    throw new Error('Please sign in first.')
  }

  const deviceInfo = shareDeviceInfo
    ? getDeviceInfo()
    : {}

  const { data, error } = await supabase
    .from('mapics_demo')
    .insert({
      user_id: user.id,
      consent: true,
      email_confirmed: Boolean(user.email_confirmed_at),
      location_permission: 'granted',
      demo_note: 'Mapics demonstration',
      ...deviceInfo
    })
    .select('id, location_permission')

  if (error) {
    console.error('Supabase insert error:', error)
    throw error
  }

  console.log('Saved successfully:', data)

  return data
}
