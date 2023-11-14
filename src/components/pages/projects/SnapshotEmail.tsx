import { PhotoProvider, PhotoView } from 'react-photo-view';
import email from '@/assets/rf_snapshot-email.png';
import emailThumb from '@/assets/rf_snapshot-email_thumb.jpg';
import PhantomJS from '@/components/icons/PhantomJS';
import RoR from '@/components/icons/RoR';
import Sass from '@/components/icons/Sass';
import SectionHeader from '@/components/SectionHeader';
import Backbone from '@/components/icons/Backbone';

export default function SnapshotEmail() {
  return (
    <>
      <section>
        <p><strong>Snapshot Email</strong> is an on-demand email that gives advertising customers insight into
          the effectiveness of their campaigns. It uses PhantomJS to create images from the live webpage for
          sending via email (PhantomJS was a precursor to headless Chrome).
        </p>
      </section>
      <section>
        <SectionHeader title='Details' color='off-white'/>
        <figure>
          <figcaption>Screenshots</figcaption>
          <div>
            <PhotoProvider>
              <PhotoView src={email}>
                <img src={emailThumb} alt="Snapshot Email UI" height={50} />
              </PhotoView>
            </PhotoProvider>
          </div>
        </figure>
        <figure>
          <figcaption>Technology</figcaption>
          <ul className='tech-list'>
            <li><Backbone /></li>
            <li><PhantomJS /></li>
            <li><RoR /></li>
            <li><Sass /></li>
          </ul>
        </figure>
      </section>
    </>
  );
}