Random User Generator API Project - based on treehouse courses

# EMPLOYEE DIRECTORY
This is a jQuery project that makes an API call to https://randomuser.me/, and displays the resulting users. 
The application starts with a basic HTML document that is shown if the user does not have javascript enabled, and hidden if JS is working. 
The app should render 18 random user cards, clicking on one of these opens a modal window with more employee information. Some of the employees use Arabic scrpt, these are supported with RTL text. 

![Right to left text on card](/READMEimgs/HomePage.png)

![Right to left text on card](/READMEimgs/Modal.png)

Visit the page at: https://aeronroemer.github.io/Employee-Directory-Display/

### Concepts Demonstrated

The main technologies and concepts demonstrated in this project are

* javaScript
* jQuery
* API calls
* CSS 
* Localization-Friendly Design

## CSS Techniques

* Flex layout design, responds to resizing and enables the realignment of Arabic-script blocks. 
* Animation: Header slide in created using keyframes. CSS animations are much faster to load than jQuery animations.
* BEM (Block, Element, Modifier) methodology used for naming CSS selectors.

## Localization-Friendly Design

The API call returns employees with both Latin charaters in their
names and information, and Arabic characters. The code includes
a snippet that checks to see if the first letter of an employee's 
name is in Arabic script. If so, Arabic specific styling rules are 
applied. Functionality could easily be expanded to Kurdish, Farsi, Syriac or
any of the other numerous RTL scripts. 

![Right to left text on card](/READMEimgs/LatinArabic.png)

## Header Image

The header image is a comination of a CSS gradient, CSS animation and a photoshop .png file. The original photo was found on https://unsplash.com/. It's a skyline of Chicago taken by Jeff Brown: https://unsplash.com/photos/xOj6_Ha1_R8. 

### Licsence 
Created based on a project on TeamTreehouse.com
MIT - other students should feel free to use my CSS or custom images. 