
// // import { useState } from 'react'

// // function PrivacyPolicy({ onContinue }) {
// //   const [accepted, setAccepted] = useState(false)

// //   return (
// //     <main className="page">
// //       <div className="panel privacy-panel">
// //         <h1>Mapics</h1>
// //         <h2>Privacy Policy</h2>

// //         <p>Last updated: November 10, 2026</p>

// //         <p>
// //           Please read this document before continuing.
// //           It explains how the Mapics demonstration handles
// //           information and what choices are available to you.
// //         </p>

// //         <section>
// //           <h3>1. Introduction</h3>
// //           <p>
// //             Mapics is a demonstration project designed to
// //             explore web technologies, browser capabilities
// //             and database functionality. This document
// //             describes the information that may be processed
// //             when using the demonstration.
// //           </p>
// //         </section>

// //         <section>
// //           <h3>2. Purpose of the Service</h3>
// //           <p>
// //             The purpose of Mapics is to demonstrate how a
// //             modern web application can communicate with
// //             authentication services, request browser
// //             permissions and interact with a database.
// //             The project is not intended to provide
// //             emergency, navigation or security services.
// //           </p>
// //         </section>

// //         <section>
// //           <h3>3. Information We Collect</h3>
// //           <p>
// //             Before any information is submitted, users
// //             should be clearly informed about the fields
// //             involved and must provide their consent.
// //           </p>
// //           <ul>
// //             <li>First name and last name</li>
// //             <li>Email address and confirmation status</li>
// //             <li>Latitude and longitude, if location is allowed</li>
// //             <li>Combined geographic coordinates</li>
// //             <li>Device type</li>
// //             <li>Operating system</li>
// //             <li>Browser name</li>
// //             <li>Screen resolution</li>
// //             <li>Browser language</li>
// //           </ul>
// //           <p>
// //             Not every field is necessarily collected.
// //             The application should only process information
// //             that the user has been clearly told about and
// //             agreed to provide.
// //           </p>
// //         </section>

// //         <section>
// //           <h3>4. Location Data</h3>
// //           <p>
// //             Mapics may request access to the device's
// //             geographic location through the browser's
// //             built-in geolocation feature.
// //           </p>
// //           <p>
// //             The browser displays its own permission request.
// //             If permission is granted, the application can
// //             receive geographic coordinates. If permission
// //             is denied, the application does not receive
// //             those coordinates through that request.
// //           </p>
// //           <p>
// //             Location permission is separate from consent
// //             to provide names, email addresses or technical
// //             device information. Users should be told
// //             separately if those other fields will be stored.
// //           </p>
// //         </section>

// //         <section>
// //           <h3>5. Device and Browser Information</h3>
// //           <p>
// //             A browser can expose certain technical
// //             characteristics, such as its language,
// //             screen dimensions and user-agent information.
// //             These characteristics may help developers
// //             understand compatibility and test application
// //             layouts.
// //           </p>
// //           <p>
// //             Technical information should only be processed
// //             for the purposes explained to the user.
// //           </p>
// //         </section>

// //         <section>
// //           <h3>6. Database Storage</h3>
// //           <p>
// //             Mapics uses Supabase as its backend platform.
// //             Information submitted to the project may be
// //             stored in a database hosted through Supabase.
// //           </p>
// //           <p>
// //             Database access should be protected with
// //             appropriate authentication and Row Level
// //             Security policies. Public visitors should
// //             not be able to read other users' records.
// //           </p>
// //         </section>

// //         <section>
// //           <h3>7. Data Security</h3>
// //           <p>
// //             Reasonable technical measures should be used
// //             to protect stored information. Database
// //             permissions, authentication settings and
// //             access policies should be reviewed before
// //             the application is made available to others.
// //           </p>
// //           <p>
// //             No internet service can guarantee absolute
// //             security, so sensitive information should
// //             not be collected unnecessarily.
// //           </p>
// //         </section>

// //         <section>
// //           <h3>8. Data Retention</h3>
// //           <p>
// //             Information should only be retained for as
// //             long as it is necessary for the stated purpose.
// //             The project administrator should define a
// //             retention period and delete records when
// //             they are no longer needed.
// //           </p>
// //         </section>

