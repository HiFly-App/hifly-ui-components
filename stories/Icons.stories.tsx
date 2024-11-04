import {FlatList, View} from 'react-native';
import styled from '@emotion/native';
import type {Meta, StoryObj} from '@storybook/react';
import {getDefaultTheme, Icons, Typography} from '../src';
import {ThemeProvider} from '@emotion/react';
import React from 'react';

type IconKeys = keyof typeof Icons;
const keys = Object.keys(Icons) as IconKeys[];

type Controls = Partial<{
  fill: string;
  height: number;
  width: number;
  icon: IconKeys;
}>;

const meta: Meta<Controls> = {
  title: 'HiFly/Icons',
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

type Story = StoryObj<Controls>;

export const AllIcons: Story = {
  args: {
    fill: getDefaultTheme('light').colors.text.primary,
    height: 24,
    width: 24,
  },
  render: ({fill, height, width}) => (
    <FlatList
      data={keys}
      keyExtractor={item => item}
      renderItem={({item}) => {
        const Icon = Icons[item];
        return (
          <IconContainer>
            <Icon fill={fill} height={height} width={width} />
            <Typography variant="text" size="xs">
              {item}
            </Typography>
          </IconContainer>
        );
      }}
    />
  ),
};

const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: 24px;
`;
