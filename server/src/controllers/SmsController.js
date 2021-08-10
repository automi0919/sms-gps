
const LocationRequest = require('../models/request.model');
const Tickets = require('../models/tickets.model');
const wss = require('../services/socketServer');
const TWILIO_NUMBER = require('../config').TWILIO_PHONE_NUMBER;
async function sendRequest(req, res, next) {
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
          res.send({
            success: false
          });
        console.log('TwilioNumber: ', TWILIO_NUMBER);
        var siteUrl = req.protocol + '://' + req.get('host');
        var linkUrl = `${siteUrl}/display?id=${new_id}`;
        console.log('linkUrl: ', linkUrl);

        var msgTemplate = getMessageBody(name, msg, linkUrl);
        try {
          var result = await sendTwilioSMS(TWILIO_NUMBER, to, msgTemplate);
          res.send({
            success: result,
            data: msg
          });
        } catch (e) {
          next(e)
          res.send({
            success: false
          })
        }
      });
    }
  } catch (e) {
    next(e)
    res.send({
      success: false,
      error: "Unknown"
    });
  }
}

async function sendShareRequest(req, res, next) {
  try {
    var  from = req.body.from;
    const to = req.body.to;
    const name = req.body.name;
    const pos = req.body.pos;
    from = from.replace(/ /g, '');

    var siteUrl = req.protocol + '://' + req.get('host');
    var linkUrl = `${siteUrl}/display?lat=${pos.lat}&lng=${pos.lng}&what3words=${pos.what3words}&phonenumber=${from}`;

    var msgTemplate = getShareMessageBody(from, linkUrl);
    var result = await sendTwilioSMS(TWILIO_NUMBER, to, msgTemplate);
    console.log('send-my-pos', msgTemplate)
    console.log('send-my-pos', result)
    res.send({
      success: result,
    })
  } catch (e) {
    next(e)
    res.send({
      success: false,
      error: "Unknown"
    });
  }
}

async function sendLocation(req, res, next) {
  try {
    const pos = req.body.pos;
    const record_id = req.body.id;

    await LocationRequest.findById(record_id, async (err, result) => {
      if (!result) return;
      let socketID = result.socketID;
      let from = result.from_number
      let to = result.to_number

      from = from.replace(/ /g, '');
      console.log('requested socketID: ', socketID, pos);
      
      let msg = {
        approvedPos: pos,
        phonenumber: from,
        type: 'UPDATE_POS'
      }
      wss.sendToRequester(socketID, msg);

      var siteUrl = req.protocol + '://' + req.get('host');
      var linkUrl = `${siteUrl}/display?lat=${pos.lat}&lng=${pos.lng}&what3words=${pos.what3words}&phonenumber=${from}`;
      console.log('reply msg: ', linkUrl);``
      var msgTemplate = getShareMessageBody(to, linkUrl);
      try {
        var success = await sendTwilioSMS(TWILIO_NUMBER, from, msgTemplate);
        res.send({
          success,
          data: msgTemplate
        });
      } catch (e) {
        next(e);
        res.send({
          success: false
        })
      }
    });

    res.send({
      success: true,
      data: pos
    });
  } catch (e) {
    next(e);
    res.send({
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
    if (to) {
      to = to.replace(/\+/g, '');
      to = '+' + to;
    } else {
      return false;
    }
    if (from) {
      from = from.replace(/\+/g, '');
      from = '+' + from;
    } else {
      return false;
    }
    console.log('from: ', from)
    console.log('to: ', to)
    client.lookups.v1.phoneNumbers(to)
                 .fetch({type: ['carrier']})
                 .then(phone_number => {});
    let result = await client.messages.create({
      from: from,
      to: to,
      body: msg 
    }).then((message) => {
      return true;
    });
    return result;
  } catch (err) {
    return false;
  }

}


const getMessageBody = (name, msg, linkUrl) => {
  return (
    `YOUR SAFE LOCATE GPS LOCATION HAS BEEN REQUESTED BY ${name}
     ${msg}
    ${linkUrl}`
  );
}

const getShareMessageBody = (from, linkUrl) => {

  return (
    `${from} SHARED THEIR LOCATION.
    VIEW LOCATION LINK: ${linkUrl}`
  );
}

const sendContactUs = (req, res, next) => {
  try {
    const new_request = new Tickets(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.status(400).send({ success: false, error: true, message: 'Please provide all required field' });
    } else {
      Tickets.create(new_request, async function (err, new_id) {
        res.send({
          success: err ? false : true,
          error: err
        });
      });
    }
  } catch (e) {
    next(e);
    res.send({
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
