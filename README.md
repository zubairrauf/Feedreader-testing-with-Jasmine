# Udacity - Feed Reader Testing Project

## Instructions
This project is about testing with Jasmine. Download the project and run the index.html to see the test result at the bottom of the page. The tests are written in the feedreader.js file in the Jasmine folder.

## Tests
#### 1. RSS Feeds:
This test suite tests that the feeds are loading properly. It has three tests.

1. The first test check that allFeeds variable has beed defined and that it is not empty.

2. The second test is to make sure that the feeds have a URL and it is not empty.

3. The thrid test check that each feed has a name that is not empty.


#### The Menu
This test suite has two tests and checks that the menu is working properly.

First we test that the menu is hidden by default and then we run the other test to check if the menu's visiblity toggles on click.

#### Initial EntriesInitial Entries
This test suite checks if there is at least one entry in the feed. As the loadFeed is an asynchronous function, we use Jasmine's done() to make sure that the tests run after loadFeed() has done it's work.

####New Feed Selection
This test suite checks that when a new feed is loaded, the content actually changes.