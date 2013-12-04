(function() {
  var Bottom, Chance, FontFamilies, FontSize, FontSizeMax, FontSizeMin, FontWeight, FontWeightMax, FontWeightMin, Height, LargeChance, Left, Rate, Right, SmallChance, Top, Width, randColor, randDirection, randFontFamily, randFontSize, randFontWeight, randPosition, randTitle, titleRandomizer;

  Rate = 100;

  Chance = .05;

  SmallChance = Chance / 10;

  LargeChance = Chance * 10;

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

  FontFamilies = ['Arial, "Helvetica Neue", Helvetica, sans-serif', '"Arial Black", "Arial Bold", Gadget, sans-serif', '"Arial Narrow", Arial, sans-serif', '"Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif', '"Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif', 'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif', 'Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif', '"Century Gothic", CenturyGothic, AppleGothic, sans-serif', '"Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", Arial, sans-serif', 'Futura, "Trebuchet MS", Arial, sans-serif', 'Geneva, Tahoma, Verdana, sans-serif', '"Gill Sans", "Gill Sans MT", Calibri, sans-serif', '"Helvetica Neue", Helvetica, Arial, sans-serif', 'Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", sans ', '"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans-serif', 'Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif', '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif', 'Tahoma, Verdana, Segoe, sans-serif', '"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif', 'Verdana, Geneva, sans-serif', 'Baskerville, "Baskerville Old Face", "Hoefler Text", Garamond, "Times New Roman", serif', '"Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif', '"Bodoni MT", Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif', '"Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif', '"Calisto MT", "Bookman Old Style", Bookman, "Goudy Old Style", Garamond, "Hoefler Text", "Bitstream Charter", Georgia, serif', 'Cambria, Georgia, serif', 'Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif', 'Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif', 'Georgia, Times, "Times New Roman", serif', '"Goudy Old Style", Garamond, "Big Caslon", "Times New Roman", serif', '"Hoefler Text", "Baskerville old face", Garamond, "Times New Roman", serif', '"Lucida Bright", Georgia, serif', 'Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif', 'Perpetua, Baskerville, "Big Caslon", "Palatino Linotype", Palatino, "URW Palladio L", "Nimbus Roman No9 L", serif', 'Rockwell, "Courier Bold", Courier, Georgia, Times, "Times New Roman", serif', '"Rockwell Extra Bold", "Rockwell Bold", monospace', 'TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif', '"Andale Mono", AndaleMono, monospace', 'Consolas, monaco, monospace', '"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace', '"Lucida Console", "Lucida Sans Typewriter", Monaco, "Bitstream Vera Sans Mono", monospace', '"Lucida Sans Typewriter", "Lucida Console", Monaco, "Bitstream Vera Sans Mono", monospace', 'Monaco, Consolas, "Lucida Console", monospace', 'Copperplate, "Copperplate Gothic Light", fantasy', 'Papyrus, fantasy', '"Brush Script MT", cursive'];

  $(window).load(function() {
    return $('body').fadeIn('slow');
  });

  $("p").each(function() {
    return $(this).css({
      color: 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')',
      fontSize: Math.floor(Math.random() * 42),
      fontWeight: 100 * Math.ceil(Math.random() * 7),
      top: Math.floor(Math.random() * Height),
      bottom: Math.floor(Math.random() * Height),
      left: Math.floor(Math.random() * Width),
      right: Math.floor(Math.random() * Width)
    });
  });

  setInterval((function() {
    randTitle();
    return $("p").each(function() {
      randColor($(this));
      randFontSize($(this));
      randFontWeight($(this));
      randFontFamily($(this));
      randDirection($(this), Top, 'top');
      randDirection($(this), Bottom, 'bottom');
      randDirection($(this), Left, 'left');
      return randDirection($(this), Right, 'right');
    });
  }), Rate);

  randTitle = function() {
    if (Math.random() < Chance) {
      return document.title = titleRandomizer();
    }
  };

  titleRandomizer = function() {
    var i, possible, text;
    text = "";
    possible = "CSS Evolve";
    i = 0;
    while (i < possible.length) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      i++;
    }
    return text;
  };

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
      Dir = parseInt(el.css(dir));
      if (Math.random() <= .5 && Dir < Height) {
        Dir++;
        return el.css(dir, Dir);
      } else if (Dir > Height) {
        Dir--;
        return el.css(dir, Dir);
      }
    }
  };

  randColor = function(el) {
    var b, g, hex, max, min, r, rgb;
    if (Math.random() < LargeChance) {
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

  randFontFamily = function(el) {
    var fontFamily;
    if (Math.random() < SmallChance) {
      fontFamily = FontFamilies[Math.floor(Math.random() * FontFamilies.length)];
      return el.css({
        fontFamily: fontFamily
      });
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

}).call(this);
