import './About.scss';
import AppInfo from '../config/app';
import LinkedInLogo from '../assets/linkedIn.png';
import GithubLogo from '../assets/github.png';

export default function About() {
  return (
    <section className={'about-container'}>
      <p className={'contact'}>
        <span>Ryan Schultz</span>
        <a href={AppInfo.linkedIn} rel="noreferrer" target="_blank">
          <img src={LinkedInLogo} alt="LinkedIn" width={25} />
        </a>
        <a href={AppInfo.github} rel="noreferrer" target="_blank">
          <img src={GithubLogo} alt="Github" width={25} />
        </a>
      </p>
      <p className='caption'>
        <span>A curated collection of past work</span>
        <span></span>
      </p>
    </section>
  );
}
