<img width=64 alt="icon" src="src/assets/app icon 256.png" style="width: 64px; float: right; margin-left: 20px;" />

## Contentful Styled Assets App

### *concept - still under development

Often when inserting images into the body of your content fields (such as our Rich Text fieldtype), content designers will want to have just a little more control over the layout. Of course, they can work with their developer team to build out a custom content type and component in their application—but that might be overkill for simple use cases.

<img alt="Styled Assets example" src="src/assets/Styled Assets - rendered example & infographic.jpg" />

The goal of the Styled Assets app is to enable your content designers to add a few CSS classes to easily enable presentational control over a Contentful image asset. This works best within an existing design system that contains simple utility classes. A popular example of this is the [TailWind CSS](https://tailwindcss.com) framework, which is entirely composed of utility classes. It's up to you.

## Benefits

- Easily add CSS classes to any inline image
- Add a link to your CSS documentation for reference
- Enjoy not having to call your devs for minor style changes to images

## Tips

- Be sure your CSS classes are available in your app for them to show. If you're using PurgeCSS to optimize your CSS payload, be sure to whitelist the ones you want, as in [this example](https://tailwindcss.com/docs/controlling-file-size).
- Ensure that your application template is rendering the classes if the field is populated. It's a basic string, so should render an example like:
`<img class="class1 class2 class3" href="[url] alt="[alt text]" />`. You can inject the classes wherever you want in your templates.
- A full URL link to your design system or external documentation will help your editors.

---

## Usage

1. Insert an image with the Styled Assets App like you would any normal asset.
<img width="500" alt="Styled Assets example" src="src/assets/Contentful - Styled Assets.jpg" style="max-width: 500px" />
2. Add space-delimited CSS classes to the field. These will be rendered exactly as typed.
The "Docs" button will launch your app's documentation in a new window. This is configured when the App is installed.
3. Check your [Contentful Preview]() to see if it has the desired effect.

---

## Installation

This project was bootstrapped with [Create Contentful App](https://github.com/contentful/create-contentful-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Creates or updates your app definition in contentful, and runs the app in development mode.
Open your app to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### Libraries to use

To make your app look and feel like Contentful use the following libraries:

- [Forma 36](https://f36.contentful.com/) – Contentful's design system
- [Contentful Field Editors](https://www.contentful.com/developers/docs/extensibility/field-editors/) – Contentful's field editor React components

## Learn More

[Read more](https://www.contentful.com/developers/docs/extensibility/app-framework/create-contentful-app/) and check out the video on how to use the CLI.

Create Contentful App uses [Create React App](https://create-react-app.dev/). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and how to further customize your app.
