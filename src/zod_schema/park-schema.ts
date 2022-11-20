import { z, TypeOf } from 'zod';


export const parkSchema = z.object({
    body: z.object({
        id: z
        .string ({ required_error: 'ID is required !' })
        .min(2, 'Your id must be more than 2 characters'),
        name: z
        .string({required_error: 'name is required !'})
        .min(4, 'Your name must be more than 2 characters'),
        type: z
        .enum(['rollercoaster', 'thriller', 'water'], 
        { required_error: 'type of ride is required !' }),
        ticket: z
        .number({required_error: 'Ticket number is required !'}),
        price: z
        .number({required_error: 'Price is required !'}),
    }),
});

export type parkSchemaType = TypeOf<typeof parkSchema>['body'];