# Deployment guide (GitHub -> Netlify -> yaxistuition.com)

No change is needed on GoDaddy and no new Netlify project or GitHub repository is needed. You only replace the files in the existing repository.

## 1. Before you start
* Unzip `yaxis-tuition-website.zip` on your computer. Open the folder; you should see `index.html`, `about.html`, `css`, `js`, `assets` ... directly inside it.

## 2. Upload to GitHub (website method)
1. Open https://github.com/Yaxistuition/yaxis-tuition-website (branch `main`).
2. **Add file > Upload files**. Drag **everything inside the unzipped folder** (not the folder itself). Keep `index.html` at the top level. Overwrite when asked.
3. Delete the old file `assets/images/logo.webp` if it still exists (open the file on GitHub > the trash icon > Commit). Nothing uses it any more.
4. Write a message such as "Update website v1.2.0" and click **Commit changes** (to `main`).

(Using git instead: copy the files into your local clone, then `git add -A && git commit -m "Update website v1.2.0" && git push`.)

## 3. Netlify publishes automatically
Netlify rebuilds when `main` changes (usually within 1-2 minutes). Check **Deploys** in the Netlify dashboard for "Published". Then open https://www.yaxistuition.com and refresh strongly (Ctrl+F5, or on a phone close and reopen the tab).

## 4. Turn on the enquiry email (needed once)
The **Submit Enquiry** button sends the form to Netlify. To receive it as an email:
1. Netlify > your site > **Forms**. If it says form detection is off, click **Enable form detection**, then trigger a new deploy (**Deploys > Trigger deploy > Deploy site**). After this the form named **enquiry** should appear under Forms.
2. **Forms > Form notifications** (also called "Settings & notifications") > **Add notification > Email notification**.
3. Email to notify: **yaxistuitioncenter@gmail.com**. Form: **enquiry**. Save.
4. Netlify may send a confirmation to that address; open it and confirm if asked.
5. Send one **test enquiry** from the live website. Check the Netlify Forms page (it should appear there) and your Gmail inbox. Also look in **Spam** the first time and mark "Not spam".
If it appears in Netlify but not in Gmail, re-check step 3; the website part is working.
Netlify's menu names change occasionally; if a name differs, look for "Forms" and "notifications".
Note: enquiry details (parent name, phone, student information) are stored in your Netlify account. Do not share the Netlify login.

## 5. Check list after going live (5 minutes)
* All six pages open from the menu; the English / தமிழ் button works and stays on after changing page.
* Phone: open in Safari/Chrome; the menu, WhatsApp buttons and forms work.
* Contact page: "Open in Google Maps" opens the correct place.
* Send one WhatsApp enquiry and one normal enquiry (see step 4).

## 6. Add gallery photos later
See README.md "Adding gallery photos". On GitHub: open `assets/images/gallery` > Add file > Upload files; then open `js/gallery-data.js` > pencil icon > add lines > Commit.

## 7. If something goes wrong
* Netlify > Deploys: click an older "Published" deploy > **Publish deploy** to go back to the previous version immediately.
* Domain / GoDaddy / SSL: nothing was changed, so no action is needed.
