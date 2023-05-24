import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Contact = ({ userdetails }) => {


    const makeSection = (data) => {

        let parentContainer = document.querySelector('.project-contact-section')

        let makeContainer = (data) => {

            let { title, id, message, email, mailto } = data

            let container = document.createElement('div')

            container.classList.add('contact-content-main')

            container.innerHTML = `

                <h1 class='content-title'>
                    <strong>${title}</strong>
                </h1>
                <div class='content-contact-detials'>
                    <div class='content-contact-message'>${message}</div>
                    <a href="${mailto}" class='content-contact-mail'>${email}</a>
                </div>
            
            `

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

        makeSection(userdetails.contact)

    }, [])

    return (
        <div className='project-contact-section' id={userdetails.contact.id}>
        </div>
    )
}

export default Contact;
