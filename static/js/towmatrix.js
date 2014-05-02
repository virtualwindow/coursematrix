var schoolblock1slidessequence=["/slides/ds0.jpg", "/slides/ds1.jpg" ];
var schoolblock2slidessequence=["/slides/fa0.jpg", "/slides/fa1.jpg" ];
var schoolblock3slidessequence=["/slides/ia0.jpg", "/slides/ia1.jpg" ];
var schoolblock4slidessequence=["/slides/bs0.jpg", "/slides/bs1.jpg" ];
var schoolblock5slidessequence=["/slides/va0.jpg", "/slides/va1.jpg" ];

var schoolblock1slidestoggle=0;
var schoolblock2slidestoggle=0;
var schoolblock3slidestoggle=0;
var schoolblock4slidestoggle=0;
var schoolblock5slidestoggle=0;

var schoolblock1slidesi=-1;
var schoolblock2slidesi=-1;
var schoolblock3slidesi=-1;
var schoolblock4slidesi=-1;
var schoolblock5slidesi=-1;

var schoolblock1slidesEnabled = 1;
var schoolblock2slidesEnabled = 1;
var schoolblock3slidesEnabled = 1;
var schoolblock4slidesEnabled = 1;
var schoolblock5slidesEnabled = 1;

function schoolblock1slides()
{
  if (schoolblock1slidesEnabled == 1) {
    schoolblock1slidesi=(schoolblock1slidesi>=schoolblock1slidessequence.length-1)?0:(schoolblock1slidesi+1);
    $("#schoolblock1demo" + schoolblock1slidestoggle).css('background-image', 'url(' + schoolblock1slidessequence[schoolblock1slidesi] + ')');
    var w = $("#schoolblock1").width();
    var h = $("#schoolblock1").height();
    $("#schoolblock1demo" + schoolblock1slidestoggle).width(w)
    $("#schoolblock1demo" + schoolblock1slidestoggle).height(h)
    $("#schoolblock1text").width(w)
    $("#schoolblock1text").height(h)   
    $("#schoolblock1demo" + schoolblock1slidestoggle).fadeIn(500,function(){window.setTimeout(schoolblock1slides,3000);});
    schoolblock1slidestoggle^=1;
    $("#schoolblock1demo" + schoolblock1slidestoggle).fadeOut(1000);
  }
  //$("#debug").html("#demo0=" + $("#demo0").css('background-image')+"</br>"+"#demo1=" + $("#demo1").css('background-image')+"</br>Current div:#demo"+schoolblock1slidestoggle);
}

function schoolblock2slides()
{
  if (schoolblock2slidesEnabled == 1) {
    schoolblock2slidesi=(schoolblock2slidesi>=schoolblock2slidessequence.length-1)?0:(schoolblock2slidesi+1);
    $("#schoolblock2demo" + schoolblock2slidestoggle).css('background-image', 'url(' + schoolblock2slidessequence[schoolblock2slidesi] + ')');
    var w = $("#schoolblock2").width();
    var h = $("#schoolblock2").height();
    $("#schoolblock2demo" + schoolblock2slidestoggle).width(w)
    $("#schoolblock2demo" + schoolblock2slidestoggle).height(h)
    $("#schoolblock2text").width(w)
    $("#schoolblock2text").height(h)   
    $("#schoolblock2demo" + schoolblock2slidestoggle).fadeIn(500,function(){window.setTimeout(schoolblock2slides,3000);});
    schoolblock2slidestoggle^=1;
    $("#schoolblock2demo" + schoolblock2slidestoggle).fadeOut(1000);
  }
  //$("#debug").html("#demo0=" + $("#demo0").css('background-image')+"</br>"+"#demo1=" + $("#demo1").css('background-image')+"</br>Current div:#demo"+schoolblock1slidestoggle);
}

