var schoolblock1slidessequence=["http://www.openwindow.co.za/coursematrix/static/slides/ds0.jpg", "http://www.openwindow.co.za/coursematrix/static/slides/ds1.jpg", "http://www.openwindow.co.za/coursematrix/static/slides/ds2.jpg" ];
var schoolblock2slidessequence=["http://www.openwindow.co.za/coursematrix/static/slides/fa0.jpg", "http://www.openwindow.co.za/coursematrix/static/slides/fa1.jpg", "http://www.openwindow.co.za/coursematrix/static/slides/fa2.jpg" ];
var schoolblock3slidessequence=["http://www.openwindow.co.za/coursematrix/static/slides/ia0.jpg", "http://www.openwindow.co.za/coursematrix/static/slides/ia1.jpg", "http://www.openwindow.co.za/coursematrix/static/slides/ia2.jpg" ];
var schoolblock4slidessequence=["http://www.openwindow.co.za/coursematrix/static/slides/va0.jpg", "http://www.openwindow.co.za/coursematrix/static/slides/va1.jpg", "http://www.openwindow.co.za/coursematrix/static/slides/va2.jpg" ];

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

function mobile() {
  if (window.innerWidth <= 767) {
    $(".schoolbigblocks").hide();
    return 1;
  } else {
    return 0;
  }
}

function schoolblock1slides()
{
  if ((schoolblock1slidesEnabled == 1) && (mobile() == 0)) {
    schoolblock1slidesi=(schoolblock1slidesi>=schoolblock1slidessequence.length-1)?0:(schoolblock1slidesi+1);
    $("#schoolblock1demo" + schoolblock1slidestoggle).css('background-image', 'url(' + schoolblock1slidessequence[schoolblock1slidesi] + ')');
    var w = $("#schoolblock1").width();
    var h = $("#schoolblock1").height();
    $("#schoolblock1demo" + schoolblock1slidestoggle).width(w)
    $("#schoolblock1demo" + schoolblock1slidestoggle).height(h)
    $("#schoolblock1text").width(w)
    $("#schoolblock1text").height(h)   
    $("#schoolblock1demo" + schoolblock1slidestoggle).fadeIn(500,function(){window.setTimeout(schoolblock1slides,5000);});
    schoolblock1slidestoggle^=1;
    $("#schoolblock1demo" + schoolblock1slidestoggle).fadeOut(1000);
  }
  //$("#debug").html("#demo0=" + $("#demo0").css('background-image')+"</br>"+"#demo1=" + $("#demo1").css('background-image')+"</br>Current div:#demo"+schoolblock1slidestoggle);
}

function schoolblock2slides()
{
  if ((schoolblock2slidesEnabled == 1) && (mobile() == 0)) {
    schoolblock2slidesi=(schoolblock2slidesi>=schoolblock2slidessequence.length-1)?0:(schoolblock2slidesi+1);
    $("#schoolblock2demo" + schoolblock2slidestoggle).css('background-image', 'url(' + schoolblock2slidessequence[schoolblock2slidesi] + ')');
    var w = $("#schoolblock2").width();
    var h = $("#schoolblock2").height();
    $("#schoolblock2demo" + schoolblock2slidestoggle).width(w)
    $("#schoolblock2demo" + schoolblock2slidestoggle).height(h)
    $("#schoolblock2text").width(w)
    $("#schoolblock2text").height(h)   
    $("#schoolblock2demo" + schoolblock2slidestoggle).fadeIn(500,function(){window.setTimeout(schoolblock2slides,5000);});
    schoolblock2slidestoggle^=1;
    $("#schoolblock2demo" + schoolblock2slidestoggle).fadeOut(1000);
  }
  //$("#debug").html("#demo0=" + $("#demo0").css('background-image')+"</br>"+"#demo1=" + $("#demo1").css('background-image')+"</br>Current div:#demo"+schoolblock1slidestoggle);
}

function schoolblock3slides()
{
  if ((schoolblock3slidesEnabled == 1) && (mobile() == 0)) {
    schoolblock3slidesi=(schoolblock3slidesi>=schoolblock3slidessequence.length-1)?0:(schoolblock3slidesi+1);
    $("#schoolblock3demo" + schoolblock3slidestoggle).css('background-image', 'url(' + schoolblock3slidessequence[schoolblock3slidesi] + ')');
    var w = $("#schoolblock3").width();
    var h = $("#schoolblock3").height();
    $("#schoolblock3demo" + schoolblock3slidestoggle).width(w)
    $("#schoolblock3demo" + schoolblock3slidestoggle).height(h)
    $("#schoolblock3text").width(w)
    $("#schoolblock3text").height(h)   
    $("#schoolblock3demo" + schoolblock3slidestoggle).fadeIn(500,function(){window.setTimeout(schoolblock3slides,5000);});
    schoolblock3slidestoggle^=1;
    $("#schoolblock3demo" + schoolblock3slidestoggle).fadeOut(1000);
  }
  //$("#debug").html("#demo0=" + $("#demo0").css('background-image')+"</br>"+"#demo1=" + $("#demo1").css('background-image')+"</br>Current div:#demo"+schoolblock1slidestoggle);
}

