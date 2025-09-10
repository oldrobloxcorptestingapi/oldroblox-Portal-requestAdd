await transporter.sendMail({
  from: '"OldrobloxCorp" <no-reply@oldrobloxcorpdataconsole.work.gd>',
  to: recipients.join(","),
  subject: "License Request Confirmation", // comma here
  text: message,                           // use `text`, not `message`
  html: `
    <div style="background-color:#dfe2e5; padding:20px; font-family:Arial, sans-serif;">
      <div style="max-width:700px; margin:auto; background:#fff; border-radius:8px; padding:40px; color:#333; line-height:1.6;">
        
        <!-- Logo -->
        <a href="https://oldrobloxcorpdatabaseplusxr-14932265.codehs.me/" target="_blank">
          <img src="https://oldrobloxcorpdatabaseplusxr-14932265.codehs.me/oldroblox.png" alt="Oldroblox Logo" style="max-width:190px;">
        </a>

        <!-- Message Body -->
        <p>Hi there,</p>

        <p>Thank You for contacting us.<br>
        We’ll review your request and see if you can get a License.<br>
        Until then, please wait for a message from our team.<br>
        Then you will know if you got a License, thank you.<br>
        This message is automated, so please do not reply unless an employee emails you.</p>

        <p>For assistance in the future, please make sure to contact us here: 
          <a href="https://oldrobloxcorpdatabaseplusxr-14932265.codehs.me/support" style="color:#1155cc;">support team</a>
        </p>
        
        <p>Sincerely,<br>
        The Oldroblox Portal Team<br>
        OldrobloxCorp</p>

        <!-- Footer Logo -->
        <a href="https://oldrobloxcorpdatabaseplusxr-14932265.codehs.me/" target="_blank">
          <img src="https://oldrobloxcorpdatabaseplusxr-14932265.codehs.me/oldroblox.png" alt="Oldroblox Logo" style="max-width:140px;">
        </a>
      </div>
    </div>`
});
