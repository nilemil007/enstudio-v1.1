jQuery("document").ready(function(){
  var screenWidth = jQuery(window).width();


  // Sidebar Toggle
  jQuery(".brand .bi-list").click(function(){
    if( screenWidth < 1200 && screenWidth >= 992 ){
      jQuery(".sidebar").toggleClass("sidebarToggleExpand");
      jQuery(".main-content").toggleClass("mainToggleExpand");

    }else if( screenWidth < 992 && screenWidth >= 768 ){
      jQuery(".sidebar").toggleClass("sidebarToggleExpand");
      jQuery(".main-content").toggleClass("mainToggleExpand");

    }else if( screenWidth < 768 && screenWidth >= 576 ){
      jQuery(".sidebar").toggleClass("sidebarToggleExpand");

    }else if( screenWidth < 576 ){
      jQuery(".sidebar").toggleClass("sidebarToggleExpand");
    }else{
      jQuery(".sidebar").toggleClass("sidebarToggle");
      jQuery(".main-content").toggleClass("mainToggle");
    }
  });

  // Add Submenu Caret
  jQuery(".sidebar ul ul").parent("li").children("a").append('<span><i class="bi bi-chevron-down"></i></span>');

  // Sidebar Menu Toggle
  jQuery(".sidebar ul li").click(function(){
    jQuery(this).children("ul").slideToggle(100);
  });

  // Add/Remove Active class
  jQuery(".sidebar ul li a").click(function(){
    jQuery(".sidebar ul li a").removeClass("active");
    jQuery(this).addClass("active");
  });



});
