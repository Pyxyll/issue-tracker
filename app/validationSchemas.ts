import {z} from 'zod'

export const createIssueSchema = z.object({
    title: z.string().min(1, 'Title Is Required').max(255),
    description: z.string().min(1, 'Description Is Required')
});