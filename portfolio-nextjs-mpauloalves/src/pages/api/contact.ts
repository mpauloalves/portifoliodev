import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})
  const { name, email, message } = req.body
  if(!name || !email || !message) return res.status(400).json({error:'Missing fields'})

  try{
    // Integre com seu provider (SendGrid / Mailgun) aqui usando variáveis de ambiente
    console.log('Contato recebido:', {name, email, message})
    return res.status(200).json({ok:true})
  }catch(err){
    console.error(err)
    return res.status(500).json({error:'Internal error'})
  }
}
