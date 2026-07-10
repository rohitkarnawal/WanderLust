const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/WrapAsync.js");
const Review = require("../models/review.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const listingController = require("../controllers/listings.js");
// Root route
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    
    upload.single("listing[image][url]"),
    validateListing,
    wrapAsync(listingController.create),
  );

// new route
router.get("/new", isLoggedIn, listingController.new);

//show route, Update & Delete
router
  .route("/:id")
  .get(wrapAsync(listingController.show))
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.update),
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.delete));

//edit
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.edit));

module.exports = router;
