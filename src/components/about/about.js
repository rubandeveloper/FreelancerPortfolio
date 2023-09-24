import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Icons from '../../assets/Icons'
import Images from '../../assets/Images'

const About = ({ userdetails }) => {


    const makeSection = (data) => {

        let parentContainer = document.querySelector('.project-about-section')

        let makeContainer = (data) => {

            let { title, heading, description, id, user_img, social_items } = data

            user_img = user_img || Images.profile

            let container = document.createElement('div')

            container.classList.add('about-content-main')

            container.innerHTML = `
                <h1 class='content-title animateY'>
                    <strong>${title}</strong>
                </h1>
                <div class='about-content-wrap'>
                    <div class='content-about-left'>
                        <h1 class='content-left-title animateY'>${heading}</h1>
                        <p class='content-left-description animateY'>${description}</p>

                        <div class='content-left-social animateY' id='content-left-social'>
                        </div>
                    </div>
                    <div class='content-about-right animateXRight'>
                        <img src='${user_img}' />
                    </div>
                </div>
            
            `

            if (Array.isArray(social_items)) {

                let social_parent = container.querySelector('#content-left-social')
                let makeSocialItem = (item) => {

                    let { id, icon, link } = item

                    let container = document.createElement('a')

                    container.id = id
                    container.href = link
                    container.target = "_blank"

                    container.classList.add('content-left-social-item')

                    container.innerHTML = `${icon}`

                    return container
                }

                social_parent.innerHTML = ``


                social_items.forEach(item => {
                    let container = makeSocialItem(item)
                    social_parent.appendChild(container)
                })

            }


            return container
        }

        let addEvent = () => {

        }

        if (!parentContainer) return

        parentContainer.innerHTML = ``

        let container = makeContainer(data)
        parentContainer.appendChild(container)
        addEvent(container, data)


    }


    useEffect(() => {

        makeSection(userdetails.about_detials)

    }, [])

    return (
        <div className='project-about-section' id={userdetails.about_detials.id}>
        </div>
    )
}

export default About;
