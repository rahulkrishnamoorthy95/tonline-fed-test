## Description of my solution

Talk us through your solution, thought process etc here.

- Design approach 
    - small application so not used any state management libraries.
    - Used functional components and hooks (lifted state up) to build UI.
    - fetch is used to invoke API call to retrieve data.
    - CSS Frameworks are not used and preprocessor SCSS is used for easy syntax and other benefits.
    - Responsive webpage is ensured using media queries.
    - Jest is used for Unit testing the components.

- Coding
    - Tech stack used { HTML5, CSS pre-processor (SCSS) ReactJs }
    - Layout is split into 3 (Header, section, footer)
    - Loading component is used until cards are rendered.
    - View More option is enanbled for user to see more records.

## Things I would do next

- UI server
    - Create UI node server using express framework.
    - Enable UI server to ensure the API's are routed through safer channel.
    - To enable SSR for the first time user lands. to avoid wait time!

- Update Layout
    - Enable Login option for user accessing application.
    - Introduce Navbar  with following (home, favourites, filter)
    - Search option to search based on (Location, name)
    - Additional options on cards to add favourites, view full details, send email.
    - List view and grid view option for users.
    - Pagination.

- State Library
    - Use state library redux to maintain single store.


## Assumptions that I made

- Readme is bit tricky, Assumed only card display and load more cards functionality is asked.
- Web forum cards would be displayed in column based but as it says conversation thread, assumed it would be row based.

## Challenges on the repository

- enabled css and scss extensions as webpack was configured only for .js extensions.
- enabled IP to run UI.
- As Jest converts modules to JS, Style imported components was blokced to get the coverage.

