import React from 'react';

import ConsentBanner from './ConsentBanner';
import ConsentProvider from './../../Provider';

import { Switch } from '@start-base/react-form-elements';

const Template = () => {
  const consentOptions = {
    services: [
      {
        id: 'necessary',
        name: 'Necessary',
        description:
          'These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website or make use of our services.',
        scripts: [],
        mandatory: true,
      },
      {
        id: 'analytics',
        name: 'Analytics',
        description:
          'This service involves the use of cookies to collect and analyze data related to user interactions with our website. The information gathered includes, but is not limited to, page views, navigation paths, and time spent on specific pages. Analytics cookies help us understand how users engage with our content, allowing us to improve and optimize the performance and user experience of our website.',
        scripts: [
          {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-2W4H5YQ3Z6',
            async: true,
          },
          {
            src: '/scripts/google-analytics.js',
            async: true,
          },
        ],
        mandatory: false,
      },
      {
        id: 'marketing',
        name: 'Marketing',
        description:
          'The Marketing service utilizes cookies to tailor and deliver content or advertisements that may be of interest to users. These cookies track user preferences and behavior across the website to provide personalized marketing materials. The aim is to enhance the relevance of promotional content and offers, making the overall online experience more engaging for the user. This service is designed to support our marketing efforts and promote products or services that align with the individual preferences and interests of our audience.',
        scripts: [],
        mandatory: false,
      },
    ],
  };

  return (
    <>
      <ConsentProvider options={consentOptions}>
        <ConsentBanner
          switchComponent={Switch}
          decline={{ hidden: false, label: 'Reject Optionals' }}
          approve={{ hidden: false, label: 'Accept' }}
          settings={{
            modal: {
              title: 'Privacy Preference Center',
              description:
                'This Website uses cookies to ensure our website works, to understand how you use our services, and to personalise content.',
              decline: {
                hidden: false,
                label: 'Reject Optionals',
              },
              approve: { hidden: false, label: 'Save My Preferences' },
              approveAll: { hidden: false, label: 'Accept All' },
            },
          }}
        >
          <h3>We ask for your permission for a better experience.</h3>
          <p>
            This Website uses cookies to ensure our website works, to understand
            how you use our services, and to personalise content.
          </p>
        </ConsentBanner>
      </ConsentProvider>
    </>
  );
};

export const ConsentBannerComponent = Template.bind({});
ConsentBannerComponent.args = { title: 'ConsentBanner' };

const Component = {
  title: 'ConsentBanner',
  component: ConsentBannerComponent,
};

export default Component;
