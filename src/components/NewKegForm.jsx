import React from 'react'
import PropTypes from 'prop-types'


function NewKegForm(props){
  let _name = null
  let _brand = null
  let _price = null

  function handleNewKegFormSubmission(event) {
    event.preventDefault()
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value})
    _name.value = ''
    _brand.value = ''
    _price.value = ''
  }

  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Drink Name'
          ref={(input) => {_name = input}}/>
        <input
          type='text'
          id='brand'
          placeholder='brand'
          ref={(input) => {_brand = input}}/>
        <textarea
          id='price'
          placeholder='price.'
          ref={(textarea) => {_price = textarea}}/>
        <button type='submit'>Add this Kombucha </button>
      </form>
    </div>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm