import React from 'react'


const Contact=()=>{
    return (
        <>
        
        <div className="form-main">
  <div className="main-wrapper">
    <br/><br/>
    <h2 className="form-head">Contact Form</h2>
    <form className="form-wrapper">
      <div className="form-card">
        <label className="form-label" htmlFor="full_name">Full Name</label><br/>
        <input
          className="form-input"
          type="text"
          name="full_name"
          required
        /><br/>
      </div>

      <div className="form-card">
        <label className="form-label" htmlFor="email">Email</label><br/>
        <input
          className="form-input"
          type="email"
          name="email"
          required
        />
      </div>

      <div className="form-card">
        <label className="form-label" htmlFor="phone_number">Phone number</label><br/>
        <input
          className="form-input"
          type="number"
          name="phone_number"
          required
        />
      </div>

      <div className="form-card">
        <label className="form-textarea-label" htmlFor="address">Address</label><br/>
        <textarea
          className="form-textarea"
          maxLength="420"
          rows="3"
          name="address"
          required
        ></textarea>
      </div>

      <div className="btn-wrap">
        <br/>
        <button>Submit</button>
      </div>
    </form>
  </div>
</div>

        </>
        
    )
}
export default Contact