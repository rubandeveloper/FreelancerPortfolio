import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ userdetails }) => {


    const makeHeaderRightSection = (data) => {

        let { menus: header_items } = data

        let parentContainer = document.querySelector('#header-content-right')

        let makeContainer = () => {
            let container = document.createElement('div')
            container.classList.add('content-right-items')
            container.id = 'header-content-right-items'

            if (Array.isArray(header_items)) {

                let parentContainer = container

                let makeItem = (itm) => {

                    let { id, link, label, icon, isicon, isContactBtn, custom_classList } = itm

                    let container = document.createElement('a')

                    container.classList.add('content-right-item', ...custom_classList)

                    container.id = id
                    container.href = link

                    container.innerHTML = `
                        ${isicon && !isContactBtn ? `<span class='item-icon'>${icon}</span>` : ''}
                        <span class='item-label'>${label}</span>
                        ${isContactBtn && isicon ? `<span class='item-icon'>${icon}</span>` : ''}
                    `

                    return container
                }

                header_items.forEach((itm, i) => {

                    let container = makeItem(itm)
                    parentContainer.appendChild(container)

                })


            }



            return container
        }
        let addEvent = () => {

        }

        if (!parentContainer) return

        parentContainer.innerHTML = ``

        let container = makeContainer()
        parentContainer.appendChild(container)
        addEvent(container)

    }

    const addEvent = () => {

        let parentContainer = document.querySelector('#header-section-main')
        let mobile_menu_btn = parentContainer.querySelector('#content-left-toggle-btn')
        let header_menu_items = parentContainer.querySelector('#header-content-right-items')

        let header_menu_items_activeclass = "content-right-items-active"
        let header_menu_btn_activeclass = "content-left-toggle-btn-clicked"

        let menu_active = false

        mobile_menu_btn.addEventListener('click', (e) => {

            if (menu_active) menu_active = false
            else menu_active = true

            if (menu_active) {
                header_menu_items.classList.add(header_menu_items_activeclass)
                mobile_menu_btn.classList.add(header_menu_btn_activeclass)
            } else {
                header_menu_items.classList.remove(header_menu_items_activeclass)
                mobile_menu_btn.classList.remove(header_menu_btn_activeclass)
            }



        })
    }

    useEffect(() => {

        makeHeaderRightSection(userdetails.header_detials || { menus: [] })

        addEvent()

    }, [])


    return (
        <div className='project-header-section animateYInvert'>
            <div className='header-content-main' id='header-section-main'>
                <div className='header-content-left'>
                    <h2 className='content-left-item header-left-name'>
                        <Link to={'/'} >
                            <h2>{userdetails.nicname}</h2>
                        </Link>
                    </h2>

                    <div className='content-left-toggle-btn' id='content-left-toggle-btn'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
                <div className='header-content-right' id='header-content-right'>
                </div>
            </div>
        </div>
    )
}

export default Header;
