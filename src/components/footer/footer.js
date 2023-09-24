import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ userdetails }) => {


    const makeSection = (data) => {

        let parentContainer = document.querySelector('#project-footer-section')

        let makeContainer = (data) => {

            let { copyright } = data

            let container = document.createElement('div')

            container.classList.add('footer-content-main')

            container.innerHTML = `
                <div class='footer-title'>${copyright}</div>
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

        makeSection(userdetails.footer)

    }, [])

    return (
        <div className='project-footer-section' id='project-footer-section'>
        </div>
    )
}

export default Footer;
