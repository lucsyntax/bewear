import { uuid, z } from "zod";

export const removeProductFromCartSchema = z.object({
  cartItemId: uuid(),
});
