import React, { useState } from 'react';

const App = () => {
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "india",
    Address: "",
    city: "",
    state:"",
    postalcode: "",
    comments: false
  });

  function changehandler(event) {
    const { name, value, type, checked } = event.target;
    setformdata((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <label htmlFor="firstname">First Name</label>
      <br/>
      <input
        type="text"
        placeholder="First Name"
        onChange={changehandler}
        name="firstname"
        id="firstname"
        value={formdata.firstname}
        className="outline" />
      <label htmlFor="lastname">Last Name</label>
      <br/>
      <input
        type="text"
        placeholder="Last Name"
        onChange={changehandler}
        name="lastname"
        id="lastname"
        value={formdata.lastname}
        className="outline" />
      <label htmlFor="email">Email Address</label>
      <br/>
      <input
        type="email"
        placeholder="Email"
        onChange={changehandler}
        name="email"
        id="email"
        value={formdata.email}
        className="outline"  />
      <label htmlFor="country">Country</label>
      <br />
      <select
        id="country"
        name="country"
        onChange={changehandler}
        value={formdata.country} >
       <option>india</option>
       <option>pak</option>
       <option>america</option>
       <option>japan</option>
       </select>
       <label htmlFor='Address'>street address</label>
      <input
      type='text'
      placeholder='suheb'
      onChange={changehandler}
      name='Address'
      id='Address'
      value={formdata.value}
      className='outline'
      />
      <label htmlFor='city'>city</label>
      <input
        type="text"
        placeholder="Asansol"
        onChange={changehandler}
        name="city"
        id="city"
        value={formdata.city}
        className="outline" />
      <label htmlFor='state'>state/province</label>
    
      <input
        type="text"
        placeholder="West Bengal"
        onChange={changehandler}
        name="state"
        id="state"
        value={formdata.state}
        className="outline" />
  
      <label htmlFor='postalcode'>Zip/postal code</label>
      <input
        type="text"
        placeholder="713301"
        onChange={changehandler}
        name="postalcode"
        id="postalcode"
        value={formdata.postalcode}
        className="outline" />
        <br/>
    <fieldset>
      <legend>by email</legend>

      <div className='flex'>

      <input
      type='checkbox'
      id='comments'
      name='comments'
      value={formdata.comments}
      onChange={changehandler}



      />
      <div>
        <label htmlFor='comments'>comments</label>
        <p>get notified when someone post the comments on a posting</p>
      </div>
      </div>


    </fieldset>
    </div>
  );
};

export default App;
