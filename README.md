# Y Axis Tuition Centre – Website

Static, responsive website for **Y Axis Tuition Centre**, Alagar Kovil Road, Melur, Tamil Nadu.
Plain HTML, CSS and JavaScript – no build step, no dependencies.

## Project structure

```
index.html          Home
about.html          About Us (includes "A Message from Our Founder")
programmes.html     Academic Programmes and FAQ
gallery.html        Gallery (placeholder tiles + lightbox)
contact.html        Contact details and quick message form
enquiry.html        Admission enquiry form
thank-you.html      Shown after a successful form submission
404.html            Custom "page not found" page
css/style.css       All styling and responsive rules
js/main.js          Mobile menu, scroll effects, gallery, form handling
assets/images/      Logo and founder photo
assets/icons/       Favicon and Apple touch icon
netlify.toml        Netlify headers / publish settings
robots.txt, sitemap.xml
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

then visit http://localhost:8000. (Online form submission only works once deployed on Netlify; locally the form shows a WhatsApp fallback message.)

## Deploy: GitHub + Netlify

1. Create a new GitHub repository and upload **all files in this folder** (the files must be at the repository root).
2. In Netlify: **Add new site → Import an existing project → GitHub**, choose the repository.
3. Build command: *leave empty*. Publish directory: `.` (already set in `netlify.toml`). Click **Deploy**.
4. **Custom domain:** Site configuration → Domain management → *Add a domain* → `yaxistuition.com`. Follow Netlify's DNS instructions at your domain registrar (either use Netlify DNS, or add the records Netlify shows). Set `www.yaxistuition.com` as the primary domain and let `yaxistuition.com` redirect to it. HTTPS is enabled automatically.

## Admission enquiry form

Both forms use **Netlify Forms** (`data-netlify="true"`), with a honeypot field for spam protection.
After the first deploy, open Netlify → **Forms** to see the `enquiry` and `contact` forms and their submissions.
To get an email for each submission: Forms → Form notifications → *Add notification → Email*.
The **WhatsApp Enquiry** button sends the entered details to +91 78455 92859 via WhatsApp.

## Editing content

* Text: edit the relevant `.html` file.
* Colours, fonts, spacing, responsive rules: `css/style.css` (colours are variables at the top, in `:root`).
* Gallery: tiles in `gallery.html` are placeholders; replace them with real photos placed in `assets/images/` when available.
* Founder details appear in `about.html` and in the structured data inside `index.html`.
