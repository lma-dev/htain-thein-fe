import { z } from 'zod';
import { messageSchema } from '../../../schema/messageSchema';

export type MessageSchemaType= z.infer<typeof messageSchema>;