import React from 'react'

const  Main=()=> {
  return (
    <div>
          <div className="header">
              <div className="row1">
                  <h1>A room without books is like <br />a body without a soul.</h1>
              </div>
              <div className="row2">
                  <h2>Search your Book</h2>
                  <div className="search">
                      <input type="text" placeholder='Enter Your Book Name' />
                      <button><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <img src="./images/bgbg.png" alt="" />
              </div>
      </div>
    </div>
  )
}

export default Main;
