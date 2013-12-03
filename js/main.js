(function() {
  var Bottom, Chance, FontSize, FontSizeMax, FontSizeMin, FontWeight, FontWeightMax, FontWeightMin, Height, Left, Rate, Right, SmallChance, Top, Width;

  Rate = 500;

  Chance = .5;

  SmallChance = Chance / 10;

  Height = $(window).height();

  Width = $(window).width();

  Top = Math.random() * Height;

  Bottom = Math.random() * Height;

  Left = Math.random() * Width;

  Right = Math.random() * Width;

  FontSize = 16;

  FontSizeMin = 1;

  FontSizeMax = 200;

  FontWeight = 400;

  FontWeightMin = 100;

  FontWeightMax = 600;

  setInterval((function() {
    var randColor, randDirection, randFontSize, randFontWeight, randPosition;
    randPosition = function(el) {
      var position, positions;
      if (Math.random() < SmallChance) {
        positions = ['absolute', 'fixed', 'relative', 'static', 'inherit'];
        position = positions[Math.floor(Math.random() * positions.length)];
        return el.css({
          position: position
        });
      }
    };
    randDirection = function(el, Dir, dir) {
      if (Math.random() < Chance) {
        Dir = el.css('dir');
        console.log(Dir);
        if (Math.random() <= .5 && Dir < Height) {
          Dir++;
          return el.css({
            dir: Dir
          });
        } else if (Dir > Height) {
          Dir--;
          return el.css({
            dir: Dir
          });
        }
      }
    };
    randColor = function(el) {
      var b, g, hex, max, min, r, rgb;
      if (Math.random() < Chance) {
        rgb = el.css('color');
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        r = rgb[1];
        g = rgb[2];
        b = rgb[3];
        min = 0;
        max = 255;
        if (Math.random() <= .5 && r < max) {
          r++;
        } else if (r > min) {
          r--;
        }
        if (Math.random() <= .5 && g < max) {
          g++;
        } else if (g > min) {
          g--;
        }
        if (Math.random() <= .5 && b < max) {
          b++;
        } else if (b > min) {
          b--;
        }
        hex = function(x) {
          return ("0" + parseInt(x).toString(16)).slice(-2);
        };
        hex = '#' + hex(r) + hex(g) + hex(b);
        return el.css('color', hex);
      }
    };
    randFontSize = function(el) {
      if (Math.random() < Chance) {
        FontSize = parseInt(el.css('font-size'));
        if (Math.random() <= .5 && FontSize < FontSizeMax) {
          FontSize++;
          return el.css({
            fontSize: FontSize
          });
        } else if (FontSize > FontSizeMin) {
          FontSize--;
          return el.css({
            fontSize: FontSize
          });
        }
      }
    };
    randFontWeight = function(el) {
      if (Math.random() < SmallChance) {
        FontWeight = parseInt(el.css('font-weight'));
        if (Math.random() <= .5 && FontWeight < FontWeightMax) {
          FontWeight = FontWeight + 100;
          return el.css({
            fontWeight: FontWeight
          });
        } else if (FontWeight > FontWeightMin) {
          FontWeight = FontWeight - 100;
          return el.css({
            fontWeight: FontWeight
          });
        }
      }
    };
    return $("p").each(function() {
      randFontSize($(this));
      randFontWeight($(this));
      randColor($(this));
      randPosition($(this));
      randDirection($(this), Top, 'top');
      randDirection($(this), Bottom, 'bottom');
      randDirection($(this), Left, 'left');
      return randDirection($(this), Right, 'right');
    });
  }), Rate);

  $("p").each(function() {
    return $(this).css({
      fontSize: Math.floor(Math.random() * 42),
      fontWeight: 100 * Math.ceil(Math.random() * 7),
      top: Math.floor(Math.random() * Height),
      bottom: Math.floor(Math.random() * Height),
      left: Math.floor(Math.random() * Width),
      right: Math.floor(Math.random() * Width)
    });
  });

}).call(this);
