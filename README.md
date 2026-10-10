# Photography Resources

created by [Ryan Burgess](https://instagram.com/ryan.burgess)

A personal collection of photography resources to learn from and return to. I'm building this for myself and sharing it in case it's useful to others.

This list is also available on [my website](https://www.ryanburgess.com/resources/photography).

## Resources

### Courses

- [Annie Leibovitz Teaches Photography](<https://www.masterclass.com/classes/annie-leibovitz-teaches-photography>) — A MasterClass course on portraiture, developing concepts, working with subjects, natural light, and post-production.
- [Jimmy Chin Teaches Adventure Photography](<https://www.masterclass.com/classes/jimmy-chin-teaches-adventure-photography>) — A MasterClass course on planning, capturing, and editing adventure photography in demanding environments.

### Books

- [Find Your Frame](<https://www.amazon.com/dp/071128363X/?tag=frontendhappy-20>) — Useful for developing a personal way of seeing, composing, and anticipating moments on the street.
- [Light: Science & Magic](<https://www.routledge.com/Light--Science--Magic-An-Introduction-to-Photographic-Lighting/Hunter-Biver-Fuqua-Reid/p/book/9780367860271>) — A practical guide to understanding how light behaves and using it intentionally, with examples for solving photographic lighting challenges.
- [Magnum Contact Sheets](<https://www.thamesandhudson.com/products/magnum-contact-sheets>) — A look at the frames behind iconic Magnum photographs, revealing how photographers work a scene and select their final images.
- [The Creative Act: A Way of Being — Rick Rubin](<https://sites.prh.com/thecreativeact>) — An excellent book with so many insights into creativity. While it is not a photography book, its ideas apply to photography and building a creative life.
- [The Meaning in the Making — Sean Tucker](<https://www.seantucker.photography/the-meaning-in-the-making>) — Explores why we create and how to build a meaningful creative practice, with ideas that reach beyond photography.
- [The Photographer’s Eye — Michael Freeman](<https://www.hachette.co.uk/titles/michael-freeman-14/the-photographers-eye-definitive-edition/9781840918878/>) — Useful for developing an eye for composition and organizing the visual elements of a scene into stronger photographs.
- [Think Like a Street Photographer](<https://www.amazon.com/dp/178627728X/?tag=frontendhappy-20>) — Useful for developing a more observant, patient, and playful approach to street photography.
- [Understanding Color in Photography](<https://www.amazon.com/dp/0770433111/?tag=frontendhappy-20>) — Useful for thinking intentionally about color, composition, and exposure when creating vivid photographs.

### Photo books

- [Fred Herzog: Modern Color](<https://www.amazon.com/dp/3775741814/?tag=frontendhappy-20>) — A vivid survey of Fred Herzog’s pioneering color street photography and his distinctive view of mid-century Vancouver.
- [Saul Leiter: The Centennial Retrospective](<https://www.amazon.com/dp/050054557X/?tag=frontendhappy-20>) — A wide-ranging retrospective of Saul Leiter’s color, black-and-white, fashion, and painted work.
- [The Defenders: Heroes of the Fight for Global Human Rights](<https://www.amazon.com/dp/B0CM6548LD/?tag=frontendhappy-20>) — Platon’s powerful portraits and photo essays document people fighting for human rights around the world.
- [Through the Glass](<https://dawn-eagleton.myshopify.com/products/through-the-glass-book>) — Dawn Eagleton’s candid street portraits use windows, reflections, and layers to find intimate moments in everyday life.
- [Vivian Maier: The Color Work](<https://www.amazon.com/dp/0062795570/?tag=frontendhappy-20>) — A revealing collection of Vivian Maier’s color photographs that expands the familiar view of her street photography.

### Videos

- [Abstract: The Art of Design \| Platon: Photography](<https://www.youtube.com/watch?v=BDpqt-haLLM>) — A full episode following Platon’s portrait practice and his focus on simplicity, connection, and storytelling.
- [Finding Vivian Maier \(2013\)](<https://findingvivianmaier.com/>) — A documentary exploring Vivian Maier’s life and the discovery of her extensive photographic archive.
- [Making Candid Portraits in Street Photography \(feat. Dawn Eagleton\)](<https://www.youtube.com/watch?v=qcXt3b6Xvr8>) — A conversation with Dawn Eagleton about creating candid street portraits and capturing authentic, unguarded moments.
- [Tales by Light](<https://www.netflix.com/title/80133187>) — This Netflix documentary series follows photographers and filmmakers as they travel the world, capturing indelible images of people, places, creatures, and cultures.
- [Walkie Talkie — Paulie B](<https://www.youtube.com/playlist?list=PLEZD_EqdEEVK9xlpkr7Vxs_gz9FHCCEbq>) — A video series following street photographers on photo walks, sharing conversations about their approach, process, and ways of seeing.

### Podcasts

- [The Candid Frame](<https://www.ibarionex.net/thecandidframe>) — Ibarionex Perello’s conversations with photographers about their creative lives, personal journeys, and approaches to making images.
- [The Creative Thread](<https://open.spotify.com/show/033js3qoXvzv6DeXTiti9h>) — Hosted by photographer Meg Loeks, The Creative Thread is a podcast about art, process, and the stories behind the work.
- [The PetaPixel Podcast](<https://petapixel.com/podcast/>) — A weekly panel discussion of photography news and gear from the PetaPixel team.

### Articles

- [PetaPixel](<https://petapixel.com/>) — A great photography news and review site for keeping up with new gear and the industry.

### Tools

- [PhotoPills](<https://www.photopills.com/>) — A photography planning app for predicting the position of the Sun, Moon, and Milky Way, scouting locations, and calculating technical details before a shoot.
- [Stunna Photo Tools](<https://stunna-app.com/tools>) — Free browser photo filters, photo booth frames and a photo strip maker for trying film and digicam looks on existing photos. Images are processed locally; no account or watermark, with 20 MB inputs and exports up to 3000 px. Owner-submitted; the site also promotes a separate mobile AI editor with optional paid Pro access.


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
