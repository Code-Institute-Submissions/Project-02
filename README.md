# LOVE BYTE

## Introduction
They say a successful relationship is built on the stomach. 

Or am I misquoting?

Either case, Love Byte is here to solve your gastronomic-woes by cutting down indecisions and enhancing your relationship through the art of decisiveness! Using FourSquare free API, you may enter the the block/location you are staying at followed by that of your significant other. The results will locate poly line center of both your locales and suggest 3 amazing top-notch places within a 5km radius where you can have your next date at! 

In future, Love Byte aims to build shareable content to showcase the different vendors we reviewed and provide opportunity for couples to spend what little time they have with each other! 

For more information, please email daryl.kangjh@gmail.com if you would like to be part of increasing our nation’s population through maintaining relationships! 

## Strategy 
•	COVID19 has impacted many Food & Beverage (F&B) establishments in Singapore since the soft lockdown (named Circuit Breaker). Restaurants have to adhere to strict government guidelines which affected their bottom line with F&B sector sinking down to 43.5% as of June 2020 (MTI). With lesser customers allowed into one premise, it is critical now to ensure restaurants receive more bookings as compared to pre-COVID times.

•	Couple’s in Singapore are always running out of good food places to eat at. With tighter restrictions to gather, Love Byte answers this woe by reducing decision fatigue and displaying 3 location for couples to hold their date! This will help couples make quicker and better decisions of our app! 

•	Love Byte aims to target young dating couples who are not staying together. The app will locate a centre point of where the two individuals live and query a 5km radius for the best eateries! That way, we remain fair to both couples while providing a wider variety of options to choose from! 

## Home Page

#### User Goals 

The page displays a map with 2 markers in the shape of hearts. This indicates the couples location when entered for input field 1 and 2. When the button is clicked to search, 3 markers will appear and show the 3 recommended eateries on the map. This will allow for a visual representation of the locations relative to where the couples stay at. The user can also click on the suggested marker to view the name of the eatery.
3 cards will also appear below the map to suggest the 3 location. The book now function offers quick contact the restaurant of their choice to make a quick reservation. Reviews and rating will be added when it is more viable to purchase a paid API (as of now, it is a placeholder to illustrate an example). 

### Owner Goals

The application provides a easy call to action to increase chances of couples booking a place via the app. An about us page also allow for customers to join our mailing list which will provide a platform to disseminate information such as deals and vouchers by our partner F&B outlets.


## Scope
Database of restaurants, images of each restaurant, location (latitude & longitude of restaurants).

### Structure

The website index page will already show the functional application for couples to use. About us page is a simple static page where user can read more about the project if they like to and submit their emails to join the mailing list.
Surface

The colour used is reminiscent of “Valentines” theme with a heavy use of pink. This is a deliberate choice to get couples “in the mood” of seriously planning their next big date! The typeface used for the body text is by default while the logo “Love Byte” utilises Google Font’s Cedarville Cursive to create a personal and feminine touch to the application.
Features

## Current Features

•	Mobile responsive design for mobile

•	Javascript function that allow querying of location to eat base on the centrepoint of the Polyline (as drawn by Leaflet)

•	Suggestions of F&B outlets provided by FourSquare API that allows credible suggestions of F&B places. 

•	Location query for couple’s location is also provided by Foursquare with a less accurate marker for residential location (this is due to the API used being free). 

## Features Left to Implement

•	Category selector for couples to choose desired activity to participate in (i.e. Movie theatres, arcades, clubs, bars). This will be more appropriate to implement after COVID19. 

•	Blog page with relevant articles of featured F&B outlets. Blog page will feature articles that are relevant to a dating couple.

•	Images used are placeholders due to the limitation of a free API. This will be replaced with actual image of the F&B location in the real application. 

•	The application is only available in the context of Singapore. For other regions, this app may not work as intended due to geographical land size. 

## Technologies Used

•	HTML

•	CSS

•	Bootstrap 4.5 

•	Javascript 

## Testing

1.	Desktop and Mobile both function normally as intended.

2.	Function works as per required, however, Polyline will appear briefly before removed. This is, to my knowledge, a small visual error that requires more work to make the app seamless. 


## Deployment
A live demo of this project can be viewed here which has been hosted using GitHub Pages. All the source code for this project is available here on GitHub.

## Credits

### Content and Media
•	Photos obtained from

•	Michalsnik/AOS (Javascript library for scroll effect)

•	Bootstrap for providing email layout and in-built warning function when fields are not entered correctly.

•	Leaflet JS for map resources and functions 

•	Foursquare free API that allows for simple query

## Acknowledgements

Paul Chor and Code Institute.
