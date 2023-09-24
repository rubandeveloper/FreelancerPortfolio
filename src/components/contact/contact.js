import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Contact = ({ userdetails }) => {


    const makeSection = (data) => {

        let parentContainer = document.querySelector('.project-contact-section')

        let makeContainer = (data) => {

            let { title, id, message, email, mailto, buttons } = data

            let container = document.createElement('div')

            container.classList.add('contact-content-main')

            container.innerHTML = `

                <h1 class='content-title'>
                    <strong>${title}</strong>
                </h1>
                <div class='content-contact-detials'>
                    <div class='content-contact-message'>${message}</div>
                    <a href="${mailto}" class='content-contact-mail'>${email}</a>
                    <div class="content-contact-buttons">
                    </div>
                </div>
            
            `

            if (Array.isArray(buttons)) {

                let parent_container = container.querySelector('.content-contact-buttons')

                buttons.forEach(btn => {

                    let { id, icon, link, label } = btn

                    let item = document.createElement('a')
                    item.classList.add('content-contact-btn')
                    item.id = id
                    item.href = link
                    item.target = '_blank'

                    item.innerHTML = `
                        <div class="icon">${icon}</div>
                        <div class="label">${label}</div>
                    `
                    parent_container.appendChild(item)
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

        makeSection(userdetails.contact)

    }, [])

    return (
        <div className='project-contact-section' id={userdetails.contact.id}>
        </div>
    )
}

export default Contact;
