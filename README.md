Random User Generator API Project - based on treehouse courses
TODO::
-SCREENSHOTS IN README
RECOLOR/CSS & SASS CHANGES
README

# EMPLOYEE DIRECTORY
Created based on project from Teamtreehouse.com.
If you are also student and  working on this or a similar project, feel free to reach out to me with anyquestions about this code. I've made an effort to include helpful comments and documentation for fellow learners. The CSS contains significant changes to the layout, for those interested.

## Basic Structure

The employee directory calls on a public API that returns random user profiles. Clicking on one of these opens a modal window with more employee information. Some of the employees use Arabic scrpt, these are supported with RTL text. 

### Concepts Demonstrated

The main technologies and concepts demonstrated in this project are

* javaScript
* jQuery
* API calls
* CSS 
* Localization-Friendly Design
* !Responsive Design

## CSS Techniques

* Flex layout design. 
* Animation: Header slide in created using keyframes. CSS animations are much faster to load than jQuery animations.
* BEM (Block, Element, Modifier) methodology used for naming CSS selectors.

## Localization-Friendly Design

The API call returns employees with both Latin charaters in their
names and information, and Arabic characters. The code includes
a snippet that checks to see if the first letter of an employee's 
name is in Arabic script. If so, Arabic specific styling rules are 
applied. Functionality could easily be expanded to Kurdish, Farsi, Syriac or
any of the other numerous RTL scripts. 

![Right to left text on card](/images/SplashImage.png)

### The typefaces used in the logo were:
The 'Phrase' text on the logo is based on 'Sidecar' by Fenotype -> https://fenotype.com/. The 'Hunter' text is loosely based on DIN Condensed, an Adobe Font ->https://fonts.adobe.com/. The Neon effect was created in Adobe Illustrator.

## CSS Queries
When implemented, images and details will be posted about: 

 * Media Queries for mobile/desktop
 * Dark/Light mode 

### Dark/Light Mode
![Dark Mode](/READMEimages/DarkMode.png)
![Light Mode](/READMEimages/LightMode.png)

## Mobile/Destop Query
![Mobile asks user to switch devices](/READMEimages/MediaQuery.png)
![Full Size Device Displays Correctly](/READMEimages/QueryOK.png)
## Test Functionality

Visit https://aeronroemer.github.io/Employee-Directory-Display/ to test the functionality of this project. 

### Licsence 
MIT