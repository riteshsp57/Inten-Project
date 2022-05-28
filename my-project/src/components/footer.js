import React, { useState } from "react";

export default function Footer() {
  return (
    <div className="Home_footer____T7K" style={{"backgroundColor":"#BDDC78"}}>
      <div className="bg-grey-50 gap-0.5 h-1/4 w-full flex flex-col-reverse md:flex-row justify-around items-start ">
        <div className="p-3 text-center md:text-left basis-1 md:basis-1/3 md:pl-10">
          <ul>
            <div className="flex text-sl pb-6">
              Your friend, your guide and your partner in the journey of
              parenting
            </div>
            <div className="justify-center md:justify-start flex gap-12 pb-3">
              <a className href="https://www.facebook.com/Younglabs">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-xl cursor-pointer hover:text-blue-600 css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="FacebookRoundedIcon"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
              <a className href="https://www.instagram.com/younglabs.in/">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-xl cursor-pointer hover:text-orange-600 css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="InstagramIcon"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>
              <a className href="https://wa.me/919289029696">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-xl cursor-pointer hover:text-blue-600 css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="WhatsAppIcon"
                >
                  <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z" />
                </svg>
              </a>
            </div>
            <li className="text-gray-800 text-sl">
              © 2022 All Rights Reserved. Younglabs
            </li>
          </ul>
        </div>
        <div className="flex flex-row basis-1 md:basis-1/2">
          <div className="p-3 md:basis-1/2">
            <p className="text-gray-800 gap-0.5 text-base ">Quick Links</p>
            <div className="text-sl p-1 text-gray-600 hover:text-white flex item-center cursor-pointer">
              <a href="/about">About</a>
            </div>
            <div className="text-sl p-1 text-gray-600 hover:text-white flex item-center cursor-pointer">
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
            <div className="text-sl p-1 text-gray-600 hover:text-white flex item-center cursor-pointer">
              <a href="/terms-conditions">Terms &amp; Conditions</a>
            </div>
            <div className="text-sl p-1 text-gray-600 hover:text-white flex item-center cursor-pointer">
              <a className href="https://younglabs.in/shipping-delivery/">
                Shipping &amp; Delivery
              </a>
            </div>
            <div className="text-sl p-1 text-gray-600 hover:text-white flex item-center cursor-pointer">
              <a className href="https://younglabs.in/refund_returns/">
                Return, Refunds &amp; Exchange Policy
              </a>
            </div>
          </div>
          <div className="p-3 md:pl-20">
            <ul>
              <p className="text-gray-800 text-base">Address</p>
              <li className=" flex items-center cursor-pointer">
                <a href="https://goo.gl/maps/VY8duLVNESe7Jj3C9">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  cursor-pointer hover:text-white flex css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="LocationOnOutlinedIcon"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
                    <circle cx={12} cy={9} r="2.5" />
                  </svg>
                </a>
                <div className="text-gray-600 text-sl p-1.5">
                  A-39, Sector - 4, Noida -201301
                </div>
              </li>
              <li className="flex items-center cursor-pointer">
                <a href="tel:+919289029696">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  cursor-pointer text-black-600 hover:text-white  css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="CallOutlinedIcon"
                  >
                    <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
                  </svg>
                </a>
                <div className="text-gray-600 p-1.5 text-sl">
                  ( +91) 92890 29696
                </div>
              </li>
              <li className="flex items-center cursor-pointer">
                <a className href="mailto:info@younglabs.in">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  cursor-pointer hover:text-white css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="MailOutlinedIcon"
                  >
                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z" />
                  </svg>
                </a>
                <div className="text-gray-600 p-1.5 text-sl">
                  info@younglabs.in
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