function schoolblock3slides()
{
  if (schoolblock3slidesEnabled == 1) {
    schoolblock3slidesi=(schoolblock3slidesi>=schoolblock3slidessequence.length-1)?0:(schoolblock3slidesi+1);
    $("#schoolblock3demo" + schoolblock3slidestoggle).css('background-image', 'url(' + schoolblock3slidessequence[schoolblock3slidesi] + ')');
    var w = $("#schoolblock3").width();
    var h = $("#schoolblock3").height();
    $("#schoolblock3demo" + schoolblock3slidestoggle).width(w)
    $("#schoolblock3demo" + schoolblock3slidestoggle).height(h)
    $("#schoolblock3text").width(w)
    $("#schoolblock3text").height(h)   
    $("#schoolblock3demo" + schoolblock3slidestoggle).fadeIn(500,function(){window.setTimeout(schoolblock3slides,3000);});
    schoolblock3slidestoggle^=1;
    $("#schoolblock3demo" + schoolblock3slidestoggle).fadeOut(1000);
  }
  //$("#debug").html("#demo0=" + $("#demo0").css('background-image')+"</br>"+"#demo1=" + $("#demo1").css('background-image')+"</br>Current div:#demo"+schoolblock1slidestoggle);
}

function schoolblock4slides()
{
  if (schoolblock4slidesEnabled == 1) {
    schoolblock4slidesi=(schoolblock4slidesi>=schoolblock4slidessequence.length-1)?0:(schoolblock4slidesi+1);
    $("#schoolblock4demo" + schoolblock4slidestoggle).css('background-image', 'url(' + schoolblock4slidessequence[schoolblock4slidesi] + ')');
    var w = $("#schoolblock4").width();
    var h = $("#schoolblock4").height();
    $("#schoolblock4demo" + schoolblock4slidestoggle).width(w)
    $("#schoolblock4demo" + schoolblock4slidestoggle).height(h)
    $("#schoolblock4text").width(w)
    $("#schoolblock4text").height(h)   
    $("#schoolblock4demo" + schoolblock4slidestoggle).fadeIn(500,function(){window.setTimeout(schoolblock4slides,3000);});
    schoolblock4slidestoggle^=1;
    $("#schoolblock4demo" + schoolblock4slidestoggle).fadeOut(1000);
  }
  //$("#debug").html("#demo0=" + $("#demo0").css('background-image')+"</br>"+"#demo1=" + $("#demo1").css('background-image')+"</br>Current div:#demo"+schoolblock1slidestoggle);
}

function schoolblock5slides()
{
  if (schoolblock5slidesEnabled == 1) {
    schoolblock5slidesi=(schoolblock5slidesi>=schoolblock5slidessequence.length-1)?0:(schoolblock5slidesi+1);
    $("#schoolblock5demo" + schoolblock5slidestoggle).css('background-image', 'url(' + schoolblock5slidessequence[schoolblock5slidesi] + ')');
    var w = $("#schoolblock5").width();
    var h = $("#schoolblock5").height();
    $("#schoolblock5demo" + schoolblock5slidestoggle).width(w)
    $("#schoolblock5demo" + schoolblock5slidestoggle).height(h)
    $("#schoolblock5text").width(w) 
    $("#schoolblock5text").height(h)   
    $("#schoolblock5demo" + schoolblock5slidestoggle).fadeIn(500,function(){window.setTimeout(schoolblock5slides,3000);});
    schoolblock5slidestoggle^=1;
    $("#schoolblock5demo" + schoolblock5slidestoggle).fadeOut(1000);
  }
  //$("#debug").html("#demo0=" + $("#demo0").css('background-image')+"</br>"+"#demo1=" + $("#demo1").css('background-image')+"</br>Current div:#demo"+schoolblock1slidestoggle);
}

var showrest = function () {
    $(".fieldheading").delay(0).fadeIn(500);
    $(".fieldsmenu").delay(100).fadeIn(500);    

    $(".outcomesheading").delay(500).fadeIn(500); 
    $(".outcomesmenu").delay(600).fadeIn(500); 
    $(".outcomesmenu2").delay(700).fadeIn(500); 

    $(".courseheading").delay(1200).fadeIn(500); 
    $(".coursemenu").delay(1300).fadeIn(500); 
}

