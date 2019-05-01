
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /* The first test suit that tests if the feeds are loading properly. */
    describe('RSS Feeds', function() {
        /*Test to check if allFeeds variable is defined and it is not empty*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /*Test to check that each feed has a url defined and the url is not empty*/
        it('should have a url', function(){
        for(let feed of allFeeds){
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
        }
    });

        /* Test to make sure that all feeds have a name defined and the name is not empty.*/
        it('should have a name', function(){
            for (let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

        /*  Test suit to check that the menu functions properly. It shoud
            be hidden by default and should toggle on click.*/
        describe('The menu', function(){
            //Test that the menu is hidden by default
            it('should be hidden', function(){
                expect($('body').hasClass('menu-hidden')).toBe(true);
            });

            //Test that the menu's visibility toggles on click
            it('toggles the menu on click', function(){
              $('.menu-icon-link').click();
              expect($('body').hasClass('menu-hidden')).toBe(false);
              $('.menu-icon-link').click();
              expect($('body').hasClass('menu-hidden')).toBe(true);
            });
        });


        /*Test suit to make sure that the loadFeed function is working properly
        * and there is a single .entry element within the .feed container.*/
        describe('Initial Entries', function(){
            beforeEach(done => {    
                loadFeed(0, done);
            });
            //Test that the feed has at least one entry
            it("has at least one entry when loadFeed is done", function(){
               expect($('.feed .entry').length).toBeGreaterThan(0); 
            });
        });
  
    /* Test suite to check that new feed is loading and the current feed actually changes*/
    describe('New Feed Selection', function(){
        beforeEach(done => {
            loadFeed(0, function(){
               firstFeed = $('.feed').html();
               loadFeed(1, function(){
                secondFeed = $('.feed').html();
                done();
              });
            });
        });

        //Test that the feed changes by comparing the first and the second feed.
        it('is changing', function(){
            expect(firstFeed).not.toBe(secondFeed);
        });
    });
}());
