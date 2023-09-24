import Icons from '../assets/Icons'
import Images from '../assets/Images'

let UserDetials = {
    nicname: 'RUBAN',
    firstname: 'Rajajayaruban',
    lastname: 'T',


    header_detials: {
        menus: [
            {
                id: 'header-navitm-works',
                link: '#works',
                label: 'Works',
                icon: '',
                isicon: false,
                custom_classList: []
            },
            {
                id: 'header-navitm-about',
                link: '#about',
                label: 'About',
                icon: '',
                isicon: false,
                custom_classList: []
            },
            {
                id: 'header-navitm-services',
                link: '#services',
                label: 'My Services',
                icon: '',
                isicon: false,
                custom_classList: []
            },
            {
                id: 'header-navitm-contact',
                link: '#contact',
                label: 'Get in touch',
                icon: Icons.general.get_in_touch_arrow,
                isicon: true,
                isContactBtn: true,
                custom_classList: ['header-get_in_touch-btn']
            },

        ]
    },
    landing_detials: {
        profile_img: Images.profile,
        profile_name: `Hey, I'm Ruban.`,
        profile_headline: `A Product Developer with over 4 years of experience.`,
        profile_description: `As a product developer, I focus on optimized code, user scalability, high performance, system designs, and delivering products that meet your needs.`,
        flotting_icons: [
            {
                icon: Images.tech_imgs.tool1,
                custom_classList: ['flotting-icon', 'flotting-icon-leftup']
            },
            {
                icon: Images.tech_imgs.tool2,
                custom_classList: ['flotting-icon', 'flotting-icon-leftdown']
            },
            {
                icon: Images.tech_imgs.tool3,
                custom_classList: ['flotting-icon', 'flotting-icon-rightup']
            },
            {
                icon: Images.tech_imgs.tool4,
                custom_classList: ['flotting-icon', 'flotting-icon-rightdown']
            },
        ],

        active_btn: {
            label: "See my works",
            icon: Icons.general.active_down_arrow,
            link: "#works"
        }
    },
    works: {
        title: "My Selected Works",
        id: "works",
        works: [
            {
                isleft: true,
                banner: Images.works_imgs.work1,
                category: 'E-commerce',
                title: "Virtual Textiles Shop",
                description: "It's a video vtream based shop, fully Automated includes payments, tracking deliveries",
                project_link: "/case-study",
                isproject_link: false,
                isvisit_link: false,
                visit_link: "https://www.apple.com/in/app-store/",


            },
            {
                isleft: false,
                banner: Images.works_imgs.work2,
                category: 'Enterprise resource planning',
                title: "Finance ERP + Report Automated",
                description: "This product helps the customers to analyze, track supply-Chain, auto generate reports, etc..",
                project_link: "/case-study",
                isproject_link: false,
                isvisit_link: false,
                visit_link: "https://www.apple.com/in/app-store/"
            },
            {
                isleft: true,
                banner: Images.works_imgs.work3,
                category: 'Productivity',
                title: "Dynamic Portfolio",
                description: "This product helps to analytics of site vistis and more. It's a CRM based Web App for Dynamic Content Updated",
                project_link: "/case-study",
                isproject_link: false,
                isvisit_link: false,
                visit_link: "https://www.apple.com/in/app-store/"
            },
            {
                isleft: true,
                banner: Images.works_imgs.work4,
                category: 'Data Scrapping',
                title: "Business Leads Generator",
                description: "We help Entrepreneurs to get valid leads for their business based on the user's location, gender, age and more filters.",
                project_link: "/case-study",
                isproject_link: false,
                isvisit_link: false,
                visit_link: "https://www.apple.com/in/app-store/"
            },
        ]
    },
    about_detials: {
        title: "About me",
        heading: "My name is Ruban, I’m a product developer working and living in Chennai.",
        id: "about",
        user_img: Images.full_profile,
        description: "I hail from Theni, self-taught in Full-Stack development, now gainfully employed. I accelerate startup success by empowering visionary doers to build exceptional products, swiftly and brilliantly.",
        social_items: [
            {
                id: "whatsapp",
                icon: "WhatsApp",
                link: "https://www.wa.link/8w5ozi",
            },
            {
                id: "linkedIn",
                icon: "LinkedIn",
                link: "https://www.linkedin.com/in/ruban-developer-91271b265/",
            },
            {
                id: "instagram",
                icon: "Instagram",
                link: "https://www.instagram.com/ruban_developer/",
            },
            {
                id: "mail",
                icon: "Mail",
                link: "mailto:rajajayarubant@yourname.com",
            },
        ]
    },
    services: {
        title: "My Services",
        id: "services",
        services: [
            {
                icon: Icons.services.webapp,
                title: "Web apps",
                description: "I develop user-centric websites, PWA, responsive for all screens and aiming to optimize the user experience simple.",
            },
            {
                icon: Icons.services.hybridapp,
                title: "Hybrid apps",
                description: "Suggest clients to go for hybrid apps, because its adapt all OS, cost efficient, faster building, easy scalable.",
            },
            {
                icon: Icons.services.python,
                title: "AI Systems",
                description: "Help clients to solve complex problems using AI like customer clustring, optimize supply-chain, predict demands.",
            },

        ]
    },
    testimonials: {
        title: "What people say about my work.",
        testimonials: [
            {
                user_img: Images.user,
                user_name: "Suresh",
                company: 'Managing Director, VM Finance',
                review: "He really supported us, especially at the start of the pandemic. We saw great value in the solution and the responsiveness was a big part of that.",
            },
            {
                user_img: Images.user,
                user_name: "Ganesh Nadhan",
                company: 'Managing Director, YTF Textile',
                review: "We have suffered a lot in pandemic so we reached Ruban, He gave the solution “Virtual E-commerce Shop”, Customers come live video stream do shopping.",
            },
            {
                user_img: Images.user,
                user_name: "Prem kumar",
                company: 'Dream Path Agency',
                review: "Excellent Software Production Serives team – from onboarding through day-off execution – Ruban and his team were the best.",
            },
        ]
    },
    contact: {
        title: "Want to work together?",
        message: "Feel free to reach out at",
        email: "rajajayarubant@gmail.com",
        mailto: "mailto:rajajayarubant@gmail.com",
        id: "contact",
        buttons: [
            {
                id: `contact-button-whatsapp`,
                icon: Icons.general.whatsapp,
                label: 'Whatsapp',
                link: `https://www.wa.link/8w5ozi`
            },
            {
                id: `contact-button-instagram`,
                icon: Icons.general.instagram,
                label: 'Instagram',
                link: `https://www.instagram.com/business_with_ruban/`
            },
            {
                id: `contact-button-linkedin`,
                icon: Icons.general.linkedin,
                label: 'LinkedIn',
                link: `https://www.linkedin.com/in/ruban-freelancer-91271b265/`
            },
        ]
    },
    footer: {
        copyright: "© 2023 Ruban"
    }

}

export default UserDetials