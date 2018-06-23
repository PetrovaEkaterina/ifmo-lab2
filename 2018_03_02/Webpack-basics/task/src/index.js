"use strict";

const moment = require("moment");
const faker = require("faker");

const header4 = document.body.appendChild(document.createElement("h4"));
header4.setAttribute("id", "author");
header4.setAttribute("title", "GossJS");
header4.textContent = "Василий Ковалев";

const el = document.body.appendChild(document.createElement("pre"));

el.textContent += moment().format("DD.MM.YYYY HH:mm:ss") + "\n" + faker.internet.email();