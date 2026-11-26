# லைவ் ஆக்கும் வழிகாட்டி (தமிழில்)

உங்கள் GitHub, Netlify, GoDaddy ஏற்கெனவே இணைக்கப்பட்டுள்ளன. புதிய repository, புதிய Netlify project அல்லது GoDaddy மாற்றம் எதுவும் தேவையில்லை. GitHub-இல் உள்ள கோப்புகளை மட்டும் மாற்றினால் போதும்.

## படி 1: ZIP-ஐத் திறங்கள்
* `yaxis-tuition-website.zip` கோப்பை Unzip செய்யுங்கள்.
* உள்ளே `index.html`, `about.html`, `css`, `js`, `assets` போன்றவை நேரடியாக இருக்க வேண்டும்.

## படி 2: GitHub-இல் பதிவேற்றம்
1. https://github.com/Yaxistuition/yaxis-tuition-website திறங்கள் (branch: `main`).
2. **Add file → Upload files** அழுத்துங்கள்.
3. Unzip செய்த folder-க்குள் உள்ள **எல்லாவற்றையும்** (folder-ஐ அல்ல) இழுத்து விடுங்கள். `index.html` மேல் மட்டத்திலேயே இருக்க வேண்டும். ஏற்கெனவே உள்ள கோப்புகளை Overwrite செய்ய ஒப்புக்கொள்ளுங்கள்.
4. பழைய `assets/images/logo.webp` கோப்பு இருந்தால் அதைத் திறந்து குப்பைத் தொட்டி ஐகானால் நீக்கி Commit செய்யுங்கள் (இனி தேவையில்லை).
5. "Update website v1.2.0" என்று எழுதி **Commit changes** அழுத்துங்கள்.

## படி 3: Netlify தானாக வெளியிடும்
* 1–2 நிமிடத்தில் Netlify புதிய பதிப்பை வெளியிடும். Netlify → **Deploys** பகுதியில் "Published" என்று வர வேண்டும்.
* பிறகு www.yaxistuition.com திறந்து Ctrl+F5 அழுத்துங்கள். போனில் tab-ஐ மூடி மீண்டும் திறங்கள்.

## படி 4: Email வருவதற்கான அமைப்பு (ஒருமுறை மட்டும், மிக முக்கியம்)
**Submit Enquiry** பட்டன் விவரங்களை Netlify-க்கு அனுப்பும். அவை உங்கள் Email-க்கு வர:
1. Netlify → உங்கள் தளம் → **Forms**. "Form detection" அணைந்திருந்தால் **Enable form detection** அழுத்தி, பிறகு **Deploys → Trigger deploy → Deploy site** செய்யுங்கள். இதன்பின் **enquiry** என்ற form தெரியும்.
2. **Forms → Form notifications** (அல்லது Settings & notifications) → **Add notification → Email notification**.
3. Email: **yaxistuitioncenter@gmail.com**; Form: **enquiry** → Save.
4. Netlify உறுதிப்படுத்தும் Email அனுப்பினால் அதைத் திறந்து confirm செய்யுங்கள்.
5. தளத்திலிருந்து ஒரு **சோதனை விசாரணை** அனுப்புங்கள். Netlify → Forms-இல் வருகிறதா, Gmail-இல் (முதல் முறை **Spam** உட்பட) வருகிறதா என்று பாருங்கள். Spam-இல் இருந்தால் "Not spam" குறியிடுங்கள்.
* Netlify-இல் வந்து Gmail-இல் வரவில்லை என்றால், படி 4.3 மீண்டும் சரிபாருங்கள்; தளம் சரியாகவே வேலை செய்கிறது.
* இலவசத் திட்டத்தில் மாதம் சுமார் 100 விசாரணைகள் வரை.
* Netlify மெனு பெயர்கள் சில நேரம் மாறும்; "Forms", "notifications" என்ற சொற்களைத் தேடுங்கள்.
* மாணவர்/பெற்றோர் விவரங்கள் உங்கள் Netlify கணக்கில் சேமிக்கப்படும்; அந்தக் கணக்கு password-ஐ யாரிடமும் பகிர வேண்டாம்.

## படி 5: லைவ் ஆனபின் 5 நிமிடச் சோதனை
* ஆறு பக்கங்களும் மெனுவிலிருந்து திறக்கின்றனவா.
* EN | தமிழ் பட்டன் வேலை செய்கிறதா; பக்கம் மாறினாலும் மொழி நிற்கிறதா.
* போனில் (Safari / Chrome): மெனு, WhatsApp பட்டன்கள், படிவங்கள்.
* Contact பக்கத்தில் Google Maps சரியான இடத்தைக் காட்டுகிறதா.
* ஒரு WhatsApp விசாரணையும் ஒரு சாதாரண விசாரணையும் அனுப்பிப் பாருங்கள்.

## படி 6: Gallery படங்களைப் பின்னர் சேர்க்க
1. GitHub → `assets/images/gallery` → Add file → Upload files (படங்கள் சுமார் 300 KB-க்குள், பெயர் `classroom-1.jpg` போல).
2. `js/gallery-data.js` திறந்து பென்சில் ஐகான் → `GALLERY=[` க்குள் ஒரு படத்துக்கு ஒரு வரி:
   `{file:"classroom-1.jpg",cat:"Classroom Environment",alt:"வகுப்பறையில் மாணவிகள்"},`
3. `cat` இவற்றில் ஒன்றாக மட்டும்: Classroom Environment, Teaching Activities, Student Learning, Academic Activities, Special Coaching Sessions, Educational Events.
4. Commit செய்யுங்கள். மாணவர் படங்களை வெளியிடும் முன் பெற்றோரின் அனுமதி பெறுங்கள்.

## படி 7: ஏதாவது தவறானால்
Netlify → Deploys → முந்தைய "Published" பதிப்பைத் தேர்ந்து **Publish deploy** அழுத்தினால் உடனே பழைய தளம் திரும்பும்.

## தமிழ் வார்த்தைகளை மாற்ற
தமிழ் வாசகங்கள் `js/main.js`-இல் `TA` பட்டியலில் உள்ளன (இடப்பக்கம் ஆங்கிலம், வலப்பக்கம் தமிழ்). வலப்பக்கத் தமிழை மட்டும் மாற்றினால் போதும்.
