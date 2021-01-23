// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OfferAdded extends ethereum.Event {
  get params(): OfferAdded__Params {
    return new OfferAdded__Params(this);
  }
}

export class OfferAdded__Params {
  _event: OfferAdded;

  constructor(event: OfferAdded) {
    this._event = event;
  }

  get offerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get productId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get offerMaker(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class OfferDecided extends ethereum.Event {
  get params(): OfferDecided__Params {
    return new OfferDecided__Params(this);
  }
}

export class OfferDecided__Params {
  _event: OfferDecided;

  constructor(event: OfferDecided) {
    this._event = event;
  }

  get productId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get offerId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get offerMaker(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class OfferPaymentSentInEther extends ethereum.Event {
  get params(): OfferPaymentSentInEther__Params {
    return new OfferPaymentSentInEther__Params(this);
  }
}

export class OfferPaymentSentInEther__Params {
  _event: OfferPaymentSentInEther;

  constructor(event: OfferPaymentSentInEther) {
    this._event = event;
  }

  get productId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get offerId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get beneficiary(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get offerMaker(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class OfferPaymentSentInToken extends ethereum.Event {
  get params(): OfferPaymentSentInToken__Params {
    return new OfferPaymentSentInToken__Params(this);
  }
}

export class OfferPaymentSentInToken__Params {
  _event: OfferPaymentSentInToken;

  constructor(event: OfferPaymentSentInToken) {
    this._event = event;
  }

  get productId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get offerId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get beneficiary(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get offerMaker(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class ProductAdded extends ethereum.Event {
  get params(): ProductAdded__Params {
    return new ProductAdded__Params(this);
  }
}

export class ProductAdded__Params {
  _event: ProductAdded;

  constructor(event: ProductAdded) {
    this._event = event;
  }

  get productId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get productName(): string {
    return this._event.parameters[4].value.toString();
  }

  get orderOwner(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get status(): i32 {
    return this._event.parameters[6].value.toI32();
  }

  get token(): Address {
    return this._event.parameters[7].value.toAddress();
  }
}

export class ProductClosed extends ethereum.Event {
  get params(): ProductClosed__Params {
    return new ProductClosed__Params(this);
  }
}

export class ProductClosed__Params {
  _event: ProductClosed;

  constructor(event: ProductClosed) {
    this._event = event;
  }

  get productId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ProductRemoved extends ethereum.Event {
  get params(): ProductRemoved__Params {
    return new ProductRemoved__Params(this);
  }
}

export class ProductRemoved__Params {
  _event: ProductRemoved;

  constructor(event: ProductRemoved) {
    this._event = event;
  }

  get productId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class TradeSettled extends ethereum.Event {
  get params(): TradeSettled__Params {
    return new TradeSettled__Params(this);
  }
}

export class TradeSettled__Params {
  _event: TradeSettled;

  constructor(event: TradeSettled) {
    this._event = event;
  }

  get productId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get offerId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Marketplace__getOfferResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: i32;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: i32,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set(
      "value3",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value3))
    );
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class Marketplace__getProductResult {
  value0: string;
  value1: i32;
  value2: Address;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: string,
    value1: i32,
    value2: Address,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class Marketplace extends ethereum.SmartContract {
  static bind(address: Address): Marketplace {
    return new Marketplace("Marketplace", address);
  }

  decideOffer(_productId: BigInt, _acceptedOfferId: BigInt): boolean {
    let result = super.call(
      "decideOffer",
      "decideOffer(uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_productId),
        ethereum.Value.fromUnsignedBigInt(_acceptedOfferId)
      ]
    );

    return result[0].toBoolean();
  }

  try_decideOffer(
    _productId: BigInt,
    _acceptedOfferId: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decideOffer",
      "decideOffer(uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_productId),
        ethereum.Value.fromUnsignedBigInt(_acceptedOfferId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  paymentInToken(_productId: BigInt, _amount: BigInt, token: Address): boolean {
    let result = super.call(
      "paymentInToken",
      "paymentInToken(uint256,uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_productId),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromAddress(token)
      ]
    );

    return result[0].toBoolean();
  }

  try_paymentInToken(
    _productId: BigInt,
    _amount: BigInt,
    token: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "paymentInToken",
      "paymentInToken(uint256,uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_productId),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromAddress(token)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  submitOffer(_productId: BigInt, _price: BigInt, _quantity: BigInt): BigInt {
    let result = super.call(
      "submitOffer",
      "submitOffer(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_productId),
        ethereum.Value.fromUnsignedBigInt(_price),
        ethereum.Value.fromUnsignedBigInt(_quantity)
      ]
    );

    return result[0].toBigInt();
  }

  try_submitOffer(
    _productId: BigInt,
    _price: BigInt,
    _quantity: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "submitOffer",
      "submitOffer(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_productId),
        ethereum.Value.fromUnsignedBigInt(_price),
        ethereum.Value.fromUnsignedBigInt(_quantity)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  submitProduct(
    _deadline: BigInt,
    _quantity: BigInt,
    _price: BigInt,
    _name: string,
    _description: Bytes,
    token: Address
  ): BigInt {
    let result = super.call(
      "submitProduct",
      "submitProduct(uint256,uint256,uint256,string,bytes32,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_deadline),
        ethereum.Value.fromUnsignedBigInt(_quantity),
        ethereum.Value.fromUnsignedBigInt(_price),
        ethereum.Value.fromString(_name),
        ethereum.Value.fromFixedBytes(_description),
        ethereum.Value.fromAddress(token)
      ]
    );

    return result[0].toBigInt();
  }

  try_submitProduct(
    _deadline: BigInt,
    _quantity: BigInt,
    _price: BigInt,
    _name: string,
    _description: Bytes,
    token: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "submitProduct",
      "submitProduct(uint256,uint256,uint256,string,bytes32,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_deadline),
        ethereum.Value.fromUnsignedBigInt(_quantity),
        ethereum.Value.fromUnsignedBigInt(_price),
        ethereum.Value.fromString(_name),
        ethereum.Value.fromFixedBytes(_description),
        ethereum.Value.fromAddress(token)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getOffer(_productId: BigInt): Marketplace__getOfferResult {
    let result = super.call(
      "getOffer",
      "getOffer(uint256):(uint256,address,uint256,uint8,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_productId)]
    );

    return new Marketplace__getOfferResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toI32(),
      result[4].toBigInt()
    );
  }

  try_getOffer(
    _productId: BigInt
  ): ethereum.CallResult<Marketplace__getOfferResult> {
    let result = super.tryCall(
      "getOffer",
      "getOffer(uint256):(uint256,address,uint256,uint8,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_productId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Marketplace__getOfferResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toI32(),
        value[4].toBigInt()
      )
    );
  }

  getProduct(_productId: BigInt): Marketplace__getProductResult {
    let result = super.call(
      "getProduct",
      "getProduct(uint256):(string,uint8,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_productId)]
    );

    return new Marketplace__getProductResult(
      result[0].toString(),
      result[1].toI32(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_getProduct(
    _productId: BigInt
  ): ethereum.CallResult<Marketplace__getProductResult> {
    let result = super.tryCall(
      "getProduct",
      "getProduct(uint256):(string,uint8,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_productId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Marketplace__getProductResult(
        value[0].toString(),
        value[1].toI32(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  getProductOfferIds(_productId: BigInt): Array<BigInt> {
    let result = super.call(
      "getProductOfferIds",
      "getProductOfferIds(uint256):(uint256[])",
      [ethereum.Value.fromUnsignedBigInt(_productId)]
    );

    return result[0].toBigIntArray();
  }

  try_getProductOfferIds(
    _productId: BigInt
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getProductOfferIds",
      "getProductOfferIds(uint256):(uint256[])",
      [ethereum.Value.fromUnsignedBigInt(_productId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }
}

export class DecideOfferCall extends ethereum.Call {
  get inputs(): DecideOfferCall__Inputs {
    return new DecideOfferCall__Inputs(this);
  }

  get outputs(): DecideOfferCall__Outputs {
    return new DecideOfferCall__Outputs(this);
  }
}

export class DecideOfferCall__Inputs {
  _call: DecideOfferCall;

  constructor(call: DecideOfferCall) {
    this._call = call;
  }

  get _productId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _acceptedOfferId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecideOfferCall__Outputs {
  _call: DecideOfferCall;

  constructor(call: DecideOfferCall) {
    this._call = call;
  }

  get status(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DeleteProductCall extends ethereum.Call {
  get inputs(): DeleteProductCall__Inputs {
    return new DeleteProductCall__Inputs(this);
  }

  get outputs(): DeleteProductCall__Outputs {
    return new DeleteProductCall__Outputs(this);
  }
}

export class DeleteProductCall__Inputs {
  _call: DeleteProductCall;

  constructor(call: DeleteProductCall) {
    this._call = call;
  }

  get _productId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DeleteProductCall__Outputs {
  _call: DeleteProductCall;

  constructor(call: DeleteProductCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class PaymentInEtherCall extends ethereum.Call {
  get inputs(): PaymentInEtherCall__Inputs {
    return new PaymentInEtherCall__Inputs(this);
  }

  get outputs(): PaymentInEtherCall__Outputs {
    return new PaymentInEtherCall__Outputs(this);
  }
}

export class PaymentInEtherCall__Inputs {
  _call: PaymentInEtherCall;

  constructor(call: PaymentInEtherCall) {
    this._call = call;
  }

  get _productId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class PaymentInEtherCall__Outputs {
  _call: PaymentInEtherCall;

  constructor(call: PaymentInEtherCall) {
    this._call = call;
  }
}

export class PaymentInTokenCall extends ethereum.Call {
  get inputs(): PaymentInTokenCall__Inputs {
    return new PaymentInTokenCall__Inputs(this);
  }

  get outputs(): PaymentInTokenCall__Outputs {
    return new PaymentInTokenCall__Outputs(this);
  }
}

export class PaymentInTokenCall__Inputs {
  _call: PaymentInTokenCall;

  constructor(call: PaymentInTokenCall) {
    this._call = call;
  }

  get _productId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get token(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class PaymentInTokenCall__Outputs {
  _call: PaymentInTokenCall;

  constructor(call: PaymentInTokenCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SubmitOfferCall extends ethereum.Call {
  get inputs(): SubmitOfferCall__Inputs {
    return new SubmitOfferCall__Inputs(this);
  }

  get outputs(): SubmitOfferCall__Outputs {
    return new SubmitOfferCall__Outputs(this);
  }
}

export class SubmitOfferCall__Inputs {
  _call: SubmitOfferCall;

  constructor(call: SubmitOfferCall) {
    this._call = call;
  }

  get _productId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _quantity(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SubmitOfferCall__Outputs {
  _call: SubmitOfferCall;

  constructor(call: SubmitOfferCall) {
    this._call = call;
  }

  get offerId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SubmitProductCall extends ethereum.Call {
  get inputs(): SubmitProductCall__Inputs {
    return new SubmitProductCall__Inputs(this);
  }

  get outputs(): SubmitProductCall__Outputs {
    return new SubmitProductCall__Outputs(this);
  }
}

export class SubmitProductCall__Inputs {
  _call: SubmitProductCall;

  constructor(call: SubmitProductCall) {
    this._call = call;
  }

  get _deadline(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _name(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _description(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get token(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class SubmitProductCall__Outputs {
  _call: SubmitProductCall;

  constructor(call: SubmitProductCall) {
    this._call = call;
  }

  get productId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}