function schoolblock4slides()
{
  if ((schoolblock4slidesEnabled == 1) && (mobile() == 0)) {
    schoolblock4slidesi=(schoolblock4slidesi>=schoolblock4slidessequence.length-1)?0:(schoolblock4slidesi+1);
    $("#schoolblock4demo" + schoolblock4slidestoggle).css('background-image', 'url(' + schoolblock4slidessequence[schoolblock4slidesi] + ')');
    var w = $("#schoolblock4").width();
    var h = $("#schoolblock4").height();
    $("#schoolblock4demo" + schoolblock4slidestoggle).width(w)
    $("#schoolblock4demo" + schoolblock4slidestoggle).height(h)
    $("#schoolblock4text").width(w)
    $("#schoolblock4text").height(h)   
    $("#schoolblock4demo" + schoolblock4slidestoggle).fadeIn(500,function(){window.setTimeout(schoolblock4slides,5000);});
    schoolblock4slidestoggle^=1;
    $("#schoolblock4demo" + schoolblock4slidestoggle).fadeOut(1000);
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
    "Visual Arts", 
    ],
  schoolsfirst : [
    "Design", 
    "Film", 
    "Interactive", 
    "Visual",     
    ],
  schoolssecond : [
    "Studies", 
    "Arts", 
    "Arts",
    "Arts", 
    ],
  schoolstext : [
    "With a firm focus on the social and cultural consumption of communication, the department offers subjects such as Communication Design, Illustration and Photography, which foster the art of persuasion through visual imagery.", 
    "The audio-visual industries are the fastest growing sector of the visual arts worldwide. Film and animation is now at the heart of every mass communication medium. <br><br>In FILM ARTS we explore possibilities of expression through the media of Film, 3D Animation, Motion Graphics, Sound and Game Design. <br></br>Students are initiated into industry standard software and technical training relevant to their field of specialisation. More importantly, however, is the emphasis placed on innovative audio-visual decision-making that has come to define The Open Window Film Arts graduate in the work field, both locally and abroad.", 
    "Interactive digital technologies affect our lives in numerous ways. Interaction Design is a comparatively new discipline concerned with designing strategic, human-centered solutions that shape the usefulness and experience of interacting with these technologies. <br></br>Interaction Design deals with both form and behavior as it employs a multidisciplinary approach to design solutions that align with business, social and cultural contexts.", 
    "In Development",
    ],    
  fields : [
      ["Communication Design","Illustration","Photography"],
      ["3D Animation", "Film & Television", "Game Design", "Motion Design", "Production Design", "Screen Acting", "Screenwriting", "Sound Design"],
      ["Interactive Design", "Programming", "3D-Design"],
      ["Field 1", "Field 2", "Field 3", "Field 4", "Field 5"],
      ],
  fieldstext : [
      ["Communication Design provides the basis for a career in the graphic and print design industry - covering typography, advertising and packaging to name but a few. Thie subject is a must for anyone intersted in graphic design.",
      "Illustration focuses on clarifying concepts through visual imagery. The subject deals with creating graphic, visual representations that convey factual and sensory information on a particular idea or concept. Students are given market-related, relevant and thought-provoking illustration briefs within both print-based and digital platforms. They are encouraged to use a wide variety of traditional and digital techniques, materials and media to develop a unique, personal visual language. Basic aspects of illustration-based editorial design, typography and printing are also covered.",
      "Photography is a highly creative and competitive field of practice. Being a very technical subject, a great deal of time is spent handling the camera and working with it in many different settings. This subject will provide students with the technical competence, artistic sensitivity and self confidence to master various photographic genres."], 
      ["Animation is magical – it can speak across cultural, age, gender and language barriers. Our animation course follows the latest industry trends and provides skills necessary to take part in the rapidly expanding digital entertainment industry. We provide training to produce high-end 3D content for the film, television, game and simulation industries.", 
      "Considered to be one of the more progressive film courses in the country, this is a cutting-edge journey into digital filmmaking covering a range of audio-visual expression that includes mainstream entertainment, documentary, commercial, alternative and conceptual filmmaking. Independence is a key word in filmmaking - that means developing a personal vision that allows you to have greater choices in your career to not only service the available industry, but to also be able to create a vision for the future. This course is about living your passion.", 
      "The study of Game Design is approached holistically, beyond its use within video games, but also the application of Game-thinking and technology in our everyday lives.", 
      "Motion Design field description", 
      "Production Design field description", 
      "Screen Acting field description", 
      "Screenwriting field description", 
      "Sound Design field description"],
      ["Interactive design students focus on designing solutions for human interaction with technology. User interface design consists of a large component of the subject and is translated into different mediums, such as websites, smart phone and tablet applications, touch-screen kiosks and other digital interactive technologies. The interactive designer is responsible for user and design research, system design and visual communication in the form of sitemaps, personas, user diagrams, prototypes and other deliverables.", 
      "Interactive Development field description", 
      "Spatial design accommodates people and their behaviour over time in a given space. The Three-dimensional Design course addresses a unique gap in the market between architecture and industrial design. Students learn to design three-dimensionally – unlike other graphic design and multimedia disciplines that work in a two-dimensional environment. Typical projects include exhibition design, retail environments and packaging design."],
      ["Field 1 description", 
      "Field 2 description", 
      "Field 3 description", 
      "Field 4 description", 
      "Field 5 description"],

],
courselist: [
    //short courses
     {outcome:1,school:0,field:0,slp:0,name:"Adobe Photoshop (Basic)", description:"The objective of this short course is to enable a learner to become efficient in the use of Adobe Photoshop and apply intermediate skills and knowledge regarding the software. The learner will be able to edit and retouch digital photography, understand basic workflow, tools and processes within Photoshop."},
     {outcome:1,school:0,field:0,slp:0,name:"Adobe Illustrator (Basic)", description:"From designing logos and business cards to breath-taking artwork, the student will be familiarised with all the tools and techniques necessary to create such work. The student will be educated in various tools featured in Adobe Illustrator and processes involved in generating artworks."},
     {outcome:1,school:0,field:0,slp:0,name:"Adobe InDesign (Basic)", description:"Adobe InDesign is the premier editorial layout and type management program in the creative industry. The student will become familiarised with the process behind creating most large documents such as magazines, manuals, brochures, catalogues or books. The student will learn through practical classes how to create such documents and incorporate their own content."},
     {outcome:1,school:0,field:0,slp:0,name:"Adobe Photoshop (Intermediate)", description:"The objective of this short course is to build on existing skills of the Adobe Photoshop (Basic) short course and explore all of the more advanced techniques available so as to ensure seamless operation and application of tools, workflows and processes involved in editing."},
     {outcome:1,school:0,field:0,slp:0,name:"Adobe Illustrator (Intermediate)", description:"This short course builds on existing skills of the Adobe Illustrator (Basic) short course and explores all of the more advanced techniques available in creating complex designs and artworks through the use of the powerful tools offered by the software."},
     {outcome:1,school:0,field:0,slp:0,name:"Adobe InDesign (Intermediate)", description:"Adobe InDesign (Intermediate) builds on the knowledge acquired in the Adobe InDesign (Basic) short course and explores all of the more advanced features embedded in this editorial layout and type management programme."},
     {outcome:1,school:0,field:0,slp:1,name:"Elements & Principles of Design", description:"Provides students with the knowledge and understanding of the fundamental elements and principles of design in order to develop their visual acuity with regards to practical projects. Furthermore, students will have to display an understanding and basic competence in the use of the relevant design software."},
     {outcome:1,school:0,field:0,slp:1,name:"Typography", description:"Students will be guided to investigate the history of typography as well as the anatomy of typography in order to make informed design decisions. Students will explore the application of typography and its function communicatively, conceptually and decoratively through experimental approaches to traditional and digital media in typography."},
     {outcome:1,school:0,field:0,slp:1,name:"Illustrated Type", description:"This course focuses on the development of hand drawn type. Students are introduced to the treatment of type as an illustrated component. The manner in which the execution of illustrated type influences the expression of the content is explored. The elective thus introduces the students to basic principles of illustrated type and offers insight into experimentation processes relevant to generating successful hand drawn type."},
     {outcome:1,school:0,field:0,slp:1,name:"Colour Theory", description:"This course teaches the student that images themselves can communicate in the same way that language does. Various media and styles are explored to inform a multi-disciplinary approach to design. The understanding of basic colour theory and colour combinations informs the process of creating and selecting images, one of the most important tasks as a designer."},
     {outcome:1,school:0,field:0,slp:1,name:"Layout Design", description:"Students will be taught to develop an understanding of page layout and the relation between image and text together with page activation for various format sizes and scales. Students are encouraged to work with a combination of different styles and media in order to successfully integrate image and type in the relevant design software."},
     {outcome:1,school:0,field:0,slp:1,name:"Identity Design", description:"The objectives of the short course is to enable a learner to use basic and fundamental knowledge regarding branding and graphic design to create a fresh and efficient corporate identity, complete with logo and other visual media to accompany it. The learner will be able to conceptualise a brand identity and transfer that idea into functional corporate media."},
     {outcome:1,school:0,field:1,slp:2,name:"Adobe Photoshop (Basic)", description:"The objective of this short course is to enable a learner to become efficient in the use of Adobe Photoshop and apply intermediate skills and knowledge regarding the software. The learner will be able to edit and retouch digital photography, understand basic workflow, tools and processes within Photoshop."},
     {outcome:1,school:0,field:1,slp:2,name:"Adobe Illustrator (Basic)", description:"From designing logos and business cards to breath-taking artwork, the student will be familiarised with all the tools and techniques necessary to create such work. The student will be educated in various tools featured in Adobe Illustrator and processes involved in generating artworks."},
     {outcome:1,school:0,field:1,slp:2,name:"Adobe Photoshop (Intermediate)", description:"The objective of this short course is to build on existing skills of the Adobe Photoshop (Basic) short course and explore all of the more advanced techniques available so as to ensure seamless operation and application of tools, workflows and processes involved in editing."},
     {outcome:1,school:0,field:1,slp:2,name:"Adobe Illustrator (Intermediate)", description:"This short course builds on existing skills of the Adobe Illustrator (Basic) short course and explores all of the more advanced techniques available in creating complex designs and artworks through the use of the powerful tools offered by the software."},
     {outcome:1,school:0,field:1,slp:3,name:"Traditional techniques and materials", description:"This short course involves the use of specific traditional illustration techniques and media to explore the fundamentals of traditional illustration including emulation of tone, light, shadow, form, texture and colour, combined with different approaches to visual style, atmosphere and mood."},
     {outcome:1,school:0,field:1,slp:3,name:"Basic principles of traditional illustration", description:"This short course offers learners an understanding of visual communication, message making and the production of conceptual content by making use of the traditional medium of gouache in an illustration context."},
     {outcome:1,school:0,field:1,slp:3,name:"Marley Tile Printing", description:"This short course offers learners the opportunity to engage in traditional printmaking techniques as part of the illustration process. Basic principles, techniques and processes relating to Marley Tile design, carving and printing will be covered in order to enable learners to produce illustrations by employing the expressive characteristics of the medium of traditional printmaking."},
     {outcome:1,school:0,field:1,slp:3,name:"Drypoint Etching", description:"This short course offers learners the opportunity to engage in traditional printmaking techniques as part of the illustration process. Basic principles, techniques and processes relating to Drypoint Etching design, carving and printing will be covered in order to enable learners to produce illustrations by employing the sensitive quality obtained through this medium of traditional printmaking."},
     {outcome:1,school:0,field:1,slp:4,name:"Illustrated Type", description:"This course focuses on the development of hand drawn type. Students are introduced to the treatment of type as an illustrated component. The manner in which the execution of illustrated type influences the expression of the content is explored. The elective thus introduces the students to basic principles of illustrated type and offers insight into experimentation processes relevant to generating successful hand drawn type."},
     {outcome:1,school:0,field:1,slp:4,name:"The illustrated zine", description:"In this short course students are required to develop their own illustrated publication, which is required to take the form a zine. The zine will be based on their own personal exploration of one of the two provided themes. The final outcome is an A5 hand bound and printed zine featuring illustrations, which explore the students unique approach and treatment of the chosen theme."},
     {outcome:1,school:0,field:1,slp:4,name:"Figure Drawing", description:"This short course explores traditional and contemporary ways to draw the live model. Students are familiarized with basic anatomy and drawing techniques as applied to the figure. Students are introduced to gestural drawing to grasp the human figure in motion. Students will also explore and understand the effects of mark making, composition, value development and lighting when working from a figure."},
     {outcome:1,school:0,field:1,slp:4,name:"Experimental Drawing", description:"This short course introduces students to experimental drawing with alternative materials and approaches. The idea is to approach drawing from a more intuitive angle in order to expand on the more academic training obtained in drawing as a core subject. The student thus learns how to apply mediums in an unconventional manner in order to achieve authentic modes of mark making."},
     {outcome:1,school:0,field:2,slp:5,name:"Adobe Photoshop (Basic)", description:"The objective of this short course is to enable a learner to become efficient in the use of Adobe Photoshop and apply intermediate skills and knowledge regarding the software. The learner will be able to edit and retouch digital photography, understand basic workflow, tools and processes within Photoshop."},
     {outcome:1,school:0,field:2,slp:5,name:"Camera Foundation", description:"This introduces the student to the terminologies and functionality of the 35mm digital single-lens reflex camera from basic to advanced camera settings, and will focus on aspects such as exposure control, the practical control of contrast and tone, as well as the fundamental principles of light and colour."},
     {outcome:1,school:0,field:2,slp:5,name:"Photoshop Post-production (Basic)", description:"This extends from the Adobe Photoshop short course by introducing the student to basic non-destructive post-production skills using the Adobe Photoshop interface. Core components pertaining to the image editing workflow include managing images in Adobe Bridge, colour correction, tone mapping, contrast control, corrective editing, image sharpening and file output."},    
     {outcome:1,school:0,field:2,slp:6,name:"Creative Lighting (Basic)", description:"This introduces the student to the fundamental principles and behaviour of light, and how light can be modified and controlled in order to model lighting on various subject matter in an appropriate and creative fashion.  The component furthermore instructs the student how to control natural light and creatively problem-solve lighting solutions covering a variety of subject matter, including portraiture, food and outdoor-based events.  The student will be instructed on how to use light modifiers optimally, such as diffusers and reflectors in natural light conditions.  In addition, the module covers light meters pertaining to the correct interpretation of the light meter reading, and how exposure compensation can be applied to refine exposure control."},    
     {outcome:1,school:0,field:2,slp:6,name:"Lenses and perspective", description:"This module extends the student’s knowledge gained in the Camera Foundation short course, broadening the student’s understanding of the anatomy of the camera lens and furthermore introduces technical aspects such as lens aberrations, lens perspective, and depth-of-focus.  Students must therefore understand the anatomy of camera optics and must be able to identify lens aberrations.  Students must also showcase proficiency in the practical control of lens perspective and depth-of-focus through the the execution of a series of practical assignments."},    
     {outcome:1,school:0,field:2,slp:6,name:"Elements & Principles of Design", description:"The student will be introduced to the formal elements of design and instructed on how to implement design principles in the photographic frame correlating with composition and frame division. Students must showcase proficiency in compositional skills and apply the elements of design successfully in the range of practical assignments."},    
     {outcome:1,school:0,field:2,slp:7,name:"Adobe Photoshop (Intermediate)", description:"The objective of this short course is to build on existing skills of the Adobe Photoshop (Basic – Intermediate) short course and explore all of the more advanced techniques available so as to ensure seamless operation and application of tools, workflows and processes involved in editing."},    
     {outcome:1,school:0,field:2,slp:7,name:"Photoshop Post-production (Intermediate)", description:"This module extends the student’s knowledge of post-production by introducing intermediate image correction techniques applicable to the workflow of commercial photography genres. This module elaborates on intermediate techniques in image editing, image editing software and printing practice, and places emphasis on corrective editing for beauty and product photography.  In addition, the student will be introduced to various techniques focusing on non-destructive corrective editing, as well as intermediate large volume editing, retouching practice and creative techniques applied correctly."},    
     {outcome:1,school:0,field:2,slp:7,name:"Creative Lighting (Intermediate)", description:"This module introduces the student to daylight-balanced flash lighting using flashgun and strobist equipment and accessories. In addition, the module will instruct the student on how to use flash equipment to model lighting on subject matter in mixed lighting conditions using a flashgun on- and off-camera, using multiple flash systems as well as learning how to control and modify the quality of light and lighting angle."},    
     {outcome:1,school:0,field:2,slp:8,name:"Architectural photography", description:"This module introduces the student to the documentation of architectural subject matter focusing on both interior as well as exterior architectural structures.  Emphasis is placed on the application of lighting, the appropriate application of composition and practical control of lens perspective to achieve the desired effect."},    
     {outcome:1,school:0,field:2,slp:8,name:"Studio Portraiture", description:"This module introduces the student to daylight-balanced flash lighting used in a controlled studio environment and in order to photograph portraiture.  This module broadens the student’s knowledge of the theory of light and the variety of lighting techniques applied to portraiture.  The student will be able to understand the vital differences and reasons for using a studio-controlled lighting environment rather than employing natural light, as well as acquiring knowledge on studio workflow, studio etiquette and a range of creative lighting techniques."},    
     {outcome:1,school:0,field:2,slp:8,name:"Product photography", description:"This module introduces the student to still life and desktop photography revolving around commercial application, photographed using both natural ambient light as well as using a controlled studio environment using daylight-balanced flash.  Subject matter such as glass and shiny metal are chosen and students must be able to creatively problem solve lighting and context."},    

     {outcome:1,school:1,field:0,slp:9,name:"3D Studio Max (Basic)", description:"In this beginner’s course, students are introduced to working in 3D software. Students explore the interface and the different modelling techniques used to create and re-create objects realistically in 3D."},
     {outcome:1,school:1,field:0,slp:9,name:"3D Studio Max (Intermediate)", description:"3D Studio Max+ guides students through more advanced features of working in 3Ds Max. Advanced modelling techniques are introduced as well as principles of texturing, lighting and rendering to equip students with the skills necessary to generate realistic three dimensional imagery."},
     {outcome:1,school:1,field:0,slp:9,name:"3D Character Animation Workflow", description:"Throughout this course students will work through the entire 3D character animation production pipeline. They are guided through the processes of modelling a character from a chosen design and creating rigs and animation tools to allow for movement. With the finished character they focus on movement and motion studying reference material to to plan the animation of their characters."},       
     {outcome:1,school:1,field:1,slp:10,name:"Filmmaking (Basic)", description:"The objectives of the film making short course is to enable the learner to develop a “hands-on”, practical approach to film making and takes the student through the various stages of production."},
     {outcome:1,school:1,field:1,slp:10,name:"Filmmaking (Intermediate)", description:"Filmmaking Intermediate is a concise and thorough introduction into the world of film making and the film making process. Emphasis is placed on developing an understanding of basic production processes for film. Students will investigate the process of conceptual development, working with client briefs, preparing the necessary film documents in order to initiate a film project and look closely at budgeting and scheduling considerations as well as setting up a cast for a shoot and working with actors on set."},
     {outcome:1,school:1,field:1,slp:10,name:"Film Editing with Premier Pro (Basic)", description:"The objectives of the Premiere Pro editing short course is to enable the learner to develop a “hands on”, practical approach to the editing process and takes the student through the various steps involved in the editing process, from working with different media formats to editing and exporting footage for specific outputs. The course is broken down into two levels – each comprising a 6 week module."},         
     {outcome:1,school:1,field:1,slp:10,name:"Film Editing with Premier Pro (Intermediate)", description:"The Premiere Pro Intermediate course starts with a brief refresher of film and editing conventions, a history of Non-linear editing platforms and an introduction to the new features available in Premiere Pro CS6. Students will be guided in developing an understanding of the interface and tools available within Premiere Pro CS6 as well as gaining the skills necessary to set up an editing work flow and work with different media elements in an effective and efficient manner. Furthermore, students will explore the considerations necessary to develop an approach to editing for different specific effects and genres."},             
     {outcome:1,school:1,field:1,slp:11,name:"The Film Producers's Toolkit", description:"Students are guided through the process of developing an understanding of the process involved in producing and initiating a film project. Through the course, students will acquire a deeper understanding of initiating a film, gathering support and funding, putting together a crew, location scouting, creating a pre-production package and shooting script and identifying distribution avenues and film festivals."},             
     {outcome:1,school:1,field:1,slp:11,name:"DSLR Cinematography", description:"Since DSLR cameras have been established as viable alternatives to expensive and inaccessible high-end film (video) cameras for creating and capturing beautiful images on screen, very specific techniques and approaches have developed in order to get the most out of this type of equipment – this course will look at the considerations necessary for creating an awareness of the DSLR film-making process and the specific approach relevant to it."},
     {outcome:1,school:1,field:2,slp:12,name:"Making Games in Unity 3D", description:"To introduce the student to the art of game design, the professional practice from an industry perspective, as well as software training in Unity3D. Students will be making game prototypes, while practicing essential game design processes and techniques."},
     {outcome:1,school:1,field:2,slp:12,name:"Game Development & Scripting", description:"The students are introduced to fundamental concepts and core language structures of game programming. The purpose of the course is to facilitate game functionality in terms of saving player profiles, scoring systems, leader-boards and loading data. The course includes a survey of commercial languages, as well as proprietary scripting languages from industry applications."},
     {outcome:1,school:1,field:2,slp:12,name:"Interactive electronics", description:"We introduce you to making interactive circuits. You will learn how to control lights and/or motors and measure the world through sensors. You will learn fundamentals of programming devices and building electronic circuits in a practical and visual way."},       
     {outcome:1,school:1,field:2,slp:12,name:"Interactive 3D for Web", description:"We introduce you to coding with javascript and generating interactive 3D scenes in the browser with three.js. You will learn the fundamentals of programming while having fun generating art with numbers."},
     {outcome:1,school:1,field:3,slp:13,name:"Animation in AfterEffects", description:"The course provides a sold foundation in digital animation to prepare the student for a career as a professional motion designer. Students are introduced to essential motion graphic techniques using industry standard software Adobe After Effects. Emphasis is placed on animating shape, text and image for a range of motion design outputs, such as animated logos, infographics, adverts, music videos, promotional media and title sequences."},
     {outcome:1,school:1,field:3,slp:13,name:"3D Motion Graphics using Cinema 4D", description:"The course provides students with the essential skills to combine 2D and 3D motion graphic techniques extending their digital animation abilities and allowing them to produce a wider range of motion design projects. Students are introduced to 3D motion graphics using Cinema 4D. They plan, model, light, texture and animate 3D elements. Emphasis is placed on using effective methodology for integrating 3D elements with 2D motion graphics in After Effects."},
     {outcome:1,school:1,field:3,slp:13,name:"Digital compositing using After Effects", description:"Digital compositing is a popular and essential skill in producing professional motion graphics, its most popular applications being special effects, title sequences and animation for music videos. Students are introduced to the techniques and methodology of integrating motion graphics with live-action footage. They plan and design motion elements for seamless compositing with video footage."},          
     {outcome:1,school:1,field:3,slp:13,name:"Stop Motion Animation", description:"The traditional techniques used in stop-motion animation provides a unique extension of skills, allowing the students to produce a wider range of motion design solutions. Students are introduced to stop-motion animation techniques for application in professional motion graphics. They plan, design and animate a series of stop-motion style projects with emphasis on effective technique and the proper consideration of animation principles."},
     {outcome:1,school:1,field:4,slp:12,name:"Production Design for Film & Advertising", description:"Students will study the concepts and general principles involved in creating production design solutions for film and advertising environments. Focus is placed on developing the student’s ability to recognise text-based material in visual terms and relate this to 3-dimensional design decision-making within a narrative context. Text analysis skills, production design research, methods and techniques and the components, structure and responsibilities of the art department, its sequence of execution and modes of communication are explored."},
     {outcome:1,school:1,field:5,name:"Screen Acting", description:"Not currently available in Short Course format."},
     {outcome:1,school:1,field:6,slp:11,name:"Screenwriting for Advertising", description:"In the world of online marketing, Youtube and Vimeo, few things are catchier than a great advertisement or slick company profile. In this course the learner will learn how to work from client briefs in order to produce scripts for adverts as well as corporate videos."},
     {outcome:1,school:1,field:6,slp:12,name:"Screenwriting for Interactive Media", description:"From games to innovative advertising campaigns, the presence of interactive storytelling is on the rise. The role of a viewer’s effect on the flow of the narrative is beginning to have growing impact on how media is presented. In this course the learner will learn how to creative narratives for interactive media."},
     {outcome:1,school:1,field:6,slp:9,name:"Screenwriting Methods for Short Animations", description:"Ever had an idea too magical to be captured in a live action short film? Are your stories best told by claymation, traditional animation or 3D animation? Every film has its challenges, in this course the learner will learn the skills and techniques required to face the unique and exciting challenges of writing an animated short film."},          
     {outcome:1,school:1,field:7,slp:15,name:"Sound Design in Pro Tools", description:"Pro Tools is the industry standard in Audio Post Production throughout the world of film, this course provides the learner with the skills to work within Pro Tools and be a effective operator for Sound Design in Digital Media."},
     {outcome:1,school:1,field:7,slp:15,name:"Studio and Location Sound Recording", description:"Every sound in a digital media is captured to generate a world for you to experience, in this course  learners will learn how to record sound inside a professional studio and outside on location, all to enhance the experience of their digital media."},
     {outcome:1,school:1,field:7,slp:15,name:"Sound for Games", description:"A game takes you into a world you want to experience, gives you a thrill and excitement you looking to experience. Sound within games is important in recreating the experience. In this course the learner a will learn how to interface Pro Tools with Unity and create a sound-stage and effects for their games."},         

     {outcome:1,school:2,field:0,slp:16,name:"Responsive Web: Website Planning & Workflow", description:"Learn to plan websites that will respond to and correctly display on a variety of digital devices that access your website. Understand the workflow, processes and deliverables required in planning, design and implementing a Web project."},
     {outcome:1,school:2,field:0,slp:16,name:"Website Design", description:"This course will equip you with the essential knowledge and skills to create visual designs for responsive websites. Learn to apply fundamental design elements and principles in the digital Web environment."},
     {outcome:1,school:2,field:0,slp:17,name:"Website Implementation", description:"Convert visual website designs into working HTML Web pages using Adobe web-export tools and Adobe Dreamweaver. Gain fundamental skills to structure Web pages using HTML and CSS, while being introduced to other Web technologies used to make websites dynamic and interactive."},
     {outcome:1,school:2,slp:19,name:"Website Implementation", description:"Convert visual website designs into working HTML Web pages using Adobe web-export tools and Adobe Dreamweaver. Gain fundamental skills to structure Web pages using HTML and CSS, while being introduced to other Web technologies used to make websites dynamic and interactive."},     
     {outcome:1,school:2,field:0,slp:16,name:"Adobe Muse", description:"Adobe Muse is aimed at graphic designers, allowing them to publish dynamic websites for desktop and mobile devices without writing code. Adding interactivity is made easy through a range of existing components and widgets."},
     {outcome:1,school:2,field:0,slp:17,name:"WordPress Theme Design", description:"Learn to style and customize WordPress Themes using a range of methods, including Page Templates. Using Page Templates requires little to no Web development knowledge and allows you to create custom pages within a WordPress theme."},
     {outcome:1,school:2,field:0,slp:18,name:"User Interface (UI) and Screen Design", description:"Designing for screen and the “user interface” is a daunting task. The large variety of digital devices and features they offer present many challenges for digital design. This course will equip you with a fundamental understanding and skillset to successfully solve these challenges. "},
     {outcome:1,school:2,field:0,slp:18,name:"Mobile Application Design", description:"Create visual designs for a (native) mobile application that adhere to manufacturer’s (Apple iOS) standards and best practice guidelines. Present your screen designs and a user-flow diagram that illustrate interaction and page transitions."},
     {outcome:1,school:2,field:0,slp:18,name:"Prototyping: Interactive Media", description:"Presenting your interactive applications to clients or team members, i.e. development team, communicate best when interaction and other dynamic features are simulated in the presentation. Creating these interactive presentations/simulations are referred to as (digital) prototyping."},
     {outcome:1,school:2,field:1,slp:19,name:"HTML5 & CSS3", description:"HTML5 is the latest version of the technology that provides the underlying structure of Web pages. Visual display of HTML pages is controlled with CSS3, which allows us to create a rich (aesthetic) experience with HTML Web pages."},
     {outcome:1,school:2,field:1,slp:20,name:"JavaScript", description:"JavaScript is the most popular client-side scripting language that provides the capability to manipulate Web pages through the interface or Web browser. Provide users with a dynamic Web experience and ad interactive features to your website."},
     {outcome:1,school:2,field:1,slp:20,name:"jQuery", description:"jQuery is the most popular JavaScript library, which allows you to ad dynamic features such as document manipulation and animation to your website with great ease. This feature-rich cross-platform library has changed the way many developers write JavaScript."},
     {outcome:1,school:2,field:1,slp:17,name:"Mobile Web", description:"jQuery Mobile is a HTML5-based user interface system designed to make responsive web sites and apps that are accessible on all smartphone, tablet and desktop devices."},
     {outcome:1,school:2,slp:20,name:"Mobile Web", description:"jQuery Mobile is a HTML5-based user interface system designed to make responsive web sites and apps that are accessible on all smartphone, tablet and desktop devices."},
     {outcome:1,school:2,field:1,slp:21,name:"PHP & MySQL 101", description:"Create database-driven websites using the most popular server-side technologies. Use PHP to separate your websites design, structure and functionality from it’s content by serving dynamic pages from the server, which loads content your from the MySQL database."},
     {outcome:1,school:2,field:1,slp:21,name:"PHP & MySQL 102", description:"Learn to write Object Oriented (OO) PHP programs and build upon your PHP & MySQL skills by exploring advanced server-side and Web development topics and methodologies. Apply your new skills and develop a sophisticated Web application."},
     {outcome:1,school:2,field:1,slp:21,name:"CMS: WordPress", description:"Unleash the power of the most popular Content Management System (CMS) WordPress to create unique designs and functionality for your clients. Learn to develop custom WordPress Themes that suit your clients needs and allow them to instantly change the look of their website."},
     {outcome:1,school:2,field:1,slp:21,name:"CMS: Joomla", description:"Discover the true power of Joomla, the most popular Content Management System (CMS) amongst Web developers, to create unique designs and functionality for your clients. Learn to develop custom Joomla Themes that suit your clients needs and allow them to instantly change the look of their website. "},
     {outcome:1,school:2,field:1,slp:21,name:"Web Application Development", description:"Web applications are becoming increasingly more popular due their cross-platform nature, and ability to be updated and maintained, and no need for distribution and installation. This course equips you with the skills to develop software applications that run in the Web environment."},
     {outcome:1,school:2,field:0,name:"Adobe Dreamweaver", description:"Learn to use Dreamweaver’s intuitive visual interface to create and edit websites and publish to Web and mobile platforms. This course focus on software training and the essential features required for web and mobile authoring."},
     {outcome:1,school:2,field:1,name:"Actionscript 3.0", description:"Learn to develop interactive multimedia projects using the native programming language for Adobe Flash. Actionscript 3.0 is also used to develop cross-platform Web applications and Rich Internet Applications (RIA) that runs natively on desktop computers using Apache Flex."},
     {outcome:1,school:2,field:1,name:"Java Fundamentals", description:"Learn to use the core Java Programming Language, one of the most popular and robust programming languages, using Java ME (Micro Edition). Java is used in many development environments including web and mobile devices."},
     {outcome:1,school:2,field:1,name:"Objective-C Language Fundamentals", description:"Objective-C is a general-purpose, object-oriented programming language and the main programming language for Apple’s OS X and iOS. This course focus on Objective-C language fundamentals and serves as an introduction to iOS mobile app development."},
     {outcome:1,school:2,field:1,name:"Hybrid Mobile Application Development 1", description:"Develop mobile applications (Apps) using Web technologies such as HTML5. Hybrid apps are becoming increasingly popular and hold many advantages, depending on your mobile strategy."},
     {outcome:1,school:2,field:1,name:"Hybrid Mobile Application Development 2", description:"Build on your existing knowledge of hybrid app development and learn to add advanced features to your mobile apps. You will also explore packaging and distributing your app in this module."},
     {outcome:1,school:2,field:1,name:"iOS Application Development 1", description:"Developing apps for iOS requires the use of a specific development tool xCode and programming language Objective-C. This course serves as an introduction to the iOS development workflow and tools."},
     {outcome:1,school:2,field:1,name:"iOS Application Development 2", description:"Learn to use xCode, Objective-C and the Cocoa Touch API to develop a native iOS app. Build an app that conforms to standards set out by Apple’s guidelines."},

     {outcome:1,school:3,field:0,name:"Short Course Visual Arts 1", description:"In development."},
     {outcome:1,school:3,field:0,name:"Short Course Visual Arts 2", description:"In development."},
     {outcome:1,school:3,field:0,name:"Short Course Visual Arts 3", description:"In development."},       
     {outcome:1,school:3,field:1,name:"Short Course Visual Arts 1", description:"In development."},
     {outcome:1,school:3,field:1,name:"Short Course Visual Arts 2", description:"In development."},
     {outcome:1,school:3,field:1,name:"Short Course Visual Arts 3", description:"In development."},         
     {outcome:1,school:3,field:2,name:"Short Course Visual Arts 1", description:"In development."},
     {outcome:1,school:3,field:2,name:"Short Course Visual Arts 2", description:"In development."},
     {outcome:1,school:3,field:2,name:"Short Course Visual Arts 3", description:"In development."},       
     {outcome:1,school:3,field:3,name:"Short Course Visual Arts 1", description:"In development."},
     {outcome:1,school:3,field:3,name:"Short Course Visual Arts 2", description:"In development."},
     {outcome:1,school:3,field:3,name:"Short Course Visual Arts 3", description:"In development."},          
     {outcome:1,school:3,field:4,name:"Short Course Visual Arts 1", description:"In development."},
     {outcome:1,school:3,field:4,name:"Short Course Visual Arts 2", description:"In development."},
     {outcome:1,school:3,field:4,name:"Short Course Visual Arts 3", description:"In development."},
     
    //SLPs 
     {outcome:2,school:0,field:0,slp:0,name:"Adobe Design Software (Graphic Design)", description:"The SLP combines Adobe Photoshop, Adobe Illustrator and Adobe InDesign and introduce the Adobe Design Software suite as tools that play a pivotal role in the graphic design realm. Students will be familiarized with basic to advanced skills and explore the various functions, tools, techniques and processes unique to each software package."},
     {outcome:2,school:0,field:0,slp:1,name:"Fundamental Graphic Design", description:"The aim of this SLP is to provide students with the fundamental concepts, tools and techniques for creating successful visual compositions. The course encompasses the principles of graphic design, layout, identity design and type setting."},
     {outcome:2,school:0,field:1,slp:2,name:"Adobe Design Software (Illustration)", description:"The SLP combines Adobe Illustrator and Adobe Photoshop. By exploring these two packages, students gain insight into the main processes and digital techniques and learn how both of these packages have a specific function within the realm of design. While Illustrator will give students tools for generating imagery, Photoshop will provide a valuable platform for editing content."},
     {outcome:2,school:0,field:1,slp:3,name:"Traditional Illustration", description:"The objectives of the course engage a learner with the working processes of traditional illustration. This includes the production of imagery, the combination of drawing skills with visual research and the ability to communicate a message through visual imagery. The different approaches to, and applications of, traditional illustration will be explored through the application of traditional media in areas ranging from drawing to printmaking."},
     {outcome:2,school:0,field:1,slp:4,name:"Contemporary Illustration", description:"The objectives of the course engage a learner with the working processes relevant to contemporary illustration. This includes the production of digitally produced imagery, which offers the student insight into different digital styles and approaches. Digital and traditional tools will be experimented with in order to arrive at various modes of illustrated expressions. Contemporary illustration in a promotional and publication context provides the main focus."},
     {outcome:2,school:0,field:2,slp:5,name:"Essential Photography Tools", description:"This short-learning programme introduces the student to the fundamental tools required to practice digital photography, comprising both hardware and software.  This programme instructs the student on the mechanics, functionalities, terminologies and digital workflow paths of both essential software as well as camera equipment."},
     {outcome:2,school:0,field:2,slp:6,name:"Photography Techniques (Basic)", description:"This short-learning programme introduces the learner to the fundamental principles, theories and techniques required to practice digital photography, comprising the development of an awareness of light; the ability to control and modify light in order to creatively model lighting on subject matter; the ability to interpret light meter readings accurately in order to refine exposure control; and, to use Adobe Photoshop in order to skillfully apply appropriate post-production to captured digital images."},
     {outcome:2,school:0,field:2,slp:7,name:"Photography Techniques (Intermediate)", description:"This short-learning programme broadens the learner’s skill sets, complementing the student’s fundamental photography tools and techniques with the development of creativity, artistic sensitivity and visionary ability.  This programme introduces the student to the use of daylight-balanced flash used in mixed lighting conditions, advanced Adobe Photoshop and post-production skills."}, 
     {outcome:2,school:0,field:2,slp:8,name:"Professional Photography Practice", description:"This short-learning programme broadens the student’s skill sets and professional practice knowledge by introducing two additional in-demand photographic practices, workflow and techniques applied in commercial contexts in South Africa, namely product photography, architectural photography and studio portraiture."},
     
     {outcome:2,school:1,field:0,slp:9,name:"3D Animation Kick-starter", description:"The 3D Animation Kick-starter course is aimed at providing the essential skills and techniques required to allow students to create their own animated short films. Students with no prior animation experience can create characters, build new worlds, and tell stories limited only by their imaginations. The course provides students with a foundation understanding of working in 3D applications, and guides them through the entire 3D character animation production pipeline from modeling, texturing and rigging to animation, lighting and rendering. Students are also introduced to principles and methods of screenwriting geared toward the short animation format."},
     {outcome:2,school:1,field:1,slp:10,name:"Foundation in Digital Filmmaking", description:"The Film-making foundational course is designed specifically to provide aspiring filmmakers with little or no film-making experience with the practical skills necessary to realize their filmic vision. Students are equipped with skills necessary to develop their own craft and become valuable assets to the film industry in South Africa. This short learning program comprises four sections throughout which students will be exposed to the basic skills associated with film production including basic DSLR camerawork, sound recording, lighting and filming. Students are also provided with a foundational framework of film conventions and narrative devices. Furthermore, students will receive a basic overview of film editing and the post-production process. Having completed the Film-making foundational Short Learning Program, students will have been  introduced to the skills necessary to film, edit and craft short film projects and also acquire an understanding of the processes involved in the film-making environment."},
     {outcome:2,school:1,field:1,slp:11,name:"Writing and Directing Digital Media", description:"This SLP is geared toward preparing students to function within the film and television industry. Students are guided through the process of developing an understanding of the process involved in producing and initiating a film project. Through the course, students will acquire a deeper understanding of initiating a film, gathering support and funding, putting together a crew, location scouting, creating a pre-production package and shooting script and identifying distribution avenues and film festivals. Students are further equipped with necessary cinematography and screenwriting skills and the basic concepts of production design for film and advertising."},
     {outcome:2,school:1,field:2,slp:12,name:"Make Games", description:"The Make Games SLP equips students to create, design and develop their own functional, interactive games. To introduce the student to the art of game design, the professional practice from an industry perspective, as well as software training in Unity3D. Students will be making game prototypes, while practicing essential game design processes and techniques. The students are introduced to fundamental concepts and core language structures of game programming. The purpose of the course is to facilitate game functionality in terms of saving player profiles, scoring systems, leader-boards and loading data. The course includes a survey of commercial languages, as well as proprietary scripting languages from industry applications. Further, we introduce you to making interactive circuits. You will learn how to control lights and/or motors and measure the world through sensors. You will learn fundamentals of programming devices and building electronic circuits in a practical and visual way. And finally we introduce you to coding with javascript and generating interactive 3D scenes in the browser with three.js. You will learn the fundamentals of programming while having fun generating art with numbers."},
     {outcome:2,school:1,field:3,slp:13,name:"Animation & VFX", description:"Animation & Visual Effects introduces students to the essential skills used in contemporary motion graphics. Students are guided through a range of animation techniques and styles  - from with basic shape, text and image animation to combining 3D and 2D elements, also compositing motion graphics into live-action footage and traditional stop-motion animation. Emphasis is placed on gaining thorough practical knowledge and developing animation ability through a solid understanding, and the effective consideration, of animation principles when producing professional motion graphics."},
     {outcome:2,school:1,field:5,slp:14,name:"Screen Acting not available", description:"Screen Acting does not currently feature within the Short Course offering."},
     {outcome:2,school:1,field:7,slp:15,name:"Sound Design Techniques", description:"Pro Tools is the industry standard in Audio Post Production throughout the world of film, this course provides the learner with the skills to work within Pro Tools and be a effective operator for Sound Design in Digital Media. Additionally, students learn how to record sound inside a professional studio and outside on location, all to enhance the experience of their digital media and produce effective audio content for games."},
     
     {outcome:2,school:2,field:0,slp:16,name:"Responsive Website Design", description:"Learn to plan for and design Web content that can be served to a range of devices, from desktop computers to tablets and mobile devices. Control how Web content responds to the variations in screen sizes and device capabilities."},
     {outcome:2,school:2,field:0,slp:17,name:"Web & Mobile Design Technologies", description:"Learn to implement visual website designs in HTML format and WordPress, the leading Content Management System (CMS). Use the popular JavaScript library jQuery Mobile to create mobile websites that are “touch-friendly”."},
     {outcome:2,school:2,field:0,slp:18,name:"Design for Small Screens", description:"Understand the fundamentals of designing for a variety of digital devices. This course will provide you with the essential skills to design successful user interfaces (UI) and mobile applications (iOS). Learn to present your projects to clients or development teams using interactive prototypes."},
     {outcome:2,school:2,field:1,slp:19,name:"Accessible Website Implementation", description:"Implement website designs in HTML format that adhere to accessibility standards. Learn to use the rich set of features and unleash the power of HTML5 and CSS3."},
     {outcome:2,school:2,field:1,slp:20,name:"Client-Side Scripting", description:"Take your websites to the next level and provide users with a rich interactive Web and mobile Web experience using the most popular client-side scripting technologies: JavaScript, jQuery and jQuery Mobile."},
     {outcome:2,school:2,field:1,slp:21,name:"Server-Side Scripting", description:"Develop powerful database-driven websites and Web applications using the most popular Open Source technologies PHP & MySQL. Choose one of the two most popular Content Management Systems (CMS) WordPress or Joomla to develop dynamic websites that are easy to mange and maintain."},
     {outcome:2,school:2,field:2,slp:22,name:"Formulating Design Briefs", description:"Introduces students to problem statements, and encourages them to ask relevant questions in order to best address a clients or projects design requirements. Defining or framing design questions well is the first step towards solving them."},
     {outcome:2,school:2,field:2,slp:23,name:"3D Design Problem Solving", description:"Design methods are investigated. Scientific methods are compared with creative and integrated methods. The study of design methods provides formal tools that equip and inform our students’ approach to design thinking and three dimensional problem solving. Students choose from a small selection of different projects - this amplifies the need for an awareness of several design strategies."},

     {outcome:2,school:3,field:0,name:"SLP Visual Arts 1", description:"In development."},
     {outcome:2,school:3,field:0,name:"SLPeVisual Arts 2", description:"In development."},
     {outcome:2,school:3,field:0,name:"SLPeVisual Arts 3", description:"In development."},
     {outcome:2,school:3,field:1,name:"SLPeVisual Arts 1", description:"In development."},
     {outcome:2,school:3,field:1,name:"SLPeVisual Arts 2", description:"In development."},
     {outcome:2,school:3,field:1,name:"SLPeVisual Arts 3", description:"In development."},
     {outcome:2,school:3,field:2,name:"SLPeVisual Arts 1", description:"In development."},
     {outcome:2,school:3,field:2,name:"SLPeVisual Arts 2", description:"In development."},
     {outcome:2,school:3,field:2,name:"SLPeVisual Arts 3", description:"In development."},
     {outcome:2,school:3,field:3,name:"SLPeVisual Arts 1", description:"In development."},
     {outcome:2,school:3,field:3,name:"SLPeVisual Arts 2", description:"In development."},
     {outcome:2,school:3,field:3,name:"SLPeVisual Arts 3", description:"In development."},
     {outcome:2,school:3,field:4,name:"SLPeVisual Arts 1", description:"In development."},
     {outcome:2,school:3,field:4,name:"SLPeVisual Arts 2", description:"In development."},
     {outcome:2,school:3,field:4,name:"SLPeVisual Arts 3", description:"In development."},

    //Professional Skills/Major Electives
    // set pscHide to 1 to hide from professional skills lists
     {outcome:3, pscHide: 1,school:0,field:0,compulsory:2,name:"Copywriting", description:"Copywriting equips students to write for various media platforms for the purpose of advertising or marketing. The main aim of the copy is to persuade the addressee (reader, listener) to buy into an advertised product or to subscribe to a certain viewpoint that the text shares."},
     {outcome:3,school:0,field:0,compulsory:3,name:"Digital Publishing", description:"Digital Publishing aims to emulate traditional printing media on modern digital mediums such as tablets and phones. Rather than a traditional printed page consisting of text and imagery, digital publishing provides the viewer with a greater sense of interactivity in the form of animations, video and sound. "},
     {outcome:3,school:0,field:0,compulsory:3,name:"Advanced Printing Practice", description:"Advanced Printing Practice is geared to equip students with the necessary tools to be able to create documents for print. The printing process will be explored in depth in relation to the various forms of commercial printing. The evolution of print and its various incarnations through the ages will also be discussed."},
     {outcome:3,school:0,field:0,compulsory:2,name:"Concept Development", description:"The main aim of the concept development course is to build a solid understanding of the creative process and the associated thinking skills that can be used to generate and implement ideas and concepts.  The course aims to strengthen student ideas, visualisation and thinking abilities by promoting curiosity, knowledge building and exploration. The course also seeks to teach students to draw inspiration from various sources using key thinking techniques"},
     {outcome:3,school:0,field:0,compulsory:2,name:"Motion Design For Designers", description:"This course is geared to introducing design students to the workflow of Adobe After Effects. At the end of this module, students will have the necessary skills to create a functional logo animation as well as have insight to basic animation fundamentals."},
     {outcome:3,school:0,field:0,compulsory:2,name:"DPS Tools for Web", description:"The objective of this course is to familiarise design students with some of the latest tools in the Adobe offering such as Muse and Edge. Students will be able to create a functional HTML 5 website. The course will also cover basic web fundamentals such as grids and responsive design."},
     {outcome:3,school:0,field:1,compulsory:2,name:"Printmaking", description:"Traditional Illustration Techniques introduces students to a few fundamental printmaking techniques such as monotype, etching and Marley tile. The students become familiarized with various printmaking skills and thus obtain a general understanding of printmaking processes."},
     {outcome:3,school:0,field:1,compulsory:2,name:"Experimental Illustration", description:"This elective explores unconventional modes of mark making which may be introduced into an image making process. The elective investigates a specific theme by employing 5 different non-conventional approaches in order to arrive at a unique execution of a theme. These non-traditional approaches are then compiled into a booklet, which shows the different treatment of the same theme."},
     {outcome:3,school:0,field:1,compulsory:3,name:"Digital Illustration techniques", description:"Digital Illustration Techniques introduces digital processes and techniques in illustration. Students are introduced to various methods of creating images with digital software such as Photoshop and Illustrator. The different applications of Photoshop and Illustrator are explored and applied."},
     {outcome:3,school:0,field:1,compulsory:2,name:"Illustrated type 1", description:"This elective introduces the students to illustrated type. It addresses the treatment of type in an illustration context. Different approaches are discussed and experimentation with illustrated type is undertaken. The students learn how to generate their own illustrated type and become familiar with the integration of illustrated type into a final composition."},
     {outcome:3,school:0,field:1,compulsory:2,name:"Illustrated type 2", description:"This elective explores various methods involved in generating illustrated type. It introduces the planning and conceptual thinking that is involved in this process. The relationship between legibility and expression is discussed and analysed in depth. After completing this elective the student will not only have a better grasp of the process involved in generating illustrated typography but also on its general application. The student is encouraged to develop a detailed illustrated single letter of their choice as part of the first half of the project. The second part consists of the development of an illustrated catch phrase. The relationship between legibility and expression is discussed and analysed."},
     {outcome:3,school:0,field:1,compulsory:2,name:"Advanced printmaking", description:"Advanced Printmaking incorporates a continuation of techniques learnt in Traditional Illustration 201. Students will apply the skills of etching and lino-cutting on a more in-depth level and then adapt the prints in a digital context."},
     {outcome:3,school:0,field:1,compulsory:3,name:"Contemporary Illustration", description:"This involves the creation of a record LP sleeve and encourages the student to explore stylistic approaches of a contemporary nature. The student is encouraged to create a complete illustrated back and front for the record in a more experimental and innovative manner. This also involves the merging of traditional and digital illustration and the integration of illustrated typography is explored."},
     {outcome:3,school:0,field:1,compulsory:2,name:"Artist’s book development", description:"This elective introduces the students to the development of artists’ books. The book format is explored as a platform to explore a specific theme in a unique and unconventional manner. The students create an artist’s book, which may challenge the boundaries of the format in order to communicate their specific treatment of a theme."},
     {outcome:3,school:0,field:1,compulsory:2,name:"Comics 1", description:"This elective explores the combination of text and image. The student is introduced to various comic styles and is exposed to different forms of text integration. Basic principles of comics are thus introduced and applied."},
     {outcome:3,school:0,field:1,compulsory:2,name:"Comics 2", description:"This elective focuses specifically on the visual aspects of sequential art. Different approaches to visual aspects of comics are investigated, focusing on a selected range of specific artists. The elective will culminate in an attempt towards producing an original comic."},
     {outcome:3,school:0,field:1,compulsory:2,name:"Sequential Art 1", description:"This elective explores the combined use of text and image to convey a message. The student is required to choose a fable and to interpret in the form of a comic by making use of sequential conventions. The text must be developed by hand, colour needs to be added and  text must be integrated successfully."},
     {outcome:3,school:0,field:1,compulsory:2,name:"Sequential Art 2", description:"This elective explores the development of sequential images without making use of text. The student is required to choose a text and develop a sequential narrative based on this. Only black and white may be applied. This elective thus explores storytelling based purely on visual elements."},
     {outcome:3,school:0,field:1,compulsory:2,name:"Figure drawing", description:"Figure Drawing explores traditional and contemporary ways to draw the live model. Students are familiarised with basic anatomy and drawing techniques as applied to the figure. Students are introduced to gestural drawing to grasp the human figure in motion. Students will also explore and understand the effects of mark making, composition, value development and lighting when working from a figure. "},
     {outcome:3,school:0,field:2,compulsory:2,name:"Intermediate Adobe Photoshop Post Production 1", description:"Intermediate Adobe Photoshop Post Production furnishes the photography student with digital workflow skills focusing on a range of corrective editing outcomes applied in commercial photography contexts.  Emphasis is placed on non-destructive workflow, file management and file preparation for output."},
     {outcome:3,school:0,field:2,compulsory:2,name:"Studio Portraiture", description:"Studio Portraiture is an introductory module furnishing the student with basic studio proficiency and lighting techniques applied to a variety of commercial portrait contexts, such as corporate portraiture to beauty- and glamour photography.  Emphasis is placed on studio workflow and etiquette, lighting techniques and basic art direction comprising the appropriate use styling and posing of the subject correlating with the creative brief."},
     {outcome:3,school:0,field:2,compulsory:2,name:"Intermediate Adobe Photoshop Post Production 2", description:"Adobe Photoshop Post Production extends the photography student’s digital workflow skills focusing on batch processing of digital files, non-destructive corrective editing, and digital manipulation outcomes applied in commercial photography contexts."},
     {outcome:3,school:0,field:2,compulsory:2,name:"Studio Product Photography", description:"Studio Product Photography is an introductory module furnishing the student with the fundamental beginner to intermediate lighting techniques applied in various commercial product photography contexts, ranging from stock photography to dressed pack shots and product advertising shots.  Emphasis is placed on studio workflow and etiquette, diverse lighting techniques, and basic art direction comprising the appropriate use of styling and context correlating with the creative brief.  Subject matter proven to be challenging to model light appropriately are specifically chosen to hone the student’s lighting skills."},
     {outcome:3,school:0,field:2,compulsory:2,name:"Flash Photography", description:"Flash Photography is a beginner’s course for students who are interested to learn about daylight-balanced flash photography.  This elective will focus on the various equipment and accessories that are available on the market as well as instructing students on how to apply the fundamental lighting techniques where daylight-balanced flash systems are used in commercial photography practices, such as mixed light source situations and various on-location environments."},
     {outcome:3,school:0,field:2,compulsory:2,name:"Architectural Photography", description:"Architectural Photography furnishes the student with a basic to intermediate range of techniques relating to both architectural interior and –exterior photography techniques.  This elective focuses on the varied commercial contexts and applications of architectural photography, and will instruct students how to use of the 35mm digital single-lens reflex camera equipment rather than specialist cameras traditionally used for practicing commercial architectural photography in order to achieve desired results."},
     {outcome:3,school:0,field:2,compulsory:2,name:"Advanced Adobe Photoshop Post Production 1", description:"This fundamental elective is compulsory for Photography 301 students.  Advanced Adobe Photoshop Post Production 301 furnishes the photography student with advanced non-destructive workflow skills.  This module places emphasis on professional corrective editing and retouching, time-efficient batch processing, professional colour grading and colour correction and file preparation for various output media."},
     {outcome:3,school:0,field:2,compulsory:2,name:"Advanced Adobe Photoshop Post Production 2", description:"Advanced Adobe Photoshop Post Production 302 equips the photography student with advanced non-destructive manipulative editing skills, including compositing, exposure- and focus stacking techniques, as well as the use of high dynamic range image editing.  This elective provides the student exposure to the in-demand post-production techniques used in various commercial applications and serves to refine the extensive skill sets to match industry standards of retouching."},
     {outcome:3,school:0,field:2,compulsory:2,name:"Advanced Flash Photography", description:"Advanced Flash Photography aims to extend and refine the student’s skills sets pertaining to lighting solutions in commercial applications where daylight-balanced flash is combined with mixed light sources or mixed lighting conditions in various on-location productions.  This elective provides the student with a variety of commercial contexts wherein advanced lighting skills are demanded and commands both technical and creative insight from the student to deliver a final product reflecting the specifications of the creative brief."},
     {outcome:3,school:0,field:2,compulsory:2,name:"Advanced Studio Portraiture", description:"Advanced Studio Portraiture broadens and refines the student’s lighting and studio production skill sets pertaining to portrait-based photography in a controlled studio environment.  This elective introduces the student to in-demand commercial applications wherein the student’s technical and creative skill sets are challenged to deliver a final product matching industry standards.  Emphasis is placed on special effects lighting and studio production, wherein students perform tasks as production teams in addition to delivering individual work.  The practical output ranges from corporate portraiture to editorial, beauty, and fashion photography."},
     {outcome:3,school:0,field:2,compulsory:2,name:"Advanced Studio Product Photography", description:"Advanced Studio Product Photography broadens the student’s lighting and production skills sets, and furnishes the student with specialist lighting and production techniques pertaining to subject matter used for commercial product photography applications.  Emphasis is placed on advanced production techniques, which comprise the professional desktop photographer’s workflow of lighting and capture techniques in tandem with post-production.  Subject matter proven challenging to appropriately capture is specifically chosen in order to hone the student’s technical skill sets ranging from pre- to post-production."},
     {outcome:3,school:0,field:2,compulsory:2,name:"Macro- and Close-up Photography", description:"Macro- and Close-up Photography furnishes the student with specialist techniques used ptrominently in advertising and corporate art applications.  In addition to the fundamental technical skills and typical commercial uses of macro- and close-up photography, focus is placed on conceptual development, elements of design, specialist equipment, production and post-prucion."},
     
     {outcome:3,school:1,field:0,compulsory:2,name:"3D Character Development", description:"Students take a closer look at the digital concept art community and some of its most prominent artists. By studying the results and techniques of these artists the students are expected to produce various concept sketches consisting of character sketches, costume and prop designs, mood boards, a 3D character sculpt and a full-colour digital artwork."},
     {outcome:3,school:1,field:0,compulsory:2,name:"3D Character Setup for Animation & Games", description:"Students will learn to set up character controllers for the purpose of animation and game design. The elective focuses on the creation and functionality of a standard biped rig structures. In addition students will learn to customise controllers, create blend shapes parameters for facial animation and prepare rigs for game engines."},
     {outcome:3,school:1,field:0,compulsory:2,name:"Digital Environment Rendering", description:"Students will create 3D environments suitable for digital animation production. Students are required to design original environments and assets, while the focus of the exercise is on lighting, texturing and rendering to achieve a photo-realistic rendered effect."},       
     {outcome:3,school:1,field:0,compulsory:2,name:"3D Special Effects", description:"Students apply visual effects in order to enhance the impact of the visual message. Create realistic dynamic simulations and effects that are indistinguishable from real footage, including lighting effects, hard and soft body simulations, particle effects, and fluid simulations."},       
     {outcome:3,school:1,field:0,compulsory:3,name:"Visual Development for CGI", description:"The module covers the processes and techniques used during the creation and production of digital concept art for computer generated imagery (CGI). Students produce traditional hand- or digitally drawn concept art that can be used in animated films, commercials, games or special effects. Concept art includes designs for characters, costumes, props, and environments, shot composition, effects and game elements."},       
     {outcome:3,school:1,field:0,compulsory:3,name:"3D Pre-Visualisation", description:"Students are introduced to pre-visualisation techniques for visual narrative development. The student will generate pre-production material to assist in determining production requirements such as composition, staging, timing and editing."},       
     {outcome:3,school:1,field:0,compulsory:3,name:"Character Based Animation", description:"This elective covers digital character animation techniques and processes. Reference material is generated or sourced in order to study the motion of specific actions. Student breaks down the action into drawn key poses and applies it to a rigged 3D character."},       
     {outcome:3,school:1,field:1,compulsory:2,name:"The Complete HD Broadcast Workflow", description:"Students are guided into developing an understanding of the digital workspace pertaining to shooting and editing digital, high-definition film. The purpose of the course is to enable students to link together the technical aspects of the digital filmmaking process from filming, to capturing data, to editing and finally exporting final products professionally. Basically, this course aims to de-mystify the perceived complexities associated with digital filmmaking."},
     {outcome:3,school:1,field:1,compulsory:2,name:"Genre Film & Lighting", description:"Students are introduced to the basic conventions of camerawork for film, with specific focus on the use of DSLR cameras, techniques and consideration in the film environment. The course aims to equip students with the knowledge and skills necessary to produce and create specific camera movement and effects. Students will furthermore combine this camera knowledge with a series of practical sessions based around lighting solutions to create specific effects on set and on location."},
     {outcome:3,school:1,field:1,compulsory:2,name:"Directing Actors for Screen", description:"Students are guided through the process of developing the skills necessary to assume control of a film set and specifically develop proficiency in working with and directing actors for screen. The course looks at the various aspects associated with directing actors, from auditions, casting, the philosophies of acting to the different schools of acting."},         
     {outcome:3,school:1,field:1,compulsory:2,name:"The Film Producer’s Toolkit", description:"Students are guided through the process of developing an understanding of the process involved in producing and initiating a film project. Through the course, students will acquire a deeper understanding of initiating a film, gathering support and funding, putting together a crew, location scouting, creating a pre-production package and shooting script and identifying distribution avenues and film festivals."},         
     {outcome:3,school:1,field:1,compulsory:3,name:"Excursions into Essential Cinema", description:"Students are guided through the process of developing a deeper and more intricate understanding of film and the filmmaking process. Throughout this course, students learn the techniques necessary to critically assess films and develop a deeper, more informed understanding of the medium. Students learn to identify and evaluate signature styles and approaches employed by highly regarded directors and look at how these directors have influenced cinema today."},         
     {outcome:3,school:1,field:1,compulsory:3,name:"Audio-Visual Installation Art", description:"Students are guided through the process of understanding the politics of representation in film with regard tospace and context. This course aims to equip students with the skills and understanding necessary to create and plan an installation art piece specifically using video as its main component."},         
     {outcome:3,school:1,field:1,compulsory:3,name:"Post-Production Finishing Techniques", description:"Students are guided through the final processes of preparing film projects for distribution in various output media. The course explores and demystifies the concepts of professional titling for film, creating subtitles for film, authoring DVD and Blu-Ray formats and creating supporting promotional material such as posters and DVD covers."},         
     {outcome:3,school:1,field:2,compulsory:2,name:"Concept Art For Games", description:"Students will use various visualisation techniques to interpret a game concept or narrative. This elective will give students the visual communication skills to translate key elements from game design documents or scripts into pre-production material."},
     {outcome:3,school:1,field:2,compulsory:2,name:"Real-Time Animation & Physics", description:"Students are introduced to real-time animation and physics with in Unity3d through creating various collision detection systems, setting up rigid and soft body simulations, ray casting for characters and parameters and finally scene and level optimisation."},
     {outcome:3,school:1,field:2,compulsory:2,name:"Real-Time Rendering Techniques", description:"This unit focuses on the development and realistic representation of non-static real world objects in a computer game environment. Techniques relating to the creation, representation, behaviour and movement of objects in a gaming simulation are discussed. Concepts such as game physics are also introduced."},       
     {outcome:3,school:1,field:2,compulsory:2,name:"Game Publishing", description:"The intent of the module is to prepare the student’s project for publishing. Students will prepare promotional material for their games while exploring the various publishing options. The module will also allow Game Design Major students to make final adjustments to the game design document and visual elements, where necessary."},       
     {outcome:3,school:1,field:2,compulsory:3,name:"Game Prototype Development", description:"The content of this unit is a student-devised semester long game project. Students will produce professionally resolved proposal for a game that will include appropriate project management documentation, a comprehensive research diary and finally a working prototype."},       
     {outcome:3,school:1,field:2,compulsory:3,name:"Game Enhancement Technologies", description:"Students are introduced to various technologies used in animation and game production pipeline. Topics may include Human-computer Interaction (HCI), ergonomic design, motion capture techniques, facial or gestural recognition, Augmented Reality (AR) and other modern device capabilities."},       
     {outcome:3,school:1,field:2,compulsory:3,name:"Game Art & User Interface Design", description:"This course focuses on the development of visual elements for games with an emphasis on theme specific design, mood, texture and lighting. Parameters relating to usability, color, resolution, access speed, playability, aesthetics, navigation and layout will mediate the design process."},       
     {outcome:3,school:1,field:3,compulsory:2,name:"Motion Design Techniques in After Effects", description:"Students are introduced to essential Motion Design concepts and techniques. They use industry standard digital animation software Adobe AfterEffects to complete a series of shape and camera animation exercises aimed at developing professional Motion Design skills."},
     {outcome:3,school:1,field:3,compulsory:2,name:"2D Character Animation in After Effects", description:"Students are introduced to character animation techniques using industry standard software Adobe AfterEffects and Illustrator. They use supplied character models to setup and animate a basic 2D vector character. Emphasis is placed on proper character animation workflow and effectively applying a range of character animation techniques."},
     {outcome:3,school:1,field:3,compulsory:2,name:"Digital Compositing in After Effects", description:"Students are introduced to digital compositing concepts and techniques. They use industry standard software Adobe AfterEffects along with third-party plugins to complete a series of compositing and keying exercises. Emphasis is placed on understanding the technical concepts that underline digital compositing techniques and following the appropriate workflow to achieve professional results."},          
     {outcome:3,school:1,field:3,compulsory:2,name:"Visual Effects in After Effects", description:"Students are introduced to visual effects techniques. They use industry standard software Adobe AfterEffects along with third-party plugins to complete a series of visual effects excercises. Emphasis is placed on understanding the technical concepts that underline digital visual effects techniques and following the appropriate workflow to achieve professional results."},          
     {outcome:3,school:1,field:3,compulsory:3,name:"Integrating 3D elements with Motion Design", description:"Students are introduced to integrating 3D objects with 2D Motion Graphic projects. They utilise 3D modelling and animation techniques to prepare 3D elements for compositing with 2D elements. Emphasis is placed on effective animation workflow and setting up files to facilitate compositing for broadcast-quality rendering and output."},          
     {outcome:3,school:1,field:3,compulsory:3,name:"Stop-Motion Techniques: Armature construction & Pre-Production", description:"Students are introduced to stop-motion armature construction. They design and construct puppets for use in a short stop-motion animated film (E_MD_3.3). Students plan their short-films using concept sketches and storyboards to communicate a narrative sequence and create a series of basic animation tests to evaluate and refine their puppet construction."},          
     {outcome:3,school:1,field:3,compulsory:3,name:"Stop-Motion Techniques: Puppet Animation", description:"Students enter the production phase of their stop-motion film conceptualised in E_MD_3.2. They shoot, evaluate and edit their animation footage. Students effectively carry out project plan set out in Pre-Production (E_MD_3.2)."},          
     {outcome:3,school:1,field:4,compulsory:2,name:"Storyboarding", description:"The Storyboarding elective comprises of a series of lectures on storyboarding as a tool to structure a film or film sequence by visually mapping out the plotline. It aims to develop the student’s abilities to identify and select key visual moments and for the student to be able to draw a visual representation (storyboard) for the rest of the film team to ‘read’ as a visual guide to the film."},
     {outcome:3,school:1,field:4,compulsory:2,name:"Introduction to Production Design Software", description:"The 3-D software training elective is focused on students gaining proficiency in the communication of 3-dimensional environments utilising digital software as a powerful visualisation, communication, planning and design tool. Emphasis is placed on combining the rigors of 2-dimensional orthographic projection principles with the 3-dimensional visualisation, manipulation and communication opportunities the digital format offers."},
     {outcome:3,school:1,field:4,compulsory:2,name:"Production Design Conceptualisation", description:"The production design conceptualisation elective comprises a series of lectures on considerations, techniques and strategies for interpreting text based material into visual ideas. It aims to develop the student’s abilities to identify the significant aspects of a narrative and generate strong concepts for converting this content into physical environments that can meaningfully communicate, support and express the audiovisual productions overall narrative themes and objectives."},      
     {outcome:3,school:1,field:4,compulsory:2,name:"Costume, Hair & Make-up for Film", description:"The costume, hair and make-up elective comprises a series of lectures focused on developing the students abilities to conceptualise and communicate appropriate character design for audiovisual characters. It aims to establish student proficiency in the basic skills necessary for the interpretation and realisation of costume, hair and make-up as essential design tools to convey narrative information about period, region, social class, profession, and personality characteristics of characters and story."},      
     {outcome:3,school:1,field:4,compulsory:3,name:"Exhibition Design", description:"The exhibition design elective is comprised of a series of lectures on the process of providing a conceptual, theoretical and physical framework for the interpretation of displayed work. It aims to develop the student’s ability to articulate and communicate a set of messages in a spatially defined context to provide the viewer with a profound and meaningful spatial experience."},      
     {outcome:3,school:1,field:4,compulsory:3,name:"Psychology of Colour & Texture in Film", description:"The colour and texture elective is comprised of a series of workshop type lectures that utilise a combination of practical exercise and analysis of film reference to build an awareness of how the use of colour and texture influence emotional response and the perception of narrative content. Each lecture is loosely structured around the exploration of a particular colour as a theme."},      
     {outcome:3,school:1,field:4,compulsory:3,name:"Symbology in Design for Film", description:"The symbology in design for film elective is comprised of a series of workshop type lectures that utilise a combination of practical exercise and analysis of film reference to build an awareness of how the use of symbol and metaphor influence the perception of narrative content. Each lecture is loosely structured around the exploration of a basic building block of symbol structure as a theme."},      
     {outcome:3,school:1,field:5,compulsory:2,name:"Screen Acting ", description:"Not currently available in Professional Skills Course format."},
     {outcome:3,school:1,field:5,compulsory:2,name:"Screen Acting ", description:"Not currently available in Professional Skills Course format."},
     {outcome:3,school:1,field:6,compulsory:2,name:"The Three Act Structure of Screenplays", description:"Students will learn the breakdown of a screenplay – advancing the knowledge of the basics of formatting, as well as understanding the three-act structure as it applies to screenwriting."},
     {outcome:3,school:1,field:6,compulsory:2,name:"Screenwriting for Advertising & The Corporate Video", description:"Students will study the skills and techniques of writing advertisements and corporate videos."},
     {outcome:3,school:1,field:6,compulsory:2,name:"Screenwriting for Interactive Media", description:"Students will study the skills and techniques of writing for interactive media, such as games."},          
     {outcome:3,school:1,field:6,compulsory:3,name:"Writing cinematic characters & dialogue", description:"From Dory to Hannibal Lector, unforgettable characters and their infinitely quotable words lie at the heart of any great film. In this course the learner will learn the skills and techniques essential to the creation of cinematic characters and their dialogue."},          
     {outcome:3,school:1,field:6,compulsory:3,name:"The Television Series screenplay", description:"In the motion picture picture industry, the television medium is on the rise and is the largest employer of screenwriters. In this course the learner will learn the skills and techniques required to write spec episodes for existing shows."},          
     {outcome:3,school:1,field:6,compulsory:3,name:"Outlining & developing the feature film screenplay", description:"Writing a feature film is one of the most exciting and challenging tasks for any writer in the motion picture industry. Great screenplays are built on a great foundation. In this course the learner will learn the skills and techniques essential to the outlining and development of a feature screenplay."},          
     {outcome:3,school:1,field:7,compulsory:2,name:"Introduction to Pro Tools", description:"Students are introduced to Pro Tools as a DAW, they will learn how to import, edit. sync and navigate within Pro Tools. Students will use given material to create a basic session in Pro Tools."},
     {outcome:3,school:1,field:7,compulsory:2,name:"Studio & Location Recording", description:"Students learn the different concepts behind studio and location recording. Practical hands on experience will be focused on as well as software techniques for repairing audio as well as how to prevent badly recorded audio."},
     {outcome:3,school:1,field:7,compulsory:2,name:"Sampling", description:"Students will learn how to record sound for, use, edit and program a Sampler to create new sounds and textures for use in Sound Design and Foley. Students will create multi-sampled and multi layered sample patches from new and pre-recorded material."},         
     {outcome:3,school:1,field:7,compulsory:2,name:"Synthesis", description:"Students will be introduced to the concept of synthesis for creating new and unique sounds for foley or tonal music based productions. Students will learn how to manipulate existing patches and how to materialize new patches from scratch. Basic music theory will also be covered to facilitate tonal music creation."},         
     {outcome:3,school:1,field:7,compulsory:3,name:"Audio Post-Production for Film", description:"Students learn about the different post-production protocols and techniques including automated dialogue recording (ADR), Timecodes, dialogue editing and replacement techniques and Foley editing and recording."},         
     {outcome:3,school:1,field:7,compulsory:3,name:"The Science of Acoustics", description:"Students are introduced to the science behind acoustics. Methods for acoustic control are covered as well as room design and considerations for monitoring and playback."},         
     {outcome:3,school:1,field:7,compulsory:3,name:"Mastering Audio", description:"Mastering audio for various platforms and media is explored. Students are exposed to the concepts behind final dynamic range manipulation and equalization, loudness and level standards for broadcast, CD, DVD et cetera."},         
     
     {outcome:3,school:2,field:0,compulsory:2,name:"Web Content Strategy", description:"Learn to formulate content strategy plans for creating, publishing and governing usable content for the Web. As a relatively new discipline in the digital space, content strategy relates closely to user experience, SEO and interface design."},
     {outcome:3,school:2,field:0,compulsory:2,name:"Website Design", description:"Website Design will equip you with the essential knowledge and skills to create visual designs for responsive websites. Learn to apply fundamental design elements and principles in the digital Web environment."},
     {outcome:3,school:2,field:0,compulsory:2,name:"Website Implementation", description:"Convert visual website designs into working HTML Web pages using Adobe web-export tools and Adobe Dreamweaver. Gain fundamental skills to structure Web pages using HTML and CSS, while being introduced to other Web technologies used to make websites dynamic and interactive."},
     {outcome:3,school:2,field:0,compulsory:2,name:"Social Media: Design & Strategy", description:"Understand the fundamentals of social media marketing and learn to selectively utilise social media platforms to promote brand identity. This course will teach you to formulate and execute a successful social media strategy."},
     {outcome:3,school:2,field:0,conpulsory:3,mame:"User Interface (UI) and Screen Design", description:"Designing for screen and the “user interface” is a daunting task. The large variety of digital devices and features they offer present many challenges for digital design. This course will equip you with a fundamental understanding and skillset to successfully solve these challenges."},
     {outcome:3,school:2,field:0,conpulsory:3,mame:"Mobile Application Design: iOS", description:"Create visual designs for a (native) mobile application that adhere to manufacturer’s (Apple iOS) standards and best practice guidelines. Present your screen designs and a user-flow diagram that illustrate interaction and page transitions."},
     {outcome:3,school:2,field:0,compulsory:3,name:"User Experience Design (UXD): User Research & Analysis", description:"This user-centered design (UCD) process is focused on methods to conduct user research around (mostly) digital products such as websites and mobile apps. The information is analysed and recycled in an iterative design process to ensure the product provides the desired usability level and user experience."},
     {outcome:3,school:2,field:0,compulsory:3,name:"User Experience Design (UXD): Wireframing & Prototyping", description:"Continue the iterative design process by producing wireframes, which serves as a structural blueprint for a digital product. Learn to produce various forms of prototypes to demonstrate an interactive simulation of your interactive project."},
     {outcome:3,school:2,field:1,compulsory:2,name:"HTML5 & CSS3", description:"HTML5 is the latest version of the technology that provides the underlying structure of Web pages. Visual display of HTML pages is controlled with CSS3, which allows us to create a rich (aesthetic) experience with HTML Web pages."},
     {outcome:3,school:2,field:1,compulsory:2,name:"Client-Side Scripting", description:"Take your websites to the next level and provide users with a rich interactive Web and mobile Web experience using the most popular client-side scripting technologies: JavaScript, jQuery and jQuery Mobile."},
     {outcome:3,school:2,field:1,compulsory:2,name:"Server-Side Scripting", description:"Develop powerful database-driven websites and Web applications using the most popular Open Source technologies PHP & MySQL. Choose one of the two most popular Content Management Systems (CMS) WordPress or Joomla to develop dynamic websites that are easy to mange and maintain."},
     {outcome:3,school:2,field:1,compulsory:2,name:"Mobile Web: jQuery Mobile", description:"jQuery Mobile is a HTML5-based user interface system designed to make responsive web sites and apps that are accessible on all smartphone, tablet and desktop devices."},
     {outcome:3,school:2,field:2,compulsory:2,name:"Formulating Design Briefs", description:"Introduces students to problem statements, and encourages them to ask relevant questions in order to best address a clients or projects design requirements. Defining or framing design questions well is the first step towards solving them."},
     {outcome:3,school:2,field:2,compulsory:2,name:"3D Design Problem Solving", description:"Design methods are investigated. Scientific methods are compared with creative and integrated methods. The study of design methods provides formal tools that equip and inform our students’ approach to design thinking and three dimensional problem solving. Students choose from a small selection of different projects - this amplifies the need for an awareness of several design strategies."},
     {outcome:3,school:2,field:2,compulsory:2,name:"Packaging Design", description:"Introduces students to typical materials used in the construction of packaging. We examine the main uses of packaging and seek to understand its processing. Projects require the design & development of three different pack constructions for either luxury goods or food related markets."},
     {outcome:3,school:2,field:2,compulsory:2,name:"Furniture Design 1", description:"Introduces the development of a flat-pack side (occasional) table, using similar principles to those used by Thonet and IKEA. Designing parts for laser cutting, paying attention to descriptive component design and logical assembly sequences. Compiling an assembly or user guide to accompany the full scale models."},
     {outcome:3,school:2,field:2,compulsory:3,name:"Corporate Gift Design", description:"Sketching and design by drawing are extensively explored. Model making, prototyping, development models, rapid prototyping, 3D CAD solid and surface modeling, layout engineering design and finally presentation skills are mapped out during successive class projects."},
     {outcome:3,school:2,field:2,compulsory:3,name:"Retail Design 1", description:"Explores three-dimensional design opportunities for effective communication of brands. Brand research, values, identity, presentation, style and end user aspirations form the backdrop against which a three-dimensional design strategy is developed for transforming the brand into a physical location, a process known as ‘brand-scaping’. Producing a comprehensive brand-scaping concept document for an existing brand forms the focus of this module."},
     {outcome:3,school:2,field:2,compulsory:3,name:"Retail Design 2", description:"The previous module is now developed in that students design a ‘concept store’ for their chosen brand. The research (from previous brand-scaping module) now informs their design decision making."},
     {outcome:3,school:2,field:2,compulsory:3,name:"Furniture Design 2", description:"‘Designer makers’ are becoming more prevalent nowadays. This module investigates our local furniture designers, and furniture in Africa. We explore stylistic relevance and practical concerns common to furniture design and limited batch production thinking. We also examine general business administration with a view to developing entrepreneurial designers planning SME’s."},
     
     {outcome:3,school:3,field:0,name:"Professional Skills Visual Arts 1", description:"In development."},
     {outcome:3,school:3,field:0,name:"Professional Skills Visual Arts 2", description:"In development."},
     {outcome:3,school:3,field:0,name:"Professional Skills Visual Arts 3", description:"In development."},
     {outcome:3,school:3,field:1,name:"Professional Skills Visual Arts 1", description:"In development."},
     {outcome:3,school:3,field:1,name:"Professional Skills Visual Arts 2", description:"In development."},
     {outcome:3,school:3,field:1,name:"Professional Skills Visual Arts 3", description:"In development."},
     {outcome:3,school:3,field:2,name:"Professional Skills Visual Arts 1", description:"In development."},
     {outcome:3,school:3,field:2,name:"Professional Skills Visual Arts 2", description:"In development."},
     {outcome:3,school:3,field:2,name:"Professional Skills Visual Arts 3", description:"In development."},
     {outcome:3,school:3,field:3,name:"Professional Skills Visual Arts 1", description:"In development."},
     {outcome:3,school:3,field:3,name:"Professional Skills Visual Arts 2", description:"In development."},
     {outcome:3,school:3,field:3,name:"Professional Skills Visual Arts 3", description:"In development."},
     {outcome:3,school:3,field:4,name:"Professional Skills Visual Arts 1", description:"In development."},
     {outcome:3,school:3,field:4,name:"Professional Skills Visual Arts 2", description:"In development."},
     {outcome:3,school:3,field:4,name:"Professional Skills Visual Arts 3", description:"In development."},
],
    subjects: [
      { year: 1, school: 0, field: 0, name: "Communication Design 101", description: "Students are introduced to the fundamentals of design principles, theories, typography, image and text integration, as well as basic print reproduction processes.", credits: 20},
      { year: 2, school: 0, field: 0, name: "Communication Design 201", description: "Students are introduced to all the possible fields that a visual communicator could be involved in. Through a more advanced and in-depth approach, the student must be able to analyse and solve different types of visual communication problems successfully.", credits: 50},
      { year: 3, school: 0, field: 0, name: "Communication Design 301", description: "At this level, students are given practical industry-based exposure. After completing the subject, students will have the competence and capability to work in any of the industry fields that this subject covers.", credits: 50},   
      { year: 1, school: 0, field: 1, name: "Illustration 101", description: "The subject provides foundation-level knowledge of, and the ability to, apply the basic skills and techniques that are associated with traditional and digital art-making materials. The aim is to communicate ideas and concepts on a visual level by applying basic art elements and design principles.", credits: 20},
      { year: 2, school: 0, field: 1, name: "Illustration 201", description: "Illustration teaches students how to conceive and plan illustration projects; choose the appropriate style; and solve conceptual and practical solutions with regard to specific briefs.", credits: 50},
      { year: 3, school: 0, field: 1, name: "Illustration 301", description: "The subject provides a thorough foundation for illustration styles and techniques. Subject components include theory of design and illustration, conceptual development, design principles, design methodology and production.", credits: 50},     
      { year: 1, school: 0, field: 2, name: "Photography 101", description: "Students are given fundamental skills and knowledge. It covers all technical and theoretical aspects, ranging from camera anatomy, observation, creative control and the application of light; design principles and their application in frame division; and the basic application of digital workflow (from post-production to printing).", credits: 20},
      { year: 2, school: 0, field: 2, name: "Photography 201", description: "Students are introduced to a variety of photographic genres, as well as the techniques and theory that pertains to each genre. Photography 201 focuses on a variety of technical skills that are applied within commercial contexts. Equal attention is given to conceptual development, creative input, artistic sensitivity and the ability to realise industry demands.", credits: 50},
      { year: 3, school: 0, field: 2, name: "Photography 301", description: "The subject focuses on the advanced technical skills and is informed by the ever-changing demands of the photography industry. Focus is placed on conceptual development, creative input and artistic sensitivity with regard to practical assignments. The ultimate aim is to deliver thinking photographers who showcase professionalism and possess the ability to match industry standards.", credits: 50},     
      { year: 1, school: 1, field: 0, name: "3D Animation 101", description: "To familiarise the student with the history and development of the 3D medium, its production process and the latest industry standard software. The series of practical exercises will help the learner understand the 3D software environment, while the theoretical support will assist the student in realising the value of the skill.", credits: 20},
      { year: 2, school: 1, field: 0, name: "3D Animation 201", description: "This course guides the student through the various stages of the professional 3D animation production pipeline. Based on a character-driven animation production, the students start developing a concept for an original character, which is then modelled, textured and set up for a short performance animation sequence synced to pre-existing audio. Students will be introduced to the various tools and techniques used in a typical animation production pipeline, but will also be made aware of the different professional applications of these techniques throughout the process.", credits: 50},
      { year: 3, school: 1, field: 0, name: "3D Animation 301", description: "3D Animation 3 guides the student through the various stages of creating an original animated short-film. Students begin with the conceptualisation, development and pitching an original film concept of up to five minutes. Students then plan and manage the production of all necessary assets, including characters, environments and props and which are textured and prepared for animation through the creation of animation controls and rigs. Animation is meticulously planned and executed, and set up for export and rendering, and students finally utilise post production processes and techniques to complete their short-films. Throughout the filmmaking process, focus is placed on conceptual ability and creative thinking more than in previous years.", credits: 50},           
      { year: 1, school: 1, field: 1, name: "Film & Television 101", description: "Students investigate the building blocks of film language to gain an understanding of how ideas are communicated through an audio-visual medium. This knowledge can be applied in other disciplines such as animation and interactive media that require a narrative to unfold in time. Students will gain insight into both the logic of audio-visual storytelling and the practice of filmmaking.", credits: 20},
      { year: 2, school: 1, field: 1, name: "Film & Television 201", description: "The second-year course focuses on developing students’ film appreciation, audio-visual conceptualising skills, as well as the technical control of sound and film equipment through a series of workshops. A group exercise in producing a multi-episode internet-series will also give students an opportunity to gain experience in launching and managing an audio-visual product in a real-life scenario.", credits: 50},
      { year: 3, school: 1, field: 1, name: "Film & Television 301", description: "Students explore cinematic style and vision and delve into the more conceptual aspects of the medium. These ‘high brow’ excursions are used to develop flexible audio-visual problem-solving skills. Students are exposed to real clients and to the business of filmmaking, where they learn to budget, schedule, and promote their films. After completing the subject, students will be able to produce innovative films, from inception to completion, to suit any audio-visual environment.", credits: 50},    
      { year: 1, school: 1, field: 2, name: "Game Design 101", description: "In the foundation of the Game Design course will address the elements of game design as a discipline. The course will have strong traditional and practical game design components, but also seeks to emphasise a solid academic grounding in the field. Areas of academic study will include game history and theory, game studies and analysis, and game creation in many of its incarnations.", credits: 20},
      { year: 2, school: 1, field: 2, name: "Game Design 201", description: "The Game Design 2 course enables the student to conceptualise and design interactive games in digital media format, by designing well-structured user interfaces and integrating optimised interactive graphics and animation. The student must be able to produce creative 3D work that bears evidence of conceptual and technical understanding of game engine specific requirements.", credits: 50},
      { year: 3, school: 1, field: 2, name: "Game Design 301", description: "The Game Design 3 course enables the student to conceptualise, design and finalise interactive games in digital media format, by designing well-structured user interfaces, integrating optimised interactive graphics and animation and designing a complex artificial intelligence gaming environment to facilitate game immersion. The student must be able to produce creative 3D work that bears evidence of conceptual and technical understanding of game engine specific requirements, create a complex game system and create a final playable interactive game.", credits: 50},    
      { year: 1, school: 1, field: 3, name: "Motion Design 101", description: "Motion Design 1 introduces students to traditional and digital animation techniques. Students are familiarised with the animation principles and gain basic animation skills through a series of hands-on practical projects. Emphasis is placed on providing a solid foundation from which students can extend their skills and explore broadcast Motion Graphics in Motion Design 2.", credits: 20},
      { year: 2, school: 1, field: 3, name: "Motion Design 201", description: "Motion Design 2 introduces students to digital animation and its application to motion graphic design. By focusing on animation principles and using a practical hands-on approach, students are equipped with the skills to pursue a career in digital animation and motion graphics. Emphasis is placed on extending the skills gained in Motion Design 1 and preparing students to develop their individual voice and professional ability in Motion Design 3.", credits: 50},
      { year: 3, school: 1, field: 3, name: "Motion Design 301", description: "Motion Design 3 introduces students to conceptual considerations in digital animation, for both personal expression, as well as, communication driven motion graphics. By focusing on structuring information, ideas and messages, and integrating digital and traditional animation techniques, students are equiped with the skills to pursue a career in digital animation and motion graphics. Emphasis is placed on developing individual voice/style and professional ability to enter the workplace as a proficient and confident Motion Designer.", credits: 50},
      { year: 1, school: 1, field: 4, name: "Production Design 101", description: "Students will study the basic concepts and general principles involved in creating production design solutions for audiovisual environments. Focus is placed on developing the student’s ability to recognise visual content in relation to 3-dimensional design decision making within a narrative context. Through practical exercises, assignments and projects, with lecture based theoretical support, fundamental 3-dimensional design communication; production design organisation and communication, and set production skills are explored.", credits: 20},
      { year: 2, school: 1, field: 4, name: "Production Design 201", description: "Students will study an increasingly specialised range of skills involved in the creation of production design solutions for audiovisual environments. The production design sequence of activities structures the course, which focuses on the development of a comprehensive production design proposal for a scene from a selected screenplay. Emphasis is placed on developing the student’s ability to recognise, evolve, communicate and facilitate 3-dimensional design solutions that support and enhance audiovisual narrative objectives and expression. Advanced practical set production skills and techniques are explored with a focus on the distinction between studio and location shooting. The storyboard is introduced as a structured visual breakdown of the screenplay. The course concludes with an investigation into how the production design elements explored operate within the context of low budget productions.", credits: 50},
      { year: 3, school: 1, field: 4, name: "Production Design 301", description: "Students consolidate and expand their production design skills through practical application to real and imagined projects. Advanced production design considerations such as the psychology of colour and texture in film, the use of symbology and metaphor, and production design special effects are investigated. Production design budget, scheduling and communication are dealt with in depth. The wider application of production design principles in corporate environments including, exhibitions, installations, events and other site specific, thematically driven, temporary design scenarios is addressed and explored through real and/or imagined projects. Emphasis throughout is placed on integrating the production design knowledge gained in the previous two years with practical application.", credits: 50},
      { year: 1, school: 1, field: 5, name: "Screen Acting 101", description: "In Screen Acting 1 students explore the basic tools of every actor, which are breath control, speech, movement, improvisation and play. Students are introduced to the requirements for screen acting and are given the opportunity to explore the needed skill-set for this profession. Emphasis is placed on freeing up and focusing the student’s body and imagination. The final quarter of the year the course focuses on the essential element of acting for screen, the close up shot.", credits: 20},
      { year: 2, school: 1, field: 5, name: "Screen Acting 201", description: "In Screen Acting 2 Degree students build on the foundations laid in year one with an emphasis on honing the student’s body, exploring characterization and gaining an in-depth knowledge of the technical challenges involved in acting for film and television. Students will gain the ability to address individual problems in vocal production and habitual body patterns. Students are introduced to the master acting theories of Strassberg, Stanislavski and “The Method”. Students are introduced to the specific needs unique to acting for television and gain a solid foundation in the technical challenges of working with the film and TV director, the equipment involved with each genre and work-ethic on set.", credits: 50},
      { year: 3, school: 1, field: 5, name: "Screen Acting 301", description: "Screen Acting 3 Degree focus on fine-tuning the student’s acting process in order to enable him/her to embark on a successful screen-acting career. Students further their studies in the techniques of Meisner, Strassberg and “The Method”. Students are introduced to the world of the audio performance and voice-overs. Students gain insight and experience in the comedic acting process and auditioning techniques. Emphasis is placed on preparing the actor for the industry by providing numerous Master classes with industry professionals, such as working actors, casting directors and agents. Specific business skills unique to the professional working actor are highlighted. Students will be required to collaborate with the film-department on their final projects, in order to build material for their show reels. Students will also experience working behind the camera and directing fellow actors.", credits: 50},
      { year: 1, school: 1, field: 6, name: "Screenwriting 101", description: "The Screenwriting course comprises of a series of lectures on screenwriting as a fundamental aspect of the motion picture arts. It aims to develop the student’s abilities to master the basic understanding of how a screenplay and it’s supporting documents are read and written.", credits: 20},
      { year: 2, school: 1, field: 6, name: "Screenwriting 201", description: "The Screenwriting course comprises of a series of lectures on screenwriting as a fundamental aspect of the motion picture arts. It aims to develop the student’s abilities to master the intricacies of a screenplay’s structure, screenplay adaptation and the screenwriter’s role in the motion picture production process.", credits: 50},
      { year: 3, school: 1, field: 6, name: "Screenwriting 301", description: "The Screenwriting course comprises of a series of lectures on screenwriting as a fundamental aspect of the motion picture arts. It aims to develop the student’s abilities to master the writing of characters and dialogue to enhance an actor’s performance, the process of working with other writers on a teleplay (screenplay for television) and the writing and reviewing of feature length screenplays.", credits: 50},
      { year: 1, school: 1, field: 7, name: "Sound Design 101", description: "The Sound Design 101 course is aimed at creating a well-rooted foundation and understanding of the principals of sound and digital audio. The students will be taught how to communicate in sound, principles and practice of capturing sound as well as the theory of digital audio. Students will also be introduced to the concept of a Digital Audio Workstation (DAW), and the student will learn the functionality of the DAW and how to record, edit and process audio for a broad range of applications.", credits: 20},
      { year: 2, school: 1, field: 7, name: "Sound Design 201", description: "The Sound Design 201 course introduces the learner to advanced recording and mixing techniques. It aims at equipping the student with the necessary tools and knowledge to practically record, mix and create sound design for film and radio. Focus is placed on music technology as well as equipping the student with a basic understanding of music theory in order to explore virtual instruments inside the DAW. The student will be exposed to the world of sound creation, Digital Audio Workstations, advanced recording, re-recording and synthesis. Focus will be placed on quality of audio, format of audio, and sound design as the core principles. The course will extend the interfacing between the digital and analogue realms. Students will be taught how to interface real world objects into the systems they use.", credits: 50},
      { year: 3, school: 1, field: 7, name: "Sound Design 301", description: "Sound Design 301 explores the science behind acoustics for recording, mixing and sound stage. Students are also introduced to producing, arranging and scoring in the sound design environment. Students will be taught the concepts behind final mix and mastering of audio for film, television, CD, internet and radio and they will explore the standards and formats for audio delivery in the industry. Surround mixing will be introduced.", credits: 50},
      { year: 1, school: 2, field: 0, name: "Interactive Media Design 101", description: "This foundation level subject provides the groundwork for interactive design and development studies, through investigating multimedia-based communication technologies and design for interactive digital environments. Theories and skills are presented in themes and include communication technology basics, design foundation, corporate/brand identity design, and interactive design fundamentals.", credits: 20},
      { year: 2, school: 2, field: 0, name: "Interactive Media Design 201", description: "On second year level, students learn to provide strategic design solutions for interactive digital media. Themes like interface design, responsive Web design, social media design and strategy provide the building blocks for executing extensive brand communication through Web-based or “online” media.", credits: 50},
      { year: 3, school: 2, field: 0, name: "Interactive Media Design 301", description: "On third-year level, emphasis is placed on strong conceptual thinking and executing strategic design solutions in new and emerging media formats such as smart phones, tablets and touch-screen environments. Students learn to apply technology appropriately and maintain brand integrity as they produce brand communication through a range of digital interactive mediums. Design solutions are shaped to be exceedingly functional and provide an optimal user experience. ", credits: 50},           
      { year: 1, school: 2, field: 1, name: "Multimedia Programming 101", description: "This foundation level subject provides the groundwork for interactive design and development subjects, through investigating multimedia-based computer technologies and design for the interactive digital environment. Theories and skills are presented in themes and include computer technology basics, design foundation, corporate/brand identity design, and interactive design fundamentals.", credits: 20},
      { year: 2, school: 2, field: 1, name: "Multimedia Programming 201", description: "This subject addresses the enormous need for developers who are specifically skilled in developing for communication technologies such as Web, mobile, smart phones and tablets. On second year level, students learn the fundamental theories and skills required to deliver robust solutions in Web-based environments, while conforming to industry standards and best coding practices.", credits: 50},
      { year: 3, school: 2, field: 1, name: "Multimedia Programming 301", description: "On third-year level, emphasis is placed on developing applications specifically for mobile devices, smart phones, tablets and emerging technologies for interactive environments. Students learn to design and implement systems that are both functional and provide an optimal user experience, through adhering to best coding practices and making use of the latest development technologies, programming languages, research and design frameworks.", credits: 50},    
      { year: 1, school: 2, field: 2, name: "Three Dimensional Design 101", description: "Foundation-level gives students a three-dimensional ‘toolbox’ to help solve 3D design problems. This thread unites the three years of study and enables students to apply the design process to solve problems – regardless of whether they are form or spatially oriented. Foundation-level fundamentals teach students how to measure; record measurements; understand and work accurately with scale; and develop their drawing abilities. ", credits: 20},
      { year: 2, school: 2, field: 2, name: "Three Dimensi nal Desigon201", description: "Second year studies incorporate two core areas - retail and product design. These are split on an alternating modular basis, allowing for equal tuition in both domains. Focused modular learning helps foster a sense of purpose in students who need to understand subject matter within the context of their current modules.", credits: 50},
      { year: 3, school: 2, field: 2, name: "Three Dimensi nal Desigon301", description: "Third year studies further develop modules on retail and product design. Students are encouraged to develop conceptual design thinking, three-dimensional problem-solving skills, an understanding of both material selection and appropriate production techniques. Presentation skills and professional practice also feature prominently as students are prepared for entering industry.", credits: 50},   
      
      { year: 1, school: 3, field: 0, name: "Visual Art 101", description: "In development.", credits: 20},
      { year: 2, school: 3, field: 0, name: "Visual Art 201", description: "In development.", credits: 50},
      { year: 3, school: 3, field: 0, name: "Visual Art 301", description: "In development.", credits: 50},
      { year: 1, school: 3, field: 1, name: "Visual Art 101", description: "In development.", credits: 20},
      { year: 2, school: 3, field: 1, name: "Visual Art 201", description: "In development.", credits: 50},
      { year: 3, school: 3, field: 1, name: "Visual Art 301", description: "In development.", credits: 50},    
      { year: 1, school: 3, field: 2, name: "Visual Art 101", description: "In development.", credits: 20},
      { year: 2, school: 3, field: 2, name: "Visual Art 201", description: "In development.", credits: 50},
      { year: 3, school: 3, field: 2, name: "Visual Art 301", description: "In development.", credits: 50},    
      { year: 1, school: 3, field: 3, name: "Visual Art 101", description: "In development.", credits: 20},
      { year: 2, school: 3, field: 3, name: "Visual Art 201", description: "In development.", credits: 50},
      { year: 3, school: 3, field: 3, name: "Visual Art 301", description: "In development.", credits: 50},        
      { year: 1, school: 3, field: 4, name: "Visual Art 101", description: "In development.", credits: 20},
      { year: 2, school: 3, field: 4, name: "Visual Art 201", description: "In development.", credits: 50},
      { year: 3, school: 3, field: 4, name: "Visual Art 301", description: "In development.", credits: 50},      
    ], 
    coresubjects: [ //not connected as yet
      { year: 1, school: 0, name: "Visual Culture", credits: 15},
      { year: 1, school: 0, name: "Drawing", credits: 15},
      { year: 1, school: 0, name: "Academic Skills", credits: 10},
      { year: 1, school: 0, name: "Art History", credits: 10},
      { year: 1, school: 0, name: "Essential Software", credits: 10},
      { year: 1, school: 1, name: "Film Theory", credits: 15},
      { year: 1, school: 1, name: "Media Aesthetics", credits: 15},
      { year: 1, school: 1, name: "Academic Skills", credits: 10},
      { year: 1, school: 1, name: "Story & Ritual", credits: 10},
    ],
    carreers: [
      {school: 0, name: "Compositor", description: "Edits and composites multi-layered audio-visual content for digitally enhanced film and television productions."},
      {school: 0, name: "Sound Designer for Film & Television", description: "Designs and assembles all the audio components of an audio-visual project from music to voice-overs and completes the final mix."},
      {school: 0, name: "Corporate Filmmaker", description: "Conceptualises and realises audio-visual content relevant to the needs of corporate businesses."},
      {school: 0, name: "Film/TV Editor", description: "Edits and supervises post-production audio-visual content for film and television."},
      {school: 0, name: "Layout Artist", description: "Takes direction from storyboard artists and directors to create virtual environments while both 2D and 3D skills. Layout artists will often work within a team of 3D artists on large productions."},
      {school: 1, name: "carreer", description: "carreer description text placeholder"},
      {school: 1, name: "carreer", description: "carreer description text placeholder"},
      {school: 1, name: "carreer", description: "carreer description text placeholder"},
      {school: 1, name: "carreer", description: "carreer description text placeholder"},
      {school: 1, name: "carreer", description: "carreer description text placeholder"},
      {school: 1, name: "carreer", description: "carreer description text placeholder"},
      {school: 2, name: "carreer", description: "carreer description text placeholder"},
      {school: 2, name: "carreer", description: "carreer description text placeholder"},
      {school: 2, name: "carreer", description: "carreer description text placeholder"},
      {school: 2, name: "carreer", description: "carreer description text placeholder"},
      {school: 2, name: "carreer", description: "carreer description text placeholder"},
      {school: 2, name: "carreer", description: "carreer description text placeholder"},
      {school: 3, name: "carreer", description: "carreer description text placeholder"},
      {school: 3, name: "carreer", description: "carreer description text placeholder"},
      {school: 3, name: "carreer", description: "carreer description text placeholder"},
      {school: 3, name: "carreer", description: "carreer description text placeholder"},
      {school: 3, name: "carreer", description: "carreer description text placeholder"},
      {school: 3, name: "carreer", description: "carreer description text placeholder"},      
    ]
}