// //         <section>
// //           <h3>9. Sharing of Information</h3>
// //           <p>
// //             Information should not be sold or disclosed
// //             to unrelated parties. Users should be informed
// //             about the service providers involved in
// //             processing their information, including
// //             Supabase where applicable.
// //           </p>
// //         </section>

// //         <section>
// //           <h3>10. Your Choices and Rights</h3>
// //           <p>
// //             Users should be able to make an informed
// //             choice about providing information. They
// //             should also have a way to ask the project
// //             administrator about access, correction
// //             or deletion of their stored information.
// //           </p>
// //           <p>
// //             Browser permissions can be changed through
// //             the browser's own settings.
// //           </p>
// //         </section>

// //         <section>
// //           <h3>11. Changes to This Policy</h3>
// //           <p>
// //             This document may be updated as the Mapics
// //             demonstration changes. Important changes
// //             to the types of information collected or
// //             the purposes of processing should be
// //             communicated before further collection.
// //           </p>
// //         </section>

// //         <section>
// //           <h3>12. Contact Information</h3>
// //           <p>
// //             For questions about this demonstration or
// //             its handling of information, contact the
// //             project administrator using the contact
// //             details provided by the project.
// //           </p>
// //         </section>

// //         <hr />

// //         <label className="consent">
// //           <input
// //             type="checkbox"
// //             checked={accepted}
// //             onChange={e => setAccepted(e.target.checked)}
// //           />
// //           I have read and understood the Privacy Policy.
// //         </label>

// //         <button
// //           disabled={!accepted}
// //           onClick={onContinue}
// //         >
// //           I Agree & Continue →
// //         </button>
// //       </div>
// //     </main>
// //   )
// // }

// // export default PrivacyPolicy






// import { useState } from 'react'

// function PrivacyPolicy({ onContinue }) {
//   const [accepted, setAccepted] = useState(false)

//   return (
//     <main className="page">
//       <div className="panel privacy-panel">
//         <h1>MAPICS</h1>
//         <h2>PRIVACY POLICY</h2>

//         <p>Last Updated: November 10, 2026</p>

//         <p>
//           Welcome to Mapics. Please read this Privacy Policy
//           carefully before using the demonstration platform.
//           This document explains what information may be
//           processed, how it is used, and how it is protected.
//         </p>

//         <section>
//           <h3>1. INTRODUCTION</h3>
//           <p>
//             Mapics is a web demonstration project designed
//             to explore modern web development technologies,
//             authentication, browser permissions and database
//             integration. We value transparency and believe
//             that every visitor should understand how the
//             platform operates.
//           </p>
//           <p>
//             This document describes the information that
//             may be processed when interacting with the
//             demonstration and explains the choices available
//             to users.
//           </p>
//         </section>

//         <section>
//           <h3>2. PURPOSE OF THE PLATFORM</h3>
//           <p>
//             Mapics is intended to demonstrate how websites
//             communicate with browsers, authentication
//             services and backend databases. The platform
//             may include experimental features that help
//             developers understand how modern applications
//             work.
//           </p>
//           <p>
//             Mapics is not an emergency service, a navigation
//             replacement or a security monitoring platform.
//           </p>
//         </section>

//         <section>
//           <h3>3. INFORMATION THAT MAY BE PROCESSED</h3>
//           <p>
//             Depending on the features used and the choices
//             made by the visitor, the demonstration may
//             process several categories of information.
//           </p>
//           <ul>
//             <li>First name and last name</li>
//             <li>Email address</li>
//             <li>Email confirmation status</li>
//             <li>Geographic coordinates, if location access is granted</li>
//             <li>Device category</li>
//             <li>Operating system</li>
//             <li>Browser information</li>
//             <li>Screen resolution</li>
//             <li>Browser language</li>
//           </ul>
//           <p>
//             These categories are not automatically authorized
//             by a single browser permission. Users should be
//             informed about each category before it is submitted.
//           </p>
//         </section>

