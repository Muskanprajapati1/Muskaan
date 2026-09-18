```tsx
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
                    <Sparkles className="
```
