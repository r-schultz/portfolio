import SectionHeader from "@/components/SectionHeader";
import RoR from "@/components/icons/RoR";
import AWS from "@/components/icons/AWS";
import emailSummary from '@/assets/sq_sales-summary-email.png';
import emailSummaryThumb from '@/assets/sq_sales-summary-email_thumb.jpg';
import emailCharts from '@/assets/sq_sales-summary-email-charts.png';
import emailChartsThumb from '@/assets/sq_sales-summary-email-charts_thumb.jpg';
import ProjectImages from './ProjectImages';

export default function SalesSummaryEmail() {
  const images = [{
    src: emailSummary,
    thumb: emailSummaryThumb,
    alt: 'Sales Summary Email — header and metrics section',
    caption: 'Sales metrics — gross sales, net sales, tips, and more'
  }, {
    src: emailCharts,
    thumb: emailChartsThumb,
    alt: 'Sales Summary Email — charts section',
    caption: 'Sales charts — hourly sales and day-over-day comparison'
  }];

  return (
    <>
      <section>
        <p>
          The <strong>Sales Summary Email</strong> is a digest sent to Square sellers regularly, summarizing sales activity. I redeveloped the scheduling pipeline, added admin tooling, and implemented new features.
        </p>
        <p>
          The system dispatches sends at scale (1 mil+ per day) using Sidekiq with concurrency throttling and retry backoff to guarantee reliable delivery without overwhelming downstream services.
        </p>
        <p>
          Key technical challenges included: distributing high-volume send batches across queue workers, ensuring accurate sales data, and monitoring for issues.
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
            <li><RoR /></li>
            <li><AWS /></li>
          </ul>
        </figure>
      </section>
    </>
  );
}
