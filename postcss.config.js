// postcss.config.js
import cssnano from "cssnano";
import nested from "postcss-nested";
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    nested(),
    tailwindcss(),
    autoprefixer(),
    ...(process.env.ELEVENTY_ENV === "production"
      ? [
          cssnano({
            preset: [
              "default",
              {
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          }),
        ]
      : []),
  ],
};
