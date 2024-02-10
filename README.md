# @start-base/react-consent-manager

![npm](https://img.shields.io/npm/l/%40start-base%2Freact-consent-manager)
![npm](https://img.shields.io/npm/v/%40start-base%2Freact-consent-manager)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40start-base%2Freact-consent-manager)
![npm](https://img.shields.io/npm/dt/%40start-base/react-consent-manager)

## Introduction


JavaScript library designed to simplify the management of user consents in web applications developed with React. This package is particularly useful for complying with data protection regulations such as the General Data Protection Regulation (GDPR) in the European Union and the California Consumer Privacy Act (CCPA) in the United States. It provides developers with a flexible and easy-to-integrate solution to handle user consents for cookies, tracking scripts, and other third-party services that require user approval before activation.

With this package, developers can create customizable consent banners or dialogs that inform users about the use of cookies and trackers, allowing users to accept, reject, or select specific preferences. The library ensures that consents are properly stored and retrieved, making sure that only approved services are executed. This not only helps in enhancing user trust by respecting their privacy choices but also aids in legal compliance by documenting consents accurately.

The package offers features such as consent grouping for different categories of services (e.g., analytics, marketing), This makes this package a comprehensive solution for consent management in modern web applications built with React.
- CSS variables for theming are available for all components.
- Classnames are available for all components.
- Built-in dark mode support.

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

```bash:Terminal
    $ npm install --save @start-base/react-consent-manager
```

or

```bash:Terminal
    $ yarn add @start-base/react-consent-manager
```

Make sure to add css file to your app root file

```jsx:layout.js
import '@start-base/react-consent-manager/dist/lib/index.css';
```

## Usage

In the first place you need to wrap your app with `ConsentProvider` and pass the services you want to manage. Here's an example of how to use the `ConsentProvider`:

```jsx:ConsentProvider.js
'use client';

import { ConsentProvider as Provider } from '@start-base/react-consent-manager';

const ConsentProvider = ({ children }) => {
  return (
    <Provider
      options={{
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
                id: 'ga-external-script',
                src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`,
              },
              {
                id: 'ga-inline-code',
                code: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                `,
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
      }}
    >
      {children}
    </Provider>
  );
};

export default ConsentProvider;

```

Then you can use the `ConsentBanner` component to display a consent banner or dialog to the user. Here's an example of how to use the `ConsentBanner`:

```jsx:Banner.js
'use client';

import { ConsentBanner } from '@start-base/react-consent-manager';

import Switch from '@/components/common/FormElements/Switch';

export default function Banner() {
  return (
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
      <h5>We ask for your permission for a better experience.</h5>
      <p>
        This Website uses cookies to ensure our website works, to understand how
        you use our services, and to personalise content.
      </p>
    </ConsentBanner>
  );
}
```

Then need towrap your layout with `ConsentProvider` and put `ConsentBanner` component. Here's an example of how to use the `ConsentProvider` and `ConsentBanner` together:

```jsx:layout.js
import { Inter } from 'next/font/google';

import ConsentBanner from '@/components/ConsentBanner';
import ConsentProvider from '@/components/Providers/ConsentProvider';

import '@start-base/react-consent-manager/dist/lib/index.css';

const inter = Inter({ subsets: ['latin'], weights: '100 900' });

export default async function Layout({ children }) {
  return (
    <ConsentProvider>
      <html lang="en">
          <body className={inter.className}>
            {children}
            <ConsentBanner />
          </body>
      </html>
    </ConsentProvider>
  );
}
```

## Styling

### With CSS variables

You can use CSS variables to customize the look and feel of the components. Here's a list of all available variables:

```css:global.css
  --rcm-transparent: transparent;
  --rcm-white: #fff;
  --rcm-white-rgb: 255 255 255;
  --rcm-black: #000;
  --rcm-black-rgb: 0 0 0;
  --rcm-primary: #007bff;
  --rcm-primary-rgb: 0 123 255;
  --rcm-secondary: #73fa58;
  --rcm-secondary-rgb: 115 250 88;
```

## Demos

For live demos of these components in action, please visit our [Storybook](https://react-consent-manager.vercel.app/) demo pages.

![](og.png)
<br />

<div align="center">
<a href="https://startbase.dev/oss/react-consent-manager">Website</a> 
<span> · </span>
<a href="https://www.npmjs.com/search?q=%40start-base">Npm</a> 
<span> · </span>
<a href="https://twitter.com/start_base_dev">Twitter</a>
</div>

<br />
<div align="center">
  <sub>Developed by <a href="https://startbase.dev">Startbase</a> 🧑‍💻</sub>
</div>

<br />
