import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, Text} from '../src';
import {TextProps} from '../src/components/text/types';
import {ThemeProvider} from '@emotion/react';
import React from 'react';

const meta: Meta<TextProps> = {
  title: 'HiFly/Atomics',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  parameters: {
    docs: {iframeHeight: 600, previewSource: 'open'},
  },
  decorators: [
    Story => (
      <ThemeProvider theme={getDefaultTheme('light')}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<TextProps>;

export const VariantText: Story = {
  args: {
    variant: 'display',
    size: 'sm',
    weight: 'regular',
  },
};

export const VariantDisplay: Story = {
  args: {
    variant: 'display',
    size: '2xl',
    weight: 'regular',
  },
};
