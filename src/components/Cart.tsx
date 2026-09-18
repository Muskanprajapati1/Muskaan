
import {
  X,
  Trash2,
  ShieldCheck,
  Minus,
  Plus,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import React, { useState } from "react";
import { CartItem } from "../types";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, num: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export default function Cart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const tax = subtotal * 0.18;

  const shippingFee = subtotal >= 1500 || subtotal === 0 ? 0 : 99;

  const grandTotal = subtotal + tax + shippingFee;

  const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!customerName.trim() || !customerEmail.trim()) {
      return;
    }

    setIsCheckingOut(true);

    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 1500);
  };

  const handleFinish = () => {
    onClearCart();
    setCheckoutComplete(false);
    setCustomerName("");
    setCustomerEmail("");
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fade-in flex justify-end">
      <div
        id="cart-panel"
        className="h-full w-full max-w-md bg-white p-6 shadow-2xl overflow-y-auto flex flex-col justify-between"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-4">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-xl font-bold text-stone-900">
              Your Bag
            </span>

            <span className="font-mono text-xs bg-stone-100 text-stone-700 px-2 py-0.5 rounded-full font-bold">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>

          <button
            id="close-cart-btn"
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-stone-100 text-stone-600 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Checkout Completed View */}
        {checkoutComplete ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4 animate-scale-up">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 mb-4">
              <CheckCircle className="h-10 w-10" />
            </div>

            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Order Confirmed!
            </h2>

            <p className="font-sans text-xs text-stone-600 mb-6 leading-relaxed max-w-xs">
              Thank you for shopping with{" "}
              <strong className="text-stone-800">Glowvya</strong>,{" "}
              {customerName}! We have sent a confirmation and tracking receipt
              details to{" "}
              <strong className="text-stone-800">{customerEmail}</strong>.
            </p>

            {/* Receipt Summary Card */}
            <div className="w-full bg-[#FAF9F6] border border-stone-200 rounded-xl p-4 mb-8 text-left">
              <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 pb-1 border-b border-stone-200 flex items-center justify-between">
                <span>Receipt Summary</span>

                <span className="font-mono text-[10px] text-stone-500">
                  #{Math.floor(1000 + Math.random() * 9000)}-2026
                </span>
              </h3>

              <div className="space-y-1 text-xs">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex justify-between text-stone-600"
                  >
                    <span>
                      {item.product.name} (x{item.quantity})

                      {item.selectedShade && (
                        <span className="text-[10px] text-amber-800 ml-1">
                          [{item.selectedShade}]
                        </span>
                      )}
                    </span>

                    <span>
                      ₹{(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}

                <div className="border-t border-stone-200 mt-2 pt-2 flex justify-between font-bold text-stone-950 text-xs">
                  <span>Grand Total Paid</span>
                  <span>₹{grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              id="confirm-checkout-ok-btn"
              type="button"
              onClick={handleFinish}
              className="w-full rounded-full bg-amber-900 hover:bg-amber-950 text-white font-semibold py-3 text-sm tracking-wider uppercase transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* List of Items */}
            <div className="flex-1 overflow-y-auto pr-1">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-stone-50 border border-stone-200 text-stone-400 mb-3">
                    <Sparkles className="h-6 w-6" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">
                    Your bag is empty
                  </h3>

                  <p className="font-sans text-xs text-stone-500 leading-relaxed max-w-xs">
                    Explore our premier cosmetic formulas and add skincare or
                    makeup items to hydrate your natural glow.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-3 pb-4 border-b border-stone-100 items-start"
                    >
                      {/* Product Image */}
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;

                          if (
                            item.product.fallbackImage &&
                            target.src !== item.product.fallbackImage
                          ) {
                            target.src = item.product.fallbackImage;
                          }
                        }}
                        className="h-16 w-16 object-cover rounded-lg border border-stone-200"
                      />

                      {/* Product Info */}
                      <div className="flex-1">
                        <h4 className="font-serif text-xs font-bold text-stone-950 leading-snug">
                          {item.product.name}
                        </h4>

                        {item.selectedShade && (
                          <span className="inline-block text-[10px] text-amber-800 font-medium bg-amber-50 px-1.5 py-0.5 rounded-sm mb-1">
                            Shade: {item.selectedShade}
                          </span>
                        )}

                        <p className="font-mono text-xs text-[#9C826A] font-semibold mb-2">
                          ₹{item.product.price.toFixed(2)}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center border border-stone-200 rounded-full h-7 bg-stone-50">
                            <button
                              id={`qty-minus-${item.product.id}`}
                              type="button"
                              onClick={() => {
                                if (item.quantity > 1) {
                                  onUpdateQuantity(
                                    item.product.id,
                                    item.quantity - 1
                                  );
                                } else {
                                  onRemoveItem(item.product.id);
                                }
                              }}
                              aria-label={`Decrease quantity of ${item.product.name}`}
                              className="h-full w-7 flex items-center justify-center text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-l-full cursor-pointer"
                            >
                              <Minus className="h-3 w-3" />
                            </button>

                            <span className="font-mono text-xs w-6 text-center font-bold">
                              {item.quantity}
                            </span>

                            <button
                              id={`qty-plus-${item.product.id}`}
                              type="button"
                              onClick={() =>
                                onUpdateQuantity(
                                  item.product.id,
                                  item.quantity + 1
                                )
                              }
                              aria-label={`Increase quantity of ${item.product.name}`}
                              className="h-full w-7 flex items-center justify-center text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-r-full cursor-pointer"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          <button
                            id={`trash-${item.product.id}`}
                            type="button"
                            onClick={() =>
                              onRemoveItem(item.product.id)
                            }
                            aria-label={`Remove ${item.product.name}`}
                            className="text-stone-400 hover:text-red-700 p-1 rounded-full transition-colors cursor-pointer"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Price Calculations & Checkout */}
            {cartItems.length > 0 && (
              <div className="border-t border-stone-200 pt-4 mt-4 space-y-4">
                <div className="space-y-1.5 text-xs text-stone-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Estimated Tax (18% GST)</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>

                    <span>
                      {shippingFee === 0 ? (
                        <strong className="text-emerald-700 uppercase font-mono text-[10px]">
                          FREE
                        </strong>
                      ) : (
                        `₹${shippingFee.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  {shippingFee > 0 && (
                    <p className="text-[10px] text-stone-500 italic mt-1">
                      Spend ₹{Math.max(0, 1500 - subtotal).toFixed(2)} more for
                      FREE shipping!
                    </p>
                  )}

                  <div className="flex justify-between font-bold text-stone-900 border-t border-stone-100 pt-2 text-sm">
                    <span>Estimated Grand Total</span>
                    <span>₹{grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Form */}
                <form
                  onSubmit={handleCheckout}
                  className="border-t border-stone-200 pt-4 space-y-3"
                >
                  <span className="block text-[10.5px] font-bold text-[#8B5E3C] uppercase tracking-wider">
                    Secure Delivery Info
                  </span>

                  <div>
                    <input
                      type="text"
                      placeholder="Receiver Name"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs border border-stone-200 rounded-lg p-2.5 focus:border-amber-700 focus:outline-none"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Delivery Email Address"
                      required
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full text-xs border border-stone-200 rounded-lg p-2.5 focus:border-amber-700 focus:outline-none"
                    />
                  </div>

                  <button
                    id="trigger-order-btn"
                    type="submit"
                    disabled={isCheckingOut}
                    className="w-full select-none rounded-full bg-stone-900 hover:bg-stone-950 text-white font-semibold py-3 text-xs tracking-widest uppercase transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <ShieldCheck className="h-4 w-4" />

                    <span>
                      {isCheckingOut
                        ? "Processing Payment..."
                        : "Complete Order"}
                    </span>
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

