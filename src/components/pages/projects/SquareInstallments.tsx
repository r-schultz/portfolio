import { PhotoProvider, PhotoView } from 'react-photo-view';
import SectionHeader from "@/components/SectionHeader";
import RoR from "@/components/icons/RoR";
import Sass from "@/components/icons/Sass";
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
import Ember from '@/components/icons/Ember';

export default function SquareInstallments() {
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
        <p>Company: Square</p>
        <p>Industry: Finance</p>
        <figure>
          <figcaption>Screenshots</figcaption>
          <div>
            <PhotoProvider overlayRender={() => <div>Installments page</div>}>
              <PhotoView src={installmentsMain}>
                <img src={installmentsMainThumb} alt="Square Installments Home" height={50} />
              </PhotoView>
              <PhotoView src={installmentsOnboarding}>
                <img src={installmentsOnboardingThumb} alt="Square Installments seller onboarding" height={50} />
              </PhotoView>
              <PhotoView src={installmentsResources}>
                <img src={installmentsResourcesThumb} alt="Square Installments seller resources" height={50} />
              </PhotoView>
              <PhotoView src={installmentsPlans}>
                <img src={installmentsPlansThumb} alt="Square Installments plan selection page" height={50} />
              </PhotoView>
              <PhotoView src={installmentsFeedback}>
                <img src={installmentsFeedbackThumb} alt="Square Installments feedback" height={50} />
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
          </ul>
        </figure>
      </section>
    </>
  );
}