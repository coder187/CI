![](https://raw.githubusercontent.com/coder187/CI_MS1_BusHire/master/supp/air/brochure.png)

# Kelly Travel - Bus Hire Website
[Link to live site on github pages](https://coder187.github.io/CI_MS1_BusHire/)

Project - User-Centric Frontend Development - Code Institute

The project will produce a simple brochure website for the Limerick based bus hire operator - Kelly Travel.

The idea behind the project is to help support and enhance the company’s current web and social media presence via a user friendly & mobile responsive site with some 
basic information on the company and services available.
It is envisaged hat the base system will be extended in future to provide cloud based customer services which will fully integrate with the exist9ng 
IT infrastructure of the company’s backoffice systems via a Full Stack solution.


The end user of the system will be current and potential customers of Kelly Travel.
This includes a very wide range of people, so ease of use and responsive design are of utmost importance.
It is envisaged that the site will encourage interest in the company’s services 
from a younger audience as the current site is not fully responsive and so engagement is somewhat diminished.
A modern UX will hopefully bring the company’s services to an even wider audience.

# Strategy

## Business Goals
* Build brand awareness.
* Drive sales in the form of quick and easy quote request mechanism.
* Communicate key differentiating points to potential customers 
    * Experience 
    * Safety.
    * Environmentally Friendly
    * Accessibility
* Be intuitive and pleasing to use via good UX.
* Encourage repeat visits.

## User Goals 
* Easily find contact info for local bus hire company.
* Easily request a quote.
* View available vehicle options.

# Scope 
## User Stories
1. As a potential customer I want to get contact information for local bus companies.
2. As a potential customer I want information on the type of vehicles available for hire.
3. As a potential customer I would like to see the types of journeys catered for.
4. As a potential customer I would like to know if the company can provide disability friendly vehicles.    
5. As a potential customer I want to send a request for a quote for hire via the contact page.
6. As a potential customer I want to easily and intuitively navigate the site so that I so I can find what I need efficiently.
7. As a potential customer I want to follow the company’s social media accounts so that I can see their latest news and posts.

![](https://raw.githubusercontent.com/coder187/CI_MS1_BusHire/master/assets/img/misc/userStories.png)

# Structure 

## Features
The website consists of 3 pages, home page, fleet page and a quote sent confirmation page.
Each page features a responsive navigation bar with conventional placing of logo (top left).
Each page has a footer with contact information and social media icons linking to the company’s  social media accounts. This ensures good UX via a consistent look and feel for the user.
		
The home page has a hero image at the top with a Contact form overlayed on top and positioned to the left of the viewport. 
To the right a brief message welcomes users the site. The purpose of the hero image is to grab attention and give a positive emotional response to the user, 
while having the contact form on top allows the user to request a quote without further navigation.

The quick quote contact form requests a 
bus size(drop down select), 
date of travel, 
collection point, 
destination, 
contact email and an additional information text area. 
The bottom of the form has a "Get a Free Quote" button. 
When this button is clicked and all the form fields are validated the confirmation page loads with a 
Quote Sent Confirmation message and link back to the home page.

After the hero image there are some key points on why the user should consider this company for their requirements.

Next we have a bright high resolution image of some happy people on a bus to help reinforce the users emotional response.

Following the image we have four animated numerical counters which show further key aspects of the business strengths. 
This is intended to convey information in an efficient and pleasing manner.
	
The Fleet section follows, with clear and concise images and text for each category of vehicle available. 
The call to action button leads the user to the Fleet page which has more details on each category of vehicles.

The Fleet page is laid out in columns of images and bullet point text with a single column for mobile devices, two columns for tablets
and three columns for larger screens. The images are high resolution examples from each vehicle category and 
the text describes the features of each category.

## Technical Capabilities
HTML5 & CSS3 along with Bootstrap 4 framework are my core strengths in regards to this project.

## Existing Features

* Header [Logo](https://coder187.github.io/CI_MS1_BusHire/assets/img/kt_logo.png) - Exists on every page and allows all users to easily recognise the business brand. Clicking the logo returns users to the home page as they would expect.
* Header Navigation Bar - Exists on every page and allows all users to easily navigate all the website's pages and find what they are looking for quickly.
* [Footer](https://coder187.github.io/CI_MS1_BusHire/#footer) Contact Info - Exists on every page.
* Footer Social Icons - Exist on every page and allows all users to access the social platforms of the company.
* [Quick Contact Form](https://coder187.github.io/CI_MS1_BusHire/index.htm#quote) - Allows potential clients to ask questions, and/or make the first step in their ordering process.
* [About](https://coder187.github.io/CI_MS1_BusHire/index.htm#about-kelly-travel) Section - briefly and concisely communicate key differentiating points to potential customers 
* Animated Numerical Counters - Convey further key advantages of the company.
* [Fleet](https://coder187.github.io/CI_MS1_BusHire/index.htm#kelly-travel-fleet) Section -  Show categories of vehicles available for hire
* [Fleet Details Page](https://coder187.github.io/CI_MS1_BusHire/fleet.html) -  Show bullet points of each vehicle category alongside high resolution images of
vehicles from each category.

## Features Left To Implement In Future
* Add CAPTCHA to contact form - Allows business to protect the contact form from spam. - Javascript Needed.
* Add Search function - Allow users quicly search by keyword within the site.
* The website should retrieve the users location for use on the contact form. - Geo Services API/Javascript Needed.
* As a potential customer I would like to read (& post) social reviews placed by existing customers. Facebook / Tripadviser Links - Javascript Needed.)
* In future, I would like to extend this project to a Full Stack implementation with backend cloud based services. (Not necessarily as part of Code Institute Course.)

# Skeleton
## Wireframes

* [Landing page Mobile](https://github.com/coder187/CI_MS1_BusHire/blob/master/supp/wireframes/home%20mobile.png)
* [Landing page Tablet](https://github.com/coder187/CI_MS1_BusHire/blob/master/supp/wireframes/home%20tablet.png)
* [Landing page Desktop](https://github.com/coder187/CI_MS1_BusHire/blob/master/supp/wireframes/Home%20desktop.png)

* [Fleet page Mobile](https://github.com/coder187/CI_MS1_BusHire/blob/master/supp/wireframes/fleet%20page%20mobile.png)
* [Fleet page Tablet](https://github.com/coder187/CI_MS1_BusHire/blob/master/supp/wireframes/fleet%20page%20tablet.png)
* [Fleet page Desktop](https://github.com/coder187/CI_MS1_BusHire/blob/master/supp/wireframes/fleet%20page%20desktop.png)

Home page:
The homepage will be a landing page for the user and provide a warm welcome with a contact form overlayed on the hero image.

Reasons To Travel With Us:
This section covers a brief overview of who Kelly Travel are, how long they have been in business and why you can trust them.

Our Fleet:
Showcasing the broad range of vehicles available for hire.

Contact:
The business address, emergency & office contact details as well as social media links are contained in the footer.

Request Quote Form:
Form is overlayed the hero image and invites a quick quote request.

Fleet Details:
Further information on the fleet vehicles are detailed here alongside some choice high quality images.

# Surface
## Font 
I have used Google Fonts Roboto & Work Sans, throughout this project as I felt they clearly and efficiently communicate their content. 

## Colour Scheme
I wanted the site to immediately feel familiar to existing Kelly Travel employees and customers by maintaining the company’s long 
held colours of Green, Black & White. Although this maybe a somewhat simple color palette, it does match with company logo, uniform and vehicle livery.
This helps to immediately identify the site as being within the Kelly Travel domain.

![](https://raw.githubusercontent.com/coder187/CI_MS1_BusHire/master/assets/img/palette/palette.png)

## Site Layout
One of the sites main goals is to drive sales, especially from a younger audience whom are more likely to engage with the site via a mobile device.
To encourage call to action I have placed the Quote Form as one of the first elements on the landing page, as well as including a menu item for the form.
This will help remove any impediments to engaging with the company and make quote request as seamless as possible.

The About section flows naturally below followed by Fleet Profile with Contact information pinned to the footer.

# Technologies Used
* [HTML5](https://www.w3.org/)
* [CSS3](https://www.w3.org/Style/CSS/Overview.en.html)
* [Bootstrap v4.1.3](https://getbootstrap.com/) - to aid responsive design.
* [JQuery](https://jquery.com/)
* [Popper JS](https://popper.js.org/)
* [Hover JS](https://ianlunn.github.io/Hover/) - Used for hover effect on social media icons.
* [Fontawesome v5.15.2](https://fontawesome.com/) - Icons from fontawesome for the social media links and on the About section.
* [Javascript](https://www.javascript.com/) - for the animated numerical counters.
* [Google Fonts](https://fonts.google.com/) - I used font family Roboto and Work Sans provided by Google Fonts.
* [Gitpod](https://gitpod.io/) - IDE 
* [Github](https://www.github.com/) - version control and backup.
* [Coolors.co](https://coolors.co/) - palette matching and contrast.
* [Gimp](https://www.gimp.org/) - image manipulation.
* [Google Chrome Dev tools](https://developers.google.com/web/tools/chrome-devtools) for debugging.
* [Microsoft Edge](https://www.microsoft.com/en-us/edge) Dev Tools for testing and debugging.
* Microsoft Internet Explorer for additional testing.
* [SEOPTIMER](https://www.seoptimer.com) - verify alt tags.
* [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) for debugging.
* [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) for performance audit.
* [W3C Markup Validation Service](https://validator.w3.org/)
* [W3C Jigsaw CSS Validation Service](https://jigsaw.w3.org/css-validator/)
* [Code Institute Course Material](https://codeinstitute.net/)
* [Bootstrap Documentation](https://getbootstrap.com/docs/versions/)
* [w3schools](https://www.w3schools.com/) - help with HTML, CSS & Javascript
* [Stackoverflow](https://stackoverflow.com/) - help with HTML, CSS & Javascript
* [CSS-Tricks](https://css-tricks.com/animating-number-counters/) - help with HTML, CSS & Javascript
* [CSS-Tricks](https://css-tricks.com/snippets/css/css-triangle/) - implementation of triangle effect above quote form.
* [CSS-Tricks](https://css-tricks.com/text-blocks-over-image/) - implementation of text block of images on Fleet page.
* [Slack](https://slack.com/intl/en-ie/) - communication hub with mentor, tutors and fellow students.
* [Pure PNG](https://purepng.com/) - Free PNG Image Library.
* [Free Images.com](https://www.freeimages.com/) Free Image Library.
* [Tiny PNG](https://tinypng.com/) - Compress PNG files.
* [Markdown Guide](https://www.markdownguide.org/basic-syntax/) - Markdown Guide for this readme file.
* [Balsamiq](https://balsamiq.com/) - Wireframe Development
* [Am I Responsive](http://ami.responsivedesign.is/) - Screen Grab of site on various devices.


# Testing
[Link to Testing.md file](https://github.com/coder187/CI_MS1_BusHire/blob/master/TESTING.md)

# Deployment
## Github Pages
1. On GitHub, navigate to your site's repository.
2. Under your repository name, click **Settings**.
![](https://docs.github.com/assets/images/help/repository/repo-actions-settings.png)
3. Under "GitHub Pages", use the **None** or **Branch** drop-down menu and select a publishing source.
![](https://docs.github.com/assets/images/help/pages/publishing-source-drop-down.png)
4. Optionally, use the drop-down menu to select a folder for your publishing source.
![](https://docs.github.com/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Click **Save**.

## Deploy Locally via GIT
1. On GitHub, navigate to the main page of the repository [github.com/coder187/CI_MS1_BusHire](https://github.com/coder187/CI_MS1_BusHire)
2. Above the list of files, click Code.
![](https://docs.github.com/assets/images/help/repository/code-button.png)
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link text or click the icon to right. 
To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, 
click **Use SSH**, then copy the link or click the icon.
To clone a repository using GitHub CLI, click **Use GitHub CLI**, then copy the link text.
![](https://docs.github.com/assets/images/help/repository/https-url-clone.png)
![](https://docs.github.com/assets/images/help/repository/https-url-clone-cli.png)
4. Open Git Bash (or command prompt on Windows. Note you will need [GIT](https://git-scm.com/download/win) for Windows
5. Change the current working directory to the location where you want the cloned directory.
6. Type ```git clone``` and then paste the URL you copied earlier.\
```$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY```
7. Press **Enter** to create your local clone.

## Deploy Locally via zip file download
1. On GitHub, navigate to the main page of the repository.
2. Above the list of files, click Code.
![](https://docs.github.com/assets/images/help/repository/code-button.png)
3. Click **Download Zip**
4. Extract the downloaded file to the location where you want the cloned directory.



# Bugs
* about section : text not aligned because float had float right instead of left
* fontawesome icons not showing - some fonts were from ver 5. Ver4 and Ver5 have different element link syntax for the same icons
* centring the welcome text div - overwrite bootstrap padding
* centring spinners - text wrapping - add min height
* spinner circle not centered due to large number - add padding-top to circle
* media query 300px not running without !important
* ipad welcome text bleed right margin
* contact form breaks from float right at high resolution(above 1869). fix - wrap contact form header and form element in a div and float the div right.
* notice a left - right horizontal scroll - also on demo sites - so possibly not a bug but needs further investigation.

# Credits
## Content 
The content of the site describes a real life company in Limerick, Kelly Travel (family business) and is used here with consent.

## Media 
The hero & vehicle category images are taken from [Pure PNG](https://purepng.com/)
The vehicle internal images on Fleet page are of Kelly Travel vehicles.

## Acknowledgements
I relied heavily upon the sample course mini projects, particularly Love Running, Portfolio Project & Whiskey Drop as inspiration for the site layout and features.

My mentor, Dick Vlaanderen was of great assistance and provided excellent leadership where needed.

Code Institute Tutor Support, Customer Care, fellow students and webinars were invaluable.

Big thank you to my ever patient family for allowing me follow this journey!

**Please note : this project is for educational use only and was created for the Code Institute Module of User Centric front end development**

**Created by Jonathan Kelly**