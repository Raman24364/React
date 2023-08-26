import React from 'react';
import './Block.css';
import { FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

function Block() {
    return (
        <>
          

            <div className='Border'>

            <div className='Class'>
                <div className='Explore'>
                    <h3 className='header'>Explore</h3>

                    <section className='section'>Home</section>
                    <section className='section'>Questions</section>
                    <section className='section'>Articles</section>
                    <section className='section'>Tutorials</section>
                </div>


                <div className='Support'>
                    <h3 className='header'>Support</h3>

                    <section className='section-1'>FAQs</section>
                    <section className='section-1'>Help</section>
                    <section className='section-1'>Contact us</section>


                </div>
                <div className='Connected'>
                    <h3 className='header'>Stay Connected</h3>
                    <section className='section-2'>
                        <FaYoutube />
                        <FaTwitter />
                        <FaFacebook />

                    </section>
                </div>

                </div>
                
                <div>
                    <p id='pa'>DEV@Deakin 2023</p>
                </div>
                <div className='Policy'>
                    <p >Privacy Policy</p>
                    <p>Terms</p>
                    <p>Code of Conduct</p>
                </div>



                </div>

                
                
          
            

        </>
    )
}
export default Block;