var coursedata = {
  shools : [
    "Design Studies", 
    "Film Arts", 
    "Interactive Arts", 
    "Culture Studies", 
    "Visual Arts"],
  schoolsfirst : [
    "Design", 
    "Film", 
    "Interactive", 
    "Culture", 
    "Visual"],
  schoolssecond : [
    "Studies", 
    "Arts", 
    "Arts", 
    "Studies", 
    "Arts"],
  schoolstext : [
    "In a world where design and technology is evolving at a rapdi pace and the future is little more than an ever-moving goalpost, creative solutions and innovative thinking are paramount. At a time when creative excellence is the only quality that sets young professionals apart from each other in the competitive design industry, it is imperative that students are not only schooled in the latest technology, methods and trends, but that they are also nurtured and groomed to become industry leaders.<br><br>The pursuit of a career in Design Studies provides the kind of thinking associated with the next generation as we investigate the fields of Communication Design, Photography and Illustration", 
    "Film Arts text block", 
    "Interactive Arts text block", 
    "Culture Studies text block", 
    "Visual Arts text block"],    
  fields : [
      ["Communication Design", "Photography", "Illustration"],
      ["Writing", "Cinematography", "Sound", "Acting"],
      ["Electronics", "Web Development", "Game Development"],
      ["Business", "Culture"],
      ["3D", "Drawing", "Animation", "Sculpting", "Painting"]
    ],
  fieldstext : [
      ["Communication Design provides the basis for a career in the graphic and print design industry - covering typography, advertising and packaging to name but a few. Thie subject is a must for anyone intersted in graphic design.", 
      "Photography is a highly creative and competitive field of practice. Being a very technical subject, a great deal of time is spent handling the camera and working with it in many different settings. This subject will provide students with the technical competence, artistic sensitivity and self confidence to master various photographic genres.", 
      "Illustration field description"],
      ["Writing field description", 
      "Cinematography field description", 
      "Sound field description", 
      "Acting field description"],
      ["Electronics field description", 
      "Web Development field description", 
      "Game Development field description"],
      ["Business field description", 
      "Culture field description"],
      ["3D field description", 
      "Drawing field description", 
      "Animation field description", 
      "Sculpting field description", 
      "Painting field description"]
    ],
    subjects: [
      { year: 1, school: 0, field: 0, name: "Communication Design 101", description: "Communication Design 101 description", credits: 20},
      { year: 2, school: 0, field: 0, name: "Communication Design 201", description: "Communication Design 201 description", credits: 20},
      { year: 3, school: 0, field: 0, name: "Communication Design 301", description: "Communication Design 301 description", credits: 20},   
      { year: 1, school: 0, field: 1, name: "Photography 101", description: "photography 101 description", credits: 20},
      { year: 2, school: 0, field: 1, name: "Photography 201", description: "photography 201 description", credits: 20},
      { year: 3, school: 0, field: 1, name: "Photography 301", description: "photography 301 description", credits: 20},     
      { year: 1, school: 0, field: 2, name: "Illustration 101", description: "Illustration 101 description", credits: 20},
      { year: 2, school: 0, field: 2, name: "Illustration 201", description: "Illustration 201 description", credits: 20},
      { year: 3, school: 0, field: 2, name: "Illustration 301", description: "Illustration 301 description", credits: 20},     
      { year: 1, school: 1, field: 0, name: "Writing 101", description: "Writing 101 description", credits: 20},
      { year: 2, school: 1, field: 0, name: "Writing 201", description: "Writing 201 description", credits: 20},
      { year: 3, school: 1, field: 0, name: "Writing 301", description: "Writing 301 description", credits: 20},           
      { year: 1, school: 1, field: 1, name: "Cinematography 101", description: "Cinematography 101 description", credits: 20},
      { year: 2, school: 1, field: 1, name: "Cinematography 201", description: "Cinematography 201 description", credits: 20},
      { year: 3, school: 1, field: 1, name: "Cinematography 301", description: "Cinematography 301 description", credits: 20},    
      { year: 1, school: 1, field: 2, name: "Sound 101", description: "Sound 101 description", credits: 20},
      { year: 2, school: 1, field: 2, name: "Sound 201", description: "Sound 201 description", credits: 20},
      { year: 3, school: 1, field: 2, name: "Sound 301", description: "Sound 301 description", credits: 20},    
      { year: 1, school: 1, field: 3, name: "Acting 101", description: "Acting 101 description", credits: 20},
      { year: 2, school: 1, field: 3, name: "Acting 201", description: "Acting 201 description", credits: 20},
      { year: 3, school: 1, field: 3, name: "Acting 301", description: "Acting 301 description", credits: 20},    
      { year: 1, school: 2, field: 0, name: "Electronics 101", description: "Electronics 101 description", credits: 20},
      { year: 2, school: 2, field: 0, name: "Electronics 201", description: "Electronics 201 description", credits: 20},
      { year: 3, school: 2, field: 0, name: "Electronics 301", description: "Electronics 301 description", credits: 20},           
      { year: 1, school: 2, field: 1, name: "Web Development 101", description: "Web Development 101 description", credits: 20},
      { year: 2, school: 2, field: 1, name: "Web Development 201", description: "Web Development 201 description", credits: 20},
      { year: 3, school: 2, field: 1, name: "Web Development 301", description: "Web Development 301 description", credits: 20},    
      { year: 1, school: 2, field: 2, name: "Game Development 101", description: "Game Development 101 description", credits: 20},
      { year: 2, school: 2, field: 2, name: "Game Development 201", description: "Game Development 201 description", credits: 20},
      { year: 3, school: 2, field: 2, name: "Game Development 301", description: "Game Development 301 description", credits: 20},   
      { year: 1, school: 3, field: 0, name: "Business 101", description: "Business 101 description", credits: 20},
      { year: 2, school: 3, field: 0, name: "Business 201", description: "Business 201 description", credits: 20},
      { year: 3, school: 3, field: 0, name: "Business 301", description: "Business 301 description", credits: 20},           
      { year: 1, school: 3, field: 1, name: "Culture 101", description: "Culture 101 description", credits: 20},
      { year: 2, school: 3, field: 1, name: "Culture 201", description: "Culture 201 description", credits: 20},
      { year: 3, school: 3, field: 1, name: "Culture 301", description: "Culture 301 description", credits: 20}, 
      { year: 1, school: 4, field: 0, name: "3D 101", description: "3D 101 description", credits: 20},
      { year: 2, school: 4, field: 0, name: "3D 201", description: "3D 201 description", credits: 20},
      { year: 3, school: 4, field: 0, name: "3D 301", description: "3D 301 description", credits: 20},           
      { year: 1, school: 4, field: 1, name: "Drawing 101", description: "Drawing 101 description", credits: 20},
      { year: 2, school: 4, field: 1, name: "Drawing 201", description: "Drawing 201 description", credits: 20},
      { year: 3, school: 4, field: 1, name: "Drawing 301", description: "Drawing 301 description", credits: 20},    
      { year: 1, school: 4, field: 2, name: "Animation 101", description: "Animation 101 description", credits: 20},
      { year: 2, school: 4, field: 2, name: "Animation 201", description: "Animation 201 description", credits: 20},
      { year: 3, school: 4, field: 2, name: "Animation 301", description: "Animation 301 description", credits: 20},    
      { year: 1, school: 4, field: 3, name: "Sculpting 101", description: "Sculpting 101 description", credits: 20},
      { year: 2, school: 4, field: 3, name: "Sculpting 201", description: "Sculpting 201 description", credits: 20},
      { year: 3, school: 4, field: 3, name: "Sculpting 301", description: "Sculpting 301 description", credits: 20},        
      { year: 1, school: 4, field: 4, name: "Painting 101", description: "Painting 101 description", credits: 20},
      { year: 2, school: 4, field: 4, name: "Painting 201", description: "Painting 201 description", credits: 20},
      { year: 3, school: 4, field: 4, name: "Painting 301", description: "Painting 301 description", credits: 20},     

    ], 
}

