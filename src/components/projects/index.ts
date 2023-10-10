import salesTrends from '../../assets/sales-trends.png';
import audienceBuilder from '../../assets/rf_audience-builder_thumb.jpg';
import InstoreInvoice from './InstoreInvoice';
import AudienceBuilder from './AudienceBuilder';

interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: number;
  title: string;
  description?: JSX.Element;
  images: ProjectImage[];
}


export default function projects(): Project[] {
  return [{
    id: 1,
    title: 'Financing App',
    description: InstoreInvoice(),
    images: [{
      src: salesTrends,
      alt: 'Sales Trends'
    }]
  }, {
    id: 2,
    title: 'Audience Builder',
    description: AudienceBuilder(),
    images: [{
      src: audienceBuilder,
      alt: 'Audience Builder application for managing advertising campaigns'
    }]
  }];
};