var colors = ["#404040", "#f8b227", "#2a98d3", "#ee561d", "#917ab1", "#4ead92", "#81888b"]

// -1 = unselected
// numbers represent the index of the element above, in coursedata
var state = {
  school : -1,
  field: -1,
  outcome: -2, //workaround to display course structure title
  year: -1,
  majorsubjects: [],
  selectedcourses: [],
}

var updateScreen = function () {
  for (var a = 0; a < 10; a++) {
    $("#field"+a).hide();  
  }  

  for (var field in coursedata.fields[state.school]) {
    $("#field"+field+"text").html(coursedata.fields[state.school][field])  
    $("#field"+field).delay(field*50).fadeIn(100);  
  }

  $("#structureFieldTitleArrow").css("color", colors[state.school+1])
  $(".structureBIG").html(coursedata.schoolsfirst[state.school])
  $(".structureSMALL").html(coursedata.schoolssecond[state.school])
  $(".structureWrap").css("background", colors[state.school+1])

  if (state.field == -1) {
      $("#structureFieldTitle").hide();
      $("#structureTextBlockTop").html(coursedata.schoolstext[state.school])
      $(".subjectname").hide();
      $(".subjectadderbutton").html("").hide()

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
    $("#structureTextBlockTop").html(coursedata.fieldstext[state.school][state.field]).fadeIn(250)
  }

  for (var a =0; a < 10; a++) {

        if (state.field == a) {
          $( "#field"+a ).css("background", colors[state.school+1])
        } else {
          $( "#field"+a ).css("background", colors[0])  
        }

  }

  if (mobile() == 1) {
    $(".fieldsmenu").css("margin-top", "0px")
    $(".fields").css("margin-top", "2px")    
  }
  updateOutcomes();
}

