import { PhotoProvider, PhotoView } from 'react-photo-view';
import SectionHeader from "@/components/SectionHeader";
import RoR from "@/components/icons/RoR";
import Sass from "@/components/icons/Sass";
import printMain from '@/assets/sq_print-main.jpg';
import printMainThumb from '@/assets/sq_print-main_thumb.jpg';
import printAddress from '@/assets/sq_print-address.jpg';
import printAddressThumb from '@/assets/sq_print-address_thumb.jpg';
import Ember from '@/components/icons/Ember';
import Figma from '@/components/icons/Figma';

export default function SquarePrint() {
  return (
    <>
      <section>
        <p>Our team was tasked with automating ordering of print materials sellers received upon signing up for&nbsp;
          <strong>Square Installments</strong>. Working with an outside vendor, we designed an API and a seller-facing
          site.
        </p>
        <p>
          I was the tech lead for this project, designing the API that was implemented by the vendor, as well as our in-house
          API to communicate with theirs. I also designed and implemented the seller-facing site to place orders and validate
          address information.
        </p>
      </section>
      <section>
        <SectionHeader title='Details' color='off-white'/>
        <figure>
          <figcaption>Screenshots</figcaption>
          <div>
            <PhotoProvider overlayRender={() => <div>Installments page</div>}>
              <PhotoView src={printMain}>
                <img src={printMainThumb} alt="UI for ordering print materials" height={50} />
              </PhotoView>
              <PhotoView src={printAddress}>
                <img src={printAddressThumb} alt="Confirming address for ordering print materials" height={50} />
              </PhotoView>
            </PhotoProvider>
          </div>
        </figure>
        <figure>
          <figcaption>Technology</figcaption>
          <ul className='tech-list'>
            <li><Ember /></li>
            <li><RoR /></li>
            <li><Sass /></li>
            <li><Figma /></li>
          </ul>
        </figure>
      </section>
    </>
  );
}