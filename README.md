This is a reproduction of https://github.com/storybookjs/storybook/issues/18258.

Instructions:

- yarn install
- yarn storybook
- Check 'react-hook-form' story
- No validation error is shown. (it is if you click the button manually)

See form in `src/reacthookform.js`, and story that triggers the submission in `src/reacthookform.stories.js`

I also added a similar component and story called `form.js`, which just uses react state when the form is submitted, to show that the submit button is being clicked successfully.
