const t=window.IonicSiteComponents.h;class e{constructor(){this.showPricingNotice=!1,this.buttonColor="white",this.transparentInput=!1}handleSubmit(t){var e=window.getCookie("hubspotutk");return this.hsidRef&&(this.hsidRef.value=e),!0}render(){return t("form",{class:`form quick-signup-form ${this.transparentInput?"transparent-input":""}`,role:"form",action:"https://dashboard.ionicframework.com/signup",method:"GET",onSubmit:t=>this.handleSubmit(t)},t("input",{type:"hidden",name:"hsid",ref:t=>this.hsidRef=t}),t("input",{type:"hidden",name:"source",value:"homepage-quick"}),t("div",{class:"form-group",id:"field-email"},t("div",{class:"row"},t("div",{class:"col-sm-8 input-col"},t("input",{class:"form-control",type:"email",placeholder:"Enter your email address",id:"id_email",name:"email",spellcheck:"false",required:!0})),t("div",{class:"col-sm-4"},t("button",{type:"submit",class:`btn ${this.buttonColor}`},"Get started")))),this.showPricingNotice?t("div",{class:"form-group"},"Ionic is free and open source for all developers. We also offer ",t("a",{href:"/pricing"},"enterprise options")," for teams that need support and premium features."):null)}static get is(){return"ionic-quick-signup"}static get properties(){return{buttonColor:{type:String,attr:"button-color"},showPricingNotice:{type:Boolean,attr:"show-pricing-notice"},transparentInput:{type:Boolean,attr:"transparent-input"}}}static get style(){return"ionic-quick-signup{display:block}.quick-signup-form{width:100%;margin-bottom:-15px}.quick-signup-form .input-col{padding-right:0}.quick-signup-form.transparent-input input{background-color:hsla(0,0%,100%,.2);border:none;border-radius:8px;color:#fff}.quick-signup-form.transparent-input input:focus{border:none}.quick-signup-form.transparent-input input::-webkit-input-placeholder{color:hsla(0,0%,100%,.8);font-weight:400}.quick-signup-form.transparent-input input:-ms-input-placeholder{color:hsla(0,0%,100%,.8);font-weight:400}.quick-signup-form.transparent-input input::-ms-input-placeholder{color:hsla(0,0%,100%,.8);font-weight:400}.quick-signup-form.transparent-input input::placeholder{color:hsla(0,0%,100%,.8);font-weight:400}.quick-signup-form.transparent-input button.btn.white{font-family:Eina,Helvetica Neue,Helvetica,sans-serif;border-radius:8px;text-transform:none;font-weight:600;padding-left:15px;padding-right:15px}.quick-signup-form input{padding:0 14px;height:54px;background-color:#fff;-webkit-box-shadow:none;box-shadow:none;border:2px solid transparent;margin:0;width:100%}.quick-signup-form input::-webkit-input-placeholder{color:#757575;font-weight:700}.quick-signup-form input:-ms-input-placeholder{color:#757575;font-weight:700}.quick-signup-form input::-ms-input-placeholder{color:#757575;font-weight:700}.quick-signup-form input::placeholder{color:#757575;font-weight:700}.quick-signup-form input:focus{border:2px solid #757575}.quick-signup-form button{margin-top:0}\@media (max-width:991px){.quick-signup-form{max-width:60%;margin:auto}}\@media (max-width:767px){.quick-signup-form .btn{margin-top:20px}}"}}export{e as IonicQuickSignup};