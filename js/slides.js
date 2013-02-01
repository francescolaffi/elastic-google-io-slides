require(['order!../slide_config', 'order!modernizr.custom.45394',
         'order!prettify/prettify', 'order!hammer', 'order!slide-controller',
         'order!slide-deck'], function(someModule) {

var initElasticity = function() {
    var slidesEl = document.getElementsByTagName('slides')[0];
    
    var margin = 20;
    
    if (slidesEl.className.match(/\blayout(-faux)?-widescreen\b/)) {
        var minWidth = 1100 + 2*margin;
    } else {
        var minWidth = 900 + 2*margin;
    }
    
    var minHeight = 700 + 2*margin;
    
    slidesEl.style.width = minWidth+"px";
    slidesEl.style.height = minHeight+"px";
    slidesEl.style.marginLeft = -minWidth/2 +"px";
    slidesEl.style.marginTop = -minHeight/2 +"px";
    slidesEl.style.left = '50%';
    slidesEl.style.top = '50%';
    
    var resize = function() {
        if (window.innerWidth < minWidth || window.innerHeight < minHeight) {
            var sx = window.innerWidth / minWidth;
            var sy = window.innerHeight / minHeight;
            var transform = "scale(" + Math.min(sx, sy) + ")";
        } else {
            var transform = "none";
        }
        
        slidesEl.style.MozTransform = transform;
        slidesEl.style.WebkitTransform = transform;
        slidesEl.style.OTransform = transform;
        slidesEl.style.msTransform = transform;
        slidesEl.style.transform = transform;
    }   
    
    resize();
    window.onresize = resize;
};        

if (document.readyState === "complete") {
  initElasticity();
} else {
  window.addEventListener("load", initElasticity);
}

});
