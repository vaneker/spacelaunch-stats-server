"use strict";var _apolloServerExpress=require("apollo-server-express");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _templateObject(){var a=_taggedTemplateLiteral(["\n  extend type Query {\n    users: [User!]\n    user(id: ID!): User\n    me: User\n  }\n\n  type User {\n    id: ID!\n    username: String!\n    messages: [Message!]\n  }\n"]);return _templateObject=function(){return a},a}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}var _default=(0,_apolloServerExpress.gql)(_templateObject());exports.default=_default;