import React from 'react'
import Spinner from '@images/spinner.png'

function FullPageSpinner() {
  return (
    <div
      css={{
        fontSize: '4em',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={Spinner} alt="Loading..." width="250" height="250" />
    </div>
  )
}

// function ErrorMessage({ error, variant = 'stacked', ...props }) {
//   return (
//     <div
//       role="alert"
//       css={[{ color: colors.danger }, errorMessageVariants[variant]]}
//       {...props}
//     >
//       <span>There was an error: </span>
//       <pre
//         css={[
//           { whiteSpace: 'break-spaces', margin: '0', marginBottom: -5 },
//           errorMessageVariants[variant],
//         ]}
//       >
//         {error.message}
//       </pre>
//     </div>
//   )
// }

export { FullPageSpinner }
export default FullPageSpinner
