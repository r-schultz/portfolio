import SectionHeader from "@/components/SectionHeader";
import Sass from "@/components/icons/Sass";
import React from '@/components/icons/React';
import Node from "@/components/icons/Node";
import salesTrends from '@/assets/sq_sales-trends.png';
import salesTrendsThumb from '@/assets/sq_sales-trends_thumb.jpg';
import ProjectImages from './ProjectImages';

export default function SalesTrends() {
  const images = [{
    src: salesTrends,
    thumb: salesTrendsThumb,
    alt: 'Sales Trends Report in Square Dashboard',
    caption: 'Sales Trends shows historical merchant sales data and is part of a micro front-end application'
  }];

  return (
    <>
      <section>
        <p>
          The <strong>Sales Trends</strong> report is one of the first MFEs (micro front-end) at Square, designed to modernize our front-end architecture and give teams more control over their user-facing code.
        </p>
        <p>
          The app is built in React and bundled using the SingleSPA framework that allows it to live inside a larger Ember application. I helped design and setup the back-end (Node.js) and front-end pieces, including supporting other teams to build new pages inside our application.
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