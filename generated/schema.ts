// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Product extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Product entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Product entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Product", id.toString(), this);
  }

  static load(id: string): Product | null {
    return store.get("Product", id) as Product | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get price(): BigInt | null {
    let value = this.get("price");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt | null) {
    if (value === null) {
      this.unset("price");
    } else {
      this.set("price", Value.fromBigInt(value as BigInt));
    }
  }

  get deadline(): BigInt | null {
    let value = this.get("deadline");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set deadline(value: BigInt | null) {
    if (value === null) {
      this.unset("deadline");
    } else {
      this.set("deadline", Value.fromBigInt(value as BigInt));
    }
  }

  get owner(): Bytes | null {
    let value = this.get("owner");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes | null) {
    if (value === null) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(value as Bytes));
    }
  }

  get token(): Bytes | null {
    let value = this.get("token");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set token(value: Bytes | null) {
    if (value === null) {
      this.unset("token");
    } else {
      this.set("token", Value.fromBytes(value as Bytes));
    }
  }

  get orderStage(): i32 {
    let value = this.get("orderStage");
    return value.toI32();
  }

  set orderStage(value: i32) {
    this.set("orderStage", Value.fromI32(value));
  }

  get quantity(): BigInt | null {
    let value = this.get("quantity");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set quantity(value: BigInt | null) {
    if (value === null) {
      this.unset("quantity");
    } else {
      this.set("quantity", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Offer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Offer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Offer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Offer", id.toString(), this);
  }

  static load(id: string): Offer | null {
    return store.get("Offer", id) as Offer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get productId(): string {
    let value = this.get("productId");
    return value.toString();
  }

  set productId(value: string) {
    this.set("productId", Value.fromString(value));
  }

  get price(): BigInt | null {
    let value = this.get("price");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt | null) {
    if (value === null) {
      this.unset("price");
    } else {
      this.set("price", Value.fromBigInt(value as BigInt));
    }
  }

  get quantity(): BigInt | null {
    let value = this.get("quantity");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set quantity(value: BigInt | null) {
    if (value === null) {
      this.unset("quantity");
    } else {
      this.set("quantity", Value.fromBigInt(value as BigInt));
    }
  }

  get owner(): Bytes | null {
    let value = this.get("owner");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes | null) {
    if (value === null) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(value as Bytes));
    }
  }
}

export class ProductDeleted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ProductDeleted entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ProductDeleted entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ProductDeleted", id.toString(), this);
  }

  static load(id: string): ProductDeleted | null {
    return store.get("ProductDeleted", id) as ProductDeleted | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get productId(): string {
    let value = this.get("productId");
    return value.toString();
  }

  set productId(value: string) {
    this.set("productId", Value.fromString(value));
  }
}

export class ProductOff extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ProductOff entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ProductOff entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ProductOff", id.toString(), this);
  }

  static load(id: string): ProductOff | null {
    return store.get("ProductOff", id) as ProductOff | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get productId(): string {
    let value = this.get("productId");
    return value.toString();
  }

  set productId(value: string) {
    this.set("productId", Value.fromString(value));
  }
}

export class OfferDone extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OfferDone entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OfferDone entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OfferDone", id.toString(), this);
  }

  static load(id: string): OfferDone | null {
    return store.get("OfferDone", id) as OfferDone | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get productId(): string {
    let value = this.get("productId");
    return value.toString();
  }

  set productId(value: string) {
    this.set("productId", Value.fromString(value));
  }

  get acceptedOfferId(): string {
    let value = this.get("acceptedOfferId");
    return value.toString();
  }

  set acceptedOfferId(value: string) {
    this.set("acceptedOfferId", Value.fromString(value));
  }

  get offerMaker(): Bytes | null {
    let value = this.get("offerMaker");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set offerMaker(value: Bytes | null) {
    if (value === null) {
      this.unset("offerMaker");
    } else {
      this.set("offerMaker", Value.fromBytes(value as Bytes));
    }
  }
}

export class PaymentInEther extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PaymentInEther entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PaymentInEther entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PaymentInEther", id.toString(), this);
  }

  static load(id: string): PaymentInEther | null {
    return store.get("PaymentInEther", id) as PaymentInEther | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get productId(): string {
    let value = this.get("productId");
    return value.toString();
  }

  set productId(value: string) {
    this.set("productId", Value.fromString(value));
  }

  get offerId(): string {
    let value = this.get("offerId");
    return value.toString();
  }

  set offerId(value: string) {
    this.set("offerId", Value.fromString(value));
  }

  get amount(): BigInt | null {
    let value = this.get("amount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt | null) {
    if (value === null) {
      this.unset("amount");
    } else {
      this.set("amount", Value.fromBigInt(value as BigInt));
    }
  }

  get beneficiary(): Bytes | null {
    let value = this.get("beneficiary");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set beneficiary(value: Bytes | null) {
    if (value === null) {
      this.unset("beneficiary");
    } else {
      this.set("beneficiary", Value.fromBytes(value as Bytes));
    }
  }

  get offerMaker(): Bytes | null {
    let value = this.get("offerMaker");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set offerMaker(value: Bytes | null) {
    if (value === null) {
      this.unset("offerMaker");
    } else {
      this.set("offerMaker", Value.fromBytes(value as Bytes));
    }
  }
}

export class PaymentInToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PaymentInToken entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PaymentInToken entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PaymentInToken", id.toString(), this);
  }

  static load(id: string): PaymentInToken | null {
    return store.get("PaymentInToken", id) as PaymentInToken | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get productId(): string {
    let value = this.get("productId");
    return value.toString();
  }

  set productId(value: string) {
    this.set("productId", Value.fromString(value));
  }

  get offerId(): string {
    let value = this.get("offerId");
    return value.toString();
  }

  set offerId(value: string) {
    this.set("offerId", Value.fromString(value));
  }

  get amount(): BigInt | null {
    let value = this.get("amount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt | null) {
    if (value === null) {
      this.unset("amount");
    } else {
      this.set("amount", Value.fromBigInt(value as BigInt));
    }
  }

  get beneficiary(): Bytes | null {
    let value = this.get("beneficiary");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set beneficiary(value: Bytes | null) {
    if (value === null) {
      this.unset("beneficiary");
    } else {
      this.set("beneficiary", Value.fromBytes(value as Bytes));
    }
  }

  get offerMaker(): Bytes | null {
    let value = this.get("offerMaker");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set offerMaker(value: Bytes | null) {
    if (value === null) {
      this.unset("offerMaker");
    } else {
      this.set("offerMaker", Value.fromBytes(value as Bytes));
    }
  }
}
