import React, { useState, useRef } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { LuMapPin } from 'react-icons/lu';
import { MdAlternateEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { BsCheck2Square } from 'react-icons/bs';
import './contactcard.css'
const ContactCard = () => {
  const box = useRef(null)
  const box1 = useRef(null)
  const box2 = useRef(null)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const hundle = (e) => {
    e.preventDefault();
    //  box.current.focus()
    if (!name) {
      box.current.style.setProperty('--placeholder-color', 'red')
      box.current.style.borderColor = "red";
    }
    if(!email){
      box1.current.style.setProperty('--placeholder-color', 'red')
      box1.current.style.borderColor = "red";
    }
   if(!text){
    box2.current.style.setProperty('--placeholder-color', 'red')
    box2.current.style.borderColor = "red";
   }
     
  }

  
  return (
    <div>
      <div>
        <div className='title-bg'>
          Contacts
        </div>
        <div className='card-exxx'>
          <span className='service'>Get</span>
          In Touch
        </div>
        <div>
          <div style={{ position: "relative", top: "130px", marginLeft: "52px" }}>
            <div style={{ display: "flex" }}>

              <div style={{ flex: 4 }} className='service-item-contact card-contact'>

                <div className="box-contact effect">
                  <div className='icon-de'>
                    <LuMapPin />
                  </div>
                  <div className="contacts-item card-box">
                    <div className="icon"><i className="la la-map-marker"></i></div>
                    <div className="name-contact">Address</div>
                    <p className='add'>
                      France, Paris.
                    </p>
                  </div>
                </div>
                <div className="box-contact effect">
                  <div className='icon-de'>
                    <BsTelephone />
                  </div>
                  <div className="contacts-item card-box">
                    <div className="icon"><i className="la la-phone"></i></div>
                    <div className="name-contact">Phone</div>
                    <p className='add'>
                      +123 654 78900
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ flex: 4 }} className='service-item-contact card-contact'>
                <div className="box-contact effect">
                  <div className='icon-de'>
                    <MdAlternateEmail />
                  </div>
                  <div className="contacts-item card-box">
                    <div className="icon"><i className="la la-at"></i></div>
                    <div className="name-contact">Email</div>
                    <p className='add'>
                      adlard@example.com
                    </p>
                  </div>
                </div>
                <div className="box-contact effect">
                  <div className='icon-de'>
                    <BsCheck2Square />
                  </div>
                  <div className="contacts-item card-box">
                    <div className="icon"><i className="la la-check-square"></i></div>
                    <div className="name-contact">Freelance</div>
                    <p className='add'>
                      Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='card-exx'>
          <span className='service'>Contact</span>
          Form
        </div>
        <div style={{ position: "relative", top: "130px", marginLeft: "52px" }}>

          <div>
            <div style={{ display: "flex" }}>

              <div style={{ flex: 4 }} className='service-item-contact1 card-contact1'>

                <div className="box-contact2 ">
                  <div className='icon1'>

                  </div>
                  <div className='form' style={{ margin: "21px" }}>
                    <form>
                      <div style={{ display: "flex" }}>
                        <div style={{ flex: 3, marginRight: "50px" }}>
                          <input type='text' ref={box} className='lol' value={name} onChange={(e) => setName(e.target.value)} name='name' placeholder='Full Name' />

                        </div>

                        <div style={{ flex: 3 }}>
                          <input type='text' className='lol' ref={box1} required value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder='Email Address' />
                        </div>
                      </div>
                      <div className='mt-4'>
                        <div class="group-val">
                          <textarea type='text' className='lol' ref={box2} name="message" required value={text} onChange={(e) => setText(e.target.value)} placeholder="Your Message"></textarea>
                        </div>
                      </div>
                      <div className="align-left">
                        <button className='button' onClick={hundle}>
                          <span className="text">Send Message</span>
                          <span className="mesg-icon"><BsArrowRight /></span>
                        </button>
                      </div>
                    </form>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
