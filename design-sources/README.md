# Design sources — NOT deployed

Original high-resolution images kept for regenerating derivatives. These live
outside `public/` deliberately: they were ~12 MB of unreferenced files being
shipped to every visitor's CDN edge.

The optimised WebP versions actually used by the site are in
`public/assets/{team,projects,societies,locations,stock}/`.

`logo-master.png` is the source for `public/assets/logo.webp`,
`icon-192.png`, `icon-512.png` and `og-image.jpg`. Regenerate from this file if
the logo ever changes.
