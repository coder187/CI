# Kelly Travel - Bus Hire Website
[Link to live site on github pages](https://coder187.github.io/CI_MS1_BusHire/)

[Link to main README.md file](https://github.com/coder187/CI_MS1_BusHire/blob/master/README.md)


Project - User-Centric Frontend Development - Code Institute

# Testing

## W3C Validators
* [W3C HTML Validator](https://validator.w3.org/)
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
    * The site has been validated by W3C CSS Validation Service 
and W3C Markup Validation Service to check the validity of the website code.
![](https://raw.githubusercontent.com/coder187/CI_MS1_BusHire/master/assets/img/misc/w3c_css.png)
![](https://raw.githubusercontent.com/coder187/CI_MS1_BusHire/master/assets/img/misc/w3c_html.png)


## Check ALT Tags
I used [SEOPTIMER](https://www.seoptimer.com) to verify all image alt tags were present.
![](https://raw.githubusercontent.com/coder187/CI_MS1_BusHire/master/assets/img/misc/seoptimer.png)

## Spelling
I used [https://typosaur.us/](https://typosaur.us/) & MS Word to check pages for spelling errors.

## Testing planning.
With this project I have use Test [Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) model (TDD).

The TDD method consists of a cycle of :
* write new test
* implement new feature
* run all tests & repeat all steps untill all tests pass.

## Implementation

| Action      | Expected Outcome | Result |
| ----------- | ---------------- | -------|
| Add new blank html page to project | blank page ready for code saved as index.htm | Pass |
| Add Nav Bar to top of index | Nav Bar should stay at top of page at all screen sizes | Pass |
| Add Nav Bar Items to Nav Bar | Nav Bar items should collapse to Burger Menu style at small screen sizes | Pass |
| Add Footer Section | Three equal width columns occupying the full width of the page. | Pass |
| Add Address paragraph to left column | Center content within column | Pass |
| Add Contact paragraph to center column | Center content within column | Pass |
| Add Fontawesome Social Media Icons to right column | Center content within column | Pass |
| Add hyper links to Social Media Icons | Click link opens target in new browser window | Pass |
| Add hover effect to Social Media Icons | On mouse hover the background fades to green. On mouse out the background fades back to original colour | Pass |
| Add Header Section which conssits of two columns below Nav Bar | Mobile View: Right column should float directly below left column and align vertically | Pass |
| Add header section which conssits of two columns below Nav Bar| Tablet View: Left & Right column padding reduced to fit screen. | Pass |
| Add header section which conssits of two columns below Nav Bar| Desktop View: Left & Right columns should align horizontally to fit screen. | Pass |
| Add contact form to left column | Form should stay left of screen except at mobile view where it should center on screen and reduce font size | Pass |
| Add required tag to all form fields | Form will not submit unless all fields are populated. | Pass |
| Add aria labels to each form control | Screen reader software will read aria label contents.| Pass |
| Add submit button to quote form | On successful submit the button loads conf.html which displays a confirmational message.| Pass |
| Add welcome text paragraph to right column | Paragraph should display on right of screen except at mobile view where it should wrap underneath the qocntact form.| Pass |
| Add hero image as background to header section | Image should center on header section. | Pass |
| Add contact us paragraph below header section| Contact us text should center horizontally at all resolutions | Pass |
| Add About section header text x 4 below contact us paragraph| Header text should center horizontally at all resolutions | Pass |
| Add About section content text below each header element| Content text should center horizontally at all resolutions | Pass |
| Add Fontawesome icons to About section header element| Icons should dispaly inline with paragraph text at all resolutions | Pass |
| Add image below About Section | Image should center horizontally on screen | Pass |
| Add image below About Section | On Mobile screens the image displayed has a height of 200px | Pass |
| Add image below About Section | Between resolution 480x1024px the image is replaced with an image of height 300px | Pass |
| Add image below About Section | With screen width above 1024px the image is replaced with an image of height 600px | Pass |
| Add auto incrementing numerical elements with descriptive text x 4 below image | Mobile view: The elements should stack ontop of each other and center vertically and horizontally| Pass |
| Add auto incrementing numerical elements with descriptive text x 4 below image | Larger than Mobile view: The elements should align and center horizontally| Pass |
| Add auto incrementing numerical elements with descriptive text x 4 below image | The elements should count up from zero to defined limit on page refresh | Pass |
| Add Fleet Profile Section below numerical elements | Three columns, each containing a card element. The card consists of an image, descriptive text and a call to action button | Pass |
| Add Fleet Profile Section below numerical elements | On Mobile screens the card elements should stack ontop of each other and center horizontally and vertically. | Pass |
| Add Fleet Profile Section below numerical elements | On Tablet screens the third card element should wrap below the first two card elements and align center vertically with the cards above. | Pass |
| Add Fleet Profile Section below numerical elements | On Larger screens the card elements should align center horizontally. | Pass |
| Add new blank html page to project | blank page ready for code saved as conf.html | Pass |
| Copy Nav Bar from Index & paste to Conf.html | Nav Bar should stay at top of page at all screen sizes | Pass |
| Copy Footer Section from Index & paste to Conf.html | Three equal width columns occupying the full width of the page. | Pass |
| Add single column to Conf.html | Column is responsive to all device sizes. | Pass |
| Add conent to column | Text and button are responsive to all device sizes. | Pass |
| Add hyperlink to button | Button returns to Index.htm within same window | Pass |
| Add new blank html page to project | blank page ready for code saved as fleet.html | Pass |
| Copy Nav Bar from Index & paste to fleet.html | Nav Bar should stay at top of page at all screen sizes | Pass |
| Copy Footer Section from Index & paste to fleet.html | Three equal width columns occupying the full width of the page. | Pass |
| Add three rows and three column grid layout | Mobile View : single column layout with columns stacking on top of each other and center horizontally and vertically | Pass |
| Add three rows and three column grid layout | Tablet View : third column wraps below first column and aligns left | Pass | 
| Add three rows and three column grid layout | Larger screens : colums align horizontally | Pass |
| Add content to first column | column contains an image with overlayed text | Pass |
| Add content to second column | column contains bullet list of features | Pass |
| Add content to third column | column contains an image and reacts responsively| Pass |
| Index page Click Logo  | Load index page | Pass |
| Index page Menu Click Home  menu item| Load index page | Pass |
| Index page Menu Click About menu item  | Load index page and set focus on About Section | Pass |
| Index page Menu Click Instant Quote menu item  | Load index page and set focus on quote form | Pass |
| Index page Menu Click Fleet Profile  menu item| Load index page and set focus on Fleet Section  | Pass |
| Index page Menu Click Contact menu item| Load index page  and set focus on Footer Section  | Pass |
| Index page Fleet Section Mini Bus Card - Click Learn More buton| Load Fleet page and set focus on Mini Bus Section | Pass |
| Index page Fleet Section Midi Coach Card - Click Learn More buton| Load Fleet page and set focus on Midi Coach Section | Pass |
| Index page Fleet Section Coach Card - Click Learn More buton| Load Fleet page and set focus on Coach Section | Pass |
| Fleet page Click Logo  | Load index page | Pass |
| Fleet page Menu Click Home  menu item | Load index page | Pass |
| Fleet page Menu Click About menu item  | Load index page and set focus on About Section | Pass |
| Fleet page Menu Click Instant Quote menu item  | Load index page and set focus on quote form | Pass |
| Fleet page Menu Click Fleet Profile  menu item| Load index page and set focus on Fleet Section  | Pass |
| Fleet page Menu Click Contact menu item| Set focus on Footer Section  | Pass |


## Responsive Design
I tested the site layout using the built in  Chrome Dev Tools with following device emulation:
| Device | Resolution | Throttling | Orientation |
|---------|------------|------------|-------------|
| Moto G4 | 360x640 | None | Portrait|
| Pixel 2 | 411x731 | None | Portrait|
| Pixel 2 | 731x411 | None | Landscape|
| iPhone 5 | 320x568 | None | Portrait|
| iPad | 768x1024 | None | Portrait|
| iPad | 1024x768 | None | Portrait|
| iPad Pro | 1024x1366 | None | Portrait|
| iPad Pro | 1024x1366 | Mid Tier | Portrait|
| iPad Pro | 1024x1366 | Low End | Portrait|
| Galaxy Fold| 280x653 | None | Portrait|
| Galaxy Fold| 653x280 | None | Landscape|
| Galaxy Fold| 512x717 | None | Portrait|
| Galaxy Fold| 717x512 | None | Landscape|

I tested the site layout using physical devices as follows:
| Device | Browser |Resolution | Throttling | Orientation |
|---------|------------|------------|-------------|--------|
| Samsung S5 NEO on Android 6.0.1 | Android Chrome | 360x640| Cellular / Broadband | Portrait|
| Samsung S5 NEO on Android 6.0.1 | Android Chrome | x | Cellular / Broadband | Landscape|
| Samsung A50 on Android 10 | Android Chrome | 412x892 | Cellular / Broadband | Portrait|
| Samsung A50 on Android 10 | Android Chrome | 892x412 | Cellular / Broadband | Landscape|
| Samsung S10 on Android 9 | Android Chrome | 412x869 | Broadband | Portrait |
| Samsung S10 on Android 9 | Android Chrome | 869x412 | Broadband | Portrait |
| Fire HD 10 on Fire OS 5.6.8.0 | Silk Browser | 1280x600 | Cellular / Broadband | Landscape|
| Fire HD 10 on Fire OS 5.6.8.0 | Silk Browser | 600x1280 | Cellular / Broadband | Portrait |
| HP Laptop on Win 10 Pro 10.0.19041.867 | Chrome 89.0.4389.90| 1366x768 | None ||
| HP Laptop on Win 10 Pro 10.0.19041.867 | Chrome 89.0.4389.90| 800x600 | None ||
| HP Laptop on Win 10 Pro 10.0.19041.867 | Edge 89.0.774.57 | 1366x768 | None ||
| HP Laptop on Win 10 Pro 10.0.19041.867 | Internet Explorer 2004| 1366x768 | None ||
| HP zBook on Win 10 Pro 10.0.19041.685 | Chrome 88.0.4324.190 | 1920x1080 | None ||

## Performance
I used Chrome Dev Tools Lighthouse to test site performance.
Accessability, Best Pracrtices & SEO scored very highly, however Performance needs further investigation.
I was able to gain slight improvment by using Tiny Png to reduce image sizes.
Lighthouse currently reports a Performance Score of just under 80, which may be partly down to server resources.

**Please note : this project is for educational use only and was created for the Code Institute Module of User Centric front end development**

**Created by Jonathan Kelly**