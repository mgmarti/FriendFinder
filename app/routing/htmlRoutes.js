// var express = require("express");

var app = require("./../../server");

// Routes
// =============================================================
app.get("/", function (req, res) {
    res.send("Welcome to Friend Finder!")
    // res.sendFile(path.join(__dirname, "home.html"));
});