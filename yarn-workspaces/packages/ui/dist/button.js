"use strict";
// packages/ui/button.tsx
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var styled_components_1 = require("styled-components");
var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  border: none;\n  border-radius: 4px;\n  padding: 8px 16px;\n  cursor: pointer;\n"], ["\n  background-color: ", ";\n  color: white;\n  border: none;\n  border-radius: 4px;\n  padding: 8px 16px;\n  cursor: pointer;\n"])), function (_a) {
    var $color = _a.$color;
    return $color || 'blue';
});
var Button = function (_a) {
    var label = _a.label, color = _a.color, props = __rest(_a, ["label", "color"]);
    return (<StyledButton $color={color} {...props}>
      {label}
    </StyledButton>);
};
exports.Button = Button;
var templateObject_1;
