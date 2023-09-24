import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Icons from '../../assets/Icons'
import Images from '../../assets/Images'

const Landing = ({ userdetails }) => {


    const makeLandingSection = (data) => {

        let parentContainer = document.querySelector('#project-landing-section')

        let makeContainer = (data) => {

            let { active_btn, profile_img, profile_name, profile_headline, profile_description, flotting_icons } = data

            profile_name = profile_name || "Hey, I'm Your Name"
            profile_headline = profile_headline || "A Website Builder"
            profile_description = profile_description || ""

            let container = document.createElement('div')

            container.classList.add('landing-content-main')

            container.innerHTML = `
    
                <div class='landing-profile-section'>
                    <div class='profile-flotting-logos-main'>
                        <div class='profile-flotting-logos' id='profile-flotting-logos'>
                        </div>
                    </div>
                    <div class='profile-image animateY'>
                        <img src=${profile_img} />
                    </div>
                </div>
                <div class='landing-detials-section'>
                    <h1 class='landing-name-section animateY'>
                        <strong>${profile_name}</strong>
                    </h1>
                    <h1 class='landing-designation-section animateY'>${profile_headline}</h1>
                    <p class='landing-description-section animateY'>
                       ${profile_description}
                    </p>
                </div>
                <a class='landing-active-button animateY' href="${active_btn.link || "#"}" >
                    <div class='item-label'>${active_btn.label}</div>
                    <div class='item-icon'>${active_btn.icon}</div>
                </a>
            
            `

            if (Array.isArray(flotting_icons)) {

                let flotting_parent = container.querySelector('#profile-flotting-logos')

                let makeIcon = (itm) => {
                    let { icon, custom_classList } = itm

                    custom_classList = custom_classList || []


                    let container = document.createElement('div')

                    container.classList.add(...custom_classList)

                    container.innerHTML = `
                        <img src='${icon}' />
                    `

                    return container
                }

                flotting_icons.forEach((itm, i) => {
                    let icon = makeIcon(itm)
                    flotting_parent.appendChild(icon)
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

        makeLandingSection(userdetails.landing_detials)

    }, [])

    return (
        <div className='project-landing-section' id='project-landing-section'>
        </div>
    )
}

export default Landing;
