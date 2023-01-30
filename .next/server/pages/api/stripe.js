"use strict";
(() => {
var exports = {};
exports.id = 475;
exports.ids = [475];
exports.modules = {

/***/ 498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "stripe"
const external_stripe_namespaceObject = require("stripe");
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/stripe.js
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
 // const stripe = new Stripe(`${process.env.NEXT_PUBIC_STRIPE_SECRET_KEY}`)

const stripe = new (external_stripe_default())(`sk_test_51MJSvYSHnOGYGLnP4dYQeME6VPTjBmFXBhbn58gGKbhz0uw2pbiau7aoMCOHWIlXrjBnug8rUyGfDHkKgyFYFeGO0008Hw9kkB`);
async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);

    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [{
          shipping_rate: 'shr_1MJTX8SHnOGYGLnPO1haAXqp'
        }],
        line_items: req.body.map(item => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace("image-", 'https://cdn.sanity.io/images/rahtj8si/production/').replace('-webp', '.webp');
          return {
            price_data: {
              currency: 'inr',
              product_data: {
                name: item.name,
                images: [newImage]
              },
              unit_amount: item.price * 100
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1
            },
            quantity: item.quantity
          };
        }),
        // mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`
      }; // Create Checkout Sessions from body params.

      const session = await stripe.checkout.sessions.create(params); // res.redirect(303, session.url);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(498));
module.exports = __webpack_exports__;

})();