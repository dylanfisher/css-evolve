# Speed
Rate = 500
Chance = .5
SmallChance = Chance / 10
# Positioning
Height = $(window).height()
Width = $(window).width()
Top = Math.random() * Height
Bottom = Math.random() * Height
Left = Math.random() * Width
Right = Math.random() * Width
# Font size
FontSize = 16
FontSizeMin = 1
FontSizeMax = 200
# Font weight
FontWeight = 400
FontWeightMin = 100
FontWeightMax = 600

setInterval (->
  # Positioning
  randPosition = (el) ->
    if Math.random() < SmallChance
      positions = ['absolute', 'fixed', 'relative', 'static', 'inherit']
      position = positions[Math.floor(Math.random() * positions.length)]
      el.css({position: position})

  randDirection = (el, Dir, dir) ->
    if Math.random() < Chance
      Dir = el.css('dir')
      console.log Dir
      if Math.random() <= .5 && Dir < Height
        Dir++
        el.css({dir: Dir})
      else if Dir > Height
        Dir--
        el.css({dir: Dir})


  # Color
  randColor = (el) ->
    if Math.random() < Chance
      rgb = el.css('color');
      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      r = rgb[1]
      g = rgb[2]
      b = rgb[3]
      min = 0
      max = 255
      if Math.random() <= .5 && r < max
        r++
      else if r > min
        r--
      if Math.random() <= .5 && g < max
        g++
      else if g > min
        g--
      if Math.random() <= .5 && b < max
        b++
      else if b > min
        b--
      hex = (x) ->
        ("0" + parseInt(x).toString(16)).slice -2   
      hex = '#' + hex(r) + hex(g) + hex(b)
      el.css('color', hex)
      
  # Font size
  randFontSize = (el) ->
    if Math.random() < Chance
      FontSize = parseInt(el.css('font-size'))
      if Math.random() <= .5 && FontSize < FontSizeMax
        FontSize++
        el.css({fontSize: FontSize})
      else if FontSize > FontSizeMin
        FontSize--
        el.css({fontSize: FontSize})

  # Font weight
  randFontWeight = (el) ->
    if Math.random() < SmallChance
      FontWeight = parseInt(el.css('font-weight'))
      if Math.random() <= .5 && FontWeight < FontWeightMax
        FontWeight = FontWeight + 100
        el.css({fontWeight: FontWeight})
      else if FontWeight > FontWeightMin
        FontWeight = FontWeight - 100
        el.css({fontWeight: FontWeight})

  $("p").each ->
    randFontSize($(this))
    randFontWeight($(this))
    randColor($(this))
    randPosition($(this))
    randDirection($(this), Top, 'top')
    randDirection($(this), Bottom, 'bottom')
    randDirection($(this), Left, 'left')
    randDirection($(this), Right, 'right')
), Rate

# Randomize everything
$("p").each ->
  $(this).css({
#    color: 'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')',
    fontSize: Math.floor(Math.random()*42),
    fontWeight: 100 * Math.ceil(Math.random()*7),
    top: Math.floor(Math.random()*Height),
    bottom: Math.floor(Math.random()*Height),
    left: Math.floor(Math.random()*Width),
    right: Math.floor(Math.random()*Width)
  })
