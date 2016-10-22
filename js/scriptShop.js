$(document).ready(function() {
      var owl = $(".custom-owl");

      owl.owlCarousel({
          autoplay: 10,
          loop:true,
          margin: 10,
          nav: true,
          navText: ['<span>&#139;</span>','&#155;'],
          stopOnHover: true,
          responsive:{
              0:{
                  items:2
              },
              320:{
                  items:3
              },
              600:{
                  items:4
              },
              1000:{
                  items:5
              }
          }
      });

      $(".slider .next").click(function(){
        owl.trigger('owl.next');
      })
      $(".slider .prev").click(function(){
        owl.trigger('owl.prev');
      })
    });
// Get the modal
    var modal = document.getElementById('idmodal');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById('idlogin').style.display='none';
            document.getElementById('idregister').style.display='none';
        }
    }