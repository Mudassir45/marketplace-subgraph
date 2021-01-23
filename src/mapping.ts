import { BigInt } from "@graphprotocol/graph-ts"
import { ProductAdded, ProductClosed, ProductRemoved, OfferAdded, OfferDecided, OfferPaymentSentInEther, OfferPaymentSentInToken } from "../generated/Marketplace/Marketplace"
import { Product, Offer, ProductDeleted, PaymentInEther, PaymentInToken, ProductOff, OfferDone } from "../generated/schema"

export function handleProductAdded(event: ProductAdded): void {

  let product = Product.load(event.params.productId.toHex());

  if (product == null) {
    product = new Product(event.params.productId.toHex());
  }
    product.id = event.params.productId.toHex();
    product.name = event.params.productName;
    product.price = event.params.price;
    product.deadline = event.params.deadline;
    product.owner = event.params.orderOwner;
    product.token = event.params.token;
    product.orderStage = event.params.status;
    product.quantity = event.params.quantity;

    product.save()
}

export function handleOfferAdded(event: OfferAdded): void {
  // let product = Product.load(event.params.productId.toHex()); can be used
  let offer = Offer.load(event.params.offerId.toHex());

  if (offer == null) {
    offer = new  Offer(event.params.offerId.toHex());
  }
    offer.productId = event.params.productId.toHex();
    offer.price = event.params.price;
    offer.quantity = event.params.quantity;
    offer.owner = event.params.offerMaker;

    offer.save();
}

export function  handleOfferDecided(event: OfferDecided): void {
    let offerDecided = OfferDone.load(event.params._event.transaction.hash.toHex());

    if (offerDecided == null) {
      offerDecided = new OfferDone(event.params._event.transaction.hash.toHex());
    }
    offerDecided.productId = event.params.productId.toHex();
    offerDecided.acceptedOfferId = event.params.offerId.toHex();
    offerDecided.offerMaker = event.params.offerMaker;

    offerDecided.save()
}

export function  handleProductRemoved(event: ProductRemoved): void {
  let productDeleted = ProductDeleted.load(event.params._event.transaction.hash.toHex());

    if (productDeleted == null) {
      productDeleted = new ProductDeleted(event.params._event.transaction.hash.toHex());
    }
    productDeleted.id = event.params.productId.toHex();
    productDeleted.save();
}

export function  handleOfferPaymentSentInEther(event: OfferPaymentSentInEther): void {
  let paymentInEther = PaymentInEther.load(event.params._event.transaction.hash.toHex());

  if (paymentInEther == null) {
    paymentInEther = new PaymentInEther(event.params._event.transaction.hash.toHex());
  }
    paymentInEther.productId = event.params.productId.toHex();
    paymentInEther.offerId = event.params.offerId.toHex();
    paymentInEther.amount = event.params.amount;
    paymentInEther.beneficiary = event.params.beneficiary;
    paymentInEther.offerMaker = event.params.offerMaker;

    paymentInEther.save();
}

export function handleOfferPaymentSentInToken(event: OfferPaymentSentInToken): void {
  let paymentInToken = PaymentInToken.load(event.params._event.transaction.hash.toHex());

  if (paymentInToken == null) {
    paymentInToken = new PaymentInToken(event.params._event.transaction.hash.toHex());
  }
    paymentInToken.productId = event.params.productId.toHex();
    paymentInToken.offerId = event.params.offerId.toHex();
    paymentInToken.amount = event.params.amount;
    paymentInToken.beneficiary = event.params.beneficiary;
    paymentInToken.offerMaker = event.params.offerMaker;

    paymentInToken.save();
}

export function handleProductClosed(event: ProductClosed): void {
  let productClosed = ProductOff.load(event.params._event.transaction.hash.toHex());

  if (productClosed == null) {
    productClosed = new ProductOff(event.params._event.transaction.hash.toHex());
  }
  productClosed.productId = event.params.productId.toHex();
  productClosed.save();
}