//         <section>
//           <h3>4. LOCATION PERMISSION</h3>
//           <p>
//             Mapics may request access to geographic location
//             through the browser's built-in geolocation feature.
//             When a request is made, the browser displays its
//             own permission dialog.
//           </p>
//           <p>
//             If the visitor selects Allow, the browser may
//             provide geographic coordinates to the website.
//             If access is denied, the website will not receive
//             coordinates through that request.
//           </p>
//           <p>
//             Location permission applies specifically to
//             geographic location. It does not automatically
//             authorize the collection or storage of names,
//             email addresses or technical device information.
//           </p>
//         </section>

//         <section>
//           <h3>5. DEVICE AND TECHNICAL INFORMATION</h3>
//           <p>
//             Modern browsers expose certain technical
//             characteristics that help websites operate
//             correctly. Examples include browser language,
//             screen dimensions and information about the
//             browser environment.
//           </p>
//           <p>
//             This information may help developers understand
//             compatibility and improve the demonstration.
//             Technical information should only be processed
//             for purposes explained to the visitor.
//           </p>
//         </section>

//         <section>
//           <h3>6. EMAIL AUTHENTICATION</h3>
//           <p>
//             Mapics uses Supabase Authentication for email
//             verification. When a visitor requests a
//             confirmation link, Supabase may send an email
//             containing a link to verify the email address.
//           </p>
//           <p>
//             Email verification confirms control of an email
//             account. It does not automatically constitute
//             consent to collect unrelated personal or
//             technical information.
//           </p>
//         </section>

//         <section>
//           <h3>7. DATABASE STORAGE</h3>
//           <p>
//             Mapics uses Supabase as its backend infrastructure.
//             Information submitted to the project may be stored
//             in a database.
//           </p>
//           <p>
//             Database access should be restricted through
//             appropriate authentication and security policies.
//             Information should only be accessible to
//             authorized project administrators and other
//             parties explicitly permitted to process it.
//           </p>
//         </section>

//         <section>
//           <h3>8. DATA SECURITY</h3>
//           <p>
//             Reasonable technical measures should be used
//             to prevent unauthorized access, alteration
//             or disclosure of information.
//           </p>
//           <p>
//             These measures may include authentication,
//             access restrictions, database security policies
//             and secure connections. However, no online
//             system can guarantee absolute security.
//           </p>
//         </section>

//         <section>
//           <h3>9. DATA RETENTION</h3>
//           <p>
//             Information should not be stored indefinitely
//             without a legitimate purpose. The project
//             administrator should establish an appropriate
//             retention period and remove information when
//             it is no longer necessary.
//           </p>
//           <p>
//             Users should have a way to contact the
//             administrator regarding deletion requests.
//           </p>
//         </section>

//         <section>
//           <h3>10. INFORMATION SHARING</h3>
//           <p>
//             Personal information should not be sold or
//             shared with unrelated third parties.
//             Infrastructure providers involved in operating
//             the service, such as Supabase, may process
//             information as necessary to provide their services.
//           </p>
//           <p>
//             Any additional sharing should be explained
//             to users before it takes place.
//           </p>
//         </section>

//         <section>
//           <h3>11. USER RIGHTS AND CHOICES</h3>
//           <p>
//             Visitors should be able to understand what
//             information is requested and why.
//           </p>
//           <p>
//             Depending on applicable law, users may have
//             rights to request access to, correction of
//             or deletion of their information.
//             Browser permissions can also be changed
//             through browser settings.
//           </p>
//         </section>

//         <section>
//           <h3>12. POLICY UPDATES</h3>
//           <p>
//             This Privacy Policy may be updated when Mapics
//             introduces new functionality or changes its
//             information-processing practices.
//           </p>
//           <p>
//             If an update materially changes what information
//             is collected or why it is collected, users should
//             be informed before the new practices are applied.
//           </p>
//         </section>

//         <section>
//           <h3>13. CONTACT</h3>
//           <p>
//             For questions about this Privacy Policy,
//             information processing or deletion requests,
//             please contact the Mapics project administrator
//             using the contact details provided by the project.
//           </p>
//         </section>

