import SectionHeader from "@/components/SectionHeader";
import RoR from "@/components/icons/RoR";
import AWS from "@/components/icons/AWS";

export default function SalesSummaryEmail() {
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
          <p><em>Screenshots coming soon.</em></p>
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
