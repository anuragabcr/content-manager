import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const resource = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const prisma = new PrismaClient()
    if(req.method === 'GET') {
        const data = await prisma.resource.findFirst({
            where: {
                id: parseInt(id)
            }
        })
        res.send(data)
    }
    else if(req.method === 'PUT') {
        const body = req.body
        const data = await prisma.resource.update({
            where: {
                id: parseInt(id)
            },
            data: {
                title: body.title,
                description: body.description,
                priority: parseInt(body.priority),
                timeToFinish: parseInt(body.timeToFinish),
                status: body.status,
            }
        })
        res.send(data)
    }
}

export default resource