var colors = ["#404040", "#f8b227", "#2a98d3", "#ee561d", "#917ab1", "#4ead92"]

// -1 = unselected
// numbers represent the index of the element above, in coursedata
var state = {
  school : -1,
  field: -1,
  outcome: -1,
  year: -1,
}

var updateScreen = function () {
  for (var a = 0; a < 5; a++) {
    $("#field"+a).hide();  
  }  

  for (var field in coursedata.fields[state.school]) {
    $("#field"+field+"text").html(coursedata.fields[state.school][field])  
    $("#field"+field).delay(field*100).fadeIn(500);  
  }

  $("#structureFieldTitleArrow").css("color", colors[state.school+1])
  $(".structureBIG").html(coursedata.schoolsfirst[state.school])
  $(".structureSMALL").html(coursedata.schoolssecond[state.school])
  $(".structureWrap").css("background", colors[state.school+1])

  if (state.field == -1) {
      $("#structureFieldTitle").hide();
      $("#structureTextBlockTop").html(coursedata.schoolstext[state.school])
      $("#subject").hide();
      $("#subjectTextBlock").hide();  
  } /* else {
      $("#subject").hide();
      $("#subjectTextBlock").hide();  
      $("#subject").html(coursedata.fields[state.school][field])
      $("#subjectTextBlock").html(coursedata.fieldstext[state.school][field])
  } */
    

  $(".outcomesSelected").css("border-left", "8px "+colors[state.school+1]+" solid")
  updateFields();
  //updateOutcomes();


}

