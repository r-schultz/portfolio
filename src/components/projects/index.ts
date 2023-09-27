import { type Project } from '../ProjectCard';
import salesTrends from '../../assets/sales-trends.png';
import InstoreInvoice from './InstoreInvoice';

const projects : Project[] = [{
    id: 1,
    title: 'Financing App',
    description: InstoreInvoice(),
    imageSrc: salesTrends,
    imageAlt: '',
  }, {
    id: 2,
    title: 'Project 2',
    imageSrc: salesTrends,
    imageAlt: '',
  },{
    id: 3,
    title: 'Project 3',
    imageSrc: salesTrends,
    imageAlt: '',
  },{
    id: 4,
    title: 'Project 4',
    imageSrc: salesTrends,
    imageAlt: '',
  },{
    id: 5,
    title: 'Project 5',
    imageSrc: salesTrends,
    imageAlt: '',
  },{
    id: 6,
    title: 'Project 6',
    imageSrc: salesTrends,
    imageAlt: '',
  }, {
    id: 7,
    title: 'Project 7',
    imageSrc: salesTrends,
    imageAlt: '',
  }];

  export default projects;
