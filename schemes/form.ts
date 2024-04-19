import { z } from "zod";

// create a object of type string which has a nema with min lenght of e4 and description willl be optional
export const formSchema = z.object({
    name: z.string().min(4),
    description: z.string().optional(),
  });
  
  // forSchemeType is inferred using TypeScript and Zod, used for building validation scheme.
  // Zod library is used to creata validations schemes in data.
  // z.infer is the Typerscript type from a zod scheme
export type formSchemaType = z.infer<typeof formSchema>;
  