//         <hr />

//         <p>
//           Please make sure you understand what information
//           the Mapics demonstration processes before providing it.
//           Granting browser location permission is separate from
//           agreeing to the processing of other information.
//         </p>

//         <label className="consent">
//           <input
//             type="checkbox"
//             checked={accepted}
//             onChange={e => setAccepted(e.target.checked)}
//           />
//           I have read and understood the Privacy Policy.
//         </label>

//         <button
//           disabled={!accepted}
//           onClick={onContinue}
//         >
//           I Agree & Continue →
//         </button>
//       </div>
//     </main>
//   )
// }

// export default PrivacyPolicy






import { useState } from 'react'

function PrivacyPolicy({ onContinue }) {
  const [accepted, setAccepted] = useState(false)
  const [personalConsent, setPersonalConsent] = useState(false)
  const [locationConsent, setLocationConsent] = useState(false)

  function handleContinue() {
    if (!accepted) return

    onContinue({
      personalConsent,
      locationConsent
    })
  }

  return (
    <main className="page">
      <div className="panel privacy-panel">
        <h1>MAPICS</h1>
        <h2>PRIVACY POLICY</h2>

        <p>Last Updated: November 11, 2026</p>

        <p>
          Welcome to Mapics. Please read this Privacy Policy
          carefully before using the demonstration platform.
          This document explains what information may be
          processed, how it is used, and how it is protected.
        </p>

        <section>
          <h3>1. INTRODUCTION</h3>
          <p>
            Mapics is a web demonstration project designed
            to explore modern web development technologies,
            authentication, browser permissions and database
            integration. We value transparency and believe
            that every visitor should understand how the
            platform operates.
          </p>
          <p>
            This document describes the information that
            may be processed when interacting with the
            demonstration and explains the choices available
            to users.
          </p>
        </section>

        <section>
          <h3>2. PURPOSE OF THE PLATFORM</h3>
          <p>
            Mapics is intended to demonstrate how websites
            communicate with browsers, authentication
            services and backend databases. The platform
            may include experimental features that help
            developers understand how modern applications
            work.
          </p>
          <p>
            Mapics is not an emergency service, a navigation
            replacement or a security monitoring platform.
          </p>
        </section>

        <section>
          <h3>3. INFORMATION THAT MAY BE PROCESSED</h3>
          <p>
            Depending on the features used and the choices
            made by the visitor, the demonstration may
            process several categories of information.
          </p>

          <ul>
            <li>First name and last name</li>
            <li>Email address</li>
            <li>Email confirmation status</li>
            <li>Latitude and longitude, if location access is granted</li>
            <li>Combined geographic coordinates</li>
            <li>Device category</li>
            <li>Operating system</li>
            <li>Browser information</li>
            <li>Screen resolution</li>
            <li>Browser language</li>
          </ul>

          <p>
            These categories are not automatically authorized
            by a single browser permission. Users should be
            informed about each category before it is submitted.
          </p>
        </section>

        <section>
          <h3>4. LOCATION PERMISSION</h3>
          <p>
            Mapics may request access to geographic location
            through the browser's built-in geolocation feature.
            When a request is made, the browser displays its
            own permission dialog.
          </p>
          <p>
            If the visitor selects Allow, the browser may
            provide geographic coordinates to the website.
            If access is denied, the website will not receive
            coordinates through that request.
          </p>
          <p>
            If the user separately agrees to location storage,
            their precise latitude and longitude may be saved
            in the Mapics Supabase database for demonstration
            purposes.
          </p>
          <p>
            Browser location permission does not automatically
            authorize storage of geographic coordinates.
          </p>
        </section>

        <section>
          <h3>5. DEVICE AND TECHNICAL INFORMATION</h3>
          <p>
            Modern browsers expose certain technical
            characteristics that help websites operate
            correctly. Examples include browser language,
            screen dimensions and information about the
            browser environment.
          </p>
          <p>
            This information may help developers understand
            compatibility and improve the demonstration.
            Device information will only be stored when
            the user has agreed to that collection.
          </p>
        </section>

        <section>
          <h3>6. EMAIL AUTHENTICATION</h3>
          <p>
            Mapics uses Supabase Authentication for email
            verification. When a visitor requests a
            confirmation link, Supabase may send an email
            containing a link to verify the email address.
          </p>
          <p>
            Email verification confirms control of an email
            account. It does not automatically constitute
            consent to collect unrelated personal or
            technical information.
          </p>
        </section>

        <section>
          <h3>7. DATABASE STORAGE</h3>
          <p>
            Mapics uses Supabase as its backend infrastructure.
            Information submitted to the project may be stored
            in a database when the user has provided the
            relevant consent.
          </p>
          <p>
            Depending on the user's choices, stored information
            may include their name, email address, device
            characteristics, email verification status and
            precise geographic coordinates.
          </p>
          <p>
            Database access should be restricted through
            appropriate authentication and security policies.
            Public visitors should not be able to access
            other users' personal records.
          </p>
        </section>

        <section>
          <h3>8. DATA SECURITY</h3>
          <p>
            Reasonable technical measures should be used
            to prevent unauthorized access, alteration
            or disclosure of information.
          </p>
          <p>
            These measures may include authentication,
            access restrictions, database security policies
            and secure connections. However, no online
            system can guarantee absolute security.
          </p>
        </section>

        <section>
          <h3>9. DATA RETENTION</h3>
          <p>
            Information should not be stored indefinitely
            without a legitimate purpose. The project
            administrator should establish an appropriate
            retention period and remove information when
            it is no longer necessary.
          </p>
          <p>
            Users should have a way to contact the
            administrator regarding deletion requests.
          </p>
        </section>

        <section>
          <h3>10. INFORMATION SHARING</h3>
          <p>
            Personal information should not be sold or
            shared with unrelated third parties.
            Infrastructure providers involved in operating
            the service, such as Supabase, may process
            information as necessary to provide their services.
          </p>
          <p>
            Any additional sharing should be explained
            to users before it takes place.
          </p>
        </section>

        <section>
          <h3>11. USER RIGHTS AND CHOICES</h3>
          <p>
            Visitors should be able to understand what
            information is requested and why.
          </p>
          <p>
            Depending on applicable law, users may have
            rights to request access to, correction of
            or deletion of their information.
            Browser permissions can also be changed
            through browser settings.
          </p>
          <p>
            Users can decline optional storage of device
            information or precise coordinates. Declining
            storage does not automatically prevent the use
            of other demonstration features.
          </p>
        </section>

        <section>
          <h3>12. POLICY UPDATES</h3>
          <p>
            This Privacy Policy may be updated when Mapics
            introduces new functionality or changes its
            information-processing practices.
          </p>
          <p>
            If an update materially changes what information
            is collected or why it is collected, users should
            be informed before the new practices are applied.
          </p>
        </section>

        <section>
          <h3>13. CONTACT</h3>
          <p>
            For questions about this Privacy Policy,
            information processing or deletion requests,
            please contact the Mapics project administrator
            using the contact details provided by the project.
          </p>
        </section>

        <hr />

        <h3>YOUR DATA PRIVACY CHOICES</h3>

        <p>
          Please review the following options carefully.
          These choices determine which additional information
          Mapics is allowed to store in Supabase.
        </p>

        <label className="consent">
          <input
            type="checkbox"
            checked={personalConsent}
            onChange={e => setPersonalConsent(e.target.checked)}
          />
          I read all privacy texts
        </label>

        <label className="consent">
          <input
            type="checkbox"
            checked={locationConsent}
            onChange={e => setLocationConsent(e.target.checked)}
          />
          I agree this 13 politics
        </label>

        <hr />

        <label className="consent">
          <input
            type="checkbox"
            checked={accepted}
            onChange={e => setAccepted(e.target.checked)}
          />
          I have read and understood the Privacy Policy.
        </label>

        <button
          type="button"
          disabled={!accepted}
          onClick={handleContinue}
        >
          I Agree & Continue →
        </button>
      </div>
    </main>
  )
}

export default PrivacyPolicy
