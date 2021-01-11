

const express = require('express');
 const router = express.Router();

 const items = [];
 let id = 1;


 router.get("/items", (req, res) => {
  return res.json(items);
 });

 router.get("/items/:id", (req, res) => {
	const user = items.find(value => value.id === Number(req.params.id));
 return res.json(user)
 });

 router.post("/items", (req, res) => {
 	items.push({
		name: req.body.name, 
		price: req.body.price,
		id: ++id
 	});
	res.json({
		message: "created"
	});
});

 router.patch("/items/:id", (req, res) => {
	const user = items.find(value => value.id === Number(req.params.id));
	user.name = req.body.name;
	return res.json({
		message: "updated"
	});
});
	
 router.delete("/items/:id", (req, res) => {
	const userIndex = items.findIndex(value => value.id === Number(req.params.id))
	items.splice(userIndex,1)
	return res.json({
			message: "record deleted"
		})
 });
		
 module.exports = router
	

