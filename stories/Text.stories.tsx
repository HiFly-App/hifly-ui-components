import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextProps } from "../src";

const meta: Meta<TextProps> = {
  title: "HiFly/Atomics",
  component: Text,
  parameters: {
    docs: { iframeHeight: 600, previewSource: "open" },
  },
};

export default meta;

type Story = StoryObj<TextProps>;

export const DefaultText: Story = {
  args: {
    label: "Hello World",
  },
};

export const NormalText: Story = {
  args: {
    label: "NormalText",
  },
};
