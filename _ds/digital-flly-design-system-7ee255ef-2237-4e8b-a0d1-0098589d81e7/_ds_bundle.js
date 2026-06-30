/* @ds-bundle: {"format":3,"namespace":"BertolaDesignSystem_7ee255","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Quote","sourcePath":"components/core/Quote.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"08d60560daf6","components/core/Badge.jsx":"23b97aa7c06f","components/core/Button.jsx":"420efa00a866","components/core/Card.jsx":"85a6314ab259","components/core/Divider.jsx":"8e24e2bf8b54","components/core/Eyebrow.jsx":"c16d014d9694","components/core/IconButton.jsx":"5262455398d1","components/core/Input.jsx":"9981a808e3f3","components/core/Quote.jsx":"de737e978615","components/core/Switch.jsx":"80e60545290e","components/core/Textarea.jsx":"8ec5a898c530","ui_kits/store/CartDrawer.jsx":"9f68c239019e","ui_kits/store/Footer.jsx":"76285f4416c7","ui_kits/store/Header.jsx":"ba2c3d18c7ab","ui_kits/store/Home.jsx":"b58510e24a86","ui_kits/store/Icons.jsx":"6cbb6b60fa97","ui_kits/store/ProductCard.jsx":"3a986c559eb9","ui_kits/store/Wordmark.jsx":"8ba6a32744a9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BertolaDesignSystem_7ee255 = window.BertolaDesignSystem_7ee255 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Avatar({
  size = "md",
  src,
  name = "",
  alt,
  className = "",
  ...rest
}) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const cls = ["b-avatar", `b-avatar--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || name
  }) : initials);
}
function AvatarGroup({
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["b-avatar-group", className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = "neutral",
  outline = false,
  className = "",
  children,
  ...rest
}) {
  const toneCls = {
    neutral: "",
    solid: "b-badge--solid",
    brand: "b-badge--brand",
    success: "b-badge--success",
    warning: "b-badge--warning",
    danger: "b-badge--danger",
    info: "b-badge--info"
  }[tone] || "";
  const cls = ["b-badge", toneCls, outline && "b-badge--outline", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Digital Flly Button — primary action element.
 */
