import appleRadar from '@/assets/apple_radar.png';
import appleRadarThumb from '@/assets/apple_radar_thumb.jpg';
import appleRadarTimeline from '@/assets/apple_radar-timeline.png';
import appleRadarTimelineThumb from '@/assets/apple_radar-timeline_thumb.jpg';
import Backbone from '@/components/icons/Backbone';
import Sass from '@/components/icons/Sass';
import SectionHeader from '@/components/SectionHeader';
import ProjectImages from './ProjectImages';
import PHP from '@/components/icons/PHP';
import RoR from '@/components/icons/RoR';

export default function AppleReports() {
  const images = [{
    src: appleRadar,
    thumb: appleRadarThumb,
    alt: 'Radar Report UI',
    caption: 'This report included graphs and controls for users to keep track of bug resolution'
  }, {
    src: appleRadarTimeline,
    thumb: appleRadarTimelineThumb,
    alt: 'Radar Timeline Report UI',
    caption: 'This report combined bug and project tracking'
  }];

  return (
    <>
      <section>
        <p>
          Apple internal test teams need web tools to track bugs and test data across projects. I introduced
          Backbone & Marionette to help modernize the frontend code, created a CI pipeline, and improved testing,
          deploy, and code review processes.
        </p>
      </section>
      <section>
        <SectionHeader title='Details' color='off-white'/>
        <figure>
          <figcaption>Screenshots</figcaption>
          <div>
            <ProjectImages images={images} />
          </div>
        </figure>
        <figure>
          <figcaption>Technology</figcaption>
          <ul className='tech-list'>
            <li><Backbone /></li>
            <li><RoR /></li>
            <li><PHP /></li>
            <li><Sass /></li>
          </ul>
        </figure>
      </section>
    </>
  );
}