var updateFields = function () {
  if (state.field != -1) {
    $("#structureFieldTitle").show();    
    $("#structureFieldText" ).hide().html(coursedata.fields[state.school][state.field]).fadeIn(250)    
    $("#structureTextBlockTop").html(coursedata.fieldstext[state.school][state.field]).fadeIn(350)
  }

  for (var a =0; a < 5; a++) {

        if (state.field == a) {
          $( "#field"+a ).css("background", colors[state.school+1])
        } else {
          $( "#field"+a ).css("background", colors[0])  
        }

  }
  updateOutcomes();
}

var updateOutcomes = function () {
    for (var a = 0; a < 7; a++) {
      if (a == state.outcome) {
        $("#outcomes"+a).css("border-left", "8px "+colors[state.school+1]+" solid")
      } else {
        $("#outcomes"+a).css("border-left", "8px "+colors[0]+" solid") 
      }
    } 


    if ((state.outcome > 5) && (state.outcome < 10)) {
      $("#outcomes6").css("border-left", "8px "+colors[state.school+1]+" solid")
    }

    if (state.outcome < 6) {
      $("#outcomes7").delay(200).fadeOut(250);
      $("#outcomes8").delay(100).fadeOut(250);      
      $("#outcomes9").delay(0).fadeOut(250);
    }

    if (state.outcome == 6) {      
      $("#outcomes7").delay(0).fadeIn(250);
      $("#outcomes8").delay(100).fadeIn(250);
      $("#outcomes9").delay(200).fadeIn(250);
      state.year = -1;
    }

    if (state.outcome == 7) { state.year = 1 }
    if (state.outcome == 8) { state.year = 2 }
    if (state.outcome == 9) { state.year = 3 }
    
    if (state.year < 1) {
      $("#outcomes7").css("background", colors[0])
      $("#outcomes8").css("background", colors[0])
      $("#outcomes9").css("background", colors[0])
    }

    if (state.year == 1) {
      $("#outcomes7").css("background", colors[state.school+1])
      $("#outcomes8").css("background", colors[0])
      $("#outcomes9").css("background", colors[0])
      $("#courselayoutleftcontentyear").html(1).show()
      $("#courselayoutleftcontenttitle").html("Foundation Year").show()
    }
    
    if (state.year == 2) {
      $("#outcomes7").css("background", colors[0])
      $("#outcomes8").css("background", colors[state.school+1]) 
      $("#outcomes9").css("background", colors[0])   
      $("#courselayoutleftcontentyear").html(2).show()
      $("#courselayoutleftcontenttitle").html("Second Year").show()
    }

    if (state.year == 3) {
      $("#outcomes7").css("background", colors[0])
      $("#outcomes8").css("background", colors[0])
      $("#outcomes9").css("background", colors[state.school+1])
      $("#courselayoutleftcontentyear").html(3).show()
      $("#courselayoutleftcontenttitle").html("Third Year").show()
    }

    

    if ((state.outcome > 6) && (state.outcome < 10)) {
      ///show subjects for years
        var subjectsdisplay = []
          $("#subject").html("").hide()
          $("#subjectTextBlock").html("").hide()

        for (var subject in coursedata.subjects) {
          //console.log(coursedata.subjects[subject])
          if (coursedata.subjects[subject].school == state.school) {
            if (coursedata.subjects[subject].year == state.year) {
              if (coursedata.subjects[subject].field == state.field) {
                subjectsdisplay.push(coursedata.subjects[subject])   
              }
            }            
          }
        }

        //sort

        //display
        for (var subject in subjectsdisplay) {
          $("#subject").html(subjectsdisplay[subject].name).fadeIn(250)
          $("#subjectTextBlock").html(subjectsdisplay[subject].description).fadeIn(250)  
        }

        //course layout
        $("#courselayoutmenu").fadeIn(250);
        
    } else {
        $("#courselayoutmenu").fadeOut(250);
    }


}

