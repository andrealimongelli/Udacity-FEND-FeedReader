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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
    });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        describe('Test url defined & url not empty', function() {
            allFeeds.forEach(function(feed) {
                
                       it('Are defined & not void', function() {
                               expect(feed.url).toBeDefined();
                               expect(feed.url).not.toBe("");
                               
               });
           });
        });
        

          

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        describe('Test name defined & name not empty', function() {
            allFeeds.forEach(function(feed) {
                
                       it('Are defined & not void', function() {
                             
                               expect(feed.name).toBeDefined();
                               expect(feed.name).not.toBe("");
                               
               });
           });
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        describe('The Menu', function() {
            
                
                       it('is hidden by default', function() {
                       let body = document.querySelector('body');
                              
        expect(body.classList.contains('menu-hidden')).toBe(true); 
      
                               
               });
           
    });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */


          describe('Menu change', function() {
            
            it('change onclick', function() {
                var aa = $("body");
                var icon = $(".menu-icon-link");
                icon.trigger("click");
                expect(aa.hasClass("menu-hidden")).toBe(false);
                icon.trigger("click");
                expect(aa.hasClass("menu-hidden")).toBe(true);
            });
        }); 






    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
      describe("Initial Entries", function() {

            beforeEach(function (done) {
                loadFeed(0, function () {
                    done();
                });
        })
        it('has at least 1 entry within the feed container', function() {
            let entries = document.querySelectorAll('.feed .entry'); 
            expect(entries.length).toBeGreaterThan(0);
        })
      })
         

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        
  describe('New Feed Selection', () => {
    //Define enitial variables for the hole suite.
    let aa,
      bb;
    //Before each test, load two feeds, and store their Urls into our variables
    beforeEach(done => {
      //Loading the two feeds at the same time will result in an undefined currentFeedUrl variable, so we'll load them one after the other.
      loadFeed(0, () => {
        aa = $('.entry-link').attr('href');
        //Load the second feed in the Callback of the first feed function
        loadFeed(1, () => {
          done();
        });
      });
    });

    //checks if the content changes between our feeds
    it('Content Changes successfully for Multiple Feeds', done => {
      bb = $('.entry-link').attr('href');
      console.log(aa, bb)
      expect(aa).not.toBe(bb);
      done();
    });
  });
  
  }());

 