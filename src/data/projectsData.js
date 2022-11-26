import { BOOTSTRAP, CSS, HTML, JAVASCRIPT, MOBILE, PHP, REACT, REACT_NATIVE, WEB } from "./constants";

const projectsData = [
    {
        id: 1,
        image: 'mytodolistapp-screenshot.png',
        title: 'My ToDoList',
        description: 'Frontend web application | JavaScript',
        technos: [CSS, HTML, JAVASCRIPT],
        category: WEB,
        github: 'https://github.com/MarileneK/todolist.github.io',
        link: 'https://marilenek.github.io/todolist.github.io',
    },
    {
        id: 2,
        image: 'team-m-screenshot.jpeg',
        title: 'Team M',
        description: 'Frontend web application | HTML - CSS',
        technos: [CSS, HTML],
        category: WEB,
        github: 'https://github.com/MarileneK/team-m-challenge',
        link: 'https://marilenek.github.io/team-m-challenge',
    },
    {
        id: 3,
        image: 'le-bon-appart-screenshot.png',
        title: 'Le Bon Appart',
        description: 'Web application with backend | PHP',
        technos: [BOOTSTRAP, HTML, PHP],
        category: WEB,
        github: 'https://github.com/MarileneK/le-bon-appart-php',
        link: 'http://marilene-khieu.infinityfreeapp.com',
    },
    {
        id: 4,
        image: 'spa-gestion-screenshot.png',
        title: 'SPA - gestion',
        description: 'Frontend web application | React',
        technos: [CSS, HTML, JAVASCRIPT, REACT],
        category: WEB,
        github: 'https://github.com/MarileneK/spa-react',
        link: '',
    },
    {
        id: 5,
        image: 'frisbee-screenshot.png',
        title: 'FRISBEE',
        description: 'Mobile application | React Native',
        technos: [CSS, HTML, REACT_NATIVE],
        category: MOBILE,
        github: '',
        link: '',
    },
];

export default projectsData;