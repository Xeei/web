// pages/api/your_route.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import writeLog from '@/utils/writeLog'
import readLog from '@/utils/readLog'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    let url = req.url ? req.url.split('?')[0] : '';
    if(req.query.action === 'readLog') {
        
        let log = readLog(url as string)
        return res.status(200).json(log)
    }

    try {
        writeLog(
            `Action completed successfully | ${req.socket.remoteFamily} ${req.socket.remoteAddress} ${req.socket.remotePort} | ${req.url} | ${req.method}`,
            `${url}`
        )
        return res.status(200).json({ success: true })
    } catch (err: any) {
        writeLog(
            `Error occurred: ${err.message} | ${req.socket.remoteFamily} ${req.socket.remoteAddress} ${req.socket.remotePort} | ${req.url} | ${req.method}`,
            `${url}`
        )
        return res.status(500).json({ success: false, message: err.message })
    }
}

export default handler
