import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icons from '../../assets/Icons'

import Landing from '../landing/landing'
import Works from '../works/works'
import About from '../about/about'
import Services from '../services/services'
import Testimonials from '../testimonials/testimonials'
import Contact from '../contact/contact'
import Footer from '../footer/footer'

const Home = ({ userdetails }) => {

    const scrollReveal = () => {

        let revealX = () => {

            {
                let reveals = document.querySelectorAll(".animateXLeft")

                for (let i = 0; i < reveals.length; i++) {
                    let windowHeight = window.innerHeight;
                    let elementTop = reveals[i].getBoundingClientRect().top;

                    if (!reveals[i].classList.contains('animateYactive') && elementTop < windowHeight) {
                        reveals[i].classList.add("animateXLeftactive");
                    }
                }
            }
            {
                let reveals = document.querySelectorAll(".animateXRight")

                for (let i = 0; i < reveals.length; i++) {
                    let windowHeight = window.innerHeight;
                    let elementTop = reveals[i].getBoundingClientRect().top;

                    if (!reveals[i].classList.contains('animateYactive') && elementTop < windowHeight) {
                        reveals[i].classList.add("animateXRightactive");
                    }
                }
            }
        }

        let revealY = () => {
            let reveals = document.querySelectorAll(".animateY");


            for (let i = 0; i < reveals.length; i++) {
                let windowHeight = window.innerHeight;
                let elementTop = reveals[i].getBoundingClientRect().top;
                if (!reveals[i].classList.contains('animateYactive') && elementTop < windowHeight) {
                    reveals[i].classList.add("animateYactive");
                }
            }
        }
        let revealYInvet = () => {
            let reveals = document.querySelectorAll(".animateYInvert");


            for (let i = 0; i < reveals.length; i++) {
                let windowHeight = window.innerHeight;
                let elementTop = reveals[i].getBoundingClientRect().top;
                if (!reveals[i].classList.contains('animateYInvertactive') && elementTop < windowHeight) {
                    reveals[i].classList.add("animateYInvertactive");
                }
            }
        }
        revealX()
        revealY()
        revealYInvet()

        window.addEventListener("scroll", (e) => {
            revealX()
            revealY()
            revealYInvet()
        });

    }

    useEffect(() => {

        scrollReveal()
    }, [])


    return (
        <div className='project-home-page-main'>
            <Landing userdetails={userdetails} />
            <Works userdetails={userdetails} />
            <About userdetails={userdetails} />
            <Services userdetails={userdetails} />
            <Testimonials userdetails={userdetails} />
            <Contact userdetails={userdetails} />
            <Footer userdetails={userdetails} />
        </div>
    )
}

export default Home;
