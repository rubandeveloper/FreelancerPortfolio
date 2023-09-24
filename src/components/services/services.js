import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Icons from '../../assets/Icons'
import Images from '../../assets/Images'

const Services = ({ userdetails }) => {


    const makeSection = (data) => {

        let parentContainer = document.querySelector('.project-services-section')

        let makeContainer = (data) => {

            let { title, id, services } = data

            let container = document.createElement('div')

            container.classList.add('services-content-main')
            container.id = id

            container.innerHTML = `

                <h1 class='content-title animateY'>
                    <strong>${title}</strong>
                </h1>
                <div class='content-services-items' id='content-services-items'>
                </div>
            
            `

            if (Array.isArray(services)) {

                let parentContainer = container.querySelector('#content-services-items')

                let makeItem = (service) => {

                    let { icon, title, description } = service

                    let container = document.createElement('div')

                    container.classList.add('service-item-main', 'animateY')
                    container.innerHTML = `
                        <div class='service-item-icon '>
                            ${icon}
                        </div>

                        <div class='service-item-detials'>
                            <h2 class='service-item-detials-title'>${title}</h2>  
                            <p class='service-item-detials-desc'>${description}</p>  
                        </div>
                    `

                    return container
                }
                let addEvent = (container, service) => { }


                services.forEach((service, i) => {

                    let container = makeItem(service)
                    parentContainer.appendChild(container)
                    addEvent(container, service)
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

        makeSection(userdetails.services)

    }, [])

    return (
        <div className='project-services-section' id={userdetails.services.id}>
        </div>
    )
}

export default Services;
