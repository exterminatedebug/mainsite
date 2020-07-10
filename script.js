function onLoad() {
  //Called when the index.html link to script.js loads

  //screenshot
  var uploader = document.getElementById('screenshot');
}

function submitContactForm() {
  //screenshot
  var uploader = document.getElementById('screenshot');
  var file = uploader.files[0];

  if (file) {
  alert('Uploading file ' + file.name);
  console.log(file);
  console.log(file.name);
  console.log('exermainete');

  var filename = new Date() + '-' + file.name;
  var storageRef = firebase.storage().ref('screenshots/' + filename);

  //upload to firebase

  var task = storageRef.put(file);

  //notify when uploaded and submit form
  //also, logs any errors

  task.on('state_changed',

    function progress(snapshot) {

    },
  
    function error(err) {
      console.log(err);
    },

    function complete() {
      alert('Upload complete. \nSubmitting form...');
      submitWithImage()
    }

  );
  } else {
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var body = document.getElementById('body').value
  var request = new XMLHttpRequest();

  request.open("POST", "https://discord.com/api/webhooks/725139598216265768/oiB_P-kvKtfeAfKnJarxRhvc3oMCSaq3yGm7O5Qm5yVpQfbOq5nPqVQWzGBeBcwh73ff");

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
  "embeds": [
    {
      "title": "New contact form response!",
      "color": 11947341,
      "fields": [
        {
          "name": "Name",
          "value": name
        },
        {
          "name": "Email",
          "value": email
        },
        {
          "name": "Message",
          "value": body
        }
      ]
    }
  ],
  "username": "Form Response"
}

  request.send(JSON.stringify(params));

  document.getElementById('body').value = "";

  alert("Your message has been sent. We will contact you soon.");
}
}

function submitWithImage() {
  alert('at least the function works...')

  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var body = document.getElementById('body').value
  var request = new XMLHttpRequest();

  request.open("POST", "https://discord.com/api/webhooks/725139598216265768/oiB_P-kvKtfeAfKnJarxRhvc3oMCSaq3yGm7O5Qm5yVpQfbOq5nPqVQWzGBeBcwh73ff");

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
  "embeds": [
    {
      "title": "New contact form response!",
      "color": 11947341,
      "fields": [
        {
          "name": "Name",
          "value": name
        },
        {
          "name": "Email",
          "value": email
        },
        {
          "name": "Message",
          "value": body
        }
      ]
    }
  ],
  "username": "Form Responses (with image)"
}

  request.send(JSON.stringify(params));

  document.getElementById('body').value = "";

  alert("Your message has been sent. We will contact you soon.");
}