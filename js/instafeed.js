var galleryFeed = new Instafeed({
    get: "user",
    userId: 5869739209,
    clientId: "fd6588581f1743799833074dfc8b1f1f",
    accessToken: "5869739209.fd65885.185b81c683ea4a7cb54553b187020e19",
    resolution: "standard_resolution",
    useHttp: "true",
    limit: 40,
    template: 
      '<div class="">'+
      '<div class="portfolio-box zoom-effect">'+
          '<img src="{{image}}" class="img-responsive pict" alt="">'+
          '<div class="portfolio-box-caption">'+
             '<div class="portfolio-box-caption-content">'+
                  '<div class="project-name">'+
                      '<i class="fa fa-heart">{{likes}}</i>'+
                  '</div>'+
                  '<div class="project-category">'+
                      '<i class="fa fa-comment">{{comments}}</i>'+
                  '</div>'+
                  '<div class="project-social">'+
                      '<ul class="list-inline">'+
                          
                          '<li><a href="{{image}}" data-lightbox="example-set" data-title="{{caption}}"><i class="fa fa-search"></i></a></li>'+
                      '</ul>'+
                  '</div>'+
              '</div>'+
          '</div>'+
      '</div>'+
  '</div>',

    target: "instafeed-gallery-feed",
    after: function() {
      // disable button if no more results to load
      if (!this.hasNext()) {
        // btnInstafeedLoad.setAttribute('disabled', 'disabled');
      }
      
      var owl = $(".owling"),
          owlSlideSpeed = 300;
  
      // init owl    
      $(document).ready(function(){
        owl.owlCarousel({
          // navContainer: '.owl-nav-custom',
          // dotsContainer: '.owl-dots-custom',
          margin:10,
          loop:true,
          margin:10,
          nav:true,
          responsive:{
            0:{
              items:1
            },
            200:{
              items:2
            },
            400:{
              items:3
            },
            768:{
              items:5
            }
          }
        });
        
      });
  
      // keyboard controls
      $(document.documentElement).keydown(function(event) {
        if (event.keyCode == 37) {
          owl.trigger('prev.owl.carousel', [owlSlideSpeed]);
        }
        else if (event.keyCode == 39) {
          owl.trigger('next.owl.carousel', [owlSlideSpeed]);
        }
      });
    }
  });
  
  galleryFeed.run();
  
  // var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
  // btnInstafeedLoad.addEventListener("click", function() {
  //   galleryFeed.next()
  // });
  