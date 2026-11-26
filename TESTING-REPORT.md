# Testing report - v1.2.0

Tested with an automated headless Chromium browser (Playwright) on the final files, served from a local web server. Nothing here was tested on a real iPhone/Android phone by me; the owner checked the single-file version on a laptop and phones (see end).

## Passed (automated)
| Check | Result |
|---|---|
| All 6 pages + thank-you + 404 load, no JavaScript errors | Passed |
| Every local link, image, CSS and script file exists (no broken local references) | Passed |
| Menu click-through across all pages, correct page highlighted (desktop and phone menu) | Passed |
| English and Tamil text of each built page identical to the approved single-file version | Passed (6 pages x 2 languages) |
| Language choice kept when moving to another page | Passed |
| No sideways scroll at 320, 390, 768, 1024, 1280, 1920 px, English and Tamil, all 8 pages | Passed |
| Layout matches the approved version (screenshot comparison, 4 pages) | ~0.1% pixel difference (animation only) |
| Enquiry form: validation messages, correct data sent to the form endpoint (stubbed), success and failure messages | Passed |
| WhatsApp enquiry opens wa.me/917845592859 with the details | Passed |
| Hidden Netlify form present on contact and enquiry pages and not visible | Passed |
| Gallery filter and lightbox open/close | Passed |
| Founder photo stays beside the text while scrolling (desktop) | Passed |
| Scroll animation runs in both normal and "Reduce motion" modes | Passed |
| Working hours show Monday - Saturday on all pages; search-engine data has no Sunday | Passed |

## NOT tested / cannot be confirmed here
* **Real email delivery.** The Netlify form can only be tested on the live Netlify site, after you add the email notification (DEPLOYMENT.md step 4). The test above used a stand-in for the server. Do one real test after going live.
* **Tamil appearance.** The Tamil text was written by me and checked for completeness, not for fonts or wording quality by a Tamil reader. Please read it once on your phone and tell us any word to change.
* **Real iPhone/Android/Safari.** Emulated phone sizes only (iPhone 13 size, Chromium). The owner's own phone checks of the earlier version were positive.
* **Google Fonts** could not load in the test environment (no internet), so the exact fonts were not inspected.
* **Live domain, SSL, Netlify deploy** were not touched or tested.

## Known limits
* Netlify free plan: about 100 form submissions per month.
* If a visitor's device has "Reduce motion" turned on, the animation is intentionally gentler.
