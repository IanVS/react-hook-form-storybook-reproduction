import App from './reacthookform';
import {userEvent, within} from '@storybook/testing-library';
import {expect} from '@storybook/jest';

export default {
    component: App,
    title: 'react-hook-form'
};

export const MissingFirstName = {
    render: (args) => <App {...args} />,
    play: async ({canvasElement}) => {
        // Uncomment the line below to "fix" the problem
        // await new Promise((r) => setTimeout(r, 100));
        const {getByRole, findByText} = within(canvasElement)
        await userEvent.click(getByRole('button', {name: /Submit/i}));
        await expect(await findByText('First name is required')).toBeInTheDocument()
    },
};