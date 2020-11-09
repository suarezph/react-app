import React from 'react'

import bookPlaceholderSvg from '@images/book-placeholder.svg'
import "@styles/styles.scss"

function App() {
  return (
    <div class="box">
      <h3>Our Application Is Alive</h3>
      <p>This isn’t reality. This — is fantasy.</p>
     <p>
      <img src={bookPlaceholderSvg} />
     </p>
    </div>
  )
}

export default App