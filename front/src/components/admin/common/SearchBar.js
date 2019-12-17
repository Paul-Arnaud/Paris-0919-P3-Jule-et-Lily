import React from 'react'
import '../../../assets/css/admin/global.css'

const SearchBar = () => {
  return (
    <div>
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
      <div className="input-group-append">
        <button className="btn btn-primary" type="button">Valider
        </button>
      </div>
      </form>
    </div>
  )
}

export default SearchBar