function Button({
  variant = "primary",
  size = "md",
  pill = false,
  block = false,
  leadingIcon,
  trailingIcon,
  className = "",
  children,
  ...rest
}) {
  const cls = ["b-btn", `b-btn--${variant}`, `b-btn--${size}`, pill && "b-btn--pill", block && "b-btn--block", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), leadingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "b-btn__lead"
  }, leadingIcon) : null, /*#__PURE__*/React.createElement("span", null, children), trailingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "b-btn__trail"
  }, trailingIcon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = "default",
  eyebrow,
  title,
  className = "",
  as: As = "div",
  children,
  ...rest
}) {
  const cls = ["b-card", variant !== "default" && `b-card--${variant}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(As, _extends({
    className: cls
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("div", {
    className: "b-card__eyebrow"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "b-card__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    className: "b-card__body"
  }, children) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  variant = "default",
  ornament = "✦",
  className = "",
  ...rest
}) {
  if (variant === "ornament") {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: ["b-divider b-divider--ornament", className].filter(Boolean).join(" ")
    }, rest), ornament);
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: ["b-divider", variant === "strong" && "b-divider--strong", className].filter(Boolean).join(" ")
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  as: As = "span",
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(As, _extends({
    className: ["b-eyebrow", className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  size = "md",
  variant = "ghost",
  className = "",
  children,
  "aria-label": ariaLabel,
  ...rest
}) {
  const cls = ["b-iconbtn", `b-iconbtn--${size}`, variant !== "ghost" && `b-iconbtn--${variant}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": ariaLabel
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  id,
  size = "md",
  className = "",
  leadingIcon,
  ...rest
}) {
  const inputId = id || React.useId();
  const inputCls = ["b-input", size === "lg" && "b-input--lg", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: "b-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    className: "b-field__label"
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: inputCls,
    "aria-invalid": error ? "true" : undefined,
    "aria-describedby": hint || error ? `${inputId}-msg` : undefined
  }, rest)), error ? /*#__PURE__*/React.createElement("div", {
    id: `${inputId}-msg`,
    className: "b-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    id: `${inputId}-msg`,
    className: "b-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Quote({
  cite,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    className: ["b-quote", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", null, children), cite ? /*#__PURE__*/React.createElement("cite", {
    className: "b-quote__cite"
  }, "\u2014 ", cite) : null);
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Quote.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  className = "",
  "aria-label": ariaLabel,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked ? "true" : "false",
    "aria-label": ariaLabel,
    onClick: () => onChange && onChange(!checked),
    className: ["b-switch", className].filter(Boolean).join(" ")
  }, rest));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  id,
  className = "",
  rows = 4,
  ...rest
}) {
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    className: "b-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    className: "b-field__label"
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    className: ["b-textarea", className].filter(Boolean).join(" "),
    "aria-invalid": error ? "true" : undefined
  }, rest)), error ? /*#__PURE__*/React.createElement("div", {
    className: "b-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    className: "b-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/CartDrawer.jsx
try { (() => {
function CartDrawer({
  open,
  items,
  onClose,
  onInc,
  onDec
}) {
  const ns = window[Object.keys(window).find(k => /DesignSystem_/.test(k))];
  const {
    Button,
    IconButton,
    Divider
  } = ns;
  const I = window.DigitalFllyIcons;
  const total = items.reduce((s, i) => s + i.product.price * i.qty, 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `bt-scrim ${open ? 'is-open' : ''}`,
    onClick: onClose
  }), /*#__PURE__*/React.createElement("aside", {
    className: `bt-cart ${open ? 'is-open' : ''}`,
    "aria-hidden": !open
  }, /*#__PURE__*/React.createElement("header", {
    className: "bt-cart__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "bt-cart__title"
  }, "Sua sacola"), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Fechar",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(I.x, null))), /*#__PURE__*/React.createElement("div", {
    className: "bt-cart__body"
  }, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "bt-cart__empty"
  }, /*#__PURE__*/React.createElement("p", null, "Sua sacola est\xE1 vazia."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 13,
      marginTop: 8
    }
  }, "Encontre uma pe\xE7a que combine com voc\xEA.")) : items.map(({
    product,
    qty
  }) => /*#__PURE__*/React.createElement("div", {
    className: "bt-cart__item",
    key: product.id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 80,
      flex: 'none',
      borderRadius: 8,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(window.DigitalFllyProductImage, {
    initial: product.name[0],
    tone: product.tone,
    aspect: "4/5"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-cart__name"
  }, product.name), /*#__PURE__*/React.createElement("div", {
    className: "bt-cart__material"
  }, product.material), /*#__PURE__*/React.createElement("div", {
    className: "bt-cart__qty"
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Diminuir",
    onClick: () => onDec(product.id)
  }, /*#__PURE__*/React.createElement(I.minus, {
    size: 14
  })), /*#__PURE__*/React.createElement("span", null, qty), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Aumentar",
    onClick: () => onInc(product.id)
  }, /*#__PURE__*/React.createElement(I.plus, {
    size: 14
  })))), /*#__PURE__*/React.createElement("div", {
    className: "bt-cart__price"
  }, "R$ ", (product.price * qty).toLocaleString('pt-BR'))))), /*#__PURE__*/React.createElement("footer", {
    className: "bt-cart__foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-cart__totalrow"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 13
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, "R$ ", total.toLocaleString('pt-BR'))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginBottom: 14
    }
  }, "Frete gr\xE1tis acima de R$ 120."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    disabled: items.length === 0
  }, "Finalizar compra"))));
}
window.DigitalFllyCartDrawer = CartDrawer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/Footer.jsx
try { (() => {
function Footer() {
  const ns = window[Object.keys(window).find(k => /DesignSystem_/.test(k))];
  const {
    Input,
    Button,
    Eyebrow,
    Divider
  } = ns;
  const I = window.DigitalFllyIcons;
  return /*#__PURE__*/React.createElement("footer", {
    className: "bt-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-footer__news"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Carta da casa"), /*#__PURE__*/React.createElement("h3", {
    className: "bt-footer__title"
  }, "Hist\xF3rias de quem faz, uma vez por m\xEAs."), /*#__PURE__*/React.createElement("form", {
    className: "bt-footer__form",
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "voce@dominio.com",
    "aria-label": "Email"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Assinar"))), /*#__PURE__*/React.createElement("div", {
    className: "bt-footer__cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Loja"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Cole\xE7\xF5es")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Bolsas")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Cintos")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Carteiras")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Casa"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Nossa hist\xF3ria")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Ateli\xEA em Minas")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Sustentabilidade")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Imprensa")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Ajuda"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Trocas e devolu\xE7\xF5es")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Cuidados com o couro")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Frete e prazos")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Contato")))))), /*#__PURE__*/React.createElement("div", {
    className: "bt-footer__bottom"
  }, /*#__PURE__*/React.createElement(window.DigitalFllyWordmark, {
    size: 20,
    color: "var(--paper-400)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bt-footer__copy"
  }, "\xA9 Digital Flly & Co. \xB7 Feita em Belo Horizonte, MG"), /*#__PURE__*/React.createElement("a", {
    className: "bt-footer__social",
    href: "#",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement(I.instagram, {
    size: 18
  }))));
}
window.DigitalFllyFooter = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/Header.jsx
try { (() => {
function Header({
  cartCount = 0,
  onOpenCart
}) {
  const ns = window[Object.keys(window).find(k => /DesignSystem_/.test(k))];
  const {
    IconButton
  } = ns;
  const I = window.DigitalFllyIcons;
  return /*#__PURE__*/React.createElement("header", {
    className: "bt-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-header__inner"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "bt-nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "bt-nav__link"
  }, "Cole\xE7\xF5es"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "bt-nav__link"
  }, "Bolsas"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "bt-nav__link"
  }, "Cintos"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "bt-nav__link"
  }, "Hist\xF3ria")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "bt-header__brand"
  }, /*#__PURE__*/React.createElement(window.DigitalFllyWordmark, {
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    className: "bt-header__actions"
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Buscar"
  }, /*#__PURE__*/React.createElement(I.search, null)), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Conta"
  }, /*#__PURE__*/React.createElement(I.user, null)), /*#__PURE__*/React.createElement("button", {
    className: "bt-bag",
    "aria-label": "Sacola",
    onClick: onOpenCart
  }, /*#__PURE__*/React.createElement(I.bag, null), cartCount > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "bt-bag__count"
  }, cartCount) : null))));
}
window.DigitalFllyHeader = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/Home.jsx
try { (() => {
const PRODUCTS = [{
  id: 1,
  name: 'Voyage 26',
  material: 'Bolsa · couro vegetal',
  price: 1850,
  tone: 'clay',
  badge: 'Novo'
}, {
  id: 2,
  name: 'Ribeirão',
  material: 'Cinto · curtido a óleo',
  price: 480,
  tone: 'bronze'
}, {
  id: 3,
  name: 'Atelier 03',
  material: 'Carteira · couro liso',
  price: 320,
  tone: 'sand'
}, {
  id: 4,
  name: 'Caldeirão',
  material: 'Mochila · lona + couro',
  price: 1240,
  tone: 'ink',
  badge: 'Ed. limitada'
}, {
  id: 5,
  name: 'Estrada',
  material: 'Necessaire · couro liso',
  price: 280,
  tone: 'clay'
}, {
  id: 6,
  name: 'Serra do Cipó',
  material: 'Bolsa · couro envelhecido',
  price: 1620,
  tone: 'bronze'
}];
function Home() {
  const ns = window[Object.keys(window).find(k => /DesignSystem_/.test(k))];
  const {
    Button,
    Eyebrow,
    Badge,
    Quote,
    Divider,
    Card,
    Avatar
  } = ns;
  const I = window.DigitalFllyIcons;
  const [cart, setCart] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const addToCart = p => {
    setCart(c => {
      const ex = c.find(x => x.product.id === p.id);
      if (ex) return c.map(x => x.product.id === p.id ? {
        ...x,
        qty: x.qty + 1
      } : x);
      return [...c, {
        product: p,
        qty: 1
      }];
    });
    setOpen(true);
  };
  const inc = id => setCart(c => c.map(x => x.product.id === id ? {
    ...x,
    qty: x.qty + 1
  } : x));
  const dec = id => setCart(c => c.flatMap(x => x.product.id === id ? x.qty <= 1 ? [] : [{
    ...x,
    qty: x.qty - 1
  }] : [x]));
  const totalCount = cart.reduce((s, i) => s + i.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "bt-page"
  }, /*#__PURE__*/React.createElement(window.DigitalFllyHeader, {
    cartCount: totalCount,
    onOpenCart: () => setOpen(true)
  }), /*#__PURE__*/React.createElement("section", {
    className: "bt-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-hero__col"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Cole\xE7\xE3o Voyage \xB7 Inverno 26"), /*#__PURE__*/React.createElement("h1", {
    className: "bt-hero__title"
  }, "Feito devagar,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "para durar.")), /*#__PURE__*/React.createElement("p", {
    className: "bt-hero__body"
  }, "Cinco pe\xE7as em couro vegetal curtido em Minas Gerais. Cada uma carrega o tempo e a marca de quem a fez."), /*#__PURE__*/React.createElement("div", {
    className: "bt-hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    trailingIcon: /*#__PURE__*/React.createElement(I.arrowR, {
      size: 18
    })
  }, "Ver cole\xE7\xE3o"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg"
  }, "A hist\xF3ria")), /*#__PURE__*/React.createElement("div", {
    className: "bt-hero__strip"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "72h"), " de feitio por pe\xE7a"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "14"), " artes\xE3os no ateli\xEA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "2009"), " fundado em BH"))), /*#__PURE__*/React.createElement("div", {
    className: "bt-hero__art"
  }, /*#__PURE__*/React.createElement(window.DigitalFllyProductImage, {
    initial: "V",
    tone: "clay",
    aspect: "4/5"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bt-hero__sticker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bt-hero__sticker-eye"
  }, "Feito \xE0 m\xE3o"), /*#__PURE__*/React.createElement("span", {
    className: "bt-hero__sticker-num"
  }, "26")))), /*#__PURE__*/React.createElement("div", {
    className: "bt-trust"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(I.truck, null), /*#__PURE__*/React.createElement("span", null, "Frete gr\xE1tis acima de R$ 120")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(I.scissors, null), /*#__PURE__*/React.createElement("span", null, "Costurado \xE0 m\xE3o em Minas")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(I.leaf, null), /*#__PURE__*/React.createElement("span", null, "Couro de curtimento vegetal")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(I.package, null), /*#__PURE__*/React.createElement("span", null, "Troca em 30 dias"))), /*#__PURE__*/React.createElement("section", {
    className: "bt-section"
  }, /*#__PURE__*/React.createElement("header", {
    className: "bt-section__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "A cole\xE7\xE3o"), /*#__PURE__*/React.createElement("h2", {
    className: "bt-section__title"
  }, "Pe\xE7as que ganham vida com o tempo.")), /*#__PURE__*/React.createElement("div", {
    className: "bt-chips"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bt-chip is-on"
  }, "Tudo"), /*#__PURE__*/React.createElement("button", {
    className: "bt-chip"
  }, "Bolsas"), /*#__PURE__*/React.createElement("button", {
    className: "bt-chip"
  }, "Cintos"), /*#__PURE__*/React.createElement("button", {
    className: "bt-chip"
  }, "Carteiras"), /*#__PURE__*/React.createElement("button", {
    className: "bt-chip"
  }, "Mochilas"))), /*#__PURE__*/React.createElement("div", {
    className: "bt-prodgrid"
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement(window.DigitalFllyProductCard, {
    key: p.id,
    product: p,
    onAdd: addToCart
  })))), /*#__PURE__*/React.createElement("section", {
    className: "bt-story"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-story__img"
  }, /*#__PURE__*/React.createElement(window.DigitalFllyProductImage, {
    initial: "A",
    tone: "bronze",
    aspect: "4/5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bt-story__col"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "O ateli\xEA"), /*#__PURE__*/React.createElement("h2", {
    className: "bt-story__title"
  }, "Catorze pares de m\xE3os,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "um endere\xE7o s\xF3.")), /*#__PURE__*/React.createElement("p", {
    className: "bt-story__body"
  }, "Estamos no bairro do Floresta, em Belo Horizonte, desde 2009. Cada pe\xE7a que sai daqui passa por sete etapas \u2014 corte, dobra, costura, lixa, tingimento, polimento e descanso."), /*#__PURE__*/React.createElement(Quote, {
    cite: "Joaquim Digital Flly"
  }, "Cada pe\xE7a leva o tempo que precisa. Nem um minuto a mais."), /*#__PURE__*/React.createElement("div", {
    className: "bt-story__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    trailingIcon: /*#__PURE__*/React.createElement(I.arrowR, {
      size: 16
    })
  }, "Conhe\xE7a a hist\xF3ria")))), /*#__PURE__*/React.createElement("section", {
    className: "bt-reviews"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Quem usa"), /*#__PURE__*/React.createElement("h2", {
    className: "bt-section__title",
    style: {
      marginBottom: 32
    }
  }, "Carta de quem leva pra vida."), /*#__PURE__*/React.createElement("div", {
    className: "bt-reviews__grid"
  }, [{
    name: 'Mariana C.',
    city: 'São Paulo, SP',
    text: 'Comprei a Voyage há quatro anos. Continua firme — e cada vez mais bonita.'
  }, {
    name: 'Pedro A.',
    city: 'Belo Horizonte, MG',
    text: 'Foi a primeira mochila que comprei pensando em durar. Cumpre.'
  }, {
    name: 'Júlia R.',
    city: 'Curitiba, PR',
    text: 'O atendimento é tão cuidadoso quanto a peça. Voltei três vezes.'
  }].map((r, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    variant: "bare"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      color: 'var(--clay-500)',
      marginBottom: 10
    }
  }, [0, 0, 0, 0, 0].map((_, j) => /*#__PURE__*/React.createElement(I.star, {
    key: j,
    size: 14
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--text-strong)',
      marginBottom: 14
    }
  }, "\"", r.text, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.name,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, r.city))))))), /*#__PURE__*/React.createElement(window.DigitalFllyFooter, null), /*#__PURE__*/React.createElement(window.DigitalFllyCartDrawer, {
    open: open,
    items: cart,
    onClose: () => setOpen(false),
    onInc: inc,
    onDec: dec
  }));
}
window.DigitalFllyHome = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lucide-style SVG icons (stroke 2, round caps). Inline so the kit
// stays self-contained. Add more by copying from lucide.dev.
const I = (d, opts = {}) => props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: props.size || 20,
  height: props.size || 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: opts.sw || 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, props), d);
