import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, Button, ButtonProps} from '../../src';
import {ThemeProvider} from '@emotion/react';
import React from 'react';
import {View} from 'react-native';

const meta: Meta<ButtonProps> = {
  title: 'HiFly/Atomics/Button/Light',
  component: Button,
  args: {
    label: 'Click me',
  },
  parameters: {
    docs: {iframeHeight: 600, previewSource: 'open'},
  },

  decorators: [
    Story => (
      <ThemeProvider theme={getDefaultTheme('light')}>
        <View style={{alignSelf: 'flex-start', padding: 20}}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const PrimaryButton: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
  },
};

export const SecondaryButton: Story = {
  args: {
    variant: 'secondary',
    size: 'sm',
  },
};
