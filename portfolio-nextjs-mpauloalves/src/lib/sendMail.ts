// Use este arquivo para integrar com SendGrid ou outro provider.
// Exemplo com @sendgrid/mail:
//
// import sgMail from '@sendgrid/mail'
// sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
// export async function sendMail({to, subject, text}:{to:string, subject:string, text:string}){
//   await sgMail.send({to, from: process.env.CONTACT_EMAIL!, subject, text})
// }

export async function sendMail(){
  throw new Error('Implement sendMail with your provider')
}
