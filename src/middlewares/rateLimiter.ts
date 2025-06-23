import rateLimit from 'express-rate-limit';

export const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Muitas requisições deste IP, por favor tente novamente após 15 minutos.'
});

export const authLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5, 
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Tentativas de login/registro excedidas, por favor tente novamente após 1 minuto.'
});
