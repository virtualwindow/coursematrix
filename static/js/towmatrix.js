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
    "With a firm focus on the social and cultural consumption of communication, the department offers subjects such as Communication Design, Illustration and Photography, which foster the art of persuasion through visual imagery.", 
    "The audio-visual industries are the fastest growing sector of the visual arts worldwide. Film and animation is now at the heart of every mass communication medium. <br><br>In FILM ARTS we explore possibilities of expression through the media of Film, 3D Animation, Motion Graphics, Sound and Game Design. <br></br>Students are initiated into industry standard software and technical training relevant to their field of specialisation. More importantly, however, is the emphasis placed on innovative audio-visual decision-making that has come to define The Open Window Film Arts graduate in the work field, both locally and abroad.", 
    "Interactive digital technologies affect our lives in numerous ways. Interaction Design is a comparatively new discipline concerned with designing strategic, human-centered solutions that shape the usefulness and experience of interacting with these technologies. <br></br>Interaction Design deals with both form and behavior as it employs a multidisciplinary approach to design solutions that align with business, social and cultural contexts.", 
    "Culture Studies text block", 
    "Visual Arts text block"],    
  fields : [
      ["Communication Design","Illustration","Photography"],
      ["3D Animation", "Film & Television", "Game Design", "Motion Design", "Production Design", "Screen Acting", "Screenwriting", "Sound Design"],
      ["Interactive Design", "Interactive Development", "Form & Space"],
      ["Business", "Culture"],
      ["Art", "Drawing", "Animation", "Sculpting", "Painting"]
    ],
  fieldstext : [
      ["Communication Design provides the basis for a career in the graphic and print design industry - covering typography, advertising and packaging to name but a few. Thie subject is a must for anyone intersted in graphic design.",
      "Illustration focuses on clarifying concepts through visual imagery. The subject deals with creating graphic, visual representations that convey factual and sensory information on a particular idea or concept. Students are given market-related, relevant and thought-provoking illustration briefs within both print-based and digital platforms. They are encouraged to use a wide variety of traditional and digital techniques, materials and media to develop a unique, personal visual language. Basic aspects of illustration-based editorial design, typography and printing are also covered.",
      "Photography is a highly creative and competitive field of practice. Being a very technical subject, a great deal of time is spent handling the camera and working with it in many different settings. This subject will provide students with the technical competence, artistic sensitivity and self confidence to master various photographic genres."], 
      ["Animation is magical – it can speak across cultural, age, gender and language barriers. Our animation course follows the latest industry trends and provides skills necessary to take part in the rapidly expanding digital entertainment industry. We provide training to produce high-end 3D content for the film, television, game and simulation industries.", 
      "Considered to be one of the more progressive film courses in the country, this is a cutting-edge journey into digital filmmaking covering a range of audio-visual expression that includes mainstream entertainment, documentary, commercial, alternative and conceptual filmmaking. Independence is a key word in filmmaking - that means developing a personal vision that allows you to have greater choices in your career to not only service the available industry, but to also be able to create a vision for the future. This course is about living your passion.", 
      "Game Design field description", "Motion Design field description", 
      "Production Design field description", "Screen Acting field description", "Screenwriting field description", "Sound Design field description"],
      ["Interactive design students focus on designing solutions for human interaction with technology. User interface design consists of a large component of the subject and is translated into different mediums, such as websites, smart phone and tablet applications, touch-screen kiosks and other digital interactive technologies. The interactive designer is responsible for user and design research, system design and visual communication in the form of sitemaps, personas, user diagrams, prototypes and other deliverables.", 
      "Interactive Development field description", 
      "Spatial design accommodates people and their behaviour over time in a given space. The Form and Space Design course addresses a unique gap in the market between architecture and industrial design. Students learn to design three-dimensionally – unlike other graphic design and multimedia disciplines that work in a two-dimensional environment. Typical projects include exhibition design, retail environments and packaging design."],
      ["Business field description", 
      "Culture field description"],
      ["Art field description", 
      "Drawing field description", 
      "Animation field description", 
      "Sculpting field description", 
      "Painting field description"]
    ],
    subjects: [
      { year: 1, school: 0, field: 0, name: "Communication Design 101", description: "Students are introduced to the fundamentals of design principles, theories, typography, image and text integration, as well as basic print reproduction processes.", credits: 20},
      { year: 2, school: 0, field: 0, name: "Communication Design 201", description: "Students are introduced to all the possible fields that a visual communicator could be involved in. Through a more advanced and in-depth approach, the student must be able to analyse and solve different types of visual communication problems successfully.", credits: 20},
      { year: 3, school: 0, field: 0, name: "Communication Design 301", description: "At this level, students are given practical industry-based exposure. After completing the subject, students will have the competence and capability to work in any of the industry fields that this subject covers.", credits: 20},   
      { year: 1, school: 0, field: 1, name: "Illustration 101", description: "The subject provides foundation-level knowledge of, and the ability to, apply the basic skills and techniques that are associated with traditional and digital art-making materials. The aim is to communicate ideas and concepts on a visual level by applying basic art elements and design principles.", credits: 20},
      { year: 2, school: 0, field: 1, name: "Illustration 201", description: "Illustration teaches students how to conceive and plan illustration projects; choose the appropriate style; and solve conceptual and practical solutions with regard to specific briefs.", credits: 20},
      { year: 3, school: 0, field: 1, name: "Illustration 301", description: "The subject provides a thorough foundation for illustration styles and techniques. Subject components include theory of design and illustration, conceptual development, design principles, design methodology and production.", credits: 20},     
      { year: 1, school: 0, field: 2, name: "Photography 101", description: "Students are given fundamental skills and knowledge. It covers all technical and theoretical aspects, ranging from camera anatomy, observation, creative control and the application of light; design principles and their application in frame division; and the basic application of digital workflow (from post-production to printing).", credits: 20},
      { year: 2, school: 0, field: 2, name: "Photography 201", description: "Students are introduced to a variety of photographic genres, as well as the techniques and theory that pertains to each genre. Photography 201 focuses on a variety of technical skills that are applied within commercial contexts. Equal attention is given to conceptual development, creative input, artistic sensitivity and the ability to realise industry demands.", credits: 20},
      { year: 3, school: 0, field: 2, name: "Photography 301", description: "The subject focuses on the advanced technical skills and is informed by the ever-changing demands of the photography industry. Focus is placed on conceptual development, creative input and artistic sensitivity with regard to practical assignments. The ultimate aim is to deliver thinking photographers who showcase professionalism and possess the ability to match industry standards.", credits: 20},     
      { year: 1, school: 1, field: 0, name: "3D Animation 101", description: "To familiarise the student with the history and development of the 3D medium, its production process and the latest industry standard software. The series of practical exercises will help the learner understand the 3D software environment, while the theoretical support will assist the student in realising the value of the skill.", credits: 20},
      { year: 2, school: 1, field: 0, name: "3D Animation 201", description: "This course guides the student through the various stages of the professional 3D animation production pipeline. Based on a character-driven animation production, the students start developing a concept for an original character, which is then modelled, textured and set up for a short performance animation sequence synced to pre-existing audio. Students will be introduced to the various tools and techniques used in a typical animation production pipeline, but will also be made aware of the different professional applications of these techniques throughout the process.", credits: 20},
      { year: 3, school: 1, field: 0, name: "3D Animation 301", description: "3D Animation 3 guides the student through the various stages of creating an original animated short-film. Students begin with the conceptualisation, development and pitching an original film concept of up to five minutes. Students then plan and manage the production of all necessary assets, including characters, environments and props and which are textured and prepared for animation through the creation of animation controls and rigs. Animation is meticulously planned and executed, and set up for export and rendering, and students finally utilise post production processes and techniques to complete their short-films. Throughout the filmmaking process, focus is placed on conceptual ability and creative thinking more than in previous years.", credits: 20},           
      { year: 1, school: 1, field: 1, name: "Film & Television 101", description: "Students investigate the building blocks of film language to gain an understanding of how ideas are communicated through an audio-visual medium. This knowledge can be applied in other disciplines such as animation and interactive media that require a narrative to unfold in time. Students will gain insight into both the logic of audio-visual storytelling and the practice of filmmaking.", credits: 20},
      { year: 2, school: 1, field: 1, name: "Film & Television 201", description: "The second-year course focuses on developing students’ film appreciation, audio-visual conceptualising skills, as well as the technical control of sound and film equipment through a series of workshops. A group exercise in producing a multi-episode internet-series will also give students an opportunity to gain experience in launching and managing an audio-visual product in a real-life scenario.", credits: 20},
      { year: 3, school: 1, field: 1, name: "Film & Television 301", description: "Students explore cinematic style and vision and delve into the more conceptual aspects of the medium. These ‘high brow’ excursions are used to develop flexible audio-visual problem-solving skills. Students are exposed to real clients and to the business of filmmaking, where they learn to budget, schedule, and promote their films. After completing the subject, students will be able to produce innovative films, from inception to completion, to suit any audio-visual environment.", credits: 20},    
      { year: 1, school: 1, field: 2, name: "Game Design 101", description: "In the foundation of the Game Design course will address the elements of game design as a discipline. The course will have strong traditional and practical game design components, but also seeks to emphasise a solid academic grounding in the field. Areas of academic study will include game history and theory, game studies and analysis, and game creation in many of its incarnations.", credits: 20},
      { year: 2, school: 1, field: 2, name: "Game Design 201", description: "The Game Design 2 course enables the student to conceptualise and design interactive games in digital media format, by designing well-structured user interfaces and integrating optimised interactive graphics and animation. The student must be able to produce creative 3D work that bears evidence of conceptual and technical understanding of game engine specific requirements.", credits: 20},
      { year: 3, school: 1, field: 2, name: "Game Design 301", description: "The Game Design 3 course enables the student to conceptualise, design and finalise interactive games in digital media format, by designing well-structured user interfaces, integrating optimised interactive graphics and animation and designing a complex artificial intelligence gaming environment to facilitate game immersion. The student must be able to produce creative 3D work that bears evidence of conceptual and technical understanding of game engine specific requirements, create a complex game system and create a final playable interactive game.", credits: 20},    
      { year: 1, school: 1, field: 3, name: "Motion Design 101", description: "Motion Design 1 introduces students to traditional and digital animation techniques. Students are familiarised with the animation principles and gain basic animation skills through a series of hands-on practical projects. Emphasis is placed on providing a solid foundation from which students can extend their skills and explore broadcast Motion Graphics in Motion Design 2.", credits: 20},
      { year: 2, school: 1, field: 3, name: "Motion Design 201", description: "Motion Design 2 introduces students to digital animation and its application to motion graphic design. By focusing on animation principles and using a practical hands-on approach, students are equipped with the skills to pursue a career in digital animation and motion graphics. Emphasis is placed on extending the skills gained in Motion Design 1 and preparing students to develop their individual voice and professional ability in Motion Design 3.", credits: 20},
      { year: 3, school: 1, field: 3, name: "Motion Design 301", description: "Motion Design 3 introduces students to conceptual considerations in digital animation, for both personal expression, as well as, communication driven motion graphics. By focusing on structuring information, ideas and messages, and integrating digital and traditional animation techniques, students are equiped with the skills to pursue a career in digital animation and motion graphics. Emphasis is placed on developing individual voice/style and professional ability to enter the workplace as a proficient and confident Motion Designer.", credits: 20},
      { year: 1, school: 1, field: 4, name: "Production Design 101", description: "Students will study the basic concepts and general principles involved in creating production design solutions for audiovisual environments. Focus is placed on developing the student’s ability to recognise visual content in relation to 3-dimensional design decision making within a narrative context. Through practical exercises, assignments and projects, with lecture based theoretical support, fundamental 3-dimensional design communication; production design organisation and communication, and set production skills are explored.", credits: 20},
      { year: 2, school: 1, field: 4, name: "Production Design 201", description: "Students will study an increasingly specialised range of skills involved in the creation of production design solutions for audiovisual environments. The production design sequence of activities structures the course, which focuses on the development of a comprehensive production design proposal for a scene from a selected screenplay. Emphasis is placed on developing the student’s ability to recognise, evolve, communicate and facilitate 3-dimensional design solutions that support and enhance audiovisual narrative objectives and expression. Advanced practical set production skills and techniques are explored with a focus on the distinction between studio and location shooting. The storyboard is introduced as a structured visual breakdown of the screenplay. The course concludes with an investigation into how the production design elements explored operate within the context of low budget productions.", credits: 20},
      { year: 3, school: 1, field: 4, name: "Production Design 301", description: "Students consolidate and expand their production design skills through practical application to real and imagined projects. Advanced production design considerations such as the psychology of colour and texture in film, the use of symbology and metaphor, and production design special effects are investigated. Production design budget, scheduling and communication are dealt with in depth. The wider application of production design principles in corporate environments including, exhibitions, installations, events and other site specific, thematically driven, temporary design scenarios is addressed and explored through real and/or imagined projects. Emphasis throughout is placed on integrating the production design knowledge gained in the previous two years with practical application.", credits: 20},
      { year: 1, school: 1, field: 5, name: "Screen Acting 101", description: "In Screen Acting 1 students explore the basic tools of every actor, which are breath control, speech, movement, improvisation and play. Students are introduced to the requirements for screen acting and are given the opportunity to explore the needed skill-set for this profession. Emphasis is placed on freeing up and focusing the student’s body and imagination. The final quarter of the year the course focuses on the essential element of acting for screen, the close up shot.", credits: 20},
      { year: 2, school: 1, field: 5, name: "Screen Acting 201", description: "In Screen Acting 2 Degree students build on the foundations laid in year one with an emphasis on honing the student’s body, exploring characterization and gaining an in-depth knowledge of the technical challenges involved in acting for film and television. Students will gain the ability to address individual problems in vocal production and habitual body patterns. Students are introduced to the master acting theories of Strassberg, Stanislavski and “The Method”. Students are introduced to the specific needs unique to acting for television and gain a solid foundation in the technical challenges of working with the film and TV director, the equipment involved with each genre and work-ethic on set.", credits: 20},
      { year: 3, school: 1, field: 5, name: "Screen Acting 301", description: "Screen Acting 3 Degree focus on fine-tuning the student’s acting process in order to enable him/her to embark on a successful screen-acting career. Students further their studies in the techniques of Meisner, Strassberg and “The Method”. Students are introduced to the world of the audio performance and voice-overs. Students gain insight and experience in the comedic acting process and auditioning techniques. Emphasis is placed on preparing the actor for the industry by providing numerous Master classes with industry professionals, such as working actors, casting directors and agents. Specific business skills unique to the professional working actor are highlighted. Students will be required to collaborate with the film-department on their final projects, in order to build material for their show reels. Students will also experience working behind the camera and directing fellow actors.", credits: 20},
      { year: 1, school: 1, field: 6, name: "Screenwriting 101", description: "The Screenwriting course comprises of a series of lectures on screenwriting as a fundamental aspect of the motion picture arts. It aims to develop the student’s abilities to master the basic understanding of how a screenplay and it’s supporting documents are read and written.", credits: 20},
      { year: 2, school: 1, field: 6, name: "Screenwriting 201", description: "The Screenwriting course comprises of a series of lectures on screenwriting as a fundamental aspect of the motion picture arts. It aims to develop the student’s abilities to master the intricacies of a screenplay’s structure, screenplay adaptation and the screenwriter’s role in the motion picture production process.", credits: 20},
      { year: 3, school: 1, field: 6, name: "Screenwriting 301", description: "The Screenwriting course comprises of a series of lectures on screenwriting as a fundamental aspect of the motion picture arts. It aims to develop the student’s abilities to master the writing of characters and dialogue to enhance an actor’s performance, the process of working with other writers on a teleplay (screenplay for television) and the writing and reviewing of feature length screenplays.", credits: 20},
      { year: 1, school: 1, field: 7, name: "Sound Design 101", description: "The Sound Design 101 course is aimed at creating a well-rooted foundation and understanding of the principals of sound and digital audio. The students will be taught how to communicate in sound, principles and practice of capturing sound as well as the theory of digital audio. Students will also be introduced to the concept of a Digital Audio Workstation (DAW), and the student will learn the functionality of the DAW and how to record, edit and process audio for a broad range of applications.", credits: 20},
      { year: 2, school: 1, field: 7, name: "Sound Design 201", description: "The Sound Design 201 course introduces the learner to advanced recording and mixing techniques. It aims at equipping the student with the necessary tools and knowledge to practically record, mix and create sound design for film and radio. Focus is placed on music technology as well as equipping the student with a basic understanding of music theory in order to explore virtual instruments inside the DAW. The student will be exposed to the world of sound creation, Digital Audio Workstations, advanced recording, re-recording and synthesis. Focus will be placed on quality of audio, format of audio, and sound design as the core principles. The course will extend the interfacing between the digital and analogue realms. Students will be taught how to interface real world objects into the systems they use.", credits: 20},
      { year: 3, school: 1, field: 7, name: "Sound Design 301", description: "Sound Design 301 explores the science behind acoustics for recording, mixing and sound stage. Students are also introduced to producing, arranging and scoring in the sound design environment. Students will be taught the concepts behind final mix and mastering of audio for film, television, CD, internet and radio and they will explore the standards and formats for audio delivery in the industry. Surround mixing will be introduced.", credits: 20},
      { year: 1, school: 2, field: 0, name: "Interactive Design 101", description: "This foundation level subject provides the groundwork for interactive design and development studies, through investigating multimedia-based communication technologies and design for interactive digital environments. Theories and skills are presented in themes and include communication technology basics, design foundation, corporate/brand identity design, and interactive design fundamentals.", credits: 20},
      { year: 2, school: 2, field: 0, name: "Interactive Design 201", description: "On second year level, students learn to provide strategic design solutions for interactive digital media. Themes like interface design, responsive Web design, social media design and strategy provide the building blocks for executing extensive brand communication through Web-based or “online” media.", credits: 20},
      { year: 3, school: 2, field: 0, name: "Interactive Design 301", description: "On third-year level, emphasis is placed on strong conceptual thinking and executing strategic design solutions in new and emerging media formats such as smart phones, tablets and touch-screen environments. Students learn to apply technology appropriately and maintain brand integrity as they produce brand communication through a range of digital interactive mediums. Design solutions are shaped to be exceedingly functional and provide an optimal user experience. ", credits: 20},           
      { year: 1, school: 2, field: 1, name: "Interactive Development 101", description: "This foundation level subject provides the groundwork for interactive design and development subjects, through investigating multimedia-based computer technologies and design for the interactive digital environment. Theories and skills are presented in themes and include computer technology basics, design foundation, corporate/brand identity design, and interactive design fundamentals.", credits: 20},
      { year: 2, school: 2, field: 1, name: "Interactive Development 201", description: "This subject addresses the enormous need for developers who are specifically skilled in developing for communication technologies such as Web, mobile, smart phones and tablets. On second year level, students learn the fundamental theories and skills required to deliver robust solutions in Web-based environments, while conforming to industry standards and best coding practices.", credits: 20},
      { year: 3, school: 2, field: 1, name: "Interactive Development 301", description: "On third-year level, emphasis is placed on developing applications specifically for mobile devices, smart phones, tablets and emerging technologies for interactive environments. Students learn to design and implement systems that are both functional and provide an optimal user experience, through adhering to best coding practices and making use of the latest development technologies, programming languages, research and design frameworks.", credits: 20},    
      { year: 1, school: 2, field: 2, name: "Form & Space 101", description: "Foundation-level Form and Space Design gives students a three-dimensional ‘toolbox’ to help solve 3D design problems. This thread unites the three years of study and enables students to apply the design process to solve problems – regardless of whether they are form or spatially oriented. Foundation-level fundamentals teach students how to measure; record measurements; understand and work accurately with scale; and develop their drawing abilities. ", credits: 20},
      { year: 2, school: 2, field: 2, name: "Form & Space 201", description: "Second year studies incorporate two core areas - retail and product design. These are split on an alternating modular basis, allowing for equal tuition in both domains. Focused modular learning helps foster a sense of purpose in students who need to understand subject matter within the context of their current modules.", credits: 20},
      { year: 3, school: 2, field: 2, name: "Form & Space 301", description: "Third year studies further develop modules on retail and product design. Students are encouraged to develop conceptual design thinking, three-dimensional problem-solving skills, an understanding of both material selection and appropriate production techniques. Presentation skills and professional practice also feature prominently as students are prepared for entering industry.", credits: 20},   
      { year: 1, school: 3, field: 0, name: "Business 101", description: "Business 101 description", credits: 20},
      { year: 2, school: 3, field: 0, name: "Business 201", description: "Business 201 description", credits: 20},
      { year: 3, school: 3, field: 0, name: "Business 301", description: "Business 301 description", credits: 20},           
      { year: 1, school: 3, field: 1, name: "Culture 101", description: "Culture 101 description", credits: 20},
      { year: 2, school: 3, field: 1, name: "Culture 201", description: "Culture 201 description", credits: 20},
      { year: 3, school: 3, field: 1, name: "Culture 301", description: "Culture 301 description", credits: 20}, 
      { year: 1, school: 4, field: 0, name: "Art 101", description: "Art 101 description", credits: 20},
      { year: 2, school: 4, field: 0, name: "Art 201", description: "Art 201 description", credits: 20},
      { year: 3, school: 4, field: 0, name: "Art 301", description: "Art 301 description", credits: 20},
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
  for (var a = 0; a < 10; a++) {
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

