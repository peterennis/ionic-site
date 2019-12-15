const express              = require('express');
const ab                   = require('express-ab');
const bp                   = require('body-parser');
const { PRISMIC_ENDPOINT } = require('./config');
const markdown             = require('./markdown');
const es                   = require('express-sanitizer');
const { join }             = require('path');

const { getPrismicAPI, previewController, getPrismic } = require('./prismic');

const { getIntegrations, getIntegration } = require('./controllers/integrations');
const trustedPartnersCtrl = require('./controllers/trustedPartnersCtrl');
const contactCtrl = require('./controllers/contactCtrl');
const newsletterCtrl    = require('./controllers/newsletterCtrl');
const viewCtrl    = require('./controllers/viewCtrl');

module.exports = {
router: app => {

  // var abTestTest = ab.test('pricing-test', {id: 'MRClmJX_QEakg3kJs2jH9g'});

  app.options("/api/*", function(_, res){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 
      'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.removeHeader('Content-Security-Policy');
    res.removeHeader('X-Content-Security-Policy');
    res.removeHeader('X-WebKit-CSP');
    res.send(200);
  });

  return new express.Router()
  // .get('/css/styles.min.css', abTestTest(null, 0.50), function(_, res) {
  //   res.sendFile('/css/styles.min.css', {root: './_site'});
  // })
  // .get('/css/styles.min.css', abTestTest(null, 0.50), function(_, res) {
  //   res.sendFile('/css/styles.test.min.css', {root: './_site'});
  // });

  // normal pages
  .get('/', (_, res) => res.render('index'))

  .get('/about', (_, res) => res.render('about'))
  .get('/advisory', (_, res) => res.render('products/advisory'))
  .get('/appflow', (_, res) => res.render('products/appflow'))
  .get('/auth-connect', (_, res) => res.render('auth-connect'))

  .get('/books/hybrid-vs-native', (_, res) =>
    res.render('books/hybrid-vs-native'))
  .get('/books/hybrid-vs-native/preview', (_, res) =>
    res.render('books/hybrid-vs-native-preview'))

  .get('/code-of-conduct', (_, res) => markdown(res, 'code-of-conduct'))
  .get('/community', (_, res) => res.render('community'))
  .get('/contact', (_, res) => res.render('contact'))
  .get('/contributors', (_, res) => res.render('contributors'))
  .get('/creator', (_, res) => res.render('creator/index'))
  .get('/creator/pricing', (_, res) => res.render('creator/pricing'))
  .get('/creator/support', (_, res) => res.render('creator/support'))
  .get('/demo', (_, res) => res.render('demo'))
  .get('/developers', (_, res) => res.render('developers'))

  .get('/enterprise', (_, res) => res.render('enterprise/index'))
  .get('/enterprise/customers', (_, res) => res.render('enterprise/customers'))
  .get('/enterprise/contact', (_, res) => res.render('enterprise/contact'))
  .get('/enterprise/platform', (_, res) => res.render('enterprise/platform'))

  .get('/enterprise/solutions', (_, res) => res.render('enterprise/solutions/index'))
  .get('/enterprise/solutions/cross-platform', (_, res) => res.render('enterprise/solutions/cross-platform'))
  .get('/enterprise/solutions/design-systems', (_, res) => res.render('enterprise/solutions/design-systems'))

  .get('/enterprise/strategy-session', (_, res) => res.render('enterprise/strategy-session'))
  .get('/enterprise/support', (_, res) => res.render('enterprise/support'))
  .get('/enterprise/training', (_, res) => res.render('enterprise/training'))
  .get('/enterprise/why-ionic', (_, res) => res.render('enterprise/why-ionic'))
  .get('/enterprise-license-agreement', (_, res) => markdown(res, 'enterprise-license-agreement'))
  .get('/framework', (_, res) => res.render('framework'))
  .get('/getting-started', (_, res) => res.render('getting-started'))

  .get('/go/pwa-architects-guide', (_, res) =>
    res.render('go/pwa-architects-guide/index'))
  .post('/go/pwa-architects-guide', (_, res) =>
    res.render('go/pwa-architects-guide/thank-you'))
  .get('/go/pwa-architects-guide/thank-you', (_, res) =>
    res.render('go/pwa-architects-guide/thank-you'))

  .get('/go/why-hybrid', (_, res) => res.render('go/why-hybrid/index'))
  .post('/go/why-hybrid', (_, res) => res.render('go/why-hybrid/thank-you'))
  .get('/go/why-hybrid/thank-you', (_, res) => res.render('go/why-hybrid/thank-you'))

  .get('/humans.txt', (_, res) => res.type('txt').render('humans'))

  .get('/identity-vault', (_, res) => res.render('identity-vault'))
  .get('/integrations', (req, res, next) =>
    getIntegrations(req, res, next))
  .get('/integrations/category/:category', (req, res, next) =>
    getIntegrations(req, res, next, req.params.category))
  .get('/integrations/:integration', getPrismicAPI, (req, res, next) =>
    getIntegration(req, res, next, req.params.integration))

  .get('/jobs', (_, res) => res.render('jobs'))
  .get('/offline-storage', (_, res) => res.render('offline-storage'))
  .get('/press', (_, res) => res.render('press'))
  .get('/pricing', (_, res) => res.render('pricing/index'))
  .get('/privacy', (_, res) => markdown(res, 'privacy-policy'))

  .get('/pro/contact', (_, res) => res.render('pro/contact'))
  .get('/pro/deploy', (_, res) => res.render('pro/deploy'))
  .get('/pro/monitor', (_, res) => res.render('pro/monitor'))
  .get('/pro/package', (_, res) => res.render('pro/package'))

  .get('/pwa', (_, res) => res.render('pwa/index'))
  .get('/pwa/toolkit', (_, res) => res.render('pwa/toolkit'))

  .get('/resources', (_, res) =>
    res.render('resources/index', {currentCategory: 'featured'}))
  .get('/resources/:category', (req, res) =>
    res.render('resources/category', {currentCategory: req.params.category}))
  .get('/resources/articles/:article', getPrismicAPI, (req, res, next) =>
    getPrismic(req, res, next, 'article', req.params.article, 'resources/article'))
  .get('/resources/case-studies/:caseStudy', getPrismicAPI, (req, res, next) =>
    getPrismic(req, res, next, 'case_study', req.params['caseStudy'], 'resources/case-studies'))
  .get('/resources/customer-interviews/:customerInterview', getPrismicAPI, (req, res, next) =>
    getPrismic(req, res, next, 'customer_story', req.params['customerInterview'], 'resources/customer-stories'))
  .get('/resources/podcasts/:podcast', getPrismicAPI, (req, res, next) =>
    getPrismic(req, res, next, 'podcast', req.params.podcast, 'resources/podcasts'))
  .get('/resources/videos/:video', getPrismicAPI, (req, res, next) =>
    getPrismic(req, res, next, 'video', req.params.video, 'resources/videos'))
  .get('/resources/webinars/:webinar', getPrismicAPI, (req, res, next) =>
    getPrismic(req, res, next, 'webinar', req.params.webinar, 'resources/webinars'))
  .get('/resources/whitepapers/:whitepaper', getPrismicAPI, (req, res, next) =>
    getPrismic(req, res, next, 'whitepaper', req.params.whitepaper, 'resources/whitepapers'))

  .get('/sales', (_, res) => res.render('sales'))
  .get('/startups', (_, res) => res.render('startups'))
  .get('/studio', (_, res) => res.render('products/studio'))
  .get('/subscribe', (_, res) => res.render('subscribe'))
  .get('/support', (_, res) => res.render('support'))
  .get('/survey/2017', (_, res) => res.render('survey/2017'))
  .get('/survey/2018', (_, res) => res.render('survey/2018'))
  .get('/team', (_, res) => res.render('team'))
  .get('/tos', (_, res) => markdown(res, 'tos'))
  .get('/translate', (_, res) => res.render('translate'))
  .get('/thank-you/:thankYou', getPrismicAPI, (req, res, next) =>
    getPrismic(req, res, next, 'thank_you', req.params['thankYou'], 'thank-you'))

  .get('/trusted-partners', (_, res) => res.render('trusted-partners'))
  .post('/trusted-partners',
    bp.urlencoded({extended: true}), es(), trustedPartnersCtrl)

  .get('/values', (_, res) => { res.render('values'); })
  .get('/what-is-ionic', (_, res) => res.render('what-is-ionic'))


  // press releases
  .get('/press/release/2017/dev-survey-says-the-web-is-wining-in-mobile-dev',
    (_, res) => markdown(res, 'pr-170725-dev-survey-says-the-web-is-wi'))
  .get('/press/release/2017/ionic-brings-powerful-app-development-suite-to-teams-and-enterprises',
    (_, res) => markdown(res, 'pr-171206-ionic-brings-powerful-app-dev'))
  .get('/press/release/2019/latest-version-of-ionic-provides-universal-design-system-for-enterprises',
    (_, res) => markdown(res, 'pr-1704222-latest-version-of-ionic-provides-universal-design-system-for-enterprises'))
  .get('/press/release/2019/ionic-framework-4-release',
    (_, res) => markdown(res, 'pr-ionic-framework-4-release'))
  .get('/press/release/2019/ionic-alan-announce-integration',
    (_, res) => markdown(res, 'pr-ionic-alan-announce-integration'))

  // JSON endpoints
  .post('/contact', bp.json(), es(), contactCtrl)
  .post('/api/v1/newsletter', bp.json(), es(), newsletterCtrl)
  .post('/api/v1/view/link', bp.json(), es(), viewCtrl)

  // Prismic Preview
  .get('/preview', previewController)

  // Well-Known URIs (RFC 8615)
  .get('/.well-known/openid-configuration', require('./well-known/openid-configuration'))
}
};
