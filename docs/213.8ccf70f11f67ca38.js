"use strict";(self.webpackChunktrello_auth=self.webpackChunktrello_auth||[]).push([[213],{9213:(ho,C,i)=>{i.r(C),i.d(C,{AuthModule:()=>f});var _=i(6895),n=i(433),A=i(2216),m=i(7699),o=i(1571);class l{constructor(){}ngOnInit(){}}l.\u0275fac=function(r){return new(r||l)},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-header"]],decls:2,vars:0,consts:[[1,"py-4","flex","justify-center"],["loading","lazy","src","/assets/images/logo/logo-gradient-blue-trello.png","alt","logo",1,"w-56","md:w-60"]],template:function(r,t){1&r&&(o.TgZ(0,"header",0),o._UZ(1,"img",1),o.qZA())},encapsulation:2});class c{constructor(){}ngOnInit(){}}c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=o.Xpm({type:c,selectors:[["app-footer"]],decls:3,vars:0,consts:[[1,"mt-10","border-b-1","border-r-gray-300"],[1,"flex","justify-center"],["loading","lazy","src","/assets/images/logo/logo-atlassian-gray.png","alt","logo",1,"w-32","mt-4"]],template:function(r,t){1&r&&(o._UZ(0,"hr",0),o.TgZ(1,"div",1),o._UZ(2,"img",2),o.qZA())},encapsulation:2});var p=i(2687),F=i(7556),q=i(9200);function I(e,r){1&e&&(o.TgZ(0,"p",11),o._uU(1," This field is mandatory "),o.qZA())}function N(e,r){1&e&&(o.TgZ(0,"p",11),o._uU(1," This field should be a email "),o.qZA())}function R(e,r){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,I,2,0,"p",9),o.YNc(2,N,2,0,"p",9),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.form.controls.email.hasError("required")),o.xp6(1),o.Q6J("ngIf",t.form.controls.email.hasError("email"))}}function P(e,r){1&e&&(o.TgZ(0,"p",11),o._uU(1," This field is mandatory "),o.qZA())}function Q(e,r){1&e&&(o.TgZ(0,"p",11),o._uU(1," This field should be greater than 6 characters "),o.qZA())}function Y(e,r){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,P,2,0,"p",9),o.YNc(2,Q,2,0,"p",9),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.form.controls.password.hasError("required")),o.xp6(1),o.Q6J("ngIf",t.form.controls.password.hasError("minlength"))}}function k(e,r){1&e&&(o.TgZ(0,"div",11),o._uU(1," Credentials are invalid "),o.qZA())}class h{constructor(r,t,s,a){this.formBuilder=r,this.router=t,this.authService=s,this.route=a,this.form=this.formBuilder.nonNullable.group({email:["",[n.kI.email,n.kI.required]],password:["",[n.kI.required,n.kI.minLength(4)]]}),this.faPen=p.IwR,this.faEye=p.Mdf,this.faEyeSlash=p.Aq,this.showPassword=!1,this.status="init",this.route.queryParamMap.subscribe(g=>{const J=g.get("email");J&&this.form.controls.email.setValue(J)})}doLogin(){if(this.form.valid){this.status="loading";const{email:r,password:t}=this.form.getRawValue();this.authService.login(r,t).subscribe({next:()=>{this.status="success",console.log("ingreso"),this.router.navigate(["/app"])},error:()=>{this.status="failed"}})}else this.form.markAllAsTouched()}}h.\u0275fac=function(r){return new(r||h)(o.Y36(n.qu),o.Y36(m.F0),o.Y36(F.e),o.Y36(m.gz))},h.\u0275cmp=o.Xpm({type:h,selectors:[["app-login-form"]],decls:20,vars:8,consts:[[1,"text-center","font-bold","py-2","text-gray-700"],["novalidate","",1,"space-y-4",3,"formGroup","ngSubmit"],[1,"relative"],["formControlName","email","placeholder","Enter email","type","email",1,"w-full","rounded","bg-gray-100","border-gray-300","border-2"],["nameInput",""],["type","button",1,"p-2","absolute","right-2",3,"click"],[3,"icon"],[4,"ngIf"],["formControlName","password","placeholder","Enter password",1,"w-full","rounded","bg-gray-100","border-gray-300","border-2",3,"type"],["class","font-medium text-red-500 text-xs mt-1 ml-1",4,"ngIf"],["typeBtn","submit","color","success",3,"loading"],[1,"font-medium","text-red-500","text-xs","mt-1","ml-1"]],template:function(r,t){if(1&r){const s=o.EpF();o.TgZ(0,"h1",0),o._uU(1,"Log in to Trello"),o.qZA(),o.TgZ(2,"form",1),o.NdJ("ngSubmit",function(){return t.doLogin()}),o.TgZ(3,"div")(4,"div",2),o._UZ(5,"input",3,4),o.TgZ(7,"button",5),o.NdJ("click",function(){o.CHM(s);const g=o.MAs(6);return o.KtG(g.focus())}),o._UZ(8,"fa-icon",6),o.qZA()(),o.YNc(9,R,3,2,"div",7),o.qZA(),o.TgZ(10,"div")(11,"div",2),o._UZ(12,"input",8),o.TgZ(13,"button",5),o.NdJ("click",function(){return t.showPassword=!t.showPassword}),o._UZ(14,"fa-icon",6),o.qZA()(),o.YNc(15,Y,3,2,"div",7),o.qZA(),o.YNc(16,k,2,0,"div",9),o.TgZ(17,"div")(18,"app-btn",10),o._uU(19,"Login"),o.qZA()()()}2&r&&(o.xp6(2),o.Q6J("formGroup",t.form),o.xp6(6),o.Q6J("icon",t.faPen),o.xp6(1),o.Q6J("ngIf",t.form.controls.email.touched&&t.form.controls.email.invalid),o.xp6(3),o.Q6J("type",t.showPassword?"text":"password"),o.xp6(2),o.Q6J("icon",t.showPassword?t.faEye:t.faEyeSlash),o.xp6(1),o.Q6J("ngIf",t.form.controls.password.touched&&t.form.controls.password.invalid),o.xp6(1),o.Q6J("ngIf","failed"===t.status),o.xp6(2),o.Q6J("loading","loading"===t.status))},dependencies:[_.O5,q.r,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,A.BN],encapsulation:2});class d{constructor(){}ngOnInit(){}}d.\u0275fac=function(r){return new(r||d)},d.\u0275cmp=o.Xpm({type:d,selectors:[["app-background"]],decls:3,vars:0,consts:[[1,"absolute","w-full","h-full","hidden","sm:block"],["loading","lazy","src","/assets/svg/login-bg-left.svg","alt","logo",1,"absolute","w-52","sm:w-56","md:w-60","lg:w-96","bottom-0","left-0"],["loading","lazy","src","/assets/svg/login-bg-rigth.svg","alt","logo",1,"absolute","w-52","sm:w-56","md:w-60","lg:w-96","bottom-0","right-0"]],template:function(r,t){1&r&&(o.TgZ(0,"div",0),o._UZ(1,"img",1)(2,"img",2),o.qZA())},encapsulation:2});class v{constructor(){}ngOnInit(){}}function E(e,r){if(1&e&&(o.TgZ(0,"div")(1,"div",3),o._UZ(2,"img",4),o.qZA(),o.TgZ(3,"p"),o._uU(4,"We sent a recovery link to you at"),o.qZA(),o.TgZ(5,"p",5),o._uU(6),o.qZA()()),2&e){const t=o.oxw();o.xp6(6),o.Oqu(t.form.controls.email.value)}}function L(e,r){1&e&&(o.TgZ(0,"p",13),o._uU(1," This field is mandatory "),o.qZA())}function S(e,r){1&e&&(o.TgZ(0,"p",13),o._uU(1," This field should be a email "),o.qZA())}function B(e,r){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,L,2,0,"p",12),o.YNc(2,S,2,0,"p",12),o.qZA()),2&e){const t=o.oxw(2);o.xp6(1),o.Q6J("ngIf",t.form.controls.email.hasError("required")),o.xp6(1),o.Q6J("ngIf",t.form.controls.email.hasError("email"))}}function M(e,r){if(1&e){const t=o.EpF();o.TgZ(0,"form",6),o.NdJ("ngSubmit",function(){o.CHM(t);const a=o.oxw();return o.KtG(a.sendLink())}),o.TgZ(1,"div")(2,"div",7)(3,"label",8),o._uU(4,"We'll send a recovery link to"),o.qZA(),o._UZ(5,"input",9,10),o.qZA(),o.YNc(7,B,3,2,"div",1),o.qZA(),o.TgZ(8,"div")(9,"app-btn",11),o._uU(10,"Send Recovery Link"),o.qZA()()()}if(2&e){const t=o.oxw();o.Q6J("formGroup",t.form),o.xp6(7),o.Q6J("ngIf",t.form.controls.email.touched&&t.form.controls.email.invalid),o.xp6(2),o.Q6J("loading","loading"===t.status)}}v.\u0275fac=function(r){return new(r||v)},v.\u0275cmp=o.Xpm({type:v,selectors:[["app-login"]],decls:16,vars:0,consts:[[1,"w-screen","h-screen","bg-white","sm:bg-gray-50","relative"],[1,"relative","w-full","sm:w-7/12","md:w-6/12","lg:w-4/12","m-auto"],[1,"bg-white","rounded","shadow-none","sm:shadow-lg","py-4","px-4","md:px-9"],[1,"mb-4"],[1,"my-4","border-b-1","border-r-gray-300"],[1,"flex","justify-center","items-center","space-x-0","space-y-2","md:space-x-2","md:space-y-0","flex-col","md:flex-row"],["routerLink","/forgot-password",1,"text-blue-600"],[1,"text-gray-500","hidden","md:block"],["routerLink","/register",1,"text-blue-600"]],template:function(r,t){1&r&&(o.TgZ(0,"div",0),o._UZ(1,"app-background"),o.TgZ(2,"div",1),o._UZ(3,"app-header"),o.TgZ(4,"div",2)(5,"div",3),o._UZ(6,"app-login-form"),o.qZA(),o._UZ(7,"hr",4),o.TgZ(8,"div",5)(9,"a",6),o._uU(10,"Can't log in?"),o.qZA(),o.TgZ(11,"span",7),o._uU(12,"\u2022"),o.qZA(),o.TgZ(13,"a",8),o._uU(14,"Sign up for an account"),o.qZA()()(),o._UZ(15,"app-footer"),o.qZA()())},dependencies:[m.rH,l,c,h,d],encapsulation:2});class Z{constructor(r){this.formBuilder=r,this.form=this.formBuilder.nonNullable.group({email:["",[n.kI.email,n.kI.required]]}),this.status="init",this.emailSent=!1}sendLink(){this.form.valid?(this.status="loading",this.form.getRawValue()):this.form.markAllAsTouched()}}Z.\u0275fac=function(r){return new(r||Z)(o.Y36(n.qu))},Z.\u0275cmp=o.Xpm({type:Z,selectors:[["app-forgot-password-form"]],decls:4,vars:2,consts:[[1,"text-center","font-bold","py-2","text-gray-700"],[4,"ngIf"],["novalidate","","class","space-y-4",3,"formGroup","ngSubmit",4,"ngIf"],[1,"flex","justify-center","py-4"],["loading","lazy","src","/assets/svg/check-email.svg","alt","logo",1,"w-40"],[1,"font-bold"],["novalidate","",1,"space-y-4",3,"formGroup","ngSubmit"],[1,"relative"],["for","email",1,"block","text-xs","font-semibold","my-2"],["formControlName","email","placeholder","Enter email","type","email","name","email",1,"w-full","rounded","bg-gray-100","border-gray-300","border-2"],["nameInput",""],["typeBtn","submit","color","success",3,"loading"],["class","font-medium text-red-500 text-xs mt-1 ml-1",4,"ngIf"],[1,"font-medium","text-red-500","text-xs","mt-1","ml-1"]],template:function(r,t){1&r&&(o.TgZ(0,"h1",0),o._uU(1,"Can't log in?"),o.qZA(),o.YNc(2,E,7,1,"div",1),o.YNc(3,M,11,3,"form",2)),2&r&&(o.xp6(2),o.Q6J("ngIf",t.emailSent),o.xp6(1),o.Q6J("ngIf",!t.emailSent))},dependencies:[_.O5,q.r,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u],encapsulation:2});class w{constructor(){}}w.\u0275fac=function(r){return new(r||w)},w.\u0275cmp=o.Xpm({type:w,selectors:[["app-forgot-password"]],decls:12,vars:0,consts:[[1,"w-screen","h-screen","bg-white","md:bg-gray-50","relative"],[1,"relative","w-full","sm:w-7/12","md:w-6/12","lg:w-4/12","m-auto"],[1,"bg-white","rounded","shadow-lg","py-4","px-4","md:px-9"],[1,"mb-4"],[1,"my-4","border-b-1","border-r-gray-300"],[1,"flex","justify-center","items-center","space-x-0","space-y-2","md:space-x-2","md:space-y-0","flex-col","md:flex-row"],["routerLink","/login",1,"text-blue-600"]],template:function(r,t){1&r&&(o.TgZ(0,"div",0),o._UZ(1,"app-background"),o.TgZ(2,"div",1),o._UZ(3,"app-header"),o.TgZ(4,"div",2)(5,"div",3),o._UZ(6,"app-forgot-password-form"),o.qZA(),o._UZ(7,"hr",4),o.TgZ(8,"div",5)(9,"a",6),o._uU(10,"Return to log in"),o.qZA()()(),o._UZ(11,"app-footer"),o.qZA()())},dependencies:[m.rH,l,c,Z,d],encapsulation:2});class U{static MatchValidator(r,t){return s=>{const a=s.get(r),g=s.get(t);return a&&g&&a.value!==g.value?{mismatch:!0}:null}}}function G(e,r){1&e&&(o.TgZ(0,"p",14),o._uU(1," This field is mandatory "),o.qZA())}function j(e,r){1&e&&(o.TgZ(0,"p",14),o._uU(1," This field should be a email "),o.qZA())}function X(e,r){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,G,2,0,"p",13),o.YNc(2,j,2,0,"p",13),o.qZA()),2&e){const t=o.oxw(2);o.xp6(1),o.Q6J("ngIf",t.form.controls.email.hasError("required")),o.xp6(1),o.Q6J("ngIf",t.formUser.controls.email.hasError("email"))}}function H(e,r){if(1&e){const t=o.EpF();o.TgZ(0,"div")(1,"h1",1),o._uU(2,"Enter your data"),o.qZA(),o.TgZ(3,"form",12),o.NdJ("ngSubmit",function(){o.CHM(t);const a=o.oxw();return o.KtG(a.validateUser())}),o.TgZ(4,"div")(5,"div",3),o._UZ(6,"input",5),o.YNc(7,X,3,2,"div",0),o.qZA()(),o.TgZ(8,"div")(9,"app-btn",11),o._uU(10,"Continue"),o.qZA()()()()}if(2&e){const t=o.oxw();o.xp6(3),o.Q6J("formGroup",t.formUser),o.xp6(4),o.Q6J("ngIf",t.formUser.controls.email.touched&&t.formUser.controls.email.invalid),o.xp6(2),o.Q6J("loading","loading"===t.statusUser)}}function V(e,r){1&e&&(o.TgZ(0,"p",14),o._uU(1," This field is mandatory "),o.qZA())}function z(e,r){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,V,2,0,"p",13),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.form.controls.name.hasError("required"))}}function O(e,r){1&e&&(o.TgZ(0,"p",14),o._uU(1," This field is mandatory "),o.qZA())}function K(e,r){1&e&&(o.TgZ(0,"p",14),o._uU(1," This field should be a email "),o.qZA())}function W(e,r){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,O,2,0,"p",13),o.YNc(2,K,2,0,"p",13),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.form.controls.email.hasError("required")),o.xp6(1),o.Q6J("ngIf",t.form.controls.email.hasError("email"))}}function D(e,r){1&e&&(o.TgZ(0,"p",14),o._uU(1," This field is mandatory "),o.qZA())}function $(e,r){1&e&&(o.TgZ(0,"p",14),o._uU(1," This field should be greater than 4 characters "),o.qZA())}function oo(e,r){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,D,2,0,"p",13),o.YNc(2,$,2,0,"p",13),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.form.controls.password.hasError("required")),o.xp6(1),o.Q6J("ngIf",t.form.controls.password.hasError("minlength"))}}function eo(e,r){1&e&&(o.TgZ(0,"p",14),o._uU(1," This field is mandatory "),o.qZA())}function to(e,r){1&e&&(o.TgZ(0,"p",14),o._uU(1," This field should be greater than 6 characters "),o.qZA())}function ro(e,r){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,eo,2,0,"p",13),o.YNc(2,to,2,0,"p",13),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.form.controls.confirmPassword.hasError("required")),o.xp6(1),o.Q6J("ngIf",t.form.controls.confirmPassword.hasError("minlength"))}}function no(e,r){1&e&&(o.TgZ(0,"p",14),o._uU(1," The password are not the same "),o.qZA())}function so(e,r){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,no,2,0,"p",13),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.form.hasError("mismatch"))}}class y{constructor(r,t,s){this.formBuilder=r,this.router=t,this.authService=s,this.formUser=this.formBuilder.nonNullable.group({email:["",[n.kI.email,n.kI.required]]}),this.form=this.formBuilder.nonNullable.group({name:["",[n.kI.required]],email:["",[n.kI.email,n.kI.required]],password:["",[n.kI.minLength(4),n.kI.required]],confirmPassword:["",[n.kI.required]]},{validators:[U.MatchValidator("password","confirmPassword")]}),this.status="init",this.statusUser="init",this.faEye=p.Mdf,this.faEyeSlash=p.Aq,this.showPassword=!1,this.showRegister=!1}register(){if(this.form.valid){this.status="loading";const{name:r,email:t,password:s}=this.form.getRawValue();this.authService.registerAndLogin(r,t,s).subscribe({next:()=>{this.status="success",this.router.navigate(["/app/boards"])},error:()=>{this.status="failed"}}),console.log(r,t,s)}else this.form.markAllAsTouched()}validateUser(){if(this.formUser.valid){this.statusUser="loading";const{email:r}=this.formUser.getRawValue();this.authService.isAvailable(r).subscribe({next:t=>{this.statusUser="success",console.log("isAvailable",t.isAvailable),t.isAvailable?(this.showRegister=!0,this.form.controls.email.setValue("email")):this.router.navigate(["/login"],{queryParams:{email:r}})},error:()=>{this.statusUser="failed"}})}else this.formUser.markAllAsTouched()}}y.\u0275fac=function(r){return new(r||y)(o.Y36(n.qu),o.Y36(m.F0),o.Y36(F.e))},y.\u0275cmp=o.Xpm({type:y,selectors:[["app-register-form"]],decls:28,vars:10,consts:[[4,"ngIf"],[1,"text-center","font-bold","py-2","text-gray-700"],["novalidate","",1,"space-y-4",3,"formGroup","ngSubmit"],[1,"relative"],["formControlName","name","placeholder","Enter your name","type","text","name","name",1,"w-full","rounded","bg-gray-100","border-gray-300","border-2"],["formControlName","email","placeholder","Enter email","type","email","name","email",1,"w-full","rounded","bg-gray-100","border-gray-300","border-2"],["nameInput",""],["formControlName","password","placeholder","Enter password",1,"w-full","rounded","bg-gray-100","border-gray-300","border-2",3,"type"],["type","button",1,"p-2","absolute","right-2",3,"click"],[3,"icon"],["formControlName","confirmPassword","placeholder","Confirm password","type","password",1,"w-full","rounded","bg-gray-100","border-gray-300","border-2"],["typeBtn","submit","color","success",3,"loading"],["nonalidate","",1,"space-y-4",3,"formGroup","ngSubmit"],["class","font-medium text-red-500 text-xs mt-1 ml-1",4,"ngIf"],[1,"font-medium","text-red-500","text-xs","mt-1","ml-1"]],template:function(r,t){1&r&&(o.YNc(0,H,11,3,"div",0),o.TgZ(1,"div")(2,"h1",1),o._uU(3,"Enter your data"),o.qZA(),o.TgZ(4,"form",2),o.NdJ("ngSubmit",function(){return t.register()}),o.TgZ(5,"div")(6,"div",3),o._UZ(7,"input",4),o.qZA(),o.YNc(8,z,2,1,"div",0),o.qZA(),o.TgZ(9,"div")(10,"div",3),o._UZ(11,"input",5,6),o.qZA(),o.YNc(13,W,3,2,"div",0),o.qZA(),o.TgZ(14,"div")(15,"div",3),o._UZ(16,"input",7),o.TgZ(17,"button",8),o.NdJ("click",function(){return t.showPassword=!t.showPassword}),o._UZ(18,"fa-icon",9),o.qZA()(),o.YNc(19,oo,3,2,"div",0),o.qZA(),o.TgZ(20,"div")(21,"div",3),o._UZ(22,"input",10),o.qZA(),o.YNc(23,ro,3,2,"div",0),o.qZA(),o.YNc(24,so,2,1,"div",0),o.TgZ(25,"div")(26,"app-btn",11),o._uU(27,"Register"),o.qZA()()()()),2&r&&(o.Q6J("ngIf",!t.showRegister),o.xp6(4),o.Q6J("formGroup",t.form),o.xp6(4),o.Q6J("ngIf",t.form.controls.name.touched&&t.form.controls.name.invalid),o.xp6(5),o.Q6J("ngIf",t.form.controls.email.touched&&t.form.controls.email.invalid),o.xp6(3),o.Q6J("type",t.showPassword?"text":"password"),o.xp6(2),o.Q6J("icon",t.showPassword?t.faEye:t.faEyeSlash),o.xp6(1),o.Q6J("ngIf",t.form.controls.password.touched&&t.form.controls.password.invalid),o.xp6(4),o.Q6J("ngIf",t.form.controls.confirmPassword.touched&&t.form.controls.confirmPassword.invalid),o.xp6(1),o.Q6J("ngIf",t.form.controls.confirmPassword.touched),o.xp6(2),o.Q6J("loading","loading"===t.status))},dependencies:[_.O5,q.r,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,A.BN],encapsulation:2});class T{constructor(){}}function io(e,r){1&e&&(o.TgZ(0,"p",10),o._uU(1," This field is mandatory "),o.qZA())}function ao(e,r){1&e&&(o.TgZ(0,"p",10),o._uU(1," This field should be greater than 6 characters "),o.qZA())}function mo(e,r){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,io,2,0,"p",9),o.YNc(2,ao,2,0,"p",9),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.form.controls.newPassword.hasError("required")),o.xp6(1),o.Q6J("ngIf",t.form.controls.newPassword.hasError("minlength"))}}function lo(e,r){1&e&&(o.TgZ(0,"p",10),o._uU(1," This field is mandatory "),o.qZA())}function co(e,r){1&e&&(o.TgZ(0,"p",10),o._uU(1," This field should be greater than 6 characters "),o.qZA())}function po(e,r){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,lo,2,0,"p",9),o.YNc(2,co,2,0,"p",9),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.form.controls.confirmPassword.hasError("required")),o.xp6(1),o.Q6J("ngIf",t.form.controls.confirmPassword.hasError("minlength"))}}function uo(e,r){1&e&&(o.TgZ(0,"p",10),o._uU(1," The password are not the same "),o.qZA())}function fo(e,r){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,uo,2,0,"p",9),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.form.hasError("mismatch"))}}T.\u0275fac=function(r){return new(r||T)},T.\u0275cmp=o.Xpm({type:T,selectors:[["app-register"]],decls:12,vars:0,consts:[[1,"w-screen","h-screen","bg-white","md:bg-gray-50","relative"],[1,"relative","w-full","sm:w-7/12","md:w-6/12","lg:w-4/12","m-auto"],[1,"bg-white","rounded","sm:shadow-lg","py-4","px-4","md:px-9"],[1,"mb-4"],[1,"my-4","border-b-1","border-r-gray-300"],[1,"flex","justify-center","items-center","space-x-0","space-y-2","md:space-x-2","md:space-y-0","flex-col","md:flex-row"],["routerLink","/login",1,"text-blue-600"]],template:function(r,t){1&r&&(o.TgZ(0,"div",0),o._UZ(1,"app-background"),o.TgZ(2,"div",1),o._UZ(3,"app-header"),o.TgZ(4,"div",2)(5,"div",3),o._UZ(6,"app-register-form"),o.qZA(),o._UZ(7,"hr",4),o.TgZ(8,"div",5)(9,"a",6),o._uU(10,"Return to log in"),o.qZA()()(),o._UZ(11,"app-footer"),o.qZA()())},dependencies:[m.rH,l,c,y,d],encapsulation:2});class x{constructor(r){this.formBuilder=r,this.form=this.formBuilder.nonNullable.group({newPassword:["",[n.kI.minLength(6),n.kI.required]],confirmPassword:["",[n.kI.required]]},{validators:[U.MatchValidator("newPassword","confirmPassword")]}),this.status="init",this.faEye=p.Mdf,this.faEyeSlash=p.Aq,this.showPassword=!1}recovery(){this.form.valid||this.form.markAllAsTouched()}}x.\u0275fac=function(r){return new(r||x)(o.Y36(n.qu))},x.\u0275cmp=o.Xpm({type:x,selectors:[["app-recovery-form"]],decls:17,vars:7,consts:[[1,"text-center","font-bold","py-2","text-gray-700"],["novalidate","",1,"space-y-4",3,"formGroup","ngSubmit"],[1,"relative"],["formControlName","newPassword","placeholder","Enter new password",1,"w-full","rounded","bg-gray-100","border-gray-300","border-2",3,"type"],["type","button",1,"p-2","absolute","right-2",3,"click"],[3,"icon"],[4,"ngIf"],["formControlName","confirmPassword","placeholder","Confirm new password","type","password",1,"w-full","rounded","bg-gray-100","border-gray-300","border-2"],["typeBtn","submit","color","success",3,"loading"],["class","font-medium text-red-500 text-xs mt-1 ml-1",4,"ngIf"],[1,"font-medium","text-red-500","text-xs","mt-1","ml-1"]],template:function(r,t){1&r&&(o.TgZ(0,"h1",0),o._uU(1,"Set your new password"),o.qZA(),o.TgZ(2,"form",1),o.NdJ("ngSubmit",function(){return t.recovery()}),o.TgZ(3,"div")(4,"div",2),o._UZ(5,"input",3),o.TgZ(6,"button",4),o.NdJ("click",function(){return t.showPassword=!t.showPassword}),o._UZ(7,"fa-icon",5),o.qZA()(),o.YNc(8,mo,3,2,"div",6),o.qZA(),o.TgZ(9,"div")(10,"div",2),o._UZ(11,"input",7),o.qZA(),o.YNc(12,po,3,2,"div",6),o.qZA(),o.YNc(13,fo,2,1,"div",6),o.TgZ(14,"div")(15,"app-btn",8),o._uU(16,"Recovery"),o.qZA()()()),2&r&&(o.xp6(2),o.Q6J("formGroup",t.form),o.xp6(3),o.Q6J("type",t.showPassword?"text":"password"),o.xp6(2),o.Q6J("icon",t.showPassword?t.faEye:t.faEyeSlash),o.xp6(1),o.Q6J("ngIf",t.form.controls.newPassword.touched&&t.form.controls.newPassword.invalid),o.xp6(4),o.Q6J("ngIf",t.form.controls.confirmPassword.touched&&t.form.controls.confirmPassword.invalid),o.xp6(1),o.Q6J("ngIf",t.form.controls.confirmPassword.touched),o.xp6(2),o.Q6J("loading","loading"===t.status))},dependencies:[_.O5,q.r,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,A.BN],encapsulation:2});class b{constructor(){}}b.\u0275fac=function(r){return new(r||b)},b.\u0275cmp=o.Xpm({type:b,selectors:[["app-recovery"]],decls:12,vars:0,consts:[[1,"w-screen","h-screen","bg-white","md:bg-gray-50","relative"],[1,"relative","w-full","sm:w-7/12","md:w-6/12","lg:w-4/12","m-auto"],[1,"bg-white","rounded","shadow-lg","py-4","px-4","md:px-9"],[1,"mb-4"],[1,"my-4","border-b-1","border-r-gray-300"],[1,"flex","justify-center","items-center","space-x-0","space-y-2","md:space-x-2","md:space-y-0","flex-col","md:flex-row"],["routerLink","/login",1,"text-blue-600"]],template:function(r,t){1&r&&(o.TgZ(0,"div",0),o._UZ(1,"app-background"),o.TgZ(2,"div",1),o._UZ(3,"app-header"),o.TgZ(4,"div",2)(5,"div",3),o._UZ(6,"app-recovery-form"),o.qZA(),o._UZ(7,"hr",4),o.TgZ(8,"div",5)(9,"a",6),o._uU(10,"Return to log in"),o.qZA()()(),o._UZ(11,"app-footer"),o.qZA()())},dependencies:[m.rH,l,c,d,x],encapsulation:2});const go=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:v,title:"Login"},{path:"forgot-password",component:w,title:"Forgot Password"},{path:"register",component:T,title:"Register"},{path:"recovery",component:b,title:"Recovery"}];class u{}u.\u0275fac=function(r){return new(r||u)},u.\u0275mod=o.oAB({type:u}),u.\u0275inj=o.cJS({imports:[m.Bz.forChild(go),m.Bz]});var _o=i(2271);class f{}f.\u0275fac=function(r){return new(r||f)},f.\u0275mod=o.oAB({type:f}),f.\u0275inj=o.cJS({imports:[_.ez,_o.m,u,n.UX,A.uH]})}}]);