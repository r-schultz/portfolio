import './About.scss';
import AppInfo from '@/config/app';
import LinkedInLogo from '@/assets/linkedIn.png';
import GithubLogo from '@/assets/github.png';
import SectionHeader from '@/components/SectionHeader';

export default function About() {
  return (
    <section className={'about-container'}>
      <p className={'contact'}>
        <span>Ryan Schultz</span>
        <a href={AppInfo.linkedIn} rel="noreferrer" target="_blank">
          <img src={LinkedInLogo} alt="LinkedIn" width={30} />
        </a>
        <a href={AppInfo.github} rel="noreferrer" target="_blank">
          <img src={GithubLogo} alt="Github" width={30} />
        </a>
      </p>
      <SectionHeader title='A curated collection of past work' color='white' />
    </section>
  );
}
