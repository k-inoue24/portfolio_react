import Top from '../page/Top';
import Introduction from '../page/Introduction';
import Skill from '../page/Skill';
import Link from '../page/Link';

const routes = [
    { path: '/', component: Top, exact : true },
    { path: '/introduction', component: Introduction },
    { path: '/skill', component: Skill },
    { path: '/link', component: Link }
];

export default routes;