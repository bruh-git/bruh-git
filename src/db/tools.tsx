import { DiJavascript } from 'react-icons/di';
import { FaRoute, FaNodeJs, FaDocker } from 'react-icons/fa';
import {
  SiCss3,
  SiHtml5,
  SiReact,
  SiRedux,
  SiTestinglibrary,
  SiExpress,
  SiMysql,
  SiMocha,
  SiChai,
  SiJest,
  SiSequelize,
  SiHeroku,
  SiTypescript,
  SiStyledcomponents,
  SiMongodb,
  SiPython,
  SiPytest,
} from 'react-icons/si';
import { SiCypress } from 'react-icons/si';

const tools = {
  react: {
    icon: <SiReact />,
    label: 'React',
  },
  reactContextAPI: {
    icon: <SiReact />,
    label: 'Context API',
  },
  reactRouterV5: {
    icon: <FaRoute />,
    label: 'React Router v5',
  },
  reactRouterV6: {
    icon: <FaRoute />,
    label: 'React Router v6',
  },
  redux: {
    icon: <SiRedux />,
    label: 'Redux',
  },
  rtl: {
    icon: <SiTestinglibrary />,
    label: 'RTL',
  },
  cypress: {
    icon: <SiCypress />,
    label: 'Cypress',
  },
  reactIcons: {
    icon: <SiReact />,
    label: 'React Icons',
  },
  javaScript: {
    icon: <DiJavascript />,
    label: 'JavaScript',
  },
  typeScript: {
    icon: <SiTypescript />,
    label: 'TypeScript',
  },
  html: {
    icon: <SiHtml5 />,
    label: 'HTML',
  },
  css: {
    icon: <SiCss3 />,
    label: 'CSS',
  },
  styledComponents: {
    icon: <SiStyledcomponents />,
    label: 'Styled Components',
  },
  node: {
    icon: <FaNodeJs />,
    label: 'Node.js',
  },
  express: {
    icon: <SiExpress />,
    label: 'Express.js',
  },
  docker: {
    icon: <FaDocker />,
    label: 'Docker',
  },
  mySQL: {
    icon: <SiMysql />,
    label: 'MySQL',
  },
  sequelize: {
    icon: <SiSequelize />,
    label: 'Sequelize.js',
  },
  mongodb: {
    icon: <SiMongodb />,
    label: 'MongoDB',
  },
  mongoose: {
    icon: <SiMongodb />,
    label: 'Mongoose',
  },
  mocha: {
    icon: <SiMocha />,
    label: 'Mocha',
  },
  chai: {
    icon: <SiChai />,
    label: 'Chai',
  },
  jest: {
    icon: <SiJest />,
    label: 'Jest',
  },
  heroku: {
    icon: <SiHeroku />,
    label: 'Heroku',
  },
  python: {
    icon: <SiPython />,
    label: 'Python',
  },
  pytest: {
    icon: <SiPytest />,
    label: 'Pytest',
  },
};

export default tools;