var updatemajors = function () {
  console.log("updating majors")
  if (state.year == 1) { $("#barcore").animate( { width: "60px"}, 500); }
  if (state.year == 2) { $("#barcore").animate( { width: "20px"}, 500); }
  if (state.year == 3) { $("#barcore").animate( { width: "30px"}, 500); }  
  
  

  for (var num in [0,1,2]) {
    if (state.majorsubjects[num] != undefined) {
      $("#subjectblock"+num).removeClass("courselayoutaddsubject");
      $("#subjectblock"+num).css("background", colors[state.majorsubjects[num].school+1])
      var shortname = coursedata.fields[state.majorsubjects[num].school][state.majorsubjects[num].field]
      $("#subjectblock"+num+"name").html( shortname ).show();
      $("#subjectblock"+num+"credits").html( state.majorsubjects[num].credits + " credits" ).show();
      $("#subjectblock"+num+"add").hide();
      //progressbar


      $("#bar"+num).css("background", colors[state.majorsubjects[num].school+1])
      $("#bar"+num).css("background", colors[state.majorsubjects[num].school+1]).animate( { width: state.majorsubjects[num].credits+"px"}, 500)



    } else {
      $("#subjectblock"+num+"name").hide();
      $("#subjectblock"+num+"credits").hide();
      $("#subjectblock"+num+"add").show();
      $("#subjectblock"+num).addClass("courselayoutaddsubject");
      $("#subjectblock"+num).css("background", "#e5e7e9")
      $("#bar"+num).css("background", "#e5e7e9").animate( { width: "0px"}, 500)

      

    }
  }
  
  // COMPULSORY UPDATE
  var compulsoryupdate = '<h3 id="layoutsubjectsheading">Compulsory Electives</h3>';
  for (var num in [0,1]) {
    compulsoryupdate += '<div class="pure-g-r" style="margin-bottom: 6px; height:'+($("#majorsubjectswrapper > div:nth-child(2) > div:nth-child(1)").height()+2)+'px">';
    if (state.majorsubjects[num] != undefined) {
      for (var c in coursedata.courselist) {
        if ((coursedata.courselist[c].outcome == 3)&&(coursedata.courselist[c].school == state.majorsubjects[num].school)&&(coursedata.courselist[c].field == state.majorsubjects[num].field)&&(coursedata.courselist[c].compulsory == state.year)) {
          console.log(coursedata.courselist[c])
          compulsoryupdate += '<div class="pure-u-1-1 compulsorysubjectsblocks"  >';
          compulsoryupdate += '<div id="compulsoryblock0" class="courselayoutcompulsorywrap" style="padding-top: 0;">'+coursedata.courselist[c].name+'</div>';
          compulsoryupdate += '</div>';
        }
      }
    }
    compulsoryupdate += '</div>';
  }
  $("#compulsorysubjectswrapper").html(compulsoryupdate)


  //// ELECTIVES
  
  if (state.year == 1) { 
    $("#choiceelectivemenu").hide();
    $("#choiceelectiveswrap").html('') 
  }; 

  if ((state.year == 2)||(state.year == 3)) { 
    var electivesupdate = '';

    for (var num in [0,1,2]) {
      if (state.majorsubjects[num] != undefined) {
          //electives from professional skills courses.          
          for (var c in coursedata.courselist) {
            if ((coursedata.courselist[c].outcome == 3)&&(coursedata.courselist[c].school == state.majorsubjects[num].school)&&(coursedata.courselist[c].field == state.majorsubjects[num].field)&&(coursedata.courselist[c].compulsory != state.year)) {
              electivesupdate += '<span data-school="'+state.majorsubjects[num].school+'" style="color: #fff; background: #81898b; vertical-align: center;">'+coursedata.courselist[c].name+'</span> ';
            }
          }
      }
    }

    if (electivesupdate == '') {
      $("#choiceelectivemenu").hide();
      $("#choiceelectiveswrap").html('') 
    } else {
          $("#choiceelectiveswrap").html(electivesupdate)  
          $("#choiceelectivemenu").show();

          $("#choiceelectiveswrap > span").hover( function () {
              $(this).css('background', colors[$(this).data("school")+1]);
              $(this).css('cursor', 'pointer')
            }, function () {
              $(this).css('background', '#81898b')
          })
        } 

  }//update electives
  
}

