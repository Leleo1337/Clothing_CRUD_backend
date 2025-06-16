declare global {
   namespace Express {
      interface Request {
         user?: {
            userID: string;
            userData: {
               name: string;
               email: string;
            };
         };
      }
   }
}

export {}