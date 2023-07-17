// pages/api/jwt.ts

import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        
        res.status(200).json({ pem: '' })        
    } catch (error: any) {
        res.status(500).json({ error: error })
    }

}