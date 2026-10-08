# Photography Resources

created by [Ryan Burgess](https://instagram.com/ryan.burgess)

A personal collection of photography resources to learn from and return to. I'm building this for myself and sharing it in case it's useful to others.

## Resources

### Courses

- [Annie Leibovitz Teaches Photography](<https://www.masterclass.com/classes/annie-leibovitz-teaches-photography>) — A MasterClass course on portraiture, developing concepts, working with subjects, natural light, and post-production.
- [Jimmy Chin Teaches Adventure Photography](<https://www.masterclass.com/classes/jimmy-chin-teaches-adventure-photography>) — A MasterClass course on planning, capturing, and editing adventure photography in demanding environments.

### Books

- [Think Like a Street Photographer](<https://www.amazon.com/dp/178627728X/?tag=frontendhappy-20>) — Useful for developing a more observant, patient, and playful approach to street photography.
- [Understanding Color in Photography](<https://www.amazon.com/dp/0770433111/?tag=frontendhappy-20>) — Useful for thinking intentionally about color, composition, and exposure when creating vivid photographs.
- [Find Your Frame](<https://www.amazon.com/dp/071128363X/?tag=frontendhappy-20>) — Useful for developing a personal way of seeing, composing, and anticipating moments on the street.
- [The Creative Act: A Way of Being — Rick Rubin](<https://sites.prh.com/thecreativeact>) — An excellent book with so many insights into creativity. While it is not a photography book, its ideas apply to photography and building a creative life.

### Photo books

- [Through the Glass](<https://dawn-eagleton.myshopify.com/products/through-the-glass-book>) — Dawn Eagleton’s candid street portraits use windows, reflections, and layers to find intimate moments in everyday life.
- [Fred Herzog: Modern Color](<https://www.amazon.com/dp/3775741814/?tag=frontendhappy-20>) — A vivid survey of Fred Herzog’s pioneering color street photography and his distinctive view of mid-century Vancouver.
- [Vivian Maier: The Color Work](<https://www.amazon.com/dp/0062795570/?tag=frontendhappy-20>) — A revealing collection of Vivian Maier’s color photographs that expands the familiar view of her street photography.
- [Saul Leiter: The Centennial Retrospective](<https://www.amazon.com/dp/050054557X/?tag=frontendhappy-20>) — A wide-ranging retrospective of Saul Leiter’s color, black-and-white, fashion, and painted work.
- [The Defenders: Heroes of the Fight for Global Human Rights](<https://www.amazon.com/dp/B0CM6548LD/?tag=frontendhappy-20>) — Platon’s powerful portraits and photo essays document people fighting for human rights around the world.

### Videos

- [Making Candid Portraits in Street Photography \(feat. Dawn Eagleton\)](<https://www.youtube.com/watch?v=qcXt3b6Xvr8>) — A conversation with Dawn Eagleton about creating candid street portraits and capturing authentic, unguarded moments.
- [Abstract: The Art of Design \| Platon: Photography](<https://www.youtube.com/watch?v=BDpqt-haLLM>) — A full episode following Platon’s portrait practice and his focus on simplicity, connection, and storytelling.

### Podcasts

- [The Creative Thread](<https://open.spotify.com/show/033js3qoXvzv6DeXTiti9h>) — Hosted by photographer Meg Loeks, The Creative Thread is a podcast about art, process, and the stories behind the work.

### Tools

- [PhotoPills](<https://www.photopills.com/>) — A photography planning app for predicting the position of the Sun, Moon, and Milky Way, scouting locations, and calculating technical details before a shoot.


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
