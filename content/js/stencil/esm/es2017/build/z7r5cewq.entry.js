import { h } from '../ionic-site-components.core.js';

class IonicButton {
    constructor() {
        this.color = 'default';
        this.type = 'button';
        this.disabled = false;
    }
    render() {
        if (this.disabled) {
            return (h("button", { class: this.color, type: this.type, disabled: true },
                h("slot", null)));
        }
        return (h("button", { class: this.color, type: this.type },
            h("slot", null)));
    }
    static get is() { return "ionic-button"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get style() { return "ionic-button button{border-radius:4px;padding:11px 15px 9px;font-size:16px;font-weight:500;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.1);box-shadow:0 1px 3px rgba(0,0,0,.1);border:0;outline:none;height:100%;-webkit-transition:background-color .2s,border-color .3s,color .3s,-webkit-box-shadow .3s;transition:background-color .2s,border-color .3s,color .3s,-webkit-box-shadow .3s;transition:background-color .2s,border-color .3s,box-shadow .3s,color .3s;transition:background-color .2s,border-color .3s,box-shadow .3s,color .3s,-webkit-box-shadow .3s}ionic-button button.default{background:#488aff;color:#fff}ionic-button button.default:hover{background:#629aff}ionic-button button.default:active{background:#2f7aff}ionic-button button.white{background:#fff;border-color:#e8ebf1;color:#488aff}ionic-button button.white:active{background:#fafafa}ionic-button button:hover{-webkit-box-shadow:0 2px 5px rgba(0,0,0,.12);box-shadow:0 2px 5px rgba(0,0,0,.12)}ionic-button button:active{-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}ionic-button button:disabled{background:#e8ebf1;color:#fff;-webkit-box-shadow:none;box-shadow:none}"; }
}

const EmailIcon = () => (h("svg", { width: "20", height: "14", viewBox: "0 0 20 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    h("path", { d: "M19.8365 1.71514L14.6635 7.04323C14.625 7.08213 14.625 7.14046 14.6635 7.17935L18.2837 11.0782C18.5288 11.3261 18.5288 11.7248 18.2837 11.9727C18.1635 12.0942 18 12.1574 17.8413 12.1574C17.6827 12.1574 17.5192 12.0942 17.399 11.9727L13.7933 8.08844C13.7548 8.04954 13.6923 8.04954 13.6538 8.08844L12.774 8.99266C12.0385 9.74617 11.0625 10.1643 10.0144 10.1691C8.95192 10.174 7.94231 9.72187 7.19712 8.95863L6.35096 8.08844C6.3125 8.04954 6.25 8.04954 6.21154 8.08844L2.60577 11.9727C2.48558 12.0942 2.32212 12.1574 2.16346 12.1574C2.00481 12.1574 1.84135 12.0942 1.72115 11.9727C1.47596 11.7248 1.47596 11.3261 1.72115 11.0782L5.34135 7.17935C5.375 7.14046 5.375 7.08213 5.34135 7.04323L0.163462 1.71514C0.100962 1.65194 0 1.69569 0 1.7832V12.4443C0 13.2999 0.692308 13.9999 1.53846 13.9999H18.4615C19.3077 13.9999 20 13.2999 20 12.4443V1.7832C20 1.69569 19.8942 1.6568 19.8365 1.71514Z", fill: "#B2BECD" }),
    h("path", { d: "M10.0013 8.90121C10.7128 8.90121 11.3811 8.61925 11.8811 8.10394L19.4244 0.340297C19.1599 0.126396 18.833 0 18.4724 0H1.53493C1.17435 0 0.842623 0.126396 0.583008 0.340297L8.12628 8.10394C8.62147 8.61438 9.28974 8.90121 10.0013 8.90121Z", fill: "#B2BECD" })));

class IonicNewsletterSignup {
    constructor() {
        this.placeholder = 'Email address';
        this.buttonText = 'Subscribe';
        this.darkMode = false;
        this.homepageMode = false;
        this.arrowMode = false;
        this.lg = false;
        this.kind = 'default';
        this.isLoading = false;
        this.hasSubmitted = false;
        this.email = null;
        this.hsFormIds = {
            default: '76e5f69f-85fd-4579-afce-a1892d48bb32',
            podcast: ''
        };
    }
    handleEmailChange(event) {
        this.email = event.target.value;
    }
    handleSubmit(e) {
        e.preventDefault();
        const email = this.email;
        this.isLoading = true;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/v1/newsletter");
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                this.isLoading = false;
                var json = JSON.parse(xhr.responseText);
                this.hasSubmitted = json.ok;
                this.hubspotIdentify(email);
            }
        };
        xhr.send(JSON.stringify({ email: this.email, podcast: this.kind === 'podcast' }));
    }
    hubspotIdentify(email) {
        const _hsq = window['_hsq'] = window['_hsq'] || [];
        _hsq.push(["identify", {
                email: email
            }]);
        _hsq.push(["trackEvent", {
                id: "Signed Up for Newsletter",
                value: true
            }]);
        var xhr = new XMLHttpRequest();
        var url = [
            'https://api.hsforms.com/submissions/v3/integration/submit',
            '3776657',
            '76e5f69f-85fd-4579-afce-a1892d48bb32'
        ].join('/');
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                console.log(json);
            }
        };
        xhr.send(JSON.stringify({
            fields: [{
                    name: 'email',
                    value: this.email
                }],
            context: {
                hutk: document.cookie.match(/hubspotutk=(.*?);/)[1],
                pageUri: window.location.href,
                pageName: document.title
            }
        }));
    }
    getFormClass() {
        let str = this.darkMode ? 'dark' : '';
        if (this.arrowMode) {
            str += ' arrow';
        }
        if (this.homepageMode) {
            str += ' homepage';
        }
        if (this.lg) {
            str += ' lg';
        }
        return str;
    }
    render() {
        return (h("form", { onSubmit: (e) => this.handleSubmit(e), class: this.getFormClass() },
            this.homepageMode ? h(EmailIcon, null) : '',
            h("input", { name: "email", type: "email", value: this.email, onInput: () => this.handleEmailChange(event), disabled: this.isLoading, placeholder: this.placeholder, required: true }),
            h("ionic-button", { color: this.darkMode ? 'white' : 'default', type: "submit", disabled: this.isLoading || this.hasSubmitted }, this.hasSubmitted ? 'Added!' :
                this.arrowMode || this.homepageMode ?
                    h("ion-icon", { name: "md-arrow-forward" }) : this.buttonText)));
    }
    static get is() { return "ionic-newsletter-signup"; }
    static get properties() { return {
        "arrowMode": {
            "type": Boolean,
            "attr": "arrow-mode"
        },
        "buttonText": {
            "type": String,
            "attr": "button-text"
        },
        "darkMode": {
            "type": Boolean,
            "attr": "dark-mode"
        },
        "email": {
            "state": true
        },
        "hasSubmitted": {
            "state": true
        },
        "homepageMode": {
            "type": Boolean,
            "attr": "homepage-mode"
        },
        "isLoading": {
            "state": true
        },
        "kind": {
            "type": String,
            "attr": "kind"
        },
        "lg": {
            "type": Boolean,
            "attr": "lg"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        }
    }; }
    static get style() { return "ionic-newsletter-signup form{position:relative;display:-ms-flexbox;display:flex;border-collapse:separate;width:100%;height:40px}\@media (max-width:991px){ionic-newsletter-signup form{max-width:calc(100% - 340px)}}\@media (max-width:767px){ionic-newsletter-signup form{float:none;max-width:100%;margin-top:15px}}ionic-newsletter-signup form.dark input{color:#fff;-webkit-box-shadow:none;box-shadow:none}ionic-newsletter-signup form.dark input:hover{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.15);box-shadow:0 1px 3px rgba(0,0,0,.15)}ionic-newsletter-signup form.dark input:focus{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.1);box-shadow:0 1px 3px rgba(0,0,0,.1)}ionic-newsletter-signup form.dark input::-webkit-input-placeholder{color:#bbceef}ionic-newsletter-signup form.dark input:-ms-input-placeholder{color:#bbceef}ionic-newsletter-signup form.dark input::-ms-input-placeholder{color:#bbceef}ionic-newsletter-signup form.dark input::placeholder{color:#bbceef}ionic-newsletter-signup form.lg{height:48px}ionic-newsletter-signup form.lg input{padding:1px 17px 0;font-size:14px}ionic-newsletter-signup form.lg ionic-button button{padding:11px 12px}ionic-newsletter-signup form.arrow{border-radius:6px;-webkit-box-shadow:0 1px 3px rgba(0,16,44,.08),0 2px 4px rgba(0,16,44,.12);box-shadow:0 1px 3px rgba(0,16,44,.08),0 2px 4px rgba(0,16,44,.12);-webkit-transition:box-shadow .15s ease;transition:box-shadow .15s ease}ionic-newsletter-signup form.arrow:hover{-webkit-box-shadow:0 7px 14px rgba(0,16,44,.12),0 3px 6px rgba(0,16,44,.08);box-shadow:0 7px 14px rgba(0,16,44,.12),0 3px 6px rgba(0,16,44,.08)}ionic-newsletter-signup form.arrow input{border-radius:6px 0 0 6px;-webkit-box-shadow:none;box-shadow:none}ionic-newsletter-signup form.arrow input::-webkit-input-placeholder{color:#a8b0be;font-weight:400}ionic-newsletter-signup form.arrow input:-ms-input-placeholder{color:#a8b0be;font-weight:400}ionic-newsletter-signup form.arrow input::-ms-input-placeholder{color:#a8b0be;font-weight:400}ionic-newsletter-signup form.arrow input::placeholder{color:#a8b0be;font-weight:400}ionic-newsletter-signup form.arrow ionic-button button{background:#f0f5ff;color:#3880ff;font-size:23px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-radius:0 6px 6px 0}ionic-newsletter-signup form.arrow ionic-button button:hover{background:#ebf2ff}\@media (max-width:991px){ionic-newsletter-signup form.arrow{max-width:100%}}ionic-newsletter-signup form.homepage{height:48px;border-radius:6px;background:#f8fafc;border:1px solid #e9edf3;-webkit-transition:border-color .2s,background-color .2s;transition:border-color .2s,background-color .2s}ionic-newsletter-signup form.homepage:hover{border-color:#73a6ff;background:#fff}ionic-newsletter-signup form.homepage svg{position:absolute;top:16px;left:16px}ionic-newsletter-signup form.homepage input{border-radius:6px 0 0 6px;-webkit-box-shadow:none;box-shadow:none;padding-left:46px}ionic-newsletter-signup form.homepage input::-webkit-input-placeholder{color:#a8b0be;font-weight:400}ionic-newsletter-signup form.homepage input:-ms-input-placeholder{color:#a8b0be;font-weight:400}ionic-newsletter-signup form.homepage input::-ms-input-placeholder{color:#a8b0be;font-weight:400}ionic-newsletter-signup form.homepage input::placeholder{color:#a8b0be;font-weight:400}ionic-newsletter-signup form.homepage ionic-button button{background:transparent;color:#7cabff;font-size:23px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-shadow:none;box-shadow:none;border-radius:0 6px 6px 0}ionic-newsletter-signup form.homepage ionic-button button:hover{color:#498aff;background:transparent}\@media (max-width:991px){ionic-newsletter-signup form.homepage{max-width:100%}}ionic-newsletter-signup input{border:none;background:hsla(0,0%,100%,.2);border-radius:4px 0 0 4px;font-size:13px;color:#24282e;-webkit-box-shadow:none;box-shadow:none;font-weight:500;height:100%;outline:0;-ms-flex-positive:1;flex-grow:1;padding:0 16px 1px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.1);box-shadow:0 1px 3px rgba(0,0,0,.1);-webkit-transition:background .2s,box-shadow .2s;transition:background .2s,box-shadow .2s}ionic-newsletter-signup input:hover{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.15);box-shadow:0 1px 3px rgba(0,0,0,.15)}ionic-newsletter-signup input:focus{-webkit-box-shadow:none;box-shadow:none;background:hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 2px rgba(0,0,0,.1);box-shadow:inset 0 0 2px rgba(0,0,0,.1)}ionic-newsletter-signup input::-webkit-input-placeholder{padding-left:0;color:#a1a9b6}ionic-newsletter-signup input:-ms-input-placeholder{padding-left:0;color:#a1a9b6}ionic-newsletter-signup input::-ms-input-placeholder{padding-left:0;color:#a1a9b6}ionic-newsletter-signup input::placeholder{padding-left:0;color:#a1a9b6}ionic-newsletter-signup ionic-button{height:100%}ionic-newsletter-signup ionic-button button{border-top-left-radius:0;border-bottom-left-radius:0;font-weight:500;font-size:14px;height:100%;padding:8px 9px 10px}"; }
}

export { IonicButton, IonicNewsletterSignup };
