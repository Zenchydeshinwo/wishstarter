(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n(83)},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(41),o=n.n(l),c=(n(49),n(2)),i=n(3),s=n(5),u=n(4),m=n(6),h=(n(50),n(84)),d=(n(51),function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"HOME :)"),r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"projects"},r.a.createElement(h.a,{to:"/dreamer"},r.a.createElement("h3",null,"New Project"),r.a.createElement("p",null,"Aqu\xed puedes registrar nuevos wishes que tengas")),r.a.createElement(h.a,{to:"/projects"},r.a.createElement("h3",null,"All Projects"),r.a.createElement("p",null,"Esta es una lista de todos los wishes"))),r.a.createElement("div",{className:"makers"},r.a.createElement(h.a,{to:"/newmakers"},r.a.createElement("h3",null,"New Maker"),r.a.createElement("p",null,"Aqu\xed puedes registrarte como maker si quieres colaborar en alg\xfan proyecto")),r.a.createElement(h.a,{to:"/makers"},r.a.createElement("h3",null,"Makers"),r.a.createElement("p",null,"Este es una lista de todos los makers resgistrados en esta web")))))}),p=n(15),E=n.n(p);n(23).config();var g=function e(){var t=this;Object(c.a)(this,e),this.registerProject=function(e,n,a){return t.funAxios.post("/projects",{title:e,description:n,video:a}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.requestProject=function(){return t.funAxios.get("/projects").then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.getProj=function(e){return console.log("Estamos en get Project"),t.funAxios.get("/project/"+e).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.superEditProject=function(e,n){return console.log("CHECK STATE llega a SuperEdit se envia al back",e),console.log("CHECK numid llega a SuperEdit se envia al back",n),t.funAxios.put("/projects/"+n,{state:e}).then(function(e){return console.log("Json de vuelta al front",e.data),e.data}).catch(function(e){return console.log(e)})},this.deleteProject=function(e){return console.log("el numero de referencia",e),t.funAxios.delete("/projects/"+e).then(function(e){return console.log("Eliminado",e.data),e.data}).catch(function(e){return console.log(e)})};var n=E.a.create({baseURL:"".concat("https://wishstarter.herokuapp.com","/api"),withCredentials:!0});this.funAxios=n},f=n(12),v=n(17),b=n.n(v),j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).getEdProject=function(e){n.action.getProj(e).then(function(e){return n.setState({title:e.title,description:e.description,video:e.video}).catch(function(e){return console.log(e)})})},n.handleTitleSubmit=function(e){e.preventDefault();n.state.title,n.state.description,n.state.video;n.action.superEditProject(n.state,n.props.match.params.id).then(function(e){console.log(e),n.setState({title:e.title,description:e.title,video:e.video})}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(f.a)({},a,r))},n.deleteProject=function(){console.log("primerpaso",n.props.match.params.id),n.action.deleteProject(n.props.match.params.id)},n.state={title:"",description:"",video:"",dreamer:""},n.action=new g,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getEdProject(this.props.match.params.id)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h.a,{to:"/"},"Home"),r.a.createElement("h1",null,"Edita tu proyecyo aqu\xed"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",null,"Este es el proyecto:",this.state.title),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",null,"Consiste enlo siguiente:",this.state.description),r.a.createElement("div",null,r.a.createElement(b.a,{url:this.state.video,className:"react-player",width:"20%",height:"5%"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleTitleSubmit},r.a.createElement("label",null," Title "),r.a.createElement("input",{type:"text",name:"title",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null," Description "),r.a.createElement("input",{type:"text",name:"description",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null," Video "),r.a.createElement("input",{type:"text",name:"video",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"superEditProject"}),r.a.createElement("br",null)),r.a.createElement("form",{onSubmit:this.deleteProject},r.a.createElement("input",{type:"submit",value:"Delete this project"}),r.a.createElement("br",null)))}}]),t}(a.Component),k=(n(79),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={project:[]},e.projectservice=new g,e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.projectservice.requestProject().then(function(t){e.setState({project:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Project"},r.a.createElement(h.a,{to:"/"},"Home"),this.state.project.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,"Hola estes es un proyecto en detalle"),r.a.createElement("p",null,"Name of the project: ",e.title),r.a.createElement("div",{className:"video"},r.a.createElement(b.a,{url:e.video,className:"react-player",width:"20%",height:"5%"})),r.a.createElement(h.a,{to:"/project/".concat(e._id),key:e._id},"Ver Proyecto",r.a.createElement("li",{key:t},r.a.createElement("div",null,r.a.createElement("span",null,e.name)))))}))}}]),t}(a.Component)),O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleTitleSubmit=function(e){e.preventDefault();var t=n.state.title,a=n.state.description,r=n.state.video;n.action.registerProject(t,a,r).then(function(e){n.setState({title:"",description:"",video:""}),console.log("Esto es para ver que dato me llega en el response de user",e)}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(f.a)({},a,r))},n.state={title:"",description:"",video:"",dreamer:""},n.action=new g,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h.a,{to:"/"},"Home"),r.a.createElement("h1",null,"Introduce los datos de tu proyecto"),r.a.createElement("form",{onSubmit:this.handleTitleSubmit},r.a.createElement("label",null," Title "),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null," Description "),r.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null," Video URL "),r.a.createElement("input",{type:"text",name:"video",value:this.state.video,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"NewProject"})))}}]),t}(a.Component);n(23).config();var y=function e(){var t=this;Object(c.a)(this,e),this.registerMaker=function(e,n){return console.log("estamos en maker-service nemed",e),t.funAxios.post("/makers",{named:e,orientation:n}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.requestMaker=function(){return t.funAxios.get("/makers").then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.getMak=function(e){return t.funAxios.get("/makers/"+e).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.superEditMaker=function(e,n){return t.funAxios.put("/makers/"+n).then(function(e){return console.log("Json de vuelta al front",e.data),e.data}).catch(function(e){return console.log(e)})};var n=E.a.create({baseURL:"".concat("https://wishstarter.herokuapp.com","/api"),withCredentials:!0});this.funAxios=n},w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleTitleSubmit=function(e){e.preventDefault();var t=n.state.named,a=n.state.orientation;n.action.registerMaker(t,a).then(function(e){n.setState({named:"",orientation:""}),console.log("Esto es para ver que dato me llega en el response de user",e)}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(f.a)({},a,r))},n.state={named:"",orientation:""},n.action=new y,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h.a,{to:"/"},"Home"),r.a.createElement("h1",null,"Introduce los datos de tu perfil de maker"),r.a.createElement("form",{onSubmit:this.handleTitleSubmit},r.a.createElement("label",null," Nombre de maker "),r.a.createElement("input",{type:"text",name:"named",value:this.state.named,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null," Describe tu orientaci\xf3n como maker "),r.a.createElement("input",{type:"text",name:"orientation",value:this.state.orientation,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"NewMaker"})))}}]),t}(a.Component),C=n(88),S=n(87),x=(a.Component,n(80),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={maker:[]},e.makerservice=new y,e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.makerservice.requestMaker().then(function(t){e.setState({maker:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Maker"},r.a.createElement(h.a,{to:"/"},"Home"),this.state.maker.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,"Hola esta es la ficha de Maker"),r.a.createElement("p",null,"Nombre de Maker: ",e.named),r.a.createElement(h.a,{to:"/maker/".concat(e._id),key:e._id},"Ver Maker",r.a.createElement("li",{key:t},r.a.createElement("div",null,r.a.createElement("span",null,e.named)))))}))}}]),t}(a.Component));n(23).config();var U=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e,n){return t.serviceAxios.post("/signup",{username:e,password:n}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.login=function(e,n){return t.serviceAxios.post("/login",{username:e,password:n}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.logout=function(){return t.serviceAxios.get("/logout",{}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.loggedin=function(){return t.serviceAxios.get("/loggedin").then(function(e){return e.data}).catch(function(e){return null})};var n=E.a.create({baseURL:"".concat("https://wishstarter.herokuapp.com","/api"),withCredentials:!0});this.serviceAxios=n},P=n(86),A=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.username,a=n.state.password;n.service.signup(t,a).then(function(e){n.setState({username:"",password:"",redirect:!0}),n.props.getUser(e)}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(f.a)({},a,r))},n.state={username:"",password:"",mensaje:"",redirect:!1},n.service=new U,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(P.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("textarea",{name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("h1",null,"y"),r.a.createElement("p",null,"Already have account?",r.a.createElement(h.a,{to:"/login"}," Login"),r.a.createElement(h.a,{to:"/"}," Home")))}}]),t}(a.Component),I=n(42),N=(n(82),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).logoutUser=function(){n.service.logout().then(function(){n.setState({loggedInUser:null}),n.props.getUser(null)})},n.state={loggedInUser:null},n.service=new U,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(I.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement("nav",{className:"nav-style"},r.a.createElement("h2",null,"Welcome ",this.state.loggedInUser.username),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.a,{to:"/"},r.a.createElement("button",{onClick:function(){return e.logoutUser()}},"Logout"))))):r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(h.a,{to:"/login",style:{textDecoration:"none"}},"Login")),r.a.createElement("li",null,r.a.createElement(h.a,{to:"/signup",style:{textDecoration:"none"}},"Signup")))))}}]),t}(a.Component)),M=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.username,a=n.state.password;n.service.login(t,a).then(function(e){n.setState({username:"",password:"",redirect:!0}),n.props.getUser(e)}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(f.a)({},a,r))},n.state={username:"",password:"",redirect:!1},n.service=new U,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(P.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("textarea",{name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("p",null,"Don't have account?",r.a.createElement(h.a,{to:"/signup"}," Signup"),r.a.createElement(h.a,{to:"/"}," Home ")))}}]),t}(a.Component),D=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).getTheUser=function(e){n.setState({loggedInUser:e})},n.state={loggedInUser:null},n.service=new U,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"render",value:function(){var e=this;return null!==this.state.loggedInUser?r.a.createElement("div",{className:"App"},r.a.createElement(N,{userInSession:this.state.loggedInUser,getUser:this.getTheUser}),r.a.createElement(C.a,null,r.a.createElement(S.a,{exact:!0,path:"/",component:d}),r.a.createElement(S.a,{exact:!0,path:"/newmakers",component:w}),r.a.createElement(S.a,{exact:!0,path:"/makers",component:x}),r.a.createElement(S.a,{path:"/dreamer",component:O}),r.a.createElement(S.a,{path:"/projects",component:k}),r.a.createElement(S.a,{exact:!0,path:"/project/:id",component:j}))):r.a.createElement("div",{className:"App"},r.a.createElement(N,{userInSession:this.state.loggedInUser,getUser:this.getTheUser}),r.a.createElement(C.a,null,r.a.createElement(S.a,{exact:!0,path:"/newmakers",component:w}),r.a.createElement(S.a,{exact:!0,path:"/makers",component:x}),r.a.createElement(S.a,{path:"/project",component:k}),r.a.createElement(S.a,{exact:!0,path:"/project/:id",component:j}),r.a.createElement(S.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(A,{getUser:e.getTheUser})}}),r.a.createElement(S.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(M,{getUser:e.getTheUser})}})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=n(85);o.a.render(r.a.createElement(T.a,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.05c10408.chunk.js.map