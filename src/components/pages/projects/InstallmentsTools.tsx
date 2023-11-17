import SectionHeader from "@/components/SectionHeader";
import RoR from "@/components/icons/RoR";
import Sass from "@/components/icons/Sass";
import Figma from '@/components/icons/Figma';
import React from '@/components/icons/React';
import MaterialUI from "@/components/icons/MaterialUI";
import toolsMain from '@/assets/sq_installments-tools.png';
import toolsMainThumb from '@/assets/sq_installments-tools_thumb.jpg';
import toolsEdit from '@/assets/sq_installments-tools-edit.png';
import toolsEditThumb from '@/assets/sq_installments-tools-edit_thumb.jpg';
import toolsDesign from '@/assets/sq_installments-tools-design.png';
import toolsDesignThumb from '@/assets/sq_installments-tools-design_thumb.jpg';
import toolsDesign2 from '@/assets/sq_installments-tools-design2.png';
import toolsDesignThumb2 from '@/assets/sq_installments-tools-design2_thumb.jpg';
import ProjectImages from './ProjectImages';

export default function InstallmentsTools() {
  const images = [{
    src: toolsMain,
    thumb: toolsMainThumb,
    alt: 'Internal view for merchants in program',
    caption: 'Merchant view showed status in various Installment programs, program history, and other details'
  }, {
    src: toolsEdit,
    thumb: toolsEditThumb,
    alt: 'Editing merchant program',
    caption: 'Editing merchant program details and enrollment could be handled by account managers directly'
  }, {
    src: toolsDesign,
    thumb: toolsDesignThumb,
    alt: 'Design sketch of Edit view',
    caption: 'Early Figma design of edit view'
  }, {
    src: toolsDesign2,
    thumb: toolsDesignThumb2,
    alt: 'Design sketch of main view',
    caption: 'Early Figma design of main merchant view'
  }];

  return (
    <>
      <section>
        <p>
          Once <strong>Square Installments</strong> grew in complexity, account managers needed to enroll sellers
          and adjust settings without involving engineering.
        </p>
        <p>
          After putting some sketches together in Figma, I ran them by the account managers for feedback, eventually
          completing the entire project as a first experiment with React (at the time, Square was almost exclusively
          using Ember for our frontends).
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
            <li><React /></li>
            <li><MaterialUI /></li>
            <li><RoR /></li>
            <li><Sass /></li>
            <li><Figma /></li>
          </ul>
        </figure>
      </section>
    </>
  );
}