$( document ).ready(function() {
    $("#courselayoutmenu").hide()
    $("#schoolblock1text").hide()
    $("#schoolblock2text").hide()
    $("#schoolblock3text").hide()
    $("#schoolblock4text").hide()
    $("#schoolblock5text").hide()
    $(".fieldheading").hide()
    $(".fieldsmenu").hide()    
    $(".outcomesheading").hide()
    $(".outcomesmenu").hide()
    $(".outcomesmenu2").hide()
    $(".courseheading").hide()
    $(".coursemenu").hide()

    $("#matrixBigDS").hide()
    $("#matrixBigFA").hide()
    $("#matrixBigIA").hide()
    $("#matrixBigCS").hide()
    $("#matrixBigVA").hide()
    //$(".schoolbigblocks").hide()
    $("#matrixBigDS").delay(0).fadeIn(500);
    $("#matrixBigFA").delay(250).fadeIn(500);
    $("#matrixBigIA").delay(500).fadeIn(500);
    $("#matrixBigCS").delay(750).fadeIn(500);
    $("#matrixBigVA").delay(1000).fadeIn(500);
    $(".fields:hover").css("background", "#f00")

    $("#outcomes7").hide();
    $("#outcomes8").hide();
    $("#outcomes9").hide();

    schoolblock1slides();
    schoolblock2slides();
    schoolblock3slides();
    schoolblock4slides();
    schoolblock5slides();

    
    //$(".schoolbigblocks").delay(1000).fadeIn(1000);
    $( "#matrixBigDS" ).click( function() {
      $( "#matrixBigDS" ).css( 'border-bottom','5px solid #333' );
      $( "#matrixBigFA" ).css( 'border-bottom','5px solid #fff' );      
      $( "#matrixBigIA" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigCS" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigVA" ).css( 'border-bottom','5px solid #fff' );
      $( ".schoolbigblocks" ).css('display','none')      
      schoolblock1slidesEnabled = 0;
      schoolblock2slidesEnabled = 0;
      schoolblock3slidesEnabled = 0;
      schoolblock4slidesEnabled = 0;
      schoolblock5slidesEnabled = 0;
      state.school = 0  //DESIGN STUDIES
      state.field = -1;
      updateScreen();
      showrest();
    })

    $( "#matrixBigFA" ).click( function() {
      $( "#matrixBigDS" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigFA" ).css( 'border-bottom','5px solid #333' );      
      $( "#matrixBigIA" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigCS" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigVA" ).css( 'border-bottom','5px solid #fff' );
      $( ".schoolbigblocks" ).css('display','none')
      schoolblock1slidesEnabled = 0;
      schoolblock2slidesEnabled = 0;
      schoolblock3slidesEnabled = 0;
      schoolblock4slidesEnabled = 0;
      schoolblock5slidesEnabled = 0;
      state.school = 1;  //FILM ARTS
      state.field = -1;
      updateScreen();      
      showrest();
    })

    $( "#matrixBigIA" ).click( function() {
      $( "#matrixBigDS" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigFA" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigIA" ).css( 'border-bottom','5px solid #333' );
      $( "#matrixBigCS" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigVA" ).css( 'border-bottom','5px solid #fff' );
      $( ".schoolbigblocks" ).css('display','none');
      schoolblock1slidesEnabled = 0;
      schoolblock2slidesEnabled = 0;
      schoolblock3slidesEnabled = 0;
      schoolblock4slidesEnabled = 0;
      schoolblock5slidesEnabled = 0;
      state.school = 2  //DESIGN STUDIES
      state.field = -1;
      updateScreen();      
      showrest();
    })

    $( "#matrixBigCS" ).click( function() {
      $( "#matrixBigDS" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigFA" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigIA" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigCS" ).css( 'border-bottom','5px solid #333' );
      $( "#matrixBigVA" ).css( 'border-bottom','5px solid #fff' );
      $( ".schoolbigblocks" ).css('display','none');
      schoolblock1slidesEnabled = 0;
      schoolblock2slidesEnabled = 0;
      schoolblock3slidesEnabled = 0;
      schoolblock4slidesEnabled = 0;
      schoolblock5slidesEnabled = 0;
      state.school = 3  //DESIGN STUDIES
      state.field = -1;
      updateScreen();      
      showrest();
    })    

    $( "#matrixBigVA" ).click( function() {
      $( "#matrixBigDS" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigFA" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigIA" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigCS" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigVA" ).css( 'border-bottom','5px solid #333' );
      $( ".schoolbigblocks" ).css('display','none');
      schoolblock1slidesEnabled = 0;
      schoolblock2slidesEnabled = 0;
      schoolblock3slidesEnabled = 0;
      schoolblock4slidesEnabled = 0;
      schoolblock5slidesEnabled = 0;
      state.school = 4  //DESIGN STUDIES
      state.field = -1;
      updateScreen();      
      showrest();
    }) 

    $( "#matrixBigDS" ).hover(
      function() {
        if (state.school == -1) {
          $( ".schoolbigblocks" ).fadeIn(500);
        }
        
        $("#schoolblock1text").fadeIn(500)
        schoolblock1slidesEnabled = 0;
        $("#schoolblock1demo0").fadeOut(500);
        $("#schoolblock1demo1").fadeOut(500);
        $("#schoolblock1text").width($("#schoolblock1").width());
        $("#schoolblock2text").width($("#schoolblock2").width());
        $("#schoolblock3text").width($("#schoolblock3").width());
        $("#schoolblock4text").width($("#schoolblock4").width());
        $("#schoolblock5text").width($("#schoolblock5").width());        
      }, function() {      
        $("#schoolblock1text").fadeOut(500)
        if (state.school == -1) {
          schoolblock1slidesEnabled = 1;
        }        
        schoolblock1slides();
      }
    );

    $( "#matrixBigFA" ).hover(
      function() {
        if (state.school == -1) {
          $( ".schoolbigblocks" ).fadeIn(500);
        }
        $("#schoolblock2text").fadeIn(500)
        schoolblock2slidesEnabled = 0;
        $("#schoolblock2demo0").fadeOut(500);
        $("#schoolblock2demo1").fadeOut(500);
        $("#schoolblock1text").width($("#schoolblock1").width());
        $("#schoolblock2text").width($("#schoolblock2").width());
        $("#schoolblock3text").width($("#schoolblock3").width());
        $("#schoolblock4text").width($("#schoolblock4").width());
        $("#schoolblock5text").width($("#schoolblock5").width());          
      }, function() {      
        $("#schoolblock2text").fadeOut(500)
        if (state.school == -1) {
          schoolblock2slidesEnabled = 1;
        }        
        schoolblock2slides();
      }
    );

    $( "#matrixBigIA" ).hover(
      function() {
        if (state.school == -1) {
          $( ".schoolbigblocks" ).fadeIn(500);
        }
        $("#schoolblock3text").fadeIn(500)
        schoolblock3slidesEnabled = 0;
        $("#schoolblock3demo0").fadeOut(500);
        $("#schoolblock3demo1").fadeOut(500);
        $("#schoolblock1text").width($("#schoolblock1").width());
        $("#schoolblock2text").width($("#schoolblock2").width());
        $("#schoolblock3text").width($("#schoolblock3").width());
        $("#schoolblock4text").width($("#schoolblock4").width());
        $("#schoolblock5text").width($("#schoolblock5").width());         
      }, function() {      
        $("#schoolblock3text").fadeOut(500)
        if (state.school == -1) {
          schoolblock3slidesEnabled = 1;
        }        
        schoolblock3slides();
      }
    );

    $( "#matrixBigCS" ).hover(
      function() {
        if (state.school == -1) {
          $( ".schoolbigblocks" ).fadeIn(500);
        }
        $("#schoolblock4text").fadeIn(500)
        schoolblock4slidesEnabled = 0;
        $("#schoolblock4demo0").fadeOut(500);
        $("#schoolblock4demo1").fadeOut(500);
        $("#schoolblock1text").width($("#schoolblock1").width());
        $("#schoolblock2text").width($("#schoolblock2").width());
        $("#schoolblock3text").width($("#schoolblock3").width());
        $("#schoolblock4text").width($("#schoolblock4").width());
        $("#schoolblock5text").width($("#schoolblock5").width());          
      }, function() {      
        $("#schoolblock4text").fadeOut(500)
        if (state.school == -1) {
          schoolblock4slidesEnabled = 1;
        }        
        schoolblock4slides();
      }
    );

    $( "#matrixBigVA" ).hover(
      function() {
        if (state.school == -1) {
          $( ".schoolbigblocks" ).fadeIn(500);
        }
        $("#schoolblock5text").fadeIn(500)
        schoolblock5slidesEnabled = 0;
        $("#schoolblock5demo0").fadeOut(500);
        $("#schoolblock5demo1").fadeOut(500);
        $("#schoolblock1text").width($("#schoolblock1").width());
        $("#schoolblock2text").width($("#schoolblock2").width());
        $("#schoolblock3text").width($("#schoolblock3").width());
        $("#schoolblock4text").width($("#schoolblock4").width());
        $("#schoolblock5text").width($("#schoolblock5").width());          
      }, function() {      
        $("#schoolblock5text").fadeOut(500)
        
        if (state.school == -1) {
          schoolblock5slidesEnabled = 1;
        }        
        
        schoolblock5slides();
      }
    );

    ////////////////////////////////////////////////////////
    /* FIELDS */

   $( "#field0" ).hover(
      function() {
        $( "#field0" ).css("background", colors[state.school+1])
      }, function() {    

        if (state.field == 0) {
          $( "#field0" ).css("background", colors[state.school+1])
        } else {
          $( "#field0" ).css("background", colors[0])  
        }
        
      }
    );

   $( "#field1" ).hover(
      function() {
        $( "#field1" ).css("background", colors[state.school+1])
      }, function() {      
        
        if (state.field == 1) {
          $( "#field1" ).css("background", colors[state.school+1])
        } else {
          $( "#field1" ).css("background", colors[0])  
        }

      }
    );

  $( "#field2" ).hover(
      function() {
        $( "#field2" ).css("background", colors[state.school+1])
      }, function() {      
        
        if (state.field == 2) {
          $( "#field2" ).css("background", colors[state.school+1])
        } else {
          $( "#field2" ).css("background", colors[0])  
        }

      }
    );

   $( "#field3" ).hover(
      function() {
        $( "#field3" ).css("background", colors[state.school+1])
      }, function() {              
        
        if (state.field == 3) {
          $( "#field3" ).css("background", colors[state.school+1])
        } else {
          $( "#field3" ).css("background", colors[0])  
        }

      }
    );

   $( "#field4" ).hover(
      function() {
        $( "#field4" ).css("background", colors[state.school+1])
      }, function() {      
        

        if (state.field == 4) {
          $( "#field4" ).css("background", colors[state.school+1])
        } else {
          $( "#field4" ).css("background", colors[0])  
        }

      }
    );   

  $( "#field0" ).click( function() {
    state.field = 0;    
    updateFields();          
  });

  $( "#field1" ).click( function() {
    state.field = 1;
    updateFields();           
  });

  $( "#field2" ).click( function() {
    state.field = 2;
     updateFields();     
  });

  $( "#field3" ).click( function() {
    state.field = 3;
     updateFields();        
  });

  $( "#field4" ).click( function() {
    state.field = 4;
    updateFields();        
  });

    //////////////////////////////////////////////////////////

$("#outcomes0").click( function() {
  state.outcome = 0;
  updateOutcomes();   
})

$("#outcomes1").click( function() {
  state.outcome = 1;
  updateOutcomes();   
})

$("#outcomes2").click( function() {
  state.outcome = 2;
  updateOutcomes();   
})

$("#outcomes3").click( function() {
  state.outcome = 3;
  updateOutcomes();   
})

$("#outcomes4").click( function() {
  state.outcome = 4;
  updateOutcomes();   
})

$("#outcomes5").click( function() {
  state.outcome = 5;
  updateOutcomes();   
})

$("#outcomes6").click( function() {
  state.outcome = 6;
  updateOutcomes();   
})

$("#outcomes7").click( function() {
  state.outcome = 7;
  updateOutcomes();   
})

$("#outcomes8").click( function() {
  state.outcome = 8;
  updateOutcomes();   
})

$("#outcomes9").click( function() {
  state.outcome = 9;
  updateOutcomes();   
})

  //////////////////////////////////////////////////////////
}); //do not delete

