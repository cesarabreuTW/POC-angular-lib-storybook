import type { Meta, StoryFn } from '@storybook/angular';
import { ButtonComponent } from '@nebula-ui/src/components/button';

// story meta config
const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        code: `<lib-button></lib-button>`,
      },
    },
  },
};
export default meta;

// stories
type ButtonStory = StoryFn<ButtonComponent>;

export const primary: ButtonStory = (args: ButtonComponent) => {
  return {
    moduleMetadata: {
      imports: [ButtonComponent],
    },
    props: {
      ...args,
      meta,
    },
    template: `<lib-button></lib-button>`,
  };
};
