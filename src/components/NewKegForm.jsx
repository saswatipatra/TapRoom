import React from 'react';

function NewKegForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Name'/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'/>
        <textarea
          id='price'
          placeholder='Price.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewKegForm;