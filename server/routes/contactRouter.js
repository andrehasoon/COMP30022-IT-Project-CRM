const express = require('express');

const contactRouter = express.Router();

contactRouter.get('/', (req, res)=> {
    res.send('contactRouter is working');
});

// export default router;
// export the router
module.exports = contactRouter;
