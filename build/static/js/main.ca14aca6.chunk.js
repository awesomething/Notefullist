(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t){e.exports={API_KEY:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_NOTEFULL_API_KEY:"ed073fa8-8ddf-11eb-8dcd-0242ac130003"}).REACT_APP_API_KEY,API_ENDPOINT:"https://salty-hollows-50299.herokuapp.com/"}},102:function(e,t,n){},206:function(e,t,n){},208:function(e,t,n){},210:function(e,t,n){},212:function(e,t,n){},214:function(e,t,n){},216:function(e,t,n){},218:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(78),c=n.n(r),l=n(15),i=n(20),d=n(222),s=(n(90),n(92),n(40)),u=n(41),m=n(26),h=n(27),f=n(3),p=n(4),N=n(6),v=n(5),E=n(7),b=n(219),j=n(100),O=n(8),y=n(221),g=n(81);n(96);function _(e){e.tag,e.className,e.children;var t=Object(g.a)(e,["tag","className","children"]);return o.a.createElement(e.tag,Object(h.a)({className:["NavCircleButton",e.className].join(" ")},t),e.children)}_.defaultProps={tag:"a"};var w=o.a.createContext({notes:[],folders:[],addFolder:function(){},addNote:function(){},deleteNote:function(){}}),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find(function(e){return e.id===t})},k=(n(98),function(e){function t(){return Object(f.a)(this,t),Object(N.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.context,t=e.folders,n=void 0===t?[]:t,a=e.notes,r=void 0===a?[]:a;return o.a.createElement("div",{className:"NoteListNav"},o.a.createElement("div",{className:"NoteListNav__button-wrapper"},o.a.createElement(_,{tag:j.a,to:"/add-folder",type:"button",className:"NoteListNav__add-folder-button"},o.a.createElement(O.a,{icon:"plus"}),o.a.createElement("br",null),"Folder")),o.a.createElement("ul",{className:"NoteListNav__list"},n.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(y.a,{className:"NoteListNav__folder-link",to:"/folder/".concat(e.id)},o.a.createElement("span",{className:"NoteListNav__num-notes"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.filter(function(e){return e.folderId===t}).length}(r,e.id)),e.name))})))}}]),t}(o.a.Component));k.contextType=w;n(102);var P=function(e){function t(){return Object(f.a)(this,t),Object(N.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.context,n=t.notes,a=t.folders,r=this.props.match.params.noteId,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find(function(e){return e.id===t})}(a,(F(n,r)||{}).folderId);return o.a.createElement("div",{className:"NotePageNav"},o.a.createElement(_,{tag:"button",role:"link",onClick:function(){return e.props.history.goBack()},className:"NotePageNav__back-button"},o.a.createElement(O.a,{icon:"chevron-left"}),o.a.createElement("br",null),"Back"),c&&o.a.createElement("h3",{className:"NotePageNav__folder-name"},c.name))}}]),t}(o.a.Component);P.defaultProps={history:{goBack:function(){}},match:{params:{}}},P.contextType=w;var D=n(80),x=n(10),A=n.n(x),I=(n(206),function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(N.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).handleClickDelete=function(e){e.preventDefault();var t=n.props.id;fetch("".concat(A.a.API_ENDPOINT,"/notes/").concat(t),{method:"DELETE",headers:{"content-type":"application/json"}}).then(function(e){if(!e.ok)return e.json().then(function(e){return Promise.reject(e)})}).then(function(){console.log("wheeeeee"),n.context.deleteNote(t)}).catch(function(e){console.error({error:e})})},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){console.log(this.context.deleteNote);var e=this.props,t=e.name,n=e.id,a=e.modified;return o.a.createElement("div",{className:"Note"},o.a.createElement("h2",{className:"Note__title"},o.a.createElement(j.a,{to:"/note/".concat(n)},t)),o.a.createElement("button",{className:"Note__delete",type:"button",onClick:this.handleClickDelete},o.a.createElement(O.a,{icon:"trash-alt"})," ","remove"),o.a.createElement("div",{className:"Note__dates"},o.a.createElement("div",{className:"Note__dates-modified"},"Modified"," ",o.a.createElement("span",{className:"Date"},Object(D.format)(a,"Do MMM YYYY")))))}}]),t}(o.a.Component));I.contextType=w;n(208);var S=function(e){function t(){return Object(f.a)(this,t),Object(N.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.match.params.folderId,n=this.context.notes,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t?e.filter(function(e){return e.folderId===t}):e}(void 0===n?[]:n,t);return o.a.createElement("section",{className:"NoteListMain"},o.a.createElement("div",{className:"NoteListMain__button-container"},o.a.createElement(_,{tag:j.a,to:"/add-note",type:"button",className:"NoteListMain__add-note-button"},o.a.createElement(O.a,{icon:"plus"}),o.a.createElement("br",null),"Note")),o.a.createElement("ul",null,a.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(I,{id:t.id,name:t.name,modified:t.modified,onDeleteNote:e.onDeleteNote}))})))}}]),t}(o.a.Component);S.defaultProps={match:{params:{}}},S.contextType=w;n(210);var C=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(N.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).handleDeleteNote=function(e){n.props.history.push("/")},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.context.notes,t=void 0===e?[]:e,n=this.props.match.params.noteId,a=F(t,n)||{content:""};return o.a.createElement("section",{className:"NotePageMain"},o.a.createElement(I,{id:a.id,name:a.name,modified:a.modified,onDeleteNote:this.handleDeleteNote}),o.a.createElement("div",{className:"NotePageMain__content"},a.content.split(/\n \r|\n/).map(function(e,t){return o.a.createElement("p",{key:t},e)})))}}]),t}(o.a.Component);C.defaultProps={match:{params:{}}},C.contextType=w;n(212),n(214);var T=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(N.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).addFolder=function(e){fetch("".concat(A.a.API_ENDPOINT,"/folders/"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:e})}).then(function(e){return e.json()}).then(function(e){return n.context.addFolder(e)})},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target.newFolder.value;this.addFolder(t),this.props.history.goBack()}},{key:"updateFolderName",value:function(e){var t=e.target.value;this.context.updateNewFolderName(t)}},{key:"validateFolderName",value:function(){return 0===this.context.newFolder.name.trim()?"Must be more than 0 characters.":this.context.newFolder.name.trim().length<=3?"Must be more than 3 characters.":void 0}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("h2",{className:"add-folder-header"},"Add A New Folder")),o.a.createElement("form",{className:"add-folder-form",onSubmit:function(t){return e.handleSubmit(t)}},o.a.createElement("label",{htmlFor:"newFolder"},"Name:",this.context.newFolder.touched&&o.a.createElement("p",null,this.validateFolderName())),o.a.createElement("input",{type:"text",name:"newFolder",id:"newFolder","aria-required":"true","aria-label":"Name",onChange:function(t){return e.updateFolderName(t)}}),o.a.createElement("button",{type:"submit"},"Submit")))}}]),t}(a.Component);T.contextType=w;n(216);var L=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(N.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).addNewNote=function(e){e.modified=new Date(e.modified),fetch("".concat(A.a.API_ENDPOINT,"/notes"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(t){return console.log(JSON.stringify(e)),t.json()}).then(function(e){return n.context.handleAddNote(e)})},n.parseFolders=function(){return n.context.folders.map(function(e){return o.a.createElement("option",{key:e.id,name:e.id,value:e.id},e.name)})},n.handleFormSubmit=function(e){e.preventDefault(e);var t={name:e.target.name.value,content:e.target.content.value,folder_id:e.target.folders.value,modified:new Date};console.log(t),n.addNewNote(t),n.props.history.push("/")},n.validateName=function(){if(0===n.context.newNote.name.value.length)return"Name is required"},n.validateDescription=function(){if(0===n.context.newNote.content.value.length)return"Description is required"},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.context),o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("h2",{className:"add-note-header"},"Add A New Note")),o.a.createElement("form",{className:"add-note-form",onSubmit:function(t){return e.handleFormSubmit(t)}},o.a.createElement("label",{htmlFor:"name"},"Name",this.context.newNote.name.touched&&o.a.createElement("p",null,this.validateName())),o.a.createElement("input",{type:"text",name:"name",id:"name","aria-required":"true","aria-label":"Name",onChange:function(t){return e.context.updateNewNoteData(t.target.name,t.target.value)}}),o.a.createElement("label",{htmlFor:"content"},"Description",this.context.newNote.content.touched&&o.a.createElement("p",null,this.validateDescription())),o.a.createElement("input",{type:"text",name:"content",id:"content","aria-required":"true","aria-label":"Description",onChange:function(t){return e.context.updateNewNoteData(t.target.name,t.target.value)}}),o.a.createElement("label",{htmlFor:"folders"},"Select a Folder"),o.a.createElement("select",{name:"folders",id:"folders","aria-required":"true","aria-label":"Select a folder"},this.parseFolders()),o.a.createElement("button",{type:"submit"},"Submit")))}}]),t}(o.a.Component);L.contextType=w;var M=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(N.a)(this,Object(v.a)(t).call(this,e))).state={hasError:!1},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.state.hasError?o.a.createElement("div",null,o.a.createElement("h2",null,"ERROR"),o.a.createElement("p",null,"Something wrong here!...")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(a.Component),R=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(N.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[],folders:[],newFolder:{hasError:!1,touched:!1,name:""},newNote:{name:{touched:!1,value:""},folder_id:{touched:!1,value:""},content:{touched:!1,value:""}}},n.updateNewFolderName=function(e){n.setState({newFolder:{hasError:!1,touched:!0,name:e}})},n.updateNewNoteData=function(e,t){n.setState({newNote:Object(h.a)({},n.state.newNote,Object(m.a)({},e,{touched:!0,value:t}))})},n.handleAddFolder=function(e){n.setState({folders:[].concat(Object(u.a)(n.state.folders),[e])})},n.handleAddNote=function(e){n.setState({notes:[].concat(Object(u.a)(n.state.notes),[e])})},n.handleDeleteNote=function(e){console.log("Firing!"),n.setState({notes:n.state.notes.filter(function(t){return t.id!==e})})},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([fetch("".concat(A.a.API_ENDPOINT,"/notes")),fetch("".concat(A.a.API_ENDPOINT,"/folders"))]).then(function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return n.ok?a.ok?Promise.all([n.json(),a.json()]):a.json().then(function(e){return Promise.reject(e)}):n.json().then(function(e){return Promise.reject(e)})}).then(function(t){var n=Object(s.a)(t,2),a=n[0],o=n[1];e.setState({notes:a,folders:o})}).catch(function(e){console.error({error:e})})}},{key:"renderNavRoutes",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{path:"/note/:noteId",component:P}),o.a.createElement(b.a,{path:"/add-folder",component:P}),o.a.createElement(b.a,{path:"/add-note",component:P}),["/","/folder/:folderId"].map(function(e){return o.a.createElement(b.a,{exact:!0,key:e,path:e,component:k})}))}},{key:"renderMainRoutes",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{path:"/note/:noteId",component:C}),o.a.createElement(b.a,{path:"/add-folder",component:T}),o.a.createElement(b.a,{path:"/add-note",component:L}),["/","/folder/:folderId"].map(function(e){return o.a.createElement(b.a,{exact:!0,key:e,path:e,component:S})}))}},{key:"render",value:function(){console.log(this.state);var e={notes:this.state.notes,folders:this.state.folders,deleteNote:this.handleDeleteNote,addFolder:this.handleAddFolder,newFolder:this.state.newFolder,updateNewFolderName:this.updateNewFolderName,newNote:this.state.newNote,handleAddNote:this.handleAddNote,updateNewNoteData:this.updateNewNoteData};return o.a.createElement(w.Provider,{value:e},o.a.createElement("div",{className:"App"},o.a.createElement(M,null,o.a.createElement("nav",{className:"App__nav"},this.renderNavRoutes()),o.a.createElement("header",{className:"App__header"},o.a.createElement("h1",null,o.a.createElement(j.a,{to:"/"},"Noteful")," ",o.a.createElement(O.a,{icon:"check-double"}))),o.a.createElement("main",{className:"App__main"},this.renderMainRoutes()))))}}]),t}(a.Component);l.b.add(i.c,i.b,i.d,i.a),c.a.render(o.a.createElement(d.a,null,o.a.createElement(R,null)),document.getElementById("root"))},82:function(e,t,n){e.exports=n(218)},92:function(e,t,n){},96:function(e,t,n){},98:function(e,t,n){}},[[82,2,1]]]);
//# sourceMappingURL=main.ca14aca6.chunk.js.map