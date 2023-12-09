import React from 'react';

//{} = object in the React.use
export default function Form() {
  const[formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: false,
    employment: "",
    favColor: ""
  })
  // event.target.name gives access to the properties in the object
  //we can use setFormData in state with event.target.value 
  //to give use the updated state after every keystroke is typed into the input box
  function handleChange(event){
    //this gives name and value the properties of target from the object target
    const {name, value, type, checked} = event.target
    //the callback function below is to callback all of the previous data from formData
    setFormData(prevFormData => {
      return {
        //then we want to overwrite the previous formData....
        ...prevFormData,
        //with a new object property using [name] as the key in the object
        //and value as the value in the object
        //[name] targets the <input> name element in our <form>
        [name] : type === "checkbox" ? checked : value
        /*introduce a ternary to check if type is equal to "checkbox" and if it is return
        checked if not return value */
      }
    })
  }

  //this is the function we use to submit our form
  function handleSubmit(event){
    event.preventDefault()
    //if there was an API we could submit to we would use submitToApi(formData)
    //submitToApi(formData)
  }

  //onChange is like onClick it is an event that happens after an action
  //for this project onChange is for when anything is typed into the input text box
  //name tells which React object element is targeted by the input--- firstName
  //value gives React control over the components rather input having control over the components
  
  /*for checkedbox it has its own <input type='checkbox'> inside the input tag for checkbox 
  you give it an id so <label> can target the checkbox by using htmlFor inside the label tag */

  /*for radio we have similar set up as checkbox except we set checked={formData.employment === 'unemployed'}
 this sets the radio into a boolean value like checkbox*/
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        className='form-data'
        type="text"
        placeholder="First Name"
        name='firstName'
        value={formData.firstName}
        onChange={handleChange}>
      </input>
      
      <input
      className='form-data'
      type='text'
      placeholder='Last Name'
      name='lastName'
      value={formData.lastName}
      onChange={handleChange}>
      </input>

      <input
      className='form-data'
      type='text'
      placeholder='Email'
      name='email'
      value={formData.email}
      onChange={handleChange}>
      </input>

      <textarea
      className='textarea-data'
      placeholder='Comments'
      name='comments'
      value={formData.comments}
      onChange={handleChange}>
      </textarea>
      <br/>
    
      <input
      className='checkbox'
      type='checkbox'
      id='isFriendly'
      name='isFriendly'
      checked={formData.isFriendly}
      onChange={handleChange}>
      </input>

      <label htmlFor='isFriendly'>Are you friendly?</label>
      <br/>
      <br/>

      <fieldset>
        <legend>Current Employment Status</legend>
        <input
        type='radio'
        id='unemployed'
        name='employment'
        value='unemployed'
        checked={formData.employment === 'unemployed'}
        onChange={handleChange}>
        </input>

        <label htmlFor='unemployed'>Unemployed</label>
        <br/>
        
        <input
        type='radio'
        id='part-time'
        name='employment'
        value='part-time'
        checked={formData.employment === 'part-time'}
        onChange={handleChange}>
        </input>

        <label htmlFor='part-time'>Part-time</label>

        <input
        type='radio'
        id='full-time'
        name='employment'
        value='full-time'
        checked={formData.employment === 'full-time'}
        onChange={handleChange}>
        </input>

        <label htmlFor='full-time'>Full-time</label>
      </fieldset>
      <br />

      <label htmlFor='favColor'>What is your favorite color?</label>
      <br />
      <select
      id='favColor'
      value={formData.favColor}
      onChange={handleChange}
      name='favColor'>
        
        <option value=''>-- Choose --</option>
        <option value='red'>Red</option>
        <option value='orange'>Orange</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>
        <option value='blue'>Blue</option>
        <option value='indigo'>Indigo</option>
        <option value='violet'>Violet</option>
        <option value='viridian'>Viridian</option>
        <option value='sapphire'>Sapphire</option>
        <option value='scarlet'>Scarlet</option>
      </select>
      <br />

      <button>Submit</button>
    </form>
    //by having a button inside a <form> it automatically gets the <input type='submit'/>
  )
}