const Icons = {
  search: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))),
  bag: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 10a4 4 0 0 1-8 0"
  }))),
  user: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }))),
  heart: I(/*#__PURE__*/React.createElement("path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"
  })),
  menu: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18"
  }))),
  arrowR: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  }))),
  arrowL: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 19-7-7 7-7"
  }))),
  plus: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14"
  }))),
  minus: I(/*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })),
  x: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  }))),
  check: I(/*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  star: I(/*#__PURE__*/React.createElement("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  })),
  leaf: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c1.4 2.41 2.8 7.05.5 11.04-1.2 2.1-3.2 4-7.7 6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 21c0-3 1.85-5.36 5.08-6"
  }))),
  truck: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 18H9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "18",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "18",
    r: "2"
  }))),
  scissors: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.12 8.12 12 12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 4 8.12 15.88"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "18",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.8 14.8 20 20"
  }))),
  package: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 22V12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m7.5 4.27 9 5.15"
  }))),
  instagram: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5",
    ry: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5"
  })))
};
window.DigitalFllyIcons = Icons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/ProductCard.jsx
try { (() => {
// Product placeholder — soft warm gradient with a Berton initial. No
// real product photos available, so we render a tasteful stand-in.
function ProductImage({
  initial = "B",
  tone = "clay",
  aspect = "4/5",
  badge
}) {
  const tones = {
    clay: ['#e9d8c8', '#ae8966', '#5a3e28'],
    sand: ['#f3efed', '#b2a28e', '#866e56'],
    bronze: ['#ceb094', '#866e56', '#3a2718'],
    ink: ['#5a4838', '#3a2618', '#170c06']
  }[tone] || ['#e9d8c8', '#ae8966', '#5a3e28'];
  return /*#__PURE__*/React.createElement("div", {
    className: "bt-prodimg",
    style: {
      aspectRatio: aspect,
      background: `radial-gradient(120% 80% at 30% 20%, ${tones[0]} 0%, ${tones[1]} 55%, ${tones[2]} 100%)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bt-prodimg__initial",
    style: {
      color: tones[0]
    }
  }, initial), badge ? /*#__PURE__*/React.createElement("span", {
    className: "bt-prodimg__badge"
  }, badge) : null);
}
function ProductCard({
  product,
  onAdd
}) {
  const ns = window[Object.keys(window).find(k => /DesignSystem_/.test(k))];
  const {
    Badge
  } = ns;
  return /*#__PURE__*/React.createElement("article", {
    className: "bt-prod"
  }, /*#__PURE__*/React.createElement(ProductImage, {
    initial: product.name[0],
    tone: product.tone,
    badge: product.badge
  }), /*#__PURE__*/React.createElement("div", {
    className: "bt-prod__meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-prod__row"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "bt-prod__name"
  }, product.name), /*#__PURE__*/React.createElement("span", {
    className: "bt-prod__price"
  }, "R$ ", product.price.toLocaleString('pt-BR', {
    minimumFractionDigits: 0
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bt-prod__sub"
  }, product.material), /*#__PURE__*/React.createElement("button", {
    className: "bt-prod__add",
    onClick: () => onAdd(product)
  }, "Adicionar \xE0 sacola")));
}
window.DigitalFllyProductCard = ProductCard;
window.DigitalFllyProductImage = ProductImage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/Wordmark.jsx
try { (() => {
// Digital Flly wordmark — set in Berton Roman with one letter swapped to Voyage italic.
function Wordmark({
  size = 28,
  color = "currentColor"
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Berton, Georgia, serif',
      fontSize: size,
      lineHeight: 1,
      color,
      letterSpacing: '-0.01em',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      alignItems: 'baseline'
    }
  }, "digital flly", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Berton Voyage, Berton, serif',
      fontStyle: 'italic',
      fontSize: size * 0.72,
      marginLeft: size * 0.06,
      color: 'inherit'
    }
  }, "& co."));
}
window.DigitalFllyWordmark = Wordmark;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/Wordmark.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
