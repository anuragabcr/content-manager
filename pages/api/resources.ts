import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const resources = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient()
    if(req.method === 'GET') {
        const data = await prisma.resource.findMany()
        res.send(data)
    }
    else if(req.method === 'POST') {
        const body = (req.body)
        const new_res = await prisma.resource.create({
            data: {
                title: body.title,
                description: body.description,
                priority: parseInt(body.priority),
                timeToFinish: parseInt(body.timeToFinish),
                status: body.status,
            }
        })
        res.send(new_res)
    }
}

export default resources