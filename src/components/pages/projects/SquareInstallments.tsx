import SectionHeader from "@/components/SectionHeader";
import RoR from "@/components/icons/RoR";
import Sass from "@/components/icons/Sass";
import Ember from '@/components/icons/Ember';
import installmentsMain from '@/assets/sq_installments-home.jpg';
import installmentsMainThumb from '@/assets/sq_installments-home_thumb.jpeg';
import installmentsOnboarding from '@/assets/sq_installments-onboarding.jpg'
import installmentsOnboardingThumb from '@/assets/sq_installments-onboarding_thumb.jpg'
import installmentsResources from '@/assets/sq_installments-resources.jpg'
import installmentsResourcesThumb from '@/assets/sq_installments-resources_thumb.jpg'
import installmentsPlans from '@/assets/sq_installments-plans.jpg'
import installmentsPlansThumb from '@/assets/sq_installments-plans_thumb.jpg'
import installmentsFeedback from '@/assets/sq_installments-fb.jpg'
import installmentsFeedbackThumb from '@/assets/sq_installments-fb_thumb.jpg'
import ProjectImages from './ProjectImages';

export default function SquareInstallments() {
  const images = [{
    src: installmentsMain,
    thumb: installmentsMainThumb,
    alt: 'Square Installments Home',
    caption: 'Homepage for customers to apply for payment plans at a particular merchant'
  }, {
    src: installmentsOnboarding,
    thumb: installmentsOnboardingThumb,
    alt: 'Square Installments seller onboarding',
    caption: 'Onboarding flow for sellers new to Installments included video and text resources'
  }, {
    src: installmentsResources,
    thumb: installmentsResourcesThumb,
    alt: 'Square Installments seller resources',
    caption: 'Sellers in the Installments program could use these resources to promote the program in-store or on their own website'
  }, {
    src: installmentsPlans,
    thumb: installmentsPlansThumb,
    alt: 'Square Installments plan selection page',
    caption: 'Sellers could choose from several plans to offer their customers'
  }, {
    src: installmentsFeedback,
    thumb: installmentsFeedbackThumb,
    alt: 'Square Installments feedback',
    caption: 'Feedback screen for customers using Installments'
  }];

  return (
    <>
      <section>
        <p><strong>Square Installments</strong> was a consumer-facing product of Square Capital that offered financing
        for purchases at Square sellers. Customers could finance their purchase in-store, when paying for an invoice,
        or when checking out of any online store.
        </p>
        <p>
          Along with developing the front-end and back-end applications for loan applicants, I also worked on seller-facing resources
          including an embeddable banner, onboarding materials, and rate plan selection pages.
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
            <li><Ember /></li>
            <li><RoR /></li>
            <li><Sass /></li>
          </ul>
        </figure>
      </section>
    </>
  );
}