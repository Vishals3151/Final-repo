import React from 'react'

function Contactus() {
  return (
    <>
    <label className="input input-bordered flex items-center gap-2">
  Name
  <input type="text" className="grow" placeholder="Daisy" />
</label>
<label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="daisy@site.com" />
</label>
    </>
  )
}

export default Contactus
