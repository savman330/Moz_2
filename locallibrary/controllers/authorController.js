//  authorController .js

const   Author = require("../models/author");

// display list of all authors
exports.author_list = (req, res) => {
    res.send('Not implemented author list');
};

// display detail page for specific author
exports.author_detail = (req, res) => {
    res.send('Not implemented author detail');
};

// display author create form on GET
exports.author_create_GET = (req, res) => {
  res.send('Not implemented author create form GET');  
};

// handle author create on POST
exports.author_create_POST = (req, res) => {
  res.send('Not implemented author create form POST');  
};

// display author delete on GET 
exports.author_delete_GET = (req, res) => {
  res.send('Not implemented author delete dispay GET');  
};

// handles author delete on POST 
exports.author_delete_POST = (req, res) => {
  res.send('Not implemented author delete handle POST');  
};

// display author update form on GET
exports.author_update_GET = (req, res) => {
  res.send('Not implemented author update form GET');  
};

// handle author update form on POST
exports.author_update_POST = (req, res) => {
  res.send('Not implemented author update form POST');  
};
