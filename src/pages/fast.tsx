import { PageLayout } from '@/components';
import React from 'react';
import { fastPageData } from './pageData';

const fast = () => {
  return (
    <PageLayout page={fastPageData}>
      <p>
        The FAST team does not only focus on the open source project, but also
        works closely with our internal partners. The team works with design, to
        help designers iterate on their respective features through building
        internal components and prototyping, using the FAST technology.
      </p>
      <p>
        I helped in the early iterations on the Edge prototype app. The app
        mimics the real browser, and is used to help visual, interaction and
        motion designers see and iterate on their features before it gets
        implemented into production.
      </p>
      <p>
        The Edge app was also beneficial to creating components. For example,
        when I built the Settings pages and populated them our components, it
        helped me to see what the components would look like in the product,
        help to make any needed API adjustments and address styles making sure
        they were aligned with the design specs.
      </p>
    </PageLayout>
  );
};

export default fast;
