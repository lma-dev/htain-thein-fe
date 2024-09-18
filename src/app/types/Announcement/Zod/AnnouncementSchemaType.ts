import { z } from 'zod';
import { announcementSchema } from '../../../schema/announcementSchema';

export type AnnouncementSchemaType= z.infer<typeof announcementSchema>;