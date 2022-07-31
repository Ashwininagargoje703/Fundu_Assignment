import React from 'react'
import { serviseData } from '../Data'
import "./Service.css"


export const Service = () => {
  return (
    <div className='man'>
      <div className='ser'>
        <h1 className='he'>Welcome to Epic Games Player Support</h1>
        <input className="input" type="text" placeholder="SERCH HELP CENTER.." />
        <button className="icon" type="submit"><i class="fa fa-search"></i></button>
      </div>
      <div className='service1'>
        <h1 className='cmn1'> Common Topics</h1>
        <div className='hr1'>
          <div>
            <hr className='a1' />
            <a href="">Troubleshooting the Epic Games Launcher</a>
            <br />
            <br />

            <a className='a2' href="">Read More</a>
          </div>
          <div>
            <hr className='a1' />
            <a href="">As a Creator, how and when will I get paid?</a>
            <br />
            <br />

            <a className='a2' href="">Read More</a>
          </div>
          <div>
            <hr className='a1' />
            <a href="">Troubleshooting the Epic Games Launcher</a>
            <br />
            <br />

            <a className='a2' href="">Read More</a>
          </div>

        </div>
        <div className='hr1'>
          <div>
            <hr className='a1' />
            <a href="">Troubleshooting the Epic Games Launcher</a>
            <br />
            <br />

            <a className='a2' href="">Read More</a>
          </div>
          <div>
            <hr className='a1' />
            <a href="">Troubleshooting the Epic Games Launcher</a>
            <br />
            <br />

            <a className='a2' href="">Read More</a>
          </div>
          <div>
            <hr className='a1' />
            <a href="">Troubleshooting the Epic Games Launcher</a>
            <br />
            <br />

            <a className='a2' href="">Read More</a>
          </div>

        </div>
        <div className='hr1'>
          <div>
            <hr className='a1' />
            <a href="">Troubleshooting the Epic Games Launcher</a>
            <br />
            <br />

            <a className='a2' href="">Read More</a>
          </div>
          <div>
            <hr className='a1' />
            <a href="">Troubleshooting the Epic Games Launcher</a>
            <br />
            <br />

            <a className='a2' href="">Read More</a>
          </div>
          <div>
            <hr className='a1' />
            <a href="">Troubleshooting the Epic Games Launcher</a>
            <br />
            <br />

            <a className='a2' href="">Read More</a>
          </div>

        </div>

      </div>
      <h1 className='cmn3'>How We Help You?</h1>
      <div className='div1'>
        {
          serviseData.map((e) => {
            return <div >

              <img className='img1' src={e.image} alt="" />
            </div>
          })
        }
      </div>
    </div>

  )
}
