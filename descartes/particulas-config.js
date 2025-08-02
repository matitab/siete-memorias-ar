tsParticles.load("tsparticles",{particles:{number:{value:150,density:{enable:true,value_area:800}},
			color:{value: ["#000000ff", "#313233ff", "#cceeff"]},
			shape:{type:"circle",stroke:{width:0}},opacity:{value:0.8,random:true, anim:{enable:true,speed:1,opacity_min:0.1,sync:false}},
			size:{value:3,random:true,anim:{enable:false,speed:4,size_min:0.4,sync:false}},line_linked:{enable:false},
			shadow: {enable: true, color: "#ffffffff", blur: 10},
			move:{enable: true, speed: 0.25, direction: "none", random: true, straight: false, out_mode: "out", bounce: false,}},
			interactivity:{detect_on:"window",events:{onhover:{enable:false},onclick:{enable:false},resize:true}}, retina_detect:true});
