import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, Text} from '../src';
import {TextProps} from '../src/components/text/types';
import {ThemeProvider} from '@emotion/react';
import React from 'react';
import {View} from 'react-native';

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
        <View style={{flex: 1}}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<TextProps>;

export const VariantText: Story = {
  args: {
    variant: 'text',
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