var checkifmajorchosen = function () {
  //if already added the current subject on the current page
  var status = 0;
  for (var major in state.majorsubjects) {
    if ((state.year == state.majorsubjects[major].year)&&(state.field == state.majorsubjects[major].field)&&(state.school == state.majorsubjects[major].school)) {
      status = 1;
    }
  }
  return status
}

var updateOutcomes = function () {
    $("#accordion").html(""); //always clears accordian on refresh

    for (var a = -1; a < 10; a++) {
      if (a == state.outcome) {
        $("#outcomes"+a).css("border-left", "8px "+colors[state.school+1]+" solid")
        $("#outcome"+a+"heading").fadeIn(250)
        $("#outcome"+a+"block").fadeIn(250)
      } else {
        $("#outcomes"+a).css("border-left", "8px "+colors[0]+" solid") 
        $("#outcome"+a+"heading").hide();
        $("#outcome"+a+"block").hide();
      }
    } 


    if ((state.outcome > 5) && (state.outcome < 10)) {
      //degree left border highlight
      $("#outcomes6").css("border-left", "8px "+colors[state.school+1]+" solid")
    }

    if (state.outcome < 6) {
      //hides degree years
      $("#outcomes7").delay(200).fadeOut(250);
      $("#outcomes8").delay(100).fadeOut(250);      
      $("#outcomes9").delay(0).fadeOut(250);
    }

    //CARREERS
    if (state.outcome == 0) { 

      
      $("#carreersholder").html('');
      var carreertext = ''
      for (var carreer in coursedata.carreers) {
        if (coursedata.carreers[carreer].school == state.school) {
          carreertext += '<div class="pure-u-1-3">';
          carreertext += '<div class="careerwrapper" >';
          carreertext += '<i class="fa fa-plus"></i>';
          carreertext += '<div class="career">';
          carreertext += '<span>'+coursedata.carreers[carreer].name+':</span>'+coursedata.carreers[carreer].description;
          carreertext += '</div>';
          carreertext += '</div>';
          carreertext += '</div>';
        }
      }
      $("#carreersholder").html(carreertext);
      $(".careerwrapper").css("color", colors[state.school+1]);
    }


    if ((state.outcome == 1)||(state.outcome == 2)||(state.outcome == 3)||(state.outcome == 4)) {      
          var subjectlist = "";
          for (course in coursedata.courselist) 
          {

            var haveselected = false;
            for (selectedcourse in state.selectedcourses) {
              if (state.selectedcourses[selectedcourse].name == coursedata.courselist[course].name) {
                haveselected = true;
              }
            }

            //if field selected list only this field courses
            var tempoutcome = state.outcome;
            if (tempoutcome == 4) { tempoutcome = 2}
            if ((coursedata.courselist[course].outcome == tempoutcome)&&(coursedata.courselist[course].field == state.field)&&(coursedata.courselist[course].school == state.school)) {
              
              //if SLP bundle?
              var slpinfo = '<br><br>';
              if (((state.outcome == 2)||(state.outcome == 4))&&(coursedata.courselist[course].slp != undefined)) {
                  for (var c in coursedata.courselist) 
                  {
                    if ((coursedata.courselist[c].outcome == 1)&&(coursedata.courselist[c].slp == coursedata.courselist[course].slp)) { //shortcourses that form slp
                      console.log(coursedata.courselist[c])
                      slpinfo += '<strong>'+coursedata.courselist[c].name+'</strong> '+coursedata.courselist[c].description+'<br><br>'
                    }
                  }                
              }
              
              var hide = 0;
              if (coursedata.courselist[course].pscHide == 1) { 
                if (state.outcome == 3) {
                  console.log("hide PSC")  
                  hide = 1;
                }              
              }

              if (hide == 0) {
                if (haveselected == false) {
                  subjectlist += '<li><div class="subjectbar" data-number="'+course+'"><div class="subjectadderbutton"';
                  subjectlist += 'data-mode="add" data-name="'+coursedata.courselist[course].name+'">+</div>';  
                  subjectlist += '<div class="subjectname">'+coursedata.courselist[course].name+'</div></div>';
                  subjectlist += '<p id="subjectTextBlock" style="display: none;">'+coursedata.courselist[course].description+slpinfo+'</p></li>';                  
                } 
                
                if (haveselected == true) {
                  subjectlist += '<li><div id="subjectbar" data-number="'+course+'"><div class="subjectadderbutton"';
                  subjectlist += 'data-mode="remove" data-name="'+coursedata.courselist[course].name+'">-</div>';  
                  subjectlist += '<div class="subjectname" style="background: '+colors[state.school+1]+'; cursor: pointer;">'+coursedata.courselist[course].name+'</div></div>';
                  subjectlist += '<p id="subjectTextBlock" >'+coursedata.courselist[course].description+slpinfo+'</p></li>';   
                }
              }

              
                             
            }  
            
          }

          $("#accordion").html(subjectlist);

          $(".subjectadderbutton").click( function () {
            if ($(this).data("mode") == "add") 
            { 
              var added = 0;
              for (course in coursedata.courselist) 
              {
                if (added == 0) { //to keep multiple adds from happening
                  if ($(this).data("name") == coursedata.courselist[course].name) 
                  {
                    state.selectedcourses.push(coursedata.courselist[course]);
                    added += 1;
                  }    
                }
                
              }              
            }

            if ($(this).data("mode") == "remove") 
            {
              var id = -1;
              for (course in state.selectedcourses) 
              {                
                if ($(this).data("name") == state.selectedcourses[course].name) 
                {
                  id = course;
                }
                
              } 
              if (id >= 0) {state.selectedcourses.splice(id,1); };             
            }

            updateOutcomes();            
          });

          

          $(".subjectadderbutton").hover( 
            function () { 
              //hoverin
              $(this).css("background", colors[state.school+1]) 
            }, function () {
              //hoverout
              $(this).css("background", colors[6]) 
          })


          // NEW ACCORDION
          $("#accordion > li").click( function() {
              
          
               if (state.outcome != 4) {              
                  //smooth but buggy 
                  $(this).children("p#subjectTextBlock").slideToggle("fast", function() {
                    $(".coursemenu > div").css("height", $(".structureContent").height());
                  }) //.show();

                  $(this).parent().find("p#subjectTextBlock").not($(this).children("p#subjectTextBlock")).slideUp("fast", function () {
                    $(".coursemenu > div").css("height", $(".structureContent").height());
                  }) //.hide();        
                 
               } else {
                    $(this).children("p#subjectTextBlock").fadeIn(100, function() {});
                    $(this).parent().find("p#subjectTextBlock").not($(this).children("p#subjectTextBlock")).fadeOut(150, function() {
                      $(".coursemenu > div").css("height", $(".structureContent").height());                         
                    });
                  
               }
            


          })


   

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
      $("#coresubjectsblock").removeClass("pure-u-1-6").addClass("pure-u-1-3")
      $("#coresubjectsblock0").removeClass("pure-u-1-1").addClass("pure-u-1-2")
      $("#coresubjectsblock1").show()
      $("#coresubjectsblock2").removeClass("pure-u-1-1").addClass("pure-u-1-2")      
      $("#coresubjectsblock3").show()

      $(".coreleft").addClass("left");
      $("#majorsubjectsblock").removeClass("pure-u-1-6").addClass("pure-u-1-3")
      $(".majorsubjectsblocks").removeClass("pure-u-1-1").addClass("pure-u-1-2")
      $("#subjectblock0").addClass("left")
      $("#subjectblock1").addClass("right").css("margin-top", "0px")
      $("#subjectblock2").addClass("left").show()
      $(".courselayoutsubjectwrap").css("padding-top","13px").css("padding-bottom","13px")

      $("#compulsorysubjectsblock").hide();
      $("#choiceelectivemenu").hide();

      var coresubjects = '';
      coresubjects +='<h3 id="layoutsubjectsheading">Core Subjects</h3>';
      coresubjects +='<div class="pure-g-r coresubjectsholder">';
      coresubjects +='<div id="coresubjectsblock0" class="pure-u-1-2">';
      coresubjects +='<div class="courselayoutsubjectwrap left coreleft" >';
      coresubjects +='<h3 class="courselayoutsubjecttitle">Visual Culture</h3>';
      coresubjects +='<h4 class="courselayoutsubjectcredits">15 credits</h4>';
      coresubjects +='</div>';
      coresubjects +='</div>';
      coresubjects +='<div id="coresubjectsblock1" class="pure-u-1-2">';
      coresubjects +='<div class="courselayoutsubjectwrap right" >';
      coresubjects +='<h3 class="courselayoutsubjecttitle">Drawing</h3>';
      coresubjects +='<h4 class="courselayoutsubjectcredits">15 credits</h4>';
      coresubjects +='</div>';
      coresubjects +='</div>';
      coresubjects +='</div>';
      coresubjects +='<div class="pure-g-r" style="margin-top: 8px;">';
        coresubjects +='<div id="coresubjectsblock2" class="pure-u-1-2">';
        coresubjects +='<div class="courselayoutsubjectwrap left coreleft" >';
        coresubjects +='<h3 class="courselayoutsubjecttitle">Academic Skills</h3>';
        coresubjects +='<h4 class="courselayoutsubjectcredits">10 credits</h4>';
        coresubjects +='</div>';
        coresubjects +='</div>';

        coresubjects +='<div id="coresubjectsblock3" class="pure-u-1-2">';
        coresubjects +='<div class="courselayoutsubjectwrap right" >';
        coresubjects +='<h3 class="courselayoutsubjecttitle">Art History</h3>';
        coresubjects +='<h4 class="courselayoutsubjectcredits">10 credits</h4>';
        coresubjects +='</div>';
        coresubjects +='</div>';
      coresubjects +='</div>';

      coresubjects +='<div class="pure-g-r" style="margin-top: 8px;">';
        coresubjects +='<div id="coresubjectsblock4" class="pure-u-1-2">';
        coresubjects +='<div class="courselayoutsubjectwrap left coreleft" >';
        coresubjects +='<h3 class="courselayoutsubjecttitle">Essential Software</h3>';
        coresubjects +='<h4 class="courselayoutsubjectcredits">10 credits</h4>';
        coresubjects +='</div>';
        coresubjects +='</div>';
      coresubjects +='</div>';

      //SPECIAL CASE FILM ART SCHOOL
      if (state.school == 1) {
          var coresubjects = '';
          coresubjects +='<h3 id="layoutsubjectsheading">Core Subjects</h3>';
          coresubjects +='<div class="pure-g-r coresubjectsholder">';
          coresubjects +='<div id="coresubjectsblock0" class="pure-u-1-2">';
          coresubjects +='<div class="courselayoutsubjectwrap left coreleft" >';
          coresubjects +='<h3 class="courselayoutsubjecttitle">Film Theory</h3>';
          coresubjects +='<h4 class="courselayoutsubjectcredits">15 credits</h4>';
          coresubjects +='</div>';
          coresubjects +='</div>';
          coresubjects +='<div id="coresubjectsblock1" class="pure-u-1-2">';
          coresubjects +='<div class="courselayoutsubjectwrap right" >';
          coresubjects +='<h3 class="courselayoutsubjecttitle">Media Aesthetics</h3>';
          coresubjects +='<h4 class="courselayoutsubjectcredits">15 credits</h4>';
          coresubjects +='</div>';
          coresubjects +='</div>';
          coresubjects +='</div>';
          coresubjects +='<div class="pure-g-r" style="margin-top: 8px;">';
            coresubjects +='<div id="coresubjectsblock2" class="pure-u-1-2">';
            coresubjects +='<div class="courselayoutsubjectwrap left coreleft" >';
            coresubjects +='<h3 class="courselayoutsubjecttitle">Academic Skills</h3>';
            coresubjects +='<h4 class="courselayoutsubjectcredits">10 credits</h4>';
            coresubjects +='</div>';
            coresubjects +='</div>';

            coresubjects +='<div id="coresubjectsblock3" class="pure-u-1-2">';
            coresubjects +='<div class="courselayoutsubjectwrap right" >';
            coresubjects +='<h3 class="courselayoutsubjecttitle">Story &amp; Ritual</h3>';
            coresubjects +='<h4 class="courselayoutsubjectcredits">10 credits</h4>';
            coresubjects +='</div>';
            coresubjects +='</div>';
          coresubjects +='</div>';

          coresubjects +='<div class="pure-g-r" style="margin-top: 8px;">';
            coresubjects +='<div id="coresubjectsblock4" class="pure-u-1-2">';
            coresubjects +='<div class="courselayoutsubjectwrap left coreleft" >';
            coresubjects +='<h3 class="courselayoutsubjecttitle">Essential Software</h3>';
            coresubjects +='<h4 class="courselayoutsubjectcredits">10 credits</h4>';
            coresubjects +='</div>';
            coresubjects +='</div>';
          coresubjects +='</div>';
      }
      $("#coresubjectswrapper").html(coresubjects)

    }
    
    if (state.year == 2) {
      $("#outcomes7").css("background", colors[0])
      $("#outcomes8").css("background", colors[state.school+1]) 
      $("#outcomes9").css("background", colors[0])   
      $("#courselayoutleftcontentyear").html(2).show()
      $("#courselayoutleftcontenttitle").html("Second Year").show()

      $("#coresubjectsblock").removeClass("pure-u-1-3").addClass("pure-u-1-6")
      $("#coresubjectsblock0").removeClass("pure-u-1-2").addClass("pure-u-1-1")
      $("#coresubjectsblock1").hide()
      $("#coresubjectsblock2").removeClass("pure-u-1-2").addClass("pure-u-1-1")
      $("#coresubjectsblock3").hide()

      $(".coreleft").removeClass("left");

      $("#majorsubjectsblock").removeClass("pure-u-1-3").addClass("pure-u-1-6")
      $(".majorsubjectsblocks").removeClass("pure-u-1-2").addClass("pure-u-1-1")
      $("#subjectblock0").removeClass("left")
      $("#subjectblock1").removeClass("right").css("margin-top", "8px")
      $("#subjectblock2").removeClass("left").hide();

      $("#compulsorysubjectsblock").show();
      $(".courselayoutsubjectwrap").css("padding-top","13px").css("padding-bottom","13px")

      $("#choiceelectivemenu").show();

      var coresubjects = '<h3 id="layoutsubjectsheading">Core Subjects</h3>';
      coresubjects += '<div class="pure-g-r">';
      coresubjects += '<div id="coresubjectsblock0" class="pure-u-1-1">';
      coresubjects += '<div class="courselayoutsubjectwrap left coreleft" >'
      coresubjects += '<h3 class="courselayoutsubjecttitle">Film Theory</h3>';
      coresubjects += '<h4 class="courselayoutsubjectcredits">20 credits</h4>';
      coresubjects += '</div>';
      coresubjects += '</div>';     
      coresubjects += '</div>';   

      $("#coresubjectswrapper").html(coresubjects)

    }

    if (state.year == 3) {
      $("#outcomes7").css("background", colors[0])
      $("#outcomes8").css("background", colors[0])
      $("#outcomes9").css("background", colors[state.school+1])
      $("#courselayoutleftcontentyear").html(3).show()
      $("#courselayoutleftcontenttitle").html("Third Year").show()

      $("#coresubjectsblock").removeClass("pure-u-1-3").addClass("pure-u-1-6")
      $("#coresubjectsblock0").removeClass("pure-u-1-2").addClass("pure-u-1-1")
      $("#coresubjectsblock1").hide()
      $("#coresubjectsblock2").removeClass("pure-u-1-2").addClass("pure-u-1-1")
      $("#coresubjectsblock3").hide()

      $(".coreleft").removeClass("left");

      $("#majorsubjectsblock").removeClass("pure-u-1-3").addClass("pure-u-1-6")
      $(".majorsubjectsblocks").removeClass("pure-u-1-2").addClass("pure-u-1-1")
      $("#subjectblock0").removeClass("left")
      $("#subjectblock1").removeClass("right").css("margin-top", "8px")
      $("#subjectblock2").removeClass("left").hide();

      $("#compulsorysubjectsblock").show();
      $(".courselayoutsubjectwrap").css("padding-top","13px").css("padding-bottom","13px")

      $("#choiceelectivemenu").show();

      var coresubjects = '<h3 id="layoutsubjectsheading">Core Subjects</h3>';
      coresubjects += '<div class="pure-g-r">';
      coresubjects += '<div id="coresubjectsblock0" class="pure-u-1-1">';
      coresubjects += '<div class="courselayoutsubjectwrap left coreleft" >'
      coresubjects += '<h3 class="courselayoutsubjecttitle">Film Theory</h3>';
      coresubjects += '<h4 class="courselayoutsubjectcredits">20 credits</h4>';
      coresubjects += '</div>';
      coresubjects += '</div>';     
      coresubjects += '</div>';   

      coresubjects += '<div class="pure-g-r" style="margin-top: 8px;">';
      coresubjects += '<div id="coresubjectsblock2" class="pure-u-1-1">';
      coresubjects += '<div class="courselayoutsubjectwrap left coreleft" >';
      coresubjects += '<h3 class="courselayoutsubjecttitle">Research Skills</h3>';
      coresubjects += '<h4 class="courselayoutsubjectcredits">10 credits</h4>';
      coresubjects += '</div>';
      coresubjects += '</div>';      
      coresubjects += '</div>';
      $("#coresubjectswrapper").html(coresubjects)
    }

    

    if ((state.outcome > 6) && (state.outcome < 10)) {
      $("#majorsubjectsblock #majorsubjectswrapper #layoutsubjectsheading").html("MAJOR SUBJECTS");
      $("#compulsorysubjectsblock #compulsorysubjectswrapper #layoutsubjectsheading").html("COMPULSORY ELECTIVES");
      $("#choiceelectivemenu div #courselayoutmenu div #layoutsubjectsheading").html("CHOICE ELECTIVES")
      ///show subjects for years
        var subjectsdisplay = []
          $(".subjectname").html("").hide()
          $(".subjectadderbutton").html("").hide()
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
        var courseupdate = "";
        
        for (var subject in subjectsdisplay) {
          
          courseupdate += '<li><div id="subjectbar">';
          
          if (checkifmajorchosen() == 1) {
            courseupdate += '<div class="subjectadderbutton">-</div>';
          } else {
            if (state.majorsubjects.length < 3) {
              courseupdate += '<div class="subjectadderbutton">+</div>';
            } else {
              $(".subjectadderbutton").fadeOut(100);
            }
            
          }
          



          courseupdate += '<div class="subjectname">'+subjectsdisplay[subject].name+'</div></div><p id="subjectTextBlock">'+subjectsdisplay[subject].description+'</p></li>';                  
        }
        $("#accordion").html(courseupdate)
        

        $(".subjectadderbutton").click( function() {
              //add or remove subject
            
              for (var subject in coursedata.subjects) {
                if (coursedata.subjects[subject].school == state.school) {
                  if (coursedata.subjects[subject].year == state.year) {
                    if (coursedata.subjects[subject].field == state.field) {

                      if (checkifmajorchosen() == 1) {
                          
                          state.majorsubjects = state.majorsubjects.filter( function (element) {
                            if ((element.field == state.field)&&(element.school == state.school)&&(element.year == state.year)) {
                              return 0
                            }else {return 1;}
                          })

                      } else {
                        state.majorsubjects.push(coursedata.subjects[subject])   
                      }



                    }
                  }            
                }
              }

              updatemajors(); //draws html/css
              updateOutcomes();
          })

          $(".subjectadderbutton").hover( 
            function () { 
              //hoverin
              $( ".subjectadderbutton" ).css("background", colors[state.school+1]) 
            }, function () {
              //hoverout
              $( ".subjectadderbutton" ).css("background", colors[6]) 
          })



        //course layout
        $("#courselayoutmenu").fadeIn(250);
        
    } else {
        $("#courselayoutmenu").fadeOut(250);
    }

      $("#courselayoutleftcredits").show();
      $("#courselayoutleftcreditsbar").show();
      $(".courselayoutsubjectcredits").show();
    //ONE YEAR
    if (state.outcome == 4) {        

      //SHOW SLPS


      $("#courselayoutmenu").fadeIn(250);
      $("#outcomes7").css("background", colors[0])
      $("#outcomes8").css("background", colors[state.school+1]) 
      $("#outcomes9").css("background", colors[0])   
      $("#courselayoutleftcontentyear").html(1).show()
      $("#courselayoutleftcontenttitle").html("Year Programme").show()

      $("#courselayoutleftcredits").hide();
      $("#courselayoutleftcreditsbar").hide();

      

      $("#coresubjectsblock").removeClass("pure-u-1-3").addClass("pure-u-1-6")
      $("#coresubjectsblock0").removeClass("pure-u-1-2").addClass("pure-u-1-1")
      $("#coresubjectsblock1").hide()
      $("#coresubjectsblock2").removeClass("pure-u-1-2").addClass("pure-u-1-1")
      $("#coresubjectsblock3").hide()

      $(".coreleft").removeClass("left");

      $("#majorsubjectsblock").removeClass("pure-u-1-3").addClass("pure-u-1-6")
      $(".majorsubjectsblocks").removeClass("pure-u-1-2").addClass("pure-u-1-1")
      $("#subjectblock0").removeClass("left")
      $("#subjectblock1").removeClass("right").css("margin-top", "8px")
      $("#subjectblock2").removeClass("left").hide();

      $("#compulsorysubjectsblock").show();
      $(".courselayoutsubjectwrap").css("padding-top","13px").css("padding-bottom","13px")

      $("#choiceelectivemenu").show();  

      $("#majorsubjectsblock #majorsubjectswrapper #layoutsubjectsheading").html("SLP COMBO");
      $("#compulsorysubjectsblock #compulsorysubjectswrapper #layoutsubjectsheading").html("SHORT-COURSES");
      $("#choiceelectivemenu div #courselayoutmenu div #layoutsubjectsheading").html("CHOICE SLP")

      var coresubjects = '<h3 id="layoutsubjectsheading">Core Subjects</h3>';
      if (state.school == 1) {
        coresubjects += '<div class="pure-g-r">';
          coresubjects += '<div id="coresubjectsblock0" class="pure-u-1-1">';
          coresubjects += '<div class="courselayoutsubjectwrap left coreleft" >'
          coresubjects += '<h3 class="courselayoutsubjecttitle">Film Theory</h3>';
          coresubjects += '<h4 class="courselayoutsubjectcredits">10 credits</h4>';
          coresubjects += '</div>';
          coresubjects += '</div>';     
        coresubjects += '</div>';

        coresubjects += '<div class="pure-g-r" style="margin-top: 8px;">';
          coresubjects += '<div id="coresubjectsblock2" class="pure-u-1-1">';
          coresubjects += '<div class="courselayoutsubjectwrap left coreleft" >';
          coresubjects += '<h3 class="courselayoutsubjecttitle">Story &amp; Ritual</h3>';
          coresubjects += '<h4 class="courselayoutsubjectcredits">10 credits</h4>';
          coresubjects += '</div>';
          coresubjects += '</div>';      
        coresubjects += '</div>';

        coresubjects += '<div class="pure-g-r" style="margin-top: 8px;">';
          coresubjects += '<div id="coresubjectsblock2" class="pure-u-1-1">';
          coresubjects += '<div class="courselayoutsubjectwrap left coreleft" >';
          coresubjects += '<h3 class="courselayoutsubjecttitle">Media Aesthetics</h3>';
          coresubjects += '<h4 class="courselayoutsubjectcredits">10 credits</h4>';
          coresubjects += '</div>';
          coresubjects += '</div>';      
        coresubjects += '</div>';
      } else {
        coresubjects += '<div class="pure-g-r">';
          coresubjects += '<div id="coresubjectsblock0" class="pure-u-1-1">';
          coresubjects += '<div class="courselayoutsubjectwrap left coreleft" >'
          coresubjects += '<h3 class="courselayoutsubjecttitle">Portfolio</h3>';
          coresubjects += '<h4 class="courselayoutsubjectcredits">60 credits</h4>';
          coresubjects += '</div>';
          coresubjects += '</div>';     
        coresubjects += '</div>';       
      }

      $("#coresubjectswrapper").html(coresubjects)
      $(".courselayoutsubjectcredits").hide(); //hide credits on 1 year programme

    }
    $(".coursemenu > div").css("height", $(".structureContent").height());  //fixes height bug
    updatemajors();
}
    
