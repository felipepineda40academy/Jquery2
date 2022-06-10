function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


$("#titulo").css("font-size","3em")

$("#modifier").click(function(e){
    var fontsize_actual = $("#titulo").css("font-size")
    var pixel_number_to_em = parseInt(fontsize_actual[0]+fontsize_actual[1])/16
    var new_font_size = (pixel_number_to_em+0.5)
    var font_size_converted = new_font_size.toString()+'em';
    console.log(font_size_converted)
    $("#titulo").css("font-size",font_size_converted)
})

$("#modifier_color").click(function(e){
    $("#titulo").css("color",getRandomColor())
})

