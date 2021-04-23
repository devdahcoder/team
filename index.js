var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
window.addEventListener("load", function () {
    console.log("Page loaded");
    var userDisplay = document.querySelector(".members-display");
    var html = "";
    //this is a js template for adding a new user the
    //the template renders with the API call
    //addUser doesn't have to be called multiple time just at the start
    var addUser = "\n        <div class=\"add-list\">\n            <div>\n                <div class=\"add-new-member\"><p>Add New Members</p></div>\n\n                <div class=\"avatar-container\">\n                    <span class=\"avatar-display\">\n                        <?xml version=\"1.0\" encoding=\"utf-8\"?>\n                        <svg width=\"24px\" height=\"23px\" viewbox=\"0 0 24 23\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M2.63478 20.3478C3.78548 19.1301 6.53791 17.7738 8.838 16.9722L11.3241 19.0865C11.7138 19.4181 12.2864 19.4181 12.6762 19.0865L15.1623 16.9722C17.4623 17.7738 20.2148 19.1301 21.3655 20.3478L2.63478 20.3478ZM15.252 14.802C14.9087 14.6919 14.5333 14.7676 14.2589 15.001L12 16.9218L9.74139 15.001C9.46696 14.7676 9.09157 14.6919 8.74826 14.802C7.28739 15.2679 0 17.7759 0 21.3913C0 21.9676 0.467217 22.4348 1.04348 22.4348L22.9565 22.4348C23.5328 22.4348 24 21.9676 24 21.3913C24 17.7759 16.7126 15.2679 15.252 14.802L15.252 14.802ZM12 2.08696C14.7224 2.08696 16.9372 4.31557 16.9372 7.05522C16.9372 9.79539 14.7224 12.0245 12 12.0245C9.27783 12.0245 7.06304 9.79539 7.06304 7.05522C7.06304 4.31557 9.27783 2.08696 12 2.08696L12 2.08696ZM12 14.1115C15.8731 14.1115 19.0242 10.9461 19.0242 7.05522C19.0242 3.16487 15.8731 0 12 0C8.12713 0 4.97609 3.16487 4.97609 7.05522C4.97609 10.9461 8.12713 14.1115 12 14.1115L12 14.1115Z\" id=\"user\" fill=\"#BFC5D1\" fill-rule=\"evenodd\" stroke=\"none\" />\n                        </svg>\n                    </span>\n                </div>\n\n                <div class=\"add-name\"><p>Alex Kurev</p></div>\n\n                <div class=\"add-email\"><p>Adigunlamide200@gmail.com</p></div>\n\n                <div class=\"add-btn-container\">\n                    <button>Add</button>\n                </div>\n            </div>\n        </div>\n    ";
    var getData = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, people, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://randomuser.me/api/?results=50')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    people = _a.sent();
                    data = people.results;
                    data.map(function (data, index) { return (html += "\n                <div " + index + " class=\"member-list\">\n                    <div>\n                        <div class=\"member-header-btn-container\">\n                            <div class=\"member-btn-container\">\n                                <button>\n                                    <div class=\"member-svg-container\">\n                                        <?xml version=\"1.0\" encoding=\"utf-8\"?>\n                                        <svg width=\"24px\" height=\"22px\" viewbox=\"0 0 24 22\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\">\n                                        <path d=\"M18.7166 8.96932C18.9259 9.17862 19.0431 9.46606 19.0431 9.75908C19.0431 10.0521 18.9259 10.3423 18.7166 10.5489C18.5101 10.7582 18.2226 10.8754 17.9268 10.8754C17.6338 10.8754 17.3464 10.7582 17.1401 10.5489C16.9308 10.3423 16.8106 10.0549 16.8106 9.75908C16.8106 9.46606 16.9308 9.17862 17.1401 8.96932C17.3464 8.7628 17.6338 8.6428 17.9268 8.6428C18.2226 8.6428 18.5101 8.7628 18.7166 8.96932M20.0642 7.34764C20.1 7.88597 19.6925 8.35118 19.1542 8.38662C19.1324 8.38801 19.1106 8.38885 19.0889 8.38885C18.5787 8.38885 18.1493 7.99285 18.1152 7.47629C18.0106 5.8934 16.976 5.63359 16.7695 5.59759C16.2351 5.52447 15.8695 5.03303 15.9426 4.49861C16.016 3.96391 16.5167 3.59303 17.0511 3.66475C18.0178 3.79731 19.892 4.7375 20.0642 7.34764M20.3369 10.5798C16.7201 14.637 13.4257 17.8011 11.9999 19.1333C10.575 17.8022 7.28337 14.6411 3.663 10.5798C2.20178 8.94085 1.83816 6.94187 2.6656 5.09554C3.43276 3.38317 5.07677 2.23256 6.75621 2.23256C10.0866 2.23256 10.8404 4.72354 10.9174 5.01545C11.0408 5.50773 11.4828 5.86047 11.9913 5.86047L12.0011 5.86047C12.5081 5.86047 12.9532 5.50801 13.0822 5.01684C13.1567 4.73247 13.9074 2.23563 17.2439 2.23563C18.9231 2.23563 20.5671 3.38456 21.3346 5.09694C22.1617 6.94327 21.7984 8.94085 20.3369 10.5798M23.3715 4.18243C22.2332 1.64177 19.8279 0 17.2439 0C14.6617 0 12.9867 1.13582 11.9999 2.36624C11.0131 1.13582 9.33817 0 6.75621 0C4.1723 0 1.76699 1.64177 0.628386 4.18243C-0.557104 6.82801 -0.0455682 9.77471 1.99667 12.0656C6.88849 17.5532 11.2116 21.4438 11.2545 21.4823C11.4666 21.6726 11.7334 21.7675 11.9999 21.7675C12.2667 21.7675 12.5332 21.6726 12.7453 21.4823C12.7883 21.4438 17.1114 17.5532 22.0032 12.0656C24.0454 9.77471 24.5573 6.82801 23.3715 4.18243\" id=\"heart\" fill=\"#BFC5D1\" fill-rule=\"evenodd\" stroke=\"none\" />\n                                        </svg>\n                                    </div>\n                                </button>\n                            </div>\n                        </div>\n\n                        <div class=\"member-user-image-container\">\n                            <span class=\"member-user-image\"><img src=" + data.picture.large + " alt=\"\"></span>\n                        </div>\n\n                        <div class=\"member-name\"><p>" + data.login.username + "</p></div>\n\n                        <div class=\"member-email\"><p>" + data.email + "</p></div>\n\n                        <div class=\"member-footer-btn\">\n                            <div class=\"member-footer-btn-container\">\n                                <button class=\"member-btn-styled\">\n                                    <div class=\"member-svg-container\">\n                                        <?xml version=\"1.0\" encoding=\"utf-8\"?>\n                                        <svg class=\"svg\" width=\"15px\" height=\"15px\" viewbox=\"0 0 23 24\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\">\n                                        <path d=\"M6.3927 15.2967L15.7609 15.2967C16.3435 15.2967 16.8158 14.8244 16.8158 14.2418C16.8158 13.6592 16.3435 13.1868 15.7609 13.1868L6.3927 13.1868C5.81011 13.1868 5.33776 13.6592 5.33776 14.2418C5.33776 14.8244 5.81011 15.2967 6.3927 15.2967M10.2074 3.95604L11.9462 3.95604C12.5288 3.95604 13.0011 3.48369 13.0011 2.9011C13.0011 2.31851 12.5288 1.84615 11.9462 1.84615L10.2074 1.84615C9.62479 1.84615 9.15244 2.31851 9.15244 2.9011C9.15244 3.48369 9.62479 3.95604 10.2074 3.95604M21.0989 1.84615L18.897 1.84615C18.3144 1.84615 17.842 2.31851 17.842 2.9011C17.842 3.48369 18.3144 3.95604 18.897 3.95604L20.044 3.95604L20.044 21.8901L2.10989 21.8901L2.10989 3.95604L3.25662 3.95604C3.83921 3.95604 4.31156 3.48369 4.31156 2.9011C4.31156 2.31851 3.83921 1.84615 3.25662 1.84615L1.05495 1.84615C0.472352 1.84615 0 2.41398 0 2.99657L0 22.9451C0 23.5276 0.472352 24 1.05495 24L21.0989 24C21.6815 24 22.1538 23.5276 22.1538 22.9451L22.1538 2.99657C22.1538 2.41398 21.6815 1.84615 21.0989 1.84615M6.3927 10.5495L15.7609 10.5495C16.3435 10.5495 16.8158 10.0771 16.8158 9.49451C16.8158 8.91191 16.3435 8.43956 15.7609 8.43956L6.3927 8.43956C5.81011 8.43956 5.33776 8.91191 5.33776 9.49451C5.33776 10.0771 5.81011 10.5495 6.3927 10.5495M15.2967 6.01055C16.0249 6.01055 16.6154 5.42004 16.6154 4.69187L16.6154 1.31868C16.6154 0.590506 16.0249 0 15.2967 0C14.5685 0 13.978 0.590506 13.978 1.31868L13.978 4.69187C13.978 5.42004 14.5685 6.01055 15.2967 6.01055M5.53846 4.69187L5.53846 1.31868C5.53846 0.590506 6.12897 0 6.85714 0C7.58532 0 8.17582 0.590506 8.17582 1.31868L8.17582 4.69187C8.17582 5.42004 7.58532 6.01055 6.85714 6.01055C6.12897 6.01055 5.53846 5.42004 5.53846 4.69187\" id=\"to-do\" fill=\"#BFC5D1\" fill-rule=\"evenodd\" stroke=\"none\" />\n                                        </svg>\n                                    </div>\n                                    Assign\n                                    \n                                </button>\n                            </div>\n                            <div class=\"member-footer-btn-container\">\n                                <button>\n                                    <div class=\"member-svg-container\">\n                                        <?xml version=\"1.0\" encoding=\"utf-8\"?>\n                                        <svg width=\"15px\" height=\"15px\" viewbox=\"0 0 24 15\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\">\n                                        <path d=\"M13.5496 5.49127C13.7452 5.68432 13.8548 5.95301 13.8548 6.22953C13.8548 6.50344 13.7452 6.77214 13.5496 6.96779C13.3565 7.16083 13.0878 7.273 12.8139 7.273C12.5374 7.273 12.2687 7.16083 12.0757 6.96779C11.88 6.77214 11.7704 6.50344 11.7704 6.22953C11.7704 5.95301 11.88 5.68432 12.0757 5.49127C12.2687 5.29562 12.5374 5.18606 12.8139 5.18606C13.0878 5.18606 13.3565 5.29562 13.5496 5.49127M13.6521 9.25612C13.0659 9.69882 12.3428 9.88586 11.617 9.7836C10.889 9.68056 10.2446 9.29865 9.80219 8.70804C8.88863 7.48744 9.13332 5.74823 10.3477 4.8305C10.9344 4.3878 11.658 4.20024 12.384 4.30328C13.1118 4.40658 13.7562 4.78823 14.1978 5.37832C15.1114 6.59944 14.8667 8.33891 13.6521 9.25612M12.6036 2.75372C11.4613 2.59173 10.3257 2.88598 9.4041 3.58146C9.4041 3.58146 9.4041 3.58172 9.40384 3.58172C7.5042 5.01754 7.12072 7.73761 8.54924 9.64612C9.24288 10.5725 10.2545 11.1717 11.3979 11.3334C11.6022 11.3621 11.8064 11.3765 12.0091 11.3765C12.9389 11.3765 13.8396 11.0759 14.5954 10.5049C16.4955 9.07012 16.8795 6.34979 15.4508 4.4405C14.7576 3.51468 13.7465 2.91546 12.6036 2.75372M12 11.9999C6.96185 11.9999 3.5317 8.46308 2.35701 7.04135C3.52622 5.61884 6.93942 2.08695 12 2.08695C17.0371 2.08695 20.4665 5.62197 21.6414 7.04344C20.4652 8.46622 17.0358 11.9999 12 11.9999M23.8233 6.46249C23.6465 6.19849 19.406 0 12 0C4.59395 0 0.353542 6.19849 0.176673 6.46249C-0.058891 6.81388 -0.058891 7.273 0.176673 7.62439C0.353542 7.88839 4.59395 14.0869 12 14.0869C19.406 14.0869 23.6465 7.88839 23.8233 7.62439C24.0589 7.273 24.0589 6.81388 23.8233 6.46249\" id=\"preview\" fill=\"#BFC5D1\" fill-rule=\"evenodd\" stroke=\"none\" />\n                                        </svg>\n\n                                    </div>\n\n                                    View\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                "); });
                    userDisplay.innerHTML = addUser + html;
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    throw new Error("Something went wrong");
                case 4: return [2 /*return*/];
            }
        });
    }); };
    getData();
});
