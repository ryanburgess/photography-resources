# Photography resources implementation plan

## Current state

The photography draft contains Markdown only. No CLI, JSON source, React UI, or submission service has been implemented.

The existing website project is `/Users/ryanb/Documents/github/ryanburgess.github.io`. It uses React 19, Vite, React Router, and Netlify. Relevant existing files:

- `src/pages/Resources.jsx`: resources landing page with guide cards.
- `public/resources.json`: authored guide content, not an external-link directory.
- `src/pages/ResourceDetail.jsx`: guide pages.
- `src/pages/ColorExposureCheatSheet.jsx`: existing color exposure guide.
- `src/pages/Contact.jsx`: existing form styles and Netlify Forms pattern.
- `src/layout/SiteLayout.jsx`: shared site layout.

## Recommended ownership

Keep a separate public `photography-resources` repository for the curated list, JSON, CLI, README generator, and validation checks. This is the repository people can star, clone, and contribute to.

Build the browsing UI and submission function in the existing website repository. Continue hosting on Netlify. Do not repurpose the website's current guide JSON as the external-link list.

## Routes and design

- `/resources`: hub for authored guides, tools, and the photography resource collection. Link to the existing `/guides/color-cheat-sheet` route; no guide migration is required.
- `/resources/photography`: approved photography links, category filter, search, and a submission form.
- Reuse SiteLayout, typography, spacing, colors, and form patterns. Register the new specific route alongside the existing `/resources/:slug` route.
- Provide accessible labels, inline validation, loading, empty, failure, and submission-success states. A successful submission says it is awaiting review and links to its PR; it does not insert the resource into the approved list.

## Shared data contract

Use `categories.json` for stable category IDs and display labels. Start with the ten categories in the draft README. The CLI, UI dropdown, and server validation must use the same category definition.

Use `resources.json` as the canonical approved list. Each record has a stable generated ID, category ID, title, URL, and optional notes. Category, title, and URL are required. Trim whitespace, enforce sensible length limits, accept only HTTP(S) URLs, reject unknown categories, and detect duplicate URLs using a documented normalization rule that preserves meaningful query parameters and path case.

Keep contributor explanations distinct from Ryan's firsthand claims. Review and edit wording before merging. Render submissions as plain text; escape Markdown when generating README content.

## CLI and GitHub repository

- `npm run add`: interactive category dropdown, title, URL, and optional notes prompts.
- Support flags for scripted use and a later import command for submissions if needed.
- Validate before writing; generate stable, readable JSON and rebuild the README from the same data.
- The CLI changes local files only. Contributors commit and submit PRs through their normal Git workflow.
- CI validates schema, category IDs, duplicate URLs, and README consistency.
- Document install, add, validate, generate, and contribution workflows.
- Inspect the original engineer-manager CLI source before implementing its equivalent. GitHub's page was accessible during planning, but its JavaScript source could not be retrieved successfully.

## Website submission to PR

1. Visitor fills category, title, URL, and optional notes. No GitHub account is required for the recommended flow.
2. React posts to a Netlify Function on the same site.
3. The function validates the payload, verifies an anti-bot challenge, applies rate limits, and checks existing approved/pending submissions for duplicates.
4. Server-side GitHub credentials scoped to the photography repository create a unique branch from the current default branch, update JSON and generated README, then open a PR. Never expose credentials in Vite/browser variables.
5. Return the PR URL only after creation succeeds. Use an idempotency key and handle retries/partial GitHub failures so a retry does not create multiple PRs.
6. Ryan reviews and edits the PR, then merges it. No submission is automatically merged or directly written to the default branch. Configure appropriate GitHub branch protection/rules where supported.

Use a GitHub App with repository-limited Contents and Pull requests write permissions, or a narrowly scoped fine-grained token for the initial setup. GitHub identity, repository provisioning, permissions, and Netlify secrets must be configured before a real end-to-end submission can work. Never fetch a submitted URL on the server merely to validate it.

Keep server destinations and file paths fixed in configuration; visitors cannot choose repositories, branches, or files. Production submission credentials should not be exposed to untrusted deploy previews. Disclose that submitted titles, URLs, and notes will be public in GitHub PRs.

## Publishing approved changes

Recommended: fetch the approved JSON and categories during the website build and bundle that snapshot. A workflow triggered by a merge to the resource repository's default branch calls a secret Netlify build hook. The new website deployment then contains approved resources. Record the source commit for traceability; fetch both files at the same commit. Fail a build on invalid/unavailable source data so the prior successful site remains live.

This avoids a separate manually maintained copy of the list in the website repository. Changes become visible after the Netlify build and deployment complete, not immediately upon PR approval. Merging is the publication gate.

Package shared validation/generation code with a versioned interface for the website function to consume. Test compatibility between the function's version and the source data; avoid duplicating category arrays in multiple repositories.

## Simpler fallback

If automatic PR credentials are undesirable, use Netlify Forms as a submission inbox and an import command that validates a selected submission and opens a PR using Ryan's authenticated GitHub CLI. This retains approval through GitHub but requires a manual import step. Automatic PR creation is the preferred implementation; the fallback is not a Netlify server limitation.

## Implementation order

1. Establish the public list repository, JSON contract, CLI, generator, and validation checks.
2. Build `/resources/photography` in the website project using the existing design; add hub links and approved-data build integration.
3. Implement and test the submission function with mocked GitHub responses, anti-spam controls, and retry handling.
4. Configure GitHub credentials, branch rules, Netlify secrets, and the merge-to-deploy build hook.
5. Verify a real test submission opens a PR, remains unpublished before merge, and appears after merge and deployment.

## Verification

Test required fields, blank-after-trimming input, unknown categories, invalid/unsafe URLs, optional notes, duplicate links, Markdown escaping, retry behavior, and GitHub failures. Run website lint/build and verify keyboard/mobile use and existing guide routes. Confirm neither browser assets nor error responses expose secrets. Check that CLI and UI produce equivalent records.

## Documentation references

- Netlify Functions: https://docs.netlify.com/build/functions/overview/
- GitHub pull request API: https://docs.github.com/en/rest/pulls/pulls#create-a-pull-request

These platform documents confirm the serverless/API approach. Account-specific configuration has not been inspected or changed.
