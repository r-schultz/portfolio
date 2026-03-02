import SectionHeader from "@/components/SectionHeader";
import React from '@/components/icons/React';
import Sass from "@/components/icons/Sass";
import Node from "@/components/icons/Node";
import salesTrends from '@/assets/sq_sales-trends.png';
import salesTrendsThumb from '@/assets/sq_sales-trends_thumb.jpg';
import salesSummary from '@/assets/sq_sales-summary.png';
import salesSummaryThumb from '@/assets/sq_sales-summary_thumb.jpg';
import drilldown from '@/assets/sq_drilldown.png';
import drilldownThumb from '@/assets/sq_drilldown_thumb.jpg';
import ProjectImages from './ProjectImages';

export default function ReportingUI() {
  const images = [{
    src: salesTrends,
    thumb: salesTrendsThumb,
    alt: 'Sales Trends Report in Square Dashboard',
    caption: 'Sales Trends — historical merchant sales data, one of the first reports in the app'
  }, {
    src: salesSummary,
    thumb: salesSummaryThumb,
    alt: 'Redesigned Sales Summary report',
    caption: 'Sales Summary — redesigned report with multiple group and filter views'
  }, {
    src: drilldown,
    thumb: drilldownThumb,
    alt: 'Transaction Drilldown feature',
    caption: 'Transaction Drilldown — click any summary row to see the individual transactions behind it'
  }];

  return (
    <>
      <section>
        <p>
          <strong>Square Reporting UI</strong> is a full-featured reporting MFE I built from scratch in November 2022.
        </p>
        <p>
          The app serves React code into Square's dashboard via a micro front-end (MFE) using the single-spa framework.
        </p>
        <p>
          The app also serves the new Sales Summary report, including multiple group and filter views. 
          The <strong>Transaction Drilldown</strong> feature lets sellers click through any summary row to see the individual transactions behind that total with inline filtering and sorting, plus a simplified print view (after we discovered users often print our reports).
        </p>
        <p>
          Beyond features, I led the Cypress-to-Playwright migration with parallel test sharding to cut CI time, configured Sentry error tracking with source map uploads, and maintained the full build and deploy pipeline from day one.
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
            <li><Node /></li>
            <li><React /></li>
            <li><Sass /></li>
          </ul>
        </figure>
      </section>
    </>
  );
}
