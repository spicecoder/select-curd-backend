const Express = require('express');
const router = Express.Router();
const UserAnchor = require('../model/NewAnchor');
const ObjectId = require('mongodb').ObjectID;

router.post('/post-user-anchor', async (req, res) => {
  const data = req.body;
  const newUserAnchor = new UserAnchor({
    user_anchor: req.body.user_anchor,
  });
  newUserAnchor
    .save()
    .then(() => {
      console.log('user anchor saved succesfully');
      res.send({msg: 'sucessfully saved'});
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/get-user-anchor', (req, res) => {
  UserAnchor.find().then((data) => {
    res.send(data);
  });
});

router.delete('/delete', async (req, res) => {
  const data = req.body;

  var id = ObjectId(data.id);
  if (data) {
    UserAnchor.findByIdAndDelete({_id: id}, function (err, response) {
      if (err) {
        console.log(err);
      } else {
        console.log(response);
        res.send({msg: 'delete successfully'});
      }
    });
  }
});

router.put('/update', (req, res) => {
  const data = req.body;
  var id = ObjectId(data.id);
  UserAnchor.findByIdAndUpdate(id, {user_anchor: data.data})
    .then((response) => res.json({data: response}))
    .catch((err) =>
      res.status(400).json({err: 'Unable to update the Database'})
    );
});

module.exports = router;
