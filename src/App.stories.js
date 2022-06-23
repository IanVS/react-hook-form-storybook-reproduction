import App from './App';
import {userEvent, within} from '@storybook/testing-library';

// noinspection JSUnusedGlobalSymbols
export default {
    component: App,
};

export const Default = {
    render: (args) => <App {...args} />,
    play: async ({canvasElement}) => {
        await userEvent.click(within(canvasElement).getByRole('button', {name: /Submit/i}));
    },
};
