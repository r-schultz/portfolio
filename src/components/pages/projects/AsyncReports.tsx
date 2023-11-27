import SectionHeader from "@/components/SectionHeader";
import asyncReport from '@/assets/sq_async.png';
import asyncReportThumb from '@/assets/sq_async_thumb.jpg';
import asyncEmail from '@/assets/sq_async-email.png';
import asyncEmailThumb from '@/assets/sq_async-email_thumb.jpg';
import ProjectImages from './ProjectImages';
import RoR from "@/components/icons/RoR";
import AWS from "@/components/icons/AWS";

export default function SalesTrends() {
  const images = [{
    src: asyncReport,
    thumb: asyncReportThumb,
    alt: 'Starting a new async report from the UI',
    caption: 'Users can request a new async download and will get progress updates in the UI'
  }, {
    src: asyncEmail,
    thumb: asyncEmailThumb,
    alt: 'Report download email',
    caption: 'Users receive an email when the download is complete'
  }];

  return (
    <>
      <section>
        <p>
          <strong>Async Reports</strong> was born of a hackathon project to help upmarket sellers with large data downloads. By queueing up background jobs, we give time back to sellers and notify them when their download is ready. I designed the system and implemented it with my team.
        </p>
        <p>
          Utilizing cloud resources like AWS S3 and Lambda, we are able to split jobs into multiple parts, create a zip archive, and email the results when ready. We're able to handle CSVs with millions of rows efficiently.
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