# Inline Style Grab
This project creates a script that takes inline styling (perhaps generated by a database) and writes it into a stylesheet.

The necessity of this script came about for me when I disvovered some legacy code in a large webapp that was generating inline styles that were non-HTML5 compliant. When updating the app's doctype to HTML5, the inline styling was switched off and replaced by browser defaults.

In my example, the script runs through the page, taking the inline background-color styling and writes it to a new stylesheet in an HTML5 compliant manner.
