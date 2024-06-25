import React from 'react';
import type { Preview } from '@storybook/react';
import { fontSans } from '../app/font';
import '../app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${fontSans.variable} font-sans`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
