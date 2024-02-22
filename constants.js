import env from "dotenv";
env.config();

export const BASE_URL = "https://www.freecodecamp.org";
export const API_BASE_URL = "https://api.freecodecamp.org";
export const cookieChecker =
  /^[a-z]+[=].+; __stripe_mid=.+; __stripe_sid=.+; _csrf=.+; csrf_token=.+; jwt_access_token=.+\..+\..+$/;
export const coursePathChecker = /^[a-z]+([a-z0-9-_]+[a-z]+)+\.json$/;
// all cookie
const connectSid = "connect.sid=s%3A4H5VmSMkLLxoW6L6mVAT9kvo60lWHKzK.6CT5BmSh%2Bmvjr0cWKD1TO6DnIGXcrZgjoy4mxse%2FRfU";
// const __stripe_mid = "";
// const gbuuid = "";
// const csrf_token = "csrf_token=dARjR3NU-20TKbHTHejz3e5XdeiDQChRwqa4";
// const _csrf = "_csrf=ybZ1fdUmJ789C5_QtCUoe-PF";
// const _stripe_sid = "";

// const connectSid = "connect.sid=s%3AtAYMwxLO63TDgWYiLoa5Bq31Hm7Jnakk.w06CTM5a35ESVgHsr6lV0ket4ygYsomgifvbulnMm6o";
const __stripe_mid = "";
const gbuuid = "";
const csrf_token = "csrf_token=k0IAl5bD-q02-wPeEaq2RdEyz1DJRR-dDR6s";
const _csrf = "_csrf=aFOIFMYxPvMcSzaRoZb5ZET4";
const _stripe_sid = "";
const jwt_access_token = "jwt_access_token=s%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6eyJpZCI6InBUSU5aVHY1d0dZRGdFa1Z1VXdJVnJhdUsxbkxSODdUQ3ZKODZYc0JSUXZXRlUxb1JUbkRSa0hvM1NDQzRvdEoiLCJ0dGwiOjc3NzYwMDAwMDAwLCJjcmVhdGVkIjoiMjAyNC0wMi0yMlQwODowMjoxOC4yNDlaIiwidXNlcklkIjoiNjVkNGZiZTRhMDY0Nzg0MzM5NzJiMjE2In0sImlhdCI6MTcwODU4ODkzOH0.-fXt2l_hZkSRdxXQdZD0w1LjgCT2YJqqUM6bg7iJU7o.VwCr0LSvkEj2ebZH3vuf%2Fp%2FJNDQ4C1AOGsVVpt5Anas";
export const workingDemoCookie = "connect.sid=s%3A4H5VmSMkLLxoW6L6mVAT9kvo60lWHKzK.6CT5BmSh%2Bmvjr0cWKD1TO6DnIGXcrZgjoy4mxse%2FRfU; _csrf=ybZ1fdUmJ789C5_QtCUoe-PF; csrf_token=dARjR3NU-20TKbHTHejz3e5XdeiDQChRwqa4; jwt_access_token=s%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6eyJpZCI6IlFXUVN3VXVZcG9Ib1dqNnVOYkZQelpEZnREclpCVVh5WTFwcE9tOUVadlZiNE5vZHV3eU9TVkpqcnZlZkZyTksiLCJ0dGwiOjc3NzYwMDAwMDAwLCJjcmVhdGVkIjoiMjAyNC0wMi0yMFQxOToyMjoxMi43ODNaIiwidXNlcklkIjoiNjVkNGZiZTRhMDY0Nzg0MzM5NzJiMjE2In0sImlhdCI6MTcwODQ1NjkzMn0.HzfIYr3QLj-7vUghyypKcCx-IKb24Q99RGPEhjZMmBQ.wMmY9142%2FdlClx2qLLJkZa3P9qYdn2uDOth7B7iHCrE";
export const demoCookie = `${connectSid}; ${gbuuid}; ${__stripe_mid}; ${jwt_access_token}; ${_csrf}; ${csrf_token}; ${_stripe_sid}`;
// export const demoChallengeCompleteCookie = `${connectSid}; ${_csrf}; ${csrf_token}; ${jwt_access_token}`
export const demoChallengeCompleteCookie = "connect.sid=s%3AtAYMwxLO63TDgWYiLoa5Bq31Hm7Jnakk.w06CTM5a35ESVgHsr6lV0ket4ygYsomgifvbulnMm6o; _csrf=aFOIFMYxPvMcSzaRoZb5ZET4; csrf_token=k0IAl5bD-q02-wPeEaq2RdEyz1DJRR-dDR6s; jwt_access_token=s%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6eyJpZCI6InBUSU5aVHY1d0dZRGdFa1Z1VXdJVnJhdUsxbkxSODdUQ3ZKODZYc0JSUXZXRlUxb1JUbkRSa0hvM1NDQzRvdEoiLCJ0dGwiOjc3NzYwMDAwMDAwLCJjcmVhdGVkIjoiMjAyNC0wMi0yMlQwODowMjoxOC4yNDlaIiwidXNlcklkIjoiNjVkNGZiZTRhMDY0Nzg0MzM5NzJiMjE2In0sImlhdCI6MTcwODU4ODkzOH0.-fXt2l_hZkSRdxXQdZD0w1LjgCT2YJqqUM6bg7iJU7o.VwCr0LSvkEj2ebZH3vuf%2Fp%2FJNDQ4C1AOGsVVpt5Anas"
export const privateKey = process.env.JWT_PRIVATE_KEY;
export const algorithm = process.env.JWT_ALGORITHM;
export const dev_pass_key = process.env.DEV_PASS_KEY;
export const dev_cookie = process.env.DEV_COOKIE;
