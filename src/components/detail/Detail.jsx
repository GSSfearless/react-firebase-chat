import React from 'react'
import { auth } from "../../lib/firebase"
import "./detail.css"

const Detail = () => {
    return (
      <div className='detail'>
        <div className="user">
          <img src="./avatar.png" alt="" />
          <h2>Hannah</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div> 
        <div className="info">
          <div className="option">
            <div className="title">
              <span>Chat Settings</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Privacy & Help</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared photos</span>
              <img src="./arrowDown.png" alt="" />
            </div>
            <div className="photos">
              <div className="photoItem">
                <div className="photoDetail">  
                  <img src="./girl_5.jpg" alt="" />
                  <span>photo_5_20.png</span>
                </div>
                  <img src="./download.png" alt="" className="icon"/>
              </div>
              <div className="photoItem">
                <div className="photoDetail">  
                  <img src="./dog.jpg" alt="" />
                  <span>photo_5_21.png</span>
                </div>
                  <img src="./download.png" alt="" className="icon"/>
              </div>
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared Files</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <button>Block User</button>
          <button className="logout" onClick={()=>auth.signOut()}>Logout</button>
        </div>
      </div>
    )
  }
  
  export default Detail