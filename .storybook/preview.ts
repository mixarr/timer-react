import type { Preview } from "@storybook/react";

import "../src/app/index.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const globalTypes = {
  scheme: {
    name: "Scheme",
    description: "Desc",
    defaultValue: "",
    toolbar: {
      icon: "mirror",
      items: ["light", "dark", "system"],
      dynamicTitle: true,
    },
  },
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", right: "🇺🇸", title: "English" },
        { value: "ru", right: "🇷🇺", title: "Russia" },
      ],
      showName: true,
    },
  },
};
