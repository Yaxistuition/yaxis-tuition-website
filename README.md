# Y Axis Tuition - Website

Static website for **Y Axis Tuition Centre**, Alagar Kovil Road, Melur, Madurai. Plain HTML, CSS and JavaScript. No build step, no framework.

Live: https://www.yaxistuition.com (GitHub `Yaxistuition/yaxis-tuition-website`, branch `main` -> Netlify `yaxis-tuition-website` -> GoDaddy domain).

## What is in this version
* English / Tamil switch (button "EN | தமிழ்" in the header). The choice is remembered on the next page and next visit.
* Two enquiry buttons: **Submit Enquiry** (goes to Netlify Forms, then to your email) and **Submit WhatsApp Enquiry** (opens WhatsApp with the message ready).
* Smooth scroll-linked animation, draggable WhatsApp button, new illustrations, new Founder layout, working hours Monday - Saturday.
* Full list of changes: `CHANGELOG.md`. What was tested and what was not: `TESTING-REPORT.md`.

## Folder structure
```
index.html, about.html, programmes.html, gallery.html, contact.html, enquiry.html   pages
thank-you.html, 404.html                                                              helper pages
css/style.css            all styling
js/main.js               language switch + Tamil text, menu, animation, gallery, enquiry form
js/gallery-data.js       the list of gallery photos (edit this to add photos)
assets/images/           logo.png (website copy), logo-original-4k.png (your exact logo), founder photo
assets/images/gallery/   put real gallery photos here
assets/icons/            favicon, app icon
netlify.toml, robots.txt, sitemap.xml
```

## Going live / updating
Follow `DEPLOYMENT.md` (English) or `GO-LIVE-GUIDE-TA.md` (Tamil, step by step).

## Enquiry form: how it works
* **Submit Enquiry** sends the details to Netlify Forms (form name `enquiry`). Netlify then emails you **only after** you add an email notification in the Netlify dashboard (see `DEPLOYMENT.md`, step 4). Email address to use: `yaxistuitioncenter@gmail.com`. Until that is set, submissions are still stored inside Netlify > Forms, but no email is sent.
* **Submit WhatsApp Enquiry** opens WhatsApp to +91 78455 92859 with the details filled in; the parent presses Send.
* The page shows "submitted" when Netlify accepts the form. That means Netlify received it; it does not by itself prove that an email reached your inbox. Always send one test enquiry after going live.
* Netlify's free plan allows about 100 form submissions per month.

## Adding gallery photos
1. Put photos (about 1600 px wide, under 300 KB each, names like `classroom-1.jpg`) in `assets/images/gallery/`.
2. Open `js/gallery-data.js` and add one line per photo inside the list, e.g.
   `{file:"classroom-1.jpg",cat:"Classroom Environment",alt:"Students studying in class"},`
3. `cat` must be exactly one of: Classroom Environment, Teaching Activities, Student Learning, Academic Activities, Special Coaching Sessions, Educational Events.
4. Upload to GitHub (see DEPLOYMENT.md). Get parents' permission before publishing photos of students.

## Editing text
* English text is in each `.html` page. Tamil text is in `js/main.js` (the list called `TA`, English text on the left, Tamil on the right). If you change English wording on a page, change the matching English key in `TA` too, otherwise that line stays in English when Tamil is selected.

## Notes
* `thank-you.html` is kept for compatibility; the form no longer uses it.
* The planned student/parent app will live in a separate `/app` folder later and will not change these pages.