$( document ).ready(function() {
    updatemajors();
    updateOutcomes();
    $("#choiceelectivemenu").hide()
    $("#courselayoutmenu").hide()

    $("#schoolblock1text").hide()
    $("#schoolblock2text").hide()
    $("#schoolblock3text").hide()
    $("#schoolblock4text").hide()



    $(".fieldheading").hide()
    $(".fieldsmenu").hide()    
    $(".outcomesheading").hide()
    $(".outcomesmenu").hide()
    $(".outcomesmenu2").hide()
    $(".courseheading").hide()
    $(".coursemenu").hide()

    


    




    $(".fields:hover").css("background", "#f00")

    $("#outcomes7").hide();
    $("#outcomes8").hide();
    $("#outcomes9").hide();

    schoolblock1slides();
    schoolblock2slides();
    schoolblock3slides();
    schoolblock4slides();


    
    //$(".schoolbigblocks").delay(1000).fadeIn(1000);
    $( "#matrixBigDS" ).click( function() {
      $( "#matrixBigDS" ).css( 'border-bottom','5px solid #333' );
      $( "#matrixBigFA" ).css( 'border-bottom','5px solid #fff' );      
      $( "#matrixBigIA" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigVA" ).css( 'border-bottom','5px solid #fff' );
      $( ".schoolbigblocks" ).css('display','none')      
      schoolblock1slidesEnabled = 0;
      schoolblock2slidesEnabled = 0;
      schoolblock3slidesEnabled = 0;
      schoolblock4slidesEnabled = 0;
      state.school = 0  //DESIGN STUDIES
      state.field = -1;
      if (state.outcome == -2) {state.outcome = -1;}      
      updateScreen();
      showrest();
    })

    $( "#matrixBigFA" ).click( function() {
      $( "#matrixBigDS" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigFA" ).css( 'border-bottom','5px solid #333' );      
      $( "#matrixBigIA" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigVA" ).css( 'border-bottom','5px solid #fff' );
      $( ".schoolbigblocks" ).css('display','none')
      schoolblock1slidesEnabled = 0;
      schoolblock2slidesEnabled = 0;
      schoolblock3slidesEnabled = 0;
      schoolblock4slidesEnabled = 0;
      state.school = 1;  //FILM ARTS
      state.field = -1;
      if (state.outcome == -2) {state.outcome = -1;}      
      updateScreen();      
      showrest();
    })

    $( "#matrixBigIA" ).click( function() {
      $( "#matrixBigDS" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigFA" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigIA" ).css( 'border-bottom','5px solid #333' );
      $( "#matrixBigVA" ).css( 'border-bottom','5px solid #fff' );
      $( ".schoolbigblocks" ).css('display','none');
      schoolblock1slidesEnabled = 0;
      schoolblock2slidesEnabled = 0;
      schoolblock3slidesEnabled = 0;
      schoolblock4slidesEnabled = 0;
      state.school = 2  //DESIGN STUDIES
      state.field = -1;
      if (state.outcome == -2) {state.outcome = -1;}      
      updateScreen();      
      showrest();
    })

    $( "#matrixBigVA" ).click( function() {
      $( "#matrixBigDS" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigFA" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigIA" ).css( 'border-bottom','5px solid #fff' );
      $( "#matrixBigVA" ).css( 'border-bottom','5px solid #333' );
      $( ".schoolbigblocks" ).css('display','none');
      schoolblock1slidesEnabled = 0;
      schoolblock2slidesEnabled = 0;
      schoolblock3slidesEnabled = 0;
      schoolblock4slidesEnabled = 0;
      state.school = 3  //VISUAL ARTS
      state.field = -1;
      if (state.outcome == -2) {state.outcome = -1;}      
      updateScreen();      
      showrest();
    })    



    $( "#matrixBigDS" ).hover(
      function() {
        if (mobile() == 0) {
          if (state.school == -1) {
            $( ".schoolbigblocks" ).fadeIn(500);
          }
          
          $("#schoolblock1text").fadeIn(500)
          schoolblock1slidesEnabled = 0;
          $("#schoolblock1demo0").fadeOut(500);
          $("#schoolblock1demo1").fadeOut(500);
        }

        $("#schoolblock1text").width($("#schoolblock1").width());
        $("#schoolblock2text").width($("#schoolblock2").width());
        $("#schoolblock3text").width($("#schoolblock3").width());
        $("#schoolblock4text").width($("#schoolblock4").width());
        $("#schoolblock5text").width($("#schoolblock5").width());        
      }, function() {      
        if (mobile() == 0) {
          $("#schoolblock1text").fadeOut(500)
          if (state.school == -1) {
            schoolblock1slidesEnabled = 1;
          }        
          schoolblock1slides();
        }
        
      }
    );

    $( "#matrixBigFA" ).hover(
      function() {
        if (mobile() == 0) {
          if (state.school == -1) {
            $( ".schoolbigblocks" ).fadeIn(500);
          }
          $("#schoolblock2text").fadeIn(500)
          schoolblock2slidesEnabled = 0;
          $("#schoolblock2demo0").fadeOut(500);
          $("#schoolblock2demo1").fadeOut(500);
        }

        $("#schoolblock1text").width($("#schoolblock1").width());
        $("#schoolblock2text").width($("#schoolblock2").width());
        $("#schoolblock3text").width($("#schoolblock3").width());
        $("#schoolblock4text").width($("#schoolblock4").width());
        $("#schoolblock5text").width($("#schoolblock5").width());          
      }, function() {      
        if (mobile() == 0) {
          $("#schoolblock2text").fadeOut(500)
          if (state.school == -1) {
            schoolblock2slidesEnabled = 1;
          }        
          schoolblock2slides();
        }
      }
    );

    $( "#matrixBigIA" ).hover(
      function() {
        if (mobile() == 0) {
          if (state.school == -1) {
            $( ".schoolbigblocks" ).fadeIn(500);
          }
          $("#schoolblock3text").fadeIn(500)
          schoolblock3slidesEnabled = 0;
          $("#schoolblock3demo0").fadeOut(500);
          $("#schoolblock3demo1").fadeOut(500);
        }
        $("#schoolblock1text").width($("#schoolblock1").width());
        $("#schoolblock2text").width($("#schoolblock2").width());
        $("#schoolblock3text").width($("#schoolblock3").width());
        $("#schoolblock4text").width($("#schoolblock4").width());
        $("#schoolblock5text").width($("#schoolblock5").width());         
      }, function() {      
        if (mobile() == 0) { 
          $("#schoolblock3text").fadeOut(500)
          if (state.school == -1) {
            schoolblock3slidesEnabled = 1;
          }        
          schoolblock3slides();
        }
      }
    );

    $( "#matrixBigVA" ).hover(
      function() {
        if (mobile() == 0) {
          if (state.school == -1) {
            $( ".schoolbigblocks" ).fadeIn(500);
          }
          $("#schoolblock4text").fadeIn(500)
          schoolblock4slidesEnabled = 0;
          $("#schoolblock4demo0").fadeOut(500);
          $("#schoolblock4demo1").fadeOut(500);
        }
        $("#schoolblock1text").width($("#schoolblock1").width());
        $("#schoolblock2text").width($("#schoolblock2").width());
        $("#schoolblock3text").width($("#schoolblock3").width());
        $("#schoolblock4text").width($("#schoolblock4").width());
        $("#schoolblock5text").width($("#schoolblock5").width());          
      }, function() {      
        if (mobile() == 0) {
          $("#schoolblock4text").fadeOut(500)
          if (state.school == -1) {
            schoolblock4slidesEnabled = 1;
          }        
          schoolblock4slides();
        }
      }
    );

    

    //accordion subject
    /*
      DISABLE
        $("#accordion > li > div").click(function(){
            if(false == $(this).children().is(':visible')) {
                $('#accordion > li > ul').slideToggle();
            }
            $(this).children('ul').slideToggle();
        });
        $('#accordion ul:eq(0)').show();
    */

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

$( "#field5" ).hover( 
  function() { $( "#field5" ).css("background", colors[state.school+1]) }, //hover on
  function() { if (state.field == 5) { $( "#field5" ).css("background", colors[state.school+1]) } else { $( "#field5" ).css("background", colors[0]) } } //hover off
);  

$( "#field6" ).hover( 
  function() { $( "#field6" ).css("background", colors[state.school+1]) }, //hover on
  function() { if (state.field == 6) { $( "#field6" ).css("background", colors[state.school+1]) } else { $( "#field6" ).css("background", colors[0]) } } //hover off
);  

$( "#field7" ).hover( 
  function() { $( "#field7" ).css("background", colors[state.school+1]) }, //hover on
  function() { if (state.field == 7) { $( "#field7" ).css("background", colors[state.school+1]) } else { $( "#field7" ).css("background", colors[0]) } } //hover off
);  

$( "#field8" ).hover( 
  function() { $( "#field8" ).css("background", colors[state.school+1]) }, //hover on
  function() { if (state.field == 8) { $( "#field8" ).css("background", colors[state.school+1]) } else { $( "#field8" ).css("background", colors[0]) } } //hover off
);  

$( "#field9" ).hover( 
  function() { $( "#field9" ).css("background", colors[state.school+1]) }, //hover on
  function() { if (state.field == 9) { $( "#field9" ).css("background", colors[state.school+1]) } else { $( "#field9" ).css("background", colors[0]) } } //hover off
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

  $( "#field5" ).click( function() {
    state.field = 5;
    updateFields();        
  });

  $( "#field6" ).click( function() {
    state.field = 6;
    updateFields();        
  });

  $( "#field7" ).click( function() {
    state.field = 7;
    updateFields();        
  });

  $( "#field8" ).click( function() {
    state.field = 8;
    updateFields();        
  });      

  $( "#field9" ).click( function() {
    state.field = 9;
    updateFields();        
  });  
    //////////////////////////////////////////////////////////

$("#outcomes0").click( function() {
  state.outcome = 0;
  state.majorsubjects = [];
  state.selectedcourses = [];
  updateOutcomes();   
  updatemajors(); 
})

$("#outcomes1").click( function() {
  state.outcome = 1;
  state.majorsubjects = [];
  state.selectedcourses = [];
  updateOutcomes();   
  updatemajors(); 
})

$("#outcomes2").click( function() {
  state.outcome = 2;
  state.majorsubjects = [];
  state.selectedcourses = [];
  updateOutcomes();   
  updatemajors(); 
})

$("#outcomes3").click( function() {
  state.outcome = 3;
  state.majorsubjects = [];
  state.selectedcourses = [];
  updateOutcomes();   
  updatemajors(); 
})

$("#outcomes4").click( function() {
  state.outcome = 4;
  state.majorsubjects = [];
  state.selectedcourses = [];
  updateOutcomes();   
  updatemajors(); 
})

$("#outcomes5").click( function() {
  state.outcome = 5;
  state.majorsubjects = [];
  state.selectedcourses = [];
  updateOutcomes();   
  updatemajors();  
})

$("#outcomes6").click( function() {
  state.outcome = 6;
  state.majorsubjects = [];
  state.selectedcourses = [];
  updateOutcomes();   
  updatemajors();
})

$("#outcomes7").click( function() {
  state.outcome = 7;
  state.majorsubjects = [];
  state.selectedcourses = [];
  updateOutcomes();     
  updatemajors();
})

$("#outcomes8").click( function() {
  state.outcome = 8;
  state.majorsubjects = [];
  state.selectedcourses = [];
  updateOutcomes();   
  updatemajors();
})

$("#outcomes9").click( function() {
  state.outcome = 9;
  state.majorsubjects = [];
  state.selectedcourses = [];
  updateOutcomes();   
  updatemajors();
})
  //////////////////////////////////////////////////////////












  ////////////////////////////////////////////////////
}); //do not delete

