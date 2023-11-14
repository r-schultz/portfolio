import installments from '@/assets/sq_installments-home_thumb.jpeg';
import audienceBuilder from '@/assets/rf_audience-builder_thumb.jpg';
import snapshotEmail from '@/assets/rf_snapshot-email_thumb.jpg';
import print from '@/assets/sq_print-main_thumb.jpg';
import SquareInstallments from './SquareInstallments';
import AudienceBuilder from './AudienceBuilder';
import SnapshotEmail from './SnapshotEmail';
import SquarePrint from './SquarePrint';

interface ProjectImage {
  src: string;
  alt: string;
}

interface CompanyInfo {
  name: string;
  industry: string;
}

export interface Project {
  id: number;
  title: string;
  company: CompanyInfo;
  description: () => JSX.Element;
  image: ProjectImage;
}

export default function projects(): Project[] {
  return [{
    id: 1,
    title: 'Square Installments',
    company: {
      name: 'Square Inc.',
      industry: 'Finance',
    },
    description: () => <SquareInstallments />,
    image: {
      src: installments,
      alt: 'Square Installments preapproval website'
    }
  }, {
    id: 2,
    title: 'Installments Print Materials',
    company: {
      name: 'Square Inc.',
      industry: 'Finance',
    },
    description: () => <SquarePrint />,
    image: {
      src: print,
      alt: 'Installments print materials UI'
    }
  },
  {
    id: 3,
    title: 'Audience Builder',
    company: {
      name: 'Rocket Fuel Inc.',
      industry: 'Online Advertising',
    },
    description: () => <AudienceBuilder />,
    image: {
      src: audienceBuilder,
      alt: 'Audience Builder application for managing advertising campaigns'
    }
  }, {
    id: 4,
    title: 'Snapshot Email',
    company: {
      name: 'Rocket Fuel Inc.',
      industry: 'Online Advertising',
    },
    description: () => <SnapshotEmail />,
    image: {
      src: snapshotEmail,
      alt: 'Snapshot email for advertising stats'
    }
  }];
};
