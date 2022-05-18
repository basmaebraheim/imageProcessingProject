import express from 'express';
import fs from 'fs';
import path from 'path';

const validation = (
  req: express.Request,
  res: express.Response,
  next: () => void
): void => {
  const errors: string[] = [];

  // validate name
  if (!(req.query.name as string).replace(' ', '')) {
    errors.push('Please enter valid name');
  } else {
    // check image with selected name exists
    const imgUrl = path.join(__dirname, `../images/${req.query.name}.jpg`);
    try {
      fs.accessSync(imgUrl, fs.constants.R_OK);
    } catch (err) {
      console.log(imgUrl)
      errors.push(`Image with name '${req.query.name}' not exists`);
    }
  }
  //validate width
  if (!req.query.width || isNaN(Number(req.query.width))) {
    errors.push('Please enter valid Width');
  }
  // validate height
  if (!req.query.height || isNaN(Number(req.query.height))) {
    errors.push('Please enter valid Height');
  }

  if (errors.length > 0) res.status(400).send(errors);
  else next();
};

export default validation;
