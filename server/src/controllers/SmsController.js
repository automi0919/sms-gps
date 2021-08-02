
const LocationRequest = require('../models/request.model');
const Tickets = require('../models/tickets.model');
const wss = require('../services/socketServer');

async function sendRequest(req, res) {
  try {
    const from = req.body.from;
    const to = req.body.to;
    const msg = req.body.msg;
    const name = req.body.name;
    const socketID = req.body.socketID;

    const new_request = new LocationRequest(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.status(400).send({success:false, error: true, message: 'Please provide all required field' });
    } else {
      LocationRequest.create(new_request, async function (err, new_id) {
        if (err)
          res.json({
            success: false
          });

        var siteUrl = req.protocol + '://' + req.get('host');
        var linkUrl = `${siteUrl}/display?id=${new_id}`;
        console.log('linkUrl: ', linkUrl);

        var msgTemplate = getMessageBody(name, msg, linkUrl);
        try {
          var result = await sendTwilioSMS(from, to, msgTemplate);
          res.json({
            success: result,
            data: msg
          });
        } catch (e) {
          res.json({
            success: false
          })
        }
      });
    }
  } catch (e) {
    console.log(e);
    res.json({
      success: false,
      error: "Unknown"
    });
  }
}

async function sendShareRequest(req, res) {
  try {
    const from = req.body.from;
    const to = req.body.to;
    const name = req.body.name;
    const pos = req.body.pos;

    var siteUrl = req.protocol + '://' + req.get('host');
    var linkUrl = `${siteUrl}/display?lat=${pos.lat}&lng=${pos.lng}&what3words=${pos.what3words}`;

    var msgTemplate = getShareMessageBody(from, linkUrl);
    var result = await sendTwilioSMS(from, to, msgTemplate);
    console.log('send-my-pos', msgTemplate)
    console.log('send-my-pos', result)
    res.json({
      success: result,
    })
  } catch (e) {
    console.log(e);
    res.json({
      success: false,
      error: "Unknown"
    });
  }
}

async function sendLocation(req, res) {
  try {
    const pos = req.body.pos;
    const record_id = req.body.id;

    await LocationRequest.findById(record_id, (err, result) => {
      if (!result) return;
      let socketID = result.socketID;
      pos.type = 'UPDATE_POS';
      console.log(pos)
      wss.sendToRequester(socketID, pos);
      return result.socketID;
    });

    res.json({
      success: true,
      data: pos
    });
  } catch (e) {
    console.log(e);
    res.json({
      success: false,
      data: e
    })
  }
}

const sendTwilioSMS = async (from, to, msg) => {
  const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );
  try {
    console.log('from: ', from)
    console.log('to: ', to)
    let result = await client.messages.create({
      from: from,
      to: to,
      // from: '+19 293 343323',
      // to: '+61435210212 ',
      body: msg
    }).then((message) => {
      return true;
    });
    console.log('result: ', result);
    return result;
  } catch (err) {
    return false;
  }

}


const getMessageBody = (name, msg, linkUrl) => {
  return (
    `Your GPS location has been requested by ${name} \n 
     ${msg} \n
    To share your location click the link below: ${linkUrl}`
  );
}

const getShareMessageBody = (from, linkUrl) => {

  return (
    `${from} shared their location. \n
    -View location link: ${linkUrl} \n
   `
  );
}

const sendContactUs = (req, res) => {
  try {
    const new_request = new Tickets(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.status(400).send({ success: false, error: true, message: 'Please provide all required field' });
    } else {
      Tickets.create(new_request, async function (err, new_id) {
        res.json({
          success: err ? false : true,
          error: err
        });
      });
    }
  } catch (e) {
    console.log(e);
    res.json({
      success: false,
      error: "Unknown"
    });
  }
}
module.exports = {
  sendRequest,
  sendLocation,
  sendShareRequest,
  sendContactUs
};
