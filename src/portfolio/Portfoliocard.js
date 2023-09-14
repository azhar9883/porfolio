import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';
import { Routes, Route, Link } from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll";
import './portfoliocard.css'
import All from './categories/All';
import Photo from './categories/Photo';
import Music from './categories/Music';
import Design from './categories/Design';
import Video from './categories/Video';
const Portfoliocard = () => {
    const [basicActive, setBasicActive] = useState('tab1');
    // const [activTab, setActiveTab] = useState(true)

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }
        
        setBasicActive(value);
    };

    return (
        <div className='card_detail scroll' style={{ overflowX: "hidden" }}>

            <div>
                <div className='title-bg'>
                    Portfolio
                </div>
                <div className='card-exp'>
                    <span className='service'>My</span>
                    portfolio
                </div>
            </div>
            <div>
                <div className='title-p'>
                    Resume
                </div>
                <div className='card-p'>
                    <MDBTabs className='mb-3'>
                        <MDBTabsItem>
                            <MDBTabsLink  onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                <div className={basicActive === 'tab1' ? 'f_btn active' : 'f_btn'} >
                                    <label><input type="radio" name="fl_radio" value="grid-item" />All</label>
                                </div>
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink  onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                            <div className={basicActive === 'tab2' ? 'f_btn active' : 'f_btn'} >
                            <label><input type="radio" name="fl_radio" value="photo" />Photo</label>
                        </div>
                            </MDBTabsLink>
                        </MDBTabsItem>

                        <MDBTabsItem>
                            <MDBTabsLink  onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                            <div className={basicActive === 'tab3' ? 'f_btn active' : 'f_btn'} >
                            <label><input type="radio" name="fl_radio" value="video" />Video</label>
                        </div>
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink  onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
                            <div className={basicActive === 'tab4' ? 'f_btn active' : 'f_btn'} >
                            <label><input type="radio" name="fl_radio" value="music" />Music</label>
                        </div>
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink  onClick={() => handleBasicClick('tab5')} active={basicActive === 'tab5'}>

                            <div className={basicActive === 'tab5' ? 'f_btn active' : 'f_btn'} >
                            <label><input type="radio" name="fl_radio" value="design" />Design</label>
                        </div>
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                </div>

            </div>
            <div style={{ position: "relative", top: "70px", marginLeft: "50px" }}>
                <MDBTabsContent>
                    <MDBTabsPane show={basicActive === 'tab1'}><All /></MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab2'}><Photo /></MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab3'}><Video /></MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab4'}><Music /></MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab5'}><Design /></MDBTabsPane>
                </MDBTabsContent>
            </div>

        </div>
    )
}

export default Portfoliocard
