# Directory Overview

This directory contains the source files for the Trestle Identity APIs documentation website. The documentation is built using [Mintlify](https://mintlify.com/), a static site generator for documentation.

# Key Files

*   `docs.json`: The main configuration file for the Mintlify project. It defines the navigation structure, theme, colors, and other settings for the documentation website.
*   `intro.mdx`: The landing page of the documentation.
*   `api-reference/`: This directory contains the API reference documentation in MDX format. Each file corresponds to a specific API endpoint.
*   `api-reference-archived/`: This directory contains archived API reference documentation.
*   `guides/`: This directory contains guides for using the APIs, such as authentication and FAQs.
*   `style.css`: Custom CSS for the documentation website.

# Usage

This directory is used to build and maintain the Trestle Identity APIs documentation website.

## Local Development

To run the documentation website locally for development, you need to have the Mintlify CLI installed.

1.  **Install Mintlify CLI:**
    ```bash
    npm i -g mint
    ```

2.  **Run the development server:**
    ```bash
    mint dev
    ```
    This will start a local development server at `http://localhost:3000`.

## Publishing Changes

Changes are deployed to production automatically after pushing to the default branch of the GitHub repository.
