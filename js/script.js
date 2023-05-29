// Copyright (c) 2023 Lamees Hemdan All rights reserved
//
// Created by: Lamees Hemdan
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  // this program will keep score of how many times you clicked on the cookie

  // process
  if (localStorage.clicks) {
    localStorage.clicks = Number(localStorage.clicks) + 1
  } else {
    localStorage.clicks = 1
  }

// output
  document.getElementById("clicks").innerHTML = "You have clicked the cookie " + localStorage.clicks + " times"
}