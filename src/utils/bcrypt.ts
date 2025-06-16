import bcrypt from "bcrypt";

export async function hashValue(val: string, saltRolls?: number) {
   const rounds = saltRolls || 10;
   return bcrypt.hash(val, rounds);
}

export async function compareValue(val: string, hashedVal: string) {
   return await bcrypt.compare(val, hashedVal)
}