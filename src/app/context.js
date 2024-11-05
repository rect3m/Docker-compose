const { CheckoutService } = require('./../domain/services/checkout.service');
const { pricingService } = require('./../domain/services/pricing.service');

const repositories = {
    ...require('../infrastructure/repositories/user.repo'),
    ...require('../infrastructure/repositories/cart.repo'),
    ...require('../infrastructure/repositories/product.repo'),
    ...require('../infrastructure/repositories/receipt.repo'),
};

const services = {
    pricingService,
    checkoutService: new CheckoutService({
        pricingService,
        ...repositories,
    }),
};

const domainContext = /** @const */ {
    ...repositories,
    ...services,
};

module.exports.domainContext = Object.freeze(
    Object.assign(Object.create(null), domainContext)
);

// ---------------------------------------------------
// Typedefs
// ---------------------------------------------------
/**
 * @typedef {Readonly<domainContext>} DomainContext
 */
