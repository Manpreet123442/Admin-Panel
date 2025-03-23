import React, { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";

const Coupon = () => {
  const [prefix, setPrefix] = useState("");
  const [length, setLength] = useState(8);
  const [isNumbersAllowed, setIsNumberAllowed] = useState(false);
  const [isCharactersAllowed, setIsCharactersAllowed] = useState(false);
  const [isSpecialCharsAllowed, setIsSpecialCharsAllowed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [coupon, setCoupon] = useState("");

  const generateCoupon = (e) => {
    e.preventDefault();
    let result = prefix;
    let characters = "";

    if (isCharactersAllowed) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumbersAllowed) characters += "0123456789";
    if (isSpecialCharsAllowed) characters += "!@#$%^&*()[]{}";

    for (let i = 0; i < length - prefix.length; i++) {
      let char = Math.floor(Math.random() * characters.length);
      result += characters.charAt(char);
    }

    setCoupon(result);
    setIsCopied(false);
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Coupon</h1>
        <section>
          <form className="coupon-form" onSubmit={generateCoupon}>
            <input
              type="text"
              placeholder="Text to include"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              maxLength={length}
            />

            <input
              type="number"
              placeholder="Coupon length"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              min={8}
              max={25}
            />

            <fieldset>
              <legend>Include</legend>
              <label>
                <input
                  type="checkbox"
                  checked={isNumbersAllowed}
                  onChange={() => setIsNumberAllowed((prev) => !prev)}
                />
                Numbers
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={isCharactersAllowed}
                  onChange={() => setIsCharactersAllowed((prev) => !prev)}
                />
                Characters
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={isSpecialCharsAllowed}
                  onChange={() => setIsSpecialCharsAllowed((prev) => !prev)}
                />
                Symbols
              </label>
            </fieldset>

            <button type="submit">Generate</button>
          </form>

          {coupon && (
            <div className="coupon-display">
              <code>{coupon}</code>
              <button onClick={() => copyText(coupon)}>
                {isCopied ? "Copied!" : "Copy"}
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Coupon;
