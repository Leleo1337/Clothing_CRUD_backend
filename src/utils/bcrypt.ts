import bcrypt from "bcrypt";
import BadRequest from "errors/badRequest";

export async function hashValue(val: string, saltRolls: number) {
   const rounds = saltRolls || 10;
   return bcrypt.hash(val, rounds);
}

export async function compareValue(val: string, hashedVal: string) {
   const matches = await bcrypt.compare(val, hashedVal);

   if (!matches) {
      throw new BadRequest("Invalid password");
   }

   return true;
}
