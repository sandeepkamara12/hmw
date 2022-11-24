import React from 'react'

const AddLink = () => {
  return (
    <div className="px-6 lg:px-8 custom-modal">
        <div className="form-control">
            <label className="field-label text-left" tabIndex="4">Link text</label>
            <input type="text" className="custom-input-field" placeholder="Onboarding project title" tabIndex="6" />
        </div>
        <div className="form-control">
            <label className="field-label text-left" tabIndex="4">Url</label>
            <input type="text" className="custom-input-field" placeholder="http://hmw.co/...s0" tabIndex="6" />
        </div>
    </div>
  )
}

export default AddLink;