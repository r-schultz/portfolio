import appleReports from '@/assets/apple_radar_thumb.jpg'
import installments from '@/assets/sq_installments-home_thumb.jpeg';
import audienceBuilder from '@/assets/rf_audience-builder_thumb.jpg';
import snapshotEmail from '@/assets/rf_snapshot-email_thumb.jpg';
import print from '@/assets/sq_print-main_thumb.jpg';
import tools from '@/assets/sq_installments-tools_thumb.jpg';

import AppleReports from './AppleReports';
import AudienceBuilder from './AudienceBuilder';
import InstallmentsTools from './InstallmentsTools';
import SnapshotEmail from './SnapshotEmail';
import SquareInstallments from './SquareInstallments';
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
  }, {
    title: 'Installments Tools',
    company: {
      name: 'Square Inc.',
      industry: 'Finance',
    },
    description: () => <InstallmentsTools />,
    image: {
      src: tools,
      alt: 'Installments internal tools'
    }
  },
  {
    title: 'Test Reporting',
    company: {
      name: 'Apple Inc.',
      industry: 'Consumer Technology',
    },
    description: () => <AppleReports />,
    image: {
      src: appleReports,
      alt: 'Apple internal reporting UI'
    }
  },
  {
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
  }].map(function (projectObject, index) {
    const proj = projectObject as Project;
    proj.id = index;

    return proj;
  });
};
