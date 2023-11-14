import { PhotoProvider, PhotoView } from 'react-photo-view';
import audienceBuilder from '@/assets/rf_audience-builder.png';
import audienceBuilderThumb from '@/assets/rf_audience-builder_thumb.jpg';
import audienceBuilder2 from '@/assets/rf_audience-builder-2.png';
import audienceBuilderThumb2 from '@/assets/rf_audience-builder-2_thumb.jpg';
import Backbone from '@/components/icons/Backbone';
import RoR from '@/components/icons/RoR';
import Sass from '@/components/icons/Sass';
import SectionHeader from '@/components/SectionHeader';

export default function AudienceBuilder() {
  return (
    <>
      <section>
        <p>
          <strong>Audience Builder</strong> visualizes complex logic for targeting people in advertising campaigns.
          It was designed to aid project managers in developing advanced targeting strategies for clients.
        </p>
      </section>
      <section>
        <SectionHeader title='Details' color='off-white'/>
        <figure>
          <figcaption>Screenshots</figcaption>
          <div>
            <PhotoProvider>
              <PhotoView src={audienceBuilder}>
                <img src={audienceBuilderThumb} alt="Audience Builder UI" height={50} />
              </PhotoView>
              <PhotoView src={audienceBuilder2}>
                <img src={audienceBuilderThumb2} alt="Audience Builder UI with Audience Reach" height={50} />
              </PhotoView>
            </PhotoProvider>
          </div>
        </figure>
        <figure>
          <figcaption>Technology</figcaption>
          <ul className='tech-list'>
            <li><Backbone /></li>
            <li><RoR /></li>
            <li><Sass /></li>
          </ul>
        </figure>
      </section>
    </>
  );
}