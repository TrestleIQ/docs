# Trestle Identity APIs Documentation

This repository contains the official documentation for [Trestle Identity APIs](https://trestleiq.com), built with [Mintlify](https://mintlify.com/). Trestle provides identity data services for businesses to help build and maintain great customer relationships.

## 📚 What's Inside

This documentation covers the following Trestle Identity APIs:

- **Reverse Phone API** - Look up identity information from phone numbers
- **Caller Identification API** - Identify callers in real-time
- **Smart CNAM API** - Enhanced caller name identification
- **Phone Validation API** - Validate and verify phone numbers
- **Reverse Address API** - Look up identity information from addresses
- **Real Contact API** - Verify and enrich contact information

## 🗂️ Repository Structure

```
docs/
├── docs.json                  # Mintlify configuration
├── intro.mdx                  # Documentation landing page
├── guides/                    # Getting started guides
│   ├── overview.mdx          # API overview
│   ├── authentication.mdx    # Authentication guide
│   └── faq.mdx               # Frequently asked questions
├── api-reference/            # Current API documentation
│   └── [endpoint].mdx        # Individual API endpoints
├── api-reference-archived/   # Archived API versions
└── style.css                 # Custom styling
```

## 🚀 Local Development

### Prerequisites

- **Node.js** (v14 or higher recommended)
- **npm** or **yarn**

### Setup

1. **Install the Mintlify CLI:**

   ```bash
   npm install -g mint
   ```

2. **Navigate to the repository root:**

   ```bash
   cd /path/to/docs
   ```

3. **Start the development server:**

   ```bash
   mint dev
   ```

4. **View the documentation:**

   Open your browser to [http://localhost:3000](http://localhost:3000)

The development server will automatically reload when you make changes to any documentation files.

## 📝 Making Changes

### Editing Documentation

All documentation is written in **MDX** (Markdown with JSX). To edit:

1. Locate the relevant `.mdx` file in `guides/` or `api-reference/`
2. Make your changes using standard Markdown syntax
3. Save the file - changes will appear immediately in your local preview
4. Test thoroughly before committing

### Adding New API Endpoints

1. Create a new `.mdx` file in `api-reference/` (or `api-reference-archived/` for archived versions)
2. Add the endpoint to the navigation in `docs.json` under the appropriate group
3. Follow the existing format and structure for consistency

### Updating Navigation

Edit the `navigation` section in `docs.json` to add, remove, or reorganize pages. The documentation supports versioning with "Current" and "Archived" versions.

## 🚢 Deployment

Changes are automatically deployed to production when pushed to the **default branch** (typically `main`).

### Deployment Process

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Update documentation"
   ```

2. **Push to the default branch:**
   ```bash
   git push origin main
   ```

3. **Automatic deployment:**
   - GitHub integration automatically triggers a build
   - Changes are live within minutes
   - No manual deployment steps required

> **Note:** Ensure the Mintlify GitHub app is installed and configured for your repository. Check your [Mintlify dashboard](https://dashboard.mintlify.com/settings/organization/github-app) for integration status.

## 🛠️ Troubleshooting

### Common Issues

**Development server won't start:**
- Update the Mintlify CLI: `mint update`
- Verify you're in the correct directory (where `docs.json` is located)
- Check that Node.js is installed: `node --version`

**Page shows 404 error:**
- Ensure the page is listed in `docs.json` navigation
- Verify the file path matches the navigation entry
- Check that the `.mdx` file exists in the correct location

**Changes not appearing:**
- Hard refresh your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Restart the development server
- Clear your browser cache

**Styling issues:**
- Check `style.css` for custom styles
- Verify `docs.json` styling configuration
- Review the [Mintlify styling docs](https://mintlify.com/docs/settings/global)

## 📖 Resources

- **[Trestle Website](https://trestleiq.com)** - Learn more about Trestle Identity
- **[Mintlify Documentation](https://mintlify.com/docs)** - Complete Mintlify guide
- **[MDX Documentation](https://mdxjs.com/)** - Learn about MDX syntax
- **[Mintlify Components](https://mintlify.com/docs/content/components/accordions)** - Available UI components

## 🤝 Contributing

We welcome contributions to improve our documentation! To contribute:

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/improve-auth-docs`
3. **Make your changes** and test locally
4. **Commit with clear messages:** `git commit -m "Add code examples to authentication guide"`
5. **Push to your fork:** `git push origin feature/improve-auth-docs`
6. **Open a Pull Request** with a description of your changes

### Style Guidelines

- Use clear, concise language
- Include code examples where applicable
- Follow existing formatting and structure
- Test all links and code snippets
- Keep line lengths reasonable for readability

## 📄 License

See [LICENSE](LICENSE) file for details.

## 💬 Support

For questions or issues with the Trestle Identity APIs:

- **Documentation Issues:** Open an issue in this repository
- **API Support:** Contact Trestle support through the [Developer Portal](https://trestleiq.com)
- **General Questions:** Check the [FAQ](/guides/faq) section

---

**Built with ❤️ using [Mintlify](https://mintlify.com)**
