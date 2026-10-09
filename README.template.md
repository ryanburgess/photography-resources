# Photography Resources

created by [Ryan Burgess](https://instagram.com/ryan.burgess)

A personal collection of photography resources to learn from and return to. I'm building this for myself and sharing it in case it's useful to others.

This list is also available on [my website](https://www.ryanburgess.com/resources/photography).

## Resources

<!-- RESOURCE_LIST -->

## Add a resource

Requires Node.js 22 or newer. No external dependencies are needed.

```sh
git clone https://github.com/ryanburgess/photography-resources.git
cd photography-resources
npm run add
```

Choose a category from the numbered menu, then enter the title, URL, and optional notes. You can also supply flags:

```sh
npm run add -- --category books --title "Resource title" --url "https://example.com" --notes "Why this helped me."
```

Category, title, and URL are required. The command updates `resources.json` and regenerates this README. Review your changes, then commit them on a branch and open a pull request. Additions appear in the approved collection after review and merge.

## Contributing

Explain what made the resource useful to you. Mention paid access and disclose any connection you have to it. Suggested resources are welcome; this remains a personally curated collection. Notes from contributors should not claim to be Ryan's firsthand experience.

Add resources to `resources.json`, rather than editing the generated list in this README. `npm run add` updates both automatically; after manual JSON edits, run `npm run generate`. Only categories with entries appear under Resources.

Run `npm run check` before submitting. To edit introductory text, change `README.template.md` and run `npm run generate`; the README is generated.

## Data and website integration

`resources.json` is the source of truth. `categories.json` defines stable category IDs and labels for both the CLI and the planned website dropdown. Each resource has `id`, `category`, `title`, `url`, and optional `notes`.

URLs must use HTTP or HTTPS without credentials. Duplicate detection uses the URL parser's normalized form (including hostname casing and default ports). Path case, query parameters, fragments, and non-root trailing slashes remain meaningful and are preserved.

The React interface and Netlify submission function will live in the website repository. They are not implemented here yet. See [the implementation plan](IMPLEMENTATION-PLAN.md) for the proposed PR approval and publishing flow.
