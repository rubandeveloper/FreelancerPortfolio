import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Icons from '../../assets/Icons'
import Images from '../../assets/Images'

const Works = ({ userdetails }) => {


    const makeSection = (data) => {

        let parentContainer = document.querySelector('.project-works-section')

        let makeContainer = (data) => {

            let { title, id, works } = data


            let container = document.createElement('div')

            container.classList.add('works-content-main')
            container.id = id

            container.innerHTML = `

                <h1 class='content-title'>
                    <strong>${title}</strong>
                </h1>
                <div class='content-works-items' id='content-works-items'>
                </div>
            
            `

            let parentContainer = container.querySelector('#content-works-items')

            if (Array.isArray(works)) {

                let makeWorkItem = (work) => {

                    let { isleft, isproject_link, isvisit_link, banner, category, title, description, project_link, visit_link } = work

                    let container = document.createElement('div')

                    container.classList.add('work-item-main')
                    container.innerHTML = `

                        ${isleft ? `
                            <div class='work-item-banner animateXLeft'>
                                <img src='${banner}' />
                            </div>
                        `: ''}

                        <div class='work-item-detials'>
                            <div class='work-item-detials-content'>
                                <span class='work-item-detials-category animateY'>${category}</span>  
                                <h2 class='work-item-detials-title animateY'>${title}</h2>  
                                <p class='work-item-detials-desc animateY'>${description}</p>  
                                <div class='work-item-detials-btns animateY'>

                                    ${isproject_link ? `
                                        <a href='${project_link}' class='work-item-detials-btn work-btn-primary'>
                                            <div class='item-label'>View Case Study</div>      
                                            <div class='item-icon'>${Icons.general.go_arrow}</div>      
                                        </a>  
                                    `: ''}
                                    ${isvisit_link ? `
                                        <a href='${visit_link}' target="_blank" class='work-item-detials-btn'>
                                            <div class='item-label'>Download App</div>      
                                            <div class='item-icon'>${Icons.general.go_arrow_active}</div>      
                                        </a>  
                                    `: ''}
                                </div>  
                            </div>
                        </div>

                        ${!isleft ? `
                            <div class='work-item-banner animateXRight'>
                                <img src='${banner}' />
                            </div>
                        `: ''}
                    `

                    return container
                }
                let addEvent = (container, work) => { }


                works.forEach((work, i) => {

                    let container = makeWorkItem(work)
                    parentContainer.appendChild(container)
                    addEvent(container, work)
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

        makeSection(userdetails.works)

    }, [])

    return (
        <div className='project-works-section' id={userdetails.works.id}>
        </div>
    )
}

export default Works;
