const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/WrapAsync.js");
const Review = require("../models/review.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

//index route
router.get("/", wrapAsync(listingController.index));

// new route
router.get("/new", isLoggedIn, listingController.new);

// create route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(listingController.create),
);

//edit
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.edit));

//show route
router.get("/:id", wrapAsync(listingController.show));

//Update req
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(listingController.update),
);

// delete
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.delete));

module.exports = router;
