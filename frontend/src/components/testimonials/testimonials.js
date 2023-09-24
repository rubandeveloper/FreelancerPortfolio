import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Testimonials = ({ userdetails }) => {


    const makeSection = (data) => {

        let parentContainer = document.querySelector('#project-testimonials-section')

        let makeContainer = (data) => {

            let { title, testimonials } = data

            let container = document.createElement('div')

            container.classList.add('testimonials-content-main')

            container.innerHTML = `

                <h1 class='content-title animateY'>
                    <strong>${title}</strong>
                </h1>
                <div class='content-testimonials-items' id='content-testimonials-items'>
                </div>
            
            `

            if (Array.isArray(testimonials)) {

                let parentContainer = container.querySelector('#content-testimonials-items')

                let makeItem = (testimonial) => {

                    let { user_img, user_name, review } = testimonial

                    let container = document.createElement('div')

                    container.classList.add('testimonial-item-main', 'animateY')
                    container.innerHTML = `
                        <div class='testimonial-item-review'>“${review}”</diV>
                        <div class='testimonial-user-detials'>
                            <div class='testimonial-user-detials-img'>
                                <img src='${user_img}' />
                            </diV>
                            <div class='testimonial-user-detials-name'>
                                ${user_name}
                            </diV>
                        </diV>
                    `

                    return container
                }
                let addEvent = (container, testimonial) => { }


                testimonials.forEach((testimonial, i) => {

                    let container = makeItem(testimonial)
                    parentContainer.appendChild(container)
                    addEvent(container, testimonial)
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

        makeSection(userdetails.testimonials)

    }, [])

    return (
        <div className='project-testimonials-section' id='project-testimonials-section'>
        </div>
    )
}

export default Testimonials;
